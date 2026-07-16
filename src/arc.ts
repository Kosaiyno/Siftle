import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import { Contract, JsonRpcProvider, formatUnits, parseUnits, Wallet } from "ethers";

export const ARC_TESTNET_CHAIN_ID = 5042002;
export const ARC_TESTNET_USDC =
  (window as any).ARC_TESTNET_USDC_ADDRESS ||
  "0x3600000000000000000000000000000000000000";
export const ARC_TESTNET_EXPLORER = "https://testnet.arcscan.app";
export const ARC_TESTNET_FAUCET = "https://faucet.circle.com/";
export const ARC_TESTNET_RPC_URL = (() => {
  const url = (window as any).ARC_TESTNET_RPC_URL;
  if (!url || url === "https://rpc.testnet.arc.network") {
    return "https://5042002.rpc.thirdweb.com";
  }
  return url;
})();

let apiBase = ((window as any).SIFTLE_API_BASE || "").replace(/\/$/, "");
if (!apiBase && typeof window !== "undefined") {
  const hostname = window.location.hostname.toLowerCase();
  if (hostname === "siftle.xyz" || hostname.endsWith(".siftle.xyz") || hostname.endsWith("vercel.app")) {
    apiBase = "https://siftle.onrender.com";
  }
}
const apiUrl = (path: string): string => `${apiBase}${path}`;
const BACKEND_WALLET_MODE_KEY = "siftle_backend_wallet_mode";
const BACKEND_WALLET_EMAIL_KEY = "siftle_backend_wallet_email";
const BACKEND_WALLET_SESSION_KEY = "siftle_backend_wallet_session_token";
const BACKEND_WALLET_MIGRATION_NOTICE_KEY = "siftle_backend_wallet_migration_notice";
let backendWalletModeConfigPromise: Promise<boolean> | null = null;

const isBackendWalletModeEnabled = async (): Promise<boolean> => {
  if (!backendWalletModeConfigPromise) {
    backendWalletModeConfigPromise = fetch(apiUrl("/api/backend-wallet/config"))
      .then(async (response) => {
        if (!response.ok) return false;
        const payload = await response.json();
        return Boolean(payload?.enabled);
      })
      .catch(() => false);
  }
  return backendWalletModeConfigPromise;
};

const BALANCE_OF_SELECTOR = "0x70a08231";
const publicProvider = new JsonRpcProvider(ARC_TESTNET_RPC_URL, ARC_TESTNET_CHAIN_ID);

const ERC20_ABI = [
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)"
];

const SIFTLE_MARKET_ABI = [
  "function buy(bool yes, uint256 amount) external",
  "function sell(bool yes, uint256 amount) external",
  "function redeem() external",
  "function yesShares(address owner) view returns (uint256)",
  "function noShares(address owner) view returns (uint256)",
  "function totalYesShares() view returns (uint256)",
  "function totalNoShares() view returns (uint256)",
  "function impliedYesProbability() view returns (uint256)",
  "function outcome() view returns (uint8)",
  "function closesAt() view returns (uint64)"
];

const LOCAL_TEST_MARKET_ADDRESS = "0x0000000000000000000000000000000000000101";
const isLocalTestMarket = (marketAddress: string): boolean =>
  /^0x0{36}01[0-9a-f]{2}$/i.test(marketAddress) ||
  marketAddress.toLowerCase() === LOCAL_TEST_MARKET_ADDRESS.toLowerCase();

export interface ArcMarketSnapshot {
  yesPriceCents: number;
  noPriceCents: number;
  volumeUsdc: number;
  yesSharesUsdc: number;
  noSharesUsdc: number;
  outcome: 0 | 1 | 2 | 3;
  closesAtUnix?: number;
  traderCount?: number;
  optionPools?: Record<string, number>;
  resolvedOptionId?: string | null;
}

export interface ArcMarketPosition {
  yesSharesUsdc: number;
  noSharesUsdc: number;
  optionId?: string | null;
  optionLabel?: string | null;
  optionSharesUsdc?: number;
  claimedAt?: string | null;
  claimedAmountUsdc?: number;
  claimTxHash?: string | null;
  autoClaimed?: boolean;
}

export interface ArcClaimResult {
  amountUsdc: number;
  won: boolean;
}

export interface ArcMarketState {
  position: ArcMarketPosition;
  snapshot: ArcMarketSnapshot;
}

const requestRpc = async <T>(method: string, params: unknown[]): Promise<T> => {
  const response = await fetch(ARC_TESTNET_RPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: Date.now(), method, params })
  });
  if (!response.ok) throw new Error(`Arc RPC request failed with ${response.status}`);

  const payload = (await response.json()) as { result?: T; error?: { message?: string } };
  if (payload.error) throw new Error(payload.error.message || "Arc RPC request failed");
  if (payload.result === undefined) throw new Error("Arc RPC returned no result");
  return payload.result;
};

// Wallet connection state
let mockWallet: Wallet | null = null;
let activeUserToken: string | null = null;
let activeEncryptionKey: string | null = null;
let activeWalletAddress: string | null = null;
let activeWalletId: string | null = null;
let activeEmail: string | null = null;
let isMockSession = false;
let isBackendWalletMode = false;
let activeBackendWalletSessionToken: string | null = null;

const walletListeners = new Set<(address: string | null) => void>();

const triggerWalletListeners = (address: string | null) => {
  walletListeners.forEach((listener) => {
    try {
      listener(address);
    } catch (err) {
      console.error("Wallet listener failed:", err);
    }
  });
};

// Circle Web SDK
let circleSdk: W3SSdk | null = null;

const getCircleSdk = (): W3SSdk => {
  if (!circleSdk) {
    const appId = (window as any).CIRCLE_APP_ID || "b32650461103ab45fd76f36439ad5744:1380068ffcafecdeccf9220d654a7c62";
    circleSdk = new W3SSdk({
      appSettings: { appId }
    });
    // Set device ID to initialize session
    circleSdk.getDeviceId();
  }
  return circleSdk;
};

// Load session from localStorage on startup
const loadSession = () => {
  isBackendWalletMode = localStorage.getItem(BACKEND_WALLET_MODE_KEY) === "true";
  if (isBackendWalletMode) {
    activeEmail = localStorage.getItem(BACKEND_WALLET_EMAIL_KEY);
    activeBackendWalletSessionToken = localStorage.getItem(BACKEND_WALLET_SESSION_KEY);
    activeWalletAddress = localStorage.getItem("siftle_circle_wallet_address");
    activeWalletId = null;
    activeUserToken = null;
    activeEncryptionKey = null;
    isMockSession = false;
    return;
  }

  activeEmail = localStorage.getItem("siftle_circle_email");
  activeUserToken = localStorage.getItem("siftle_circle_user_token");
  activeEncryptionKey = localStorage.getItem("siftle_circle_encryption_key");
  activeWalletAddress = localStorage.getItem("siftle_circle_wallet_address");
  activeWalletId = localStorage.getItem("siftle_circle_wallet_id");
  isMockSession = localStorage.getItem("siftle_circle_is_mock") === "true";

  if (isMockSession && activeEmail) {
    let storedKey = localStorage.getItem(`siftle_mock_key_${activeEmail}`);
    if (!storedKey) {
      const randomWallet = Wallet.createRandom();
      storedKey = randomWallet.privateKey;
      localStorage.setItem(`siftle_mock_key_${activeEmail}`, storedKey);
    }
    mockWallet = new Wallet(storedKey, publicProvider);
    activeWalletAddress = mockWallet.address;
  }
};

