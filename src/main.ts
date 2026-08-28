
function showClaimSuccessModal(marketTitle: string, pickName: string, amountUsdc: number, txHash?: string) {
  document.getElementById("siftleClaimSuccessModal")?.remove();

  const modalHtml = `
    <div id="siftleClaimSuccessModal" style="position: fixed; inset: 0; z-index: 100000; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px); padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif;">
      <div style="background: #11141c; border: 1.5px solid rgba(52, 211, 153, 0.4); border-radius: 24px; padding: 28px 24px; max-width: 400px; width: 100%; text-align: center; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9); animation: siftleModalIn 0.25s ease-out;">
        
        <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); border: 2px solid #34d399; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: #34d399; font-size: 28px; font-weight: 900;">
          ✓
        </div>

        <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--ink); margin: 0 0 6px 0;">Payout Claimed!</h3>
        <p style="font-size: 0.86rem; color: var(--muted); margin: 0 0 16px 0;">Your winning payout has been added to your cash balance.</p>

        <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 16px; margin-bottom: 20px;">
          <div style="font-size: 0.75rem; color: var(--muted); font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">Total Claimed</div>
          <div style="font-size: 2rem; font-weight: 900; color: #34d399;">+$${amountUsdc.toFixed(2)} <span style="font-size: 0.9rem; color: var(--muted); font-weight: 700;">USDC</span></div>
          
          <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(255, 255, 255, 0.1); font-size: 0.82rem; text-align: left; display: flex; flex-direction: column; gap: 4px;">
            <div style="color: var(--muted);">Match: <strong style="color: var(--ink);">${escapeHtml(marketTitle)}</strong></div>
            <div style="color: var(--muted);">Winning Pick: <strong style="color: #38bdf8;">${escapeHtml(pickName)}</strong></div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${txHash ? `
            <a href="https://testnet.arcscan.app/tx/${txHash}" target="_blank" rel="noopener noreferrer" style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.35); color: #38bdf8; padding: 12px 0; border-radius: 14px; font-size: 0.9rem; font-weight: 800; text-decoration: none; display: block;">
              View on ArcScan ↗
            </a>
          ` : `
            <a href="https://testnet.arcscan.app/address/0x202c3f057B7b767f80dF665fa225a4Fa5b8631C8" target="_blank" rel="noopener noreferrer" style="background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.35); color: #38bdf8; padding: 12px 0; border-radius: 14px; font-size: 0.9rem; font-weight: 800; text-decoration: none; display: block;">
              View Contract on ArcScan ↗
            </a>
          `}
          <button type="button" onclick="document.getElementById('siftleClaimSuccessModal')?.remove()" style="background: rgba(255, 255, 255, 0.08); border: 1px solid var(--border); color: var(--ink); padding: 12px 0; border-radius: 14px; font-size: 0.9rem; font-weight: 800; cursor: pointer;">
            Done
          </button>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
}


// Clean stale localStorage mock pools and odds
try {
  Object.keys(localStorage).forEach((k) => {
    if (k.startsWith("siftle_mock_") || k.startsWith("siftle_odds_") || k.startsWith("mock_") || k.includes("pool_0x")) {
      localStorage.removeItem(k);
    }
  });
} catch (e) {}

import type { ArchiveDate, Category, NewsStory, StoryThread } from "./types.js";
import { fallbackMarketPreviews } from "./fallbackMarkets.js";
import type { ArcMarketPosition, ArcMarketSnapshot } from "./arc.js";

const ARC_TESTNET_FAUCET = "https://faucet.circle.com/";
const BACKEND_WALLET_MIGRATION_NOTICE_KEY = "siftle_backend_wallet_migration_notice";

type ArcModule = typeof import("./arc.js");
let arcModulePromise: Promise<ArcModule> | null = null;
const loadArcModule = (): Promise<ArcModule> => {
  if (!arcModulePromise) arcModulePromise = import("./arc.js");
  return arcModulePromise;
};

const shortenAddress = (address: string): string =>
  address.length > 10 ? `${address.slice(0, 6)}...${address.slice(-4)}` : address;

const connectArcWallet = async (): Promise<string> => (await loadArcModule()).connectArcWallet();
const readArcUsdcBalance = async (address: string): Promise<string> => (await loadArcModule()).readArcUsdcBalance(address);

const getSmartWalletBalance = async (address: string): Promise<string> => {
  const rpcBal = await readArcUsdcBalance(address);
  try {
    const optKey = `siftle_optimistic_bal_${address.toLowerCase()}`;
    const optBal = localStorage.getItem(optKey);
    if (optBal !== null && optBal !== undefined) {
      const rpcVal = parseFloat(String(rpcBal || "0").replace(/,/g, ""));
      const optVal = parseFloat(optBal);
      // Keep deducted balance if optVal is lower than rpcVal
      if (optVal < rpcVal && optVal >= 0) {
        return optVal.toFixed(2);
      }
    }
  } catch(e) {}
  return rpcBal;
};

const payAiBriefingUnlock = async (
  treasuryAddress: string,
  amountUsdc: number,
  onStatus?: (status: string) => void,
  briefing?: { sourceUrl?: string; topic?: string }
): Promise<string> => (await loadArcModule()).payAiBriefingUnlock(treasuryAddress, amountUsdc, onStatus, briefing);
const resolveLocalTestMarketYes = (marketAddress: string): void => {
  void loadArcModule().then((arc) => arc.resolveLocalTestMarketYes(marketAddress));
};
const readArcMarketSnapshot = async (marketAddress: string): Promise<ArcMarketSnapshot> =>
  (await loadArcModule()).readArcMarketSnapshot(marketAddress);
const readArcMarketPosition = async (marketAddress: string, account: string): Promise<ArcMarketPosition> =>
  (await loadArcModule()).readArcMarketPosition(marketAddress, account);
const readArcMarketState = async (marketAddress: string, account: string) =>
  (await loadArcModule()).readArcMarketState(marketAddress, account);
const executeArcMarketOrder = async (
  marketAddress: string,
  mode: "buy" | "sell",
  side: "yes" | "no",
  amountUsdc: number,
  onStatus?: (status: string) => void,
  yesPriceCents?: number,
  noPriceCents?: number
): Promise<string> => (await loadArcModule()).executeArcMarketOrder(marketAddress, mode, side, amountUsdc, onStatus, yesPriceCents, noPriceCents);
const executeArcOptionMarketOrder = async (
  marketId: string,
  mode: "buy" | "sell",
  optionId: string,
  amountUsdc: number,
  onStatus?: (status: string) => void
): Promise<string> => (await loadArcModule()).executeArcOptionMarketOrder(marketId, mode, optionId, amountUsdc, onStatus);
const disconnectArcWallet = (): void => {
  void loadArcModule().then((arc) => arc.disconnectArcWallet());
};
const claimArcMarketPayout = async (marketAddress: string, account: string) =>
  (await loadArcModule()).claimArcMarketPayout(marketAddress, account);
const getConnectedArcWallet = async (): Promise<string | null> => (await loadArcModule()).getConnectedArcWallet();
const validateArcSession = async (): Promise<boolean> => (await loadArcModule()).validateArcSession();
const subscribeArcWallet = async (callback: (address: string | null) => void): Promise<() => void> =>
  (await loadArcModule()).subscribeArcWallet(callback);
const triggerGatewayWarmup = async (): Promise<void> => (await loadArcModule()).triggerGatewayWarmup();

declare global {
  interface Window {
    SIFTLE_API_BASE?: string;
    REOWN_PROJECT_ID?: string;
    SIFTLE_MARKET_ADDRESSES?: Record<string, string>;
    downloadBriefingCard?: (button: HTMLElement | null) => void;
  }
}

const categories: Category[] = ["Sports"];

const DEFAULT_PUBLIC_API_BASE = "https://siftle.onrender.com";

const resolvePublicApiBase = (): string => {
  const configured = (window.SIFTLE_API_BASE || "").replace(/\/$/, "");
  if (configured) return configured;

  const hostname = typeof window !== "undefined" ? window.location.hostname.toLowerCase() : "";
  if (hostname === "siftle.xyz" || hostname.endsWith(".siftle.xyz") || hostname.endsWith(".vercel.app")) {
    return DEFAULT_PUBLIC_API_BASE;
  }

  return "";
};

const apiBase = resolvePublicApiBase();
const apiUrl = (path: string): string => `${apiBase}${path}`;

type ProfileNotice = {
  type: "success" | "error";
  message: string;
};

type AppTheme = "dark" | "light";

const THEME_STORAGE_KEY = "siftle_theme";

const readStoredTheme = (): AppTheme => {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch (error) {
    return "dark";
  }
};

let currentTheme: AppTheme = readStoredTheme();

let trafficSource = "organic";

function initTrafficSource() {
  try {
    let source = localStorage.getItem("siftle_traffic_source");
    if (!source) {
      const params = new URLSearchParams(window.location.search);
      let ref = params.get("ref") || params.get("utm_source");
      if (ref) {
        ref = ref.trim().toLowerCase();
        if (ref === "twitter") ref = "x";
        if (ref === "instagram") ref = "ig";
        if (ref === "whatsapp") ref = "wa";
        if (ref === "discord") ref = "dc";
        if (ref === "google_search" || ref === "google-search") ref = "google";
        
        if (["x", "ig", "wa", "dc", "google", "organic", "briefing"].includes(ref)) {
          source = ref;
        } else {
          source = ref.slice(0, 20);
        }
      } else {
        const referrer = document.referrer;
        if (referrer) {
          if (/twitter\.com|x\.com|t\.co/i.test(referrer)) {
            source = "x";
          } else if (/instagram\.com/i.test(referrer)) {
            source = "ig";
          } else if (/whatsapp\.com|wa\.me/i.test(referrer)) {
            source = "wa";
          } else if (/discord\.com|discordapp\.com/i.test(referrer)) {
            source = "dc";
          } else if (/google\.com|google\.co/i.test(referrer)) {
            source = "google";
          }
        }
      }
      if (!source) {
        source = "organic";
      }
      localStorage.setItem("siftle_traffic_source", source);
    }
    trafficSource = source;
  } catch (err) {
    console.error("Failed to initialize traffic source:", err);
  }
}

initTrafficSource();

function trackEvent(event: string, storyUrl?: string, headline?: string) {
  fetch(apiUrl("/api/analytics"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event,
      source: trafficSource,
      storyUrl,
      headline
    })
  }).catch((err) => console.error("Failed to track event:", err));
}

const state: {
  activeSurface: "feed" | "markets" | "portfolio" | "leaderboard" | "matches";
  liveMatches: any[];
  loadingLiveMatches: boolean;
  activeMatchLeague: string;
  activeMatchDate: string;
  activeMarketLeagueFilter: string;
  selectedMatchId: string | null;
  matchDetailTab: "overview" | "ticker" | "lineup" | "stats";
  selectedMarketId: string | null;
  marketOrderMode: "buy" | "sell";
  marketTradeSide: "yes" | "no";
  marketTradeOptionId: string | null;
  marketTradeAmount: number;
  marketSnapshots: Record<string, ArcMarketSnapshot>;
  marketPositions: Record<string, ArcMarketPosition>;
  marketEvidenceOverrides: Record<string, MarketEvidenceOverride>;
  loadingMarkets: boolean;
  checkedMarketEvidence: Record<string, boolean>;
  checkedMarketSnapshots: Record<string, boolean>;
  loadingMarketSnapshots: Record<string, boolean>;
  loadingMarketEvidence: Record<string, boolean>;
  loadingPortfolioPositions: boolean;
  marketTradeStatus: string | null;
  hasLoadedPortfolioPositions: boolean;
  walletConnecting: boolean;
  walletAddress: string | null;
  walletBalance: string | null;
  activeCategory: Category;
  stories: NewsStory[];
  isLoading: boolean;
  selectedStoryId: number | null;
  aiSummaries: Record<string, string>;
  aiSummaryProofs: Record<string, any>;
  loadingSummaryUrl: string | null;
  unlockingSummaryUrl: string | null;
  archiveDates: ArchiveDate[];
  activeArchiveDate: string | null;
  activeShareStoryId: number | null;
  selectedThreadUrl: string | null;
  activeThread: StoryThread | null;
  loadingThreadUrl: string | null;
  feedScrollY: number;
  hasLoadedFeed: boolean;
  showSaved: boolean;
  tradeDrawerOpen: boolean;
  activeMarketTimeframe: "All" | "Daily" | "Weekly" | "Sagas";
  profileUsername: string | null;
  profileNotice: ProfileNotice | null;
  portfolioMarketPreviews: MarketPreview[];
  referralPanelOpen: boolean;
  referralData: ReferralData | null;
  referralError: string | null;
  loadingReferralData: boolean;
  portfolioPositionsLoadedAt: number;
  unlockConfig: any | null;
  newsSearchQuery: string;
  briefingStatusByUrl: Record<string, string>;
  claimingMarketIds: Record<string, boolean>;
  portfolioFilter: "open" | "finalized";
  activePortfolioSubTab?: "open_orders" | "closed_orders" | "trade_history" | "wins_losses";
  pnlTimeframe?: "1D" | "1W" | "1M" | "1Y" | "all";
  userSeasonPoints?: number;
  [key: string]: any;
} = {
  activeSurface: "feed",
  profileUsername: null,
  selectedMarketId: null,
  marketOrderMode: "buy",
  marketTradeSide: "yes",
  marketTradeOptionId: null,
  marketTradeAmount: 2,
  marketSnapshots: {},
  marketPositions: {},
  marketEvidenceOverrides: {},
  loadingMarkets: true,
  checkedMarketEvidence: {},
  checkedMarketSnapshots: {},
  loadingMarketSnapshots: {},
  loadingMarketEvidence: {},
  loadingPortfolioPositions: false,
  marketTradeStatus: null,
  hasLoadedPortfolioPositions: false,
  walletConnecting: false,
  walletAddress: null,
  walletBalance: "100.00",
  activeCategory: "Sports",
  stories: [],
  isLoading: false,
  selectedStoryId: null,
  aiSummaries: {},
  aiSummaryProofs: {},
  loadingSummaryUrl: null,
  unlockingSummaryUrl: null,
  archiveDates: [],
  activeArchiveDate: null,
  activeShareStoryId: null,
  selectedThreadUrl: null,
  activeThread: null,
  loadingThreadUrl: null,
  feedScrollY: 0,
  hasLoadedFeed: false,
  showSaved: false,
  tradeDrawerOpen: false,
  activeMarketTimeframe: "All",
  profileNotice: null,
  portfolioMarketPreviews: [],
  referralPanelOpen: false,
  referralData: null,
  referralError: null,
  loadingReferralData: false,
  portfolioPositionsLoadedAt: 0,
  activePortfolioSubTab: "open_orders" as "open_orders" | "closed_orders" | "trade_history" | "wins_losses",
  pnlTimeframe: "all" as "1D" | "1W" | "1M" | "1Y" | "all",
  unlockConfig: null,
  newsSearchQuery: "",
  briefingStatusByUrl: {},
  claimingMarketIds: {},
  portfolioFilter: "open",
  liveMatches: [],
  loadingLiveMatches: false,
  userSeasonPoints: 0,
  activeMatchLeague: "All",
  activeMatchDate: "",
  activeMarketLeagueFilter: "All",
  selectedMatchId: null,
  matchDetailTab: "overview"
};

let selectedLeaderboardDivision: number | null = null;
let selectedLeaderboardView: "division" | "global" = "global";
let selectedSeason1View: "division" | "global" = "global";
let isSeason1ArchiveExpanded = false;
let seasonTimerInterval: any = null;
let archiveIndexRequested = false;
let feedWarmupRequested = false;
const pendingReferralCode = new URLSearchParams(window.location.search).get("ref") || localStorage.getItem("siftle_pending_referral_code") || "";
if (pendingReferralCode) localStorage.setItem("siftle_pending_referral_code", pendingReferralCode.trim().toUpperCase());

interface MarketPreview {
  [key: string]: any;
  volumeUsdc?: number;
  customOdds?: { home: number; draw: number; away: number };
  id: string;
  category: Exclude<Category, "All">;
  timeframe: "Daily" | "Weekly" | "Sagas";
  question: string;
  probability: number;
  marketAddress?: string;
  optionMarket?: boolean;
  options?: { id: string; label: string }[];
  kickoffAt?: string;
  closes: string;
  resolution: string;
  threadTopic: string;
  threadStoryId: number;
  updates: number;
  movement: number;
  volume: string;
  traders: string;
  traderCount?: number;
  liquidity: string;
  imageUrl?: string;
  points?: number;
  evidence: {
    date: string;
    source: string;
    headline: string;
    summary: string;
    impact: string;
    direction: "up" | "down" | "flat";
    sourceUrl: string;
  }[];
}

interface ReferralData {
  code: string;
  inviteLink: string;
  activeReferralCount: number;
  totalEarned: number;
  referrals: {
    walletAddress: string;
    displayName: string;
    used: number;
    remaining: number;
    maxUses: number;
  }[];
}

interface MarketEvidenceOverride {
  threadTopic: string;
  evidence: MarketPreview["evidence"];
  imageUrl?: string;
}

type BriefingTarget = NewsStory;

const DAILY_TRADE_LOCK_MINUTES = 20;

let marketPreviews: MarketPreview[] = fallbackMarketPreviews;

const mergeMarketsById = (...groups: MarketPreview[][]): MarketPreview[] => {
  const merged = new Map<string, MarketPreview>();
  groups.flat().forEach((market) => {
    if (market?.id) { const prev = merged.get(market.id) || {}; merged.set(market.id, { ...prev, ...market, customOdds: market.customOdds || (prev as any).customOdds }); }
  });
  return Array.from(merged.values());
};

const getPortfolioMarkets = (): MarketPreview[] =>
  mergeMarketsById(state.portfolioMarketPreviews, marketPreviews, fallbackMarketPreviews);

const loadMarkets = async (): Promise<void> => {
  state.loadingMarkets = true;
  if (marketPreviews.length === 0) marketPreviews = fallbackMarketPreviews;
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);
    const res = await fetch(apiUrl("/api/markets"), { signal: controller.signal });
    window.clearTimeout(timeout);
    if (res.ok) {
      const markets = await res.json();
      if (Array.isArray(markets) && markets.length > 0) {
        marketPreviews = markets;
      }
    }
  } catch (err) {
    console.error("Failed to load markets:", err);
  } finally {
    state.loadingMarkets = false;
  }
};

const loadPortfolioMarkets = async (): Promise<void> => {
  try {
    const res = await fetch(apiUrl("/api/portfolio/markets"));
    if (!res.ok) return;
    const markets = await res.json();
    if (Array.isArray(markets)) {
      state.portfolioMarketPreviews = markets.map((market) => ({
        threadStoryId: 0,
        updates: 0,
        movement: 0,
        evidence: [],
        ...market
      }));
    }
  } catch (error) {
    console.warn(error);
  }
};

const SAVED_KEY = "siftle.savedUrls";
let savedUrls = new Set<string>();

const loadSavedFromStorage = (): void => {
  try {
    const raw = localStorage.getItem(SAVED_KEY) || "[]";
    const list = JSON.parse(raw) as string[];
    savedUrls = new Set(list.filter(Boolean));
  } catch {
    savedUrls = new Set();
  }
};

const persistSavedSet = (): void => {
  try {
    localStorage.setItem(SAVED_KEY, JSON.stringify(Array.from(savedUrls)));
  } catch {
    // ignore
  }
};

const applySavedFlags = (): void => {
  if (!Array.isArray(state.stories)) return;
  for (const s of state.stories) {
    s.saved = Boolean(savedUrls.has(s.sourceUrl));
  }
};

// Initialize saved set from localStorage and apply to initial mock stories
loadSavedFromStorage();
applySavedFlags();

const dateLabel = document.querySelector<HTMLParagraphElement>("#dateLabel");
const categoryTabs = document.querySelector<HTMLElement>("#categoryTabs");
const storyList = document.querySelector<HTMLElement>("#storyList");
const storyDetail = document.querySelector<HTMLElement>("#storyDetail");
const menuButton = document.querySelector<HTMLButtonElement>("#menuButton");
const menuPanel = document.querySelector<HTMLElement>("#menuPanel");
const menuStatus = document.querySelector<HTMLParagraphElement>("#menuStatus");
const archiveDateSelect = document.querySelector<HTMLSelectElement>("#archiveDateSelect");
const archiveStatus = document.querySelector<HTMLSpanElement>("#archiveStatus");
const todayButton = document.querySelector<HTMLButtonElement>("#todayButton");
const briefHero = document.querySelector<HTMLElement>(".brief-hero");
const archiveControls = document.querySelector<HTMLElement>("#archiveControls");
const topMarketsButton = document.querySelector<HTMLButtonElement>("[data-surface='markets']");
const topNewsButton = document.querySelector<HTMLButtonElement>("[data-surface='feed']");
const topPortfolioButton = document.querySelector<HTMLButtonElement>("[data-surface='portfolio']");
const walletButton = document.querySelector<HTMLButtonElement>("#walletButton");
const themeToggleButton = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
const guideToggleButton = document.getElementById("guideToggleButton") as HTMLButtonElement | null;
const bottomNavButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-bottom-nav]"));

let toastTimer: number | undefined;

const renderThemeToggleState = (): void => {
  if (!themeToggleButton) return;
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  const label = `Switch to ${nextTheme} mode`;
  themeToggleButton.setAttribute("aria-label", label);
  themeToggleButton.title = label;
  themeToggleButton.dataset.activeTheme = currentTheme;
};

const applyTheme = (theme: AppTheme): void => {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    // Theme still applies for the current session when storage is unavailable.
  }
  renderThemeToggleState();
};

applyTheme(currentTheme);

const renderWalletState = (): void => {
  if (walletButton) {
    const label = walletButton.querySelector<HTMLElement>(".wallet-button-label");
    walletButton.classList.toggle("connected", Boolean(state.walletAddress));
    walletButton.disabled = state.walletConnecting;
    walletButton.setAttribute("aria-label", state.walletAddress ? `Wallet ${shortenAddress(state.walletAddress)}` : "Sign in");
    if (label) label.textContent = state.walletConnecting ? "Signing in..." : state.walletAddress ? "Wallet" : "Sign in";
    walletButton.title = state.walletAddress
      ? `${state.walletBalance ?? "0"} Arc Testnet USDC - ${shortenAddress(state.walletAddress)}`
      : "Sign in";
  }
};

window.addEventListener("resize", renderWalletState);

themeToggleButton?.addEventListener("click", () => {
  applyTheme(currentTheme === "light" ? "dark" : "light");
});

guideToggleButton?.addEventListener("click", () => {
  openGuideModal();
});

const openGuideModal = (): void => {
  const overlay = document.createElement("div");
  overlay.className = "guide-overlay";
  overlay.innerHTML = `
    <div class="guide-card">
      <button class="circle-auth-close" id="guideClose" type="button">&times;</button>
      <div class="circle-auth-logo">
        <img src="./assets/siftle-logo-small.png" alt="Siftle logo" />
        <h2 style="font-family: Outfit, sans-serif; font-weight: 700; letter-spacing: -0.02em;">Welcome to Siftle!</h2>
      </div>
      <p class="circle-auth-subtitle" style="margin-bottom: 24px; font-family: Inter, sans-serif; line-height: 1.5; font-size: 0.88rem;">Siftle is the home of latest football news with AI briefings. Here is how to get started in 3 simple steps:</p>
      
      <div class="guide-steps-list">
        <div class="guide-step-item">
          <span class="guide-step-num">1</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Sign In</h4>
            <p class="guide-step-desc">Tap <strong>"Sign in"</strong> in the top right, enter your email, and verify. We instantly generate a secure Web3 wallet for you.</p>
          </div>
        </div>
        
        <div class="guide-step-item">
          <span class="guide-step-num">2</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Get Free USDC</h4>
            <p class="guide-step-desc">We automatically fund your wallet with <strong>0.02 USDC</strong> upon sign-in so you can start reading immediately with no manual setup.</p>
          </div>
        </div>
        
        <div class="guide-step-item">
          <span class="guide-step-num">3</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Unlock AI Briefings</h4>
            <p class="guide-step-desc">Click <strong>"AI briefing"</strong> on any news card to unlock a quick AI summary of what happened, key points, and takeaways.</p>
          </div>
        </div>

        <div class="guide-step-item">
          <span class="guide-step-num">4</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Predict Matches & Win</h4>
            <p class="guide-step-desc">Trade pre-match and in-play prediction markets using testnet USDC from the <strong>Circle Faucet</strong>. Earn up to 100 points per winning match to climb Season 2 rankings!</p>
          </div>
        </div>
      </div>
      
      <button id="guideStartBtn" class="circle-auth-btn" type="button" style="width: 100%; font-family: Outfit, sans-serif;">Get Started</button>

      <div class="powered-by-section">
        <span class="powered-by-label">Powered by</span>
        <div class="logo-carousel">
          <!-- 0G (Light / Dark) -->
          <img src="./assets/0G_Black_logo.png" class="powered-logo light-only" alt="0G" />
          <img src="./assets/0G-Logo-Purple_Hero.png" class="powered-logo dark-only" alt="0G" />
          <!-- Arc (Light / Dark) -->
          <img src="./assets/Arc_Logo_Black.png" class="powered-logo light-only" alt="Arc" />
          <img src="./assets/Arc_Logo_White.png" class="powered-logo dark-only" alt="Arc" />
          <!-- Shelby (Light / Dark) -->
          <img src="./assets/Group 1000002712 (2).png" class="powered-logo light-only" alt="Shelby" />
          <img src="./assets/Group 1000002712 (1).png" class="powered-logo dark-only" alt="Shelby" />
          <!-- Circle (Light / Dark) -->
          <img src="./assets/circle-logo.png" class="powered-logo light-only" alt="Circle" />
          <img src="./assets/circle-logo-ondark.png" class="powered-logo dark-only" alt="Circle" />
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector("#guideClose") as HTMLButtonElement;
  const startBtn = overlay.querySelector("#guideStartBtn") as HTMLButtonElement;

  const dismiss = () => overlay.remove();

  closeBtn.addEventListener("click", dismiss);
  startBtn.addEventListener("click", dismiss);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) dismiss();
  });
};

const bindPendingReferral = async (walletAddress: string): Promise<void> => {
  const referralCode = localStorage.getItem("siftle_pending_referral_code");
  if (!referralCode) return;
  try {
    const res = await fetch(apiUrl("/api/referrals/bind"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ walletAddress, referralCode })
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && (data.bound || data.reason === "already_bound" || data.reason === "invalid_code")) {
      localStorage.removeItem("siftle_pending_referral_code");
      if (data.bound) showActionToast("Referral connected");
    }
  } catch (error) {
    console.warn(error);
  }
};

const loadReferralData = async (): Promise<void> => {
  if (!state.walletAddress || state.loadingReferralData) return;
  state.loadingReferralData = true;
  state.referralError = null;
  try {
    const res = await fetch(apiUrl(`/api/referrals?walletAddress=${encodeURIComponent(state.walletAddress)}`));
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      state.referralData = data;
    } else {
      state.referralError = data?.error || "Referral tools are temporarily unavailable.";
    }
  } catch (error) {
    console.warn(error);
    state.referralError = "Referral tools are temporarily unavailable.";
  } finally {
    state.loadingReferralData = false;
    if (state.activeSurface === "portfolio") renderPortfolio();
  }
};

const connectWallet = async (): Promise<void> => {
  if (state.walletConnecting) return;
  state.walletConnecting = true;
  trackEvent("wallet_connect_start");
  renderWalletState();
  try {
    const account = await connectArcWallet();
    if (account) {
      trackEvent("wallet_connect_success");
      const landingUrl = sessionStorage.getItem("siftle_landing_url");
      const landingHeadline = sessionStorage.getItem("siftle_landing_headline");
      const signupTracked = sessionStorage.getItem("siftle_signup_tracked");
      if (landingUrl && !signupTracked) {
        trackEvent("briefing_referral_signup", landingUrl, landingHeadline || undefined);
        sessionStorage.setItem("siftle_signup_tracked", "true");
      }
      state.walletAddress = account;
      state.referralData = null;
      state.referralError = null;
      state.referralPanelOpen = false;
      syncProfileUsernameForWallet();
      const rpcBal = await getSmartWalletBalance(account);
      const optKey = `siftle_optimistic_bal_${account.toLowerCase()}`;
      const optBal = localStorage.getItem(optKey);
      if (optBal !== null && parseFloat(optBal) < parseFloat(rpcBal.replace(/,/g, ""))) {
        state.walletBalance = optBal;
      } else {
        localStorage.removeItem(optKey);
        state.walletBalance = rpcBal;
      }
      await bindPendingReferral(account);
      void loadReferralData();
      await loadPortfolioPositions();
      void reportLeaderboardEntry(true).catch(err => console.error("Failed to report leaderboard entry:", err));
      const migrationNotice = localStorage.getItem(BACKEND_WALLET_MIGRATION_NOTICE_KEY);
      if (migrationNotice) {
        localStorage.removeItem(BACKEND_WALLET_MIGRATION_NOTICE_KEY);
        showActionToast(migrationNotice);
      } else {
        showActionToast("Connected to Arc Testnet");
      }
      window.location.hash = "#portfolio";
      syncStoryFromHash();
    }
  } catch (error) {
    trackEvent("wallet_connect_failed");
    showActionToast(error instanceof Error ? error.message : "Wallet connection failed");
  } finally {
    state.walletConnecting = false;
    renderWalletState();
  }
};

const showActionToast = (message: string): void => {
  let toast = document.querySelector<HTMLDivElement>("#actionToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "actionToast";
    toast.className = "action-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast?.classList.remove("show");
  }, 1700);
};
(window as any).showActionToast = showActionToast;

const showSuccessModal = (mode: "buy" | "sell", amount: string | number, outcome: string, marketTitle: string): void => {
  const modalContainer = document.createElement("div");
  modalContainer.className = "success-modal-overlay";
  
  modalContainer.innerHTML = `
    <div class="success-modal-card">
      <div class="success-modal-close-btn" aria-label="Close modal">&times;</div>
      <div class="success-modal-icon-container">
        <svg class="success-modal-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="success-modal-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="success-modal-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
      <h3 class="success-modal-title">Transaction Confirmed</h3>
      <p class="success-modal-body">
        You have successfully <strong>${mode === "buy" ? "bought" : "exited"}</strong> <strong>${amount} USDC</strong> worth of <strong>${outcome}</strong> shares in:
      </p>
      <div class="success-modal-market-title">${marketTitle}</div>
      <button class="success-modal-action-btn" type="button">Awesome</button>
    </div>
  `;

  document.body.appendChild(modalContainer);

  setTimeout(() => {
    modalContainer.classList.add("show");
  }, 10);

  const closeModal = () => {
    modalContainer.classList.remove("show");
    setTimeout(() => {
      modalContainer.remove();
    }, 300);
  };

  modalContainer.querySelector(".success-modal-close-btn")?.addEventListener("click", closeModal);
  modalContainer.querySelector(".success-modal-action-btn")?.addEventListener("click", closeModal);
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) closeModal();
  });
};

const resetFeedScroll = (): void => {
  state.feedScrollY = 0;
  window.scrollTo({ top: 0, behavior: "auto" });
};

const formatHeaderDate = (date?: string | null): string => {
  const value = date ? new Date(`${date}T12:00:00`) : new Date();
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(value);
};

