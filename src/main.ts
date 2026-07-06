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

function trackEvent(event: string) {
  fetch(apiUrl("/api/analytics"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event })
  }).catch((err) => console.error("Failed to track event:", err));
}

const state: {
  activeSurface: "feed" | "markets" | "portfolio" | "leaderboard";
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
} = {
  activeSurface: "markets",
  profileUsername: null,
  selectedMarketId: null,
  marketOrderMode: "buy",
  marketTradeSide: "yes",
  marketTradeOptionId: null,
  marketTradeAmount: 5,
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
  walletBalance: null,
  activeCategory: "Sports",
  stories: [],
  isLoading: false,
  selectedStoryId: null,
  aiSummaries: {},
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
  unlockConfig: null,
  newsSearchQuery: "",
  briefingStatusByUrl: {},
  claimingMarketIds: {}
};

let selectedLeaderboardDivision: number | null = null;
let selectedLeaderboardView: "division" | "global" = "global";
let seasonTimerInterval: any = null;
let archiveIndexRequested = false;
let feedWarmupRequested = false;
const pendingReferralCode = new URLSearchParams(window.location.search).get("ref") || localStorage.getItem("siftle_pending_referral_code") || "";
if (pendingReferralCode) localStorage.setItem("siftle_pending_referral_code", pendingReferralCode.trim().toUpperCase());

interface MarketPreview {
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
    if (market?.id) merged.set(market.id, { ...(merged.get(market.id) || {}), ...market });
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
      state.walletAddress = account;
      state.referralData = null;
      state.referralError = null;
      state.referralPanelOpen = false;
      syncProfileUsernameForWallet();
      state.walletBalance = await readArcUsdcBalance(account);
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
    if (!(state.activeCategory === "All" || story.category === state.activeCategory)) return false;

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
    .replace(/\s+/g, " ")
    .trim();

  if (looksLikeBadSummary(summary)) return "";
  return limitSummaryWords(summary);
};

const safeStorySummary = (story: NewsStory, preferred?: string): string =>
  cleanSummaryText(preferred || "") || cleanSummaryText(story.summary) || story.headline;

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
        .map(b => b.trim())
        .filter(Boolean);

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
    const downloadIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;

    html += `
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn" onclick="
          const container = event.currentTarget.closest('.detail-summary') || event.currentTarget.closest('.thread-item') || event.currentTarget.closest('.market-thread-update');
          const captureArea = container ? container.querySelector('.briefing-capture-area') : null;
          if (!captureArea) return;
          
          if (window.html2canvas) {
            const isLight = document.documentElement.dataset.theme === 'light';
            window.html2canvas(captureArea, {
              backgroundColor: isLight ? '#ffffff' : '#111827',
              scale: 1.5,
              logging: false,
              useCORS: true
            }).then(canvas => {
              const link = document.createElement('a');
              link.download = 'siftle-briefing.png';
              link.href = canvas.toDataURL();
              link.click();
              if (window.showActionToast) {
                window.showActionToast('Briefing card image downloaded!');
              }
            });
          }
        ">
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

const isBriefingUnlocked = (story: BriefingTarget): boolean => Boolean(getBriefingUnlockToken(story));

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

  return `
    <div class="briefing-section">
      ${renderBriefingStatusNote(story)}
      ${isUnlocking
        ? `
          ${renderSummarySkeleton()}
        `
        : `
          <p class="briefing-text">
            ${isX402
              ? `Pay a <strong>${price}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`
              : `Pay <strong>${price}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`
            }
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(story.sourceUrl)}">
            ${isX402 ? "Unlock via Circle x402" : "AI briefing"}
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
    showActionToast("Please sign in first.");
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

    const txHash = await payAiBriefingUnlock(
      config.treasuryAddress,
      Number(config.amountUsdc) || 0.05,
      (status) => {
        if (menuStatus) menuStatus.textContent = status;
        state.briefingStatusByUrl[story.sourceUrl] = status;
        render();
      },
      { sourceUrl: story.sourceUrl, topic: story.headline }
    );

    state.briefingStatusByUrl[story.sourceUrl] = config.x402Enabled
      ? `Payment successful. Loading AI briefing paid with ${config.amountUsdc} testnet USDC through x402.`
      : `Payment successful. Loading AI briefing paid with ${config.amountUsdc} testnet USDC.`;
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
    const bonusPoints = Number(unlockData?.bonus?.points) || 0;
    if (bonusPoints > 0) {
      void reportLeaderboardEntry(false).catch(err => console.error("Failed to refresh leaderboard bonus:", err));
    }
    await loadStorySummary(story);
  } catch (error) {
    trackEvent("ai_unlock_failed");
    delete state.briefingStatusByUrl[story.sourceUrl];
    showActionToast(error instanceof Error ? error.message : "AI briefing failed");
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
    render();
    return;
  }

  state.loadingSummaryUrl = story.sourceUrl;
  state.briefingStatusByUrl[story.sourceUrl] = "Generating briefing...";
  render();

  try {
    const response = await fetch(apiUrl("/api/summary"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...story,
        walletAddress: state.walletAddress,
        unlockToken: getBriefingUnlockToken(story)
      })
    });

    if (!response.ok) {
      if (response.status === 402) {
        clearBriefingUnlockToken(story);
        delete state.aiSummaries[story.sourceUrl];
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
    state.briefingStatusByUrl[story.sourceUrl] = "AI briefing ready.";
    if (menuStatus && data.provider) {
      menuStatus.textContent = data.provider === "0g" ? "Summary generated by 0G" : `Summary loaded from ${data.provider}`;
    }
  } catch (error) {
    console.warn(error);
    delete state.aiSummaries[story.sourceUrl];
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
  window.history.pushState({}, "", "#feed");
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
    const storyMatch = window.location.hash.match(/^#story-(\d+)$/);
    const threadMatch = window.location.hash.match(/^#thread-(\d+)$/);
    const story = storyMatch ? state.stories.find((item) => item.id === Number(storyMatch[1])) : undefined;
    const threadStory = threadMatch ? state.stories.find((item) => item.id === Number(threadMatch[1])) : undefined;
    const wasInDetail = state.selectedStoryId !== null || state.selectedThreadUrl !== null;
    state.selectedStoryId = story?.id ?? null;
    state.selectedThreadUrl = threadStory?.sourceUrl ?? null;
    state.activeThread = null;
    render();
    if (story) void loadStorySummary(story);
    if (threadStory) void loadStoryThread(threadStory);
    if (!story && !threadStory && wasInDetail) {
      requestAnimationFrame(() => window.scrollTo({ top: state.feedScrollY, behavior: "auto" }));
    }
    return;
  }

  // Fallback default: Markets first
  state.activeSurface = "markets";
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

const renderCategories = (): void => {
  if (!categoryTabs) return;

  categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button class="category-tab ${category === state.activeCategory ? "active" : ""}" type="button" data-category="${category}">
          ${getCategoryLabel(category)}
        </button>
      `
    )
    .join("");
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
  Boolean(market.optionMarket && getMarketOptions(market).length > 1);

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

  return { min: 5, max: 10, fallback: 5 };
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