loadSession();

const injectStyles = () => {
  if (document.getElementById("circle-auth-styles")) return;
  const style = document.createElement("style");
  style.id = "circle-auth-styles";
  style.textContent = `
    .circle-auth-overlay {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(8, 8, 12, 0.82);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      padding: 20px;
      animation: circleFadeIn 0.3s ease-out;
    }
    .circle-auth-card {
      position: relative;
      width: 100%;
      max-width: 440px;
      background: rgba(20, 20, 28, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 40px 32px;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
      font-family: 'Inter', -apple-system, sans-serif;
      color: #cbd5e1;
      text-align: center;
      backdrop-filter: blur(20px);
    }
    .circle-auth-close {
      position: absolute !important;
      top: 16px !important;
      right: 16px !important;
      width: 32px !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      background: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      border-radius: 50% !important;
      color: #94a3b8 !important;
      font-size: 20px !important;
      cursor: pointer !important;
      line-height: 1 !important;
      transition: all 0.2s ease !important;
      box-shadow: none !important;
    }
    .circle-auth-close:hover {
      background: rgba(255, 255, 255, 0.1) !important;
      border-color: rgba(255, 255, 255, 0.2) !important;
      color: #f8fafc !important;
      transform: scale(1.05) !important;
    }
    .circle-auth-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
    }
    .circle-auth-logo img {
      width: 56px !important;
      height: 56px !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.25) !important;
      margin-bottom: 12px !important;
    }
    .circle-auth-logo h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #f8fafc;
      margin: 0;
    }
    .circle-auth-subtitle {
      font-size: 14px;
      color: #94a3b8;
      margin: 0 0 32px 0;
      line-height: 1.5;
    }
    .circle-auth-step {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .circle-auth-field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      width: 100%;
    }
    .circle-auth-field label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
    }
    .circle-auth-field input {
      width: 100%;
      height: 48px;
      padding: 0 16px;
      border-radius: 12px;
      background: rgba(10, 10, 15, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #f8fafc;
      font-size: 16px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
    }
    .circle-auth-field input:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    }
    .circle-auth-btn {
      width: 100% !important;
      height: 48px !important;
      background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
      border: none !important;
      border-radius: 12px !important;
      color: #ffffff !important;
      font-size: 15px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25) !important;
    }
    .circle-auth-btn:hover {
      opacity: 0.95 !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 6px 16px rgba(59, 130, 246, 0.35) !important;
    }
    .circle-auth-btn:active {
      transform: scale(0.98) !important;
    }
    .circle-auth-btn:disabled {
      opacity: 0.6 !important;
      cursor: not-allowed !important;
    }
    .circle-auth-back {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: underline;
      margin-top: 8px;
      transition: color 0.2s;
    }
    .circle-auth-back:hover {
      color: #f8fafc;
    }
    .circle-auth-info {
      font-size: 14px;
      line-height: 1.6;
      color: #94a3b8;
      margin: 0 0 8px 0;
    }
    .circle-auth-status {
      margin-top: 20px;
      font-size: 13px;
      line-height: 1.5;
      padding: 10px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
    }
    @keyframes circleFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    [data-theme="light"] .circle-auth-card {
      background: rgba(255, 255, 255, 0.95) !important;
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      color: #334155 !important;
      box-shadow: 0 24px 48px rgba(16, 21, 34, 0.15) !important;
    }
    [data-theme="light"] .circle-auth-logo h2 {
      color: #0f172a !important;
    }
    [data-theme="light"] .circle-auth-subtitle {
      color: #64748b !important;
    }
    [data-theme="light"] .circle-auth-field label {
      color: #64748b !important;
    }
    [data-theme="light"] .circle-auth-field input {
      background: rgba(241, 245, 249, 0.8) !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      color: #0f172a !important;
    }
    [data-theme="light"] .circle-auth-close {
      color: #64748b !important;
    }
    [data-theme="light"] .circle-auth-close:hover {
      color: #0f172a !important;
    }
    [data-theme="light"] .circle-auth-back {
      color: #64748b !important;
    }
    [data-theme="light"] .circle-auth-back:hover {
      color: #0f172a !important;
    }
    [data-theme="light"] .circle-auth-overlay {
      background: rgba(241, 245, 249, 0.6) !important;
    }
    [data-theme="light"] .circle-auth-onboarding {
      background: rgba(99, 102, 241, 0.04) !important;
      border: 1px dashed rgba(99, 102, 241, 0.2) !important;
    }
  `;
  document.head.appendChild(style);
};