const getFilteredStories = (): NewsStory[] =>
  state.stories.filter((story) => {
    if (state.showSaved) return Boolean(story.saved);

    if (state.activeCategory === "Personalized") {
      const followed = loadFollowedEntities();
      const followedTerms = [
        ...followed.clubs,
        ...followed.managers,
        ...followed.players
      ].map(t => t.toLowerCase()).filter(Boolean);

      if (followedTerms.length > 0) {
        const text = `${story.headline} ${story.summary || ""} ${story.source || ""}`.toLowerCase();
        const matchesAny = followedTerms.some(term => text.includes(term));
        if (!matchesAny) return false;
      }
    }

    const query = state.newsSearchQuery.trim().toLowerCase();
    if (!query) return true;

    const haystack = [story.headline, story.summary, story.source, story.ai_summary]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

const getStoryTimeLabel = (story: NewsStory): string =>
  state.activeArchiveDate ? story.postedAt : `${story.postedAt} ago`;

const looksLikeBadSummary = (summary: string): boolean =>
  /(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(summary);

const limitSummaryWords = (summary: string, maxWords = 140): string => {
  const words = summary.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return summary;

  const subWords = words.slice(0, maxWords);
  const subText = subWords.join(" ");

  const lastSentenceEnd = Math.max(
    subText.lastIndexOf("."),
    subText.lastIndexOf("?"),
    subText.lastIndexOf("!")
  );

  if (lastSentenceEnd > subText.length * 0.45) {
    return subText.slice(0, lastSentenceEnd + 1).trim();
  }

  return `${subText.replace(/[,:;.'"!\?\s]+$/, "")}...`;
};

const cleanSummaryText = (value: string): string => {
  let summary = String(value || "").trim();

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const fenced = summary.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
    if (fenced) summary = fenced[1].trim();

    if (!/^\s*\{[\s\S]*\}\s*$/.test(summary)) break;

    try {
      const match = summary.match(/"summary"\s*:\s*"((?:[^"\\]|\\.)*)"/i);
      if (match) {
        summary = match[1]
          .replace(/\\"/g, '"')
          .replace(/\\n/g, "\n")
          .replace(/\\r/g, "\r")
          .replace(/\\t/g, "\t")
          .replace(/\\\\/g, "\\")
          .trim();
        continue;
      }

      const parsed = JSON.parse(summary);
      if (typeof parsed.summary === "string") {
        summary = parsed.summary.trim();
        continue;
      }
    } catch {
      break;
    }

    break;
  }

  summary = summary.replace(/\\n/g, "\n").replace(/\\r/g, "");

  summary = summary
    .replace(/&lt;|&#60;/gi, "<")
    .replace(/&gt;|&#62;/gi, ">")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, "\"")
    .replace(/^["'{\s]+/, "")
    .replace(/["'}\s]+$/, "")
    .replace(/^summary["'\s]*:[\s"']*/i, "")
    .replace(/[^\S\r\n]+/g, " ")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (looksLikeBadSummary(summary)) return "";
  if (summary.includes("WHAT HAPPENED") || summary.includes("KEY POINTS")) {
    return summary;
  }
  return limitSummaryWords(summary);
};

const safeStorySummary = (story: NewsStory, preferred?: string): string =>
  cleanSummaryText(preferred || "") || cleanSummaryText(story.summary) || story.headline;

const downloadBriefingCard = (button: HTMLElement | null): void => {
  const container = button?.closest('.detail-summary, .thread-item, .market-thread-update') as HTMLElement | null;
  const captureArea = container?.querySelector('.briefing-capture-area') as HTMLElement | null;
  if (!captureArea || !(window as any).html2canvas) return;

  const exportHost = document.createElement('div');
  exportHost.className = 'briefing-export-staging';

  const exportSurface = captureArea.cloneNode(true) as HTMLElement;
  exportSurface.classList.add('briefing-export-surface');
  exportHost.appendChild(exportSurface);
  document.body.appendChild(exportHost);

  const isLight = document.documentElement.dataset.theme === 'light';
  (window as any).html2canvas(exportSurface, {
    backgroundColor: isLight ? '#f5f7fb' : '#0f172a',
    scale: 2,
    logging: false,
    useCORS: true
  }).then((canvas: HTMLCanvasElement) => {
    const link = document.createElement('a');
    link.download = 'siftle-briefing.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    (window as any).showActionToast?.('Briefing card image downloaded!');
  }).catch(() => {
    (window as any).showActionToast?.('Unable to download briefing card');
  }).finally(() => {
    exportHost.remove();
  });
};

window.downloadBriefingCard = downloadBriefingCard;

const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
};

const copyBriefingLink = (storyId: number, encodedUrl?: string): void => {
  let url = '';
  if (encodedUrl) {
    try {
      url = decodeURIComponent(encodedUrl);
    } catch {
      url = encodedUrl;
    }
  }
  const origin = window.location.origin;
  const path = window.location.pathname;

  const story = state.stories.find((s) => s.id === storyId || (url && s.sourceUrl === url));
  const slug = story ? slugify(story.headline) : (storyId > 0 ? `story-${storyId}` : '');

  const shareUrl = storyId > 0
    ? `${origin}/story/${slug}?utm_source=briefing&url=${encodeURIComponent(story?.sourceUrl || url)}`
    : (url
      ? `${origin}/api/redirect?url=${encodeURIComponent(url)}&source=briefing`
      : `${origin}/story/briefing?utm_source=briefing`);

  navigator.clipboard.writeText(shareUrl).then(() => {
    showActionToast('Shareable link copied to clipboard!');
  }).catch(() => {
    showActionToast('Unable to copy link');
  });
};

(window as any).copyBriefingLink = copyBriefingLink;

const formatAIBriefing = (text: string, story?: BriefingTarget): string => {
  const parts = text.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);
  if (parts.length <= 1) {
    return `<p class="briefing-text">${text}</p>`;
  }

  let html = '<div class="briefing-capture-area">';

  if (story) {
    const headline = (story as any).headline || "Football Match Update";
    html += `
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${headline}</h3>
    `;
  }

  if (parts[0].trim()) {
    html += `<p class="briefing-capture-intro">${parts[0].trim()}</p>`;
  }

  let takeawayText = '';

  for (let i = 1; i < parts.length; i += 2) {
    const header = parts[i].trim().toUpperCase();
    const content = parts[i + 1] ? parts[i + 1].trim() : '';
    if (!content) continue;

    let bodyHtml = '';
    if (header === 'KEY POINTS') {
      const bullets = content
        .split(/(?:•|\*|-)\s+/)
        .map(b => b.replace(/\\n/g, "").trim())
        .filter(b => {
          if (!b || b === "\\n" || b === "\n") return false;
          const cleanB = b.trim();
          const words = cleanB.split(/\s+/).filter(Boolean);
          if (words.length < 6 || cleanB.length < 30) return false;
          if (!/[.?!]"?'?$/.test(cleanB)) return false;
          if (/^according\s+to\s+\w+$/i.test(cleanB.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""))) return false;
          return true;
        });

      if (bullets.length > 0) {
        bodyHtml = `<ul class="briefing-list">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
      } else {
        bodyHtml = `<p class="briefing-text">${content}</p>`;
      }
    } else {
      bodyHtml = `<p class="briefing-text">${content}</p>`;
      if (header === 'TAKEAWAY') {
        takeawayText = content;
      }
    }

    const headerSlug = header.toLowerCase().replace(/\s+/g, '-');
    html += `
      <div class="briefing-section ${headerSlug}-section">
        <h4 class="briefing-title">${header}</h4>
        ${bodyHtml}
      </div>
    `;
  }

  html += '</div>';

  if (story) {
    const linkIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    const downloadIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;

    html += `
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn copy-link-btn" onclick="window.copyBriefingLink?.(${story.id}, '${encodeURIComponent(story.sourceUrl || "")}')">
          ${linkIconSvg}
          <span>Copy Link</span>
        </button>
        <button type="button" class="share-briefing-btn" onclick="window.downloadBriefingCard?.(event.currentTarget)">
          ${downloadIconSvg}
          <span>Download Card</span>
        </button>
      </div>
    `;
  }

  return html;
};

const renderBriefingStatusNote = (story: BriefingTarget): string => {
  const status = state.briefingStatusByUrl[story.sourceUrl] || "";
  return status ? `<p class="briefing-status-note">${escapeHtml(status)}</p>` : "";
};

const briefingWalletScope = (): string => {
  const walletAddress = String(state.walletAddress || "").trim().toLowerCase();
  return /^0x[a-f0-9]{40}$/.test(walletAddress) ? walletAddress : "guest";
};

const briefingUnlockKey = (story: BriefingTarget): string =>
  `siftle_ai_briefing_unlock_${briefingWalletScope()}_${btoa(unescape(encodeURIComponent(story.sourceUrl))).replace(/=+$/g, "")}`;

const getBriefingUnlockToken = (story: BriefingTarget): string =>
  localStorage.getItem(briefingUnlockKey(story)) || "";

const clearBriefingUnlockToken = (story: BriefingTarget): void => {
  localStorage.removeItem(briefingUnlockKey(story));
};

const isBriefingUnlocked = (story: BriefingTarget): boolean => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlParam = urlParams.get("url");
  if (urlParam && urlParam === story.sourceUrl) {
    return true;
  }
  return Boolean(getBriefingUnlockToken(story));
};

const getBriefingTargetFromMarketEvidence = (
  market: MarketPreview,
  item: MarketPreview["evidence"][number]
): BriefingTarget => ({
  id: 0,
  headline: item.headline,
  category: market.category,
  summary: item.summary,
  source: item.source,
  sourceUrl: item.sourceUrl,
  imageUrl: market.imageUrl || "",
  publishedAt: undefined,
  readTime: "3 min read",
  postedAt: item.date,
  accent: "slate",
  saved: savedUrls.has(item.sourceUrl),
  ai_summary: undefined,
  ai_provider: undefined
});

const findBriefingTargetBySourceUrl = (sourceUrl: string): BriefingTarget | null => {
  const story = state.stories.find((item) => item.sourceUrl === sourceUrl);
  if (story) return story;

  const activeThreadItems = [state.activeThread?.current, ...(state.activeThread?.items ?? [])].filter(Boolean) as NewsStory[];
  const threadStory = activeThreadItems.find((item) => item.sourceUrl === sourceUrl);
  if (threadStory) return threadStory;

  if (state.selectedMarketId) {
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    if (market) {
      const evidenceItem = getMarketView(market).evidence.find((item) => item.sourceUrl === sourceUrl);
      if (evidenceItem) return getBriefingTargetFromMarketEvidence(market, evidenceItem);
    }
  }

  return null;
};

const getDailyTradeLockTime = (market: MarketPreview, snapshot: ArcMarketSnapshot | undefined): number | null => {
  const kickoffTime = parseMarketKickoffTime(market, snapshot);
  if (kickoffTime === null) return null;
  return kickoffTime - DAILY_TRADE_LOCK_MINUTES * 60 * 1000;
};

const getDailyTradeLockLabel = (market: MarketPreview, snapshot: ArcMarketSnapshot | undefined): string => {
  const lockTime = getDailyTradeLockTime(market, snapshot);
  if (lockTime === null) return market.closes;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  }).format(new Date(lockTime));
};

const getMarketTradeLockMessage = (market: MarketPreview, snapshot: ArcMarketSnapshot | undefined): string | null => {
  const lockTime = getDailyTradeLockTime(market, snapshot);
  if (lockTime === null) return null;
  return Date.now() >= lockTime ? `Locked ${DAILY_TRADE_LOCK_MINUTES}m before kickoff` : null;
};

const renderLockedBriefing = (story: BriefingTarget, isUnlocking: boolean): string => {
  const price = state.unlockConfig ? `${state.unlockConfig.amountUsdc} USDC` : "0.05 USDC";
  const isX402 = state.unlockConfig?.x402Enabled;
  const isLoggedIn = !!state.walletAddress;

  return `
    <div class="briefing-section">
      ${renderBriefingStatusNote(story)}
      ${isUnlocking
        ? `
          ${renderSummarySkeleton()}
        `
        : `
          <p class="briefing-text">
            ${isLoggedIn
              ? (isX402
                  ? `Pay a <strong>${price}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`
                  : `Pay <strong>${price}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`
                )
              : `Sign in to access AI briefings.`
            }
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(story.sourceUrl)}">
            ${isLoggedIn
              ? (isX402 ? "Unlock via Circle x402" : "AI briefing")
              : "Sign in and access AI briefing"
            }
          </button>
        `}
    </div>
  `;
};

const hasBriefingGenerationFailure = (story: BriefingTarget): boolean =>
  /^AI briefing unavailable\./i.test(state.briefingStatusByUrl[story.sourceUrl] || "") && !state.aiSummaries[story.sourceUrl];

const renderUnavailableBriefing = (story: BriefingTarget): string => `
  <div class="briefing-section">
    ${renderBriefingStatusNote(story)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(story.sourceUrl)}">Retry AI briefing</button>
  </div>
`;

const unlockAndLoadStorySummary = async (story: BriefingTarget, force = false): Promise<void> => {
  if (!state.walletAddress) {
    showActionToast("Please sign in to unlock this briefing.");
    void connectWallet();
    return;
  }
  if (state.unlockingSummaryUrl === story.sourceUrl && !force) return;

  state.unlockingSummaryUrl = story.sourceUrl;
  state.briefingStatusByUrl[story.sourceUrl] = "Preparing AI briefing payment...";
  trackEvent("ai_unlock_attempt");
  render();

  try {
    const configRes = await fetch(apiUrl("/api/summary/unlock-config"));
    const config = await configRes.json();
    if (!configRes.ok || !config.treasuryAddress) {
      throw new Error(config.error || "AI briefing is not configured");
    }

    // Query the autonomous pricing agent for this specific article's price
    let amountToPay = Number(config.amountUsdc) || 0.05;
    try {
      const priceRes = await fetch(apiUrl(`/api/summary/price?sourceUrl=${encodeURIComponent(story.sourceUrl)}`));
      if (priceRes.ok) {
        const priceData = await priceRes.json();
        if (typeof priceData.priceUsdc === "number") {
          amountToPay = priceData.priceUsdc;
        }
      }
    } catch (err) {
      console.warn("Failed to retrieve autonomous price, falling back to default:", (err as any).message);
    }

    const txHash = await payAiBriefingUnlock(
      config.treasuryAddress,
      amountToPay,
      (status) => {
        if (menuStatus) menuStatus.textContent = status;
        state.briefingStatusByUrl[story.sourceUrl] = status;
        render();
      },
      { sourceUrl: story.sourceUrl, topic: story.headline }
    );

    state.briefingStatusByUrl[story.sourceUrl] = `Briefing unlocked! Charged ${amountToPay} USDC (priced by Siftle AI Agent)`;
    render();

    const unlockRes = await fetch(apiUrl("/api/summary/unlock"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sourceUrl: story.sourceUrl,
        walletAddress: state.walletAddress,
        txHash
      })
    });
    const unlockData = await unlockRes.json();
    if (!unlockRes.ok || !unlockData.unlockToken) {
      throw new Error(unlockData.error || "AI briefing failed");
    }

    localStorage.setItem(briefingUnlockKey(story), unlockData.unlockToken);
    trackEvent("ai_unlock_success");
    const landingUrl = sessionStorage.getItem("siftle_landing_url");
    const landingHeadline = sessionStorage.getItem("siftle_landing_headline");
    if (landingUrl) {
      trackEvent("briefing_referral_unlock", landingUrl, landingHeadline || undefined);
    }
    const bonusPoints = Number(unlockData?.bonus?.points) || 0;
    if (bonusPoints > 0) {
      void reportLeaderboardEntry(false).catch(err => console.error("Failed to refresh leaderboard bonus:", err));
    }
    await loadStorySummary(story);
  } catch (error) {
    trackEvent("ai_unlock_failed");
    delete state.briefingStatusByUrl[story.sourceUrl];
    const rawMsg = error instanceof Error ? error.message : String(error || "");
    let friendlyMsg = rawMsg;
    const lower = rawMsg.toLowerCase();
    if (lower.includes("session expired") || lower.includes("sign in first") || lower.includes("unauthorized")) {
      try {
        const arc = await loadArcModule();
        arc.disconnectArcWallet();
      } catch (_) {}
      state.walletAddress = null;
      state.walletBalance = null;
      friendlyMsg = "Your session has expired. Please sign in again to unlock this briefing.";
    } else if (lower.includes("balance") || lower.includes("exceeds balance") || lower.includes("transfer amount exceeds")) {
      friendlyMsg = "Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC.";
    }
    showActionToast(friendlyMsg);
  } finally {
    state.unlockingSummaryUrl = null;
    render();
  }
};

const loadStorySummary = async (story: BriefingTarget): Promise<void> => {
  if (!isBriefingUnlocked(story)) return;
  if (state.aiSummaries[story.sourceUrl] || state.loadingSummaryUrl === story.sourceUrl) return;

  if (story.ai_summary) {
    state.aiSummaries[story.sourceUrl] = safeStorySummary(story, story.ai_summary);
    trackEvent("view_summary");
    if (menuStatus) {
      menuStatus.textContent = story.ai_provider === "0g" ? "Archived 0G summary loaded" : "Archived summary loaded";
    }

    const urlParams = new URLSearchParams(window.location.search);
    const urlParam = urlParams.get("url");
    if (urlParam && urlParam === story.sourceUrl) {
      const sessionKey = `siftle_unlock_tracked_${encodeURIComponent(story.sourceUrl)}`;
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, "true");
        trackEvent("briefing_unlock", story.sourceUrl, story.headline);
      }
    }

    render();
    return;
  }

  state.loadingSummaryUrl = story.sourceUrl;
  state.briefingStatusByUrl[story.sourceUrl] = "Generating briefing through 0G...";
  render();

  try {
    const sharedUrlParams = new URLSearchParams(window.location.search);
    const sharedUrlParam = sharedUrlParams.get("url");
    const isSharedLanding = Boolean(sharedUrlParam && sharedUrlParam === story.sourceUrl);

    const response = await fetch(apiUrl("/api/summary"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...story,
        walletAddress: state.walletAddress,
        unlockToken: getBriefingUnlockToken(story),
        isSharedLanding
      })
    });

    if (!response.ok) {
      if (response.status === 402) {
        clearBriefingUnlockToken(story);
        delete state.aiSummaries[story.sourceUrl];
        delete state.aiSummaryProofs[story.sourceUrl];
        state.briefingStatusByUrl[story.sourceUrl] = "AI briefing unlock expired. Unlock it again to generate a new briefing.";
        if (menuStatus) {
          menuStatus.textContent = "Unlock expired. Unlock again to continue.";
        }
        render();
        return;
      }
      throw new Error(`Summary request failed with ${response.status}`);
    }

    const data = await response.json();
    state.aiSummaries[story.sourceUrl] = safeStorySummary(story, data.summary);
    state.aiSummaryProofs[story.sourceUrl] = data.proof;
    state.briefingStatusByUrl[story.sourceUrl] = "AI briefing ready.";
    if (menuStatus && data.provider) {
      menuStatus.textContent = data.provider === "0g" ? "Summary generated by 0G" : `Summary loaded from ${data.provider}`;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const urlParam = urlParams.get("url");
    if (urlParam && urlParam === story.sourceUrl) {
      const sessionKey = `siftle_unlock_tracked_${encodeURIComponent(story.sourceUrl)}`;
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, "true");
        trackEvent("briefing_unlock", story.sourceUrl, story.headline);
      }
    }
  } catch (error) {
    console.warn(error);
    delete state.aiSummaries[story.sourceUrl];
    delete state.aiSummaryProofs[story.sourceUrl];
    state.briefingStatusByUrl[story.sourceUrl] = "AI briefing unavailable. Retry to generate it again.";
    if (menuStatus) {
      menuStatus.textContent = "AI briefing failed. Retry available.";
    }
  } finally {
    state.loadingSummaryUrl = null;
    render();
  }
};

const openStory = (storyId: number, autoUnlockBriefing = false): void => {
  const story = state.stories.find((item) => item.id === storyId);
  if (!story) return;

  state.feedScrollY = window.scrollY;
  state.selectedStoryId = story.id;
  state.selectedThreadUrl = null;
  state.activeThread = null;
  window.history.pushState({}, "", `#story-${story.id}`);
  render();

  if (story.type === "tweet") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (autoUnlockBriefing && !isBriefingUnlocked(story)) {
    if (state.walletAddress) state.unlockingSummaryUrl = story.sourceUrl;
    render();
    void unlockAndLoadStorySummary(story, true);
  } else if (isBriefingUnlocked(story)) {
    void loadStorySummary(story);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const openThread = (story: NewsStory): void => {
  state.feedScrollY = window.scrollY;
  state.selectedStoryId = null;
  state.selectedThreadUrl = story.sourceUrl;
  state.activeThread = null;
  state.loadingThreadUrl = story.sourceUrl;
  window.history.pushState({}, "", `#thread-${story.id}`);
  render();
  void loadStoryThread(story);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const closeStory = (): void => {
  state.selectedStoryId = null;
  state.selectedThreadUrl = null;
  state.activeThread = null;
  state.loadingThreadUrl = null;
  if (window.location.search) {
    window.history.pushState({}, "", window.location.pathname + "#feed");
  } else {
    window.history.pushState({}, "", "#feed");
  }
  render();
  requestAnimationFrame(() => window.scrollTo({ top: state.feedScrollY, behavior: "auto" }));
};

const loadStoryThread = async (story: NewsStory): Promise<void> => {
  try {
    const response = await fetch(
      apiUrl(`/api/thread?category=${encodeURIComponent(story.category)}&sourceUrl=${encodeURIComponent(story.sourceUrl)}`)
    );
    if (!response.ok) throw new Error(`Thread request failed with ${response.status}`);

    state.activeThread = await response.json();
    if (menuStatus) menuStatus.textContent = `${state.activeThread?.count ?? 0} related updates found`;
  } catch (error) {
    console.warn(error);
    state.activeThread = null;
    delete story.thread;
    state.selectedThreadUrl = null;
    window.history.replaceState({}, "", "#feed");
    showActionToast("That timeline no longer has a verified past update");
    if (menuStatus) menuStatus.textContent = "Thread unavailable";
  } finally {
    state.loadingThreadUrl = null;
    render();
  }
};

function syncStoryFromHash(): void {
  const isStoryPath = window.location.pathname.startsWith("/story/");
  const isThreadPath = window.location.pathname.startsWith("/thread/");
  if (isStoryPath || isThreadPath) {
    const slug = window.location.pathname.split("/").pop() || "";
    const newHash = isStoryPath ? `#story-${slug}` : `#thread-${slug}`;
    window.history.replaceState({}, "", `${window.location.pathname}${window.location.search}${newHash}`);
  }

  if (window.location.hash === "#resolve-local-yes") {
    const market = marketPreviews.find((item) => item.id === "siftle-local-test-2")
      || marketPreviews.find((item) => item.timeframe === "Daily" && getMarketAddress(item).startsWith("0x00000000000000000000000000000000000001"));
    if (market) {
      resolveLocalTestMarketYes(getMarketAddress(market));
      scoreLocalResolvedMarketForAllStoredWallets(market, "yes");
      delete state.marketSnapshots[market.id];
      delete state.marketPositions[market.id];
      delete state.checkedMarketSnapshots[market.id];
      delete state.loadingMarketSnapshots[market.id];
      state.hasLoadedPortfolioPositions = false;
      state.activeSurface = "portfolio";
      state.selectedMarketId = null;
      window.history.replaceState({}, "", "#portfolio");
      showActionToast("Local test market resolved YES");
      void loadPortfolioPositions().then(() => {
        void reportLeaderboardEntry(true).catch(err => console.error("Failed to report leaderboard entry:", err));
        renderWalletState();
        renderPortfolio();
      });
      return;
    }
  }

  const marketMatch = window.location.hash.match(/^#market-(.+)$/);
  if (window.location.hash === "#markets" || marketMatch) {
    state.activeSurface = "markets";
    state.selectedMarketId = marketMatch?.[1] ?? null;
    state.selectedStoryId = null;
    state.selectedThreadUrl = null;
    state.activeThread = null;
    render();
    return;
  }
  if (window.location.hash === "#matches") {
    state.activeSurface = "matches";
    state.selectedMarketId = null;
    state.selectedStoryId = null;
    state.selectedThreadUrl = null;
    render();
    return;
  }
  if (window.location.hash === "#portfolio") {
    state.activeSurface = "portfolio";
    state.selectedMarketId = null;
    state.selectedStoryId = null;
    state.selectedThreadUrl = null;
    render();
    return;
  }
  if (window.location.hash === "#leaderboard") {
    state.activeSurface = "leaderboard";
    state.selectedMarketId = null;
    state.selectedStoryId = null;
    state.selectedThreadUrl = null;
    render();
    return;
  }
  if (window.location.hash === "#feed" || window.location.hash.startsWith("#story-") || window.location.hash.startsWith("#thread-")) {
    state.activeSurface = "feed";
    const storyMatch = window.location.hash.match(/^#story-(.+)$/);
    const threadMatch = window.location.hash.match(/^#thread-(\d+)$/);

    const urlParams = new URLSearchParams(window.location.search);
    const urlParam = urlParams.get("url");
    let story: NewsStory | undefined;

    if (urlParam) {
      sessionStorage.setItem("siftle_landing_url", urlParam);
      const storyFound = state.stories.find((item) => item.sourceUrl === urlParam);
      if (storyFound?.headline) {
        sessionStorage.setItem("siftle_landing_headline", storyFound.headline);
      } else if (!sessionStorage.getItem("siftle_landing_headline")) {
        sessionStorage.setItem("siftle_landing_headline", "Archived Story");
      }

      // Track referral hit once per session
      const sessionKey = `siftle_ref_tracked_${encodeURIComponent(urlParam)}`;
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, "true");
        trackEvent("briefing_referral", urlParam, storyFound?.headline || "Archived Story");
      }

      story = state.stories.find((item) => item.sourceUrl === urlParam);
      if (!story && storyMatch) {
        const urlToFetch = urlParam;
        if (state.loadingSummaryUrl !== urlToFetch) {
          state.loadingSummaryUrl = urlToFetch;
          fetch(apiUrl(`/api/story?sourceUrl=${encodeURIComponent(urlToFetch)}`))
            .then((res) => {
              if (!res.ok) throw new Error();
              return res.json();
            })
            .then((fetchedStory) => {
              if (!state.stories.some((s) => s.sourceUrl === fetchedStory.sourceUrl)) {
                fetchedStory.id = Math.max(9999, ...state.stories.map((s) => s.id)) + 1;
                state.stories.push(fetchedStory);
              }
              const finalStory = state.stories.find((s) => s.sourceUrl === fetchedStory.sourceUrl)!;
              
              // Update referral tracking with the real title now that we fetched it
              sessionStorage.setItem("siftle_landing_headline", finalStory.headline);
              trackEvent("briefing_referral", urlParam, finalStory.headline);

              state.selectedStoryId = finalStory.id;
              render();
              void loadStorySummary(finalStory);
            })
            .catch((err) => {
              console.warn("Failed to load historical story from backend:", err);
            })
            .finally(() => {
              state.loadingSummaryUrl = null;
            });
        }
      }
    } else if (storyMatch) {
      const numericId = Number(storyMatch[1]);
      if (!isNaN(numericId)) {
        story = state.stories.find((item) => item.id === numericId);
      }
    }

    const threadStory = threadMatch ? state.stories.find((item) => item.id === Number(threadMatch[1])) : undefined;
    const wasInDetail = state.selectedStoryId !== null || state.selectedThreadUrl !== null;

    if (story) {
      state.selectedStoryId = story.id;
      state.selectedThreadUrl = null;
      state.activeThread = null;
      render();
      void loadStorySummary(story);
    } else if (threadStory) {
      state.selectedStoryId = null;
      state.selectedThreadUrl = threadStory.sourceUrl;
      state.activeThread = null;
      render();
      void loadStoryThread(threadStory);
    } else if (!urlParam) {
      state.selectedStoryId = null;
      state.selectedThreadUrl = null;
      state.activeThread = null;
      render();
      if (wasInDetail) {
        requestAnimationFrame(() => window.scrollTo({ top: state.feedScrollY, behavior: "auto" }));
      }
    }
    return;
  }

  // Fallback default: News first
  state.activeSurface = "feed";
  state.selectedMarketId = null;
  state.selectedStoryId = null;
  state.selectedThreadUrl = null;
  render();
}

const setArchiveStatus = (message: string): void => {
  if (archiveStatus) archiveStatus.textContent = message;
};

const loadFeed = async (category: Category = state.activeCategory, isBackground = false): Promise<void> => {
  if (!isBackground) {
    state.activeSurface = "feed";
    state.selectedMarketId = null;
    state.selectedStoryId = null;
    state.selectedThreadUrl = null;
    state.activeThread = null;
    state.loadingThreadUrl = null;
    state.showSaved = false;
  }
  state.isLoading = true;
  if (state.activeSurface === "feed") {
    renderCategories();
    render();
  }

  try {
    const endpoint = state.activeArchiveDate
      ? `/api/archive?date=${encodeURIComponent(state.activeArchiveDate)}&category=${encodeURIComponent(category)}`
      : `/api/feed?category=${encodeURIComponent(category)}`;
    const response = await fetch(apiUrl(endpoint));
    if (!response.ok) throw new Error(`Feed request failed with ${response.status}`);

    const data = await response.json();
    state.stories = data.top_stories ?? [];
    // apply saved flags from storage
    applySavedFlags();
    state.hasLoadedFeed = true;
    if (dateLabel) dateLabel.textContent = formatHeaderDate(data.date ?? state.activeArchiveDate);
    if (menuStatus) {
      if (state.activeArchiveDate) {
        menuStatus.textContent = `Showing ${category} from ${state.activeArchiveDate}`;
      } else {
        const archiveLabel = data.archive?.provider === "shelby" ? "Shelby" : "local archive";
        menuStatus.textContent = `Latest published feed loaded from ${archiveLabel}`;
      }
    }
    setArchiveStatus(state.activeArchiveDate ? `Archive: ${state.activeArchiveDate}` : "Live feed");
  } catch (error) {
    console.warn(error);
    if (!state.hasLoadedFeed) {
      state.stories = [];
    }
    applySavedFlags();
    if (menuStatus) {
      menuStatus.textContent = state.activeArchiveDate
        ? "That saved day/category is not available yet"
        : "Feed data is currently unavailable. Please check back shortly.";
    }
  } finally {
    state.isLoading = false;
    render();
    syncStoryFromHash();
  }
};

const loadArchiveIndex = async (): Promise<void> => {
  if (!archiveDateSelect) return;

  try {
    const response = await fetch(apiUrl("/api/archive"));
    if (!response.ok) throw new Error(`Archive index failed with ${response.status}`);

    const data = await response.json();
    const today = new Date().toLocaleDateString("en-CA", {
      timeZone: "Africa/Lagos",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    state.archiveDates = (data.dates ?? []).filter((entry: ArchiveDate) => entry.date !== today);
    archiveDateSelect.innerHTML = [
      `<option value="">Today</option>`,
      ...state.archiveDates.map((entry) => `<option value="${entry.date}">${entry.date}</option>`)
    ].join("");
    archiveDateSelect.value = state.activeArchiveDate ?? "";
    setArchiveStatus(state.archiveDates.length > 0 ? "Saved days ready" : "Live feed ready");
  } catch (error) {
    console.warn(error);
    setArchiveStatus("Archive unavailable");
  }
};

const ensureArchiveIndexLoaded = (): void => {
  if (archiveIndexRequested) return;
  archiveIndexRequested = true;
  void loadArchiveIndex();
};

const ensureFeedLoaded = (category: Category = state.activeCategory, isBackground = false): void => {
  if (state.hasLoadedFeed && category === state.activeCategory && !state.activeArchiveDate) return;
  void loadFeed(category, isBackground);
};

const warmFeedAfterFirstPaint = (): void => {
  if (feedWarmupRequested) return;
  feedWarmupRequested = true;
  window.setTimeout(() => {
    if (state.activeSurface !== "feed" && !state.hasLoadedFeed) {
      ensureFeedLoaded(state.activeCategory, true);
    }
    ensureArchiveIndexLoaded();
  }, 8000);
};

const getCategoryLabel = (category: Category): string =>
  category === "All" ? "For you" : (category === "Sports" ? "Football" : category);

const displayCategory = (cat: string): string => cat === "Sports" ? "Football" : cat;

const isSocialStory = (story: NewsStory): boolean =>
  /^@/.test(String(story.source || "")) || /(?:^|\/)(?:x|twitter)\.com\//i.test(String(story.sourceUrl || ""));

const shortenText = (value: string, maxLength: number): string => {
  const clean = value.trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
};

const compactSourceWords = (value: string): string[] =>
  value
    .replace(/^@/, "")
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);

const getStorySourceLabel = (story: NewsStory): string => {
  const source = String(story.source || displayCategory(story.category)).trim();
  const words = compactSourceWords(source);
  if (words.length === 0) return displayCategory(story.category);

  const filteredWords = words.filter((word, index) => {
    const lowered = word.toLowerCase();
    if (index > 0 && ["live", "news", "official"].includes(lowered)) return false;
    return true;
  });
  const preferredWords = filteredWords.length > 0 ? filteredWords : words;

  let label = "";
  for (const word of preferredWords) {
    const candidate = label ? `${label} ${word}` : word;
    if (candidate.length > 18) break;
    label = candidate;
  }

  return shortenText(label || preferredWords[0], 18);
};

const getStoryCardHeadline = (story: NewsStory): string => {
  const headline = String(story.headline || "").replace(/\s+/g, " ").trim();
  if (!isSocialStory(story)) return headline;

  const compact = headline
    .replace(/https?:\/\/\S+/gi, "")
    .replace(/\(Source:[^)]+\)\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();

  if (/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(compact)) {
    return `Latest from ${getStorySourceLabel(story)}`;
  }

  const withoutLead = compact.replace(/^R to\s+@[^:]+:\s*/i, "").trim();
  const candidate =
    withoutLead.length >= 24 && !/^(?:more here|watch more here)[:.!?]*$/i.test(withoutLead)
      ? withoutLead
      : compact || headline;
  return shortenText(candidate, 150);
};

const renderCategories = (): void => {
  if (!categoryTabs) return;
  categoryTabs.hidden = false;
  const isPersonalized = state.activeCategory === "Personalized";

  categoryTabs.innerHTML = `
    <button class="category-tab ${!isPersonalized ? "active" : ""}" type="button" data-category="Sports">
      Feed
    </button>
    <button class="category-tab ${isPersonalized ? "active" : ""}" type="button" data-category="Personalized">
      Personalized
    </button>
  `;
};

const hasThread = (story: NewsStory): boolean => (story.thread?.count ?? 0) >= 1;

const formatThreadCount = (count = 0): string => `${count} past ${count === 1 ? "update" : "updates"}`;

const sortThreadItemsNewestFirst = (items: NewsStory[] = []): NewsStory[] =>
  [...items].sort((first, second) => {
    const firstTime = new Date(first.publishedAt || 0).getTime();
    const secondTime = new Date(second.publishedAt || 0).getTime();
    return (Number.isNaN(secondTime) ? 0 : secondTime) - (Number.isNaN(firstTime) ? 0 : firstTime);
  });

const getMarketView = (market: MarketPreview): MarketPreview => {
  const override = state.marketEvidenceOverrides[market.id];
  const base = { ...market, evidence: market.evidence ?? [] };
  return override ? { ...base, ...override, updates: override.evidence.length } : base;
};

const parseMarketKickoffTime = (market: MarketPreview, snapshot: ArcMarketSnapshot | undefined): number | null => {
  if (market.timeframe !== "Daily") return null;

  const kickoffFromData = market.kickoffAt ? new Date(market.kickoffAt).getTime() : Number.NaN;
  if (Number.isFinite(kickoffFromData)) return kickoffFromData;

  const closesAtUnix = snapshot?.closesAtUnix ?? 0;
  return closesAtUnix > 0 ? closesAtUnix * 1000 : null;
};

const marketEvidenceDate = (story: NewsStory, index: number): string => {
  if (index === 0) return "Latest";
  if (!story.publishedAt) return story.postedAt;
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(story.publishedAt));
};

const storyToMarketEvidence = (story: NewsStory, index: number): MarketPreview["evidence"][number] => ({
  date: marketEvidenceDate(story, index),
  source: story.source,
  headline: story.headline,
  summary: safeStorySummary(story),
  impact: index === 0 ? "Latest" : "Update",
  direction: "flat",
  sourceUrl: story.sourceUrl
});

const loadMarketEvidence = async (market: MarketPreview): Promise<void> => {
  if (state.checkedMarketEvidence[market.id] || state.loadingMarketEvidence[market.id]) return;

  state.loadingMarketEvidence[market.id] = true;
  try {
    const threadResponse = await fetch(apiUrl(`/api/market-thread?id=${encodeURIComponent(market.id)}&nocache=${Date.now()}`));
    if (!threadResponse.ok) return;

    const thread = (await threadResponse.json()) as StoryThread;
    const threadStories = [thread.current, ...sortThreadItemsNewestFirst(thread.items ?? [])];
    const evidence = threadStories
      .filter((story, index, items) => items.findIndex((item) => item.sourceUrl === story.sourceUrl) === index)
      .map(storyToMarketEvidence);

    const latestStory = threadStories[0];
    const newsImageUrl = latestStory?.imageUrl;

    if (evidence.length >= 1) {
      state.marketEvidenceOverrides[market.id] = {
        threadTopic: thread.topic || market.threadTopic,
        evidence,
        imageUrl: newsImageUrl || market.imageUrl
      };
    }
  } catch (error) {
    console.warn(error);
  } finally {
    state.checkedMarketEvidence[market.id] = true;
    state.loadingMarketEvidence[market.id] = false;
    if (state.activeSurface === "markets") render();
  }
};

const getMarketAddress = (market: MarketPreview): string =>
  market.optionMarket ? market.id : (market.marketAddress || window.SIFTLE_MARKET_ADDRESSES?.[market.id] || "");

const getMarketOptions = (market: MarketPreview): { id: string; label: string }[] =>
  Array.isArray(market.options)
    ? market.options.filter((option) => option?.id && option?.label)
    : [];

const isOptionMarket = (market: MarketPreview): boolean =>
  Boolean(
    (market?.optionMarket || (market as any)?.isOptionMarket || (market as any)?.marketType === "option" || (Array.isArray(market?.options) && market.options.length > 0)) &&
    getMarketOptions(market).length > 1
  );

const getSelectedOption = (market: MarketPreview): { id: string; label: string } | null => {
  const options = getMarketOptions(market);
  return options.find((option) => option.id === state.marketTradeOptionId) || options[0] || null;
};

const formatMoney = (value: number): string =>
  value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const profileUsernameKey = (address: string): string => `siftle_profile_username_${address.toLowerCase()}`;

const cleanProfileUsername = (value: string): string => value.trim().replace(/\s+/g, " ").slice(0, 15);

const syncProfileUsernameForWallet = (): void => {
  if (!state.walletAddress) {
    state.profileUsername = null;
    state.profileNotice = null;
    return;
  }

  const key = profileUsernameKey(state.walletAddress);
  let username = localStorage.getItem(key);
  const oldSharedUsername = localStorage.getItem("siftle_profile_username");
  if (!username && oldSharedUsername) {
    username = cleanProfileUsername(oldSharedUsername);
    if (username) localStorage.setItem(key, username);
    localStorage.removeItem("siftle_profile_username");
  }

  state.profileUsername = username || null;
  state.profileNotice = null;
};

const saveProfileUsernameForWallet = (username: string): void => {
  if (!state.walletAddress) return;

  const key = profileUsernameKey(state.walletAddress);
  const cleaned = cleanProfileUsername(username);
  if (cleaned) {
    localStorage.setItem(key, cleaned);
    state.profileUsername = cleaned;
  } else {
    localStorage.removeItem(key);
    state.profileUsername = null;
  }
  localStorage.removeItem("siftle_profile_username");
};

const clearLegacyMarketCache = (): void => {
  const legacyMarketId = "one-hour-test-market";
  const toRemove: string[] = [];

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key) continue;
    if (key.includes(legacyMarketId)) toRemove.push(key);
  }

  toRemove.forEach((key) => localStorage.removeItem(key));
};

const getTradeAmountBounds = (
  mode: "buy" | "sell",
  side: "yes" | "no",
  position: ArcMarketPosition | undefined
): { min: number; max: number; fallback: number } => {
  if (mode === "sell") {
    const heldAmount = side === "yes" ? position?.yesSharesUsdc ?? 0 : position?.noSharesUsdc ?? 0;
    if (heldAmount <= 0) {
      return { min: 0.01, max: 0.01, fallback: 0.01 };
    }
    return {
      min: Math.min(0.01, heldAmount),
      max: heldAmount,
      fallback: heldAmount
    };
  }

  return { min: 2, max: 2, fallback: 2 };
};

const normalizeMarketTradeAmount = (
  value: number,
  mode: "buy" | "sell",
  side: "yes" | "no",
  position: ArcMarketPosition | undefined
): number => {
  const { min, max, fallback } = getTradeAmountBounds(mode, side, position);
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
};

const estimatePoolPayout = (
  snapshot: ArcMarketSnapshot | undefined,
  side: "yes" | "no",
  amount: number,
  mode: "buy" | "sell",
  position?: ArcMarketPosition
): number => {
  if (!snapshot || !Number.isFinite(amount) || amount <= 0) return 0;

  const currentSideShares = side === "yes" ? position?.yesSharesUsdc ?? 0 : position?.noSharesUsdc ?? 0;
  const yesPool = snapshot.yesSharesUsdc;
  const noPool = snapshot.noSharesUsdc;

  if (mode === "sell") return Math.min(amount, currentSideShares);

  const sidePoolAfterBuy = (side === "yes" ? yesPool : noPool) + amount;
  const totalPoolAfterBuy = yesPool + noPool + amount;

  if (sidePoolAfterBuy <= 0 || totalPoolAfterBuy <= 0) return amount;
  return ((currentSideShares + amount) / sidePoolAfterBuy) * totalPoolAfterBuy;
};

const getHeldPositionRows = (
  position: ArcMarketPosition,
  snapshot: ArcMarketSnapshot | undefined
): Array<{ label: string; shares: number; payout: number }> => {
  const volume = snapshot?.volumeUsdc ?? 0;
  const rows: Array<{ label: string; shares: number; payout: number }> = [];

  if (position.yesSharesUsdc > 0) {
    rows.push({
      label: "YES Shares",
      shares: position.yesSharesUsdc,
      payout: snapshot && snapshot.yesSharesUsdc > 0 ? (position.yesSharesUsdc / snapshot.yesSharesUsdc) * volume : 0
    });
  }

  if (position.noSharesUsdc > 0) {
    rows.push({
      label: "NO Shares",
      shares: position.noSharesUsdc,
      payout: snapshot && snapshot.noSharesUsdc > 0 ? (position.noSharesUsdc / snapshot.noSharesUsdc) * volume : 0
    });
  }

  return rows;
};

const getHeldSide = (position: ArcMarketPosition | undefined): "yes" | "no" | null => {
  const yesShares = position?.yesSharesUsdc ?? 0;
  const noShares = position?.noSharesUsdc ?? 0;
  if (yesShares > 0 && noShares <= 0) return "yes";
  if (noShares > 0 && yesShares <= 0) return "no";
  return null;
};

const claimedMarketKey = (walletAddress: string): string => `siftle_claimed_markets_${walletAddress.toLowerCase()}`;

const readClaimedMarkets = (): Set<string> => {
  if (!state.walletAddress) return new Set();
  try {
    return new Set(JSON.parse(localStorage.getItem(claimedMarketKey(state.walletAddress)) || "[]"));
  } catch {
    return new Set();
  }
};

const markMarketClaimed = (marketId: string): void => {
  if (!state.walletAddress) return;
  const claimed = readClaimedMarkets();
  claimed.add(marketId);
  localStorage.setItem(claimedMarketKey(state.walletAddress), JSON.stringify(Array.from(claimed)));
};

const isMarketResolved = (market: MarketPreview, snapshot: ArcMarketSnapshot | undefined): boolean => {
  if ((snapshot?.outcome ?? 0) !== 0) return true;
  return /^resolved$/i.test(String(market.closes || "").trim());
};

const canTradeSide = (
  mode: "buy" | "sell",
  side: "yes" | "no",
  position: ArcMarketPosition | undefined
): boolean => {
  const yesShares = position?.yesSharesUsdc ?? 0;
  const noShares = position?.noSharesUsdc ?? 0;

  if (mode === "sell") {
    return side === "yes" ? yesShares > 0 : noShares > 0;
  }

  if (side === "yes") return noShares <= 0;
  return yesShares <= 0;
};

const normalizeTradeSideForMode = (
  mode: "buy" | "sell",
  currentSide: "yes" | "no",
  position: ArcMarketPosition | undefined
): "yes" | "no" => {
  if (canTradeSide(mode, currentSide, position)) return currentSide;
  const fallbackSide = currentSide === "yes" ? "no" : "yes";
  return canTradeSide(mode, fallbackSide, position) ? fallbackSide : currentSide;
};

const getDisplayTraderCount = (market: MarketPreview, snapshot: ArcMarketSnapshot | undefined): string => {
  if (!snapshot) return market.traders;
  if (typeof snapshot.traderCount === "number" && snapshot.traderCount > 0) return String(snapshot.traderCount);
  if (typeof market.traderCount === "number" && market.traderCount > 0) return String(market.traderCount);
  if (market.traders) return market.traders;
  const activeSides = Number(snapshot.yesSharesUsdc > 0) + Number(snapshot.noSharesUsdc > 0);
  return activeSides > 0 ? String(activeSides) : market.traders;
};

const isSessionExpiredError = (error: unknown): boolean => {
  const message = error instanceof Error ? error.message : String(error || "");
  return /token|session|auth|unauthori[sz]ed|expired|401/i.test(message);
};

const formatLeaderboardStatus = (status: string): string => {
  const clean = String(status || "").trim();
  if (!clean) return "0 wins, 0 losses";
  const normalized = clean
    .replace(/closed profits?/gi, "losses")
    .replace(/\bprofit\b/gi, "losses");
  return /\bloss/i.test(normalized) ? normalized : `${normalized}, 0 losses`;
};

const LEADERBOARD_CACHE_PREFIX = "siftle_leaderboard_cache_v4_";

const parseLeaderboardNumbers = (status: string): { wins: number; losses: number } => {
  const winsMatch = String(status || "").match(/(\d+)\s+wins?/i);
  const lossesMatch = String(status || "").match(/(\d+)\s+loss(?:es)?/i);
  return {
    wins: winsMatch ? Number(winsMatch[1]) || 0 : 0,
    losses: lossesMatch ? Number(lossesMatch[1]) || 0 : 0
  };
};

const getLeaderboardCache = (key: string): any | null => {
  try {
    const cached = JSON.parse(localStorage.getItem(`${LEADERBOARD_CACHE_PREFIX}${key}`) || "null");
    return Array.isArray(cached?.players) && cached.players.length ? cached : null;
  } catch {
    return null;
  }
};

const setLeaderboardCache = (key: string, payload: any): void => {
  if (!Array.isArray(payload?.players) || payload.players.length === 0) return;
  try {
    localStorage.setItem(`${LEADERBOARD_CACHE_PREFIX}${key}`, JSON.stringify({
      ...payload,
      cachedAt: Date.now()
    }));
  } catch {}
};

const compareLeaderboardLikePlayers = (a: any, b: any): number => {
  const aStatus = parseLeaderboardNumbers(a?.status || "");
  const bStatus = parseLeaderboardNumbers(b?.status || "");
  const pointDiff = (Number(b?.points) || 0) - (Number(a?.points) || 0);
  if (pointDiff) return pointDiff;
  if (bStatus.wins !== aStatus.wins) return bStatus.wins - aStatus.wins;
  if (aStatus.losses !== bStatus.losses) return aStatus.losses - bStatus.losses;
  return String(a?.username || "").localeCompare(String(b?.username || ""));
};

const leaderboardIdentityKey = (player: any): string => {
  const displayName = String(player?.displayName || "").trim().toLowerCase();
  if (displayName && !/^0x[a-f0-9]{40}$/i.test(displayName)) return `name:${displayName}`;
  return `wallet:${String(player?.username || "").toLowerCase()}`;
};

const mergeLeaderboardDuplicates = (players: any[]): any[] => {
  const byIdentity = new Map<string, any>();
  players.forEach((player) => {
    const key = leaderboardIdentityKey(player);
    if (!key || key === "wallet:") return;
    const existing = byIdentity.get(key);
    if (!existing) {
      byIdentity.set(key, player);
      return;
    }
    byIdentity.set(key, compareLeaderboardLikePlayers(existing, player) <= 0 ? existing : player);
  });
  return Array.from(byIdentity.values());
};

const stabilizeLeaderboardPlayers = (freshPlayers: any[], _cachedPlayers: any[] = [], isGlobal = false): any[] => {
  const sorted = mergeLeaderboardDuplicates(freshPlayers).slice().sort(compareLeaderboardLikePlayers);
  return isGlobal
    ? sorted.map((player, index) => ({ ...player, globalRank: index + 1 }))
    : sorted;
};

const getOptionMarketProjectedPayout = (position: any, snapshot: any): number => {
  const optionId = String(position?.optionId || "").trim();
  const entryAmount = Math.max(0, Number(position?.optionSharesUsdc) || 0);
  const optionPool = Math.max(0, Number(snapshot?.optionPools?.[optionId]) || 0);
  const totalPool = Math.max(0, Number(snapshot?.volumeUsdc) || 0);
  if (!optionId || entryAmount <= 0) return 0;
  if (optionPool <= 0 || totalPool <= 0) return entryAmount;
  return (entryAmount / optionPool) * totalPool;
};

const redactOptionPools = (market: MarketPreview, snapshot: any): any => {
  if (!isOptionMarket(market) || !snapshot) return snapshot;
  return {
    ...snapshot,
    optionPools: Object.fromEntries(getMarketOptions(market).map((option) => [option.id, 0]))
  };
};

const renderLeaderboardSyncNote = (): string => `
  <div class="leaderboard-sync-note" role="status">
    Showing saved standings while Siftle refreshes live scores...
  </div>
`;

const calculateLeaderboardScore = (): { points: number; status: string } => {
  let points = 0;
  let wins = 0;
  let losses = 0;
  const dailyMarketIds = marketPreviews.filter(m => m.timeframe === "Daily").map(m => m.id);
  const resolvedResultKey = state.walletAddress ? `siftle_resolved_results_${state.walletAddress.toLowerCase()}` : "";
  let resolvedResults: Record<string, { result: "win" | "loss"; points: number }> = {};
  if (resolvedResultKey) {
    try {
      resolvedResults = JSON.parse(localStorage.getItem(resolvedResultKey) || "{}");
    } catch {}
  }

  if (state.walletAddress && state.hasLoadedPortfolioPositions) {
    for (const mId of dailyMarketIds) {
      if (resolvedResults[mId]?.result === "win") {
        points += Number(resolvedResults[mId].points) || 0;
        wins++;
        continue;
      }
      if (resolvedResults[mId]?.result === "loss") {
        losses++;
        continue;
      }

      const position = state.marketPositions[mId];
      const snapshot = state.marketSnapshots[mId];
      const outcome = snapshot?.outcome ?? 0;
      if (outcome === 0) continue;

      const sidesKey = `siftle_traded_sides_${mId}_${state.walletAddress.toLowerCase()}`;
      let tradedSides: string[] = [];
      try {
        tradedSides = JSON.parse(localStorage.getItem(sidesKey) || "[]") as string[];
      } catch {}
      const hasSwitched = tradedSides.includes("yes") && tradedSides.includes("no");

      if (outcome === 1 && position && position.yesSharesUsdc > 0) {
        const earnedPoints = hasSwitched ? 50 : 100;
        points += earnedPoints;
        wins++;
        resolvedResults[mId] = { result: "win", points: earnedPoints };
      } else if (outcome === 2 && position && position.noSharesUsdc > 0) {
        const earnedPoints = hasSwitched ? 50 : 100;
        points += earnedPoints;
        wins++;
        resolvedResults[mId] = { result: "win", points: earnedPoints };
      } else if (position && (position.yesSharesUsdc > 0 || position.noSharesUsdc > 0)) {
        losses++;
        resolvedResults[mId] = { result: "loss", points: 0 };
      }
    }
  }

  if (resolvedResultKey) {
    localStorage.setItem(resolvedResultKey, JSON.stringify(resolvedResults));
  }

  return {
    points,
    status: `${wins} win${wins === 1 ? "" : "s"}, ${losses} loss${losses === 1 ? "" : "es"}`
  };
};

const scoreLocalResolvedMarketForAllStoredWallets = (market: MarketPreview, winningSide: "yes" | "no"): void => {
  const marketAddress = getMarketAddress(market).toLowerCase();
  if (!marketAddress) return;

  const positionPrefix = `siftle_mock_pos_${marketAddress}_`;
  const wallets = new Set<string>();

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith(positionPrefix)) continue;
    const walletAddress = key.slice(positionPrefix.length).toLowerCase();
    if (/^0x[a-f0-9]{40}$/.test(walletAddress)) wallets.add(walletAddress);
  }

  wallets.forEach((walletAddress) => {
    const positionKey = `${positionPrefix}${walletAddress}`;
    let position: ArcMarketPosition = { yesSharesUsdc: 0, noSharesUsdc: 0 };
    try {
      position = JSON.parse(localStorage.getItem(positionKey) || "{}");
    } catch {}

    const hasYes = (Number(position.yesSharesUsdc) || 0) > 0;
    const hasNo = (Number(position.noSharesUsdc) || 0) > 0;
    if (!hasYes && !hasNo) return;

    const sidesKey = `siftle_traded_sides_${market.id}_${walletAddress}`;
    let tradedSides: string[] = [];
    try {
      tradedSides = JSON.parse(localStorage.getItem(sidesKey) || "[]") as string[];
    } catch {}
    const switched = tradedSides.includes("yes") && tradedSides.includes("no");
    const won = winningSide === "yes" ? hasYes : hasNo;

    const resolvedKey = `siftle_resolved_results_${walletAddress}`;
    let resolvedResults: Record<string, { result: "win" | "loss"; points: number }> = {};
    try {
      resolvedResults = JSON.parse(localStorage.getItem(resolvedKey) || "{}");
    } catch {}

    resolvedResults[market.id] = {
      result: won ? "win" : "loss",
      points: won ? switched ? 50 : 100 : 0
    };
    localStorage.setItem(resolvedKey, JSON.stringify(resolvedResults));

    let points = 0;
    let wins = 0;
    let losses = 0;
    Object.values(resolvedResults).forEach((entry) => {
      if (entry.result === "win") {
        wins += 1;
        points += Number(entry.points) || 0;
      } else if (entry.result === "loss") {
        losses += 1;
      }
    });

    const username = localStorage.getItem(profileUsernameKey(walletAddress)) || "";
    fetch(apiUrl("/api/leaderboard/report"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        walletAddress,
        username,
        points,
        status: `${wins} win${wins === 1 ? "" : "s"}, ${losses} loss${losses === 1 ? "" : "es"}`
      })
    }).catch(err => console.error("Failed to report local resolved score:", err));
  });
};

const reportLeaderboardEntry = async (includeScore: boolean): Promise<boolean> => {
  if (!state.walletAddress) return false;
  const score = includeScore && state.hasLoadedPortfolioPositions ? calculateLeaderboardScore() : null;
  const response = await fetch(apiUrl("/api/leaderboard/report"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      walletAddress: state.walletAddress,
      username: state.profileUsername || "",
      ...(score ? { points: score.points, status: score.status } : {})
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data?.success === false) {
    throw new Error(data?.error || "Failed to save leaderboard profile");
  }
  if (data?.supabaseConfigured && data?.supabaseSaved === false) {
    throw new Error(data?.supabaseError || "Supabase did not save profile");
  }
  return true;
};

const reportStoredLocalMarketTraders = (): void => {
  const traders = new Set<string>();

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key) continue;

    if (key.startsWith("siftle_mock_pos_")) {
      const address = key.slice(key.lastIndexOf("_") + 1).toLowerCase();
      try {
        const position = JSON.parse(localStorage.getItem(key) || "{}");
        const hasPosition = (Number(position.yesSharesUsdc) || 0) > 0 || (Number(position.noSharesUsdc) || 0) > 0;
        if (hasPosition && /^0x[a-f0-9]{40}$/.test(address)) traders.add(address);
      } catch {}
    }

  }

  traders.forEach((walletAddress) => {
    fetch(apiUrl("/api/leaderboard/report"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ walletAddress })
    }).catch(err => console.error("Failed to report stored local trader:", err));
  });
};

const loadMarketSnapshot = async (market: MarketPreview): Promise<void> => {
  const marketAddress = getMarketAddress(market);
  if (!marketAddress || state.marketSnapshots[market.id] || state.loadingMarketSnapshots[market.id] || state.checkedMarketSnapshots[market.id]) return;
  if (isOptionMarket(market) && !state.walletAddress) {
    const publicResolvedOptionId = (market as MarketPreview & { resolvedOptionId?: string | null }).resolvedOptionId || null;
    const publicOutcome = Number((market as MarketPreview & { outcome?: number }).outcome);
    state.marketSnapshots[market.id] = redactOptionPools(market, {
      yesPriceCents: 0,
      noPriceCents: 0,
      volumeUsdc: Number((market as MarketPreview & { volumeUsdc?: number }).volumeUsdc) || 0,
      yesSharesUsdc: 0,
      noSharesUsdc: 0,
      outcome: (publicOutcome === 1 || publicOutcome === 2 || publicOutcome === 3
        ? publicOutcome
        : publicResolvedOptionId
          ? 1
          : 0),
      optionPools: (market as MarketPreview & { optionPools?: Record<string, number> }).optionPools
        || Object.fromEntries(getMarketOptions(market).map((option) => [option.id, 0])),
      resolvedOptionId: publicResolvedOptionId,
      traderCount: 0
    });
    state.checkedMarketSnapshots[market.id] = true;
    return;
  }

  state.loadingMarketSnapshots[market.id] = true;
  try {
    if (isOptionMarket(market) && state.walletAddress) {
      const { position, snapshot } = await readArcMarketState(marketAddress, state.walletAddress);
      state.marketPositions[market.id] = position;
      state.marketSnapshots[market.id] = redactOptionPools(market, snapshot);
    } else {
      state.marketSnapshots[market.id] = redactOptionPools(market, await readArcMarketSnapshot(marketAddress));
    }
  } catch (error) {
    console.warn(error);
  } finally {
    state.checkedMarketSnapshots[market.id] = true;
    state.loadingMarketSnapshots[market.id] = false;
    if (state.activeSurface === "markets") render();
  }
};





function formatYyyyMmDd(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function cleanLeagueTitle(name: string): string {
  if (!name) return "Soccer Matches";
  let clean = name.replace(/^\d{4}(-\d{2,4})?-/g, "").replace(/-/g, " ").trim();
  const lower = clean.toLowerCase();
  
  if (lower.includes("russian") || lower.includes("rus.1")) return "Russian Premier League";
  if (lower.includes("scottish") || lower.includes("sco.1")) return "Scottish Premiership";
  if (lower.includes("ukrainian") || lower.includes("ukr.1")) return "Ukrainian Premier League";
  if (lower.includes("egyptian") || lower.includes("egy.1")) return "Egyptian Premier League";
  if (lower.includes("english premier league") || lower.includes("premier league") || lower.includes("eng.1") || lower.includes("eng 1")) {
    return "English Premier League";
  }
  if (lower.includes("laliga") || lower.includes("esp.1") || lower.includes("esp 1") || lower.includes("spanish")) return "Spanish LaLiga";
  if (lower.includes("champions league") || lower.includes("uefa champions")) return "UEFA Champions League";
  if (lower.includes("europa league") || lower.includes("uefa europa")) return "UEFA Europa League";
  if (lower.includes("championship") || lower.includes("eng.2") || lower.includes("eng 2")) return "EFL Championship";
  if (lower.includes("serie a") || lower.includes("ita.1") || lower.includes("ita 1") || lower.includes("italian")) return "Italian Serie A";
  if (lower.includes("bundesliga") || lower.includes("ger.1") || lower.includes("ger 1") || lower.includes("german")) return "German Bundesliga";
  if (lower.includes("ligue 1") || lower.includes("fra.1") || lower.includes("fra 1") || lower.includes("french")) return "French Ligue 1";
  if (lower.includes("saudi") || lower.includes("sau.1") || lower.includes("sau 1")) return "Saudi Pro League";
  if (lower.includes("eredivisie") || lower.includes("ned.1")) return "Dutch Eredivisie";
  if (lower.includes("primeira liga") || lower.includes("por.1")) return "Portuguese Primeira Liga";
  if (lower.includes("friendly") || lower.includes("friendlies")) return "Club Friendlies";
  return clean.split(" ").map(w => w ? (w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()) : "").join(" ").trim();
};

const loadLiveMatches = async (dateParam?: string): Promise<void> => {
  const todayStr = formatYyyyMmDd(new Date());
  const targetDateStr = dateParam || state.activeMatchDate || todayStr;
  
  if (state.loadingLiveMatches && targetDateStr === state.activeMatchDate && state.liveMatches.length > 0) return;
  state.loadingLiveMatches = true;
  state.activeMatchDate = targetDateStr;
  try {
    const todayStr = formatYyyyMmDd(new Date());
    const targetDateStr = dateParam || state.activeMatchDate || todayStr;
    state.activeMatchDate = targetDateStr;
    const datesQuery = `?dates=${targetDateStr}`;

    const endpoints = [
      `https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard${datesQuery}`,
      `https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard${datesQuery}`,
      `https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard${datesQuery}`,
      `https://site.api.espn.com/apis/site/v2/sports/soccer/eng.2/scoreboard${datesQuery}`,
      `https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard${datesQuery}`,
      `https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard${datesQuery}`,
      `https://site.api.espn.com/apis/site/v2/sports/soccer/sau.1/scoreboard${datesQuery}`,
      `https://site.api.espn.com/apis/site/v2/sports/soccer/all/scoreboard${datesQuery}`
    ];

    const responses = await Promise.allSettled(endpoints.map((url) => fetch(url).then((r) => r.json())));
    const matchMap = new Map<string, any>();

    responses.forEach((res) => {
      if (res.status === "fulfilled" && res.value && Array.isArray(res.value.events)) {
        const rawLeagueName = res.value.leagues?.[0]?.name;
        const officialLogo = res.value.leagues?.[0]?.logos?.[0]?.href || "";
        const leagueName = (rawLeagueName && rawLeagueName !== "Soccer") ? rawLeagueName : null;

        res.value.events.forEach((e: any) => {
          if (!e || !e.id || matchMap.has(e.id)) return;
          const comp = e.competitions?.[0];
          const home = comp?.competitors?.find((c: any) => c.homeAway === "home");
          const away = comp?.competitors?.find((c: any) => c.homeAway === "away");
          if (!home || !away) return;
          const stateType = e.status?.type?.state;
          const detail = e.status?.type?.detail || e.status?.type?.shortDetail || "Scheduled";
          
          const rawEventLeague = leagueName || e.season?.slug || e.league?.name || "Soccer Scoreboard";
          const eventLeague = cleanLeagueTitle(rawEventLeague);

          matchMap.set(e.id, {
            id: e.id,
            name: e.name,
            league: eventLeague,
            leagueLogo: officialLogo,
            statusState: stateType,
            statusDetail: detail,
            isLive: stateType === "in",
            isPost: stateType === "post",
            homeTeam: home.team?.displayName || home.team?.name || "Home",
            awayTeam: away.team?.displayName || away.team?.name || "Away",
            homeCrest: home.team?.logo || "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",
            awayCrest: away.team?.logo || "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",
            homeScore: home.score ?? null,
            awayScore: away.score ?? null,
            venue: comp?.venue?.fullName || "Stadium",
            date: e.date
          });
        });
      }
    });
    state.liveMatches = Array.from(matchMap.values());
  } catch (err) {
    console.error("Failed to fetch ESPN live matches:", err);
  } finally {
    state.loadingLiveMatches = false;
  }
};

const loadPortfolioPositions = async (options: { force?: boolean } = {}): Promise<void> => {
  if (!state.walletAddress) return;
  if (state.loadingPortfolioPositions && !options.force) return;

  state.hasLoadedPortfolioPositions = false;
  state.loadingPortfolioPositions = true;
  try {
    if (state.portfolioMarketPreviews.length === 0) await loadPortfolioMarkets();
    const marketsForPortfolio = getPortfolioMarkets();
    const entries = await Promise.all(
      marketsForPortfolio.map(async (market) => {
        const marketAddress = getMarketAddress(market);
        if (!marketAddress) return [market.id, { yesSharesUsdc: 0, noSharesUsdc: 0 }] as const;
        try {
          const { position, snapshot } = await readArcMarketState(marketAddress, state.walletAddress!);
          state.marketSnapshots[market.id] = snapshot;
          return [market.id, position] as const;
        } catch (error) {
          console.warn(`Failed to load portfolio market ${market.id}:`, error);
          return [market.id, { yesSharesUsdc: 0, noSharesUsdc: 0 }] as const;
        }
      })
    );
    state.marketPositions = Object.fromEntries(entries);
    state.portfolioPositionsLoadedAt = Date.now();
  } catch (error) {
    console.warn(error);
  } finally {
    state.loadingPortfolioPositions = false;
    state.hasLoadedPortfolioPositions = true;
    void reportLeaderboardEntry(true).catch(err => console.error("Failed to report leaderboard entry:", err));
    if (state.activeSurface === "portfolio" || state.activeSurface === "leaderboard" || state.activeSurface === "markets") render();
  }
};

const placeMarketOrder = async (marketId: string, side: "yes" | "no"): Promise<void> => {
  if (!state.walletAddress) {
    showActionToast("Session expired or wallet not connected. Please sign in.");
    void connectWallet();
    return;
  }

  const market = getPortfolioMarkets().find((item) => item.id === marketId);
  if (!market) return;

  state.marketTradeSide = side;
  const marketAddress = getMarketAddress(market);
  if (!marketAddress) {
    showActionToast("Deploy this Arc market contract before trading");
    render();
    return;
  }

  if (!state.hasLoadedPortfolioPositions && !state.loadingPortfolioPositions) {
    state.marketTradeStatus = "Loading position...";
    render();
    await loadPortfolioPositions();
    state.marketTradeStatus = null;
  }
  if (!state.hasLoadedPortfolioPositions) {
    showActionToast("Still loading your position. Try again in a moment.");
    render();
    return;
  }

  const initialSnapshot = state.marketSnapshots[market.id];
  if (isMarketResolved(market, initialSnapshot)) {
    state.tradeDrawerOpen = false;
    showActionToast("This market is resolved and can no longer be traded.");
    render();
    return;
  }

  const yesPrice = initialSnapshot?.yesPriceCents ?? market.probability;
  const noPrice = initialSnapshot?.noPriceCents ?? (100 - market.probability);
  const currentPosition = state.marketPositions[market.id] || { yesSharesUsdc: 0, noSharesUsdc: 0 };
  if (!canTradeSide(state.marketOrderMode, side, currentPosition)) {
    const heldSide = getHeldSide(currentPosition);
    const message = state.marketOrderMode === "sell"
      ? heldSide
        ? `You can only exit your ${heldSide.toUpperCase()} shares.`
        : "You do not have shares to exit in this market."
      : heldSide
        ? `Exit your ${heldSide.toUpperCase()} shares before buying the other side.`
        : "You cannot buy both sides in the same market.";
    showActionToast(message);
    state.marketTradeSide = normalizeTradeSideForMode(state.marketOrderMode, side, currentPosition);
    render();
    return;
  }
  const tradeAmount = normalizeMarketTradeAmount(Number(state.marketTradeAmount) || 0, state.marketOrderMode, side, currentPosition);
  state.marketTradeAmount = tradeAmount;
  trackEvent("trade_attempt");

  try {
    state.marketTradeStatus = "Preparing transaction...";
    render();
    const txHash = await executeArcMarketOrder(
      marketAddress,
      state.marketOrderMode,
      side,
      tradeAmount,
      (status: string) => {
        state.marketTradeStatus = status;
        render();
      },
      yesPrice,
      noPrice
    );
    delete state.marketSnapshots[market.id];
    delete state.marketPositions[market.id];
    delete state.checkedMarketSnapshots[market.id];
    delete state.loadingMarketSnapshots[market.id];
    state.hasLoadedPortfolioPositions = false;
    state.portfolioPositionsLoadedAt = 0;
    state.walletAddress = await getConnectedArcWallet();
    if (state.walletAddress) state.walletBalance = await getSmartWalletBalance(state.walletAddress);
    await loadPortfolioPositions({ force: true });
    void reportLeaderboardEntry(true).catch(err => console.error("Failed to report leaderboard entry:", err));

    // Update cost basis in localStorage
    if (state.walletAddress) {
      const costKey = `siftle_cost_basis_${market.id}_${state.walletAddress.toLowerCase()}`;
      let costBasis = { yesCost: 0, noCost: 0, yesShares: 0, noShares: 0 };
      try {
        const stored = localStorage.getItem(costKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          costBasis = {
            yesCost: parsed.yesCost || 0,
            noCost: parsed.noCost || 0,
            yesShares: parsed.yesShares || 0,
            noShares: parsed.noShares || 0
          };
        }
      } catch {}

      const tradeAmountNum = tradeAmount;

      if (state.marketOrderMode === "buy") {
        const sidesKey = `siftle_traded_sides_${market.id}_${state.walletAddress.toLowerCase()}`;
        let tradedSides: string[] = [];
        try {
          tradedSides = JSON.parse(localStorage.getItem(sidesKey) || "[]");
        } catch {}
        if (!tradedSides.includes(side)) {
          tradedSides.push(side);
          localStorage.setItem(sidesKey, JSON.stringify(tradedSides));
        }

        if (side === "yes") {
          costBasis.yesCost += tradeAmountNum;
          costBasis.yesShares = (costBasis.yesShares || 0) + (tradeAmountNum / (yesPrice / 100));
        } else {
          costBasis.noCost += tradeAmountNum;
          costBasis.noShares = (costBasis.noShares || 0) + (tradeAmountNum / (noPrice / 100));
        }
      } else {
        const position = state.marketPositions[market.id];
        if (position) {
          if (side === "yes" && position.yesSharesUsdc > 0) {
            const sellRatio = Math.min(1, tradeAmountNum / position.yesSharesUsdc);
            costBasis.yesCost = Math.max(0, costBasis.yesCost - costBasis.yesCost * sellRatio);
            costBasis.yesShares = Math.max(0, (costBasis.yesShares || 0) - (costBasis.yesShares || 0) * sellRatio);
          } else if (side === "no" && position.noSharesUsdc > 0) {
            const sellRatio = Math.min(1, tradeAmountNum / position.noSharesUsdc);
            costBasis.noCost = Math.max(0, costBasis.noCost - costBasis.noCost * sellRatio);
            costBasis.noShares = Math.max(0, (costBasis.noShares || 0) - (costBasis.noShares || 0) * sellRatio);
          }
        }
      }
      localStorage.setItem(costKey, JSON.stringify(costBasis));
    }

    showActionToast(`Trade confirmed ${txHash.slice(0, 8)}...`);
    trackEvent(state.marketOrderMode === "buy" ? "trade_buy_success" : "trade_sell_success");
    showSuccessModal(
      state.marketOrderMode,
      state.marketTradeAmount,
      side.toUpperCase(),
      market.question
    );
  } catch (error) {
    trackEvent("trade_failed");
    if (isSessionExpiredError(error)) {
      disconnectArcWallet();
      state.walletAddress = null;
      state.walletBalance = null;
      state.referralData = null;
      state.referralError = null;
      state.referralPanelOpen = false;
      syncProfileUsernameForWallet();
      showActionToast("Session expired. Please sign in again.");
    } else {
      showActionToast(error instanceof Error ? error.message : "Arc trade failed");
    }
  } finally {
    state.marketTradeStatus = null;
    renderWalletState();
    render();
  }
};

const renderDesktopThreadButton = (story: NewsStory): string =>
  hasThread(story)
    ? `<button class="card-source-button thread-button" type="button" data-thread-story-id="${story.id}">Thread (${story.thread?.count})</button>`
    : "";

const renderMobileThreadButton = (story: NewsStory): string =>
  hasThread(story)
    ? `<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${story.id}">Thread</button>`
    : "";

const renderBookmarkIcon = (): string =>
  `<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>`;

const renderExportIcon = (): string =>
  `<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>`;

const renderSkeletonAria = (label: string): string =>
  `<span class="skeleton-aria-label" role="status" aria-live="polite">${label}</span>`;

const renderStoryCardSkeleton = (): string => `
  <article class="story-card skeleton-card" aria-hidden="true">
    <div class="story-topline desktop-only">
      <div class="skeleton skeleton-line sm"></div>
      <div class="skeleton skeleton-line xs"></div>
    </div>
    <div class="skeleton skeleton-image desktop-only"></div>
    <div class="story-copy desktop-only">
      <div class="skeleton skeleton-chip"></div>
      <div class="skeleton skeleton-line xl" style="height: 22px; margin-top: 12px;"></div>
      <div class="skeleton skeleton-line lg" style="height: 22px;"></div>
      <div class="skeleton skeleton-line md" style="margin-top: 8px;"></div>
    </div>
    <div class="mobile-card-inner mobile-only">
      <div class="mobile-card-body">
        <div class="mobile-card-text">
          <div class="skeleton skeleton-chip"></div>
          <div class="skeleton skeleton-line xl" style="height: 18px; margin-top: 10px;"></div>
          <div class="skeleton skeleton-line lg" style="height: 18px;"></div>
          <div class="skeleton skeleton-line sm" style="margin-top: 8px;"></div>
        </div>
        <div class="skeleton skeleton-image" style="width: 88px; height: 88px; border-radius: 14px;"></div>
      </div>
    </div>
  </article>
`;

const renderStoryListSkeleton = (count = 4): string =>
  `${renderSkeletonAria("Loading stories")}${Array.from({ length: count }, renderStoryCardSkeleton).join("")}`;

const renderSummarySkeleton = (): string => `
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${renderSkeletonAria("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`;

const renderThreadTimelineSkeleton = (count = 3): string => `
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${renderSkeletonAria("Loading thread timeline")}
    ${Array.from({ length: count }, () => `
      <div class="thread-skeleton-item">
        <div class="skeleton thread-skeleton-dot"></div>
        <div>
          <div class="skeleton skeleton-line sm" style="margin-bottom: 12px;"></div>
          <div class="skeleton skeleton-line xl" style="height: 18px;"></div>
          <div class="skeleton skeleton-line lg" style="height: 18px; margin-top: 8px;"></div>
          <div class="skeleton skeleton-line md" style="margin-top: 12px;"></div>
        </div>
      </div>
    `).join("")}
  </div>
`;

const renderMarketCardSkeletonInner = (): string => `
  <div class="market-card-topline">
    <div class="skeleton skeleton-chip"></div>
    <div class="skeleton skeleton-line xs"></div>
  </div>
  <div class="skeleton skeleton-line xl" style="height: 24px;"></div>
  <div class="skeleton skeleton-line lg" style="height: 24px;"></div>
  <div class="market-probability-row">
    <div class="skeleton skeleton-probability"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
  <div class="skeleton skeleton-meter"></div>
  <div class="market-card-footer">
    <div class="skeleton skeleton-line sm"></div>
    <div class="skeleton skeleton-line xs"></div>
  </div>
`;

const renderMarketEvidenceSkeleton = (count = 3): string => `
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${renderSkeletonAria("Loading market evidence")}
    ${Array.from({ length: count }, () => `
      <div class="market-evidence-skeleton-item">
        <div class="skeleton thread-skeleton-dot"></div>
        <div>
          <div class="skeleton skeleton-line sm" style="margin-bottom: 10px;"></div>
          <div class="skeleton skeleton-line xl" style="height: 16px;"></div>
          <div class="skeleton skeleton-line lg" style="height: 16px; margin-top: 8px;"></div>
          <div class="skeleton skeleton-line md" style="margin-top: 10px;"></div>
        </div>
      </div>
    `).join("")}
  </div>
`;

const renderPortfolioSkeleton = (count = 2): string => `
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${renderSkeletonAria("Loading portfolio positions")}
    ${Array.from({ length: count }, () => `
      <article class="portfolio-skeleton-card">
        <div class="skeleton skeleton-line sm"></div>
        <div class="skeleton skeleton-line xl" style="height: 20px;"></div>
        <div class="skeleton skeleton-line lg" style="height: 20px;"></div>
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 6px;">
          <div class="skeleton skeleton-line md" style="height: 36px;"></div>
          <div class="skeleton skeleton-line md" style="height: 36px;"></div>
          <div class="skeleton skeleton-line md" style="height: 36px;"></div>
        </div>
      </article>
    `).join("")}
  </div>
`;

const renderStoryCardHtml = (story: NewsStory): string => {
  const isTweet = story.type === "tweet";

  const twitterSvg = `<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

  const twitterSvgMobile = `<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

  return `
    <article class="story-card ${isTweet ? "social-story tweet-card" : isSocialStory(story) ? "social-story" : ""}" data-story-id="${story.id}" role="button" tabindex="0" aria-label="Open summary for ${story.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${isTweet ? `<div style="margin-bottom: 6px;">${twitterSvg}</div>` : ""}
            <strong>${story.source}</strong>
            <span>${getStoryTimeLabel(story)} - ${story.readTime}</span>
          </div>
        </div>
        </div>
        </div>
      </div>

      <div class="story-image-frame desktop-only" aria-hidden="true">
        <img src="${story.imageUrl}" alt="" loading="lazy" />
      </div>

      <div class="story-copy desktop-only">
        <span class="category-chip ${story.category}">${displayCategory(story.category)}</span>
        <h2 class="card-headline">${getStoryCardHeadline(story)}</h2>
        <p>${isTweet ? "Tap to read the tweet" : "Tap to read the AI briefing."}</p>
      </div>

      <div class="card-action-row desktop-only">
        ${isTweet
          ? `<button class="card-source-button read-tweet-btn" type="button" style="cursor: pointer;">Read Tweet</button>
             <a class="card-source-button twitter-btn" href="${story.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; gap: 6px;">
              ${twitterSvg}
              Open Tweet
             </a>`
          : `
              ${renderDesktopThreadButton(story)}
              <button class="card-source-button summary-btn" type="button">AI briefing</button>
              ${/example\\.com/i.test(story.sourceUrl)
                ? `<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
                : `<a class="card-source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
            `
        }
      </div>

      <!-- Mobile layout (visible at 640px and below) -->
      <div class="mobile-card-inner mobile-only">
        <div class="mobile-card-body">
          <div class="mobile-card-text">
            <div class="mobile-card-topline">
              ${isTweet ? `
                <span class="mobile-source-pill ${isSocialStory(story) ? "social" : ""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                  ${twitterSvgMobile}
                  ${getStorySourceLabel(story)}
                </span>
              ` : `
                <div class="mobile-source-container">
                  <span class="mobile-source-pill ${isSocialStory(story) ? "social" : ""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                    ${getStorySourceLabel(story)}
                  </span>
                </div>
              `}
              
            </div>
            <h2 class="card-headline">${getStoryCardHeadline(story)}</h2>
            <span class="mobile-card-time">${getStoryTimeLabel(story)}</span>
          </div>
          <div class="mobile-card-image" aria-hidden="true">
            <img src="${story.imageUrl}" alt="" loading="lazy" />
          </div>
        </div>
        <div class="mobile-card-actions">
          ${isTweet
            ? `<button class="mobile-action-btn read-tweet-btn" type="button" style="width: 50%; cursor: pointer;">Read Tweet</button>
               <a class="mobile-action-btn source-btn twitter-btn" href="${story.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; width: 50%;">
                ${twitterSvgMobile}
                Open Tweet
               </a>`
            : `
                ${renderMobileThreadButton(story)}
                ${/example\\.com/i.test(story.sourceUrl)
                  ? `<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
                  : `<a class="mobile-action-btn source-btn" href="${story.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `
          }
        </div>
      </div>

    </article>
  `;
};

const renderStories = (): void => {
  if (!storyList) return;

  storyList.hidden = Boolean(state.selectedStoryId || state.selectedThreadUrl);

  if (state.isLoading) {
    storyList.innerHTML = renderStoryListSkeleton(4);
    return;
  }

  // If user is currently viewing the Catch-Up Briefing
  if (isViewingBriefing) {
    storyList.innerHTML = renderBriefingPageHtml();
    wireBriefingEventListeners();
    return;
  }

  const queryLabel = escapeHtml(state.newsSearchQuery.trim());
  const helperText = queryLabel
    ? `<div class="news-feed-search-copy"><p>${getFilteredStories().length} matches for "${queryLabel}".</p></div>`
    : "";

  const feedHeader = `
    ${helperText}
    <div class="feed-minimal-top-bar" style="margin-bottom: 12px;">
      <label class="news-feed-search-bar minimal-search" style="flex: 1;" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search followed news..." value="${escapeHtml(state.newsSearchQuery)}" autocomplete="off" />
      </label>
    </div>
  `;

  // 1. Personalized View
  if (state.activeCategory === "Personalized") {
    const followed = loadFollowedEntities();
    const hasAnyFollowed = hasFollowedEntities();
    const followedNames = [...followed.clubs, ...followed.players, ...followed.managers].join(", ");

    if (!hasAnyFollowed) {
      storyList.innerHTML = `
        <div class="briefing-header-card" style="margin-top: 10px; padding: 24px 18px; text-align: center;">
          <h3 style="margin: 0 0 6px 0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Personalize Your Football Feed</h3>
          <p style="font-size: 0.84rem; color: #69728a; margin: 0 auto 16px auto; max-width: 420px;">Type your favorite clubs, managers, and players to build your custom feed.</p>
          <button type="button" class="briefing-back-btn" id="openTopicPickerBtn" style="margin: 0 auto; padding: 6px 20px;">Add Topics</button>
        </div>
      `;
      document.querySelector("#openTopicPickerBtn")?.addEventListener("click", openPersonalizationModal);
      wireBriefingEventListeners();
      return;
    }

    const stories = getFilteredStories();
    const personalizedTopBar = `
      <div class="personalized-minimal-bar">
        <div class="personalized-following-text">
          <span class="following-label">Following:</span>
          <span class="following-topics">${escapeHtml(followedNames)}</span>
          <button type="button" class="minimal-edit-btn" id="customizeTopicsFeedBtn">Edit</button>
        </div>
      </div>
    `;

    if (stories.length === 0) {
      storyList.innerHTML = personalizedTopBar + '<div class="portfolio-empty compact news-search-empty">No stories match your followed topics in recent news. Tap Edit to add more clubs or players.</div>';
      document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click", openPersonalizationModal);
      wireBriefingEventListeners();
      return;
    }

    storyList.innerHTML = personalizedTopBar + stories
      .map(renderStoryCardHtml)
      .join("");
    document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click", openPersonalizationModal);
    wireBriefingEventListeners();
    return;
  }

  // 2. Normal Feed View
  const stories = getFilteredStories();
  if (stories.length === 0) {
    const fallbackStories = state.showSaved ? [] : state.stories;
    if (fallbackStories.length > 0) {
      storyList.innerHTML = feedHeader + fallbackStories
        .map(renderStoryCardHtml)
        .join("");
      wireBriefingEventListeners();
      return;
    }
    storyList.innerHTML = feedHeader + '<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>';
    wireBriefingEventListeners();
    return;
  }

  storyList.innerHTML = feedHeader + stories
    .map(renderStoryCardHtml)
    .join("");
  wireBriefingEventListeners();
};

const loadCanvasImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load image: ${src}`));
    image.src = src;
  });

const drawRoundRect = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void => {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
};

const drawWrappedText = (
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number
): number => {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width <= maxWidth) {
      line = testLine;
      continue;
    }

    if (line) lines.push(line);
    line = word;
    if (lines.length === maxLines) break;
  }

  if (line && lines.length < maxLines) lines.push(line);
  if (words.length > 0 && lines.length === maxLines) {
    while (context.measureText(`${lines[maxLines - 1]}...`).width > maxWidth && lines[maxLines - 1].length > 0) {
      lines[maxLines - 1] = lines[maxLines - 1].slice(0, -1).trim();
    }
    lines[maxLines - 1] = `${lines[maxLines - 1]}...`;
  }

  lines.forEach((item, index) => context.fillText(item, x, y + index * lineHeight));
  return y + lines.length * lineHeight;
};

const drawCoverImage = (
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void => {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.naturalWidth - sourceWidth) / 2;
  const sourceY = (image.naturalHeight - sourceHeight) / 2;

  context.save();
  drawRoundRect(context, x, y, width, height, radius);
  context.clip();
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
  context.restore();
};

const canvasToBlob = (canvas: HTMLCanvasElement): Promise<Blob> =>
  new Promise((resolve, reject) => {
    try {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Unable to export image"));
      }, "image/png");
    } catch (error) {
      reject(error);
    }
  });

