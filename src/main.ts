import { categories, mockStories } from "./mockNews.js";
import type { ArchiveDate, Category, NewsStory, StoryThread } from "./types.js";
import {
  ARC_TESTNET_FAUCET,
  connectArcWallet,
  executeArcMarketOrder,
  getConnectedArcWallet,
  isWalletConnectConfigured,
  readArcMarketPosition,
  readArcMarketSnapshot,
  readArcUsdcBalance,
  shortenAddress,
  subscribeArcWallet
} from "./arc.js";
import type { ArcMarketPosition, ArcMarketSnapshot } from "./arc.js";

declare global {
  interface Window {
    SIFTLE_API_BASE?: string;
    REOWN_PROJECT_ID?: string;
    SIFTLE_MARKET_ADDRESSES?: Record<string, string>;
  }
}

const apiBase = (window.SIFTLE_API_BASE || "").replace(/\/$/, "");
const apiUrl = (path: string): string => `${apiBase}${path}`;

const state: {
  activeSurface: "feed" | "markets" | "portfolio";
  selectedMarketId: string | null;
  marketOrderMode: "buy" | "sell";
  marketTradeSide: "yes" | "no";
  marketTradeAmount: number;
  marketSnapshots: Record<string, ArcMarketSnapshot>;
  marketPositions: Record<string, ArcMarketPosition>;
  loadingMarketSnapshotId: string | null;
  loadingPortfolioPositions: boolean;
  walletConnecting: boolean;
  walletAddress: string | null;
  walletBalance: string | null;
  activeCategory: Category;
  stories: NewsStory[];
  isLoading: boolean;
  selectedStoryId: number | null;
  aiSummaries: Record<string, string>;
  loadingSummaryUrl: string | null;
  archiveDates: ArchiveDate[];
  activeArchiveDate: string | null;
  activeShareStoryId: number | null;
  selectedThreadUrl: string | null;
  activeThread: StoryThread | null;
  loadingThreadUrl: string | null;
  feedScrollY: number;
  hasLoadedFeed: boolean;
  showSaved: boolean;
} = {
  activeSurface: "feed",
  selectedMarketId: null,
  marketOrderMode: "buy",
  marketTradeSide: "yes",
  marketTradeAmount: 100,
  marketSnapshots: {},
  marketPositions: {},
  loadingMarketSnapshotId: null,
  loadingPortfolioPositions: false,
  walletConnecting: false,
  walletAddress: null,
  walletBalance: null,
  activeCategory: "All",
  stories: mockStories,
  isLoading: false,
  selectedStoryId: null,
  aiSummaries: {},
  loadingSummaryUrl: null,
  archiveDates: [],
  activeArchiveDate: null,
  activeShareStoryId: null,
  selectedThreadUrl: null,
  activeThread: null,
  loadingThreadUrl: null,
  feedScrollY: 0,
  hasLoadedFeed: false
  ,
  showSaved: false
};