export const connectArcWallet = async (): Promise<string> => {
  if (activeWalletAddress) {
    return activeWalletAddress;
  }

  if (await isBackendWalletModeEnabled()) {
    injectStyles();

    return new Promise((resolve, reject) => {
      const overlay = document.createElement("div");
      overlay.className = "circle-auth-overlay";
      overlay.innerHTML = `
        <div class="circle-auth-card">
          <button class="circle-auth-close" id="backendWalletClose" type="button">&times;</button>
          <div class="circle-auth-logo">
            <img src="./assets/siftle-logo-small.png" alt="Siftle logo" />
            <h2>Sign in to Siftle</h2>
          </div>
          <p class="circle-auth-subtitle">Confirm your email to receive a login verification code.</p>
          <div class="circle-auth-banner">
            <strong>Quick Start:</strong> Sign in with your email to receive a secure, auto-funded wallet containing 0.02 USDC. You can then unlock AI briefings instantly.
          </div>
          <!-- Step 1: Request Code -->
          <div id="backendWalletStepEmail" class="circle-auth-step">
            <div class="circle-auth-field">
              <label for="backendWalletEmail">Email Address</label>
              <input type="email" id="backendWalletEmail" placeholder="name@domain.com" required />
            </div>
            <details id="backendReferralDetails" style="text-align: left;">
              <summary style="cursor: pointer; color: #a5b4fc; font-size: 13px; font-weight: 650; list-style: none;">Have an invite code?</summary>
              <div class="circle-auth-field" style="margin-top: 10px;">
                <label for="backendReferralCode">Invite Code</label>
                <input type="text" id="backendReferralCode" placeholder="Optional" autocomplete="off" autocapitalize="characters" />
              </div>
            </details>
            <button id="backendWalletContinue" class="circle-auth-btn" type="button" style="margin-top: 16px;">Continue</button>
          </div>

          <!-- Step 2: Verify Code -->
          <div id="backendWalletStepCode" class="circle-auth-step" style="display: none;">
            <div class="circle-auth-field">
              <label for="backendWalletCode">6-Digit Verification Code</label>
              <input type="text" id="backendWalletCode" placeholder="000000" pattern="[0-9]{6}" maxlength="6" style="text-align: center; font-size: 1.5rem; letter-spacing: 0.2em; font-weight: 800;" required />
            </div>
            <p style="margin: 8px 0 16px; font-size: 0.82rem; color: #a5b4fc; cursor: pointer; text-align: left;" id="backendWalletBack">← Change email</p>
            <button id="backendWalletVerify" class="circle-auth-btn" type="button">Verify & Sign In</button>
          </div>

          <div id="backendWalletStatus" class="circle-auth-status" style="display: none;"></div>
        </div>
      `;

      document.body.appendChild(overlay);
      const closeBtn = overlay.querySelector("#backendWalletClose") as HTMLButtonElement;
      const continueBtn = overlay.querySelector("#backendWalletContinue") as HTMLButtonElement;
      const verifyBtn = overlay.querySelector("#backendWalletVerify") as HTMLButtonElement;
      const backBtn = overlay.querySelector("#backendWalletBack") as HTMLParagraphElement;
      const emailInput = overlay.querySelector("#backendWalletEmail") as HTMLInputElement;
      const codeInput = overlay.querySelector("#backendWalletCode") as HTMLInputElement;
      const referralDetails = overlay.querySelector("#backendReferralDetails") as HTMLDetailsElement;
      const referralInput = overlay.querySelector("#backendReferralCode") as HTMLInputElement;
      const statusDiv = overlay.querySelector("#backendWalletStatus") as HTMLDivElement;
      
      const stepEmailDiv = overlay.querySelector("#backendWalletStepEmail") as HTMLDivElement;
      const stepCodeDiv = overlay.querySelector("#backendWalletStepCode") as HTMLDivElement;

      const lastEmail = localStorage.getItem(BACKEND_WALLET_EMAIL_KEY) || localStorage.getItem("siftle_circle_last_email") || "";
      const pendingReferral = localStorage.getItem("siftle_pending_referral_code") || "";
      if (lastEmail) emailInput.value = lastEmail;
      if (pendingReferral) {
        referralInput.value = pendingReferral;
        referralDetails.open = true;
      }

      const showStatus = (message: string, isError = false) => {
        statusDiv.textContent = message;
        statusDiv.style.display = "block";
        statusDiv.style.color = isError ? "#ff4a4a" : "#cbd5e1";
      };

      closeBtn.addEventListener("click", () => {
        overlay.remove();
        reject(new Error("Login cancelled by user"));
      });

      referralInput.addEventListener("input", () => {
        referralInput.value = referralInput.value.replace(/[^a-z0-9]/gi, "").toUpperCase().slice(0, 16);
      });

      codeInput.addEventListener("input", () => {
        codeInput.value = codeInput.value.replace(/[^0-9]/g, "").slice(0, 6);
      });

      backBtn.addEventListener("click", () => {
        stepCodeDiv.style.display = "none";
        stepEmailDiv.style.display = "block";
        statusDiv.style.display = "none";
        continueBtn.disabled = false;
        continueBtn.textContent = "Continue";
      });

      continueBtn.addEventListener("click", async () => {
        const email = emailInput.value.trim();
        if (!email || !email.includes("@")) {
          showStatus("Please enter a valid email address.", true);
          return;
        }
        const referralCode = referralInput.value.replace(/[^a-z0-9]/gi, "").toUpperCase().slice(0, 16);
        if (referralCode) localStorage.setItem("siftle_pending_referral_code", referralCode);

        continueBtn.disabled = true;
        continueBtn.textContent = "Requesting code...";
        statusDiv.style.display = "none";

        try {
          const response = await fetch(apiUrl("/api/backend-wallet/auth/request-code"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
          });
          const payload = await response.json();
          if (!response.ok) throw new Error(payload.error || "Failed to request verification code");

          stepEmailDiv.style.display = "none";
          stepCodeDiv.style.display = "block";
          codeInput.focus();
          showStatus("We sent a 6-digit verification code. Please check your email (or terminal logs).", false);
        } catch (error) {
          showStatus(error instanceof Error ? error.message : "Failed to request code", true);
          continueBtn.disabled = false;
          continueBtn.textContent = "Continue";
        }
      });

      verifyBtn.addEventListener("click", async () => {
        const email = emailInput.value.trim();
        const code = codeInput.value.trim();
        if (code.length !== 6) {
          showStatus("Please enter a 6-digit code.", true);
          return;
        }

        verifyBtn.disabled = true;
        verifyBtn.textContent = "Signing in...";
        statusDiv.style.display = "none";

        try {
          const response = await fetch(apiUrl("/api/backend-wallet/auth"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, code })
          });
          const payload = await response.json();
          if (!response.ok) throw new Error(payload.error || "Failed to verify code");

          if (payload.migrationEnabled && payload.migrationPreview?.eligible && !payload.migration?.migrated) {
            showStatus("Restoring competition points from your previous wallet...");
            const migrationResponse = await fetch(apiUrl("/api/backend-wallet/migration/claim"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ sessionToken: payload.sessionToken })
            });
            const migrationPayload = await migrationResponse.json();
            if (!migrationResponse.ok) {
              throw new Error(migrationPayload.error || "Failed to restore competition points");
            }
            payload.migration = migrationPayload;
          }

          isBackendWalletMode = true;
          isMockSession = false;
          mockWallet = null;
          activeEmail = email;
          activeBackendWalletSessionToken = payload.sessionToken;
          activeWalletAddress = payload.walletAddress;
          activeWalletId = null;
          activeUserToken = null;
          activeEncryptionKey = null;

          localStorage.setItem(BACKEND_WALLET_MODE_KEY, "true");
          localStorage.setItem(BACKEND_WALLET_EMAIL_KEY, email);
          localStorage.setItem(BACKEND_WALLET_SESSION_KEY, payload.sessionToken);
          localStorage.setItem("siftle_circle_wallet_address", payload.walletAddress);
          localStorage.removeItem("siftle_circle_user_token");
          localStorage.removeItem("siftle_circle_encryption_key");
          localStorage.removeItem("siftle_circle_wallet_id");
          localStorage.removeItem("siftle_circle_is_mock");

          if (payload.migration?.migrated && Number(payload.migration.restoredPoints) > 0) {
            const restoredPoints = Number(payload.migration.restoredPoints) || 0;
            const legacyUsername = String(payload.migration.username || payload.migrationPreview?.legacyUsername || "").trim();
            const message = legacyUsername
              ? `${legacyUsername} restored with ${restoredPoints} pts`
              : `${restoredPoints} leaderboard pts restored`;
            localStorage.setItem(BACKEND_WALLET_MIGRATION_NOTICE_KEY, message);
          } else {
            localStorage.removeItem(BACKEND_WALLET_MIGRATION_NOTICE_KEY);
          }

          overlay.remove();
          triggerWalletListeners(activeWalletAddress);
          resolve(activeWalletAddress!);
        } catch (error) {
          showStatus(error instanceof Error ? error.message : "Failed to sign in", true);
          verifyBtn.disabled = false;
          verifyBtn.textContent = "Verify & Sign In";
        }
      });
    });
  }

  injectStyles();

  return new Promise((resolve, reject) => {
    // Create modern glassmorphic modal
    const overlay = document.createElement("div");
    overlay.className = "circle-auth-overlay";
    overlay.innerHTML = `
      <div class="circle-auth-card">
        <button class="circle-auth-close" id="circleAuthClose" type="button">&times;</button>
        <div class="circle-auth-logo">
          <img src="./assets/siftle-logo-small.png" alt="Siftle logo" />
          <h2>Sign In to Siftle</h2>
        </div>
        <p class="circle-auth-subtitle">No password needed. We send a 6-digit code to your email so you can manage predictions and trade.</p>
        
        <div id="circleAuthStepEmail" class="circle-auth-step">
          <div class="circle-auth-field">
            <label for="circleAuthEmail">Email Address</label>
            <input type="email" id="circleAuthEmail" placeholder="name@domain.com" required />
          </div>
          <details id="circleReferralDetails" style="text-align: left;">
            <summary style="cursor: pointer; color: #a5b4fc; font-size: 13px; font-weight: 650; list-style: none;">Have an invite code?</summary>
            <div class="circle-auth-field" style="margin-top: 10px;">
              <label for="circleReferralCode">Invite Code</label>
              <input type="text" id="circleReferralCode" placeholder="Optional" autocomplete="off" autocapitalize="characters" />
            </div>
          </details>
          <button id="circleAuthSendBtn" class="circle-auth-btn" type="button">Send Verification Code</button>
        </div>

        <div id="circleAuthStepOtp" class="circle-auth-step" style="display: none;">
          <div class="circle-auth-field">
            <label for="circleAuthOtp">6-Digit Verification Code</label>
            <input type="text" id="circleAuthOtp" placeholder="123456" maxlength="12" inputmode="numeric" autocomplete="one-time-code" />
          </div>
          <button id="circleAuthVerifyBtn" class="circle-auth-btn" type="button">Verify & Sign In</button>
          <p class="circle-auth-spam-note" style="font-size: 11px; color: #a5b4fc; margin: 12px 0; text-align: center; line-height: 1.4; opacity: 0.85;">
            Paste the 6 digits from your email. Spaces are okay. If you don't receive it, check <strong>Spam</strong> or <strong>Junk</strong>.
          </p>
          <button id="circleAuthBackBtn" class="circle-auth-back" type="button">Back</button>
        </div>

        <div id="circleAuthStepPin" class="circle-auth-step" style="display: none;">
          <p class="circle-auth-info">First time signing in? You will need to set up a secure wallet PIN to authorize trades.</p>
          <button id="circleAuthPinBtn" class="circle-auth-btn" type="button">Set Up Wallet PIN</button>
        </div>

        <div id="circleAuthStatus" class="circle-auth-status" style="display: none;"></div>
      </div>
    `;

    document.body.appendChild(overlay);

    const emailInput = overlay.querySelector("#circleAuthEmail") as HTMLInputElement;
    const referralDetails = overlay.querySelector("#circleReferralDetails") as HTMLDetailsElement;
    const referralInput = overlay.querySelector("#circleReferralCode") as HTMLInputElement;
    const otpInput = overlay.querySelector("#circleAuthOtp") as HTMLInputElement;
    const sendBtn = overlay.querySelector("#circleAuthSendBtn") as HTMLButtonElement;
    const verifyBtn = overlay.querySelector("#circleAuthVerifyBtn") as HTMLButtonElement;
    const backBtn = overlay.querySelector("#circleAuthBackBtn") as HTMLButtonElement;
    const pinBtn = overlay.querySelector("#circleAuthPinBtn") as HTMLButtonElement;
    const closeBtn = overlay.querySelector("#circleAuthClose") as HTMLButtonElement;
    const statusDiv = overlay.querySelector("#circleAuthStatus") as HTMLDivElement;

    const stepEmail = overlay.querySelector("#circleAuthStepEmail") as HTMLDivElement;
    const stepOtp = overlay.querySelector("#circleAuthStepOtp") as HTMLDivElement;
    const stepPin = overlay.querySelector("#circleAuthStepPin") as HTMLDivElement;

    let email = "";
    let userToken = "";
    let encryptionKey = "";
    let challengeId = "";
    const existingReferralCode = localStorage.getItem("siftle_pending_referral_code") || "";
    const lastEmail = localStorage.getItem("siftle_circle_last_email") || localStorage.getItem("siftle_circle_email") || "";
    if (lastEmail) emailInput.value = lastEmail;
    if (existingReferralCode) {
      referralInput.value = existingReferralCode;
      referralDetails.open = true;
    }

    const showStatus = (msg: string, isError = false) => {
      statusDiv.textContent = msg;
      statusDiv.style.display = "block";
      statusDiv.style.color = isError ? "#ff4a4a" : "#cbd5e1";
    };

    const hideStatus = () => {
      statusDiv.style.display = "none";
    };

    closeBtn.addEventListener("click", () => {
      overlay.remove();
      reject(new Error("Login cancelled by user"));
    });

    referralInput.addEventListener("input", () => {
      referralInput.value = referralInput.value.replace(/[^a-z0-9]/gi, "").toUpperCase().slice(0, 16);
    });

    otpInput.addEventListener("input", () => {
      const cleanOtp = otpInput.value.replace(/\D/g, "").slice(0, 6);
      if (cleanOtp.length === 6) otpInput.value = cleanOtp;
    });

    sendBtn.addEventListener("click", async () => {
      email = emailInput.value.trim();
      if (!email || !email.includes("@")) {
        showStatus("Please enter a valid email address.", true);
        return;
      }
      const referralCode = referralInput.value.replace(/[^a-z0-9]/gi, "").toUpperCase().slice(0, 16);
      if (referralCode) localStorage.setItem("siftle_pending_referral_code", referralCode);
      localStorage.setItem("siftle_circle_last_email", email);

      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";
      hideStatus();

      try {
        const res = await fetch(apiUrl("/api/circle/auth/otp"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to send code");

        stepEmail.style.display = "none";
        stepOtp.style.display = "block";
        showStatus("Verification code sent to your email.");
      } catch (err: any) {
        showStatus(err.message, true);
        sendBtn.disabled = false;
        sendBtn.textContent = "Send Verification Code";
      }
    });

    backBtn.addEventListener("click", () => {
      stepOtp.style.display = "none";
      stepEmail.style.display = "block";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Verification Code";
      hideStatus();
    });

    verifyBtn.addEventListener("click", async () => {
      const otp = otpInput.value.replace(/\D/g, "").slice(0, 6);
      if (otp.length !== 6 || !/^\d+$/.test(otp)) {
        showStatus("Please enter a 6-digit number.", true);
        return;
      }
      otpInput.value = otp;

      verifyBtn.disabled = true;
      verifyBtn.textContent = "Verifying...";
      hideStatus();

      try {
        const res = await fetch(apiUrl("/api/circle/auth/verify"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "That code did not work. Request a new code and try again.");
        }

        userToken = data.userToken;
        encryptionKey = data.encryptionKey;
        isMockSession = Boolean(data.mock);

        if (isMockSession) {
          localStorage.setItem("siftle_circle_email", email);
          localStorage.setItem("siftle_circle_user_token", userToken);
          localStorage.setItem("siftle_circle_encryption_key", encryptionKey);
          localStorage.setItem("siftle_circle_is_mock", "true");
          activeUserToken = userToken;
          activeEncryptionKey = encryptionKey;

          let storedKey = localStorage.getItem(`siftle_mock_key_${email}`);
          if (!storedKey) {
            const randomWallet = Wallet.createRandom();
            storedKey = randomWallet.privateKey;
            localStorage.setItem(`siftle_mock_key_${email}`, storedKey);
          }
          mockWallet = new Wallet(storedKey, publicProvider);
          activeWalletAddress = mockWallet.address;
          localStorage.setItem("siftle_circle_wallet_address", activeWalletAddress!);

          overlay.remove();
          triggerWalletListeners(activeWalletAddress);
          resolve(activeWalletAddress!);
          return;
        }

        // Real Circle Auth
        localStorage.setItem("siftle_circle_email", email);
        localStorage.setItem("siftle_circle_user_token", userToken);
        localStorage.setItem("siftle_circle_encryption_key", encryptionKey);
        localStorage.setItem("siftle_circle_is_mock", "false");
        activeUserToken = userToken;
        activeEncryptionKey = encryptionKey;

        if (data.initialized) {
          activeWalletAddress = data.walletAddress;
          activeWalletId = data.walletId;
          localStorage.setItem("siftle_circle_wallet_address", activeWalletAddress!);
          localStorage.setItem("siftle_circle_wallet_id", activeWalletId!);

          overlay.remove();
          triggerWalletListeners(activeWalletAddress);
          resolve(activeWalletAddress!);
        } else {
          challengeId = data.challengeId;
          stepOtp.style.display = "none";
          stepPin.style.display = "block";
        }
      } catch (err: any) {
        showStatus(err.message, true);
        verifyBtn.disabled = false;
        verifyBtn.textContent = "Verify & Sign In";
      }
    });

    pinBtn.addEventListener("click", () => {
      pinBtn.disabled = true;
      pinBtn.textContent = "Opening PIN screen...";
      hideStatus();

      const sdk = getCircleSdk();
      sdk.setAuthentication({ userToken, encryptionKey });

      sdk.execute(challengeId, async (error) => {
        if (error) {
          showStatus(`PIN setup failed: ${error.message}`, true);
          pinBtn.disabled = false;
          pinBtn.textContent = "Set Up Wallet PIN";
        } else {
          showStatus("PIN setup complete! Activating wallet...");
          try {
            let attempts = 0;
            const pollWallet = async () => {
              attempts++;
              const wRes = await fetch(apiUrl("/api/circle/wallet"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userToken })
              });
              if (wRes.ok) {
                const wData = await wRes.json();
                activeWalletAddress = wData.walletAddress;
                activeWalletId = wData.walletId;
                localStorage.setItem("siftle_circle_wallet_address", activeWalletAddress!);
                localStorage.setItem("siftle_circle_wallet_id", activeWalletId!);

                overlay.remove();
                triggerWalletListeners(activeWalletAddress);
                resolve(activeWalletAddress!);
              } else if (attempts < 10) {
                setTimeout(pollWallet, 2000);
              } else {
                throw new Error("Timed out waiting for wallet activation");
              }
            };
            await pollWallet();
          } catch (pollErr: any) {
            showStatus(pollErr.message, true);
            pinBtn.disabled = false;
            pinBtn.textContent = "Set Up Wallet PIN";
          }
        }
      });
    });
  });
};