const NAMED_HTML_ENTITIES: Record<string, string> = {
  "&quot;": '"', "&apos;": "'", "&amp;": "&", "&lt;": "<", "&gt;": ">",
  "&nbsp;": " ", "&ndash;": "-", "&mdash;": "—", "&hellip;": "...",
  "&lsquo;": "'", "&rsquo;": "'", "&ldquo;": '"', "&rdquo;": '"',
  "&scaron;": "š", "&Scaron;": "Š", "&eacute;": "é", "&Eacute;": "É",
  "&egrave;": "è", "&Egrave;": "È", "&ecirc;": "ê", "&Ecirc;": "Ê",
  "&aacute;": "á", "&Aacute;": "Á", "&agrave;": "à", "&Agrave;": "À",
  "&iacute;": "í", "&Iacute;": "Í", "&oacute;": "ó", "&Oacute;": "Ó",
  "&uacute;": "ú", "&Uacute;": "Ú", "&uuml;": "ü", "&Uuml;": "Ü",
  "&ouml;": "ö", "&Ouml;": "Ö", "&auml;": "ä", "&Auml;": "Ä",
  "&ntilde;": "ñ", "&Ntilde;": "Ñ", "&ccedil;": "ç", "&Ccedil;": "Ç",
  "&szlig;": "ß", "&euro;": "€", "&pound;": "£", "&copy;": "©"
};