interface MarketPreview {
  id: string;
  category: Exclude<Category, "All">;
  question: string;
  probability: number;
  marketAddress?: string;
  closes: string;
  resolution: string;
  threadTopic: string;
  threadStoryId: number;
  updates: number;
  movement: number;
  volume: string;
  traders: string;
  liquidity: string;
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

const marketPreviews: MarketPreview[] = [
  {
    id: "new-glenn-2026",
    category: "Tech",
    question: "Will Blue Origin launch New Glenn again before December 31, 2026?",
    probability: 68,
    closes: "December 31, 2026",
    resolution: "Resolves Yes when a New Glenn vehicle lifts off on an orbital launch attempt before the deadline.",
    threadTopic: "Blue Origin New Glenn Launchpad Probe",
    threadStoryId: 9001,
    updates: 4,
    movement: 7,
    volume: "$184K",
    traders: "1,284",
    liquidity: "$61K",
    evidence: [
      {
        date: "Latest",
        source: "TechCrunch",
        headline: "Blue Origin plans to launch New Glenn again this year after explosion",
        summary: "CEO Dave Limp said damage to the company's launchpad in Florida was not as bad as expected.",
        impact: "+7%",
        direction: "up",
        sourceUrl: "https://techcrunch.com/2026/06/02/blue-origin-plans-to-launch-new-glenn-again-this-year-after-explosion/"
      },
      {
        date: "Jun 2",
        source: "Engadget",
        headline: "Blue Origin CEO says New Glenn will fly again before the year ends",
        summary: "Dave Limp provided an update on the investigation into the New Glenn launchpad explosion.",
        impact: "+11%",
        direction: "up",
        sourceUrl: "https://www.engadget.com/2185458/blue-origin-new-glenn-launchpad-explosion-repair-update/"
      },
      {
        date: "May 29",
        source: "Ars Technica",
        headline: "How long will it take to rebuild Blue Origin's launch pad? We asked some SpaceX vets.",
        summary: "Former SpaceX engineers assess the work required to rebuild Blue Origin's damaged launch pad.",
        impact: "-8%",
        direction: "down",
        sourceUrl: "https://arstechnica.com/space/2026/06/how-long-will-it-take-to-rebuild-blue-origins-launch-pad-we-asked-some-spacex-vets/"
      }
    ]
  },
  {
    id: "strategy-bitcoin-sale",
    category: "Crypto",
    question: "Will Strategy report another Bitcoin sale before July 1, 2026?",
    probability: 42,
    closes: "July 1, 2026",
    resolution: "Resolves Yes if Strategy publicly reports selling Bitcoin before the deadline.",
    threadTopic: "Strategy Bitcoin Sale And Market Resolution",
    threadStoryId: 9002,
    updates: 9,
    movement: -6,
    volume: "$427K",
    traders: "3,106",
    liquidity: "$138K",
    evidence: [
      {
        date: "Latest",
        source: "Cointelegraph",
        headline: "Polymarket users cry foul after Strategy sale market resolves to no",
        summary: "A Polymarket contract on whether Strategy sold Bitcoin by May 31 resolved to no after traders disputed how the sale should count.",
        impact: "-6%",
        direction: "down",
        sourceUrl: "https://cointelegraph.com/news/polymarket-dispute-strategys-bitcoin-sale-resolves-no"
      },
      {
        date: "Jun 2",
        source: "CoinDesk",
        headline: "Strategy sold bitcoin in late May, and told the market in June. Here's how Polymarket bettors are fighting over when it counts.",
        summary: "A $79 million market hinges on whether a sale disclosed June 1 can count toward a deadline that passed May 31.",
        impact: "+9%",
        direction: "up",
        sourceUrl: "https://www.coindesk.com/markets/2026/06/02/strategy-sold-bitcoin-in-late-may-and-told-the-market-in-june-here-s-how-polymarket-bettors-are-fighting-over-when-it-counts"
      },
      {
        date: "Jun 1",
        source: "The Block",
        headline: "Strategy bitcoin sale timing throws wrench into $20 million Polymarket pool",
        summary: "A Polymarket pool asking whether Strategy would sell any of its bitcoin before May 31 drew more than $20 million in volume.",
        impact: "Opened",
        direction: "flat",
        sourceUrl: "https://www.theblock.co/post/403213/strategy-bitcoin-sale-timing-throws-wrench-20-million-polymarket-pool"
      },
      {
        date: "Jun 2",
        source: "Cointelegraph",
        headline: "Strategy's Bitcoin sale causes clash for $80M in Polymarket bets",
        summary: "A clash erupted over the timing and disclosure of Strategy's recent Bitcoin sale, with more than $80 million traded on the disputed outcome.",
        impact: "+5%",
        direction: "up",
        sourceUrl: "https://cointelegraph.com/news/strategys-bitcoin-sale-causes-clash-on-80m-in-polymarket-bets"
      },
      {
        date: "Jun 2",
        source: "The Block",
        headline: "Bitcoin slides toward $70,000 as Strategy's BTC sale and geopolitical risks weigh on crypto",
        summary: "Analysts said the sale was relatively small but sent a bearish signal to the broader market.",
        impact: "+3%",
        direction: "up",
        sourceUrl: "https://www.theblock.co/post/403286/bitcoin-slides-geopolitical-risks-strategy-btc-sale"
      },
      {
        date: "Jun 2",
        source: "CoinDesk",
        headline: "Tom Lee calls Strategy's bitcoin sale classic bottom behavior",
        summary: "Tom Lee said minor sales from key holders and institutional outflows are typical market-bottom behavior.",
        impact: "-7%",
        direction: "down",
        sourceUrl: "https://www.coindesk.com/markets/2026/06/02/tom-lee-dismisses-bitcoin-fears-over-michael-saylor-first-bitcoin-sale-and-etf-outflows"
      },
      {
        date: "Jun 2",
        source: "The Block",
        headline: "Polymarket faces backlash over disputed Strategy bitcoin sale market",
        summary: "Polymarket faced continued backlash from traders who bet Yes on whether Strategy would sell bitcoin by May 31.",
        impact: "+4%",
        direction: "up",
        sourceUrl: "https://www.theblock.co/post/403312/polymarket-faces-backlash-strategy-bitcoin-sale"
      },
      {
        date: "Jun 3",
        source: "Decrypt",
        headline: "Strategy Wanted to 'Inoculate' the Bitcoin Market - Has Its BTC Sale Backfired?",
        summary: "Experts are divided over whether the sale exposed a structural crack in Strategy's Bitcoin flywheel.",
        impact: "-2%",
        direction: "down",
        sourceUrl: "https://decrypt.co/369904/strategy-wanted-to-inoculate-the-bitcoin-market-has-its-btc-sale-backfired"
      },
      {
        date: "Jun 1",
        source: "CoinDesk",
        headline: "It's not 2022 anymore: What Strategy's first bitcoin sale can and can't tell us about this one",
        summary: "Strategy has evolved into a more complex bitcoin-finance machine since it last sold BTC three and a half years ago.",
        impact: "Opened",
        direction: "flat",
        sourceUrl: "https://www.coindesk.com/markets/2026/06/01/strategy-s-second-bitcoin-sale-revives-memories-of-2022"
      }
    ]
  },
  {
    id: "nba-finals",
    category: "Sports",
    question: "Will the San Antonio Spurs win the 2026 NBA Finals?",
    probability: 37,
    closes: "At the conclusion of the 2026 NBA Finals",
    resolution: "Resolves Yes if the San Antonio Spurs are declared 2026 NBA champions.",
    threadTopic: "Spurs 2026 NBA Finals Run",
    threadStoryId: 9003,
    updates: 5,
    movement: -4,
    volume: "$296K",
    traders: "2,418",
    liquidity: "$94K",
    evidence: [
      {
        date: "Latest",
        source: "ESPN",
        headline: "Wemby vows revival after Spurs 'let that one go'",
        summary: "Victor Wembanyama accepted responsibility for the Game 1 loss but said he was not worried about the Spurs as the series unfolds.",
        impact: "-4%",
        direction: "down",
        sourceUrl: "https://www.espn.com/nba/story/_/id/48963130/wembanyama-confident-spurs-bounce-back-game-1-loss"
      },
      {
        date: "Jun 3",
        source: "ESPN",
        headline: "Knicks stay hot, steal Game 1 behind Brunson's 30",
        summary: "Jalen Brunson scored 13 of his 30 points in the fourth quarter as New York erased a 14-point deficit.",
        impact: "-12%",
        direction: "down",
        sourceUrl: "https://www.espn.com/nba/story/_/id/48962034/brunson-keys-late-surge-knicks-steal-game-1-san-antonio"
      },
      {
        date: "Jun 1",
        source: "NBA",
        headline: "Experts' picks for Knicks-Spurs, Finals MVP",
        summary: "ESPN experts make their picks for the NBA Finals winner and Finals MVP.",
        impact: "Opened",
        direction: "flat",
        sourceUrl: "https://www.espn.com/nba/story/_/id/48939418/nba-finals-2026-experts-picks-knicks-spurs-finals-mvp-brunson-wembanyama"
      },
      {
        date: "May 30",
        source: "ESPN",
        headline: "NBA Finals: Victor Wembanyama, Spurs have already made history",
        summary: "The Spurs and their generational big man enter the NBA Finals having already made history.",
        impact: "+14%",
        direction: "up",
        sourceUrl: "https://www.espn.com/nba/story/_/id/48949784/how-victor-wembanyama-san-antonio-spurs-already-made-history-new-york-knicks-nba-finals"
      },
      {
        date: "May 27",
        source: "NBA",
        headline: "Top reactions to Spurs reaching NBA Finals",
        summary: "The sports world reacts to the San Antonio Spurs reaching the NBA Finals.",
        impact: "+9%",
        direction: "up",
        sourceUrl: "https://www.espn.com/nba/story/_/id/48910495/nba-playoffs-western-conference-finals-san-antonio-spurs-oklahoma-city-thunder-game-7-social-reaction"
      }
    ]
  }
];

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
const walletButton = document.querySelector<HTMLButtonElement>("#walletButton");
const bottomNavButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-bottom-nav]"));