export const getConnectedArcWallet = (): string | null => {
  return activeWalletAddress;
};

export const subscribeArcWallet = (callback: (address: string | null) => void): (() => void) => {
  walletListeners.add(callback);
  callback(activeWalletAddress);
  return () => {
    walletListeners.delete(callback);
  };
};

export const disconnectArcWallet = () => {
  if (activeEmail) localStorage.setItem("siftle_circle_last_email", activeEmail);
  activeEmail = null;
  activeUserToken = null;
  activeEncryptionKey = null;
  activeWalletAddress = null;
  activeWalletId = null;
  isMockSession = false;
  isBackendWalletMode = false;
  activeBackendWalletSessionToken = null;
  mockWallet = null;

  localStorage.removeItem("siftle_circle_email");
  localStorage.removeItem("siftle_circle_user_token");
  localStorage.removeItem("siftle_circle_encryption_key");
  localStorage.removeItem("siftle_circle_wallet_address");
  localStorage.removeItem("siftle_circle_wallet_id");
  localStorage.removeItem("siftle_circle_is_mock");
  localStorage.removeItem(BACKEND_WALLET_MODE_KEY);
  localStorage.removeItem(BACKEND_WALLET_EMAIL_KEY);
  localStorage.removeItem(BACKEND_WALLET_SESSION_KEY);

  triggerWalletListeners(null);
};