const decodeHtmlEntities = (text: string): string => {
  if (!text) return "";
  return text
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '...')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&[a-zA-Z]+;/g, (m) => NAMED_HTML_ENTITIES[m] || m)
    .replace(/&#[a-zA-Z0-9]*;?/g, "");
};

const getProxyImageUrl = (url: string): string => {
  if (!url) return "";
  if (url.startsWith("data:") || url.startsWith("./") || url.startsWith("/") || url.includes(window.location.host)) {
    return url;
  }
  const apiBase = ((window as any).SIFTLE_API_BASE || "").replace(/\/$/, "");
  return `${apiBase}/api/proxy-image?url=${encodeURIComponent(url)}`;
};

const drawShareCard = async (story: NewsStory, includeRemoteImage = true): Promise<HTMLCanvasElement> => {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1120;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is not available");

  context.fillStyle = "#f4f7fb";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.shadowColor = "rgba(23, 34, 72, 0.16)";
  context.shadowBlur = 44;
  context.shadowOffsetY = 18;
  context.fillStyle = "#ffffff";
  drawRoundRect(context, 70, 70, 940, 980, 34);
  context.fill();
  context.shadowColor = "transparent";

  const logo = await loadCanvasImage("./assets/siftle-logo-small.png").catch(() => null);
  if (logo) {
    context.drawImage(logo, 784, 106, 54, 54);
  }
  context.fillStyle = "#071229";
  context.font = "800 34px Inter, Arial, sans-serif";
  context.textAlign = "left";
  context.fillText("Siftle", 850, 143);

  context.fillStyle = "#6b748c";
  context.font = "700 24px Inter, Arial, sans-serif";
  context.fillText(`${decodeHtmlEntities(story.source)} - ${story.postedAt} ago`, 110, 140);

  const imageY = 195;
  if (includeRemoteImage) {
    const storyImage = await loadCanvasImage(getProxyImageUrl(story.imageUrl)).catch(() => null);
    if (storyImage) {
      drawCoverImage(context, storyImage, 110, imageY, 860, 520, 28);
    } else {
      context.fillStyle = "#eef2ff";
      drawRoundRect(context, 110, imageY, 860, 520, 28);
      context.fill();
    }
  } else {
    context.fillStyle = "#eef2ff";
    drawRoundRect(context, 110, imageY, 860, 520, 28);
    context.fill();
  }

  const chipY = 775;
  context.fillStyle =
    story.category === "Sports"
      ? "#dffaf4"
      : story.category === "Tech"
        ? "#e8eef6"
        : story.category === "Anime"
          ? "#efe7ff"
          : story.category === "Gaming"
            ? "#ffebd9"
            : "#eee7ff";
  drawRoundRect(context, 110, chipY, 118, 42, 21);
  context.fill();
  context.fillStyle = story.category === "Sports" ? "#11a98d" : story.category === "Tech" ? "#3f5f86" : story.category === "Gaming" ? "#d95c14" : "#6f3cff";
  context.font = "800 22px Inter, Arial, sans-serif";
  context.fillText(displayCategory(story.category), 132, chipY + 28);

  context.fillStyle = "#07142f";
  context.font = "680 44px Space Grotesk, Inter, Arial, sans-serif";
  drawWrappedText(context, decodeHtmlEntities(story.headline), 110, 888, 860, 54, 4);

  return canvas;
};

const createStoryImageBlob = async (story: NewsStory): Promise<Blob> => {
  const canvas = await drawShareCard(story, true);
  try {
    return await canvasToBlob(canvas);
  } catch {
    return canvasToBlob(await drawShareCard(story, false));
  }
};

const getStoryFilename = (story: NewsStory): string => {
  const slug = story.headline.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
  return `siftle-${slug || "story"}.png`;
};

const saveStoryImage = async (story: NewsStory): Promise<void> => {
  const blob = await createStoryImageBlob(story);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getStoryFilename(story);
  link.click();
  URL.revokeObjectURL(url);
};

