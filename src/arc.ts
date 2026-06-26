import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import { Contract, JsonRpcProvider, formatUnits, parseUnits, Wallet } from "ethers";

export const ARC_TESTNET_CHAIN_ID = 5042002;
export const ARC_TESTNET_USDC =
  (window as any).ARC_TESTNET_USDC_ADDRESS ||
  "0x3600000000000000000000000000000000000000";
export const ARC_TESTNET_EXPLORER = "https://testnet.arcscan.app";
export const ARC_TESTNET_FAUCET = "https://faucet.circle.com/";
export const ARC_TESTNET_RPC_URL = "https://rpc.testnet.arc.network";

let apiBase = ((window as any).SIFTLE_API_BASE || "").replace(/\/$/, "");
if (!apiBase && typeof window !== "undefined" && window.location.hostname.endsWith("vercel.app")) {
  apiBase = "https://siftle.onrender.com";
}
const apiUrl = (path: string): string => `${apiBase}${path}`;

const BALANCE_OF_SELECTOR = "0x70a08231";
const publicProvider = new JsonRpcProvider(ARC_TESTNET_RPC_URL, ARC_TESTNET_CHAIN_ID);

const ERC20_ABI = [
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)"
];

const SIFTLE_MARKET_ABI = [
  "function buy(bool yes, uint256 amount) external",
  "function sell(bool yes, uint256 amount) external",
  "function yesShares(address owner) view returns (uint256)",
  "function noShares(address owner) view returns (uint256)",
  "function totalYesShares() view returns (uint256)",
  "function totalNoShares() view returns (uint256)",
  "function impliedYesProbability() view returns (uint256)",
  "function outcome() view returns (uint8)"
];

export interface ArcMarketSnapshot {
  yesPriceCents: number;
  noPriceCents: number;
  volumeUsdc: number;
  yesSharesUsdc: number;
  noSharesUsdc: number;
  outcome: 0 | 1 | 2 | 3;
}

export interface ArcMarketPosition {
  yesSharesUsdc: number;
  noSharesUsdc: number;
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
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 28px;
      cursor: pointer;
      line-height: 1;
      transition: color 0.2s;
    }
    .circle-auth-close:hover {
      color: #f8fafc;
    }
    .circle-auth-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
    }
    .circle-auth-logo img {
      width: 64px;
      height: 64px;
      margin-bottom: 12px;
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
      width: 100%;
      height: 48px;
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      border: none;
      border-radius: 12px;
      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.1s;
    }
    .circle-auth-btn:hover {
      opacity: 0.95;
    }
    .circle-auth-btn:active {
      transform: scale(0.98);
    }
    .circle-auth-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
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
  `;
  document.head.appendChild(style);
};

export const connectArcWallet = async (): Promise<string> => {
  if (activeWalletAddress) {
    return activeWalletAddress;
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
          <img src="./assets/Siftle_logo-removebg-preview.png" alt="Siftle logo" />
          <h2>Sign In to Siftle</h2>
        </div>
        <p class="circle-auth-subtitle">Verify your email to manage predictions and trade</p>
        
        <div id="circleAuthStepEmail" class="circle-auth-step">
          <div class="circle-auth-field">
            <label for="circleAuthEmail">Email Address</label>
            <input type="email" id="circleAuthEmail" placeholder="name@domain.com" required />
          </div>
          <button id="circleAuthSendBtn" class="circle-auth-btn" type="button">Send Verification Code</button>
        </div>

        <div id="circleAuthStepOtp" class="circle-auth-step" style="display: none;">
          <div class="circle-auth-field">
            <label for="circleAuthOtp">6-Digit Verification Code</label>
            <input type="text" id="circleAuthOtp" placeholder="123456" maxlength="6" />
          </div>
          <button id="circleAuthVerifyBtn" class="circle-auth-btn" type="button">Verify & Sign In</button>
          <p class="circle-auth-spam-note" style="font-size: 11px; color: #a5b4fc; margin: 12px 0; text-align: center; line-height: 1.4; opacity: 0.85;">
            * If you don't receive the email, please check your <strong>Spam</strong> or <strong>Junk</strong> folder.
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

    sendBtn.addEventListener("click", async () => {
      email = emailInput.value.trim();
      if (!email || !email.includes("@")) {
        showStatus("Please enter a valid email address.", true);
        return;
      }

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
      const otp = otpInput.value.trim();
      if (otp.length !== 6 || !/^\d+$/.test(otp)) {
        showStatus("Please enter a 6-digit number.", true);
        return;
      }

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
        if (!res.ok) throw new Error(data.error || "Failed to verify code");

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
  activeEmail = null;
  activeUserToken = null;
  activeEncryptionKey = null;
  activeWalletAddress = null;
  activeWalletId = null;
  isMockSession = false;
  mockWallet = null;

  localStorage.removeItem("siftle_circle_email");
  localStorage.removeItem("siftle_circle_user_token");
  localStorage.removeItem("siftle_circle_encryption_key");
  localStorage.removeItem("siftle_circle_wallet_address");
  localStorage.removeItem("siftle_circle_wallet_id");
  localStorage.removeItem("siftle_circle_is_mock");

  triggerWalletListeners(null);
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

export const readArcMarketSnapshot = async (marketAddress: string): Promise<ArcMarketSnapshot> => {
  const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, publicProvider);
  const [totalYes, totalNo, probability, outcome] = await Promise.all([
    market.totalYesShares() as Promise<bigint>,
    market.totalNoShares() as Promise<bigint>,
    market.impliedYesProbability() as Promise<bigint>,
    market.outcome() as Promise<bigint>
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
    outcome: Number(outcome) as 0 | 1 | 2 | 3
  };
};

export const readArcMarketPosition = async (marketAddress: string, account: string): Promise<ArcMarketPosition> => {
  if (isMockSession) {
    const key = `siftle_mock_pos_${marketAddress.toLowerCase()}_${account.toLowerCase()}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {}
    }
    return { yesSharesUsdc: 0, noSharesUsdc: 0 };
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