export const validateArcSession = async (): Promise<boolean> => {
  if (!activeWalletAddress) return false;
  if (isMockSession) return true;
  if (isBackendWalletMode) {
    if (!activeBackendWalletSessionToken) {
      disconnectArcWallet();
      return false;
    }

    try {
      const res = await fetch(apiUrl(`/api/backend-wallet/session?token=${encodeURIComponent(activeBackendWalletSessionToken)}`));
      if (!res.ok) throw new Error("Session expired");
      const data = await res.json();
      if (!data.walletAddress) throw new Error("Session expired");
      activeWalletAddress = data.walletAddress;
      if (data.email) activeEmail = data.email;
      localStorage.setItem("siftle_circle_wallet_address", data.walletAddress);
      return true;
    } catch (error) {
      console.warn("Stored Siftle session is no longer valid:", error);
      disconnectArcWallet();
      return false;
    }
  }
  if (!activeUserToken) {
    disconnectArcWallet();
    return false;
  }

  try {
    const res = await fetch(apiUrl("/api/circle/wallet"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userToken: activeUserToken })
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const message = String(errorData?.error || "");
      if (res.status === 400 || res.status === 401 || res.status === 403 || /token|session|auth|unauthori[sz]ed|expired/i.test(message)) {
        throw new Error(message || "Circle session expired");
      }
      console.warn("Could not validate Circle session yet; keeping stored session:", message || res.statusText);
      return true;
    }

    const data = await res.json();
    if (!data.walletAddress || data.walletAddress.toLowerCase() !== activeWalletAddress.toLowerCase()) {
      throw new Error("Circle session wallet mismatch");
    }

    activeWalletId = data.walletId || activeWalletId;
    localStorage.setItem("siftle_circle_wallet_id", activeWalletId!);
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error || "");
    if (/token|session|auth|unauthori[sz]ed|expired|mismatch/i.test(message)) {
      console.warn("Stored Circle session is no longer valid:", error);
      disconnectArcWallet();
      return false;
    }
    console.warn("Could not validate Circle session yet; keeping stored session:", error);
    return true;
  }
};

export const readArcUsdcBalance = async (account: string): Promise<string> => {
  if (isMockSession) {
    const key = `siftle_mock_balance_${account.toLowerCase()}`;
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      return parseFloat(stored).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    localStorage.setItem(key, "1000.00");
    return "1,000.00";
  }
  const encodedAccount = account.toLowerCase().replace(/^0x/, "").padStart(64, "0");
  const result = await requestRpc<string>("eth_call", [
    { to: ARC_TESTNET_USDC, data: `${BALANCE_OF_SELECTOR}${encodedAccount}` },
    "latest"
  ]);
  return (Number(BigInt(result || "0x0")) / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const isWalletConnectConfigured = (): boolean => true;

const mockMarketPoolKey = (marketAddress: string): string => `siftle_mock_pool_${marketAddress.toLowerCase()}`;

const readMockMarketPool = (marketAddress: string): {
  yesSharesUsdc: number;
  noSharesUsdc: number;
  outcome: 0 | 1 | 2 | 3;
  traders: string[];
} => {
  const stored = localStorage.getItem(mockMarketPoolKey(marketAddress));
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return {
        yesSharesUsdc: Number(parsed.yesSharesUsdc) || 0,
        noSharesUsdc: Number(parsed.noSharesUsdc) || 0,
        outcome: (Number(parsed.outcome) || 0) as 0 | 1 | 2 | 3,
        traders: Array.isArray(parsed.traders) ? parsed.traders.map((item: unknown) => String(item).toLowerCase()) : []
      };
    } catch {}
  }
  return { yesSharesUsdc: 0, noSharesUsdc: 0, outcome: 0, traders: [] };
};

const writeMockMarketPool = (
  marketAddress: string,
  pool: { yesSharesUsdc: number; noSharesUsdc: number; outcome: 0 | 1 | 2 | 3; traders: string[] }
): void => {
  localStorage.setItem(mockMarketPoolKey(marketAddress), JSON.stringify(pool));
};