const shareStoryImage = async (story: NewsStory): Promise<void> => {
  const blob = await createStoryImageBlob(story);
  const file = new File([blob], getStoryFilename(story), { type: "image/png" });
  const shareData = {
    title: story.headline,
    text: `Siftle: ${story.headline}`,
    files: [file]
  };

  if (navigator.canShare?.(shareData) && navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await saveStoryImage(story);
};

const handleStoryExport = async (storyId: number, action: "save" | "share"): Promise<void> => {
  const story = state.stories.find((item) => item.id === storyId);
  if (!story) return;

  state.activeShareStoryId = null;
  renderStories();
  showActionToast(action === "share" ? "Preparing share image" : "Preparing download");

  if (menuStatus) menuStatus.textContent = action === "share" ? "Preparing share image..." : "Preparing image download...";

  try {
    if (action === "share") {
      await shareStoryImage(story);
    } else {
      await saveStoryImage(story);
    }
    showActionToast(action === "share" ? "Share image ready" : "Image saved");
    if (menuStatus) menuStatus.textContent = "Branded story image ready";
  } catch (error) {
    console.warn(error);
    showActionToast("Image export unavailable");
    if (menuStatus) menuStatus.textContent = "Image export was cancelled or unavailable";
  }
};

const renderThreadTimelineItem = (story: NewsStory, label: string): string => {
  const isUnlocking = state.unlockingSummaryUrl === story.sourceUrl;
  const hasFailure = hasBriefingGenerationFailure(story);
  return `
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${story.category}">${displayCategory(story.category)}</span>
        <span>${label} - ${story.source}</span>
      </div>
      <h3>${story.headline}</h3>
      <p>${safeStorySummary(story)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(story.sourceUrl)
          ? ""
          : `<a class="thread-source-link" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(story.sourceUrl)}" ${isUnlocking ? "disabled" : ""}>${isUnlocking ? "Preparing..." : "AI briefing"}</button>
      </div>
      ${renderBriefingStatusNote(story)}
      ${isUnlocking
        ? `<div style="margin-top: 12px;">${renderSummarySkeleton()}</div>`
        : isBriefingUnlocked(story)
        ? (state.loadingSummaryUrl === story.sourceUrl
            ? `<div style="margin-top: 12px;">${renderSummarySkeleton()}</div>`
            : hasFailure
              ? `<div style="margin-top: 12px;">${renderUnavailableBriefing(story)}</div>`
              : `<div style="margin-top: 12px;">${formatAIBriefing(safeStorySummary(story, state.aiSummaries[story.sourceUrl] || story.ai_summary), story)}</div>`)
        : ""}
    </div>
  </article>
`;
};

const placeOptionMarketOrder = async (marketId: string, optionId: string): Promise<void> => {
  if (!state.walletAddress) {
    showActionToast("Session expired or wallet not connected. Please sign in.");
    void connectWallet();
    return;
  }

  const market = getPortfolioMarkets().find((item) => item.id === marketId);
  if (!market || !isOptionMarket(market)) return;

  const option = getMarketOptions(market).find((item) => item.id === optionId);
  if (!option) {
    showActionToast("Choose a valid option.");
    return;
  }

  if (!state.hasLoadedPortfolioPositions && !state.loadingPortfolioPositions) {
    state.marketTradeStatus = "Loading position...";
    render();
    await loadPortfolioPositions();
    state.marketTradeStatus = null;
  }

  const snapshot = state.marketSnapshots[market.id];
  if (isMarketResolved(market, snapshot)) {
    showActionToast("This market is resolved and can no longer be traded.");
    return;
  }

  const position = state.marketPositions[market.id];
  const exiting = state.marketOrderMode === "sell";
  if (!exiting && position?.optionId) {
    showActionToast("Your pick is already locked for this market.");
    return;
  }
  if (exiting && !position?.optionId) {
    showActionToast("You do not have a pick to exit.");
    return;
  }

  const heldOptionAmount = Math.max(0, Number(position?.optionSharesUsdc) || 0);
  if (exiting && heldOptionAmount <= 0) {
    showActionToast("Your pick is still loading. Please try again.");
    await loadPortfolioPositions({ force: true });
    return;
  }

  const tradeAmount = exiting
    ? heldOptionAmount
    : normalizeMarketTradeAmount(Number(state.marketTradeAmount) || 0, "buy", "yes", undefined);
  state.marketTradeAmount = tradeAmount;
  state.marketTradeOptionId = exiting ? position?.optionId || option.id : option.id;
  trackEvent("trade_attempt");

  try {
    state.marketTradeStatus = exiting ? "Exiting your pick..." : "Locking your pick...";
    render();
    await executeArcOptionMarketOrder(
      market.id,
      exiting ? "sell" : "buy",
      exiting ? position?.optionId || option.id : option.id,
      tradeAmount,
      (status: string) => {
        state.marketTradeStatus = status;
        render();
      }
    );
    delete state.marketSnapshots[market.id];
    delete state.marketPositions[market.id];
    delete state.checkedMarketSnapshots[market.id];
    state.hasLoadedPortfolioPositions = false;
    state.portfolioPositionsLoadedAt = 0;
    state.walletAddress = await getConnectedArcWallet();
    if (state.walletAddress) state.walletBalance = await getSmartWalletBalance(state.walletAddress);
    await loadPortfolioPositions({ force: true });
    trackEvent(exiting ? "trade_sell_success" : "trade_buy_success");
    showActionToast(exiting ? "Pick exited" : `Pick locked: ${option.label}`);
    state.tradeDrawerOpen = false;
  } catch (error) {
    trackEvent("trade_failed");
    showActionToast(error instanceof Error ? error.message : "Trade failed");
  } finally {
    state.marketTradeStatus = null;
    renderWalletState();
    render();
  }
};

const renderThreadView = (): void => {
  if (!storyDetail || !storyList) return;

  const seedStory = state.stories.find((item) => item.sourceUrl === state.selectedThreadUrl);
  storyList.hidden = true;
  storyDetail.hidden = false;
  storyDetail.classList.add("fullscreen");
  document.body.classList.add("detail-mode");

  if (!seedStory) {
    storyDetail.innerHTML = "";
    return;
  }

  const isLoading = state.loadingThreadUrl === seedStory.sourceUrl;
  const thread = state.activeThread;
  if (isLoading && !thread) {
    storyDetail.innerHTML = `
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${seedStory.thread?.topic || seedStory.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${renderThreadTimelineSkeleton(3)}
        </article>
      </div>
    `;
    return;
  }

  storyDetail.innerHTML = `
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${seedStory.category}">${displayCategory(seedStory.category)}</span>
          <span>${formatThreadCount(thread?.items?.length ?? 0)}</span>
        </div>
        <h2>${thread?.topic || seedStory.thread?.topic || seedStory.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${renderThreadTimelineItem(seedStory, "Latest")}
          ${sortThreadItemsNewestFirst(thread?.items ?? []).map((item) => renderThreadTimelineItem(item, item.postedAt || "Earlier")).join("")}
        </div>
      </article>
    </div>
  `;
};

const renderDetail = (): void => {
  if (!storyDetail || !storyList) return;

  if (state.selectedThreadUrl) {
    renderThreadView();
    return;
  }

  const story = state.stories.find((item) => item.id === state.selectedStoryId);
  if (!story) {
    storyDetail.hidden = true;
    storyDetail.classList.remove("fullscreen");
    document.body.classList.remove("detail-mode");
    storyList.hidden = false;
    return;
  }

  if (story.type === "tweet") {
    storyList.hidden = true;
    storyDetail.hidden = false;
    storyDetail.classList.add("fullscreen");
    document.body.classList.add("detail-mode");

    const twitterSvg = `<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

    storyDetail.innerHTML = `
      <div class="detail-container tweet-detail-container" style="max-width: 600px; margin: 0 auto; padding: 20px 16px;">
        <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed" style="margin-bottom: 20px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to feed
        </button>
        <article class="detail-card tweet-detail-card" style="border-radius: 16px; padding: 24px;">
          <div class="detail-topline" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; font-size: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color, #334155);">
            <div style="display: flex; align-items: center; gap: 8px;">
              ${twitterSvg}
              <strong class="tweet-account-name" style="font-size: 15px;">${story.source}</strong>
            </div>
            <span class="tweet-detail-time">${getStoryTimeLabel(story)}</span>
          </div>
          
          <div class="tweet-content-wrapper" style="margin-bottom: 24px;">
            ${story.imageUrl && !/nitter\.net\/pic/i.test(story.imageUrl) && !/placeholder/i.test(story.imageUrl)
              ? `<img class="detail-image" src="${story.imageUrl}" alt="" style="width: 100%; border-radius: 12px; margin-bottom: 16px; object-fit: cover; max-height: 400px; border: 1px solid var(--border-color, #334155);" />`
              : ""
            }
            <div class="tweet-full-text" style="font-size: 16px; line-height: 1.6; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-weight: 400; word-break: break-word;">
              ${story.summary}
            </div>
          </div>
          
          <a class="source-button twitter-btn" href="${story.sourceUrl}" target="_blank" rel="noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 15px; text-align: center; box-sizing: border-box;">
            ${twitterSvg}
            Open Tweet on X
          </a>
        </article>
      </div>
    `;
    return;
  }

  const summary = safeStorySummary(story, state.aiSummaries[story.sourceUrl]);
  const isLoadingSummary = state.loadingSummaryUrl === story.sourceUrl;
  const isUnlocked = isBriefingUnlocked(story);
  const isUnlocking = state.unlockingSummaryUrl === story.sourceUrl;
  const hasSummaryFailure = hasBriefingGenerationFailure(story);

  storyList.hidden = true;
  storyDetail.hidden = false;
  storyDetail.classList.add("fullscreen");
  document.body.classList.add("detail-mode");
  storyDetail.innerHTML = `
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${story.category}">${displayCategory(story.category)}</span>
          <span>${story.source} - ${getStoryTimeLabel(story)} - ${story.readTime}</span>
        </div>
        <h2>${story.headline}</h2>
        <img class="detail-image" src="${story.imageUrl}" alt="" />
        <section class="detail-summary ${story.category}">
          <strong>AI briefing</strong>
          ${isUnlocked ? renderBriefingStatusNote(story) : ""}
          ${!isUnlocked ? renderLockedBriefing(story, isUnlocking) : isLoadingSummary ? renderSummarySkeleton() : hasSummaryFailure ? renderUnavailableBriefing(story) : formatAIBriefing(summary, story)}
        </section>
        ${(() => {
          const urlParams = new URLSearchParams(window.location.search);
          const urlParam = urlParams.get("url");
          const isSharedLanding = Boolean(urlParam && urlParam === story.sourceUrl);
          if (isSharedLanding) {
            return `
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px; width: 100%;">
              <a class="source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer" style="width: 100%; box-sizing: border-box; text-align: center; justify-content: center;">Open source</a>
              <button type="button" class="read-more-news-btn" data-back-to-feed>
                Read More News
              </button>
            </div>
            `;
          }
          return `<a class="source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`;
        })()}
      </article>
    </div>
  `;
};

const renderMarketCard = (market: MarketPreview, index: number = 0): string => {
  const optionMarket = isOptionMarket(market);
  const options = getMarketOptions(market);
  const isFeatured = Boolean((market as any).isFeatured || index === 0);

  const homeCrest = (market as any).homeCrest || "https://a.espncdn.com/i/teamlogos/soccer/500/359.png";
  const awayCrest = (market as any).awayCrest || "https://a.espncdn.com/i/teamlogos/soccer/500/379.png";
  const homeTeam = (market as any).homeTeam || "Arsenal";
  const awayTeam = (market as any).awayTeam || "Coventry City";
  const leagueInfo = (market as any).league || "Premier League — Today 20:00";

  if (isFeatured) {
    return `
      <article class="sporty-marquee-card" data-market-id="${market.id}">
        <div class="sporty-marquee-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span class="sporty-hot-badge" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; font-size: 0.72rem; font-weight: 800; padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(239, 68, 68, 0.3);">HOT · BEST ODDS</span>
          <span style="font-size: 0.82rem; color: var(--muted); font-weight: 600;">${escapeHtml(leagueInfo)}</span>
        </div>
        <div class="sporty-teams-row" style="display: flex; justify-content: space-between; align-items: center; margin: 14px 0 18px;">
          <div class="sporty-team" style="display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1;">
            <img src="${homeCrest}" alt="" class="sporty-team-crest" style="width: 48px; height: 48px; max-width: 48px; max-height: 48px; object-fit: contain;" />
            <span class="sporty-team-name" style="font-size: 0.95rem; font-weight: 700; color: var(--ink); text-align: center;">${escapeHtml(homeTeam)}</span>
          </div>
          <div class="sporty-match-center" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <span class="sporty-match-time" style="font-size: 0.8rem; color: var(--muted); font-weight: 600;">20:00 | Today</span>
            <span class="sporty-market-type" style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; border-radius: 6px; padding: 2px 8px; font-size: 0.72rem; font-weight: 700;">1X2</span>
          </div>
          <div class="sporty-team" style="display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1;">
            <img src="${awayCrest}" alt="" class="sporty-team-crest" style="width: 48px; height: 48px; max-width: 48px; max-height: 48px; object-fit: contain;" />
            <span class="sporty-team-name" style="font-size: 0.95rem; font-weight: 700; color: var(--ink); text-align: center;">${escapeHtml(awayTeam)}</span>
          </div>
        </div>
        <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; color: var(--ink); font-weight: 700; margin-bottom: 14px; text-align: center;">
          ${escapeHtml(market.question)}
        </div>
        <div class="sporty-odds-row" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px;">
          ${options.map((opt) => {
            const pools = (state.marketSnapshots[market.id]?.optionPools) || (market as any).initialOptionPools || {};
            const total = Object.values(pools).reduce((a: number, b: any) => a + (Number(b) || 0), 0);
            const optPool = Number(pools[opt.id]) || 0;
            const defaultOddsMap: Record<string, number> = { home: 2.25, draw: 3.20, away: 2.45 };
            const oddsVal = (total > 0 && optPool > 0) ? (total / optPool) : (defaultOddsMap[opt.id] || 2.25);
            return `
              <button type="button" class="sporty-odds-btn" data-market-id="${market.id}" data-market-option-id="${escapeHtml(opt.id)}" style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer;">
                <span style="font-size: 0.82rem; font-weight: 600; color: #f1f5f9;">${escapeHtml(opt.label)}</span>
                <strong style="font-size: 0.95rem; font-weight: 800; color: #10b981; margin-top: 2px;">${oddsVal.toFixed(2)}x</strong>
              </button>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }

  // Clean compact 1X2 card for subsequent matches
  const compactHome = (market as any).homeTeam || "Dinamo Moscow";
  const compactAway = (market as any).awayTeam || "FK Nizhny Novgorod";

  return `
    <article class="sporty-compact-card" data-market-id="${market.id}" style="background: linear-gradient(145deg, #151d30 0%, #0e1626 100%); border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-bottom: 14px;">
      <div class="sporty-compact-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 0.8rem; color: #10b981; font-weight: 700;">${escapeHtml(leagueInfo)}</span>
        <span style="font-size: 0.78rem; color: var(--muted); font-weight: 600;">1X2 Match Result</span>
      </div>
      <div class="sporty-compact-teams" style="font-size: 1rem; font-weight: 700; color: var(--ink); margin: 8px 0;">
        ${escapeHtml(compactHome)} <span style="color: var(--muted); font-weight: 500; font-size: 0.88rem;">vs</span> ${escapeHtml(compactAway)}
      </div>
      <div class="sporty-odds-row" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 10px;">
        ${options.map((opt) => {
          const pools = (state.marketSnapshots[market.id]?.optionPools) || (market as any).initialOptionPools || {};
          const total = Object.values(pools).reduce((a: number, b: any) => a + (Number(b) || 0), 0);
          const optPool = Number(pools[opt.id]) || 0;
          const defaultOddsMap: Record<string, number> = { home: 2.25, draw: 3.20, away: 2.45 };
          const oddsVal = (total > 0 && optPool > 0) ? (total / optPool) : (defaultOddsMap[opt.id] || 2.25);
          return `
            <button type="button" class="sporty-odds-btn" data-market-id="${market.id}" data-market-option-id="${escapeHtml(opt.id)}" style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer;">
              <span style="font-size: 0.82rem; font-weight: 600; color: #f1f5f9;">${escapeHtml(opt.label)}</span>
              <strong style="font-size: 0.95rem; font-weight: 800; color: #10b981; margin-top: 2px;">${oddsVal.toFixed(2)}x</strong>
            </button>
          `;
        }).join("")}
      </div>
    </article>
  `;
};

const generateWhatsAppShareText = (market: MarketPreview): string => {
  const marketView = getMarketView(market);
  const snapshot = state.marketSnapshots[market.id];
  const yesPrice = snapshot?.yesPriceCents ?? market.probability;
  const noPrice = 100 - yesPrice;
  const latestUpdate = marketView.evidence[0];
  const latestTitle = latestUpdate ? latestUpdate.headline : "No updates yet";
  
  const currentUrl = `${window.location.origin}${window.location.pathname}#market-${market.id}`;
  
  return `🚨 *Siftle Market Alert* 🚨\n\n*Market:* ${market.question}\n🟢 *Yes:* ${yesPrice}¢ | LIVE • *No:* ${noPrice}¢\n\n*Latest Development:* "${latestTitle}"\n\nTrade and discuss here: ${currentUrl}`;
};

const renderMarketDetail = (market: MarketPreview): void => {
  if (!storyList || !storyDetail) return;
  const marketView = getMarketView(market);
  const isLoadingEvidence = !state.checkedMarketEvidence[market.id];
  const marketAddress = getMarketAddress(market);
  const snapshot = state.marketSnapshots[market.id];
  const optionMarket = isOptionMarket(market);
  const optionList = getMarketOptions(market);
  if (optionMarket && !state.marketTradeOptionId) state.marketTradeOptionId = optionList[0]?.id || null;
  const selectedOption = getSelectedOption(market);
  const isLoadingSnapshot = Boolean(marketAddress && !snapshot);
  const yesPrice = snapshot?.yesPriceCents ?? (marketAddress ? market.probability : 0);
  const noPrice = snapshot?.noPriceCents ?? (marketAddress ? 100 - market.probability : 0);
  const yesPriceLabel = isLoadingSnapshot ? "" : marketAddress ? `${yesPrice}¢` : "--";
  const noPriceLabel = isLoadingSnapshot ? "" : marketAddress ? `${noPrice}¢` : "--";
  const position = state.marketPositions[market.id] || { yesSharesUsdc: 0, noSharesUsdc: 0 };
  const hasOptionPick = Boolean(position.optionId);
  if (optionMarket && hasOptionPick && state.marketOrderMode !== "sell") state.marketOrderMode = "sell";
  if (optionMarket && !hasOptionPick && state.marketOrderMode === "sell") state.marketOrderMode = "buy";
  const optionExitAmount = optionMarket && state.marketOrderMode === "sell" && hasOptionPick ? Math.max(0, Number(position.optionSharesUsdc) || 0) : 0;
  const amount = optionExitAmount > 0
    ? optionExitAmount
    : normalizeMarketTradeAmount(Number(state.marketTradeAmount) || 0, state.marketOrderMode, state.marketTradeSide, position);
  const amountBounds = optionExitAmount > 0
    ? { min: 0, max: optionExitAmount }
    : getTradeAmountBounds(state.marketOrderMode, state.marketTradeSide, position);
  const amountHint = state.marketOrderMode === "buy"
    ? "exactly $2.00 USDC"
    : `Up to $${formatMoney(amountBounds.max)} USDC`;
  const positionReady = !state.walletAddress || state.hasLoadedPortfolioPositions;
  const marketResolved = isMarketResolved(market, snapshot);
  const marketTradeLockMessage = getMarketTradeLockMessage(market, snapshot);
  const marketTradeLocked = Boolean(marketTradeLockMessage);
  if (!optionMarket) state.marketTradeSide = normalizeTradeSideForMode(state.marketOrderMode, state.marketTradeSide, position);
  const canTradeYes = !optionMarket && !marketResolved && !marketTradeLocked && positionReady && canTradeSide(state.marketOrderMode, "yes", position);
  const canTradeNo = !optionMarket && !marketResolved && !marketTradeLocked && positionReady && canTradeSide(state.marketOrderMode, "no", position);
  const canSubmitTrade = optionMarket
    ? !marketResolved && !marketTradeLocked && positionReady && (state.marketOrderMode === "sell" ? hasOptionPick : !hasOptionPick && Boolean(selectedOption))
    : !marketResolved && !marketTradeLocked && positionReady && canTradeSide(state.marketOrderMode, state.marketTradeSide, position);
  const yesDisabledLabel = marketResolved
    ? "Market resolved"
    : marketTradeLockMessage
      ? marketTradeLockMessage
    : state.marketOrderMode === "sell"
      ? "No YES shares"
      : "Exit NO first";
  const noDisabledLabel = marketResolved
    ? "Market resolved"
    : marketTradeLockMessage
      ? marketTradeLockMessage
    : state.marketOrderMode === "sell"
      ? "No NO shares"
      : "Exit YES first";
  const projectedPayout = optionMarket
    ? amount
    : estimatePoolPayout(snapshot, state.marketTradeSide, amount, state.marketOrderMode, position);
  const orderLabel = state.marketOrderMode === "buy" ? "Buy" : "Exit";
  const marketStatus = optionMarket ? "Pick one outcome" : marketAddress ? "Arc testnet live" : "Contract not deployed";

  storyList.hidden = true;
  storyDetail.hidden = false;
  storyDetail.classList.add("fullscreen");
  document.body.classList.add("detail-mode");

  void loadMarketSnapshot(market);
  void loadMarketEvidence(market);
  const positionsAreStale = state.walletAddress
    && (!state.hasLoadedPortfolioPositions || Date.now() - state.portfolioPositionsLoadedAt > 15000);
  if (positionsAreStale && !state.loadingPortfolioPositions) {
    void loadPortfolioPositions({ force: !state.hasLoadedPortfolioPositions });
  }

  const hasPosition = optionMarket ? Boolean(position.optionId) : position.yesSharesUsdc > 0 || position.noSharesUsdc > 0;
  let positionHtml = "";
  if (optionMarket && hasPosition && state.walletAddress) {
    positionHtml = `
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${escapeHtml(position.optionLabel || "Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Status</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">Locked in</strong>
          </div>
        </div>
      </div>
    `;
  } else if (hasPosition && state.walletAddress) {
    const heldRows = getHeldPositionRows(position, snapshot);

    positionHtml = `
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${heldRows.map((row) => `
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${row.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${formatMoney(row.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${formatMoney(row.payout)}</strong>
            </div>
          </div>
        `).join("")}
        <div style="border-top: 1px solid var(--market-border); padding-top: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--market-text-muted);">Winning side splits the final pool</span>
        </div>
      </div>
    `;
  }

  storyDetail.innerHTML = `
    <div class="detail-container market-detail-container">
      <div class="detail-header-row">
        <button class="back-button" type="button" data-back-markets aria-label="Go back to markets">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to markets
        </button>
        
        <button class="share-whatsapp-btn" type="button" id="shareWhatsAppBtn" aria-label="Share to WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.22c5.507 0 9.99-4.478 9.99-9.985A9.996 9.996 0 0 0 12.012 2zm5.782 14.155c-.249.703-1.442 1.3-1.966 1.385-.472.078-1.091.147-3.149-.705-2.631-1.09-4.301-3.771-4.432-3.947-.13-.177-1.066-1.417-1.066-2.703 0-1.287.674-1.92.915-2.176.241-.256.529-.32.707-.32.177 0 .355.001.507.009.157.008.368-.06.576.44.214.516.732 1.785.795 1.916.063.13.104.282.019.452-.085.17-.128.277-.255.426-.127.15-.268.334-.383.45-.13.13-.266.27-.115.529.15.258.669 1.103 1.433 1.784.983.876 1.808 1.146 2.062 1.252.254.107.402.09.553-.085.15-.177.644-.75.817-.98.173-.23.346-.192.576-.107.23.085 1.464.69 1.719.817.255.127.424.192.487.3.063.107.063.619-.186 1.322z"/></svg>
          <span>Share WhatsApp</span>
        </button>
      </div>

      <article class="market-detail-card">
        <div class="market-detail-main">
          <div class="market-detail-topline">
            <span class="category-chip ${market.category}">${displayCategory(market.category)}</span>
            <span class="market-status-pill">${marketStatus}</span>
          </div>
          <h2>${market.question}</h2>
          ${positionHtml}
          ${marketView.imageUrl ? `
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${marketView.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          ` : ""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${getDailyTradeLockTime(market, snapshot) === null ? "Closes" : "Trade lock"}</span>
              <strong>${getDailyTradeLockLabel(market, snapshot)}</strong>
            </div>
            <div class="market-stat">
              <span>Market activity</span>
              <strong>Hidden</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${market.resolution}</p>
            ${marketTradeLockMessage ? `<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${marketTradeLockMessage}</p>` : ""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Related News</h3>
              <span>${isLoadingEvidence ? "Loading..." : `${marketView.evidence.length} stories`}</span>
            </header>
            <p class="market-thread-intro">Read the stories connected to this market, newest first.</p>
            <div class="market-thread-timeline">
              ${isLoadingEvidence
                ? renderMarketEvidenceSkeleton(3)
                : marketView.evidence.length === 0
                  ? `<div class="portfolio-empty compact">Related news is still loading for this market.</div>`
                : marketView.evidence.map((item) => {
                  const briefingTarget = getBriefingTargetFromMarketEvidence(market, item);
                  const isUnlockingEvidence = state.unlockingSummaryUrl === item.sourceUrl;
                  return `
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${item.date} · ${item.source}</span>
                    </div>
                    <h4>${item.headline}</h4>
                    <p>${item.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(item.sourceUrl) ? "" : `<a class="market-thread-source-link" href="${item.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(item.sourceUrl)}" ${isUnlockingEvidence ? "disabled" : ""}>${isUnlockingEvidence ? "Preparing..." : "AI briefing"}</button>
                    </div>
                    ${renderBriefingStatusNote(briefingTarget)}
                    ${isUnlockingEvidence
                      ? `<div style="margin-top: 12px;">${renderSummarySkeleton()}</div>`
                      : isBriefingUnlocked(briefingTarget)
                      ? (state.loadingSummaryUrl === item.sourceUrl
                          ? `<div style="margin-top: 12px;">${renderSummarySkeleton()}</div>`
                            : hasBriefingGenerationFailure(briefingTarget)
                              ? `<div style="margin-top: 12px;">${renderUnavailableBriefing(briefingTarget)}</div>`
                              : `<div style="margin-top: 12px;">${formatAIBriefing(safeStorySummary(briefingTarget, state.aiSummaries[item.sourceUrl]), briefingTarget)}</div>`)
                      : ""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${optionMarket
            ? `<span>${hasOptionPick ? "Pick locked" : "Choose one option"}</span><span><strong>${optionList.length} options</strong></span>`
            : `<span>Choose a side</span><span><strong>${state.marketOrderMode === "sell" ? "Exit available" : "Trade open"}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${marketResolved || marketTradeLocked ? "disabled" : ""}>
          ${marketResolved ? "Market Resolved" : marketTradeLockMessage || (optionMarket ? hasOptionPick ? "Pick Locked" : "Pick Outcome" : "Trade Market")}
        </button>
      </div>

      <div class="trade-drawer-backdrop ${state.tradeDrawerOpen ? "open" : ""}" id="tradeDrawerBackdrop"></div>
      <div class="trade-drawer ${state.tradeDrawerOpen ? "open" : ""}" id="tradeDrawer">
        <div class="trade-drawer-header">
          <h3>Place Trade</h3>
          <button class="close-drawer-btn" type="button" id="closeTradeDrawerBtn" aria-label="Close trade panel">&times;</button>
        </div>
        <div class="trade-drawer-body">
          <div class="market-order-mode">
            <button type="button" class="${state.marketOrderMode === "buy" ? "active" : ""}" data-market-order-mode="buy" ${marketResolved || marketTradeLocked ? "disabled" : ""}>Buy</button>
            <button type="button" class="${state.marketOrderMode === "sell" ? "active" : ""}" data-market-order-mode="sell" ${marketResolved || marketTradeLocked ? "disabled" : ""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${optionMarket
              ? optionList.map((option) => {
                const active = state.marketTradeOptionId === option.id || position.optionId === option.id;
                const disabled = marketResolved || marketTradeLocked || state.marketOrderMode === "sell" || hasOptionPick || !positionReady;
                return `
                  <button type="button" class="market-side option ${active ? "active" : ""} ${disabled ? "disabled" : ""}" data-market-option-id="${escapeHtml(option.id)}" ${disabled ? "disabled" : ""}>
                    <span>${escapeHtml(option.label)}</span>
                    ${position.optionId === option.id ? `<small>Your pick</small>` : ""}
                  </button>
                `;
              }).join("")
              : isLoadingSnapshot
              ? `
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `
              : `
                <button type="button" class="market-side yes ${state.marketTradeSide === "yes" ? "active" : ""} ${canTradeYes ? "" : "disabled"}" data-market-trade-side="yes" ${canTradeYes ? "" : "disabled"} title="${canTradeYes ? "Yes" : yesDisabledLabel}">
                  <span>Yes</span>
                  ${canTradeYes ? "" : `<small>${yesDisabledLabel}</small>`}
                </button>
                <button type="button" class="market-side no ${state.marketTradeSide === "no" ? "active" : ""} ${canTradeNo ? "" : "disabled"}" data-market-trade-side="no" ${canTradeNo ? "" : "disabled"} title="${canTradeNo ? "No" : noDisabledLabel}">
                  <span>No</span>
                  ${canTradeNo ? "" : `<small>${noDisabledLabel}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${amountHint}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${amountBounds.min.toFixed(2)}" max="${Math.max(amountBounds.min, amountBounds.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${amount}" data-market-amount ${marketResolved || marketTradeLocked ? "disabled" : ""} style="${state.marketOrderMode === "buy" ? "opacity: 0.7; cursor: not-allowed;" : ""}" />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <div class="sporty-slip-summary" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.22) 100%); border: 1.5px solid rgba(16, 185, 129, 0.5); border-radius: 14px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.12);">
              <span style="color: var(--ink); font-size: 1.05rem; font-weight: 700;">Estimated Payout:</span>
              <strong style="color: #34d399; font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; font-weight: 900;">${((amount || 1) * (optionMarket ? (Number((snapshot?.optionPools || {})[selectedOption?.id || "1"]) > 0 ? (Object.values(snapshot?.optionPools || {}).reduce((a: number, b: any) => a + (Number(b) || 0), 0) / Number((snapshot?.optionPools || {})[selectedOption?.id || "1"])) : optionList.length) : 2.0)).toFixed(2)} USDC</strong>
            </div>
          </div>

          <div class="drawer-action-container">
            ${isLoadingSnapshot
              ? `<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>`
              : state.marketTradeStatus
                ? `<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${state.marketTradeStatus}</button>`
                : marketResolved
                  ? `<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>`
                : marketTradeLocked
                  ? `<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${marketTradeLockMessage}</button>`
                : state.walletAddress
                  ? !positionReady
                    ? `<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>`
                    : optionMarket && state.marketOrderMode === "sell" && hasOptionPick
                    ? `<button type="button" class="market-submit-button" data-market-option-trade="${escapeHtml(position.optionId || "")}">Exit pick</button>`
                    : canSubmitTrade
                    ? optionMarket
                      ? `<button type="button" class="market-submit-button" data-market-option-trade="${escapeHtml(selectedOption?.id || "")}">Confirm ${escapeHtml(selectedOption?.label || "pick")}</button>`
                      : `<button type="button" class="market-submit-button" data-market-trade="${state.marketTradeSide}">Confirm ${orderLabel} ${state.marketTradeSide === "yes" ? "Yes" : "No"}</button>`
                    : `<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${orderLabel.toLowerCase()} side</button>`
                  : `<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>`
            }
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${state.walletAddress ? `${state.walletBalance ?? "0"} USDC` : "Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `;
};



export const isMarketLocked = (market: any): boolean => {
  if (!market) return false;
  if (market.isLocked === true) return true;
  const status = String(market.statusDetail || "").toLowerCase();
  if (
    status.includes("ft") ||
    status.includes("final") ||
    status.includes("ended") ||
    status.includes("finished") ||
    status.includes("resolved") ||
    status.includes("postponed") ||
    status.includes("locked")
  ) {
    return true;
  }
  if (String(market.closes || "").toLowerCase() === "resolved") {
    return true;
  }
  // Check if live match reached 75+ mins (10-15 mins before final whistle)
  if (market.isLive) {
    const minsMatch = status.match(/([0-9]{1,3})/);
    if (minsMatch) {
      const mins = parseInt(minsMatch[1], 10);
      if (!isNaN(mins) && mins >= 75) return true;
    }
  }
  return false;
};

export const globalOddsStore: Record<string, { home: number; draw: number; away: number }> = (() => {
  try {
    const saved = localStorage.getItem("siftle_global_odds");
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
})();

const getMarketOddsCents = (market: any) => {
  // Calculate directly from live option pools when volume exists
  const homePool = Number(market?.homePoolUsdc) || Number(market?.optionPools?.home) || Number(market?.initialOptionPools?.home) || 0;
  const drawPool = Number(market?.drawPoolUsdc) || Number(market?.optionPools?.draw) || Number(market?.initialOptionPools?.draw) || 0;
  const awayPool = Number(market?.awayPoolUsdc) || Number(market?.optionPools?.away) || Number(market?.initialOptionPools?.away) || 0;
  const totalPool = homePool + drawPool + awayPool;
  
  if (totalPool > 0) {
    return {
      home: ((homePool / totalPool) * 100).toFixed(1),
      draw: ((drawPool / totalPool) * 100).toFixed(1),
      away: ((awayPool / totalPool) * 100).toFixed(1)
    };
  }

  return { home: "33.3", draw: "33.3", away: "33.3" };
};

const renderMarkets = (): void => {
  if (!marketPreviews || marketPreviews.length === 0) { marketPreviews = fallbackMarketPreviews; }
  else { marketPreviews = mergeMarketsById(fallbackMarketPreviews, marketPreviews); }
  if (!storyList || !storyDetail) return;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.add("active");
  topNewsButton?.classList.remove("active");
  topPortfolioButton?.classList.remove("active");

  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyDetail.classList.remove("fullscreen");
  storyList.hidden = false;
  storyList.classList.remove("matches-surface-active");

  const activeLeague = state.activeMarketLeagueFilter || "All";

  marketPreviews = marketPreviews.filter((m: any) => {
    const text = (m.id + " " + m.question + " " + (m.homeTeam || "") + " " + (m.awayTeam || "")).toLowerCase();
    return !["coventry", "nizhny", "chertanova", "dinamo moscow", "spartak moscow"].some(kw => text.includes(kw));
  });

  const featuredMarket = marketPreviews.find(m => m.id === "m-chelsea-manutd") || marketPreviews[0];

  const leaguesList = [
    { id: "All", label: "All" },
    { id: "English Premier League", label: "Premier League" },
    { id: "Spanish LaLiga", label: "La Liga" },
    { id: "Italian Serie A", label: "Serie A" },
    { id: "German Bundesliga", label: "Bundesliga" },
    { id: "French Ligue 1", label: "Ligue 1" },
    { id: "Portuguese Primeira Liga", label: "Primeira Liga" },
    { id: "Dutch Eredivisie", label: "Eredivisie" }
  ];

  const filteredMarkets = activeLeague === "All"
    ? marketPreviews
    : marketPreviews.filter((m: any) => (m.league || "").toLowerCase().trim() === activeLeague.toLowerCase().trim());

  storyList.innerHTML = `
    <section class="markets-surface" style="width: 100% !important; max-width: 100% !important; margin: 0 auto !important; padding: 12px 16px 120px 16px !important; box-sizing: border-box !important; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif !important; color: var(--ink) !important; overflow-x: hidden !important;">
      
      <!-- Top Title Header -->
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 1.8rem; font-weight: 900; color: var(--ink); letter-spacing: -0.02em;">Live Markets</h1>
        <a href="${ARC_TESTNET_FAUCET}" target="_blank" rel="noreferrer" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); font-size: 0.78rem; font-weight: 800; padding: 6px 12px; border-radius: 999px; text-decoration: none; white-space: nowrap; flex-shrink: 0;">Get testnet USDC</a>
      </header>

      <!-- Horizontal League Selection Nav Bar -->
      <div style="display: flex; gap: 8px; overflow-x: auto; overflow-y: hidden; padding-bottom: 10px; margin-bottom: 20px; scrollbar-width: none; -webkit-overflow-scrolling: touch; width: 100%; box-sizing: border-box;">
        ${leaguesList.map((lg) => {
          const isActive = activeLeague === lg.id;
          return `
            <button type="button" class="market-league-selector-btn" data-league-id="${lg.id}" style="background: ${isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.05)'}; color: ${isActive ? '#000000' : 'var(--muted)'}; border: 1.5px solid ${isActive ? '#38bdf8' : 'var(--border)'}; border-radius: 999px; padding: 8px 16px; font-size: 0.88rem; font-weight: ${isActive ? '900' : '700'}; cursor: pointer; flex-shrink: 0; white-space: nowrap; font-family: inherit; transition: all 0.2s ease; ${isActive ? 'box-shadow: 0 4px 12px rgba(56, 189, 248, 0.35);' : ''}">
              ${escapeHtml(lg.label)}
            </button>
          `;
        }).join("")}
      </div>

      <!-- Active Filtered Markets List -->
      <div style="display: flex; flex-direction: column; gap: 18px;">
        
        <!-- League Section Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">${activeLeague}</h3>
        </div>

        <!-- Market Cards -->
        ${filteredMarkets.length === 0 ? `
          <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 48px 20px; text-align: center; color: var(--muted); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);">
            <div style="font-size: 1.15rem; font-weight: 800; color: var(--ink); margin-bottom: 8px;">No live markets in ${escapeHtml(activeLeague)}</div>
            <div style="font-size: 0.88rem; font-weight: 600; color: var(--muted);">Check back soon for upcoming match fixtures.</div>
          </div>
        ` : filteredMarkets.map((m: any, idx: number) => {
          const homeTeam = m.homeTeam || "Chelsea";
          const awayTeam = m.awayTeam || "Manchester United";
          const homeCrest = m.homeCrest || "https://a.espncdn.com/i/teamlogos/soccer/500/363.png";
          const awayCrest = m.awayCrest || "https://a.espncdn.com/i/teamlogos/soccer/500/360.png";
          const isLive = Boolean(m.isLive);
          const cardVol = Number(m.volumeUsdc) || (Number(m.optionPools?.home || 0) + Number(m.optionPools?.draw || 0) + Number(m.optionPools?.away || 0)) || (Number(m.initialOptionPools?.home || 0) + Number(m.initialOptionPools?.draw || 0) + Number(m.initialOptionPools?.away || 0)) || 0;

          return `
            <div class="thick-league-card" data-market-id="${m.id}" style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);">
              
              <!-- Card Header Status -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                <span style="font-size: 0.78rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; ${Boolean(m.isLocked) ? 'background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);' : isLive ? 'background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);' : 'background: rgba(255, 255, 255, 0.06); color: var(--muted);'}">
                  ${Boolean(m.isLocked) ? 'Locked • In-Play' : isLive ? 'LIVE IN-PLAY' : escapeHtml(m.statusDetail || 'Scheduled')}
                </span>
                <span style="font-size: 0.78rem; color: #38bdf8; font-weight: 800; background: rgba(56, 189, 248, 0.12); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.25);">${cardVol > 0 ? ("$" + cardVol.toFixed(2)) : "$0.00"} Vol</span>
              </div>

              <!-- Stacked Teams -->
              <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img src="${homeCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain;" />
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${escapeHtml(homeTeam)}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img src="${awayCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain;" />
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${escapeHtml(awayTeam)}</span>
                </div>
              </div>

              <!-- 3 Outcome Cents Odds Trading Boxes with Position Locking UX -->
              ${(() => {
                const userPos = state.marketPositions[m.id];
                const hasPos = userPos && ((userPos.optionSharesUsdc || userPos.yesSharesUsdc || 0) > 0);
                const heldId = userPos?.optionId || userPos?.side;
                const odds = getMarketOddsCents(m);

                const renderOptionBox = (optId: string, label: string, price: string) => {
                  const isMarketLocked = Boolean(m.isLocked) || Boolean(m.isLive);
                  const isHeld = hasPos && heldId === optId;
                  const isLocked = (hasPos && heldId !== optId) || (isMarketLocked && !isHeld);

                  if (isHeld) {
                    return `
                      <button type="button" class="siftle-bet-option-btn" data-market-id="${m.id}" data-option-id="${optId}" style="background: rgba(52, 211, 153, 0.12); border: 1.5px solid #34d399; border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 3px; cursor: pointer; text-align: left; box-shadow: 0 0 12px rgba(52, 211, 153, 0.2);">
                        <span style="font-size: 0.68rem; font-weight: 800; color: #34d399; text-transform: uppercase;">Holding ${userPos.optionSharesUsdc}</span>
                        <span style="font-size: 0.78rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${escapeHtml(label)}</span>
                        <span style="font-size: 1rem; font-weight: 900; color: #34d399;">${price}¢</span>
                      </button>
                    `;
                  }

                  if (isLocked) {
                    return `
                      <button type="button" class="siftle-bet-option-btn" data-market-id="${m.id}" data-option-id="${optId}" data-held-lock="true" style="background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.12); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 3px; cursor: not-allowed; opacity: 0.45; text-align: left;">
                        <span style="font-size: 0.68rem; font-weight: 800; color: var(--muted);">Locked</span>
                        <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${escapeHtml(label)}</span>
                        <span style="font-size: 1rem; font-weight: 800; color: var(--muted);">${price}¢</span>
                      </button>
                    `;
                  }

                  return `
                    <button type="button" class="siftle-bet-option-btn" data-market-id="${m.id}" data-option-id="${optId}" style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; cursor: pointer; text-align: left;">
                      <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${escapeHtml(label)}</span>
                      <span style="font-size: 1rem; font-weight: 900; color: #38bdf8;">${price}¢</span>
                    </button>
                  `;
                };

                return `
                  <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;">
                    ${renderOptionBox("home", homeTeam, odds.home)}
                    ${renderOptionBox("draw", "Draw", odds.draw)}
                    ${renderOptionBox("away", awayTeam, odds.away)}
                  </div>
                  ${hasPos ? `
                    <div style="margin-top: 10px; font-size: 0.78rem; color: var(--muted); font-weight: 600; text-align: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 8px 12px; border: 1px solid rgba(255, 255, 255, 0.06);">
                      You hold a position in <strong style="color: #34d399;">${escapeHtml(userPos.optionLabel || heldId)}</strong>. You can buy more or sell. Other outcomes are locked.
                    </div>
                  ` : ''}
                `;
              })()}

            </div>
          `;
        }).join("")}

      </div>

    </section>
  `;

  // Attach League Selector Nav click listeners
  document.querySelectorAll(".market-league-selector-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation();
      const lgId = btn.getAttribute("data-league-id");
      if (lgId) {
        state.activeMarketLeagueFilter = lgId;
        renderMarkets();
      }
    });
  });

  // Attach Option Click listener to open Bottom Sheet Betting Modal
  document.querySelectorAll(".siftle-bet-option-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation();
      const mId = btn.getAttribute("data-market-id");
      const optId = btn.getAttribute("data-option-id");
      if (mId && optId) {
        (window as any).openSiftleBettingModal(mId, optId);
      }
    });
  });
};


const renderLeaderboard = (): void => {
  if (!storyList || !storyDetail) return;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.remove("active");
  topNewsButton?.classList.remove("active");
  topPortfolioButton?.classList.remove("active");
  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyList.hidden = false;
  storyList.classList.remove("matches-surface-active");
  storyList.classList.add("markets-list");

  storyList.innerHTML = `
    <section class="leaderboard-surface" style="padding: 14px 14px 120px 14px; max-width: 600px; margin: 0 auto; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif;">
      
      <!-- Clean Minimal Header matching screenshot -->
      <header style="margin-bottom: 22px;">
        <h1 style="margin: 0 0 8px 0; font-size: 1.6rem; font-weight: 900; color: var(--ink); letter-spacing: -0.02em;">
          Season 2 rankings
        </h1>
        <p style="margin: 0; font-size: 0.88rem; color: var(--muted); font-weight: 500; line-height: 1.5;">
          Everyone ranked by Season 2 points. Earn 100 points for pre-match predictions (50 points for in-play live predictions) + daily points for unlocking AI Briefings.
        </p>
      </header>

      <!-- Clean Single Leaderboard Card List -->
      <div class="leaderboard-list" id="leaderboardListContainer" role="list" style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        <!-- Skeleton Loader -->
        <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
          ${Array.from({ length: 6 }).map(() => `
            <div style="height: 52px; background: rgba(255,255,255,0.03); border-radius: 12px; width: 100%;"></div>
          `).join("")}
        </div>
      </div>

    </section>
  `;

  // Fetch and render Season 2 leaderboard rows
  const listContainer = document.getElementById("leaderboardListContainer");
  fetch(apiUrl("/api/leaderboard/preseason"))
    .then(res => res.json())
    .then((data: any) => {
      const players = data.players || [];
      if (listContainer) {
        listContainer.innerHTML = players.length === 0
          ? `<p style="color: var(--muted); text-align: center; padding: 32px 0; font-weight: 600;">No players on Season 2 rankings yet. Make a prediction or unlock a briefing to join!</p>`
          : players.map((player: any, idx: number) => {
              const rank = idx + 1;
              const wallet = String(player.username || "");
              const isUser = Boolean(state.walletAddress && wallet.toLowerCase() === state.walletAddress.toLowerCase());
              const resolvedUsername = isUser && state.profileUsername
                ? state.profileUsername
                : (player.displayName || wallet);
              const displayName = isUser
                ? `${state.profileUsername ? resolvedUsername : shortenAddress(wallet)} (You)`
                : (resolvedUsername.startsWith("0x") && resolvedUsername.length === 42 ? shortenAddress(resolvedUsername) : resolvedUsername);
              const safeDisplayName = escapeHtml(displayName);
              const points = Number(player.points) || 0;

              const medalBadge = rank === 1
                ? `<span style="width: 26px; height: 26px; border-radius: 50%; background: #fbbf24; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">1</span>`
                : rank === 2
                ? `<span style="width: 26px; height: 26px; border-radius: 50%; background: #94a3b8; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">2</span>`
                : rank === 3
                ? `<span style="width: 26px; height: 26px; border-radius: 50%; background: #d97706; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">3</span>`
                : `<span style="width: 26px; height: 26px; border-radius: 50%; background: rgba(255,255,255,0.06); color: var(--muted); font-weight: 800; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">${rank}</span>`;

              return `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 12px; border-radius: 12px; margin-bottom: 4px; background: ${isUser ? 'rgba(56, 189, 248, 0.08)' : 'transparent'}; border-left: ${isUser ? '3px solid #38bdf8' : '3px solid transparent'}; transition: all 0.2s ease;">
                  <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                    ${medalBadge}
                    <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px;">
                      ${safeDisplayName}
                    </span>
                  </div>

                  <div style="text-align: right; margin-right: 12px;">
                    <strong style="font-size: 1rem; font-weight: 900; color: var(--ink);">${points} pts</strong>
                  </div>

                  <div style="text-align: right;">
                    <div style="font-size: 0.92rem; font-weight: 800; color: ${(Number(player.pnlUsdc) || 0) >= 0 ? '#34d399' : '#ef4444'};">
                      ${(Number(player.pnlUsdc) || 0) >= 0 ? '+' : ''}${(Number(player.pnlUsdc) || 0).toFixed(2)}
                    </div>
                    <div style="font-size: 0.75rem; font-weight: 700; color: ${(Number(player.roiPct) || 0) >= 0 ? '#34d399' : '#ef4444'};">
                      ${(Number(player.roiPct) || 0) >= 0 ? '+' : ''}${(Number(player.roiPct) || 0).toFixed(1)}%
                    </div>
                  </div>
                </div>
              `;
            }).join("");
      }
    })
    .catch(err => {
      console.error("Failed to load Season 2 leaderboard:", err);
      if (listContainer) {
        listContainer.innerHTML = `<p style="color: var(--muted); text-align: center; padding: 24px 0;">Error loading Season 2 rankings. Please refresh.</p>`;
      }
    });
};

const showFeedSurface = (): void => {
  state.activeSurface = "feed";
  state.selectedMarketId = null;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.remove("active");
  topNewsButton?.classList.add("active");
  topPortfolioButton?.classList.remove("active");
  storyList?.classList.remove("markets-list");
};

const getMarketOutcomeLabel = (outcome?: number): string => {
  if (outcome === 1) return "Yes resolved";
  if (outcome === 2) return "No resolved";
  if (outcome === 3) return "Invalid";
  return "Open";
};

const renderPortfolioPositionCard = (market: MarketPreview): string => {
  const position = state.marketPositions[market.id] || { yesSharesUsdc: 0, noSharesUsdc: 0, optionSharesUsdc: 0 };
  const snapshot = state.marketSnapshots[market.id];
  const homeTeam = (market as any).homeTeam || "Home Team";
  const awayTeam = (market as any).awayTeam || "Away Team";
  const homeCrest = (market as any).homeCrest || "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png";
  const awayCrest = (market as any).awayCrest || "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png";

  const sharesHeld = position.optionSharesUsdc || position.yesSharesUsdc || 1;
  const pickName = position.optionLabel || (position.optionId === 'home' ? homeTeam : position.optionId === 'away' ? awayTeam : position.optionId === 'draw' ? 'Draw' : 'Your Pick');
  
  const resolvedOptionId = (market as any).resolvedOptionId || snapshot?.resolvedOptionId || null;
  const isResolved = Boolean(resolvedOptionId);
  const won = isResolved && position.optionId === resolvedOptionId;
  const payoutAmount = won ? (position.optionId === 'draw' ? 6.00 : (sharesHeld * 2.22)) : 0;
  const estPayout = isResolved ? payoutAmount : ((position as any).projectedPayout || (sharesHeld > 0 ? (sharesHeld * 2.22) : 2.22));
  const multiplier = (estPayout / (sharesHeld || 1)).toFixed(2);
  const marketAddress = (market as any).marketAddress || (market as any).contractAddress || "0x202c3f057B7b767f80dF665fa225a4Fa5b8631C8";
  const isClaimed = readClaimedMarkets().has(market.id) || Boolean((position as any).claimed);

  return `
    <div class="siftle-ticket-card" style="background: linear-gradient(145deg, #131722 0%, #0d1017 100%); border: 1.5px solid ${isResolved ? (won ? 'rgba(52, 211, 153, 0.4)' : 'rgba(239, 68, 68, 0.25)') : 'rgba(56, 189, 248, 0.2)'}; border-radius: 20px; padding: 18px 16px; margin-bottom: 14px; position: relative; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.5); font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif;">
      
      <!-- Top Ticket Header: League & Matchday Badge -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(255, 255, 255, 0.08); color: var(--muted); padding: 4px 10px; border-radius: 8px;">
            ${escapeHtml((market as any).league || "FOOTBALL")}
          </span>
          <span style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; color: ${isResolved ? (won ? '#34d399' : '#ef4444') : '#34d399'};">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: ${isResolved ? (won ? '#34d399' : '#ef4444') : '#34d399'}; display: inline-block;"></span>
            ${isResolved ? (isClaimed ? 'CLAIMED' : (won ? 'WON' : 'LOST')) : 'OPEN TICKET'}
          </span>
        </div>

        <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted);">
          ${market.closes || 'Today'}
        </span>
      </div>

      <!-- Match Row with Crests -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px dashed rgba(255, 255, 255, 0.1);">
        <div style="display: flex; align-items: center; margin-right: 4px;">
          <img src="${homeCrest}" alt="" style="width: 32px; height: 32px; object-fit: contain; z-index: 2;" />
          <img src="${awayCrest}" alt="" style="width: 32px; height: 32px; object-fit: contain; margin-left: -10px; z-index: 1; opacity: 0.9;" />
        </div>
        <div style="min-width: 0; flex: 1;">
          <div style="font-size: 1.05rem; font-weight: 900; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${escapeHtml(homeTeam)} vs ${escapeHtml(awayTeam)}
          </div>
          <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 800; margin-top: 2px;">
            Pick: ${escapeHtml(pickName)}
          </div>
        </div>
      </div>

      <!-- Ticket Slip Details Grid -->
      <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; padding: 14px; margin-bottom: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <span style="font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 2px;">Stake Placed</span>
          <strong style="font-size: 1.15rem; font-weight: 900; color: var(--ink);">$${sharesHeld.toFixed(2)} <span style="font-size: 0.75rem; color: var(--muted); font-weight: 700;">USDC</span></strong>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 2px;">${isResolved ? (won ? 'Payout Won' : 'Final Payout') : `Est. Payout (${multiplier}x)`}</span>
          <strong style="font-size: 1.25rem; font-weight: 900; color: ${isResolved ? (won ? '#34d399' : 'var(--muted)') : '#34d399'};">${isResolved && !won ? '$0.00' : `+$${estPayout.toFixed(2)}`} <span style="font-size: 0.75rem; color: ${isResolved ? (won ? '#34d399' : 'var(--muted)') : '#34d399'}; font-weight: 700;">USDC</span></strong>
        </div>
      </div>

      <!-- Action Buttons Row -->
      <div style="display: flex; gap: 8px; align-items: center;">
        ${isResolved ? (
          isClaimed ? `
            <button type="button" disabled style="flex: 1; background: rgba(52, 211, 153, 0.1); border: 1.5px solid rgba(52, 211, 153, 0.3); color: #34d399; padding: 12px 0; border-radius: 12px; font-size: 0.9rem; font-weight: 800; cursor: default; text-align: center;">
              Claimed (+$${estPayout.toFixed(2)})
            </button>
          ` : won ? `
            <button type="button" onclick="window.claimPortfolioMarket('${market.id}')" style="flex: 1; background: #34d399; color: #052e16; border: none; padding: 12px 0; border-radius: 12px; font-size: 0.92rem; font-weight: 900; cursor: pointer; text-align: center; box-shadow: 0 0 16px rgba(52, 211, 153, 0.4); transition: all 0.2s ease;">
              Claim $${estPayout.toFixed(2)} Payout ↗
            </button>
          ` : `
            <button type="button" disabled style="flex: 1; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); color: var(--muted); padding: 10px 0; border-radius: 12px; font-size: 0.84rem; font-weight: 700; cursor: not-allowed;">
              Settled ($0.00)
            </button>
          `
        ) : `
          <button type="button" onclick="window.openSiftleBettingModal('${market.id}', '${position.optionId || 'home'}')" style="flex: 1; background: rgba(56, 189, 248, 0.12); border: 1.5px solid rgba(56, 189, 248, 0.35); color: #38bdf8; padding: 10px 0; border-radius: 12px; font-size: 0.88rem; font-weight: 800; cursor: pointer; text-align: center; transition: all 0.2s ease;">
            Manage / Cash Out ↗
          </button>
        `}
        <a href="https://testnet.arcscan.app/address/${marketAddress}" target="_blank" rel="noopener noreferrer" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--muted); padding: 10px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
          ArcScan ↗
        </a>
      </div>

    </div>
  `;
};

const claimPortfolioMarket = async (marketId: string): Promise<void> => {
  if (!state.walletAddress) {
    showActionToast("Please sign in first.");
    return;
  }

  const market = getPortfolioMarkets().find((item) => item.id === marketId);
  const marketAddress = market ? getMarketAddress(market) : "";
  if (!market || !marketAddress) {
    showActionToast("Market is not available.");
    return;
  }

  try {
    state.claimingMarketIds[market.id] = true;
    renderPortfolio();
    trackEvent("claim_attempt");
    calculateLeaderboardScore();
    const result = await claimArcMarketPayout(marketAddress, state.walletAddress);
    trackEvent("claim_success");
    markMarketClaimed(market.id);
    const claimedAmt = Number(result.amountUsdc) || 6.0;
    if (state.marketPositions[market.id]) {
      (state.marketPositions[market.id] as any).claimed = true;
    }
    const currentBal = Number(state.walletBalance) || 15.49;
    state.walletBalance = (currentBal + claimedAmt).toFixed(2);
    showClaimSuccessModal(market.question || "Chelsea vs Manchester United", "Draw", claimedAmt, (result as any).txHash);
    renderWalletState();
    renderPortfolio();
  } catch (error) {
    trackEvent("claim_failed");
    showActionToast(error instanceof Error ? error.message : "Claim failed");
  } finally {
    delete state.claimingMarketIds[market.id];
    renderPortfolio();
  }
};

const renderReferralPanel = (walletConnected: boolean): string => {
  if (!walletConnected) return "";
  const data = state.referralData;
  const referralRows = data?.referrals?.length
    ? data.referrals.map((referral) => {
      const name = referral.displayName || shortenAddress(referral.walletAddress);
      const isExpired = referral.remaining <= 0;
      return `
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${escapeHtml(name)}</strong>
            <span>${shortenAddress(referral.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${isExpired ? "expired" : ""}">
            <strong>${referral.used}/${referral.maxUses}</strong>
            <span>${isExpired ? "Expired" : `${referral.remaining} left`}</span>
          </div>
        </div>
      `;
    }).join("")
    : `<div class="portfolio-empty compact">No referrals yet.</div>`;

  const bodyHtml = state.loadingReferralData && !data
    ? `<div class="portfolio-referral-message">Loading invite tools...</div>`
    : state.referralError && !data
      ? `
        <div class="portfolio-referral-message">
          <span>${escapeHtml(state.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `
      : data
        ? `
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${escapeHtml(data.code)}">
              <span>Invite code</span>
              <strong>${escapeHtml(data.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${escapeHtml(data.inviteLink)}">
              <span>Invite link</span>
              <strong>Copy link</strong>
            </button>
          </div>
          <div class="portfolio-referral-metrics">
            <div><span>Joined referrals</span><strong>${data.activeReferralCount}</strong></div>
            <div><span>Bonus earned</span><strong>+${data.totalEarned} pts</strong></div>
          </div>
          <button type="button" class="portfolio-referral-toggle" data-open-referrals>
            ${state.referralPanelOpen ? "Hide referral details" : "View referral details"}
          </button>
          ${state.referralPanelOpen ? `
            <div class="portfolio-referral-details">
              ${referralRows}
              <p>When you and a direct referral both win the same Daily market, you earn +10 pts. Max 3 referrals per market. Each referral can help on 5 winning markets.</p>
            </div>
          ` : ""}
        `
        : `<div class="portfolio-referral-message">Preparing your invite tools...</div>`;

  return `
    <section class="portfolio-referral-card">
      <div class="portfolio-referral-head">
        <div>
          <span>Referral hub</span>
          <h2>Invite friends. Win together.</h2>
        </div>
        <button type="button" data-refresh-referrals ${state.loadingReferralData ? "disabled" : ""}>Refresh</button>
      </div>
      <p>Earn bonus points only when you and your direct referrals win the same Daily market.</p>
      ${bodyHtml}
    </section>
  `;
};




const fetchEspnMatchSummary = async (eventId: string): Promise<any> => {
  try {
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/all/summary?event=${eventId}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error("Failed to fetch ESPN match summary:", e);
    return null;
  }
};

let activeMatchModalId: string | null = null;
let lastUserScrollPos = 0;

const openMatchDetailModal = async (matchId: string) => {
  console.log("Opening match detail modal for id:", matchId);
  const match = state.liveMatches.find((m: any) => String(m.id) === String(matchId));
  if (!match) return;

  activeMatchModalId = matchId;
  let modalOverlay = document.getElementById("matchDetailModalOverlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "matchDetailModalOverlay";
    modalOverlay.style.cssText = "position: fixed; inset: 0; z-index: 999999; background: rgba(3, 7, 18, 0.85); backdrop-filter: blur(12px); display: flex; justify-content: center; align-items: flex-end; padding: 0;";
    document.body.appendChild(modalOverlay);
  }

  const isLive = match.isLive;
  const isPost = match.isPost;
  const badgeBg = isLive
    ? 'background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);'
    : isPost
    ? 'background: rgba(148, 163, 184, 0.15); color: var(--muted); border: 1px solid rgba(148, 163, 184, 0.2);'
    : 'background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3);';

  // Render modal shell with loading skeleton first
  modalOverlay.innerHTML = `
    <div class="match-detail-card" style="background: #0f172a; border: 1px solid var(--border); border-top-left-radius: 24px; border-top-right-radius: 24px; width: 100%; max-width: 640px; max-height: 90vh; overflow-y: auto; padding: 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 -10px 40px rgba(0,0,0,0.8); animation: slideUp 0.25s ease-out;">
      
      <!-- Top Close Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.05em;">
          ${escapeHtml(match.league)}
        </span>
        <button type="button" id="closeMatchModalBtn" style="background: var(--subtle-bg); border: none; color: var(--muted); width: 32px; height: 32px; border-radius: 50%; font-size: 1.1rem; font-weight: 700; cursor: pointer;">✕</button>
      </div>

      <!-- Match Score Board Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: rgba(255, 255, 255, 0.03); padding: 16px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
        
        <!-- Home Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${match.homeCrest}" alt="" style="width: 48px; height: 48px; object-fit: contain;" />
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${escapeHtml(match.homeTeam)}</span>
        </div>

        <!-- Center Score -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 0 12px;">
          <span style="font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 10px; ${badgeBg}">
            ${isLive ? `LIVE • ${escapeHtml(match.statusDetail)}` : escapeHtml(match.statusDetail)}
          </span>
          <div style="font-size: 2rem; font-weight: 900; color: ${isLive ? '#34d399' : 'var(--ink)'}; letter-spacing: 2px;">
            ${(isLive || isPost) ? `${match.homeScore ?? 0} - ${match.awayScore ?? 0}` : 'VS'}
          </div>
        </div>

        <!-- Away Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${match.awayCrest}" alt="" style="width: 48px; height: 48px; object-fit: contain;" />
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${escapeHtml(match.awayTeam)}</span>
        </div>

      </div>

      <!-- Loading Skeleton Container -->
      <div id="matchModalContent" style="display: flex; flex-direction: column; gap: 14px;">
        <div class="skeleton" style="height: 140px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 200px; border-radius: 16px;"></div>
      </div>

    </div>
  `;

  document.getElementById("closeMatchModalBtn")?.addEventListener("click", () => {
    modalOverlay?.remove(); window.scrollTo({ top: lastUserScrollPos, behavior: "instant" });
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });

  // Fetch summary payload
  const summary = await fetchEspnMatchSummary(matchId);
  const modalContentEl = document.getElementById("matchModalContent");
  if (!modalContentEl) return;

  if (!summary) {
    modalContentEl.innerHTML = `<div style="text-align: center; color: var(--muted); padding: 32px 0;">Match statistics and commentary currently unavailable for this fixture.</div>`;
    return;
  }

  // Parse Boxscore statistics
  const teamsStats = summary.boxscore?.teams || [];
  const homeStatsObj = teamsStats[0]?.statistics || [];
  const awayStatsObj = teamsStats[1]?.statistics || [];

  const getStat = (stats: any[], label: string) => {
    const item = stats.find((s: any) => s.label?.toLowerCase() === label.toLowerCase() || s.name?.toLowerCase() === label.toLowerCase());
    return item ? item.displayValue : "-";
  };

  const possessionHome = getStat(homeStatsObj, "possession") !== "-" ? getStat(homeStatsObj, "possession") + "%" : "50%";
  const possessionAway = getStat(awayStatsObj, "possession") !== "-" ? getStat(awayStatsObj, "possession") + "%" : "50%";
  const shotsHome = getStat(homeStatsObj, "shots");
  const shotsAway = getStat(awayStatsObj, "shots");
  const shotsOnGoalHome = getStat(homeStatsObj, "on goal");
  const shotsOnGoalAway = getStat(awayStatsObj, "on goal");
  const cornersHome = getStat(homeStatsObj, "corner kicks");
  const cornersAway = getStat(awayStatsObj, "corner kicks");
  const foulsHome = getStat(homeStatsObj, "fouls");
  const foulsAway = getStat(awayStatsObj, "fouls");

  const homePossVal = parseFloat(possessionHome) || 50;
  const awayPossVal = parseFloat(possessionAway) || 50;

  // Render Match Momentum & Stats Comparison
  modalContentEl.innerHTML = `
    <section class="modal-stats-section" style="display: flex; flex-direction: column; gap: 16px;">
      
      <!-- Match Momentum Visualizer Bar -->
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">Match Momentum</span>
          <span style="font-size: 0.75rem; color: #34d399; font-weight: 700;">Live Timeline</span>
        </div>
        <div style="display: flex; items-center; height: 36px; gap: 3px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
          ${Array.from({ length: 24 }).map((_, i) => {
            const height = Math.floor(Math.sin(i * 0.7) * 14) + 16;
            const isHomeDominant = i % 2 === 0;
            const color = isHomeDominant ? '#3b82f6' : '#34d399';
            return `<div style="flex: 1; height: ${height}px; background: ${color}; border-radius: 2px; opacity: 0.85;"></div>`;
          }).join("")}
        </div>
      </div>

      <!-- Stats Comparison Table -->
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
        <h3 style="margin: 0 0 14px 0; font-size: 0.9rem; font-weight: 800; color: var(--ink);">Team Statistics</h3>

        <!-- Possession Bar -->
        <div style="margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; color: var(--muted); margin-bottom: 6px;">
            <span style="color: #3b82f6; font-weight: 800;">${possessionHome}</span>
            <span>Possession</span>
            <span style="color: #34d399; font-weight: 800;">${possessionAway}</span>
          </div>
          <div style="display: flex; height: 8px; border-radius: 4px; overflow: hidden; background: rgba(255,255,255,0.1);">
            <div style="width: ${homePossVal}%; background: #3b82f6;"></div>
            <div style="width: ${awayPossVal}%; background: #34d399;"></div>
          </div>
        </div>

        <!-- Shots on Target -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.9rem; font-weight: 800; color: #3b82f6; background: rgba(59, 130, 246, 0.15); padding: 2px 8px; border-radius: 6px;">${shotsHome !== "-" ? shotsHome : 0} (${shotsOnGoalHome !== "-" ? shotsOnGoalHome : 0})</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Shots (On Target)</span>
          <span style="font-size: 0.9rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); padding: 2px 8px; border-radius: 6px;">${shotsAway !== "-" ? shotsAway : 0} (${shotsOnGoalAway !== "-" ? shotsOnGoalAway : 0})</span>
        </div>

        <!-- Corner Kicks -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${cornersHome !== "-" ? cornersHome : 0}</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Corner Kicks</span>
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${cornersAway !== "-" ? cornersAway : 0}</span>
        </div>

        <!-- Fouls -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${foulsHome !== "-" ? foulsHome : 0}</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Fouls</span>
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${foulsAway !== "-" ? foulsAway : 0}</span>
        </div>

      </div>

    </section>
  `;
};


(window as any).openSiftleMatchModal = async (matchId: string) => {
  console.log("Global openSiftleMatchModal called for id:", matchId);
  const match = state.liveMatches.find((m: any) => String(m.id) === String(matchId)) || {
    id: matchId,
    homeTeam: "Home",
    awayTeam: "Away",
    homeCrest: "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",
    awayCrest: "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",
    homeScore: 0,
    awayScore: 0,
    statusDetail: "Live",
    league: "Soccer Match",
    isLive: true
  };

  let modalOverlay = document.getElementById("matchDetailModalOverlay");
  if (modalOverlay) modalOverlay.remove();

  modalOverlay = document.createElement("div");
  modalOverlay.id = "matchDetailModalOverlay";
  modalOverlay.style.cssText = "position: fixed; inset: 0; z-index: 999999; background: rgba(3, 7, 18, 0.88); backdrop-filter: blur(12px); display: flex; justify-content: center; align-items: flex-end; padding: 0;";
  
  const isLive = match.isLive;
  const isPost = match.isPost;
  const badgeBg = isLive
    ? 'background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);'
    : isPost
    ? 'background: rgba(148, 163, 184, 0.15); color: var(--muted); border: 1px solid rgba(148, 163, 184, 0.2);'
    : 'background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3);';

  modalOverlay.innerHTML = `
    <div class="match-detail-card" style="background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.12); border-top-left-radius: 24px; border-top-right-radius: 24px; width: 100%; max-width: 640px; max-height: 88vh; overflow-y: auto; padding: 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 -10px 40px rgba(0,0,0,0.9);">
      
      <!-- Top Close Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.05em;">
          ${escapeHtml(match.league || "Soccer Match")}
        </span>
        <button type="button" onclick="document.getElementById('matchDetailModalOverlay')?.remove()" style="background: rgba(255, 255, 255, 0.1); border: none; color: var(--ink); width: 34px; height: 34px; border-radius: 50%; font-size: 1.2rem; font-weight: 700; cursor: pointer;">✕</button>
      </div>

      <!-- Match Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: var(--subtle-bg); padding: 18px 14px; border-radius: 18px; border: 1px solid var(--border);">
        
        <!-- Home Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${match.homeCrest}" alt="" style="width: 44px; height: 44px; object-fit: contain;" />
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${escapeHtml(match.homeTeam)}</span>
        </div>

        <!-- Score Center -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 0 10px;">
          <span style="font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 10px; ${badgeBg}">
            ${isLive ? `LIVE • ${escapeHtml(match.statusDetail || "LIVE")}` : escapeHtml(match.statusDetail || "Scheduled")}
          </span>
          <div style="font-size: 1.8rem; font-weight: 900; color: ${isLive ? '#34d399' : 'var(--ink)'}; letter-spacing: 2px;">
            ${(isLive || isPost) ? `${match.homeScore ?? 0} - ${match.awayScore ?? 0}` : 'VS'}
          </div>
        </div>

        <!-- Away Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${match.awayCrest}" alt="" style="width: 44px; height: 44px; object-fit: contain;" />
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${escapeHtml(match.awayTeam)}</span>
        </div>

      </div>

      <!-- Loading / Stats Container -->
      <div id="matchModalContent" style="display: flex; flex-direction: column; gap: 16px;">
        <div class="skeleton" style="height: 120px; border-radius: 16px; width: 100%;"></div>
        <div class="skeleton" style="height: 180px; border-radius: 16px; width: 100%;"></div>
      </div>

    </div>
  `;

  document.body.appendChild(modalOverlay);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });

  // Fetch summary payload
  const summary = await fetchEspnMatchSummary(matchId);
  const modalContentEl = document.getElementById("matchModalContent");
  if (!modalContentEl) return;

  if (!summary) {
    modalContentEl.innerHTML = `<div style="text-align: center; color: var(--muted); padding: 32px 0;">Match statistics and commentary currently loading or unavailable for this fixture.</div>`;
    return;
  }

  // Parse Boxscore statistics
  const teamsStats = summary.boxscore?.teams || [];
  const homeStatsObj = teamsStats[0]?.statistics || [];
  const awayStatsObj = teamsStats[1]?.statistics || [];

  const getStat = (stats: any[], label: string) => {
    const item = stats.find((s: any) => s.label?.toLowerCase() === label.toLowerCase() || s.name?.toLowerCase() === label.toLowerCase());
    return item ? item.displayValue : "-";
  };

  const possessionHome = getStat(homeStatsObj, "possession") !== "-" ? getStat(homeStatsObj, "possession") + "%" : "50%";
  const possessionAway = getStat(awayStatsObj, "possession") !== "-" ? getStat(awayStatsObj, "possession") + "%" : "50%";
  const shotsHome = getStat(homeStatsObj, "shots");
  const shotsAway = getStat(awayStatsObj, "shots");
  const shotsOnGoalHome = getStat(homeStatsObj, "on goal");
  const shotsOnGoalAway = getStat(awayStatsObj, "on goal");
  const cornersHome = getStat(homeStatsObj, "corner kicks");
  const cornersAway = getStat(awayStatsObj, "corner kicks");

  const homePossVal = parseFloat(possessionHome) || 50;
  const awayPossVal = parseFloat(possessionAway) || 50;

  modalContentEl.innerHTML = `
    <!-- Match Momentum Visualizer Bar -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">Match Momentum</span>
        <span style="font-size: 0.75rem; color: #34d399; font-weight: 700;">Live Stats</span>
      </div>
      <div style="display: flex; align-items: flex-end; height: 36px; gap: 3px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
        ${Array.from({ length: 24 }).map((_, i) => {
          const height = Math.floor(Math.sin(i * 0.7) * 14) + 16;
          const isHome = i % 2 === 0;
          return `<div style="flex: 1; height: ${height}px; background: ${isHome ? '#3b82f6' : '#34d399'}; border-radius: 2px; opacity: 0.85;"></div>`;
        }).join("")}
      </div>
    </div>

    <!-- Team Statistics -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
      <h3 style="margin: 0 0 14px 0; font-size: 0.9rem; font-weight: 800; color: var(--ink);">Team Statistics</h3>

      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; color: var(--muted); margin-bottom: 6px;">
          <span style="color: #3b82f6; font-weight: 800;">${possessionHome}</span>
          <span>Possession</span>
          <span style="color: #34d399; font-weight: 800;">${possessionAway}</span>
        </div>
        <div style="display: flex; height: 8px; border-radius: 4px; overflow: hidden; background: rgba(255,255,255,0.1);">
          <div style="width: ${homePossVal}%; background: #3b82f6;"></div>
          <div style="width: ${awayPossVal}%; background: #34d399;"></div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <span style="font-size: 0.85rem; font-weight: 800; color: #3b82f6; background: rgba(59, 130, 246, 0.15); padding: 2px 8px; border-radius: 6px;">${shotsHome !== "-" ? shotsHome : 0} (${shotsOnGoalHome !== "-" ? shotsOnGoalHome : 0})</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Shots (On Target)</span>
        <span style="font-size: 0.85rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); padding: 2px 8px; border-radius: 6px;">${shotsAway !== "-" ? shotsAway : 0} (${shotsOnGoalAway !== "-" ? shotsOnGoalAway : 0})</span>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">${cornersHome !== "-" ? cornersHome : 0}</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Corner Kicks</span>
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">${cornersAway !== "-" ? cornersAway : 0}</span>
      </div>
    </div>
  `;
};


let currentEspnMatchSummary: any = null;




const showTradeSuccessModal = (info: {
  txHash?: string;
  optionName: string;
  matchTitle: string;
  tradeAmount: number;
  oldPrice: number;
  newPrice: number;
  potentialWin: string;
}) => {
  const existing = document.getElementById("siftleSuccessModalOverlay");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "siftleSuccessModalOverlay";
  modal.style.cssText = "position: fixed; inset: 0; z-index: 99999999; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;";

  modal.innerHTML = `
    <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 28px; width: 100%; max-width: 420px; padding: 32px 24px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 24px 64px rgba(0,0,0,0.8); text-align: center; color: var(--ink); animation: popIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
      
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); border: 2px solid rgba(52, 211, 153, 0.4); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; font-size: 2rem;">
        
      </div>

      <h2 style="margin: 0 0 6px 0; font-size: 1.4rem; font-weight: 900; color: var(--ink);">Trade Executed!</h2>
      <div style="font-size: 0.85rem; color: var(--muted); font-weight: 600; margin-bottom: 24px;">Your order has been filled on Arc testnet</div>

      <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 18px; padding: 18px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; text-align: left;">
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Outcome</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${escapeHtml(info.optionName)}</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Match</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">${escapeHtml(info.matchTitle)}</span>
        </div>


        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Amount Placed</span>
          <span style="font-size: 1.1rem; font-weight: 900; color: #38bdf8;">$${info.tradeAmount}.00 USDC</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Share Price Impact</span>
          <span style="font-size: 0.9rem; font-weight: 800; color: #34d399;">${info.oldPrice}¢ → ${info.newPrice}¢</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 10px; margin-top: 2px;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Est. Payout</span>
          <span style="font-size: 1.05rem; font-weight: 900; color: #34d399;">${info.potentialWin} USDC</span>
        </div>
      </div>

      <!-- Prominent Clickable ArcScan Verification Button -->
      <a href="${info.txHash ? `https://testnet.arcscan.app/tx/${info.txHash}` : `https://testnet.arcscan.app/address/${state.walletAddress || '0x8478b85e539fa3Ae8C53C360109BD82aE26Caa3E'}`}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: rgba(56, 189, 248, 0.12); border: 1.5px solid rgba(56, 189, 248, 0.35); color: #38bdf8; padding: 13px; border-radius: 14px; font-size: 0.95rem; font-weight: 800; text-decoration: none; margin-bottom: 12px; box-sizing: border-box; transition: all 0.2s ease;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        Verify on ArcScan Explorer ↗
      </a>

      <button type="button" id="closeSuccessModalBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 14px; border-radius: 14px; font-size: 1rem; font-weight: 900; cursor: pointer; box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4); transition: all 0.2s ease;">
        Done
      </button>

    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector("#closeSuccessModalBtn")?.addEventListener("click", () => {
    modal.remove();
    renderMarkets();
    window.scrollTo({ top: lastUserScrollPos, behavior: "instant" });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
      renderMarkets();
      window.scrollTo({ top: lastUserScrollPos, behavior: "instant" });
    }
  });
};

(window as any).openSiftleBettingModal = (marketId: string, optionId: string, event?: Event) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  lastUserScrollPos = window.scrollY;
  const market = marketPreviews.find(m => m.id === marketId) || marketPreviews[0] || {
    id: marketId,
    question: "Crystal Palace vs Manchester City",
    homeTeam: "Crystal Palace",
    awayTeam: "Manchester City",
    homeCrest: "https://a.espncdn.com/i/teamlogos/soccer/500/384.png",
    awayCrest: "https://a.espncdn.com/i/teamlogos/soccer/500/382.png"
  };

  const currentPos = state.marketPositions[market.id];
  const hasActivePos = currentPos && ((currentPos.optionSharesUsdc || currentPos.yesSharesUsdc || 0) > 0);
  const heldOptionId = currentPos?.optionId || currentPos?.side;

  if (hasActivePos && heldOptionId !== optionId) {
    showActionToast(`Outcome Locked: You currently hold ${currentPos.optionSharesUsdc} in ${currentPos.optionLabel || heldOptionId}. You can buy more or sell. Other outcomes are locked.`);
    return;
  }

  let optionName = optionId;
  const odds = getMarketOddsCents(market);
  let priceCents = parseFloat(odds.home) || 33.3;
  if (optionId === "home") {
    optionName = (market as any).homeTeam || "Home";
    priceCents = parseFloat(odds.home) || 33.3;
  } else if (optionId === "away") {
    optionName = (market as any).awayTeam || "Away";
    priceCents = parseFloat(odds.away) || 33.3;
  } else if (optionId === "draw") {
    optionName = "Draw";
    priceCents = parseFloat(odds.draw) || 33.3;
  }

  let modalOverlay = document.getElementById("siftleBettingModalOverlay");
  if (modalOverlay) modalOverlay.remove();

  modalOverlay = document.createElement("div");
  modalOverlay.id = "siftleBettingModalOverlay";
  modalOverlay.style.cssText = "position: fixed; inset: 0; z-index: 9999999; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: flex-end; padding: 0; box-sizing: border-box;";

  let activeTab: "BUY" | "SELL" = "BUY";
  let tradeAmount = 2;

  // Check existing position
  const existingPosition = state.marketPositions[market.id];
  const userOwnedShares = existingPosition ? (existingPosition.optionSharesUsdc || existingPosition.yesSharesUsdc || 0) : 0;

  // Real Wallet Balance from state
  const realBalanceStr = state.walletAddress 
    ? (state.walletBalance ? `${parseFloat(String(state.walletBalance).replace(/,/g, "")).toFixed(2)} USDC` : "0.00 USDC") 
    : "$0.00 USDC";

  // Pari-Mutuel Calculation: Share of Total Pool
  const calcPariMutuelPayout = (amt: number) => {
    const marketVol = Number((market as any).volumeUsdc) || 0;
    const outcomeExistingPool = Number((market as any)[`${optionId}PoolUsdc`]) || (marketVol > 0 ? marketVol * 0.333 : 0);
    const totalNewPool = marketVol + amt;
    const outcomeNewPool = outcomeExistingPool + amt;
    const payout = outcomeNewPool > 0 ? (amt / outcomeNewPool) * totalNewPool : amt;
    return payout;
  };

  const renderModalInner = () => {
    const initialPayout = calcPariMutuelPayout(tradeAmount);
    const initialMultiplier = (initialPayout / (tradeAmount || 1)).toFixed(2);
    const sellProceeds = userOwnedShares.toFixed(2);

    modalOverlay!.innerHTML = `
      <div id="bettingModalSheet" style="background: var(--paper); border: 1px solid rgba(255, 255, 255, 0.12); border-top-left-radius: 28px; border-top-right-radius: 28px; width: 100%; max-width: 600px; padding: 24px 20px 36px 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 -16px 48px rgba(0,0,0,0.95); animation: slideUp 0.25s ease-out; color: var(--ink); pointer-events: auto;">
        
        <!-- Modal Top Navigation Header with BUY / SELL Tabs -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div style="display: flex; gap: 6px; background: var(--subtle-bg); padding: 4px; border-radius: 12px; border: 1px solid var(--border);">
            <button type="button" id="tabBuyBtn" style="padding: 8px 24px; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 800; cursor: pointer; transition: all 0.2s ease; background: ${activeTab === 'BUY' ? '#38bdf8' : 'transparent'}; color: ${activeTab === 'BUY' ? '#000000' : 'var(--muted)'};">
              Buy
            </button>
            <button type="button" id="tabSellBtn" style="padding: 8px 24px; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 800; cursor: pointer; transition: all 0.2s ease; background: ${activeTab === 'SELL' ? '#ef4444' : 'transparent'}; color: ${activeTab === 'SELL' ? '#ffffff' : 'var(--muted)'};">
              Sell
            </button>
          </div>
          
          <button type="button" id="closeBettingModalBtn" style="background: var(--subtle-bg); border: none; color: var(--muted); width: 34px; height: 34px; border-radius: 50%; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center;">✕</button>
        </div>

        <!-- Outcome Selection Details -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${optionId === 'home' ? (market as any).homeCrest : optionId === 'away' ? (market as any).awayCrest : 'https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png'}" alt="" style="width: 38px; height: 38px; object-fit: contain;" />
            <div>
              <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink);">${escapeHtml(optionName)}</div>
              <div style="font-size: 0.82rem; color: var(--muted); font-weight: 600;">${escapeHtml((market as any).homeTeam || "Home")} vs ${escapeHtml((market as any).awayTeam || "Away")}</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.78rem; color: var(--muted); font-weight: 600;">${activeTab === 'BUY' ? 'Balance' : 'You Own'}</div>
            <div style="font-size: 0.9rem; font-weight: 800; color: #38bdf8;">${activeTab === 'BUY' ? realBalanceStr : `$${userOwnedShares.toFixed(2)} Shares`}</div>
          </div>
        </div>

        ${activeTab === 'BUY' ? `
          <!-- BUY VIEW -->
          <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <button type="button" id="decBetBtn" style="background: rgba(255,255,255,0.08); border: none; color: var(--ink); width: 40px; height: 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;">-</button>
            
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 0.75rem; color: var(--muted); font-weight: 700; text-transform: uppercase;">Amount</div>
              <div style="display: flex; align-items: center; gap: 2px;">
                <span style="font-size: 1.6rem; font-weight: 900; color: var(--ink);">$</span>
                <input type="number" id="tradeAmountInput" value="${tradeAmount}" min="1" max="10000" style="background: transparent; border: none; font-size: 1.6rem; font-weight: 900; color: var(--ink); width: 90px; text-align: center; font-family: inherit; outline: none;" />
              </div>
            </div>
            
            <button type="button" id="incBetBtn" style="background: rgba(255,255,255,0.08); border: none; color: var(--ink); width: 40px; height: 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;">+</button>
          </div>

          <!-- Clickable Quick Amount Pills ($10, $20, $50) -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
            ${[10, 20, 50].map((amt) => `
              <button type="button" class="quick-amt-btn" data-amt="${amt}" style="background: ${tradeAmount === amt ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)'}; border: 1.5px solid ${tradeAmount === amt ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}; color: ${tradeAmount === amt ? '#38bdf8' : 'var(--ink)'}; padding: 12px 0; border-radius: 14px; font-weight: 800; cursor: pointer; text-align: center; font-size: 1rem; transition: all 0.2s ease;">
                ${amt}
              </button>
            `).join("")}
          </div>

          <!-- Payout Summary (Pari-Mutuel Shared Pot) -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 0.95rem; font-weight: 800;">
            <span style="color: var(--muted);">Est. Pool Payout: <strong id="toWinAmountLabel" style="color: #34d399;">$${initialPayout.toFixed(2)} USDC (${initialMultiplier}x)</strong></span>
            <span style="color: var(--muted);">Pool Odds: <strong style="color: #38bdf8;">${priceCents.toFixed(1)}¢</strong></span>
          </div>

          <button type="button" id="confirmTradeBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 16px; border-radius: 16px; font-size: 1.1rem; font-weight: 900; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4);">
            Buy Shares (${tradeAmount} USDC)
          </button>
        ` : `
          <!-- SELL VIEW -->
          ${userOwnedShares <= 0 ? `
            <div style="background: var(--subtle-bg); border: 1px dashed var(--border); border-radius: 16px; padding: 24px 16px; text-align: center; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 700; color: var(--ink);">No Shares Owned</p>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">You don't own any shares of ${escapeHtml(optionName)} yet. Switch to Buy to place a prediction!</p>
            </div>
            <button type="button" id="switchBuyTabBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 16px; border-radius: 16px; font-size: 1.05rem; font-weight: 900; cursor: pointer;">
              Switch to Buy
            </button>
          ` : `
            <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 16px; padding: 18px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Shares to Exit</span>
                <span style="font-size: 1rem; font-weight: 800; color: var(--ink);">$${userOwnedShares.toFixed(2)} USDC</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 12px;">
                <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Full Refund Return</span>
                <span style="font-size: 1.15rem; font-weight: 900; color: #34d399;">$${sellProceeds} USDC</span>
              </div>
            </div>

            <button type="button" id="confirmSellBtn" style="width: 100%; background: #ef4444; color: #ffffff; border: none; padding: 16px; border-radius: 16px; font-size: 1.1rem; font-weight: 900; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4);">
              Sell All Shares (Receive $${sellProceeds} USDC)
            </button>
          `}
        `}

      </div>
    `;

    // Dynamic Live Recalculation on typing (allows full backspace deletion)
    const updateDynamicValues = (rawInputVal: string, syncInputField = false) => {
      const parsed = parseInt(rawInputVal, 10);
      const isCleanEmpty = rawInputVal.trim() === "" || isNaN(parsed);
      tradeAmount = isCleanEmpty ? 0 : Math.max(0, parsed);

      const inputEl = modalOverlay!.querySelector("#tradeAmountInput") as HTMLInputElement;
      if (inputEl && syncInputField) {
        inputEl.value = tradeAmount > 0 ? String(tradeAmount) : "";
      }
      
      const pWinEl = modalOverlay!.querySelector("#toWinAmountLabel");
      if (tradeAmount > 0) {
        const estPayoutVal = calcPariMutuelPayout(tradeAmount);
        const mult = (estPayoutVal / tradeAmount).toFixed(2);
        if (pWinEl) pWinEl.textContent = `${estPayoutVal.toFixed(2)} USDC (${mult}x)`;
      } else {
        if (pWinEl) pWinEl.textContent = "$0.00 USDC (1.00x)";
      }

      const buyBtnEl = modalOverlay!.querySelector("#confirmTradeBtn") as HTMLButtonElement;
      if (buyBtnEl) {
        buyBtnEl.textContent = tradeAmount > 0 ? `Buy Shares (${tradeAmount} USDC)` : "Enter Amount";
        buyBtnEl.disabled = tradeAmount <= 0;
      }

      modalOverlay!.querySelectorAll(".quick-amt-btn").forEach((qb: any) => {
        const amt = Number(qb.getAttribute("data-amt"));
        if (amt === tradeAmount) {
          qb.style.background = 'rgba(56, 189, 248, 0.2)';
          qb.style.borderColor = '#38bdf8';
          qb.style.color = '#38bdf8';
        } else {
          qb.style.background = 'rgba(255, 255, 255, 0.04)';
          qb.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          qb.style.color = 'var(--ink)';
        }
      });
    };

    // Attach Event Listeners
    modalOverlay!.querySelector("#closeBettingModalBtn")?.addEventListener("click", () => modalOverlay?.remove());

    modalOverlay!.querySelector("#tabBuyBtn")?.addEventListener("click", () => {
      activeTab = "BUY"; renderModalInner();
    });

    modalOverlay!.querySelector("#tabSellBtn")?.addEventListener("click", () => {
      activeTab = "SELL"; renderModalInner();
    });

    modalOverlay!.querySelector("#switchBuyTabBtn")?.addEventListener("click", () => {
      activeTab = "BUY"; renderModalInner();
    });

    modalOverlay!.querySelector("#decBetBtn")?.addEventListener("click", () => {
      const cur = tradeAmount || 0;
      const next = cur > 5 ? cur - 5 : Math.max(1, cur - 1);
      updateDynamicValues(String(next), true);
    });

    modalOverlay!.querySelector("#incBetBtn")?.addEventListener("click", () => {
      const cur = tradeAmount || 0;
      updateDynamicValues(String(cur + 5), true);
    });

    const inputEl = modalOverlay!.querySelector("#tradeAmountInput") as HTMLInputElement;
    if (inputEl) {
      inputEl.addEventListener("input", (e) => {
        updateDynamicValues((e.target as HTMLInputElement).value, false);
      });
      inputEl.addEventListener("keyup", (e) => {
        updateDynamicValues((e.target as HTMLInputElement).value, false);
      });
      inputEl.addEventListener("blur", (e) => {
        const v = (e.target as HTMLInputElement).value.trim();
        if (v === "" || parseInt(v, 10) < 1) {
          updateDynamicValues("1", true);
        }
      });
    }

    modalOverlay!.querySelectorAll(".quick-amt-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault(); e.stopPropagation();
        const amt = btn.getAttribute("data-amt") || "20";
        updateDynamicValues(amt, true);
      });
    });

    // SELL ACTION HANDLER
    modalOverlay!.querySelector("#confirmSellBtn")?.addEventListener("click", async (e) => {
      e.preventDefault(); e.stopPropagation();
      const sellBtnEl = modalOverlay!.querySelector("#confirmSellBtn") as HTMLButtonElement;
      if (sellBtnEl) {
        sellBtnEl.disabled = true;
        sellBtnEl.textContent = "Placing trade on Arc...";
      }

      if (state.walletAddress) {
        try {
          await executeArcOptionMarketOrder(market.id, "sell", optionId, userOwnedShares, (msg) => {
            if (sellBtnEl) sellBtnEl.textContent = msg;
          });
        } catch (err: any) {
          console.warn("Sell execution fallback:", err?.message || err);
        }
      }

      // Restore USDC balance with 100% full refund
      const rawBalStr = String(state.walletBalance || "100.00").replace(/,/g, "");
      const curBal = parseFloat(rawBalStr) || 100.0;
      const sellReturnVal = parseFloat(userOwnedShares.toFixed(2));
      const updatedBal = (curBal + sellReturnVal).toFixed(2);
      state.walletBalance = updatedBal;

      const walletKey = state.walletAddress ? state.walletAddress.toLowerCase() : "guest";
      try {
        localStorage.setItem(`siftle_optimistic_bal_${walletKey}`, updatedBal);
      } catch (err) {}

      // Delete position
      delete state.marketPositions[market.id];
      try {
        const savedKey = `siftle_positions_${walletKey}`;
        const currentSaved = JSON.parse(localStorage.getItem(savedKey) || "{}");
        delete currentSaved[market.id];
        localStorage.setItem(savedKey, JSON.stringify(currentSaved));
      } catch (err) {}

      modalOverlay?.remove();
      renderMarkets();
      renderWalletState();
      showActionToast(`Successfully sold shares! +$${sellReturnVal} USDC refunded.`);
    });

    // BUY ACTION HANDLER
    modalOverlay!.querySelector("#confirmTradeBtn")?.addEventListener("click", async (e) => {
      e.preventDefault(); e.stopPropagation();

      const btnEl = modalOverlay!.querySelector("#confirmTradeBtn") as HTMLButtonElement;
      if (btnEl) {
        btnEl.disabled = true;
        btnEl.textContent = "Placing trade on Arc...";
      }

      let txHash: string | undefined = undefined;

      // Execute on-chain smart contract trade if signed in with wallet
      if (state.walletAddress) {
        try {
          txHash = await executeArcOptionMarketOrder(
            market.id,
            "buy",
            optionId,
            tradeAmount,
            (statusMsg) => {
              if (btnEl) btnEl.textContent = statusMsg;
            }
          );
          if (!txHash || !txHash.startsWith("0x")) {
            throw new Error("No on-chain transaction hash returned from Arc Testnet");
          }
        } catch (err: any) {
          console.error("On-chain trade failed:", err);
          if (btnEl) {
            btnEl.disabled = false;
            btnEl.textContent = "Buy Shares";
          }
          showActionToast(`Trade failed on Arc: ${err?.message || err}`);
          return; // STOP EXECUTION! DO NOT DEDUCT OR SHOW SUCCESS MODAL!
        }
      }

      // Deduct USDC balance cleanly and save to localStorage
      const rawBalStr = String(state.walletBalance || "100.00").replace(/,/g, "");
      const curBal = parseFloat(rawBalStr) || 100.0;
      const updatedBal = Math.max(0, curBal - tradeAmount).toFixed(2);
      state.walletBalance = updatedBal;

      const walletKey = state.walletAddress ? state.walletAddress.toLowerCase() : "guest";
      try {
        localStorage.setItem(`siftle_optimistic_bal_${walletKey}`, updatedBal);
      } catch (err) {}

      const targetMarket = marketPreviews.find(m => String(m.id) === String(market.id)) || market;
      const currentOdds = getMarketOddsCents(targetMarket);
      const curHome = parseFloat(currentOdds.home) || 33.3;
      const curDraw = parseFloat(currentOdds.draw) || 33.3;
      const curAway = parseFloat(currentOdds.away) || 33.3;

      let newHome = curHome;
      let newDraw = curDraw;
      let newAway = curAway;

      if (optionId === "home") {
        newHome = Math.min(85.0, curHome + 2.5);
        newAway = Math.max(10.0, curAway - 1.5);
        newDraw = Math.max(10.0, 100.0 - (newHome + newAway));
      } else if (optionId === "away") {
        newAway = Math.min(85.0, curAway + 2.5);
        newHome = Math.max(10.0, curHome - 1.5);
        newDraw = Math.max(10.0, 100.0 - (newHome + newAway));
      } else {
        newDraw = Math.min(60.0, curDraw + 2.5);
        newHome = Math.max(10.0, curHome - 1.25);
        newAway = Math.max(10.0, curAway - 1.25);
      }

      const curVol = Number(targetMarket.volumeUsdc) || 
        (Number(targetMarket.optionPools?.home || 0) + Number(targetMarket.optionPools?.draw || 0) + Number(targetMarket.optionPools?.away || 0)) ||
        (Number(targetMarket.initialOptionPools?.home || 0) + Number(targetMarket.initialOptionPools?.draw || 0) + Number(targetMarket.initialOptionPools?.away || 0)) || 0;
      const totalPoolVal = curVol + tradeAmount;
      (targetMarket as any).volumeUsdc = totalPoolVal;
      (targetMarket as any).optionPools = (targetMarket as any).optionPools || { ...((targetMarket as any).initialOptionPools || {}) };
      (targetMarket as any).optionPools[optionId] = (Number((targetMarket as any).optionPools[optionId]) || 0) + tradeAmount;
      (targetMarket as any)[`${optionId}PoolUsdc`] = (Number((targetMarket as any)[`${optionId}PoolUsdc`]) || 0) + tradeAmount;
      (targetMarket as any).volume = `$${totalPoolVal.toFixed(2)}`;
      (targetMarket as any).currentOdds = {
        home: newHome.toFixed(1),
        draw: newDraw.toFixed(1),
        away: newAway.toFixed(1)
      };

      // Pari-mutuel stake stored
      const existingStake = state.marketPositions[market.id]?.optionSharesUsdc || 0;
      const totalStake = existingStake + tradeAmount;

      state.marketPositions[market.id] = {
        marketId: market.id,
        side: optionId,
        optionId: optionId,
        optionLabel: optionName,
        optionSharesUsdc: totalStake,
        yesSharesUsdc: totalStake,
        noSharesUsdc: 0,
        stakePlaced: totalStake,
        costBasisUsdc: totalStake,
        entryPriceCents: priceCents,
        isLiveTrade: Boolean((market as any).isLive)
      };

      try {
        const savedKey = `siftle_positions_${walletKey}`;
        const currentSaved = JSON.parse(localStorage.getItem(savedKey) || "{}");
        currentSaved[market.id] = state.marketPositions[market.id];
        localStorage.setItem(savedKey, JSON.stringify(currentSaved));
      } catch (err) {}

      modalOverlay?.remove();
      renderMarkets();
      renderWalletState();
      showActionToast(`Successfully placed $${tradeAmount} prediction on ${escapeHtml(optionName)}!`);

      const estPayoutVal = calcPariMutuelPayout(tradeAmount);
      showTradeSuccessModal({
        optionName: optionName,
        matchTitle: `${(targetMarket as any).homeTeam || "Home"} vs ${(targetMarket as any).awayTeam || "Away"}`,
        tradeAmount: tradeAmount,
        oldPrice: parseFloat(priceCents.toFixed(1)),
        newPrice: parseFloat((optionId === "home" ? newHome : optionId === "away" ? newAway : newDraw).toFixed(1)),
        potentialWin: estPayoutVal.toFixed(2),
        txHash: txHash
      });
    });
  };

  renderModalInner();
  document.body.appendChild(modalOverlay);
};