export const executeArcMarketOrder = async (
  marketAddress: string,
  mode: "buy" | "sell",
  side: "yes" | "no",
  amountUsdc: number,
  onStatus?: (status: string) => void
): Promise<string> => {
  if (!activeWalletAddress) throw new Error("Connect your wallet first");
  if (!marketAddress) throw new Error("This market needs an Arc contract address before trading");
  if (!Number.isFinite(amountUsdc) || amountUsdc <= 0) throw new Error("Enter an amount first");

  const amount = parseUnits(amountUsdc.toFixed(6), 6);

  if (isMockSession) {
    if (!mockWallet) throw new Error("Mock wallet not initialized");

    try {
      if (mode === "buy") {
        onStatus?.("Checking USDC allowance...");
        const usdc = new Contract(ARC_TESTNET_USDC, ERC20_ABI, mockWallet);
        const allowance = (await usdc.allowance(activeWalletAddress, marketAddress)) as bigint;
        if (allowance < amount) {
          onStatus?.("Unlocking USDC...");
          const approval = await usdc.approve(marketAddress, amount);
          await approval.wait();
        }
        onStatus?.("Submitting buy order...");
        const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, mockWallet);
        const tx = await market.buy(side === "yes", amount);
        onStatus?.("Confirming trade on-chain...");
        await tx.wait();
        return tx.hash as string;
      } else {
        onStatus?.("Submitting sell order...");
        const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, mockWallet);
        const tx = await market.sell(side === "yes", amount);
        onStatus?.("Confirming trade on-chain...");
        await tx.wait();
        return tx.hash as string;
      }
    } catch (err) {
      console.warn("On-chain mock transaction failed, falling back to local simulation:", err);
      onStatus?.("Processing mock trade...");
      await new Promise((r) => setTimeout(r, 1000));

      const balanceKey = `siftle_mock_balance_${activeWalletAddress.toLowerCase()}`;
      const currentBalance = parseFloat(localStorage.getItem(balanceKey) || "1000.00");
      let newBalance = currentBalance;
      if (mode === "buy") {
        if (currentBalance < amountUsdc) {
          throw new Error("Insufficient USDC mock balance");
        }
        newBalance = currentBalance - amountUsdc;
      } else {
        newBalance = currentBalance + amountUsdc;
      }
      localStorage.setItem(balanceKey, newBalance.toFixed(2));

      const posKey = `siftle_mock_pos_${marketAddress.toLowerCase()}_${activeWalletAddress.toLowerCase()}`;
      let position: ArcMarketPosition = { yesSharesUsdc: 0, noSharesUsdc: 0 };
      const storedPos = localStorage.getItem(posKey);
      if (storedPos) {
        try {
          position = JSON.parse(storedPos);
        } catch {}
      }

      if (mode === "buy") {
        if (side === "yes") {
          position.yesSharesUsdc += amountUsdc;
        } else {
          position.noSharesUsdc += amountUsdc;
        }
      } else {
        if (side === "yes") {
          position.yesSharesUsdc = Math.max(0, position.yesSharesUsdc - amountUsdc);
        } else {
          position.noSharesUsdc = Math.max(0, position.noSharesUsdc - amountUsdc);
        }
      }
      localStorage.setItem(posKey, JSON.stringify(position));

      return "0xmocktxhash" + Math.random().toString(16).slice(2);
    }
  }

  // Real Circle transaction execution
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

export const shortenAddress = (account: string): string => `${account.slice(0, 6)}...${account.slice(-4)}`;