const countMockMarketTraders = (marketAddress: string): number => {
  const prefix = `siftle_mock_pos_${marketAddress.toLowerCase()}_`;
  const traders = new Set<string>();

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith(prefix)) continue;

    try {
      const position = JSON.parse(localStorage.getItem(key) || "{}");
      const hasPosition = (Number(position.yesSharesUsdc) || 0) > 0 || (Number(position.noSharesUsdc) || 0) > 0;
      if (hasPosition) traders.add(key.slice(prefix.length));
    } catch {}
  }

  return traders.size;
};

const mockMarketPositionKey = (marketAddress: string, account: string): string =>
  `siftle_mock_pos_${marketAddress.toLowerCase()}_${account.toLowerCase()}`;

export const resolveLocalTestMarketYes = (marketAddress = LOCAL_TEST_MARKET_ADDRESS): void => {
  const pool = readMockMarketPool(marketAddress);
  if (pool.outcome !== 1) {
    pool.outcome = 1;
    writeMockMarketPool(marketAddress, pool);
  }
};

export const claimArcMarketPayout = async (marketAddress: string, account: string): Promise<ArcClaimResult> => {
  if (isMockSession || isLocalTestMarket(marketAddress)) {
    const pool = readMockMarketPool(marketAddress);
    if (pool.outcome === 0) throw new Error("Market is not resolved yet");
    if (pool.outcome === 3) throw new Error("Invalid market claims are not available yet");

    const posKey = mockMarketPositionKey(marketAddress, account);
    const stored = localStorage.getItem(posKey);
    const position: ArcMarketPosition = stored ? JSON.parse(stored) : { yesSharesUsdc: 0, noSharesUsdc: 0 };
    const winningShares = pool.outcome === 1 ? position.yesSharesUsdc : position.noSharesUsdc;
    const totalWinningShares = pool.outcome === 1 ? pool.yesSharesUsdc : pool.noSharesUsdc;
    const totalPool = pool.yesSharesUsdc + pool.noSharesUsdc;
    const amountUsdc = winningShares > 0 && totalWinningShares > 0 ? (winningShares / totalWinningShares) * totalPool : 0;

    localStorage.removeItem(posKey);
    pool.traders = pool.traders.filter((trader) => trader !== account.toLowerCase());
    writeMockMarketPool(marketAddress, pool);

    if (isMockSession && amountUsdc > 0) {
      const balanceKey = `siftle_mock_balance_${account.toLowerCase()}`;
      const currentBalance = parseFloat(localStorage.getItem(balanceKey) || "1000.00");
      localStorage.setItem(balanceKey, (currentBalance + amountUsdc).toFixed(2));
    }

    return { amountUsdc, won: amountUsdc > 0 };
  }

  if (!activeWalletAddress || activeWalletAddress.toLowerCase() !== account.toLowerCase()) {
    throw new Error("Connect the wallet that holds this position first");
  }
  if (isBackendWalletMode) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(marketAddress)) {
      const response = await fetch(apiUrl("/api/backend-wallet/option-claim"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionToken: activeBackendWalletSessionToken,
          marketId: marketAddress
        })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Failed to submit claim");
      return { amountUsdc: Number(payload.amountUsdc) || 0, won: true };
    }
    const [snapshot, position] = await Promise.all([
      readArcMarketSnapshot(marketAddress),
      readArcMarketPosition(marketAddress, account)
    ]);
    if (snapshot.outcome === 0) throw new Error("Market is not resolved yet");
    if (snapshot.outcome === 3) throw new Error("Invalid market claims are not available yet");

    const winningShares = snapshot.outcome === 1 ? position.yesSharesUsdc : position.noSharesUsdc;
    const totalWinningShares = snapshot.outcome === 1 ? snapshot.yesSharesUsdc : snapshot.noSharesUsdc;
    const totalPool = snapshot.yesSharesUsdc + snapshot.noSharesUsdc;
    const amountUsdc = winningShares > 0 && totalWinningShares > 0 ? (winningShares / totalWinningShares) * totalPool : 0;
    if (amountUsdc <= 0) throw new Error("No winning payout to claim");

    const response = await fetch(apiUrl("/api/backend-wallet/claim"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionToken: activeBackendWalletSessionToken,
        marketId: marketAddress
      })
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Failed to submit claim");
    return { amountUsdc, won: true };
  }
  if (!activeUserToken || !activeWalletId) {
    throw new Error("Session expired. Please sign in again.");
  }

  const [snapshot, position] = await Promise.all([
    readArcMarketSnapshot(marketAddress),
    readArcMarketPosition(marketAddress, account)
  ]);
  if (snapshot.outcome === 0) throw new Error("Market is not resolved yet");
  if (snapshot.outcome === 3) throw new Error("Invalid market claims are not available yet");

  const winningShares = snapshot.outcome === 1 ? position.yesSharesUsdc : position.noSharesUsdc;
  const totalWinningShares = snapshot.outcome === 1 ? snapshot.yesSharesUsdc : snapshot.noSharesUsdc;
  const totalPool = snapshot.yesSharesUsdc + snapshot.noSharesUsdc;
  const amountUsdc = winningShares > 0 && totalWinningShares > 0 ? (winningShares / totalWinningShares) * totalPool : 0;
  if (amountUsdc <= 0) throw new Error("No winning payout to claim");

  const redeemRes = await fetch(apiUrl("/api/circle/tx/contract-call"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userToken: activeUserToken,
      contractAddress: marketAddress,
      abiFunctionSignature: "redeem()",
      abiParameters: [],
      walletId: activeWalletId
    })
  });
  const redeemData = await redeemRes.json();
  if (!redeemRes.ok) throw new Error(redeemData.error || "Failed to create claim challenge");

  const redeemChallengeId = redeemData.challengeId;
  await runCircleChallenge(redeemChallengeId);
  await waitForCircleTx(redeemData.id || redeemChallengeId);

  return { amountUsdc, won: true };
};

export const readArcMarketSnapshot = async (marketAddress: string): Promise<ArcMarketSnapshot> => {
  if (isMockSession || isLocalTestMarket(marketAddress)) {
    const pool = readMockMarketPool(marketAddress);
    const volumeUsdc = pool.yesSharesUsdc + pool.noSharesUsdc;
    const yesPriceCents = volumeUsdc > 0 ? Math.round((pool.yesSharesUsdc * 100) / volumeUsdc) : 50;
    const traderCount = countMockMarketTraders(marketAddress);
    return {
      yesPriceCents,
      noPriceCents: 100 - yesPriceCents,
      volumeUsdc,
      yesSharesUsdc: pool.yesSharesUsdc,
      noSharesUsdc: pool.noSharesUsdc,
      outcome: pool.outcome,
      closesAtUnix: 0,
      traderCount
    };
  }

  if (isBackendWalletMode) {
    if (!activeBackendWalletSessionToken) throw new Error("Session expired");
    const response = await fetch(apiUrl(`/api/backend-wallet/market-state?token=${encodeURIComponent(activeBackendWalletSessionToken)}&marketAddress=${encodeURIComponent(marketAddress)}`));
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Failed to load market state");
    return payload.snapshot;
  }

  const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, publicProvider);
  const [totalYes, totalNo, probability, outcome, closesAt] = await Promise.all([
    market.totalYesShares() as Promise<bigint>,
    market.totalNoShares() as Promise<bigint>,
    market.impliedYesProbability() as Promise<bigint>,
    market.outcome() as Promise<bigint>,
    market.closesAt() as Promise<bigint>
  ]);
  const yesPriceCents = Math.round(Number(probability) / 100);
  const yesSharesUsdc = Number(formatUnits(totalYes, 6));
  const noSharesUsdc = Number(formatUnits(totalNo, 6));
  return {
    yesPriceCents,
    noPriceCents: 100 - yesPriceCents,
    volumeUsdc: yesSharesUsdc + noSharesUsdc,
    yesSharesUsdc,
    noSharesUsdc,
    outcome: Number(outcome) as 0 | 1 | 2 | 3,
    closesAtUnix: Number(closesAt)
  };
};