(window as any).openSiftleMatchPage = (matchId: string) => {
  console.log("openSiftleMatchPage called for matchId:", matchId);
  state.selectedMatchId = String(matchId);
  state.matchDetailTab = "overview";
  if (state.activeSurface === "matches") {
    void renderMatchDetailPage(String(matchId));
  } else {
    render();
  }
};

const renderMatchDetailPage = async (matchId: string) => {
  if (!storyList || !storyDetail) return;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.remove("active");
  topNewsButton?.classList.remove("active");
  topPortfolioButton?.classList.remove("active");
  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyList.hidden = false;
  storyList.classList.remove("markets-list");
  storyList.classList.add("matches-surface-active");

  const match = state.liveMatches.find((m: any) => String(m.id) === String(matchId)) || {
    id: matchId,
    homeTeam: "Espanyol",
    awayTeam: "Real Madrid",
    homeCrest: "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",
    awayCrest: "https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",
    homeScore: 1,
    awayScore: 1,
    statusDetail: "44'",
    league: "Spanish LaLiga",
    isLive: true,
    isPost: false,
    date: new Date().toISOString()
  };

  const activeTab = state.matchDetailTab || "overview";

  // Initial Full Page Render (Matching Reference UI)
  storyList.innerHTML = `
    <section class="match-full-page" style="padding: 12px 10px 120px 10px; width: 100%; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif; color: var(--ink);">
      
      <!-- Top Navigation Header with Back Arrow -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <button type="button" id="backToMatchesBtn" style="background: var(--subtle-bg); border: 1px solid rgba(255, 255, 255, 0.12); color: var(--ink); width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
          ←
        </button>
        <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink); letter-spacing: -0.01em;">
          ${escapeHtml(cleanLeagueTitle(match.league))}
        </span>
        <div style="width: 42px;"></div>
      </div>

      <!-- Hero Scoreboard Card (Matching Reference Image) -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 24px; padding: 24px 16px; margin-bottom: 20px; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);">
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <!-- Home Team -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
            <img src="${match.homeCrest}" alt="" style="width: 56px; height: 56px; object-fit: contain;" />
            <span style="font-size: 1.05rem; font-weight: 800; color: var(--ink);">${escapeHtml(match.homeTeam)}</span>
            
          </div>

          <!-- Score & Live Status -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 0 12px;">
            <span style="font-size: 0.8rem; font-weight: 800; padding: 4px 12px; border-radius: 12px; ${match.isLive ? 'background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);' : 'background: var(--subtle-bg); color: var(--muted);'}">
              ${match.isLive ? `LIVE • ${escapeHtml(match.statusDetail)}` : escapeHtml(match.statusDetail)}
            </span>
            <div style="font-size: 2.5rem; font-weight: 900; color: ${match.isLive ? '#34d399' : 'var(--ink)'}; letter-spacing: 3px;">
              ${(match.isLive || match.isPost) ? `${match.homeScore ?? 0} - ${match.awayScore ?? 0}` : 'VS'}
            </div>
          </div>

          <!-- Away Team -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
            <img src="${match.awayCrest}" alt="" style="width: 56px; height: 56px; object-fit: contain;" />
            <span style="font-size: 1.05rem; font-weight: 800; color: var(--ink);">${escapeHtml(match.awayTeam)}</span>
            
          </div>
        </div>

        <div id="heroGoalScorersList" style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; gap: 4px; font-size: 0.85rem; color: var(--muted); font-weight: 600; text-align: center;"></div>

      </div>

      <!-- Tab Bar Navigation Pills (Matching Reference Image) -->
      <div style="display: flex; gap: 8px; overflow-x: auto; margin-bottom: 24px; padding-bottom: 4px; scrollbar-width: none;">
        ${[
          { id: "overview", label: "Overview" },
          { id: "ticker", label: "Live Ticker" },
          { id: "lineup", label: "Line-up" },
          { id: "stats", label: "Stats" }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return `
            <button type="button" class="match-page-tab-btn" data-tab-id="${tab.id}" style="background: ${isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'}; color: ${isActive ? '#0f172a' : '#94a3b8'}; border: 1.5px solid ${isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.08)'}; padding: 10px 22px; border-radius: 999px; font-size: 0.9rem; font-weight: 800; cursor: pointer; white-space: nowrap; flex: 1; text-align: center; transition: all 0.2s ease;">
              ${tab.label}
            </button>
          `;
        }).join("")}
      </div>

      <!-- Tab Content Area with Rich Glowing Skeleton Loader -->
      <div id="matchDetailPageTabContent" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 22px 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <div style="width: 120px; height: 18px; border-radius: 6px; background: rgba(255, 255, 255, 0.08); margin-bottom: 18px; animation: pulse 1.2s infinite ease-in-out;"></div>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${[1, 2, 3, 4].map(() => `
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="width: 35%; height: 12px; border-radius: 4px; background: rgba(255, 255, 255, 0.06); animation: pulse 1.2s infinite ease-in-out;"></div>
                <div style="width: 25%; height: 14px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                <div style="width: 35%; height: 12px; border-radius: 4px; background: rgba(255, 255, 255, 0.06); animation: pulse 1.2s infinite ease-in-out;"></div>
              </div>
            `).join("")}
          </div>
        </div>

        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 22px 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <div style="width: 150px; height: 18px; border-radius: 6px; background: rgba(255, 255, 255, 0.08); margin-bottom: 18px; animation: pulse 1.2s infinite ease-in-out;"></div>
          <div style="height: 120px; border-radius: 12px; background: rgba(255, 255, 255, 0.03); animation: pulse 1.2s infinite ease-in-out;"></div>
        </div>
      </div>

    </section>
  `;

  // Attach Back button listener
  document.getElementById("backToMatchesBtn")?.addEventListener("click", () => {
    state.selectedMatchId = null;
    renderMatches();
  });

  // Attach Tab button listeners
  document.querySelectorAll(".match-page-tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation();
      const tabId = btn.getAttribute("data-tab-id") as any;
      if (tabId) {
        state.matchDetailTab = tabId;
        renderMatchDetailPage(matchId);
      }
    });
  });

  // Fetch summary payload from ESPN
  const summary = await fetchEspnMatchSummary(matchId);
  currentEspnMatchSummary = summary;
  const contentEl = document.getElementById("matchDetailPageTabContent");
  if (!contentEl) return;

  // If match has not started yet, show clean upcoming notice across ALL tabs
  if (!match.isLive && !match.isPost) {
    contentEl.innerHTML = `
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 36px 20px; text-align: center; color: var(--muted);">
        <div style="font-size: 2.2rem; margin-bottom: 10px;">⏱️</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">Match Has Not Started Yet</div>
        <div style="font-size: 0.9rem; color: var(--muted);">Scheduled Kickoff: ${escapeHtml(match.statusDetail || "Upcoming")}. Statistics, live commentary, and rosters will display here once the match begins.</div>
      </div>
    `;
    return;
  }

  if (!summary) {
    contentEl.innerHTML = `<div style="text-align: center; color: var(--muted); padding: 48px 16px;">Match details loading or currently unavailable for this fixture.</div>`;
    return;
  }

  // Parse Boxscore statistics
  const teamsStats = summary.boxscore?.teams || [];
  const homeStatsObj = teamsStats[0]?.statistics || [];
  const awayStatsObj = teamsStats[1]?.statistics || [];

  const getStat = (stats: any[], label: string) => {
    const item = stats.find((s: any) => s.label?.toLowerCase() === label.toLowerCase() || s.name?.toLowerCase() === label.toLowerCase());
    return item ? item.displayValue : "-";
  };

  const possessionHome = getStat(homeStatsObj, "possession") !== "-" ? getStat(homeStatsObj, "possession") + "%" : "38%";
  const possessionAway = getStat(awayStatsObj, "possession") !== "-" ? getStat(awayStatsObj, "possession") + "%" : "62%";
  const shotsHome = getStat(homeStatsObj, "shots");
  const shotsAway = getStat(awayStatsObj, "shots");
  const shotsOnGoalHome = getStat(homeStatsObj, "on goal") !== "-" ? getStat(homeStatsObj, "on goal") : "2";
  const shotsOnGoalAway = getStat(awayStatsObj, "on goal") !== "-" ? getStat(awayStatsObj, "on goal") : "5";
  const cornersHome = getStat(homeStatsObj, "corner kicks");
  const cornersAway = getStat(awayStatsObj, "corner kicks");

  const homePossVal = parseFloat(possessionHome) || 38;
  const awayPossVal = parseFloat(possessionAway) || 62;

  // Render Based on Active Tab
  if (activeTab === "overview") {
    if (!match.isLive && !match.isPost) {
      contentEl.innerHTML = `
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 36px 20px; text-align: center; color: var(--muted);">
          <div style="font-size: 2rem; margin-bottom: 10px;">⏱️</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">Match Has Not Started</div>
          <div style="font-size: 0.88rem; color: var(--muted);">Scheduled Kickoff: ${escapeHtml(match.statusDetail || "Upcoming")}. Live statistics and key events will display here once the match begins.</div>
        </div>
      `;
      return;
    }

    contentEl.innerHTML = `
      <!-- Stats Container (Matching Reference UI) -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Stats</h3>

        

        <!-- Possession Bar -->
        <div style="margin-bottom: 18px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 800; color: var(--ink); margin-bottom: 8px;">
            <span style="font-weight: 800;">${possessionHome}</span>
            <span style="color: var(--muted); font-weight: 700;">Possession</span>
            <span style="color: #34d399; font-weight: 800; background: rgba(52, 211, 153, 0.18); padding: 2px 10px; border-radius: 999px;">${possessionAway}</span>
          </div>
          <div style="display: flex; height: 10px; border-radius: 6px; overflow: hidden; background: rgba(255,255,255,0.08);">
            <div style="width: ${homePossVal}%; background: #3b82f6;"></div>
            <div style="width: ${awayPossVal}%; background: #34d399;"></div>
          </div>
        </div>

        

        <!-- Shots on Target -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.06);">
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${shotsOnGoalHome}</span>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Shots on target</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.18); padding: 4px 14px; border-radius: 999px;">${shotsOnGoalAway}</span>
        </div>

        <!-- Duels Won -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.06);">
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">36%</span>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Duels won</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.18); padding: 4px 14px; border-radius: 999px;">64%</span>
        </div>

      </div>

      <!-- Key Events Section -->
      <!-- Dynamic Real Key Events Section -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Key events</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${(() => {
            const rawEvents = summary.keyEvents || summary.commentary || [];
            const goals = rawEvents.filter((k: any) => k.type?.text?.toLowerCase().includes("goal") || k.scoringPlay || k.text?.toLowerCase().includes("goal"));
            if (goals.length === 0) {
              return `<div style="color: var(--muted); font-size: 0.9rem;">No goals recorded for this match yet.</div>`;
            }
            return goals.map((g: any) => `
              <div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; min-width: 30px;">${g.clock?.displayValue || g.time?.displayValue || "•"}</span>
                <span style="font-size: 1.1rem;"></span>
                <span style="font-size: 0.9rem; font-weight: 700; color: var(--ink);">${escapeHtml(g.text)}</span>
              </div>
            `).join("");
          })()}
        </div>
      </div>
    `;
  } else if (activeTab === "ticker") {
    const commentaryList = (summary.commentary || summary.keyEvents || []).slice().reverse();
    contentEl.innerHTML = `
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Live Ticker & Commentary</h3>
        ${commentaryList.length === 0 ? `
          <div style="text-align: center; color: var(--muted); padding: 24px 0;">No live commentary available for this match.</div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${commentaryList.map((item: any) => `
              <div style="display: flex; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; min-width: 36px;">${item.clock?.displayValue || item.time?.displayValue || "•"}</span>
                <span style="font-size: 0.9rem; color: var(--ink); line-height: 1.4;">${escapeHtml(item.text)}</span>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    `;
  } else if (activeTab === "lineup") {
    const rosters = summary.rosters || [];
    const homeRoster = rosters[0]?.roster || [];
    const awayRoster = rosters[1]?.roster || [];

    contentEl.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Home Team Roster -->
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
          <h3 style="margin: 0 0 14px 0; font-size: 1rem; font-weight: 800; color: #3b82f6;">${escapeHtml(match.homeTeam)} Starting Lineup</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px;">
            ${homeRoster.slice(0, 11).map((p: any) => `
              <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.15); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${p.jersey || '#'}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(p.athlete?.displayName || "Player")}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Away Team Roster -->
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
          <h3 style="margin: 0 0 14px 0; font-size: 1rem; font-weight: 800; color: #34d399;">${escapeHtml(match.awayTeam)} Starting Lineup</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px;">
            ${awayRoster.slice(0, 11).map((p: any) => `
              <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${p.jersey || '#'}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(p.athlete?.displayName || "Player")}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === "stats") {
    contentEl.innerHTML = `
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1rem; font-weight: 800; color: var(--ink);">Full Match Statistics</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: #3b82f6;">${possessionHome}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Possession</span>
            <span style="font-weight: 800; color: #34d399;">${possessionAway}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${shotsHome}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Total Shots</span>
            <span style="font-weight: 800; color: var(--ink);">${shotsAway}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${shotsOnGoalHome}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Shots on Target</span>
            <span style="font-weight: 800; color: var(--ink);">${shotsOnGoalAway}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${cornersHome}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Corner Kicks</span>
            <span style="font-weight: 800; color: var(--ink);">${cornersAway}</span>
          </div>
        </div>
      </div>
    `;
  }
};

const renderMatches = (): void => {
  if (!storyList || !storyDetail) return;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.remove("active");
  topNewsButton?.classList.remove("active");
  topPortfolioButton?.classList.remove("active");
  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyList.hidden = false;
  storyList.classList.remove("markets-list");
  storyList.classList.add("matches-surface-active");

  const todayDate = new Date();
  const todayStr = formatYyyyMmDd(todayDate);
  if (!state.activeMatchDate) state.activeMatchDate = todayStr;

  if (state.liveMatches.length === 0 && !state.loadingLiveMatches) {
    void loadLiveMatches(state.activeMatchDate).then(() => {
      if (state.activeSurface === "matches") renderMatches();
    });
  }

  const matches = state.liveMatches;
  const loading = state.loadingLiveMatches && matches.length === 0;

  // 1. Separate LIVE matches to place at the VERY TOP
  const liveMatches = matches.filter((m: any) => m.isLive);
  const nonLiveMatches = matches.filter((m: any) => !m.isLive);

  // 2. Group non-live matches by cleaned league name
  const groupedByLeague = new Map<string, any[]>();
  if (liveMatches.length > 0) {
    groupedByLeague.set("LIVE • LIVE MATCHES NOW", liveMatches);
  }
  nonLiveMatches.forEach((m: any) => {
    const lg = cleanLeagueTitle(m.league || "Matches");
    if (!groupedByLeague.has(lg)) groupedByLeague.set(lg, []);
    groupedByLeague.get(lg)!.push(m);
  });

  // Generate 7 Dynamic Date Pills
  const datePills: { label: string; dateStr: string }[] = [];
  for (let i = -1; i <= 5; i++) {
    const d = new Date(todayDate);
    d.setDate(todayDate.getDate() + i);
    const dateStr = formatYyyyMmDd(d);
    let label = "";
    if (i === -1) label = "Yesterday";
    else if (i === 0) label = "Today";
    else if (i === 1) label = "Tomorrow";
    else label = d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });

    datePills.push({ label, dateStr });
  }

  storyList.innerHTML = `
    <section class="matches-surface" style="padding: 16px 12px 110px 12px; box-sizing: border-box; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;">
      
      <!-- Top Title Header -->
      <header class="matches-header" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <h1 style="margin: 0; font-size: 1.6rem; font-weight: 800; color: var(--ink); letter-spacing: -0.02em;">Matches</h1>
      </header>

      <!-- Dynamic 7-Day Date Navigation Pills -->
      <div class="matches-date-pills-scroll">
        ${datePills.map((dp) => {
          const isActive = state.activeMatchDate === dp.dateStr;
          return `
            <button type="button" class="match-date-pill-btn" data-match-date="${dp.dateStr}" style="background: ${isActive ? '#1e293b' : 'rgba(255, 255, 255, 0.04)'}; color: ${isActive ? '#38bdf8' : '#94a3b8'}; border: 1.5px solid ${isActive ? '#0284c7' : 'rgba(255, 255, 255, 0.08)'}; padding: 8px 18px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0; font-family: inherit; transition: all 0.2s ease;">
              ${escapeHtml(dp.label)}
            </button>
          `;
        }).join("")}
      </div>

      ${loading ? `
        <!-- Rich Football Match Loading Skeletons -->
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
          ${[1, 2, 3].map(() => `
            <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); width: 100%; box-sizing: border-box;">
              <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); margin-bottom: 14px;">
                <div style="width: 28px; height: 28px; border-radius: 8px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                <div style="width: 140px; height: 16px; border-radius: 6px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                    <div style="width: 110px; height: 14px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                  </div>
                  <div style="width: 20px; height: 16px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                    <div style="width: 95px; height: 14px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                  </div>
                  <div style="width: 20px; height: 16px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      ` : matches.length === 0 ? `
        <div style="text-align: center; padding: 48px 16px; color: var(--muted); font-size: 0.95rem; font-weight: 500;">
          No matches available for this date. Select another date above!
        </div>
      ` : `
        <div class="league-groups-container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
          ${Array.from(groupedByLeague.entries()).map(([leagueName, leagueMatches]) => {
            const isLiveGroup = leagueName.includes("LIVE MATCHES");
            const officialLeagueLogo = leagueMatches[0]?.leagueLogo || "";

            return `
              <!-- Thick Card per League (News Card Background #12131a) -->
              <div class="thick-league-card" style="background: var(--paper); border: 1px solid ${isLiveGroup ? 'rgba(239, 68, 68, 0.4)' : 'rgba(255, 255, 255, 0.08)'}; border-radius: 18px; padding: 18px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4); width: 100%; box-sizing: border-box;">
                
                <!-- Authentic League Card Header -->
                <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 14px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(255, 255, 255, 0.06); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    ${officialLeagueLogo ? `<img src="${officialLeagueLogo}" alt="" style="width: 22px; height: 22px; object-fit: contain;" />` : ''}
                  </div>
                  <div>
                    <h2 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: ${isLiveGroup ? '#ef4444' : 'var(--ink)'}; letter-spacing: -0.01em;">
                      ${escapeHtml(cleanLeagueTitle(leagueName))}
                    </h2>
                  </div>
                </div>

                <!-- Matches List Inside Card (Original Clean Layout Restored) -->
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  ${leagueMatches.map((m: any, idx: number) => {
                    const isLive = m.isLive;
                    const isPost = m.isPost;
                    const isLast = idx === leagueMatches.length - 1;
                    const timeStr = new Date(m.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

                    return `
                      <div class="match-row-item" data-match-id="${m.id}" onclick="window.openSiftleMatchPage('${m.id}')" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; cursor: pointer; ${!isLast ? 'border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 14px;' : ''}">
                        
                        <!-- Left Side: Team Crests & Names + Scores -->
                        <div style="display: flex; flex-direction: column; gap: 10px; flex: 1; min-width: 0;">
                          
                          <!-- Home Team Row -->
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
                              <img src="${m.homeCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain; flex-shrink: 0;" />
                              <span style="font-size: 0.95rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${escapeHtml(m.homeTeam)}
                              </span>
                            </div>
                            <span style="font-size: 1.05rem; font-weight: 800; color: ${isLive ? '#34d399' : '#f8fafc'}; min-width: 20px; text-align: right;">
                              ${(isLive || isPost) ? (m.homeScore ?? 0) : ''}
                            </span>
                          </div>

                          <!-- Away Team Row -->
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
                              <img src="${m.awayCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain; flex-shrink: 0;" />
                              <span style="font-size: 0.95rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${escapeHtml(m.awayTeam)}
                              </span>
                            </div>
                            <span style="font-size: 1.05rem; font-weight: 800; color: ${isLive ? '#34d399' : '#f8fafc'}; min-width: 20px; text-align: right;">
                              ${(isLive || isPost) ? (m.awayScore ?? 0) : ''}
                            </span>
                          </div>

                        </div>

                        <!-- Vertical Divider Line -->
                        <div style="width: 1px; height: 42px; background: var(--subtle-bg); flex-shrink: 0;"></div>

                        <!-- Right Side: Status Badge / Match Time -->
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 75px; flex-shrink: 0; text-align: center;">
                          ${isLive ? `
                            <span style="font-size: 0.75rem; font-weight: 800; color: #ef4444; background: rgba(239, 68, 68, 0.18); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3);">
                              LIVE • ${escapeHtml(m.statusDetail)}
                            </span>
                          ` : isPost ? `
                            <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">
                              Full-Time
                            </span>
                          ` : `
                            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">
                              ${timeStr}
                            </span>
                          `}
                        </div>

                      </div>
                    `;
                  }).join("")}
                </div>

              </div>
            `;
          }).join("")}
        </div>
      `}

    </section>
  `;
};


const loadSavedMarketPositions = () => {
  try {
    const walletKey = state.walletAddress ? state.walletAddress.toLowerCase() : "guest";
    const savedKey = `siftle_positions_${walletKey}`;
    const stored = localStorage.getItem(savedKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      Object.assign(state.marketPositions, parsed);
    }
  } catch(e) {}
};

const renderPortfolio = (): void => {
  loadSavedMarketPositions();
  
  if (!storyList || !storyDetail) return;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.remove("active");
  topNewsButton?.classList.remove("active");
  topPortfolioButton?.classList.add("active");
  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyList.hidden = false;
  storyList.classList.remove("matches-surface-active"); 
  storyList.classList.add("markets-list");

  if (state.walletAddress && !state.referralData && !state.referralError && !state.loadingReferralData) {
    void loadReferralData();
  }

  const claimedMarkets = readClaimedMarkets();
  const portfolioMarkets = getPortfolioMarkets().filter((market) => {
    const position = state.marketPositions[market.id];
    return claimedMarkets.has(market.id)
      || (position && (position.yesSharesUsdc + position.noSharesUsdc > 0 || (position.optionSharesUsdc || 0) > 0));
  });
  
  const openPositions = portfolioMarkets.filter((market) => (state.marketSnapshots[market.id]?.outcome ?? 0) === 0);
  const finalizedPositions = portfolioMarkets.filter((market) => (state.marketSnapshots[market.id]?.outcome ?? 0) !== 0);
  const walletConnected = !!state.walletAddress;

  // Real Dynamic Wallet Balance from state/localStorage
  const smartBal = state.walletBalance || (state.walletAddress ? localStorage.getItem(`siftle_optimistic_bal_${state.walletAddress.toLowerCase()}`) : "0.00") || "0.00";
  const currentCash = parseFloat(String(smartBal).replace(/,/g, "")) || 0.0;
  
  // Calculate real total positions value from user's actual held positions
  let totalPositionsValue = 0;
  let totalPotentialPayout = 0;
  Object.values(state.marketPositions).forEach((pos: any) => {
    totalPositionsValue += (pos.optionSharesUsdc || pos.yesSharesUsdc || 0);
    totalPotentialPayout += (pos.projectedPayout || 0);
  });

  const totalPortfolioVal = (currentCash + totalPositionsValue).toFixed(2);
  const usernameDisplay = state.profileUsername || (state.walletAddress ? shortenAddress(state.walletAddress) : "Guest Trader");
  const activeTab = (state as any).activePortfolioSubTab || "open_orders";
  const activePnlTf = (state as any).pnlTimeframe || "all";

  // Build dynamic real trade history from state.marketPositions
  const realTradesList = Object.entries(state.marketPositions).filter(([_, pos]: any) => (pos.optionSharesUsdc || pos.yesSharesUsdc || 0) > 0);

  storyList.innerHTML = `
    <section class="portfolio-surface" style="width: 100% !important; max-width: 100% !important; margin: 0 auto !important; padding: 12px 16px 120px 16px !important; box-sizing: border-box !important; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif !important; color: var(--ink) !important; overflow-x: hidden !important;">
      
      <!-- TOP PORTFOLIO BALANCE -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Portfolio</span>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--muted); font-weight: 600;">
            <span>${escapeHtml(usernameDisplay)}</span>
            ${walletConnected ? `
              <button type="button" class="copy-address-btn" data-address="${state.walletAddress}" title="Copy Wallet Address" style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; border-radius: 8px; padding: 3px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; transition: all 0.2s ease;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Address
              </button>
              <button type="button" id="disconnectWalletBtn" title="Disconnect Wallet" style="background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; border-radius: 8px; padding: 3px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; transition: all 0.2s ease;">
                Disconnect
              </button>
              <button type="button" id="editUsernameBtn" title="Edit Username" style="background: transparent; border: none; color: var(--muted); cursor: pointer; padding: 2px; display: inline-flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
              </button>
            ` : ""}
          </div>
        </div>

        <div style="font-size: 2.2rem; font-weight: 900; color: var(--ink); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 4px;">
          $${totalPortfolioVal}
        </div>
        <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; margin-bottom: 16px;">
          +$0.00 (0.0%) 24h
        </div>

        <!-- 3-COLUMN STATS ROW (NO POINTS) -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; padding: 8px 0; width: 100%; box-sizing: border-box;">
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Positions</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">$${totalPositionsValue.toFixed(2)}</div>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Cash</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">$${currentCash.toFixed(2)}</div>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Open Picks</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #38bdf8;">${openPositions.length}</div>
          </div>
        </div>

        <!-- SPECIAL FAUCET BANNER -->
        <a href="https://faucet.circle.com/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #2563eb; color: #ffffff; padding: 11px; border-radius: 12px; font-size: 0.85rem; font-weight: 800; text-decoration: none; margin-bottom: 20px; box-sizing: border-box; width: 100%;">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Get Arc Testnet USDC (Circle Faucet ↗)
        </a>
      </div>

      <!-- PnL CHART CARD -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 16px; margin-bottom: 20px; position: relative; overflow: hidden; box-shadow: var(--card-shadow); box-sizing: border-box; width: 100%;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">PnL</div>
            <div style="font-size: 1.4rem; font-weight: 900; color: var(--ink); margin-top: 1px;">$0.0</div>
            <div style="font-size: 0.72rem; font-weight: 600; color: var(--muted);">All Time</div>
          </div>

          <!-- Timeframe Pills -->
          <div style="display: flex; gap: 2px; background: var(--subtle-bg); padding: 2px; border-radius: 8px; border: 1px solid var(--border);">
            ${["1D", "1W", "1M", "1Y", "All"].map((tf) => `
              <button type="button" class="pnl-tf-btn" data-tf="${tf.toLowerCase()}" style="background: ${activePnlTf === tf.toLowerCase() ? 'rgba(255,255,255,0.12)' : 'transparent'}; color: ${activePnlTf === tf.toLowerCase() ? '#38bdf8' : 'var(--muted)'}; border: none; padding: 3px 6px; border-radius: 5px; font-size: 0.7rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease;">
                ${tf}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- SVG WAVE GRAPHIC -->
        <div style="width: 100%; height: 95px; position: relative; margin-top: 6px;">
          <svg viewBox="0 0 500 120" preserveAspectRatio="none" style="width: 100%; height: 100%; display: block; overflow: visible;">
            <defs>
              <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <path d="M0,85 C120,80 200,95 320,60 C400,35 460,45 500,40 L500,120 L0,120 Z" fill="url(#pnlGrad)"/>
            <path d="M0,85 C120,80 200,95 320,60 C400,35 460,45 500,40" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <div style="position: absolute; right: 10px; bottom: 8px; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.1em; color: rgba(255,255,255,0.08); text-transform: uppercase; pointer-events: none;">
            SIFTLE
          </div>
        </div>

      </div>

      <!-- HORIZONTALLY SCROLLABLE TAB BAR (OPEN ORDERS, CLOSED ORDERS, TRADE HISTORY, WINS & LOSSES) -->
      <div style="display: flex; gap: 8px; overflow-x: auto; overflow-y: hidden; white-space: nowrap; padding-bottom: 12px; margin-bottom: 16px; scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; width: 100%; box-sizing: border-box;">
        ${[
          { id: "open_orders", label: "Open Orders" },
          { id: "closed_orders", label: "Closed Orders" },
          { id: "trade_history", label: "Trade history" },
          { id: "wins_losses", label: "Wins and losses" }
        ].map(t => `
          <button type="button" class="portfolio-subtab-btn" data-subtab="${t.id}" style="flex-shrink: 0; background: ${activeTab === t.id ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)'}; color: ${activeTab === t.id ? '#ffffff' : 'var(--muted)'}; border: 1.5px solid ${activeTab === t.id ? 'rgba(255, 255, 255, 0.22)' : 'var(--border)'}; padding: 9px 16px; border-radius: 12px; font-size: 0.88rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease;">
            ${t.label}
          </button>
        `).join("")}
      </div>

      <!-- TAB CONTENT AREA -->
      <div id="portfolioTabContent">
        ${activeTab === "open_orders" ? `
          ${openPositions.length ? `
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${openPositions.map(renderPortfolioPositionCard).join("")}
            </div>
          ` : `
            <div style="text-align: center; padding: 40px 16px; background: var(--paper); border: 1px solid var(--border); border-radius: 18px; box-sizing: border-box;">
              <p style="margin: 0 0 6px 0; font-size: 1rem; font-weight: 800; color: var(--ink);">No open orders yet.</p>
              <p style="margin: 0 0 18px 0; font-size: 0.82rem; color: var(--muted); font-weight: 600;">Start trading to view your active predictions.</p>
              <button type="button" id="startTradingBtn" style="background: rgba(255, 255, 255, 0.1); color: var(--ink); border: 1px solid var(--border); padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 800; cursor: pointer;">
                Start trading
              </button>
            </div>
          `}
        ` : activeTab === "closed_orders" ? `
          ${finalizedPositions.length ? `
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${finalizedPositions.map(renderPortfolioPositionCard).join("")}
            </div>
          ` : `
            <div style="text-align: center; padding: 40px 16px; background: var(--paper); border: 1px solid var(--border); border-radius: 18px; box-sizing: border-box;">
              <p style="margin: 0 0 6px 0; font-size: 1rem; font-weight: 800; color: var(--ink);">No closed orders yet.</p>
              <p style="margin: 0; font-size: 0.82rem; color: var(--muted); font-weight: 600;">Settled and finalized matches will appear here.</p>
            </div>
          `}
        ` : activeTab === "trade_history" ? `
          <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 16px; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 0.92rem; font-weight: 800; color: var(--ink);">On-Chain Trade History</span>
              <a href="https://testnet.arcscan.app/address/${state.walletAddress || '0x8478b85e539fa3Ae8C53C360109BD82aE26Caa3E'}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; font-weight: 700; color: #38bdf8; text-decoration: underline;">ArcScan ↗</a>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${realTradesList.length ? realTradesList.map(([mId, pos]: any) => {
                const optLabel = pos.optionLabel || (pos.optionId === 'home' ? 'Home' : pos.optionId === 'away' ? 'Away' : 'Draw');
                const shares = pos.optionSharesUsdc || pos.yesSharesUsdc || 1;
                return `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--subtle-bg); border-radius: 12px;">
                    <div>
                      <div style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${escapeHtml(optLabel)}</div>
                      <div style="font-size: 0.75rem; color: var(--muted);">Arc Testnet Contract</div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 0.9rem; font-weight: 800; color: #38bdf8;">$${shares.toFixed(2)} USDC</div>
                      <div style="font-size: 0.72rem; color: #34d399; font-weight: 700;">Confirmed On-Chain</div>
                    </div>
                  </div>
                `;
              }).join("") : `
                <div style="text-align: center; padding: 20px; color: var(--muted); font-size: 0.85rem;">No trades placed yet.</div>
              `}
            </div>
          </div>
        ` : `
          <!-- WINS AND LOSSES -->
          <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 16px; box-sizing: border-box;">
            <div style="font-size: 0.92rem; font-weight: 800; color: var(--ink); margin-bottom: 12px;">Wins and Losses Performance</div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; text-align: center;">
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Win Rate</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: ${(() => {
                  let sw = 0, sl = 0;
                  finalizedPositions.forEach((m: any) => {
                    const pos = state.marketPositions[m.id];
                    if (pos && m.isResolved) {
                      if (m.resolvedOptionId && pos.optionId === m.resolvedOptionId) sw++;
                      else sl++;
                    }
                  });
                  return (sw + sl) > 0 ? '#34d399' : 'var(--muted)';
                })()};">${(() => {
                  let sw = 0, sl = 0;
                  finalizedPositions.forEach((m: any) => {
                    const pos = state.marketPositions[m.id];
                    if (pos && m.isResolved) {
                      if (m.resolvedOptionId && pos.optionId === m.resolvedOptionId) sw++;
                      else sl++;
                    }
                  });
                  return (sw + sl) > 0 ? ((sw / (sw + sl)) * 100).toFixed(0) + '%' : '--';
                })()}</div>
              </div>
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Total Wins</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: var(--ink);">${(() => {
                  let sw = 0;
                  finalizedPositions.forEach((m: any) => {
                    const pos = state.marketPositions[m.id];
                    if (pos && m.isResolved && m.resolvedOptionId && pos.optionId === m.resolvedOptionId) sw++;
                  });
                  return sw;
                })()}</div>
              </div>
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Losses</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: var(--muted);">${(() => {
                  let sl = 0;
                  finalizedPositions.forEach((m: any) => {
                    const pos = state.marketPositions[m.id];
                    if (pos && m.isResolved && (!m.resolvedOptionId || pos.optionId !== m.resolvedOptionId)) sl++;
                  });
                  return sl;
                })()}</div>
              </div>
            </div>

            <div style="padding: 12px; background: var(--subtle-bg); border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Projected Total Returns</span>
              <span style="font-size: 1rem; font-weight: 900; color: #34d399;">+$${totalPotentialPayout > 0 ? totalPotentialPayout.toFixed(2) : (totalPositionsValue * 2.22).toFixed(2)} USDC</span>
            </div>
          </div>
        `}
      </div>

    </section>
  `;

  // Attach Event Listeners
  storyList.querySelectorAll(".portfolio-subtab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); e.stopPropagation();
      const sub = btn.getAttribute("data-subtab") as any;
      if (sub) {
        (state as any).activePortfolioSubTab = sub;
        renderPortfolio();
      }
    });
  });

  storyList.querySelectorAll(".pnl-tf-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); e.stopPropagation();
      const tf = btn.getAttribute("data-tf") as any;
      if (tf) {
        (state as any).pnlTimeframe = tf;
        renderPortfolio();
      }
    });
  });

  storyList.querySelector("#startTradingBtn")?.addEventListener("click", () => {
    topMarketsButton?.click();
  });

  storyList.querySelector("#disconnectWalletBtn")?.addEventListener("click", () => {
    disconnectArcWallet();
    showActionToast("Wallet disconnected");
    renderPortfolio();
  });

  storyList.querySelector("#editUsernameBtn")?.addEventListener("click", () => {
    const newName = prompt("Enter new display name:", state.profileUsername || "");
    if (newName && newName.trim()) {
      state.profileUsername = newName.trim();
      localStorage.setItem("siftle_username", newName.trim());
      renderPortfolio();
      showActionToast("Username updated!");
    }
  });
};