let toastTimer: number | undefined;

const renderWalletState = (): void => {
  if (walletButton) {
    const label = walletButton.querySelector<HTMLElement>(".wallet-button-label");
    walletButton.classList.toggle("connected", Boolean(state.walletAddress));
    walletButton.disabled = state.walletConnecting;
    walletButton.setAttribute("aria-label", state.walletAddress ? `Wallet ${shortenAddress(state.walletAddress)}` : "Connect wallet");
    if (label) label.textContent = state.walletConnecting ? "Connecting" : state.walletAddress ? "Wallet" : "Connect wallet";
    walletButton.title = state.walletAddress
      ? `${state.walletBalance ?? "0"} Arc Testnet USDC - ${shortenAddress(state.walletAddress)}`
      : isWalletConnectConfigured()
        ? "Connect wallet"
        : "WalletConnect setup needed";
  }
};

window.addEventListener("resize", renderWalletState);

const connectWallet = async (): Promise<void> => {
  if (state.walletConnecting) return;
  state.walletConnecting = true;
  renderWalletState();
  try {
    const account = await connectArcWallet();
    if (account) {
      state.walletAddress = account;
      state.walletBalance = await readArcUsdcBalance(account);
      await loadPortfolioPositions();
      showActionToast("Connected to Arc Testnet");
    }
  } catch (error) {
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
    return state.activeCategory === "All" || story.category === state.activeCategory;
  });

const getStoryTimeLabel = (story: NewsStory): string =>
  state.activeArchiveDate ? story.postedAt : `${story.postedAt} ago`;