export const readArcMarketPosition = async (marketAddress: string, account: string): Promise<ArcMarketPosition> => {
  if (isMockSession || isLocalTestMarket(marketAddress)) {
    const key = mockMarketPositionKey(marketAddress, account);
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {}
    }
    return { yesSharesUsdc: 0, noSharesUsdc: 0 };
  }

  if (isBackendWalletMode) {
    if (!activeBackendWalletSessionToken) throw new Error("Session expired");
    const response = await fetch(apiUrl(`/api/backend-wallet/market-state?token=${encodeURIComponent(activeBackendWalletSessionToken)}&marketAddress=${encodeURIComponent(marketAddress)}`));
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Failed to load market state");
    return payload.position;
  }

  const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, publicProvider);
  const [yesShares, noShares] = await Promise.all([
    market.yesShares(account) as Promise<bigint>,
    market.noShares(account) as Promise<bigint>
  ]);
  return {
    yesSharesUsdc: Number(formatUnits(yesShares, 6)),
    noSharesUsdc: Number(formatUnits(noShares, 6))
  };
};

export const readArcMarketState = async (marketAddress: string, account: string): Promise<ArcMarketState> => {
  if (isBackendWalletMode) {
    if (!activeBackendWalletSessionToken) throw new Error("Session expired");
    const response = await fetch(apiUrl(`/api/backend-wallet/market-state?token=${encodeURIComponent(activeBackendWalletSessionToken)}&marketAddress=${encodeURIComponent(marketAddress)}`));
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Failed to load market state");
    return payload;
  }

  const [position, snapshot] = await Promise.all([
    readArcMarketPosition(marketAddress, account),
    readArcMarketSnapshot(marketAddress)
  ]);
  return { position, snapshot };
};

const runCircleChallenge = (challengeId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const sdk = getCircleSdk();
    if (activeUserToken && activeEncryptionKey) {
      sdk.setAuthentication({ userToken: activeUserToken, encryptionKey: activeEncryptionKey });
    }
    sdk.execute(challengeId, (error) => {
      if (error) {
        reject(new Error(error.message || "Circle transaction signing failed"));
      } else {
        resolve();
      }
    });
  });
};

const waitForCircleTx = async (txId: string): Promise<string> => {
  let attempts = 0;
  while (attempts < 60) {
    attempts++;
    const res = await fetch(apiUrl(`/api/circle/tx/status?id=${txId}&userToken=${activeUserToken || ""}`));
    if (res.ok) {
      const data = await res.json();
      if (data.state === "CONFIRMED" || data.state === "COMPLETE") {
        if (data.txHash) return data.txHash;
      } else if (data.state === "FAILED") {
        throw new Error(data.error || "Transaction execution failed on-chain");
      }
    }
    await new Promise(r => setTimeout(r, 2000));
  }
  throw new Error("Timed out waiting for transaction confirmation on-chain");
};