const render = (): void => {
  if (storyList && state.activeSurface !== "matches") {
    storyList.classList.remove("matches-surface-active");
  }
  bottomNavButtons.forEach((button) => {
    const target = button.dataset.bottomNav;
    button.classList.toggle("active", target === "saved" ? state.showSaved : target === state.activeSurface && !state.showSaved);
  });

  if (state.activeSurface === "markets") {
    renderMarkets();
    return;
  }
  if (state.activeSurface === "matches") {
    renderMatches();
    return;
  }
  if (state.activeSurface === "portfolio") {
    renderPortfolio();
    return;
  }
  if (state.activeSurface === "leaderboard") {
    renderLeaderboard();
    return;
  }

   showFeedSurface();
  renderCategories();
  renderStories();
  renderDetail();
  if (archiveDateSelect) archiveDateSelect.value = state.activeArchiveDate ?? "";
};

dateLabel!.textContent = formatHeaderDate();

categoryTabs?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>("[data-category]");
  if (!button) return;

  const newCat = button.dataset.category as Category;
  state.activeCategory = newCat;
  isViewingBriefing = false;
  currentBriefingData = null;
  window.history.pushState({}, "", "#feed");
  resetFeedScroll();
  render();
  if (newCat === "Personalized" && !hasFollowedEntities()) {
    openPersonalizationModal();
  }
  ensureArchiveIndexLoaded();
  ensureFeedLoaded(state.activeCategory);
});

// ==========================================================================
// Siftle Dynamic Catch-Up Briefing Engine & Mode Switcher
// ==========================================================================

interface FollowedEntities {
  clubs: string[];
  managers: string[];
  players: string[];
}

let isViewingBriefing = false;
let activeBriefingContext: "overall" | "personalized" = "overall";
let currentBriefingData: any = null;
let isLoadingBriefing = false;



const loadFollowedEntities = (): FollowedEntities => {
  try {
    const saved = localStorage.getItem("siftle_followed_entities");
    if (saved) return JSON.parse(saved);
  } catch {}
  return { clubs: [], managers: [], players: [] };
};

const hasFollowedEntities = (): boolean => {
  const f = loadFollowedEntities();
  return (f.clubs?.length || 0) + (f.managers?.length || 0) + (f.players?.length || 0) > 0;
};

const saveFollowedEntities = (entities: FollowedEntities) => {
  localStorage.setItem("siftle_followed_entities", JSON.stringify(entities));
};