const looksLikeBadSummary = (summary: string): boolean =>
  /(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(summary);

const limitSummaryWords = (summary: string, maxWords = 62): string => {
  const words = summary.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return summary;
  return `${words.slice(0, maxWords).join(" ").replace(/[,:;]+$/, "")}.`;
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
    .replace(/^summary\s*:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();

  if (looksLikeBadSummary(summary)) return "";
  return limitSummaryWords(summary);
};

const safeStorySummary = (story: NewsStory, preferred?: string): string =>
  cleanSummaryText(preferred || "") || cleanSummaryText(story.summary) || story.headline;

const loadStorySummary = async (story: NewsStory): Promise<void> => {
  if (state.aiSummaries[story.sourceUrl] || state.loadingSummaryUrl === story.sourceUrl) return;

  if (story.ai_summary) {
    state.aiSummaries[story.sourceUrl] = safeStorySummary(story, story.ai_summary);
    if (menuStatus) {
      menuStatus.textContent = story.ai_provider === "0g" ? "Archived 0G summary loaded" : "Archived summary loaded";
    }
    renderDetail();
    return;
  }

  state.loadingSummaryUrl = story.sourceUrl;
  renderDetail();

  try {
    const response = await fetch(apiUrl("/api/summary"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(story)
    });

    if (!response.ok) {
      throw new Error(`Summary request failed with ${response.status}`);
    }

    const data = await response.json();
    state.aiSummaries[story.sourceUrl] = safeStorySummary(story, data.summary);
    if (menuStatus && data.provider) {
      menuStatus.textContent = data.provider === "0g" ? "Summary generated by 0G" : `Summary loaded from ${data.provider}`;
    }
  } catch (error) {
    console.warn(error);
    state.aiSummaries[story.sourceUrl] = safeStorySummary(story);
    if (menuStatus) {
      menuStatus.textContent = "Summary fallback loaded";
    }
  } finally {
    state.loadingSummaryUrl = null;
    renderDetail();
  }
};

const openStory = (storyId: number): void => {
  const story = state.stories.find((item) => item.id === storyId);
  if (!story) return;

  state.feedScrollY = window.scrollY;
  state.selectedStoryId = story.id;
  state.selectedThreadUrl = null;
  state.activeThread = null;
  window.history.pushState({}, "", `#story-${story.id}`);
  render();
  void loadStorySummary(story);
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
  window.history.pushState({}, "", window.location.pathname);
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
    window.history.replaceState({}, "", window.location.pathname);
    showActionToast("That timeline no longer has a verified past update");
    if (menuStatus) menuStatus.textContent = "Thread unavailable";
  } finally {
    state.loadingThreadUrl = null;
    render();
  }
};

const syncStoryFromHash = (): void => {
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
};

const setArchiveStatus = (message: string): void => {
  if (archiveStatus) archiveStatus.textContent = message;
};

const loadFeed = async (category: Category = state.activeCategory): Promise<void> => {
  state.activeSurface = "feed";
  state.selectedMarketId = null;
  state.selectedStoryId = null;
  state.selectedThreadUrl = null;
  state.activeThread = null;
  state.loadingThreadUrl = null;
  state.showSaved = false;
  state.isLoading = false;
  renderCategories();

  try {
    const endpoint = state.activeArchiveDate
      ? `/api/archive?date=${encodeURIComponent(state.activeArchiveDate)}&category=${encodeURIComponent(category)}`
      : `/api/feed?category=${encodeURIComponent(category)}`;
    const response = await fetch(apiUrl(endpoint));
    if (!response.ok) throw new Error(`Feed request failed with ${response.status}`);

    const data = await response.json();
    state.stories = data.top_stories ?? mockStories;
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
      state.stories = mockStories;
    }
    applySavedFlags();
    if (menuStatus) {
      menuStatus.textContent = state.activeArchiveDate
        ? "That saved day/category is not available yet"
        : "Using mock feed until sources are configured";
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

const getCategoryLabel = (category: Category): string =>
  category === "All" ? "For you" : category;

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

const getMarketView = (market: MarketPreview): MarketPreview => market;

const getMarketAddress = (market: MarketPreview): string =>
  market.marketAddress || window.SIFTLE_MARKET_ADDRESSES?.[market.id] || "";

const formatMoney = (value: number): string =>
  value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const loadMarketSnapshot = async (market: MarketPreview): Promise<void> => {
  const marketAddress = getMarketAddress(market);
  if (!marketAddress || state.marketSnapshots[market.id] || state.loadingMarketSnapshotId === market.id) return;

  state.loadingMarketSnapshotId = market.id;
  try {
    state.marketSnapshots[market.id] = await readArcMarketSnapshot(marketAddress);
  } catch (error) {
    console.warn(error);
  } finally {
    state.loadingMarketSnapshotId = null;
    if (state.activeSurface === "markets") render();
  }
};

const loadPortfolioPositions = async (): Promise<void> => {
  if (!state.walletAddress || state.loadingPortfolioPositions) return;

  state.loadingPortfolioPositions = true;
  try {
    const entries = await Promise.all(
      marketPreviews.map(async (market) => {
        const marketAddress = getMarketAddress(market);
        if (!marketAddress) return [market.id, { yesSharesUsdc: 0, noSharesUsdc: 0 }] as const;
        const [position, snapshot] = await Promise.all([
          readArcMarketPosition(marketAddress, state.walletAddress!),
          readArcMarketSnapshot(marketAddress)
        ]);
        state.marketSnapshots[market.id] = snapshot;
        return [market.id, position] as const;
      })
    );
    state.marketPositions = Object.fromEntries(entries);
  } catch (error) {
    console.warn(error);
  } finally {
    state.loadingPortfolioPositions = false;
    if (state.activeSurface === "portfolio") render();
  }
};

const placeMarketOrder = async (marketId: string, side: "yes" | "no"): Promise<void> => {
  const market = marketPreviews.find((item) => item.id === marketId);
  if (!market) return;

  state.marketTradeSide = side;
  const marketAddress = getMarketAddress(market);
  if (!marketAddress) {
    showActionToast("Deploy this Arc market contract before trading");
    render();
    return;
  }

  try {
    showActionToast("Preparing Arc transaction...");
    const txHash = await executeArcMarketOrder(
      marketAddress,
      state.marketOrderMode,
      side,
      Math.max(0, Number(state.marketTradeAmount) || 0)
    );
    delete state.marketSnapshots[market.id];
    delete state.marketPositions[market.id];
    state.walletAddress = getConnectedArcWallet();
    if (state.walletAddress) state.walletBalance = await readArcUsdcBalance(state.walletAddress);
    await loadPortfolioPositions();
    showActionToast(`Trade confirmed ${txHash.slice(0, 8)}...`);
  } catch (error) {
    showActionToast(error instanceof Error ? error.message : "Arc trade failed");
  } finally {
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

const renderStories = (): void => {
  if (!storyList) return;

  const stories = getFilteredStories();
  storyList.hidden = Boolean(state.selectedStoryId || state.selectedThreadUrl);

  if (state.isLoading) {
    storyList.innerHTML = state.stories.length > 0 ? storyList.innerHTML : "";
    return;
  }

  if (stories.length === 0) {
    const fallbackStories = state.showSaved ? [] : state.stories;
    if (fallbackStories.length > 0) {
      storyList.innerHTML = fallbackStories
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
            <span class="category-chip ${story.category}">${story.category}</span>
            <h2>${story.headline}</h2>
            <p>Tap to read the AI summary.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${renderDesktopThreadButton(story)}
            ${/example\\.com/i.test(story.sourceUrl)
              ? `<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
              : `<a class="card-source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${story.category}">${story.category}</span>
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
              <button class="mobile-action-btn summary-btn" type="button">AI summary</button>
            </div>
          </div>

        </article>
      `
        )
        .join("");
      return;
    }
    storyList.innerHTML = "";
    return;
  }

  storyList.innerHTML = stories
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
            <span class="category-chip ${story.category}">${story.category}</span>
            <h2>${story.headline}</h2>
            <p>Tap to read the AI summary.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${renderDesktopThreadButton(story)}
            ${/example\\.com/i.test(story.sourceUrl)
              ? `<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`
              : `<a class="card-source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${story.category}">${story.category}</span>
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
              <button class="mobile-action-btn summary-btn" type="button">AI summary</button>
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

  const logo = await loadCanvasImage("./assets/Siftle_logo-removebg-preview.png").catch(() => null);
  if (logo) {
    context.drawImage(logo, 784, 106, 54, 54);
  }
  context.fillStyle = "#071229";
  context.font = "800 34px Inter, Arial, sans-serif";
  context.textAlign = "left";
  context.fillText("Siftle", 850, 143);

  context.fillStyle = "#6b748c";
  context.font = "700 24px Inter, Arial, sans-serif";
  context.fillText(`${story.source} - ${story.postedAt} ago`, 110, 140);

  const imageY = 195;
  if (includeRemoteImage) {
    const storyImage = await loadCanvasImage(story.imageUrl).catch(() => null);
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
          : "#eee7ff";
  drawRoundRect(context, 110, chipY, 118, 42, 21);
  context.fill();
  context.fillStyle = story.category === "Sports" ? "#11a98d" : story.category === "Tech" ? "#3f5f86" : "#6f3cff";
  context.font = "800 22px Inter, Arial, sans-serif";
  context.fillText(story.category, 132, chipY + 28);

  context.fillStyle = "#07142f";
  context.font = "680 44px Space Grotesk, Inter, Arial, sans-serif";
  drawWrappedText(context, story.headline, 110, 888, 860, 54, 4);

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

const renderThreadTimelineItem = (story: NewsStory, label: string): string => `
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${story.category}">${story.category}</span>
        <span>${label} - ${story.source}</span>
      </div>
      <h3>${story.headline}</h3>
      <p>${safeStorySummary(story, story.ai_summary)}</p>
      ${/example\\.com/i.test(story.sourceUrl)
        ? ""
        : `<a class="thread-source-link" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
    </div>
  </article>
`;

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
          <div class="thread-loading">Checking the published timeline and its past updates...</div>
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
          <span class="category-chip ${seedStory.category}">${seedStory.category}</span>
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
          <span class="category-chip ${story.category}">${story.category}</span>
          <span>${story.source} - ${getStoryTimeLabel(story)} - ${story.readTime}</span>
        </div>
        <h2>${story.headline}</h2>
        <img class="detail-image" src="${story.imageUrl}" alt="" />
        <section class="detail-summary ${story.category}">
          <strong>AI summary</strong>
          <p>${isLoadingSummary ? "Preparing a short AI summary..." : summary}</p>
        </section>
        <a class="source-button" href="${story.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `;
};

const renderMarketCard = (market: MarketPreview): string => {
  const snapshot = state.marketSnapshots[market.id];
  const marketAddress = getMarketAddress(market);
  const yesPrice = snapshot?.yesPriceCents;
  const probabilityLabel = yesPrice === undefined ? "--" : `${yesPrice}%`;
  const shareLabel =
    yesPrice === undefined ? (marketAddress ? "Loading Arc pools" : "Arc setup required") : `Yes ${yesPrice}¢ · No ${100 - yesPrice}¢`;

  return `
    <button class="market-card" type="button" data-market-id="${market.id}">
      <div class="market-card-topline">
        <span class="category-chip ${market.category}">${market.category}</span>
        <span class="market-card-updates">${getMarketView(market).evidence.length} updates</span>
      </div>
      <h2>${market.question}</h2>
      <div class="market-probability-row">
        <strong>${probabilityLabel}</strong>
        <span>${marketAddress ? "market probability" : "pending deployment"}</span>
        <span class="market-share-prices">${shareLabel}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${yesPrice ?? 0}%"></span></div>
      <div class="market-card-footer">
        <span>${getMarketView(market).evidence.length} thread updates</span>
        <span>${snapshot ? `$${Math.round(snapshot.volumeUsdc).toLocaleString()} volume` : `Closes ${market.closes}`}</span>
      </div>
    </button>
  `;
};

const renderMarketDetail = (market: MarketPreview): void => {
  if (!storyList || !storyDetail) return;
  const marketView = getMarketView(market);
  const evidenceStatus = `${marketView.evidence.length} updates`;
  const marketAddress = getMarketAddress(market);
  const snapshot = state.marketSnapshots[market.id];
  const yesPrice = snapshot?.yesPriceCents ?? (marketAddress ? market.probability : 0);
  const noPrice = snapshot?.noPriceCents ?? (marketAddress ? 100 - market.probability : 0);
  const yesPriceLabel = marketAddress ? `${yesPrice}¢` : "--";
  const noPriceLabel = marketAddress ? `${noPrice}¢` : "--";
  const activePrice = state.marketTradeSide === "yes" ? yesPrice : noPrice;
  const amount = Math.max(0, Number(state.marketTradeAmount) || 0);
  const projectedPayout = activePrice > 0 ? amount / (activePrice / 100) : 0;
  const orderLabel = state.marketOrderMode === "buy" ? "Buy" : "Sell";
  const marketStatus = marketAddress ? "Arc testnet live" : "Contract not deployed";
  storyList.hidden = true;
  storyDetail.hidden = false;
  storyDetail.classList.add("fullscreen");
  document.body.classList.add("detail-mode");
  void loadMarketSnapshot(market);
  storyDetail.innerHTML = `
    <div class="detail-container market-detail-container">
      <button class="back-button" type="button" data-back-markets>Back to markets</button>
      <article class="market-detail-card market-story-surface">
        <div class="market-decision-surface">
          <div class="market-detail-topline">
            <span class="category-chip ${market.category}">${market.category}</span>
            <span class="market-detail-updates">${marketView.evidence.length} evidence updates</span>
          </div>
          <h2>${market.question}</h2>
          <div class="market-decision-row">
            <div class="market-trade-panel">
              <div class="market-order-mode" aria-label="Order type">
                <button type="button" class="${state.marketOrderMode === "buy" ? "active" : ""}" data-market-order-mode="buy">Buy</button>
                <button type="button" class="${state.marketOrderMode === "sell" ? "active" : ""}" data-market-order-mode="sell">Sell</button>
              </div>
              <div class="market-order-ticket">
                <div class="market-amount-panel">
                  <label for="marketAmountInput">Amount</label>
                  <div class="market-amount-input">
                    <div class="market-amount-entry">
                      <span>$</span>
                      <input id="marketAmountInput" type="number" min="0" step="1" inputmode="decimal" value="${amount}" data-market-amount />
                    </div>
                    <div class="market-inline-payout">
                      <span>${state.marketOrderMode === "buy" ? "Projected payout" : "Estimated proceeds"}</span>
                      <strong>$${formatMoney(projectedPayout)}</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="market-action-grid" aria-label="${orderLabel} shares">
                <button type="button" class="market-side yes ${state.marketTradeSide === "yes" ? "active" : ""}" data-market-trade-side="yes" data-market-trade="yes">
                  <span>${orderLabel} Yes</span>
                  <strong>${yesPriceLabel}</strong>
                </button>
                <button type="button" class="market-side no ${state.marketTradeSide === "no" ? "active" : ""}" data-market-trade-side="no" data-market-trade="no">
                  <span>${orderLabel} No</span>
                  <strong>${noPriceLabel}</strong>
                </button>
              </div>
            </div>
          </div>
          <p class="market-volume">
            <span>${marketStatus}</span>
            <strong>${snapshot ? `$${Math.round(snapshot.volumeUsdc).toLocaleString()} USDC volume` : marketAddress ? "Reading Arc pool" : "Deploy Arc market to trade"}</strong>
          </p>
          <div class="market-resolution market-resolution-inline">
            <div class="market-resolution-inline-head">
              <strong>Resolution rules</strong>
              <span>Closes: ${market.closes}</span>
            </div>
            <div class="market-resolution-rule">
              <strong>Yes if</strong>
              <p>${market.resolution.replace(/^Resolves Yes if\s*/i, "").replace(/\.$/, "")}.</p>
            </div>
            <div class="market-resolution-rule">
              <strong>Source</strong>
              <p>Official announcements and verified reporting decide the outcome.</p>
            </div>
          </div>
        </div>
        <section class="market-evidence-thread">
          <header>
            <div>
              <span class="market-kicker">Market thread</span>
              <h3>${marketView.threadTopic}</h3>
            </div>
            <span>${evidenceStatus}</span>
          </header>
          <p class="market-thread-intro">Read the developments shaping this market, newest first.</p>
          <div class="market-thread-timeline">
            ${marketView.evidence.map((item) => `
              <article class="market-thread-update">
                <div class="market-thread-marker"></div>
                <div>
                  <div class="market-thread-update-meta">
                    <span>${item.date} · ${item.source}</span>
                  </div>
                  <h4>${item.headline}</h4>
                  <p>${item.summary}</p>
                  <a class="market-thread-source-link" href="${item.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      </article>
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
  marketPreviews.forEach((market) => void loadMarketSnapshot(market));

  if (state.selectedMarketId) {
    const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
    if (market) renderMarketDetail(market);
    return;
  }

  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyDetail.classList.remove("fullscreen");
  storyList.hidden = false;
  storyList.classList.add("markets-list");
  storyList.innerHTML = `
    <header class="markets-header">
      <div>
        <h1>Markets</h1>
        <p>Predict what happens next, with the full story already attached.</p>
      </div>
      <a class="arc-faucet-button" href="${ARC_TESTNET_FAUCET}" target="_blank" rel="noreferrer">Get testnet USDC</a>
    </header>
    <section class="markets-grid" aria-label="Prediction markets">
      ${marketPreviews.map(renderMarketCard).join("")}
    </section>
  `;
};

const showFeedSurface = (): void => {
  state.activeSurface = "feed";
  state.selectedMarketId = null;
  briefHero?.removeAttribute("hidden");
  archiveControls?.removeAttribute("hidden");
  categoryTabs?.removeAttribute("hidden");
  topMarketsButton?.classList.remove("active");
  topNewsButton?.classList.add("active");
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
  const totalShares = position.yesSharesUsdc + position.noSharesUsdc;
  const yesValue = position.yesSharesUsdc * ((snapshot?.yesPriceCents ?? market.probability) / 100);
  const noValue = position.noSharesUsdc * ((snapshot?.noPriceCents ?? 100 - market.probability) / 100);
  const currentValue = yesValue + noValue;
  const outcome = getMarketOutcomeLabel(snapshot?.outcome);

  return `
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${market.category}">${market.category}</span>
        <span>${outcome}</span>
      </div>
      <h2>${market.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Current value</span><strong>$${formatMoney(currentValue)}</strong></div>
        <div><span>Yes shares</span><strong>$${formatMoney(position.yesSharesUsdc)}</strong></div>
        <div><span>No shares</span><strong>$${formatMoney(position.noSharesUsdc)}</strong></div>
      </div>
      <div class="portfolio-position-footer">
        <span>${totalShares > 0 ? `$${formatMoney(totalShares)} total shares` : "No shares"}</span>
        <span>Closes ${market.closes}</span>
      </div>
    </article>
  `;
};

const renderPortfolio = (): void => {
  if (!storyList || !storyDetail) return;
  briefHero?.toggleAttribute("hidden", true);
  archiveControls?.toggleAttribute("hidden", true);
  categoryTabs?.toggleAttribute("hidden", true);
  topMarketsButton?.classList.remove("active");
  topNewsButton?.classList.remove("active");
  document.body.classList.remove("detail-mode");
  storyDetail.hidden = true;
  storyList.hidden = false;
  storyList.classList.add("markets-list");
  if (state.walletAddress && Object.keys(state.marketPositions).length === 0 && !state.loadingPortfolioPositions) {
    void loadPortfolioPositions();
  }
  const portfolioMarkets = marketPreviews.filter((market) => {
    const position = state.marketPositions[market.id];
    return position && position.yesSharesUsdc + position.noSharesUsdc > 0;
  });
  const openPositions = portfolioMarkets.filter((market) => (state.marketSnapshots[market.id]?.outcome ?? 0) === 0);
  const finalizedPositions = portfolioMarkets.filter((market) => (state.marketSnapshots[market.id]?.outcome ?? 0) !== 0);
  storyList.innerHTML = `
    <section class="portfolio-surface">
      <header>
        <span>Arc Testnet</span>
        <h1>Portfolio</h1>
        <p>Track your open shares, resolved outcomes, and available Arc testnet USDC.</p>
      </header>
      <div class="portfolio-wallet-state">
        <div>
          <span>Available balance</span>
          <strong>${state.walletAddress ? `${state.walletBalance ?? "0"} USDC` : "Connect wallet"}</strong>
          <small>${state.walletAddress ? shortenAddress(state.walletAddress) : "WalletConnect secures your market account."}</small>
        </div>
        <button type="button" data-connect-wallet ${state.walletConnecting ? "disabled" : ""}>${state.walletConnecting ? "Connecting" : state.walletAddress ? "Manage wallet" : "Connect wallet"}</button>
      </div>
      <div class="portfolio-section-tabs">
        <span>Open ${openPositions.length}</span>
        <span>Finalized ${finalizedPositions.length}</span>
      </div>
      ${state.loadingPortfolioPositions
        ? `<div class="portfolio-empty">Reading your Arc positions...</div>`
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
  window.history.pushState({}, "", window.location.pathname);
  resetFeedScroll();
  render();
  void loadFeed(state.activeCategory);
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
  window.history.pushState({}, "", window.location.pathname);
  resetFeedScroll();
  render();
});

walletButton?.addEventListener("click", () => void connectWallet());

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.closest("[data-connect-wallet]")) void connectWallet();
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
    } else {
      state.activeSurface = "feed";
      window.history.pushState({}, "", window.location.pathname);
      if (target === "saved") {
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
  window.history.pushState({}, "", window.location.pathname);
  resetFeedScroll();
  render();
  void loadFeed(state.activeCategory);
});

todayButton?.addEventListener("click", () => {
  state.activeArchiveDate = null;
  if (archiveDateSelect) archiveDateSelect.value = "";
  window.history.pushState({}, "", window.location.pathname);
  resetFeedScroll();
  render();
  void loadFeed(state.activeCategory);
});

storyList?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const marketCard = target.closest<HTMLButtonElement>("[data-market-id]");
  if (marketCard) {
    state.selectedMarketId = marketCard.dataset.marketId ?? null;
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
  openStory(Number(storyCard.dataset.storyId));
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
  if (target.closest("[data-back-markets]")) {
    state.selectedMarketId = null;
    window.history.pushState({}, "", "#markets");
    render();
    return;
  }
  const tradeButton = target.closest<HTMLButtonElement>("[data-market-trade]");
  if (tradeButton && state.selectedMarketId) {
    const side = tradeButton.dataset.marketTrade as "yes" | "no";
    void placeMarketOrder(state.selectedMarketId, side);
    return;
  }
  const tradeSide = target.closest<HTMLButtonElement>("[data-market-trade-side]");
  if (tradeSide) {
    state.marketTradeSide = tradeSide.dataset.marketTradeSide as "yes" | "no";
    render();
    return;
  }
  const orderMode = target.closest<HTMLButtonElement>("[data-market-order-mode]");
  if (orderMode) {
    state.marketOrderMode = orderMode.dataset.marketOrderMode as "buy" | "sell";
    render();
    return;
  }
  const backButton = target.closest<HTMLButtonElement>("[data-back-to-feed]");
  if (backButton) closeStory();
});

storyDetail?.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  if (!target.matches("[data-market-amount]")) return;
  state.marketTradeAmount = Math.max(0, Number(target.value) || 0);
  const market = marketPreviews.find((item) => item.id === state.selectedMarketId);
  const snapshot = market ? state.marketSnapshots[market.id] : undefined;
  const activePrice = state.marketTradeSide === "yes"
    ? snapshot?.yesPriceCents ?? market?.probability ?? 0
    : snapshot?.noPriceCents ?? (market ? 100 - market.probability : 0);
  const payout = activePrice > 0 ? state.marketTradeAmount / (activePrice / 100) : 0;
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
  const target = event.target as HTMLElement;
  if (target.matches("[data-market-amount]")) {
    window.setTimeout(() => document.body.classList.remove("market-amount-focused"), 120);
  }
});

window.addEventListener("popstate", syncStoryFromHash);

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
    void loadFeed(state.activeCategory);
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

render();
renderWalletState();
void loadArchiveIndex();
void loadFeed();

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

const initialWallet = getConnectedArcWallet();
if (initialWallet) {
  state.walletAddress = initialWallet;
  void readArcUsdcBalance(initialWallet).then((balance) => {
    state.walletBalance = balance;
    renderWalletState();
  });
}

subscribeArcWallet((address) => {
  state.walletAddress = address;
  state.walletBalance = null;
  state.marketPositions = {};
  renderWalletState();
  if (address) {
    void readArcUsdcBalance(address).then((balance) => {
      state.walletBalance = balance;
      renderWalletState();
      if (state.activeSurface === "portfolio") render();
    });
    void loadPortfolioPositions();
  }
});