export const payAiBriefingUnlock = async (
  treasuryAddress: string,
  amountUsdc: number,
  onStatus?: (status: string) => void,
  briefing?: { sourceUrl?: string; topic?: string }
): Promise<string> => {
  if (!activeWalletAddress) throw new Error("Please sign in first");
  if (!treasuryAddress) throw new Error("AI briefing treasury is not configured");
  const amount = parseUnits(amountUsdc.toFixed(6), 6);

  if (isMockSession) {
    onStatus?.("Processing mock unlock...");
    await new Promise((resolve) => setTimeout(resolve, 500));
    return "0xmockunlock" + Math.random().toString(16).slice(2);
  }

  if (isBackendWalletMode) {
    const requestUnlock = async () => {
      const response = await fetch(apiUrl("/api/backend-wallet/summary/unlock"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionToken: activeBackendWalletSessionToken,
          treasuryAddress,
          amountUsdc,
          sourceUrl: briefing?.sourceUrl,
          topic: briefing?.topic
        })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Payment failed");
      return payload.txHash as string;
    };

    onStatus?.("Preparing AI briefing payment...");
    try {
      return await requestUnlock();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error || "");
      if (!/topping up/i.test(message)) {
        throw error instanceof Error ? error : new Error(message || "Payment failed");
      }

      onStatus?.("Preparing Gateway balance...");
      await new Promise((resolve) => setTimeout(resolve, 4000));
      onStatus?.("Retrying AI briefing payment...");

      try {
        return await requestUnlock();
      } catch (retryError) {
        const retryMessage = retryError instanceof Error ? retryError.message : String(retryError || "");
        if (!/topping up/i.test(retryMessage)) {
          throw retryError instanceof Error ? retryError : new Error(retryMessage || "Payment failed");
        }
        throw new Error("AI briefing payment is still preparing. Please try again in a few seconds.");
      }
    }
  }

  onStatus?.("Unlocking AI briefing (Awaiting PIN)...");
  const res = await fetch(apiUrl("/api/circle/tx/contract-call"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userToken: activeUserToken,
      contractAddress: ARC_TESTNET_USDC,
      abiFunctionSignature: "transfer(address,uint256)",
      abiParameters: [treasuryAddress, amount.toString()],
      walletId: activeWalletId
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to create briefing unlock challenge");

  await runCircleChallenge(data.challengeId);
  onStatus?.("Confirming unlock payment...");
  return waitForCircleTx(data.id || data.challengeId);
};

export const executeArcMarketOrder = async (
  marketAddress: string,
  mode: "buy" | "sell",
  side: "yes" | "no",
  amountUsdc: number,
  onStatus?: (status: string) => void,
  yesPriceCents?: number,
  noPriceCents?: number
): Promise<string> => {
  if (!activeWalletAddress) throw new Error("Connect your wallet first");
  if (!marketAddress) throw new Error("This market needs an Arc contract address before trading");
  if (!Number.isFinite(amountUsdc) || amountUsdc <= 0) throw new Error("Enter an amount first");

  const amount = parseUnits(amountUsdc.toFixed(6), 6);

  if (isMockSession || isLocalTestMarket(marketAddress)) {
    if (isMockSession && !mockWallet) throw new Error("Mock wallet not initialized");

    onStatus?.("Processing mock trade...");
    await new Promise((r) => setTimeout(r, 500));

    const pool = readMockMarketPool(marketAddress);
    if (pool.outcome !== 0) {
      throw new Error("This market is resolved and can no longer be traded");
    }

    const balanceKey = `siftle_mock_balance_${activeWalletAddress.toLowerCase()}`;
    const currentBalance = parseFloat(localStorage.getItem(balanceKey) || "1000.00");
    let newBalance = currentBalance;
    if (isMockSession && mode === "buy") {
      if (currentBalance < amountUsdc) {
        throw new Error("Insufficient USDC mock balance");
      }
      newBalance = currentBalance - amountUsdc;
    } else if (isMockSession) {
      newBalance = currentBalance + amountUsdc;
    }
    if (isMockSession) localStorage.setItem(balanceKey, newBalance.toFixed(2));

    const posKey = `siftle_mock_pos_${marketAddress.toLowerCase()}_${activeWalletAddress.toLowerCase()}`;
    let position: ArcMarketPosition = { yesSharesUsdc: 0, noSharesUsdc: 0 };
    const storedPos = localStorage.getItem(posKey);
    if (storedPos) {
      try {
        position = JSON.parse(storedPos);
      } catch {}
    }

    const cleanTrader = activeWalletAddress.toLowerCase();

    if (mode === "buy") {
      if (!pool.traders.includes(cleanTrader)) pool.traders.push(cleanTrader);
      if (side === "yes") {
        position.yesSharesUsdc += amountUsdc;
        pool.yesSharesUsdc += amountUsdc;
      } else {
        position.noSharesUsdc += amountUsdc;
        pool.noSharesUsdc += amountUsdc;
      }
    } else {
      if (side === "yes") {
        const exitAmount = Math.min(amountUsdc, position.yesSharesUsdc);
        if (exitAmount <= 0) throw new Error("You do not have YES shares to exit");
        position.yesSharesUsdc -= exitAmount;
        pool.yesSharesUsdc = Math.max(0, pool.yesSharesUsdc - exitAmount);
      } else {
        const exitAmount = Math.min(amountUsdc, position.noSharesUsdc);
        if (exitAmount <= 0) throw new Error("You do not have NO shares to exit");
        position.noSharesUsdc -= exitAmount;
        pool.noSharesUsdc = Math.max(0, pool.noSharesUsdc - exitAmount);
      }
    }

    position.yesSharesUsdc = Math.max(0, position.yesSharesUsdc);
    position.noSharesUsdc = Math.max(0, position.noSharesUsdc);
    const hasPosition = position.yesSharesUsdc > 0.000001 || position.noSharesUsdc > 0.000001;
    if (hasPosition) {
      localStorage.setItem(posKey, JSON.stringify(position));
      if (!pool.traders.includes(cleanTrader)) pool.traders.push(cleanTrader);
    } else {
      localStorage.removeItem(posKey);
      pool.traders = pool.traders.filter((trader) => trader !== cleanTrader);
    }
    writeMockMarketPool(marketAddress, pool);

    return "0xmocktxhash" + Math.random().toString(16).slice(2);
  }

  if (isBackendWalletMode) {
    onStatus?.(`Submitting ${mode} order...`);
    const response = await fetch(apiUrl("/api/backend-wallet/trade"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionToken: activeBackendWalletSessionToken,
        marketId: marketAddress,
        mode,
        side,
        amountUsdc
      })
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || `Failed to ${mode} shares`);
    return payload.txHash;
  }

  // Real Circle transaction execution
  const marketRead = new Contract(marketAddress, SIFTLE_MARKET_ABI, publicProvider);
  const currentOutcome = Number(await marketRead.outcome());
  if (currentOutcome !== 0) {
    throw new Error("This market is resolved and can no longer be traded");
  }

  if (mode === "buy") {
    onStatus?.("Checking USDC allowance...");
    // Check allowance
    const allowanceSelector = "0xdd62ed3e";
    const encodedOwner = activeWalletAddress.toLowerCase().replace(/^0x/, "").padStart(64, "0");
    const encodedSpender = marketAddress.toLowerCase().replace(/^0x/, "").padStart(64, "0");
    const allowanceData = `${allowanceSelector}${encodedOwner}${encodedSpender}`;

    const allowanceHex = await requestRpc<string>("eth_call", [
      { to: ARC_TESTNET_USDC, data: allowanceData },
      "latest"
    ]);
    const allowance = BigInt(allowanceHex || "0x0");

    if (allowance < amount) {
      onStatus?.("Unlocking USDC (Awaiting PIN)...");
      const appRes = await fetch(apiUrl("/api/circle/tx/contract-call"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userToken: activeUserToken,
          contractAddress: ARC_TESTNET_USDC,
          abiFunctionSignature: "approve(address,uint256)",
          abiParameters: [marketAddress, amount.toString()],
          walletId: activeWalletId
        })
      });
      const appData = await appRes.json();
      if (!appRes.ok) throw new Error(appData.error || "Failed to create approval challenge");

      const challengeId = appData.challengeId;
      await runCircleChallenge(challengeId);
      onStatus?.("Confirming USDC unlock on-chain...");
      await waitForCircleTx(appData.id || challengeId);
    }

    onStatus?.(`Submitting buy order (Awaiting PIN)...`);
    const buyRes = await fetch(apiUrl("/api/circle/tx/contract-call"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userToken: activeUserToken,
        contractAddress: marketAddress,
        abiFunctionSignature: "buy(bool,uint256)",
        abiParameters: [side === "yes", amount.toString()],
        walletId: activeWalletId
      })
    });
    const buyData = await buyRes.json();
    if (!buyRes.ok) throw new Error(buyData.error || "Failed to create buy challenge");

    const buyChallengeId = buyData.challengeId;
    await runCircleChallenge(buyChallengeId);
    onStatus?.("Confirming trade on-chain...");
    const txHash = await waitForCircleTx(buyData.id || buyChallengeId);
    return txHash;
  } else {
    onStatus?.(`Submitting sell order (Awaiting PIN)...`);
    const sellRes = await fetch(apiUrl("/api/circle/tx/contract-call"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userToken: activeUserToken,
        contractAddress: marketAddress,
        abiFunctionSignature: "sell(bool,uint256)",
        abiParameters: [side === "yes", amount.toString()],
        walletId: activeWalletId
      })
    });
    const sellData = await sellRes.json();
    if (!sellRes.ok) throw new Error(sellData.error || "Failed to create sell challenge");

    const sellChallengeId = sellData.challengeId;
    await runCircleChallenge(sellChallengeId);
    onStatus?.("Confirming trade on-chain...");
    const txHash = await waitForCircleTx(sellData.id || sellChallengeId);
    return txHash;
  }
};

export const executeArcOptionMarketOrder = async (
  marketId: string,
  mode: "buy" | "sell",
  optionId: string,
  amountUsdc: number,
  onStatus?: (status: string) => void
): Promise<string> => {
  if (!activeWalletAddress) throw new Error("Please sign in first");
  if (!marketId) throw new Error("Market is missing");
  if (!optionId) throw new Error("Choose an option first");
  if (!Number.isFinite(amountUsdc) || amountUsdc <= 0) throw new Error("Enter an amount first");

  if (!isBackendWalletMode) {
    throw new Error("Option markets are available after signing in with Siftle wallet.");
  }

  onStatus?.(mode === "buy" ? "Locking your pick..." : "Exiting your pick...");
  const response = await fetch(apiUrl("/api/backend-wallet/option-trade"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionToken: activeBackendWalletSessionToken,
      marketId,
      mode,
      optionId,
      amountUsdc
    })
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "Option trade failed");
  return payload.txHash;
};

export const shortenAddress = (account: string): string => `${account.slice(0, 6)}...${account.slice(-4)}`;

export const triggerGatewayWarmup = async (): Promise<void> => {
  if (!isBackendWalletMode || !activeBackendWalletSessionToken) return;
  try {
    await fetch(apiUrl("/api/backend-wallet/warmup"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionToken: activeBackendWalletSessionToken })
    });
  } catch (err) {
    console.error("Failed to trigger warmup:", err);
  }
};