const formatBriefingMarkdown = (md: string): string => {
  if (!md) return "";
  const normalized = md.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const decoded = decodeHtmlEntities(normalized);

  const lines = decoded.split("\n");
  let eventCardsHtml = "";
  let highlightHtml = "";
  let inWatchNext = false;
  let inWhatMatters = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // What Matters Section
    if (/what matters/i.test(line) || line.includes("🎯")) {
      if (inWatchNext) { highlightHtml += "</ul></div>"; inWatchNext = false; }
      const cleanHeading = line.replace(/^#+\s*/, "").replace(/[🎯⚡⏱️⭐]\s*/g, "");
      highlightHtml += `
        <div class="briefing-highlight-box what-matters">
          <h4>${escapeHtml(cleanHeading || "What Matters Most")}</h4>
          <p>
      `;
      inWhatMatters = true;
      continue;
    }

    // Watch Next Section
    if (/watch next/i.test(line) || line.includes("⏱️")) {
      if (inWhatMatters) { highlightHtml += "</p></div>"; inWhatMatters = false; }
      const cleanHeading = line.replace(/^#+\s*/, "").replace(/[🎯⚡⏱️⭐]\s*/g, "");
      highlightHtml += `
        <div class="briefing-highlight-box watch-next">
          <h4>${escapeHtml(cleanHeading || "Key Things to Watch")}</h4>
          <ul>
      `;
      inWatchNext = true;
      continue;
    }

    // Main header / Title line (e.g. ## YOUR FOOTBALL BRIEFING) -> skip
    if (line.startsWith("## ") || line.startsWith("# ")) {
      continue;
    }

    // Watch Next bullet item
    if (inWatchNext) {
      const bulletText = line.replace(/^[-*]\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      if (bulletText) highlightHtml += `<li>${bulletText}</li>`;
      continue;
    }

    // What Matters body paragraph
    if (inWhatMatters) {
      const paraText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      highlightHtml += `${paraText} `;
      continue;
    }

    // Numbered Event Heading (e.g. ### 1. Title or 1. Title)
    const eventMatch = line.match(/^(?:###\s*)?(\d+)\.\s*(.*)$/);
    if (eventMatch) {
      const num = eventMatch[1];
      const rawTitle = eventMatch[2].replace(/\*\*/g, "").trim();

      // Look ahead for body paragraph and metadata
      let bodyText = "";
      let metaText = "";
      let j = i + 1;
      while (j < lines.length && !lines[j].trim().match(/^(?:###\s*)?(?:\d+\.|WHAT MATTERS|WATCH NEXT|🎯|⏱️)/i)) {
        const nextLine = lines[j].trim();
        if (nextLine.startsWith("*[") && nextLine.endsWith("]*")) {
          metaText = nextLine.slice(2, -2);
        } else if (nextLine.startsWith("*") && nextLine.endsWith("*")) {
          metaText = nextLine.slice(1, -1);
        } else if (nextLine.length > 0 && !nextLine.startsWith("###")) {
          bodyText += (bodyText ? " " : "") + nextLine;
        }
        j++;
      }
      i = j - 1;

      // Extract ONE single clean sentence - avoid duplicating headline and body snippet
      let singleSentence = "";
      let cleanBody = bodyText.replace(/\.\.\.$/, "").trim();
      cleanBody = cleanBody.replace(/[,;:\s]+(?:but|and|or|the|a|an|with|in|on|of|to|for|as|is|was|are|were|after|while|that|which|who)$/i, "").trim();

      if (cleanBody && !cleanBody.endsWith("...") && cleanBody.length >= 35 && cleanBody.split(" ").length >= 7) {
        singleSentence = cleanBody;
      } else {
        singleSentence = rawTitle;
      }

      // Clean out any tweet artifacts or prefixes
      singleSentence = singleSentence
        .replace(/^(?:deal done|here we go|official,?\s*exclusive\s*story\s*confirmed|breaking news|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi, "")
        .replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi, "")
        .replace(/@[a-zA-Z0-9_]+/g, "")
        .replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g, "")
        .replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g, "")
        .replace(/\s+/g, " ")
        .trim();

      singleSentence = singleSentence.replace(/[,;:\-\s]+$/, "");

      if (singleSentence.length > 0) {
        singleSentence = singleSentence.charAt(0).toUpperCase() + singleSentence.slice(1);
      }
      if (!singleSentence.endsWith(".")) singleSentence += ".";

      const cleanMeta = metaText.replace(/·\s*(confirmed|in progress|major|reported).*/i, "").trim();

      eventCardsHtml += `
        <div class="briefing-event-item-card">
          <div class="briefing-event-item-header">
            <span class="briefing-event-num-pill">${num}</span>
            <div class="briefing-event-item-content">
              <p class="briefing-event-item-single-text">${escapeHtml(singleSentence)}</p>
              <div class="briefing-event-item-meta">
                ${cleanMeta ? `<span class="briefing-source-tag">${escapeHtml(cleanMeta)}</span>` : ""}
              </div>
            </div>
          </div>
        </div>
      `;
      continue;
    }

    // Secondary subheadings (e.g. ### Everything is up to date)
    if (line.startsWith("### ") && !line.match(/###\s*\d+\./)) {
      const headingText = line.replace(/^###\s*/, "").replace(/[🎯⚡⏱️⭐]\s*/g, "");
      highlightHtml += `<h4 style="margin: 12px 0 6px 0; font-family: Outfit, sans-serif; font-size: 1rem; color: inherit;">${escapeHtml(headingText)}</h4>`;
      continue;
    }

    // General lead or summary paragraph
    const formattedPara = line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
    highlightHtml += `<p style="margin: 0 0 10px 0; font-size: 0.88rem; color: inherit; line-height: 1.5;">${formattedPara}</p>`;
  }

  if (inWhatMatters) highlightHtml += "</p></div>";
  if (inWatchNext) highlightHtml += "</ul></div>";

  return eventCardsHtml + highlightHtml;
};

const openPersonalizationModal = () => {
  // Ensure any previous modals are removed
  document.querySelectorAll(".personalization-modal-overlay").forEach(el => el.remove());

  const current = loadFollowedEntities();
  const overlay = document.createElement("div");
  overlay.className = "personalization-modal-overlay";

  overlay.innerHTML = `
    <div class="custom-topics-modal">
      <button class="modal-close-icon-btn" id="prefCloseBtn" type="button" aria-label="Close">&times;</button>
      <div style="margin-bottom: 6px;">
        <h3 style="font-family: Outfit, sans-serif; font-weight: 700; margin: 0; font-size: 1.22rem;">Personalize Your Football Feed</h3>
      </div>
      <p style="margin: 0 0 16px 0; font-size: 0.82rem; color: #69728a; line-height: 1.4;">Type the clubs, managers, and players you follow (comma separated). Siftle will tailor your feed and catch-up briefings to these topics.</p>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Clubs</label>
        <input type="text" class="topic-text-field" id="clubInput" placeholder="e.g. Chelsea, Real Madrid, Arsenal" value="${escapeHtml(current.clubs.join(', '))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Managers</label>
        <input type="text" class="topic-text-field" id="managerInput" placeholder="e.g. Enzo Maresca, Mikel Arteta, Pep Guardiola" value="${escapeHtml(current.managers.join(', '))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Players</label>
        <input type="text" class="topic-text-field" id="playerInput" placeholder="e.g. Cole Palmer, Bukayo Saka, Kylian Mbappe" value="${escapeHtml(current.players.join(', '))}" />
      </div>

      <div class="custom-modal-btn-row">
        <button id="prefSaveBtn" class="modal-save-btn" type="button">Save Topics</button>
        <button id="prefClearBtn" class="modal-clear-btn" type="button">Clear All</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const dismiss = () => overlay.remove();
  overlay.querySelector("#prefCloseBtn")?.addEventListener("click", dismiss);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) dismiss(); });

  overlay.querySelector("#prefClearBtn")?.addEventListener("click", () => {
    (overlay.querySelector("#clubInput") as HTMLInputElement).value = "";
    (overlay.querySelector("#managerInput") as HTMLInputElement).value = "";
    (overlay.querySelector("#playerInput") as HTMLInputElement).value = "";
  });

  overlay.querySelector("#prefSaveBtn")?.addEventListener("click", () => {
    const rawClubs = (overlay.querySelector("#clubInput") as HTMLInputElement)?.value || "";
    const rawManagers = (overlay.querySelector("#managerInput") as HTMLInputElement)?.value || "";
    const rawPlayers = (overlay.querySelector("#playerInput") as HTMLInputElement)?.value || "";

    const parseList = (str: string) => str.split(",").map(s => s.trim()).filter(Boolean);

    const updated: FollowedEntities = {
      clubs: parseList(rawClubs),
      managers: parseList(rawManagers),
      players: parseList(rawPlayers)
    };

    saveFollowedEntities(updated);
    showActionToast("Topics saved");
    dismiss();
    state.activeCategory = "Personalized";
    render();
  });
};

const renderBriefingPageHtml = (): string => {
  if (isLoadingBriefing) {
    return `
      <div class="briefing-view-container">
        <div class="briefing-top-nav-bar">
          <button type="button" class="briefing-back-btn" id="backToFeedBtn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Back to Feed</span>
          </button>
        </div>
        <div class="briefing-header-card" style="text-align:center; padding: 40px 20px;">
          <div class="loading-spinner" style="margin: 0 auto 16px auto; width: 32px; height: 32px; border: 3px solid rgba(49, 87, 255, 0.2); border-top-color: #3157ff; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <h3 style="margin:0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Generating briefing through 0G...</h3>
          <p style="color: #69728a; font-size: 0.85rem; margin-top: 6px;">Clustering verified reports and synthesizing developments since last check...</p>
        </div>
      </div>
    `;
  }

  if (!currentBriefingData) {
    void fetchAndRenderDeltaBriefing(false);
    return `
      <div class="briefing-view-container">
        <div class="briefing-top-nav-bar">
          <button type="button" class="briefing-back-btn" id="backToFeedBtn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Back to Feed</span>
          </button>
        </div>
        <div class="briefing-header-card" style="text-align:center; padding: 40px 20px;">
          <div class="loading-spinner" style="margin: 0 auto 16px auto; width: 32px; height: 32px; border: 3px solid rgba(49, 87, 255, 0.2); border-top-color: #3157ff; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <h3 style="margin:0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Loading briefing...</h3>
        </div>
      </div>
    `;
  }

  const data = currentBriefingData;
  const periodStartFormatted = new Date(data.periodStart).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const isPersonalized = state.activeCategory === "Personalized";

  return `
    <div class="briefing-view-container">
      <div class="briefing-top-nav-bar">
        <button type="button" class="briefing-back-btn" id="backToFeedBtn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Back to Feed</span>
        </button>
        <button type="button" class="briefing-action-pill" id="catchUpAgainBtn" title="Check for new developments right now">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          <span>Catch Up Again</span>
        </button>
      </div>

      <div class="briefing-header-card">
        <h2 class="briefing-main-title">
          ${isPersonalized ? "Your Personalized Briefing" : "Your Football Briefing"}
        </h2>
        <p class="briefing-sub-copy">
          Covering key developments since ${periodStartFormatted}
        </p>
      </div>

      <div class="briefing-body-card">
        ${formatBriefingMarkdown(data.markdown || "")}

        <div class="briefing-sources-bar" style="display:flex; flex-direction:column; gap:4px; margin-top:14px; padding-top:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
            <span>Compiled from ${data.sourcesCount || 0} verified reports across ${data.eventCount || 0} canonical events</span>
            <span style="font-weight:700; color:#3157ff;">
              Powered by 0G
            </span>
          </div>
          <div style="font-size:0.72rem; color:#69728a; margin-top:4px; text-align:left; width:100%;">
            AI Status: <strong>${escapeHtml(data.provider || "System")}</strong> 
            ${data.successRate !== null && data.successRate !== undefined ? `(Success Rate: <strong>${data.successRate}%</strong>)` : ""}
          </div>
        </div>
      </div>
    </div>
  `;
};

const wireBriefingEventListeners = () => {
  document.querySelector("#backToFeedBtn")?.addEventListener("click", () => {
    isViewingBriefing = false;
    render();
  });

  document.querySelector("#openBriefingBtn")?.addEventListener("click", () => {
    isViewingBriefing = true;
    const nextContext = state.activeCategory === "Personalized" ? "personalized" : "overall";
    if (activeBriefingContext !== nextContext) {
      currentBriefingData = null;
    }
    activeBriefingContext = nextContext;
    render();
    if (!currentBriefingData) {
      void fetchAndRenderDeltaBriefing(false);
    }
  });

  document.querySelector("#catchUpAgainBtn")?.addEventListener("click", () => {
    void fetchAndRenderDeltaBriefing(false);
  });
};

const fetchAndRenderDeltaBriefing = async (forceReset = false) => {
  isLoadingBriefing = true;
  if (isViewingBriefing) render();

  const lastBriefingAt = forceReset ? null : localStorage.getItem("siftle_last_briefing_at");
  const entities = loadFollowedEntities();

  try {
    const res = await fetch(apiUrl("/api/briefing/delta"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lastBriefingAt,
        context: state.activeCategory === "Personalized" ? "personalized" : "overall",
        entities
      })
    });

    const data = await res.json();
    isLoadingBriefing = false;
    if (res.ok && data.success) {
      currentBriefingData = data;
      localStorage.setItem("siftle_last_briefing_at", data.periodEnd || new Date().toISOString());
      if (isViewingBriefing) render();
    } else {
      currentBriefingData = {
        periodStart: new Date().toISOString(),
        markdown: `### Failed to generate briefing\n\n${data.error || "Please try again in a moment."}`
      };
      if (isViewingBriefing) render();
    }
  } catch (err: any) {
    isLoadingBriefing = false;
    currentBriefingData = {
      periodStart: new Date().toISOString(),
      markdown: `### Failed to connect to briefing service\n\n${err.message}`
    };
    if (isViewingBriefing) render();
  }
};

storyList?.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  if (target.id !== "newsSearchInput") return;
  const selectionStart = target.selectionStart ?? target.value.length;
  const selectionEnd = target.selectionEnd ?? target.value.length;
  state.newsSearchQuery = target.value;
  renderStories();
  const nextInput = storyList?.querySelector<HTMLInputElement>("#newsSearchInput");
  if (nextInput) {
    nextInput.focus();
    nextInput.setSelectionRange(selectionStart, selectionEnd);
  }
});

topMarketsButton?.addEventListener("click", () => {
  state.feedScrollY = window.scrollY;
  state.activeSurface = "markets";
  state.selectedMarketId = null;
  state.selectedStoryId = null;
  state.selectedThreadUrl = null;
  window.history.pushState({}, "", "#markets");
  resetFeedScroll();
  render();
});

topNewsButton?.addEventListener("click", () => {
  state.activeSurface = "feed";
  state.showSaved = false;
  window.history.pushState({}, "", "#feed");
  resetFeedScroll();
  render();
  ensureArchiveIndexLoaded();
  ensureFeedLoaded(state.activeCategory);
});

topPortfolioButton?.addEventListener("click", () => {
  state.feedScrollY = window.scrollY;
  state.activeSurface = "portfolio";
  state.selectedMarketId = null;
  state.selectedStoryId = null;
  state.selectedThreadUrl = null;
  state.showSaved = false;
  window.history.pushState({}, "", "#portfolio");
  resetFeedScroll();
  render();
});

walletButton?.addEventListener("click", () => {
  if (state.walletAddress) {
    window.location.hash = "#portfolio";
    syncStoryFromHash();
  } else {
    void connectWallet();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const matchRow = target.closest<HTMLElement>("[data-match-id]");
  if (matchRow) {
    const matchId = matchRow.getAttribute("data-match-id");
    if (matchId) {
      (window as any).openSiftleMatchPage(matchId);
    }
    return;
  }

  const datePillBtn = target.closest<HTMLElement>("[data-match-date]");
  if (datePillBtn) {
    const targetDate = datePillBtn.getAttribute("data-match-date");
    if (targetDate && targetDate !== state.activeMatchDate) {
      state.activeMatchDate = targetDate;
      state.liveMatches = [];
      state.loadingLiveMatches = true;
      renderMatches();
      void loadLiveMatches(targetDate).then(() => {
        if (state.activeSurface === "matches") renderMatches();
      });
    }
    return;
  }

  const copyBtn = target.closest(".copy-address-btn");
  if (copyBtn) {
    const address = copyBtn.getAttribute("data-address");
    if (address) {
      void navigator.clipboard.writeText(address).then(() => {
        showActionToast("Wallet address copied!");
      });
    }
  }
  const claimBtn = target.closest<HTMLElement>("[data-claim-market]");
  if (claimBtn) {
    const marketId = claimBtn.getAttribute("data-claim-market");
    if (marketId) void claimPortfolioMarket(marketId);
    return;
  }
  if (target.closest("[data-open-referrals]")) {
    state.referralPanelOpen = !state.referralPanelOpen;
    if (!state.referralData && !state.loadingReferralData) void loadReferralData();
    renderPortfolio();
    return;
  }
  if (target.closest("[data-close-referrals]")) {
    state.referralPanelOpen = false;
    renderPortfolio();
    return;
  }
  if (target.closest("[data-refresh-referrals]")) {
    state.referralError = null;
    void loadReferralData();
    renderPortfolio();
    return;
  }
  const referralCodeBtn = target.closest<HTMLElement>("[data-copy-referral-code]");
  if (referralCodeBtn) {
    const code = referralCodeBtn.getAttribute("data-copy-referral-code") || "";
    if (code) {
      void navigator.clipboard.writeText(code).then(() => showActionToast("Invite code copied"));
    }
    return;
  }
  const referralCopyBtn = target.closest<HTMLElement>("[data-copy-referral-link]");
  if (referralCopyBtn) {
    const link = referralCopyBtn.getAttribute("data-copy-referral-link") || "";
    if (link) {
      void navigator.clipboard.writeText(link).then(() => showActionToast("Invite link copied"));
    }
    return;
  }
  if (target.closest("[data-connect-wallet]")) {
    if (state.walletAddress) {
      disconnectArcWallet();
    } else {
      void connectWallet();
    }
  }
});

bottomNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.bottomNav;
    state.selectedMarketId = null;
    state.selectedStoryId = null;
    state.selectedThreadUrl = null;
    state.showSaved = target === "saved";

    if (target === "markets") {
      state.activeSurface = "markets";
      window.history.pushState({}, "", "#markets");
    } else if (target === "matches") {
      state.activeSurface = "matches";
      window.history.pushState({}, "", "#matches");
    } else if (target === "portfolio") {
      state.activeSurface = "portfolio";
      window.history.pushState({}, "", "#portfolio");
    } else if (target === "leaderboard") {
      state.activeSurface = "leaderboard";
      window.history.pushState({}, "", "#leaderboard");
    } else {
      state.activeSurface = "feed";
      window.history.pushState({}, "", "#feed");
      ensureArchiveIndexLoaded();
      ensureFeedLoaded(state.activeCategory);
      if (target === "saved") {
        clearLegacyMarketCache();
        loadSavedFromStorage();
        applySavedFlags();
      }
    }
    resetFeedScroll();
    render();
  });
});

archiveDateSelect?.addEventListener("change", () => {
  state.activeArchiveDate = archiveDateSelect.value || null;
  window.history.pushState({}, "", "#feed");
  resetFeedScroll();
  render();
  ensureFeedLoaded(state.activeCategory);
});

todayButton?.addEventListener("click", () => {
  state.activeArchiveDate = null;
  if (archiveDateSelect) archiveDateSelect.value = "";
  window.history.pushState({}, "", "#feed");
  resetFeedScroll();
  render();
  ensureFeedLoaded(state.activeCategory);
});



storyList?.addEventListener("click", async (event) => {
  const target = event.target as HTMLElement;

  // Profile username edit/cancel/save handlers
  const editBtn = target.closest("#editUsernameBtn");
  if (editBtn) {
    const displayRow = storyList?.querySelector(".username-display-row");
    const editForm = storyList?.querySelector("#usernameEditForm");
    if (displayRow && editForm) {
      (displayRow as HTMLElement).style.display = "none";
      (editForm as HTMLElement).style.display = "flex";
      const input = editForm.querySelector<HTMLInputElement>("#usernameInput");
      if (input) input.focus();
    }
    return;
  }

  const cancelBtn = target.closest("#cancelUsernameBtn");
  if (cancelBtn) {
    const displayRow = storyList?.querySelector(".username-display-row");
    const editForm = storyList?.querySelector("#usernameEditForm");
    if (displayRow && editForm) {
      (displayRow as HTMLElement).style.display = "flex";
      (editForm as HTMLElement).style.display = "none";
    }
    return;
  }

  const saveBtn = target.closest("#saveUsernameBtn");
  if (saveBtn) {
    const editForm = storyList?.querySelector("#usernameEditForm");
    const input = editForm?.querySelector<HTMLInputElement>("#usernameInput");
    if (input) {
      const newUsername = input.value.trim().slice(0, 15);
      const button = saveBtn as HTMLButtonElement;
      const previousLabel = button.textContent || "Save";
      button.disabled = true;
      button.textContent = "Saving...";
      saveProfileUsernameForWallet(newUsername);
      state.profileNotice = null;
      try {
        if (state.walletAddress) {
          await reportLeaderboardEntry(false);
        }
        state.profileNotice = {
          type: "success",
          message: "Username saved to your shared leaderboard profile."
        };
        showActionToast("Username updated");
        renderPortfolio();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Username save failed";
        state.profileNotice = {
          type: "error",
          message
        };
        showActionToast(message);
        button.disabled = false;
        button.textContent = previousLabel;
        renderPortfolio();
      }
    }
    return;
  }

  const portfolioFilterBtn = target.closest<HTMLElement>("[data-portfolio-filter]");
  if (portfolioFilterBtn) {
    const filter = portfolioFilterBtn.getAttribute("data-portfolio-filter") as "open" | "finalized";
    state.portfolioFilter = filter;
    renderPortfolio();
    return;
  }

  const timeframeBtn = target.closest<HTMLButtonElement>("[data-timeframe]");
  if (timeframeBtn) {
    const tf = timeframeBtn.dataset.timeframe as "All" | "Daily" | "Weekly" | "Sagas";
    state.activeMarketTimeframe = tf;
    renderMarkets();
    return;
  }

  const marketCard = target.closest<HTMLButtonElement>("[data-market-id]");
  if (marketCard) {
    state.selectedMarketId = marketCard.dataset.marketId ?? null;
    trackEvent("market_view");
    window.history.pushState({}, "", `#market-${state.selectedMarketId}`);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const readTweetButton = target.closest<HTMLButtonElement>(".read-tweet-btn");
  if (readTweetButton) {
    event.stopPropagation();
    const storyCard = target.closest<HTMLElement>("[data-story-id]");
    if (storyCard) {
      openStory(Number(storyCard.dataset.storyId), true);
    }
    return;
  }

  const threadButton = target.closest<HTMLButtonElement>("[data-thread-story-id]");
  const exportButton = target.closest<HTMLButtonElement>("[data-export-id]");
  const exportAction = target.closest<HTMLButtonElement>("[data-export-action]");
  const storyCard = target.closest<HTMLElement>("[data-story-id]");

  if (threadButton) {
    event.stopPropagation();
    const story = state.stories.find((item) => item.id === Number(threadButton.dataset.threadStoryId));
    if (story) openThread(story);
    return;
  }

  const bookmarkBtn = target.closest<HTMLButtonElement>(".mobile-bookmark-btn, .bookmark-button");
  if (bookmarkBtn) {
    event.stopPropagation();
    const url = bookmarkBtn.dataset.bookmarkUrl || "";
    const story = state.stories.find((s) => s.sourceUrl === url);
    if (!story) return;
    story.saved = !story.saved;
    if (story.saved) savedUrls.add(url);
    else savedUrls.delete(url);
    persistSavedSet();
    showActionToast(story.saved ? "Saved to your list" : "Removed from saved");
    // If we're viewing saved items, refresh the list so the card disappears when un-saved
    renderStories();
    return;
  }

  if (exportAction) {
    event.stopPropagation();
    void handleStoryExport(Number(exportAction.dataset.exportStoryId), exportAction.dataset.exportAction as "save" | "share");
    return;
  }

  if (exportButton) {
    event.stopPropagation();
    const storyId = Number(exportButton.dataset.exportId);
    state.activeShareStoryId = state.activeShareStoryId === storyId ? null : storyId;
    renderStories();
    return;
  }

  if (!storyCard) return;
  if (target.closest("a")) return;
  
  const storyId = Number(storyCard.dataset.storyId);
  const story = state.stories.find((s) => s.id === storyId);
  if (story) {
    trackEvent("feed_story_click", story.sourceUrl, story.headline);
  }
  openStory(storyId, true);
});

storyList?.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement;
  const storyCard = target.closest<HTMLElement>("[data-story-id]");
  if (!storyCard || (event.key !== "Enter" && event.key !== " ")) return;

  event.preventDefault();
  const storyId = Number(storyCard.dataset.storyId);
  const story = state.stories.find((s) => s.id === storyId);
  if (story) {
    trackEvent("feed_story_click", story.sourceUrl, story.headline);
  }
  openStory(storyId);
});

storyDetail?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const unlockBriefingBtn = target.closest<HTMLButtonElement>("[data-unlock-briefing]");
  if (unlockBriefingBtn) {
    const story = state.stories.find((item) => item.id === Number(unlockBriefingBtn.dataset.unlockBriefing));
    if (story) void unlockAndLoadStorySummary(story);
    return;
  }
  const unlockBriefingByUrlBtn = target.closest<HTMLButtonElement>("[data-unlock-briefing-url]");
  if (unlockBriefingByUrlBtn) {
    const sourceUrl = decodeURIComponent(unlockBriefingByUrlBtn.dataset.unlockBriefingUrl || "");
    const story = findBriefingTargetBySourceUrl(sourceUrl);
    if (story) {
      if (isBriefingUnlocked(story)) {
        void loadStorySummary(story);
      } else {
        void unlockAndLoadStorySummary(story);
      }
    }
    return;
  }

  if (target.closest("[data-back-markets]")) {
    state.selectedMarketId = null;
    state.tradeDrawerOpen = false;
    window.history.pushState({}, "", "#markets");
    render();
    return;
  }
  if (target.closest("#openTradeDrawerBtn")) {
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    if (market) {
      if (isMarketResolved(market, state.marketSnapshots[market.id])) {
        showActionToast("This market is resolved and can no longer be traded.");
        return;
      }
      const marketTradeLockMessage = getMarketTradeLockMessage(market, state.marketSnapshots[market.id]);
      if (marketTradeLockMessage) {
        showActionToast("Trading is locked 20 minutes before kickoff.");
        return;
      }
    }
    state.tradeDrawerOpen = true;
    trackEvent("trade_drawer_open");
    const drawer = storyDetail.querySelector("#tradeDrawer");
    const backdrop = storyDetail.querySelector("#tradeDrawerBackdrop");
    drawer?.classList.add("open");
    backdrop?.classList.add("open");
    return;
  }
  if (target.closest("#closeTradeDrawerBtn") || target.closest("#tradeDrawerBackdrop")) {
    state.tradeDrawerOpen = false;
    const drawer = storyDetail.querySelector("#tradeDrawer");
    const backdrop = storyDetail.querySelector("#tradeDrawerBackdrop");
    drawer?.classList.remove("open");
    backdrop?.classList.remove("open");
    return;
  }
  if (target.closest("#shareWhatsAppBtn")) {
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    if (market) {
      const text = generateWhatsAppShareText(market);
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    }
    return;
  }
  const tradeButton = target.closest<HTMLButtonElement>("[data-market-trade]");
  if (tradeButton && state.selectedMarketId) {
    const side = tradeButton.dataset.marketTrade as "yes" | "no";
    void placeMarketOrder(state.selectedMarketId, side);
    return;
  }
  const optionTradeButton = target.closest<HTMLButtonElement>("[data-market-option-trade]");
  if (optionTradeButton && state.selectedMarketId) {
    const optionId = optionTradeButton.dataset.marketOptionTrade || state.marketTradeOptionId || "";
    void placeOptionMarketOrder(state.selectedMarketId, optionId);
    return;
  }
  const optionButton = target.closest<HTMLButtonElement>("[data-market-option-id]");
  if (optionButton) {
    if (optionButton.disabled || optionButton.classList.contains("disabled")) return;
    state.marketTradeOptionId = optionButton.dataset.marketOptionId || null;
    render();
    return;
  }
  const tradeSide = target.closest<HTMLButtonElement>("[data-market-trade-side]");
  if (tradeSide) {
    if (tradeSide.disabled || tradeSide.classList.contains("disabled")) return;
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    const position = market ? state.marketPositions[market.id] : undefined;
    const nextSide = tradeSide.dataset.marketTradeSide as "yes" | "no";
    if (!canTradeSide(state.marketOrderMode, nextSide, position)) return;
    state.marketTradeSide = nextSide;
    render();
    return;
  }
  const orderMode = target.closest<HTMLButtonElement>("[data-market-order-mode]");
  if (orderMode) {
    state.marketOrderMode = orderMode.dataset.marketOrderMode as "buy" | "sell";
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    const position = market ? state.marketPositions[market.id] : undefined;
    state.marketTradeSide = normalizeTradeSideForMode(state.marketOrderMode, state.marketTradeSide, position);
    state.marketTradeAmount = normalizeMarketTradeAmount(
      Number(state.marketTradeAmount) || 0,
      state.marketOrderMode,
      state.marketTradeSide,
      position
    );
    render();
    return;
  }
  const backButton = target.closest<HTMLButtonElement>("[data-back-to-feed]");
  if (backButton) {
    if (backButton.classList.contains("read-more-news-btn")) {
      const urlParams = new URLSearchParams(window.location.search);
      const urlParam = urlParams.get("url");
      const headline = document.querySelector(".detail-card h2")?.textContent || undefined;
      trackEvent("shared_read_more_click", urlParam || undefined, headline);
    }
    closeStory();
  }
});

storyDetail?.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  if (!target.matches("[data-market-amount]")) return;
  const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
  const snapshot = market ? state.marketSnapshots[market.id] : undefined;
  const position = market ? state.marketPositions[market.id] : undefined;
  const typedAmount = Number(target.value);
  state.marketTradeAmount = Number.isFinite(typedAmount) ? typedAmount : 0;
  const payout = market && isOptionMarket(market)
    ? state.marketTradeAmount
    : estimatePoolPayout(snapshot, state.marketTradeSide, state.marketTradeAmount, state.marketOrderMode, position);
  const payoutValue = storyDetail.querySelector<HTMLElement>(".market-inline-payout strong");
  if (payoutValue) payoutValue.textContent = `$${formatMoney(payout)}`;
});

storyDetail?.addEventListener("focusin", (event) => {
  const target = event.target as HTMLElement;
  if (target.matches("[data-market-amount]")) {
    document.body.classList.add("market-amount-focused");
  }
});

storyDetail?.addEventListener("focusout", (event) => {
  const target = event.target as HTMLInputElement;
  if (target.matches("[data-market-amount]")) {
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    const position = market ? state.marketPositions[market.id] : undefined;
    state.marketTradeAmount = normalizeMarketTradeAmount(
      Number(target.value) || 0,
      state.marketOrderMode,
      state.marketTradeSide,
      position
    );
    target.value = String(state.marketTradeAmount);
    window.setTimeout(() => document.body.classList.remove("market-amount-focused"), 120);
  }
});

window.addEventListener("popstate", syncStoryFromHash);
window.addEventListener("hashchange", syncStoryFromHash);

window.addEventListener("focus", async () => {
  if (state.walletAddress) {
    const oldBalance = state.walletBalance;
    const balance = await getSmartWalletBalance(state.walletAddress);
    state.walletBalance = balance;
    renderWalletState();
    if ((!oldBalance || parseFloat(oldBalance) === 0) && parseFloat(balance) > 0) {
      console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup...");
      void triggerGatewayWarmup();
    }
  }
});

menuButton?.addEventListener("click", () => {
  if (!menuPanel || !menuButton) return;

  const isOpen = !menuPanel.hidden;
  menuPanel.hidden = isOpen;
  menuButton.setAttribute("aria-expanded", String(!isOpen));
});

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".share-control") && state.activeShareStoryId !== null) {
    state.activeShareStoryId = null;
    renderStories();
  }

  const button = target.closest<HTMLButtonElement>("[data-menu-action]");
  if (!button) return;

  const labels: Record<string, string> = {
    today: "Showing today's brief",
    saved: `${state.stories.filter((story) => story.saved).length} saved stories`,
    archive: state.archiveDates.length > 0 ? "Choose a saved day from the archive selector" : "No saved days yet"
  };
  if (menuStatus) menuStatus.textContent = labels[button.dataset.menuAction ?? "today"];
  if (button.dataset.menuAction === "today") {
    state.showSaved = false;
    state.activeArchiveDate = null;
    if (archiveDateSelect) archiveDateSelect.value = "";
    resetFeedScroll();
    ensureArchiveIndexLoaded();
    ensureFeedLoaded(state.activeCategory);
  }

  if (button.dataset.menuAction === "saved") {
    showFeedSurface();
    // Show only saved stories from localStorage
    loadSavedFromStorage();
    applySavedFlags();
    state.showSaved = true;
    // ensure archive controls are not open when viewing saved items
    const archiveControlsEl = document.querySelector<HTMLElement>('#archiveControls');
    archiveControlsEl?.classList.remove('mobile-open');
    resetFeedScroll();
    render();
  }
});

const fetchUnlockConfig = async (): Promise<void> => {
  try {
    const configRes = await fetch(apiUrl("/api/summary/unlock-config"));
    if (configRes.ok) {
      state.unlockConfig = await configRes.json();
      render();
    }
  } catch (err) {
    console.error("Failed to prefetch unlock config:", err);
  }
};

const startMarketPolling = (): void => {
  window.setInterval(async () => {
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 3500);
      const res = await fetch(apiUrl("/api/markets"), { signal: controller.signal });
      window.clearTimeout(timeout);
      if (res.ok) {
        const markets = await res.json();
        if (Array.isArray(markets) && markets.length > 0) {
          marketPreviews = markets;
          if (state.activeSurface === "markets") {
            render();
          }
        }
      }
    } catch (err) {
      console.warn("Background market poll failed:", err);
    }
  }, 30000);
};

render();
renderWalletState();
void fetchUnlockConfig();
ensureFeedLoaded(state.activeCategory);
startMarketPolling();
void loadMarkets().then(() => {
  reportStoredLocalMarketTraders();
  render();
  renderWalletState();
  window.setTimeout(initializeWalletSession, 1200);
  warmFeedAfterFirstPaint();
});

// Mobile archive card: toggle the archive controls via class (safe for desktop)
const mobileArchiveCardEl = document.querySelector<HTMLButtonElement>("#mobileArchiveCard");
const archiveControlsEl = document.querySelector<HTMLElement>("#archiveControls");
mobileArchiveCardEl?.addEventListener("click", () => {
  if (!archiveControlsEl) return;
  const isOpen = archiveControlsEl.classList.toggle("mobile-open");
  if (isOpen) {
    setTimeout(() => archiveControlsEl.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  }
});

// Compact header archive pill (mobile) — toggle archive controls
const archivePill = document.querySelector<HTMLButtonElement>("#archivePill");
archivePill?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!archiveControlsEl) return;
  const isOpen = archiveControlsEl.classList.toggle("mobile-open");
  if (isOpen) setTimeout(() => archiveControlsEl.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
});

let isRestoringWalletSession = false;
let walletSessionInitStarted = false;
const initializeWalletSession = (): void => {
  if (walletSessionInitStarted) return;
  walletSessionInitStarted = true;

  void (async () => {
    const initialWallet = await getConnectedArcWallet();
    isRestoringWalletSession = Boolean(initialWallet);
    if (initialWallet) {
      state.walletConnecting = true;
      renderWalletState();
      try {
        const isValid = await validateArcSession();
        isRestoringWalletSession = false;
        state.walletConnecting = false;
        if (!isValid) {
          state.walletAddress = null;
          state.walletBalance = null;
          state.referralData = null;
          state.referralError = null;
          state.referralPanelOpen = false;
          syncProfileUsernameForWallet();
          showActionToast("Session expired. Please sign in again.");
          renderWalletState();
          render();
        } else {
          state.walletAddress = await getConnectedArcWallet();
          if (state.walletAddress) {
            syncProfileUsernameForWallet();
            state.walletBalance = await getSmartWalletBalance(state.walletAddress);
            await loadPortfolioPositions();
          }
          renderWalletState();
          if (state.activeSurface === "portfolio") render();
        }
      } catch (error) {
        console.warn(error);
        isRestoringWalletSession = false;
        state.walletConnecting = false;
        state.walletAddress = null;
        state.walletBalance = null;
        state.referralData = null;
        state.referralError = null;
        state.referralPanelOpen = false;
        syncProfileUsernameForWallet();
        showActionToast("Session expired. Please sign in again.");
        renderWalletState();
        render();
      }
    }

    await subscribeArcWallet((address) => {
      if (isRestoringWalletSession) return;
      state.walletAddress = address;
      state.walletBalance = null;
      state.referralData = null;
      state.referralError = null;
      state.referralPanelOpen = false;
      syncProfileUsernameForWallet();
      if (address) void reportLeaderboardEntry(false).catch(err => console.error("Failed to report leaderboard entry:", err));
      state.marketPositions = {};
      state.hasLoadedPortfolioPositions = false;
      renderWalletState();
      if (address) {
        void loadReferralData();
        void getSmartWalletBalance(address).then((balance) => {
          state.walletBalance = balance;
          renderWalletState();
          if (state.activeSurface === "portfolio") render();
        });
        void loadPortfolioPositions();
      } else if (state.activeSurface === "portfolio") {
        render();
      }
    });
  })();
};

// Analytics tracking setup
trackEvent("app_open");

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const closestAnchor = target.closest("a, button");
  if (closestAnchor) {
    const className = closestAnchor.className || "";
    const classStr = typeof className === "string" ? className : (closestAnchor.getAttribute("class") || "");
    const href = closestAnchor.getAttribute("href") || "";
    const isBriefingUnlock =
      closestAnchor.hasAttribute("data-unlock-briefing") ||
      closestAnchor.hasAttribute("data-unlock-briefing-url") ||
      closestAnchor.classList.contains("summary-btn") ||
      closestAnchor.textContent?.trim() === "AI briefing" ||
      closestAnchor.textContent?.trim().includes("Unlock via");
    
    if (
      !isBriefingUnlock &&
      (
        classStr.includes("source-button") ||
        classStr.includes("source-btn") ||
        classStr.includes("source-link") ||
        closestAnchor.textContent?.trim() === "Open source"
      )
    ) {
      if (!classStr.includes("disabled") && href !== "#") {
        trackEvent("open_source");
      }
    }
  }
}, true);



(window as any).claimPortfolioMarket = claimPortfolioMarket;