const LEADERBOARD_CACHE_PREFIX = "siftle_leaderboard_cache_v3_";

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

const stabilizeLeaderboardPlayers = (freshPlayers: any[], cachedPlayers: any[] = [], isGlobal = false): any[] => {
  const cacheByWallet = new Map(cachedPlayers.map((player) => [String(player?.username || "").toLowerCase(), player]));
  const seen = new Set<string>();
  const merged = freshPlayers.map((player) => {
    const wallet = String(player?.username || "").toLowerCase();
    seen.add(wallet);
    const cached = cacheByWallet.get(wallet);
    return cached && (Number(cached.points) || 0) > (Number(player.points) || 0)
      ? { ...player, ...cached }
      : player;
  });

  cachedPlayers.forEach((player) => {
    const wallet = String(player?.username || "").toLowerCase();
    if (wallet && !seen.has(wallet) && (Number(player?.points) || 0) > 0) merged.push(player);
  });

  const sorted = mergeLeaderboardDuplicates(merged).slice().sort(compareLeaderboardLikePlayers);
  return isGlobal
    ? sorted.map((player, index) => ({ ...player, globalRank: index + 1 }))
    : sorted;
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
    state.marketSnapshots[market.id] = {
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
    };
    state.checkedMarketSnapshots[market.id] = true;
    return;
  }

  state.loadingMarketSnapshots[market.id] = true;
  try {
    if (isOptionMarket(market) && state.walletAddress) {
      const { position, snapshot } = await readArcMarketState(marketAddress, state.walletAddress);
      state.marketPositions[market.id] = position;
      state.marketSnapshots[market.id] = snapshot;
    } else {
      state.marketSnapshots[market.id] = await readArcMarketSnapshot(marketAddress);
    }
  } catch (error) {
    console.warn(error);
  } finally {
    state.checkedMarketSnapshots[market.id] = true;
    state.loadingMarketSnapshots[market.id] = false;
    if (state.activeSurface === "markets") render();
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
    if (state.walletAddress) state.walletBalance = await readArcUsdcBalance(state.walletAddress);
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

const renderStories = (): void => {
  if (!storyList) return;

  const stories = getFilteredStories();
  storyList.hidden = Boolean(state.selectedStoryId || state.selectedThreadUrl);

  if (state.isLoading) {
    storyList.innerHTML = renderStoryListSkeleton(4);
    return;
  }

  const feedUnlockPrice = Number(state.unlockConfig?.amountUsdc) || 0.001;
  const queryLabel = escapeHtml(state.newsSearchQuery.trim());
  const helperText = queryLabel
    ? `${stories.length} matches for "${queryLabel}".`
    : `Search saved news by keyword. Unlock an AI briefing with a ${feedUnlockPrice} testnet USDC nanopayment to get what happened, key points, and takeaway without opening the full article.`;
  const feedHeader = `
    <section class="news-feed-search-shell">
      <div class="news-feed-search-copy">
        <p>${helperText}</p>
      </div>
      <label class="news-feed-search-bar" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search all saved news by keyword" value="${escapeHtml(state.newsSearchQuery)}" autocomplete="off" />
      </label>
    </section>
  `;

  if (stories.length === 0) {
    const fallbackStories = state.showSaved ? [] : state.stories;
    if (fallbackStories.length > 0) {
      storyList.innerHTML = feedHeader + fallbackStories
        .map(
          (story) => `
        <article class="story-card" data-story-id="${story.id}" role="button" tabindex="0" aria-label="Open summary for ${story.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${story.source}</strong>
                <span>${getStoryTimeLabel(story)} - ${story.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${story.sourceUrl}" aria-pressed="${story.saved ? "true" : "false"}" aria-label="${story.saved ? "Remove saved story" : "Save story"}">
                ${renderBookmarkIcon()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${story.id}" aria-expanded="${state.activeShareStoryId === story.id}">
                  ${renderExportIcon()}
                </button>
                <div class="share-menu" ${state.activeShareStoryId === story.id ? "" : "hidden"}>
                  <button type="button" data-export-action="save" data-export-story-id="${story.id}">Save image</button>
                  <button type="button" data-export-action="share" data-export-story-id="${story.id}">Share</button>
                </div>
              </div>
            </div>
          </div>

          <div class="story-image-frame desktop-only" aria-hidden="true">
            <img src="${story.imageUrl}" alt="" loading="lazy" />
          </div>

          <div class="story-copy desktop-only">
            <span class="category-chip ${story.category}">${displayCategory(story.category)}</span>
            <h2>${story.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${renderDesktopThreadButton(story)}
            <button class="card-source-button summary-btn" type="button">AI briefing</button>
            ${/example\\.com/i.test(story.sourceUrl)
              ? `<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
              : `<a class="card-source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${story.category}">${displayCategory(story.category)}</span>
                  <div class="mobile-icons">
                    <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${story.sourceUrl}" aria-pressed="${story.saved ? "true" : "false"}" aria-label="Save story">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${story.id}" aria-label="Save image">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                    </button>
                  </div>
                </div>
                <h2>${story.headline}</h2>
                <span class="mobile-card-time">${getStoryTimeLabel(story)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${story.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${renderMobileThreadButton(story)}
              ${/example\\.com/i.test(story.sourceUrl)
                ? `<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
                : `<a class="mobile-action-btn source-btn" href="${story.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `
        )
        .join("");
      return;
    }
    storyList.innerHTML = feedHeader + '<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>';
    return;
  }

  storyList.innerHTML = feedHeader + stories
    .map(
      (story) => `
        <article class="story-card" data-story-id="${story.id}" role="button" tabindex="0" aria-label="Open summary for ${story.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${story.source}</strong>
                <span>${getStoryTimeLabel(story)} - ${story.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${story.sourceUrl}" aria-pressed="${story.saved ? "true" : "false"}" aria-label="${story.saved ? "Remove saved story" : "Save story"}">
                ${renderBookmarkIcon()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${story.id}" aria-expanded="${state.activeShareStoryId === story.id}">
                  ${renderExportIcon()}
                </button>
                <div class="share-menu" ${state.activeShareStoryId === story.id ? "" : "hidden"}>
                  <button type="button" data-export-action="save" data-export-story-id="${story.id}">Save image</button>
                  <button type="button" data-export-action="share" data-export-story-id="${story.id}">Share</button>
                </div>
              </div>
            </div>
          </div>

          <div class="story-image-frame desktop-only" aria-hidden="true">
            <img src="${story.imageUrl}" alt="" loading="lazy" />
          </div>

          <div class="story-copy desktop-only">
            <span class="category-chip ${story.category}">${displayCategory(story.category)}</span>
            <h2>${story.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${renderDesktopThreadButton(story)}
            <button class="card-source-button summary-btn" type="button">AI briefing</button>
            ${/example\\.com/i.test(story.sourceUrl)
              ? `<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
              : `<a class="card-source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${story.category}">${displayCategory(story.category)}</span>
                  <div class="mobile-icons">
                    <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${story.sourceUrl}" aria-pressed="${story.saved ? "true" : "false"}" aria-label="Save story">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${story.id}" aria-label="Save image">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                    </button>
                  </div>
                </div>
                <h2>${story.headline}</h2>
                <span class="mobile-card-time">${getStoryTimeLabel(story)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${story.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${renderMobileThreadButton(story)}
              ${/example\\.com/i.test(story.sourceUrl)
                ? `<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
                : `<a class="mobile-action-btn source-btn" href="${story.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `
    )
    .join("");
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

const decodeHtmlEntities = (text: string): string => {
  if (!text) return "";
  return text
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&#34;/g, '"')
    .replace(/&#38;/g, '&')
    .replace(/&#60;/g, '<')
    .replace(/&#62;/g, '>')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '...')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)));
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
    if (state.walletAddress) state.walletBalance = await readArcUsdcBalance(state.walletAddress);
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
        <a class="source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `;
};

const renderMarketCard = (market: MarketPreview): string => {
  const snapshot = state.marketSnapshots[market.id];
  const marketAddress = getMarketAddress(market);
  const optionMarket = isOptionMarket(market);
  const optionCount = getMarketOptions(market).length;
  const totalMoney = snapshot?.volumeUsdc ?? (Number((market as MarketPreview & { volumeUsdc?: number }).volumeUsdc) || 0);

  const yesPrice = snapshot?.yesPriceCents;
  const displayProbability = yesPrice ?? market.probability;
  const probabilityLabel = optionMarket ? `${optionCount}` : `${displayProbability}%`;
  const shareLabel =
    yesPrice === undefined ? (marketAddress ? "Loading Arc pools" : "Arc setup required") : `Yes ${yesPrice}¢ · No ${100 - yesPrice}¢`;
  const displayShareLabel = yesPrice === undefined
    ? `Yes ${market.probability}c - No ${100 - market.probability}c`
    : shareLabel;
  const view = getMarketView(market);
  const lockLabel = market.timeframe === "Daily" ? getDailyTradeLockLabel(market, snapshot) : market.closes;

  return `
    <button class="market-card" type="button" data-market-id="${market.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${market.category}">${displayCategory(market.category)}</span>
          <span class="timeframe-chip ${market.timeframe}">${market.timeframe === "Sagas" ? "Sagas" : market.timeframe}</span>
        </div>
        <span class="market-card-updates">${view.evidence.length} updates</span>
      </div>
      <div class="market-card-body" style="display: flex; gap: 16px; align-items: flex-start; justify-content: space-between; width: 100%; text-align: left; margin: 4px 0;">
        <div class="market-card-text" style="flex: 1; min-width: 0;">
          <h2>${market.question}</h2>
        </div>
        ${view.imageUrl ? `
        <div class="market-card-image-frame" style="width: 72px; height: 72px; min-width: 72px; border-radius: 12px; overflow: hidden; border: 1px solid var(--market-border); flex-shrink: 0;">
          <img src="${view.imageUrl}" alt="" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        ` : ""}
      </div>
      <div class="market-probability-row">
        <strong>${probabilityLabel}</strong>
        <span>${optionMarket ? "possible outcomes" : marketAddress ? "market probability" : "pending deployment"}</span>
        <span class="market-share-prices">${optionMarket ? "Pick exactly one" : displayShareLabel}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${optionMarket ? 100 : displayProbability}%"></span></div>
      <div class="market-volume">
        <span>Total vol</span>
        <strong>$${formatMoney(totalMoney)}</strong>
      </div>
      <div class="market-card-footer">
        <span>${view.evidence.length} related news</span>
        <span>${market.timeframe === "Daily" ? `Locks ${lockLabel}` : `Closes ${lockLabel}`}</span>
      </div>
    </button>
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
  
  return `🚨 *Siftle Market Alert* 🚨\n\n*Market:* ${market.question}\n🟢 *Yes:* ${yesPrice}¢ | 🔴 *No:* ${noPrice}¢\n\n*Latest Development:* "${latestTitle}"\n\nTrade and discuss here: ${currentUrl}`;
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
    ? "$5-$10 USDC"
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
    const optionPool = snapshot?.optionPools?.[position.optionId || ""] || 0;
    const totalPool = snapshot?.volumeUsdc || 0;
    const payout = position.optionSharesUsdc && optionPool > 0 ? (position.optionSharesUsdc / optionPool) * totalPool : 0;
    positionHtml = `
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${escapeHtml(position.optionLabel || "Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${formatMoney(payout || position.optionSharesUsdc || 0)}</strong>
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
              <span>Volume</span>
              <strong>${snapshot ? `$${Math.round(snapshot.volumeUsdc).toLocaleString()}` : market.volume}</strong>
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
            : `<span>Yes <strong>${yesPriceLabel}</strong></span><span>No <strong>${noPriceLabel}</strong></span>`}
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
                const poolAmount = snapshot?.optionPools?.[option.id] || 0;
                const active = state.marketTradeOptionId === option.id || position.optionId === option.id;
                const disabled = marketResolved || marketTradeLocked || state.marketOrderMode === "sell" || hasOptionPick || !positionReady;
                return `
                  <button type="button" class="market-side option ${active ? "active" : ""} ${disabled ? "disabled" : ""}" data-market-option-id="${escapeHtml(option.id)}" ${disabled ? "disabled" : ""}>
                    <span>${escapeHtml(option.label)}</span>
                    <strong>$${formatMoney(poolAmount)}</strong>
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
                  <strong>${yesPriceLabel}</strong>
                  ${canTradeYes ? "" : `<small>${yesDisabledLabel}</small>`}
                </button>
                <button type="button" class="market-side no ${state.marketTradeSide === "no" ? "active" : ""} ${canTradeNo ? "" : "disabled"}" data-market-trade-side="no" ${canTradeNo ? "" : "disabled"} title="${canTradeNo ? "No" : noDisabledLabel}">
                  <span>No</span>
                  <strong>${noPriceLabel}</strong>
                  ${canTradeNo ? "" : `<small>${noDisabledLabel}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${amountHint}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${amountBounds.min.toFixed(2)}" max="${Math.max(amountBounds.min, amountBounds.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${amount}" data-market-amount ${marketResolved || marketTradeLocked ? "disabled" : ""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>${optionMarket ? "Your entry" : state.marketOrderMode === "buy" ? "Projected payout" : "Exit amount"}</span>
            <strong>$${formatMoney(projectedPayout)}</strong>
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

const renderMarkets = (): void => {
  if (!storyList || !storyDetail) return;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.add("active");
  topNewsButton?.classList.remove("active");
  topPortfolioButton?.classList.remove("active");
  window.setTimeout(() => {
    if (state.activeSurface === "markets") {
      marketPreviews.forEach((market) => void loadMarketEvidence(market));
    }
  }, 750);

  if (state.selectedMarketId) {
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    if (market) {
      renderMarketDetail(market);
      return;
    }
    // If hash points to a removed market, reset to list view.
    state.selectedMarketId = null;
    if (window.location.hash.startsWith("#market-")) {
      window.history.replaceState({}, "", "#markets");
    }
    return;
  }

  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyDetail.classList.remove("fullscreen");
  storyList.hidden = false;
  storyList.classList.add("markets-list");

  const visibleMarkets = marketPreviews;

  const timeframes: ("All" | "Daily" | "Weekly" | "Sagas")[] = ["All", "Daily", "Weekly", "Sagas"];
  const timeframeTabsHtml = `
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${timeframes.map((tf) => {
        const isActive = state.activeMarketTimeframe === tf;
        const count = tf === "All" 
          ? visibleMarkets.length 
          : visibleMarkets.filter(m => m.timeframe === tf).length;
        const label = tf === "Sagas" ? "Sagas" : tf;
        return `
          <button class="timeframe-tab-btn ${isActive ? 'active' : ''}" type="button" data-timeframe="${tf}">
            <span>${label}</span>
            <span class="timeframe-tab-count">${count}</span>
          </button>
        `;
      }).join("")}
    </nav>
  `;

  if (state.loadingMarkets && marketPreviews.length === 0) {
    storyList.innerHTML = `
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${ARC_TESTNET_FAUCET}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
        </div>
        <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
          Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
        </p>
      </header>
      ${timeframeTabsHtml}
      <div class="markets-container">
        <section class="markets-grid" aria-label="Loading prediction markets">
          ${Array.from({ length: 3 }).map(() => `
            <article class="market-card skeleton-market-card">
              <div class="skeleton skeleton-line sm"></div>
              <div class="skeleton skeleton-line xl" style="height: 22px;"></div>
              <div class="skeleton skeleton-line lg"></div>
              <div class="skeleton skeleton-line md"></div>
              <div class="skeleton skeleton-line xl" style="height: 8px; margin-top: 18px;"></div>
            </article>
          `).join("")}
        </section>
      </div>
    `;
    return;
  }

  let marketsGridHtml = "";
  
  const renderTimeframeSection = (title: string, subtitle: string, markets: MarketPreview[]) => {
    if (markets.length === 0) return "";
    return `
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${title}</h2>
            <span class="timeframe-section-subtitle">${subtitle}</span>
          </div>
          <span class="timeframe-section-count-badge">${markets.length} ${markets.length === 1 ? 'market' : 'markets'}</span>
        </div>
        <section class="markets-grid" aria-label="${title} prediction markets">
          ${markets.map(renderMarketCard).join("")}
        </section>
      </div>
    `;
  };

  if (state.activeMarketTimeframe === "All") {
    const dailyMarkets = visibleMarkets.filter(m => m.timeframe === "Daily");
    const weeklyMarkets = visibleMarkets.filter(m => m.timeframe === "Weekly");
    const sagasMarkets = visibleMarkets.filter(m => m.timeframe === "Sagas");
    
    marketsGridHtml = `
      ${renderTimeframeSection("Daily", "Ends in a day or two", dailyMarkets)}
      ${renderTimeframeSection("Weekly", "Ends in a week", weeklyMarkets)}
      ${renderTimeframeSection("Sagas (Long-term)", "Narratives & futures", sagasMarkets)}
    `;
  } else {
    const filteredMarkets = visibleMarkets.filter(m => m.timeframe === state.activeMarketTimeframe);
    let title = state.activeMarketTimeframe as string;
    let subtitle = "";
    if (state.activeMarketTimeframe === "Daily") subtitle = "Ends in a day or two";
    else if (state.activeMarketTimeframe === "Weekly") subtitle = "Ends in a week";
    else if (state.activeMarketTimeframe === "Sagas") {
      title = "Sagas (Long-term)";
      subtitle = "Narratives & futures";
    }
    
    marketsGridHtml = `
      ${renderTimeframeSection(title, subtitle, filteredMarkets)}
    `;
  }

  storyList.innerHTML = `
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${ARC_TESTNET_FAUCET}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${timeframeTabsHtml}
    <div class="markets-container">
      ${marketsGridHtml || `<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `;
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
  storyList.classList.add("markets-list");
  const score = state.walletAddress && state.hasLoadedPortfolioPositions ? calculateLeaderboardScore() : null;

  // Sync user score with backend
  if (state.walletAddress && score) {
    fetch(apiUrl("/api/leaderboard/report"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        walletAddress: state.walletAddress,
        points: score.points,
        status: score.status,
        username: state.profileUsername || ""
      })
    }).catch(err => console.error("Failed to report user score:", err));
  }

  // Clear any existing timer interval
  if (seasonTimerInterval) {
    clearInterval(seasonTimerInterval);
    seasonTimerInterval = null;
  }

  storyList.innerHTML = `
    <section class="leaderboard-surface">
      <header class="leaderboard-header">
        <span>Siftle Seasonal Arena</span>
        <h1>Seasonal Leaderboard</h1>
        <p>Compete with other traders. Points are earned from Daily markets: +100 pts for finishing on the winning side of resolved markets, or +50 pts if you switched sides before resolution.</p>
      </header>

      <div class="leaderboard-faucet-box">
        <div class="faucet-box-details">
          <h3>Claim Test USDC</h3>
          <p>Get test USDC to trade daily prediction markets and climb the seasonal ranks.</p>
        </div>
        <button id="faucetClaimButton" class="faucet-claim-btn" type="button">Claim Faucet</button>
      </div>

      <div class="season-countdown-banner">
        <span class="countdown-label">Season 1 (World Cup)</span>
        <span id="seasonTimer" class="countdown-value">Loading...</span>
      </div>

      <div class="leaderboard-mode-tabs" role="tablist" aria-label="Leaderboard views">
        <button class="leaderboard-mode-tab ${selectedLeaderboardView === "global" ? "active" : ""}" type="button" data-leaderboard-view="global">Global</button>
        <button class="leaderboard-mode-tab ${selectedLeaderboardView === "division" ? "active" : ""}" type="button" data-leaderboard-view="division">Division</button>
      </div>

      <div class="global-prize-box" id="globalPrizeBox" ${selectedLeaderboardView === "global" ? "" : "hidden"}>
        <div>
          <span>Global Season Race</span>
          <strong>Top 10 share a 150 USDC prize pool</strong>
        </div>
        <div>
          <span>Next season</span>
          <strong>Top 6 to Division 1, next 6 to Division 2</strong>
        </div>
      </div>

      <div class="division-title-container" id="divisionControls" ${selectedLeaderboardView === "division" ? "" : "hidden"}>
        <div class="division-title-left" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap !important; flex-shrink: 0 !important;">
          <h2 id="divisionTitleText" style="margin: 0; white-space: nowrap !important;">Division 1</h2>
          <button class="how-it-works-btn" id="howItWorksBtn" type="button" style="background: rgba(255,255,255,0.06) !important; border: 1px solid #1e1f2b !important; color: #ffffff !important; border-radius: 6px !important; padding: 4px 10px !important; font-size: 0.82rem !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; white-space: nowrap !important; flex-shrink: 0 !important;">How it works</button>
        </div>
        <select id="divisionSelector" class="division-select-menu">
          <option value="1">Division 1</option>
        </select>
      </div>

      <div class="global-title-container" id="globalControls" ${selectedLeaderboardView === "global" ? "" : "hidden"}>
        <div>
          <h2>Global Leaderboard</h2>
          <p>Everyone ranked by points, wins, fewer losses, then earliest market activity.</p>
        </div>
      </div>

      <div class="leaderboard-list" id="leaderboardListContainer" role="list">
        <!-- Loader Skeleton -->
        <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
          ${Array.from({ length: 6 }).map(() => `
            <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
              <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
                <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
                <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
              </div>
              <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- How It Works Dropdown Modal -->
    <div id="howItWorksModal" class="rules-modal-overlay">
      <div class="rules-modal-content">
        <div class="rules-modal-header">
          <h2>Seasonal Arena Rules</h2>
          <button id="closeRulesModalBtn" class="close-modal-btn" type="button">&times;</button>
        </div>
        <div class="rules-modal-body">
          <div class="rules-section">
            <h3>🏆 6-Player Divisions</h3>
            <p>You are assigned to a division of 6 players. You only compete against the 5 opponents in your division.</p>
          </div>
          <div class="rules-section">
            <h3>⚡ Daily Markets Only</h3>
            <p>Points are only accumulated on Daily Markets (which resolve in 24–72 hours).</p>
          </div>
          <div class="rules-section">
            <h3>📈 Scoring System</h3>
            <p><strong>+100 pts</strong> for finishing on the winning side.<br>
            <strong>+50 pts</strong> if you switched sides and ultimately finished on the winning side.</p>
          </div>
          <div class="rules-section">
            <h3>🔄 Division Rebalancing</h3>
            <p>At the end of each season, divisions are dynamically restructured. You are matched and regrouped into a new 6-player league with competitors who finished the season with similar point totals. Depending on your performance, you may face higher or lower tier matchups next season to keep the competition balanced, fair, and fun.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const startSeasonTimer = (seasonEndsAt = "2026-07-19T23:59:59.000Z") => {
    const seasonTimer = document.getElementById("seasonTimer");
    if (seasonTimerInterval) clearInterval(seasonTimerInterval);
    const updateTimer = () => {
      const targetTime = new Date(seasonEndsAt).getTime();
      const diff = targetTime - new Date().getTime();
      if (diff <= 0) {
        if (seasonTimer) seasonTimer.innerText = "Season Finished!";
        if (seasonTimerInterval) clearInterval(seasonTimerInterval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      if (seasonTimer) seasonTimer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    updateTimer();
    seasonTimerInterval = setInterval(updateTimer, 1000);
  };

  startSeasonTimer();

  const renderGlobalLeaderboardRows = (players: any[]) => players.map((player: any, idx: number) => {
    const rank = Number(player.globalRank) || idx + 1;
    const wallet = String(player.username || "");
    const isUser = Boolean(state.walletAddress && wallet.toLowerCase() === state.walletAddress.toLowerCase());
    const resolvedUsername = isUser && state.profileUsername
      ? state.profileUsername
      : (player.displayName || wallet);
    const displayName = isUser
      ? `${state.profileUsername ? resolvedUsername : shortenAddress(wallet)} (You)`
      : (resolvedUsername.startsWith("0x") && resolvedUsername.length === 42 ? shortenAddress(resolvedUsername) : resolvedUsername);
    const safeDisplayName = escapeHtml(displayName);
    const playerStatus = escapeHtml(formatLeaderboardStatus(player.status));
    const nextSeason = player.nextSeasonDivision ? `Division ${player.nextSeasonDivision}` : "Qualify";
    const zoneClass = rank <= 10 ? "promotion-zone" : "safety-zone";
    const arrowHtml = rank <= 12
      ? '<span class="leaderboard-zone-arrow up">▲</span>'
      : '<span class="leaderboard-zone-arrow invisible">•</span>';

    return `
      <div class="leaderboard-row global-row ${isUser ? 'user-highlight' : ''} ${zoneClass}" role="listitem">
        <div class="leaderboard-row-left">
          ${arrowHtml}
          <span class="leaderboard-rank rank-${rank}">${rank}</span>
          <span class="leaderboard-username">${safeDisplayName}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(player.points) || 0} pts</strong>
          <span>${player.prizeEligible ? "Prize eligible" : "Season rank"} · ${escapeHtml(nextSeason)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${playerStatus}</span>
        </div>
      </div>
    `;
  }).join("");

  const renderDivisionLeaderboardRows = (players: any[]) => players.map((player: any, idx: number) => {
    const rank = idx + 1;
    const wallet = String(player.username || "");
    const isUser = Boolean(state.walletAddress && wallet.toLowerCase() === state.walletAddress.toLowerCase());
    const resolvedUsername = isUser && state.profileUsername
      ? state.profileUsername
      : (player.displayName || wallet);
    const playerStatus = escapeHtml(formatLeaderboardStatus(player.status));
    const displayName = isUser
      ? `${state.profileUsername ? resolvedUsername : shortenAddress(wallet)} (You)`
      : (resolvedUsername.startsWith("0x") && resolvedUsername.length === 42 ? shortenAddress(resolvedUsername) : resolvedUsername);
    const safeDisplayName = escapeHtml(displayName);

    let zoneClass = "safety-zone";
    let arrowHtml = '<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">•</span>';
    if (rank <= 2) {
      zoneClass = "promotion-zone";
      arrowHtml = '<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">▲</span>';
    } else if (rank >= 5) {
      zoneClass = "relegation-zone";
      arrowHtml = '<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">▼</span>';
    }

    return `
      <div class="leaderboard-row ${isUser ? 'user-highlight' : ''} ${zoneClass}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${arrowHtml}
          <span class="leaderboard-rank rank-${rank}" style="flex-shrink: 0; margin-right: 4px;">${rank}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${safeDisplayName}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(player.points) || 0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${playerStatus}</span>
        </div>
      </div>
    `;
  }).join("");

  const setLeaderboardView = (view: "division" | "global") => {
    selectedLeaderboardView = view;
    document.querySelectorAll<HTMLElement>("[data-leaderboard-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.leaderboardView === view);
    });
    document.getElementById("divisionControls")?.toggleAttribute("hidden", view !== "division");
    document.getElementById("globalControls")?.toggleAttribute("hidden", view !== "global");
    document.getElementById("globalPrizeBox")?.toggleAttribute("hidden", view !== "global");
  };

  const renderLeaderboardSkeleton = (rows: number) => {
    const listContainer = document.getElementById("leaderboardListContainer");
    if (!listContainer) return;
    listContainer.innerHTML = `
      <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        ${Array.from({ length: rows }).map(() => `
          <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
            <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
              <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
            <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        `).join("")}
      </div>
    `;
  };

  const fetchAndRenderGlobal = () => {
    setLeaderboardView("global");
    const listContainer = document.getElementById("leaderboardListContainer");
    const cacheKey = "global";
    const cached = getLeaderboardCache(cacheKey);
    if (cached && listContainer) {
      listContainer.innerHTML = renderLeaderboardSyncNote() + renderGlobalLeaderboardRows(cached.players);
      if (cached.seasonEndsAt) startSeasonTimer(cached.seasonEndsAt);
    } else {
      renderLeaderboardSkeleton(10);
    }
    const params = new URLSearchParams();
    if (state.walletAddress) params.set("walletAddress", state.walletAddress);
    const query = params.toString();

    fetch(apiUrl(`/api/leaderboard/global${query ? `?${query}` : ""}`))
      .then(res => res.json())
      .then((data: any) => {
        const players = stabilizeLeaderboardPlayers(data.players || [], cached?.players || [], true);
        if (listContainer) {
          listContainer.innerHTML = players.length === 0
            ? `<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`
            : renderGlobalLeaderboardRows(players);
        }

        setLeaderboardCache(cacheKey, { players, seasonEndsAt: data.seasonEndsAt });
        startSeasonTimer(data.seasonEndsAt);
      })
      .catch(err => {
        console.error("Failed to load global leaderboard:", err);
        if (listContainer) {
          listContainer.innerHTML = `<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`;
        }
      });
  };

  const fetchAndRenderDivision = (targetDivNum?: number) => {
    setLeaderboardView("division");
    const listContainer = document.getElementById("leaderboardListContainer");
    const cacheKey = `division_${targetDivNum || selectedLeaderboardDivision || "current"}`;
    const cached = getLeaderboardCache(cacheKey);
    if (cached && listContainer) {
      listContainer.innerHTML = renderLeaderboardSyncNote() + renderDivisionLeaderboardRows(cached.players);
      if (cached.divisionNumber) selectedLeaderboardDivision = cached.divisionNumber;
      if (cached.seasonEndsAt) startSeasonTimer(cached.seasonEndsAt);
    } else if (listContainer && targetDivNum !== undefined) {
      listContainer.innerHTML = `
        <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
          ${Array.from({ length: 6 }).map(() => `
            <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
              <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
                <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
                <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
              </div>
              <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
          `).join("")}
        </div>
      `;
    }

    const params = new URLSearchParams();
    if (state.walletAddress) params.set("walletAddress", state.walletAddress);
    if (targetDivNum) params.set("division", String(targetDivNum));
    const query = params.toString();

    fetch(apiUrl(`/api/leaderboard/division${query ? `?${query}` : ""}`))
      .then(res => res.json())
      .then((data: any) => {
        const divisionNumber = data.divisionNumber || 1;
        const players = stabilizeLeaderboardPlayers(data.players || [], cached?.players || [], false);
        const totalDivisions = data.totalDivisions || 1;
        const seasonEndsAt = data.seasonEndsAt;

        selectedLeaderboardDivision = divisionNumber;

        const divisionTitleText = document.getElementById("divisionTitleText");
        if (divisionTitleText) divisionTitleText.innerText = `Division ${divisionNumber}`;

        const divisionSelector = document.getElementById("divisionSelector") as HTMLSelectElement | null;
        if (divisionSelector) {
          divisionSelector.innerHTML = Array.from({ length: totalDivisions }, (_, i) => i + 1).map(divNum => `
            <option value="${divNum}" ${divNum === divisionNumber ? 'selected' : ''}>Division ${divNum}</option>
          `).join("");
        }

        if (listContainer) {
          if (players.length === 0) {
            listContainer.innerHTML = `<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`;
          } else {
            listContainer.innerHTML = players.map((player: any, idx: number) => {
              const rank = idx + 1;
              const isUser = state.walletAddress && player.username.toLowerCase() === state.walletAddress.toLowerCase();
              const resolvedUsername = isUser && state.profileUsername
                ? state.profileUsername
                : (player.displayName || player.username);
              const playerStatus = escapeHtml(formatLeaderboardStatus(player.status));
              const displayName = isUser
                ? `${state.profileUsername ? resolvedUsername : shortenAddress(player.username)} (You)`
                : (resolvedUsername.startsWith("0x") && resolvedUsername.length === 42 ? shortenAddress(resolvedUsername) : resolvedUsername);
              const safeDisplayName = escapeHtml(displayName);

              let zoneClass = "safety-zone";
              let arrowHtml = '<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">•</span>';
              if (rank <= 2) {
                zoneClass = "promotion-zone";
                arrowHtml = '<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">▲</span>';
              } else if (rank >= 5) {
                zoneClass = "relegation-zone";
                arrowHtml = '<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">▼</span>';
              }

              return `
                <div class="leaderboard-row ${isUser ? 'user-highlight' : ''} ${zoneClass}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${arrowHtml}
                    <span class="leaderboard-rank rank-${rank}" style="flex-shrink: 0; margin-right: 4px;">${rank}</span>
                    <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${safeDisplayName}</span>
                  </div>
                  <!-- Center Side: Points -->
                  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${player.points} pts</span>
                  </div>
                  <!-- Right Side: Status -->
                  <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
                    <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${playerStatus}</span>
                  </div>
                </div>
              `;
            }).join("");
          }
        }

        setLeaderboardCache(cacheKey, {
          players,
          divisionNumber,
          totalDivisions,
          seasonEndsAt
        });
        setLeaderboardCache(`division_${divisionNumber}`, {
          players,
          divisionNumber,
          totalDivisions,
          seasonEndsAt
        });
        startSeasonTimer(seasonEndsAt);
      })
      .catch(err => {
        console.error("Failed to load division leaderboard:", err);
        if (listContainer) {
          listContainer.innerHTML = `<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`;
        }
      });
  };

  if (selectedLeaderboardView === "division") {
    fetchAndRenderDivision(selectedLeaderboardDivision || undefined);
  } else {
    fetchAndRenderGlobal();
  }

  document.querySelectorAll<HTMLElement>("[data-leaderboard-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.leaderboardView === "division" ? "division" : "global";
      if (view === "division") fetchAndRenderDivision(selectedLeaderboardDivision || undefined);
      else fetchAndRenderGlobal();
    });
  });

  // Attach event listener for division selector change
  const divisionSelector = document.getElementById("divisionSelector") as HTMLSelectElement | null;
  divisionSelector?.addEventListener("change", (e) => {
    const val = Number((e.target as HTMLSelectElement).value);
    fetchAndRenderDivision(val);
  });

  // Attach event listener for faucet claim button
  const faucetClaimButton = document.getElementById("faucetClaimButton");
  faucetClaimButton?.addEventListener("click", async () => {
    if (!state.walletAddress) {
      showActionToast("Please sign in first!");
      return;
    }
    if (localStorage.getItem("siftle_circle_is_mock") === "true") {
      const currentBalance = parseFloat(localStorage.getItem(`siftle_mock_balance_${state.walletAddress}`) || "1000.00");
      const newBalance = currentBalance + 100.0;
      localStorage.setItem(`siftle_mock_balance_${state.walletAddress}`, newBalance.toFixed(2));
      state.walletBalance = newBalance.toFixed(2);
      showActionToast("Claimed $100 USDC mock credits!");
      renderWalletState();
      renderLeaderboard();
    } else {
      showActionToast("Opening Circle Faucet...");
      window.open(ARC_TESTNET_FAUCET, "_blank");
    }
  });

  // Attach event listener for modal popup
  const howItWorksBtn = document.getElementById("howItWorksBtn");
  const howItWorksModal = document.getElementById("howItWorksModal");
  const closeRulesModalBtn = document.getElementById("closeRulesModalBtn");

  howItWorksBtn?.addEventListener("click", () => {
    if (howItWorksModal) howItWorksModal.classList.add("active");
  });

  closeRulesModalBtn?.addEventListener("click", () => {
    if (howItWorksModal) howItWorksModal.classList.remove("active");
  });

  howItWorksModal?.addEventListener("click", (e) => {
    if (e.target === howItWorksModal) {
      howItWorksModal.classList.remove("active");
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
  const position = state.marketPositions[market.id] || { yesSharesUsdc: 0, noSharesUsdc: 0 };
  const snapshot = state.marketSnapshots[market.id];
  if (isOptionMarket(market)) {
    const resolvedOptionId = snapshot?.resolvedOptionId || null;
    const isResolved = Boolean(resolvedOptionId);
    const optionPool = snapshot?.optionPools?.[position.optionId || ""] || 0;
    const totalPool = snapshot?.volumeUsdc || 0;
    const won = isResolved && position.optionId === resolvedOptionId;
    const payout = won && optionPool > 0 ? ((position.optionSharesUsdc || 0) / optionPool) * totalPool : 0;
    const winningLabel = getMarketOptions(market).find((option) => option.id === resolvedOptionId)?.label;
    const isClaimed = Boolean(position.claimedAt) || readClaimedMarkets().has(market.id);
    const isClaiming = Boolean(state.claimingMarketIds[market.id]);
    return `
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${market.category}">${displayCategory(market.category)}</span>
          <span>${isResolved ? `Resolved: ${escapeHtml(winningLabel || "Option selected")}` : "Open"}</span>
        </div>
        <h2>${market.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${escapeHtml(position.optionLabel || "Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${formatMoney(position.optionSharesUsdc || 0)}</strong></div>
          <div><span>Projected payout</span><strong>$${formatMoney(payout || position.optionSharesUsdc || 0)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${isResolved ? "" : `Closes ${market.closes}`}</span>
          ${isResolved
            ? isClaimed
              ? `<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>`
              : isClaiming
                ? `<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>`
              : won
                ? `<button type="button" class="connect-wallet-btn" data-claim-market="${market.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${formatMoney(payout)}</button>`
                : `<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>`
            : ""}
        </div>
      </article>
    `;
  }
  const outcome = getMarketOutcomeLabel(snapshot?.outcome);
  const heldRows = getHeldPositionRows(position, snapshot);
  const bestPotentialPayout = heldRows.reduce((best, row) => Math.max(best, row.payout), 0);
  const totalShares = position.yesSharesUsdc + position.noSharesUsdc;
  const resolvedOutcome = snapshot?.outcome ?? 0;
  const isClaimed = readClaimedMarkets().has(market.id);
  const winningShares = resolvedOutcome === 1 ? position.yesSharesUsdc : resolvedOutcome === 2 ? position.noSharesUsdc : 0;
  const winningPool = resolvedOutcome === 1 ? snapshot?.yesSharesUsdc ?? 0 : resolvedOutcome === 2 ? snapshot?.noSharesUsdc ?? 0 : 0;
  const totalPool = snapshot?.volumeUsdc ?? 0;
  const claimAmount = winningShares > 0 && winningPool > 0 ? (winningShares / winningPool) * totalPool : 0;
  const claimHtml = resolvedOutcome === 0
    ? ""
    : isClaimed
      ? `<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>`
      : claimAmount > 0
      ? `<button type="button" class="connect-wallet-btn" data-claim-market="${market.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${formatMoney(claimAmount)}</button>`
      : `<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>`;

  return `
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${market.category}">${displayCategory(market.category)}</span>
        <span>${outcome}</span>
      </div>
      <h2>${market.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${formatMoney(bestPotentialPayout)}</strong></div>
        ${heldRows.map((row) => `
          <div><span>${row.label}</span><strong>${formatMoney(row.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${totalShares > 0 ? `${formatMoney(totalShares)} total shares` : ""}</span>
        ${claimHtml || `<span>Closes ${market.closes}</span>`}
      </div>
    </article>
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
    if (result.won) markMarketClaimed(market.id);
    delete state.marketPositions[market.id];
    delete state.marketSnapshots[market.id];
    state.hasLoadedPortfolioPositions = false;
    state.walletBalance = await readArcUsdcBalance(state.walletAddress);
    await loadPortfolioPositions();
    showActionToast(result.won ? `Claimed $${formatMoney(result.amountUsdc)}` : "No payout to claim");
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

const renderPortfolio = (): void => {
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
  storyList.classList.add("markets-list");
  if (state.walletAddress && !state.referralData && !state.referralError && !state.loadingReferralData) {
    void loadReferralData();
  }
  const positionsAreStale = state.walletAddress
    && (!state.hasLoadedPortfolioPositions || Date.now() - state.portfolioPositionsLoadedAt > 15000);
  if (positionsAreStale && !state.loadingPortfolioPositions) {
    if (state.portfolioMarketPreviews.length === 0) void loadPortfolioMarkets();
    void loadPortfolioPositions({ force: !state.hasLoadedPortfolioPositions });
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
  const usernameDisplay = state.profileUsername || (state.walletAddress ? shortenAddress(state.walletAddress) : "Anonymous");
  const safeUsernameDisplay = escapeHtml(usernameDisplay);
  const safeProfileUsername = escapeHtml(state.profileUsername || "");
  const profileNoticeHtml = state.profileNotice
    ? `<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${state.profileNotice.type === "error" ? "rgba(239, 68, 68, 0.28)" : "rgba(16, 185, 129, 0.24)"} !important; background: ${state.profileNotice.type === "error" ? "rgba(127, 29, 29, 0.22)" : "rgba(6, 95, 70, 0.18)"} !important; color: ${state.profileNotice.type === "error" ? "#fca5a5" : "#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${escapeHtml(state.profileNotice.message)}</div>`
    : "";
  const avatarLetter = usernameDisplay.charAt(0).toUpperCase();

  storyList.innerHTML = `
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${renderReferralPanel(walletConnected)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${avatarLetter}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.08rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${safeUsernameDisplay}</span>
              ${walletConnected ? `
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              ` : ""}
            </div>
            ${walletConnected ? `
              <div class="wallet-address-row" style="display: flex !important; align-items: center !important; gap: 8px !important; margin-top: 4px !important;">
                <small style="color: var(--market-text-muted) !important; font-family: monospace !important; font-size: 0.78rem !important;">${shortenAddress(state.walletAddress!)}</small>
                <button type="button" class="copy-address-btn" data-address="${state.walletAddress}" style="background: rgba(59,130,246,0.06) !important; border: 1px solid var(--market-border) !important; color: var(--market-text-muted) !important; border-radius: 4px !important; padding: 2px 6px !important; font-size: 0.7rem !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 4px !important; transition: all 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy
                </button>
              </div>
            ` : `<small style="color: var(--market-text-muted) !important; font-size: 0.8rem !important; display: block !important; margin-top: 4px !important;">Connect wallet to customize profile</small>`}
          </div>
        </div>

        ${walletConnected ? `
          <div class="profile-username-edit-form" id="usernameEditForm" style="display: none !important; align-items: center !important; gap: 8px !important; margin-top: 16px !important; width: 100% !important;">
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${safeProfileUsername}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        ` : ""}

        ${profileNoticeHtml}

        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${state.walletAddress
                ? state.walletBalance === null
                  ? `<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${renderSkeletonAria("Loading wallet balance")}`
                  : `${state.walletBalance} USDC`
                : "0.00 USDC"}
            </strong>
          </div>
          <div style="display: flex !important; align-items: center !important; gap: 8px !important;">
            ${walletConnected ? `
              <a href="https://faucet.circle.com/" target="_blank" rel="noreferrer" class="faucet-link" style="background: transparent !important; border: 1px solid var(--market-border) !important; color: var(--market-text-muted) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.8rem !important; text-decoration: none !important; display: inline-flex !important; align-items: center !important; gap: 6px !important; transition: all 0.2s ease !important;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                Get USDC
              </a>
            ` : ""}
            <button type="button" class="connect-wallet-btn" data-connect-wallet style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 16px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;" ${state.walletConnecting ? "disabled" : ""}>
              ${state.walletConnecting ? "Connecting..." : state.walletAddress ? "Disconnect" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
      </div>
      <div class="portfolio-section-tabs">
        <span>Open ${openPositions.length}</span>
        <span>Finalized ${finalizedPositions.length}</span>
      </div>
      ${state.loadingPortfolioPositions
        ? renderPortfolioSkeleton(2)
        : !state.walletAddress
          ? `<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>`
          : portfolioMarkets.length === 0
            ? `<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>`
            : `
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${openPositions.length ? openPositions.map(renderPortfolioPositionCard).join("") : `<div class="portfolio-empty compact">No open positions.</div>`}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${finalizedPositions.length ? finalizedPositions.map(renderPortfolioPositionCard).join("") : `<div class="portfolio-empty compact">No finalized positions yet.</div>`}
              </section>
            `}
    </section>
  `;
};

const render = (): void => {
  bottomNavButtons.forEach((button) => {
    const target = button.dataset.bottomNav;
    button.classList.toggle("active", target === "saved" ? state.showSaved : target === state.activeSurface && !state.showSaved);
  });

  if (state.activeSurface === "markets") {
    renderMarkets();
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

  state.activeCategory = button.dataset.category as Category;
  window.history.pushState({}, "", "#feed");
  resetFeedScroll();
  render();
  ensureArchiveIndexLoaded();
  ensureFeedLoaded(state.activeCategory);
});

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
  openStory(Number(storyCard.dataset.storyId), true);
});

storyList?.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement;
  const storyCard = target.closest<HTMLElement>("[data-story-id]");
  if (!storyCard || (event.key !== "Enter" && event.key !== " ")) return;

  event.preventDefault();
  openStory(Number(storyCard.dataset.storyId));
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
  if (backButton) closeStory();
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
    const balance = await readArcUsdcBalance(state.walletAddress);
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

render();
renderWalletState();
void fetchUnlockConfig();
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
            state.walletBalance = await readArcUsdcBalance(state.walletAddress);
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
        void readArcUsdcBalance(address).then((balance) => {
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
