import { createHash, randomUUID } from "node:crypto";
import { execFile } from "node:child_process";
import { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { setDefaultResultOrder } from "node:dns";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

setDefaultResultOrder("ipv4first");
import nodemailer from "nodemailer";
import { createZGComputeNetworkReadOnlyBroker } from "@0gfoundation/0g-compute-ts-sdk";
import { GatewayClient } from "@circle-fin/x402-batching/client";
import { Contract, Interface, JsonRpcProvider, Wallet, formatUnits, parseUnits } from "ethers";

const isMain = process.argv[1] && (
  process.argv[1] === fileURLToPath(import.meta.url) ||
  process.argv[1].endsWith("serve.mjs")
);
import {
  downloadShelbySnapshot,
  getShelbyBlobName,
  isShelbyArchiveConfigured,
  listShelbyArchiveFiles,
  uploadShelbySnapshot,
  backupAnalyticsToShelby,
  restoreAnalyticsFromShelby,
  downloadShelbyBlob,
  extendShelbyBlobExpiration
} from "./shelbyArchive.mjs";
import { analyzeFeedSnapshot, isDevelopmentFallbackStory } from "./feedQuality.mjs";
import { marketThreadRules, storyMatchesMarketThreadRule } from "./marketThreadRules.mjs";
import { isWithinThreadHistoryWindow } from "./threadWindow.mjs";
let archiveFileCache = new Map();
let threadHistorySnapshotCache = new Map();

const root = resolve(process.cwd());
const execFileAsync = promisify(execFile);
const port = Number(process.env.PORT ?? 5173);
const maxArticleAgeHours = Number(process.env.MAX_ARTICLE_AGE_HOURS ?? 48);
const rssItemsPerFeed = Number(process.env.RSS_ITEMS_PER_FEED ?? 30);
const summaryConcurrency = Number(process.env.SUMMARY_CONCURRENCY ?? 2);
const summaryTimeoutMs = Number(process.env.SUMMARY_TIMEOUT_MS ?? 90000);
const threadReviewTimeoutMs = Number(process.env.THREAD_REVIEW_TIMEOUT_MS ?? 90000);
const headlineRepairConcurrency = Number(process.env.HEADLINE_REPAIR_CONCURRENCY ?? 4);
const headlineRepairLimitPerSnapshot = Number(process.env.HEADLINE_REPAIR_LIMIT_PER_SNAPSHOT ?? 12);
const appTimeZone = process.env.APP_TIME_ZONE || "Africa/Lagos";
const allowedOrigin = process.env.ALLOWED_ORIGIN || process.env.ALLOWED_ORIGINS || "*";
const ogUsageMode = process.env.OG_USAGE_MODE || "conserve";
const shouldAutoSummarizeWith0G = false;
const threadReviewBudgetPerRefresh = Number(process.env.THREAD_REVIEW_BUDGET_PER_REFRESH ?? 12);
const threadPrepConcurrency = Number(process.env.THREAD_PREP_CONCURRENCY ?? 1);
const threadReviewCandidateLimit = Number(process.env.THREAD_REVIEW_CANDIDATE_LIMIT ?? 5);
const threadReviewSameDayCandidateLimit = Number(process.env.THREAD_REVIEW_SAME_DAY_CANDIDATE_LIMIT ?? 3);
const threadReviewCandidatesPerDay = Number(process.env.THREAD_REVIEW_CANDIDATES_PER_DAY ?? 3);
const threadHistoryWindowHours = Number(process.env.THREAD_HISTORY_WINDOW_HOURS ?? 48);
const enableFeedThreadPreviews = process.env.ENABLE_FEED_THREAD_PREVIEWS === "true";
const allowMockFeeds = process.env.ALLOW_MOCK_FEEDS !== "false";

const loadEnv = () => {
  const envPath = join(root, ".env");
  if (!existsSync(envPath)) return;

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
};

loadEnv();

const payoutPrivateKey = (
  process.env.AI_BRIEFING_TREASURY_PRIVATE_KEY ||
  process.env.SIFTLE_TREASURY_PRIVATE_KEY ||
  process.env.ARC_DEPLOYER_PRIVATE_KEY ||
  ""
).trim();

let deployerAddress = "";
if (process.env.ARC_DEPLOYER_PRIVATE_KEY) {
  try {
    const wallet = new Wallet(process.env.ARC_DEPLOYER_PRIVATE_KEY);
    deployerAddress = wallet.address.toLowerCase();
  } catch (err) {
    console.error("Failed to derive deployer address:", err);
  }
}
const resolverAddress = (process.env.SIFTLE_MARKET_RESOLVER ?? "").toLowerCase();
const ARC_TESTNET_CHAIN_ID = Number(process.env.ARC_TESTNET_CHAIN_ID ?? 5042002);
const ARC_TESTNET_RPC_URL = process.env.ARC_TESTNET_RPC_URL || "https://rpc.testnet.arc.network";
const leaderboardProvider = new JsonRpcProvider(ARC_TESTNET_RPC_URL, ARC_TESTNET_CHAIN_ID);
const LOCAL_TEST_MARKET_ADDRESS = "0x0000000000000000000000000000000000000101";
const isLocalTestMarketAddress = (address) => /^0x0{36}01[0-9a-f]{2}$/i.test(String(address || ""));
const marketAddresses = {
  "wc-spain-austria-spread": process.env.SIFTLE_MARKET_SPAIN_AUSTRIA_SPREAD_ADDRESS || "0x123580A3Af7E22a591a460E249346a3beeCEd930",
  "wc-ronaldo-score-assist-croatia": process.env.SIFTLE_MARKET_RONALDO_CROATIA_ADDRESS || "0xBccb9DC161C1260F3074752f4D1579a74bD86490",
  "wc-portugal-croatia-extra-time": process.env.SIFTLE_MARKET_PORTUGAL_CROATIA_EXTRA_TIME_ADDRESS || "0x18de1CD95b5c34cc5189e31510AD0C71123345cE",
  "transfer-tonali-spurs": process.env.SIFTLE_MARKET_TONALI_ADDRESS || "0xB4F9E7a45aB1B4D26D71e32b67565cE875220615",
  "transfer-guimaraes-arsenal": process.env.SIFTLE_MARKET_GUIMARAES_ADDRESS || "0xc83F2feA4b9cF25d074c4a8F26D13f26156b496B"
};
const ARC_TESTNET_USDC = process.env.ARC_TESTNET_USDC_ADDRESS || "0x3600000000000000000000000000000000000000";
const aiBriefingUnlockUsdc = Number(process.env.AI_BRIEFING_UNLOCK_USDC ?? 0.05);
const aiBriefingTreasuryAddress = (
  process.env.AI_BRIEFING_TREASURY_ADDRESS ||
  process.env.SIFTLE_TREASURY_ADDRESS ||
  deployerAddress ||
  resolverAddress ||
  ""
).toLowerCase();
const aiBriefingUnlocks = new Map();
const erc20TransferInterface = new Interface([
  "event Transfer(address indexed from, address indexed to, uint256 value)"
]);
const erc20TransferTopic = erc20TransferInterface.getEvent("Transfer").topicHash;
const leaderboardLogChunkSize = Math.min(2000, Math.max(100, Number(process.env.LEADERBOARD_LOG_CHUNK_SIZE ?? 1000)));
const leaderboardLogLookbackBlocks = Math.min(100000, Math.max(leaderboardLogChunkSize, Number(process.env.LEADERBOARD_LOG_LOOKBACK_BLOCKS ?? 50000)));
const leaderboardPositionBatchSize = Math.min(100, Math.max(5, Number(process.env.LEADERBOARD_POSITION_BATCH_SIZE ?? 20)));
const enableMemoryDebugLogs = process.env.ENABLE_MEMORY_DEBUG_LOGS === "true";
const shelbyPrepopulateOnStartup = process.env.SHELBY_PREPOPULATE_ON_STARTUP === "true";
const leaderboardMarketSignalCacheMs = Number(process.env.LEADERBOARD_MARKET_SIGNAL_CACHE_MS ?? 120000);
const marketListCacheMs = Number(process.env.MARKET_LIST_CACHE_MS ?? 120000);
const aiBriefingDailyBonusUnlocks = Math.max(1, Number(process.env.AI_BRIEFING_DAILY_BONUS_UNLOCKS ?? 3));
const aiBriefingDailyBonusPoints = Math.max(0, Number(process.env.AI_BRIEFING_DAILY_BONUS_POINTS ?? 30));
const backendWalletMode = process.env.BACKEND_WALLET_MODE === "true";
const backendWalletLocalOnly = process.env.BACKEND_WALLET_LOCAL_ONLY !== "false";
const backendWalletSessionTtlMs = Math.max(1, Number(process.env.BACKEND_WALLET_SESSION_HOURS ?? 168)) * 60 * 60 * 1000;
const backendWalletUseX402 = process.env.BACKEND_WALLET_USE_X402 === "true";
const backendWalletMigrationEnabled = process.env.BACKEND_WALLET_MIGRATION_ENABLED === "true";
const backendWalletMigrationAutoClaim = process.env.BACKEND_WALLET_MIGRATION_AUTO_CLAIM === "true";
const x402Port = Number(process.env.X402_PORT ?? 4020);
const x402TargetUrlBase = process.env.X402_TARGET_URL || `http://127.0.0.1:${x402Port}/x402/ai-briefing`;
const x402AutoDepositUsdc = String(process.env.X402_AUTO_DEPOSIT_USDC || "").trim();
const x402PriceUsdc = Math.max(0.000001, Number(String(process.env.X402_PRICE || "0.001").replace(/^\$/, "")) || 0.001);
const compensationChallengeKey = process.env.COMPENSATION_CHALLENGE_KEY || "2026-07-02-daily-compensation";
const compensationChallengeMarketIds = (
  process.env.COMPENSATION_CHALLENGE_MARKET_IDS ||
  "wc-spain-austria-spread,wc-ronaldo-score-assist-croatia,wc-portugal-croatia-extra-time"
).split(",").map((id) => id.trim()).filter(Boolean);
const compensationChallengeTwoOfThreePoints = Math.max(0, Number(process.env.COMPENSATION_CHALLENGE_TWO_OF_THREE_POINTS ?? 50));
const compensationChallengeThreeOfThreePoints = Math.max(0, Number(process.env.COMPENSATION_CHALLENGE_THREE_OF_THREE_POINTS ?? 100));
const referralWinBonusPoints = Math.max(0, Number(process.env.REFERRAL_WIN_BONUS_POINTS ?? 10));
const referralWinBonusMaxRefsPerMarket = Math.max(0, Number(process.env.REFERRAL_WIN_BONUS_MAX_REFS_PER_MARKET ?? 3));
const referralWinBonusMaxUsesPerReferral = Math.max(0, Number(process.env.REFERRAL_WIN_BONUS_MAX_USES_PER_REFERRAL ?? 5));
const rolledBackLeaderboardMarketIds = new Set([
  "wc-vozinha-saves-argentina",
  "wc-messi-impact-cape-verde",
  "wc-australia-egypt-first-event",
  "wc-colombia-ghana-halftime"
]);

const LEADERBOARD_MARKET_ABI = [
  "function outcome() view returns (uint8)",
  "function yesShares(address owner) view returns (uint256)",
  "function noShares(address owner) view returns (uint256)",
  "event SharesBought(address indexed buyer, bool indexed yes, uint256 amount)",
  "event Redeemed(address indexed account, uint256 payout)"
];

const leaderboardMarketInterface = new Interface(LEADERBOARD_MARKET_ABI);
const sharesBoughtTopic = leaderboardMarketInterface.getEvent("SharesBought").topicHash;
const redeemedTopic = leaderboardMarketInterface.getEvent("Redeemed").topicHash;

let leaderboardCache = {
  expiresAt: 0,
  analytics: null
};
let leaderboardRefreshPromise = null;
const leaderboardMarketSignalCache = new Map();
let marketListCache = {
  expiresAt: 0,
  markets: null,
  refreshPromise: null
};

const leaderboardMode = String(process.env.LEADERBOARD_MODE || "server").toLowerCase();
const allowClientLeaderboardFallback = leaderboardMode !== "server";
const supabaseUrl = String(
  process.env.SUPABASE_URL ||
  process.env.SUPABASE_PROJECT_URL ||
  process.env.PROJECT_URL ||
  process.env.project_url ||
  ""
).replace(/\/$/, "");
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_ROLE ||
  process.env.SERVICE_ROLE_KEY ||
  process.env.service_role ||
  "";
const isSupabaseConfigured = Boolean(supabaseUrl && supabaseServiceRoleKey);
const supabaseRequestTimeoutMs = Number(process.env.SUPABASE_REQUEST_TIMEOUT_MS ?? 8000);
const leaderboardCacheMs = Number(process.env.LEADERBOARD_CACHE_MS ?? 120000);
const leaderboardBrowserCacheSeconds = Number(process.env.LEADERBOARD_BROWSER_CACHE_SECONDS ?? 15);

const isAdminWallet = (address) => {
  const clean = (address || "").toLowerCase();
  if (!clean) return false;
  if (clean === deployerAddress) return true;
  if (clean === resolverAddress) return true;
  const adminAddressesEnv = (process.env.ADMIN_ADDRESSES ?? "").split(",").map(a => a.trim().toLowerCase()).filter(Boolean);
  if (adminAddressesEnv.includes(clean)) return true;
  return false;
};

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"]
]);

const categories = ["All", "Sports"];
const sourceCategories = categories.filter((category) => category !== "All");
const archiveDir = join(root, ".siftle", "archive");
const publishedDir = join(root, ".siftle", "published");
const marketThreadStoreDir = join(root, ".siftle", "market-threads");
const marketThreadSeedDir = join(root, "data", "marketThreads");
const analyticsBootFile = join(root, ".siftle", "analytics.json");
const backendWalletUsersFile = join(root, ".siftle", "backend-wallet-users.json");
const backendWalletSessionsFile = join(root, ".siftle", "backend-wallet-sessions.json");
const backendWalletMigrationsFile = join(root, ".siftle", "backend-wallet-migrations.json");

let appDateFormatter = null;
const getAppDate = (value = new Date()) => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  if (!appDateFormatter) {
    appDateFormatter = new Intl.DateTimeFormat("en", {
      timeZone: appTimeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }

  const parts = appDateFormatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return year && month && day ? `${year}-${month}-${day}` : null;
};

const getTodayKey = () => getAppDate() ?? new Date().toISOString().slice(0, 10);

const categoryQueries = {
  All: "crypto football NBA anime technology company platform startup AI trending GTA 6 Gaming Battlefield PlayStation Xbox Nintendo console Steam",
  Crypto: "crypto bitcoin ethereum blockchain DeFi stablecoin",
  Sports: "football soccer NBA Champions League Premier League transfers",
  Anime: "anime manga Crunchyroll trailer adaptation studio",
  Tech: "technology company platform product launch AI startup cybersecurity cloud",
  Gaming: "GTA 6 GTA VI Battlefield PlayStation Xbox Nintendo gaming console RPG steam release"
};

const categoryMap = {
  bitcoin: "Crypto",
  ethereum: "Crypto",
  crypto: "Crypto",
  blockchain: "Crypto",
  defi: "Crypto",
  stablecoin: "Crypto",
  football: "Sports",
  soccer: "Sports",
  basketball: "Sports",
  nba: "Sports",
  arsenal: "Sports",
  chelsea: "Sports",
  liverpool: "Sports",
  manchester: "Sports",
  "real madrid": "Sports",
  barcelona: "Sports",
  uefa: "Sports",
  "champions league": "Sports",
  "premier league": "Sports",
  transfer: "Sports",
  anime: "Anime",
  manga: "Anime",
  manhwa: "Anime",
  crunchyroll: "Anime",
  "anime news network": "Anime",
  anilist: "Anime",
  "myanimelist": "Anime",
  tech: "Tech",
  technology: "Tech",
  programming: "Tech",
  software: "Tech",
  developer: "Tech",
  developers: "Tech",
  javascript: "Tech",
  typescript: "Tech",
  python: "Tech",
  "open source": "Tech",
  github: "Tech",
  openai: "Tech",
  "generative ai": "Tech",
  "machine learning": "Tech",
  "artificial intelligence": "Tech",
  cloud: "Tech",
  cybersecurity: "Tech",
  startup: "Tech",
  startups: "Tech",
  gta: "Gaming",
  battlefield: "Gaming",
  playstation: "Gaming",
  xbox: "Gaming",
  nintendo: "Gaming",
  gaming: "Gaming",
  console: "Gaming",
  rpg: "Gaming",
  steam: "Gaming",
  gamer: "Gaming",
  "video games": "Gaming",
  "light novel": "Anime",
  webtoon: "Anime",
  adaptation: "Anime",
  airdrop: "Crypto",
  tge: "Crypto"
};

const categorySignals = {
  Crypto: [
    "bitcoin",
    "btc",
    "ethereum",
    "eth",
    "crypto",
    "blockchain",
    "defi",
    "stablecoin",
    "stablecoins",
    "usdc",
    "usdt",
    "solana",
    "sol",
    "token",
    "tokenized",
    "wallet",
    "exchange",
    "dex",
    "onchain",
    "on-chain",
    "web3",
    "nft",
    "dao",
    "xrp",
    "memecoin",
    "meme coin",
    "airdrop",
    "tge",
    "listing",
    "hack",
    "exploit"
  ],
  Sports: [
    "football",
    "soccer",
    "basketball",
    "nba",
    "champions league",
    "premier league",
    "uefa",
    "fifa",
    "la liga",
    "serie a",
    "bundesliga",
    "mls",
    "transfer",
    "arsenal",
    "chelsea",
    "liverpool",
    "madrid",
    "barcelona",
    "rumor",
    "rumour",
    "signing",
    "trade",
    "injury",
    "sidelined"
  ],
  Anime: [
    "anime",
    "manga",
    "manhwa",
    "crunchyroll",
    "anilist",
    "myanimelist",
    "studio",
    "voice actor",
    "light novel",
    "adaptation",
    "webtoon",
    "release date",
    "premiere"
  ],
  Tech: [
    "technology",
    "software",
    "platform",
    "product",
    "launch",
    "company",
    "companies",
    "security",
    "cloud",
    "ai",
    "github",
    "google",
    "apple",
    "microsoft",
    "meta",
    "amazon",
    "nvidia",
    "openai",
    "anthropic",
    "generative ai",
    "machine learning",
    "artificial intelligence",
    "cybersecurity",
    "startup",
    "startups",
    "model",
    "llm",
    "framework",
    "open source",
    "gpu",
    "keynote"
  ],
  Gaming: [
    "gta",
    "battlefield",
    "playstation",
    "xbox",
    "nintendo",
    "gaming",
    "console",
    "rpg",
    "steam",
    "gamer",
    "video game",
    "video games",
    "multiplayer",
    "ubisoft",
    "ea sports",
    "activision",
    "bethesda",
    "epic games",
    "sony",
    "microsoft",
    "pc gamer",
    "review",
    "preview",
    "dlc",
    "expansion",
    "metacritic",
    "trailer"
  ]
};

const getArticleText = (article) =>
  `${article.category ?? ""} ${article.headline ?? ""} ${article.summary ?? ""} ${article.source ?? ""} ${article.sourceUrl ?? ""}`.toLowerCase();

const matchesCategorySignal = (article, category) => {
  if (category === "All") return true;
  if (article.category === category && category !== "Sports") return true;
  const signals = categorySignals[category] ?? [];
  if (signals.length === 0) return true;
  const haystack = getArticleText(article);
  return signals.some((signal) => haystack.includes(signal));
};

const PAID_SOURCE_DOMAINS = [
  "bloomberg.com",
  "wsj.com",
  "ft.com",
  "nytimes.com",
  "economist.com",
  "wired.com",
  "dlnews.com",
  "technologyreview.com",
  "hbr.org",
  "medium.com",
  "thetimes.co.uk",
  "telegraph.co.uk",
  "barrons.com",
  "seekingalpha.com",
  "theathletic.com",
  "forbes.com",
  "businessinsider.com",
  "newyorker.com",
  "adweek.com",
  "nikkei.com"
];

const isPaidSource = (article) => {
  const urlStr = article?.link || article?.sourceUrl || "";
  if (!urlStr) return false;
  try {
    const url = new URL(urlStr);
    const host = url.hostname.toLowerCase();
    return PAID_SOURCE_DOMAINS.some((domain) => host === domain || host.endsWith("." + domain));
  } catch {
    const lowerUrl = urlStr.toLowerCase();
    return PAID_SOURCE_DOMAINS.some((domain) => lowerUrl.includes(domain));
  }
};

const rssFeeds = {
  Sports: [
    "https://feeds.bbci.co.uk/sport/football/rss.xml",
    "https://www.theguardian.com/football/rss",
    "https://www.transfermarkt.co.uk/rss/news",
    "https://www.skysports.com/rss/12040",
    "https://www.caughtoffside.com/feed/",
    "https://www.football365.com/transfer-gossip/feed",
    "https://www.90min.com/posts.rss",
    "https://e00-marca.uecdn.es/rss/en/index.xml",
    "https://www.football-espana.net/feed",
    "https://football-italia.net/feed/",
    "https://bulinews.com/rss.xml"
  ]
};

const mockStories = [
  {
    id: 1,
    headline: "SOL price rises as Coinbase stablecoin launch boosts attention",
    category: "Crypto",
    summary: "Crypto traders are watching Solana after exchange activity and stablecoin news pushed fresh liquidity discussion.",
    source: "Crypto Desk",
    sourceUrl: "https://example.com/sol-coinbase-stablecoin",
    imageUrl: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1200&q=80",
    readTime: "2 min read",
    postedAt: "18m",
    accent: "blue",
    saved: false
  },
  {
    id: 2,
    headline: "Transfer window rumors build around Premier League clubs",
    category: "Sports",
    summary: "Football fans are tracking reports around striker targets, contract renewals, and late-window squad decisions.",
    source: "Football Brief",
    sourceUrl: "https://example.com/football-transfer-rumors",
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min read",
    postedAt: "34m",
    accent: "teal",
    saved: false
  },
  {
    id: 3,
    headline: "New anime adaptation confirmed after manga sales surge",
    category: "Anime",
    summary: "A popular manga series is getting an anime adaptation after months of fan speculation and rising sales.",
    source: "Anime Wire",
    sourceUrl: "https://example.com/anime-adaptation-announced",
    imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min read",
    postedAt: "52m",
    accent: "violet",
    saved: true
  },
  {
    id: 4,
    headline: "Developers track new AI coding tools and framework releases",
    category: "Tech",
    summary: "Programming teams are watching updates across AI-assisted development, web frameworks, cloud platforms, and open-source tooling.",
    source: "Tech Brief",
    sourceUrl: "https://example.com/programming-ai-tools",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min read",
    postedAt: "42m",
    accent: "slate",
    saved: false
  },
  {
    id: 5,
    headline: "Highly anticipated next-gen sandbox gameplay features detailed in leak",
    category: "Gaming",
    summary: "New reports outline advanced AI interactions, dynamic weather systems, and massive map scale in the upcoming open-world title.",
    source: "VGC News",
    sourceUrl: "https://example.com/sandbox-gameplay-leak",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min read",
    postedAt: "1h",
    accent: "orange",
    saved: false
  }
];

const getMockStoriesForCategory = (category) =>
  category === "All" ? mockStories : mockStories.filter((story) => story.category === category);

const hasRealStories = (snapshot) =>
  Array.isArray(snapshot?.top_stories) &&
  snapshot.top_stories.some((story) => story.sourceUrl && !/example\.com/i.test(story.sourceUrl));

const threadStopWords = new Set([
  "about",
  "after",
  "amid",
  "also",
  "against",
  "aged",
  "ahead",
  "arrive",
  "appoint",
  "appointed",
  "bitcoin",
  "before",
  "buildup",
  "camp",
  "card",
  "cards",
  "champions",
  "coach",
  "dies",
  "drop",
  "drops",
  "final",
  "from",
  "game",
  "games",
  "head",
  "have",
  "holdings",
  "into",
  "league",
  "live",
  "match",
  "matches",
  "more",
  "over",
  "party",
  "players",
  "pre",
  "qualifier",
  "qualifying",
  "season",
  "says",
  "sports",
  "team",
  "teams",
  "that",
  "their",
  "this",
  "tournament",
  "with",
  "will",
  "world",
  "news",
  "latest",
  "launch",
  "launches",
  "launching",
  "today",
  "tokenized",
  "tokenization",
  "report",
  "reports",
  "rewards",
  "revenue",
  "update",
  "updates"
]);

const threadGenericEntities = new Set([
  "AI",
  "Analyst",
  "Anime",
  "BBC",
  "BIS",
  "Bitcoin",
  "BTC",
  "Card",
  "Cards",
  "Champions League",
  "Crypto",
  "ETH",
  "Ethereum",
  "Episode",
  "FA Cup",
  "Film",
  "Latest",
  "Manga",
  "May",
  "News",
  "Holdings",
  "Launch",
  "Payments",
  "Premier League",
  "Preview",
  "Report",
  "Season",
  "Sports",
  "Stablecoin",
  "Stablecoins",
  "Tech",
  "The",
  "Tokenized",
  "Tokenization",
  "USD",
  "Visa",
  "Wholesale",
  "World Cup"
]);

const normalizeStoryUrl = (url = "") => String(url).trim().toLowerCase().replace(/[?#].*$/, "");

const storyDateKey = (story, fallbackDate) => getAppDate(story?.publishedAt) ?? fallbackDate ?? null;

const decodeThreadEntities = (text = "") =>
  String(text)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&nbsp;/gi, " ");

const cleanThreadText = (text = "") =>
  decodeThreadEntities(stripHtml(text))
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const getStoryThreadText = (story) => cleanThreadText(`${story?.headline ?? ""} ${story?.summary ?? ""}`);

const tokenizeThreadText = (story, headlineOnly = false) => {
  const text = cleanThreadText(headlineOnly ? story?.headline ?? "" : `${story?.headline ?? ""} ${story?.summary ?? ""}`)
    .toLowerCase()
    .replace(/[^a-z0-9$]+/g, " ");

  return new Set(
    text
      .split(/\s+/)
      .map((word) => word.trim())
      .filter((word) => word.length >= 4 && !/^\d+$/.test(word) && !threadStopWords.has(word))
      .slice(0, 80)
  );
};

const titleCaseThreadTopic = (value = "") =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) =>
      /^[A-Z0-9$]{2,}$/.test(word)
        ? word
        : word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

const normalizeThreadEntity = (value = "") =>
  cleanThreadText(value)
    .replace(/[’']s\b/gi, "")
    .replace(/^[^A-Za-z0-9$]+|[^A-Za-z0-9$]+$/g, "")
    .trim();

const isUsefulThreadEntity = (value = "") => {
  const entity = normalizeThreadEntity(value);
  if (!entity || entity.length < 3 || threadGenericEntities.has(entity)) return false;
  if (/^(?:\d+[\s-]*)?(?:BTC|ETH|SOL|USD|USDT|USDC)$/i.test(entity)) return false;
  if (/^(?:Bitcoin|Ethereum|Solana|Crypto|Token|Tokens|Holdings|Revenue)$/i.test(entity)) return false;
  if (/^\d+(?:\.\d+)?\s+(?:BTC|ETH|SOL|USD|USDT|USDC)$/i.test(entity)) return false;
  if (/^\d{1,4}$/.test(entity) || /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)$/i.test(entity)) {
    return false;
  }

  const meaningfulWords = entity
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length >= 3 && !threadStopWords.has(word));
  return meaningfulWords.length > 0;
};

const extractThreadEntities = (story) => {
  const text = getStoryThreadText(story);
  const entities = new Set();
  const entityPattern =
    /\b(?:[A-Z][A-Za-z0-9$]*(?:[-'][A-ZA-Za-z0-9$]+)*|[A-Z0-9$]{2,})(?:\s+(?:[A-Z][A-Za-z0-9$]*(?:[-'][A-ZA-Za-z0-9$]+)*|[A-Z0-9$]{2,})){0,4}\b/g;

  const headlinePrefix = cleanThreadText(story?.headline ?? "").match(/^(.{3,70}?)(?::|\s-\s|\sSeason\s|\sEpisode\s)/i)?.[1];
  if (headlinePrefix && isUsefulThreadEntity(headlinePrefix)) entities.add(normalizeThreadEntity(headlinePrefix));

  for (const match of text.matchAll(entityPattern)) {
    const entity = normalizeThreadEntity(match[0]);
    if (!isUsefulThreadEntity(entity)) continue;
    entities.add(entity);
  }

  for (const token of tokenizeThreadText(story)) {
    if (/^\$?[a-z0-9]{3,8}$/.test(token) && /[0-9$]/.test(token)) entities.add(token.toUpperCase());
  }

  return entities;
};

const getPrimaryThreadAnchors = (story) => {
  const headlineStory = { ...story, summary: "" };
  const anchors = new Set();

  for (const entity of extractThreadEntities(headlineStory)) {
    if (isUsefulThreadEntity(entity)) anchors.add(entity);
  }

  for (const token of tokenizeThreadText(headlineStory, true)) {
    if (/^\$?[a-z0-9]{3,12}$/.test(token) && !/^\d+$/.test(token) && !threadStopWords.has(token)) {
      const normalized = token.toUpperCase();
      if (!threadGenericEntities.has(normalized) && !threadGenericEntities.has(titleCaseThreadTopic(token))) {
        anchors.add(normalized);
      }
    }
  }

  return anchors;
};

const getSharedPrimaryAnchors = (story, candidate) =>
  getSharedValues(getPrimaryThreadAnchors(story), getPrimaryThreadAnchors(candidate));

const cryptoProductThreadTerms = new Set([
  "earn",
  "vault",
  "vaults",
  "defi",
  "yield",
  "liquidity",
  "stablecoin",
  "stablecoins",
  "etf",
  "etfs",
  "treasury",
  "sale",
  "outflows",
  "inflows",
  "acquisition"
]);

const hasSharedCryptoProductContext = (story, candidate) => {
  if (story?.category !== "Crypto" || candidate?.category !== "Crypto") return false;

  const storyText = getStoryThreadText(story).toLowerCase();
  const candidateText = getStoryThreadText(candidate).toLowerCase();
  const sharedEntities = getSharedValues(extractThreadEntities(story), extractThreadEntities(candidate))
    .filter(isUsefulThreadEntity);
  if (sharedEntities.length === 0) return false;

  let sharedTerms = 0;
  for (const term of cryptoProductThreadTerms) {
    if (storyText.includes(term) && candidateText.includes(term)) sharedTerms += 1;
  }

  return sharedTerms >= 2;
};

const getSharedCryptoProductTerms = (story, relatedItems = []) => {
  if (story?.category !== "Crypto") return [];
  const storyText = getStoryThreadText(story).toLowerCase();
  const counts = new Map();

  for (const item of relatedItems) {
    const itemText = getStoryThreadText(item).toLowerCase();
    for (const term of cryptoProductThreadTerms) {
      if (storyText.includes(term) && itemText.includes(term)) {
        counts.set(term, (counts.get(term) ?? 0) + 1);
      }
    }
  }

  return [...counts.entries()]
    .sort((first, second) => second[1] - first[1])
    .map(([term]) => titleCaseThreadTopic(term))
    .slice(0, 2);
};

const getCryptoThreadBrand = (story, relatedItems = []) => {
  if (story?.category !== "Crypto") return "";
  const storyText = getStoryThreadText(story).toLowerCase();
  const relatedText = relatedItems.map(getStoryThreadText).join(" ").toLowerCase();
  const brands = ["kraken", "coinbase", "binance", "bybit", "okx", "moneygram", "stellar", "strategy", "polymarket", "veda", "privy"];

  return titleCaseThreadTopic(brands.find((brand) => storyText.includes(brand) && relatedText.includes(brand)) ?? "");
};

const getSharedCount = (firstSet, secondSet) => {
  let count = 0;
  for (const value of firstSet) {
    if (secondSet.has(value)) count += 1;
  }
  return count;
};

const getSharedValues = (firstSet, secondSet) => {
  const values = [];
  for (const value of firstSet) {
    if (secondSet.has(value)) values.push(value);
  }
  return values;
};

const hasSharedDistinctivePhrase = (story, candidate) => {
  const storyText = getStoryThreadText(story).toLowerCase();
  const candidateText = getStoryThreadText(candidate).toLowerCase();
  const words = [...tokenizeThreadText(story, true)].filter((word) => !/^\d+$/.test(word));

  for (let size = 3; size >= 2; size -= 1) {
    for (let index = 0; index <= words.length - size; index += 1) {
      const phrase = words.slice(index, index + size).join(" ");
      if (phrase.length >= 11 && candidateText.includes(phrase) && storyText.includes(phrase)) return true;
    }
  }

  return false;
};

const getCleanHeadlineTopic = (story) => {
  const headline = cleanThreadText(story?.headline ?? "")
    .replace(/\s+[–-]\s+live\b.*$/i, "")
    .replace(/\s*\|\s*.*$/i, "")
    .replace(/\bpreview\b.*$/i, "preview")
    .replace(/\s+/g, " ")
    .trim();

  if (!headline) return story?.category ?? "Thread";
  return headline.length <= 76 ? headline : `${headline.slice(0, 73).trim()}...`;
};

const getCryptoCompanyThreadTopic = (story, sharedEntity = "") => {
  if (story?.category !== "Crypto" || !sharedEntity) return "";
  const text = getStoryThreadText(story).toLowerCase();
  const entity = cleanThreadText(sharedEntity);
  if (!entity || /^(bitcoin|btc|ethereum|eth|crypto)$/i.test(entity)) return "";

  if (text.includes("holdings") && text.includes("bitcoin")) return `${entity} Bitcoin Holdings`;
  if (text.includes("revenue")) return `${entity} Revenue Report`;
  if (text.includes("stablecoin")) return `${entity} Stablecoin Launch`;
  if (text.includes("tokenization") || text.includes("tokenized")) return `${entity} Tokenization Push`;
  if (text.includes("etf")) return `${entity} ETF Flows`;
  return "";
};

const getThreadReviewCachePath = (story, candidates) => {
  const cacheDir = join(root, ".siftle", "cache", "threads");
  mkdirSync(cacheDir, { recursive: true });
  const candidateKey = candidates.map((candidate) => normalizeStoryUrl(candidate.sourceUrl)).sort().join("|");
  const key = createHash("sha256")
    .update(`${normalizeStoryUrl(story?.sourceUrl)}|${story?.headline ?? ""}|${candidateKey}`)
    .digest("hex")
    .slice(0, 32);
  return join(cacheDir, `${key}.json`);
};

const threadReviewPromptVersion = "persistent-timeline-judge-v9";

const getThreadTopic = (story, relatedItems = []) => {
  if (story?.category === "Anime") return getCleanHeadlineTopic(story);

  const entityCounts = new Map();
  const storyEntities = extractThreadEntities(story);

  for (const item of relatedItems) {
    for (const entity of getSharedValues(storyEntities, extractThreadEntities(item))) {
      entityCounts.set(entity, (entityCounts.get(entity) ?? 0) + 1);
    }
  }

  const sharedEntities = [...entityCounts.entries()]
    .sort((first, second) => {
      if (second[1] !== first[1]) return second[1] - first[1];
      return second[0].length - first[0].length;
    })
    .map(([entity]) => entity)
    .slice(0, 2);

  const productTerms = getSharedCryptoProductTerms(story, relatedItems);
  const cryptoBrand = getCryptoThreadBrand(story, relatedItems);
  if (story?.category === "Crypto" && cryptoBrand && productTerms.length >= 1) {
    const topic = `${cryptoBrand} ${productTerms[0]}${productTerms[1] ? ` / ${productTerms[1]}` : ""}`;
    if (topic.length <= 70) return topic;
  }

  if (story?.category === "Crypto" && sharedEntities.length >= 1 && productTerms.length >= 1) {
    const topic = [...sharedEntities.slice(0, 1), ...productTerms].join(" / ");
    if (topic.length <= 70) return topic;
  }

  const cryptoCompanyTopic = getCryptoCompanyThreadTopic(story, sharedEntities[0]);
  if (cryptoCompanyTopic) return cryptoCompanyTopic;

  if (sharedEntities.length >= 2 && sharedEntities.join(" / ").length <= 70) return sharedEntities.join(" / ");

  return getCleanHeadlineTopic(story);
};

const normalizeThreadReviewTopic = (topic, story, items) => {
  const cleaned = cleanThreadText(topic);
  const fallback = getThreadTopic(story, items);
  if (!cleaned) return fallback;

  const normalizedTopic = cleaned.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const normalizedHeadline = cleanThreadText(story?.headline ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const wordCount = cleaned.split(/\s+/).filter(Boolean).length;
  const genericTopicPattern = /\b(latest|updates?|news|thread|story|today)\b/i;

  if (cleaned.length > 72 || wordCount < 3 || wordCount > 10) return fallback;
  if (normalizedHeadline && normalizedHeadline.includes(normalizedTopic) && normalizedTopic.length > 40) return fallback;
  if (genericTopicPattern.test(cleaned) && !/\b(build|launch|rollout|probe|talks|deal|lawsuit|outage|earn|vault|finals|transfer)\b/i.test(cleaned)) {
    return fallback;
  }

  return cleaned;
};

const storyForThreadReview = (story, index) => ({
  id: index,
  headline: cleanThreadText(story.headline ?? ""),
  summary: cleanThreadText(story.ai_summary || story.summary || ""),
  article_excerpt: cleanThreadText(`${story.headline ?? ""}. ${story.ai_summary || story.summary || ""}`).slice(0, 650),
  source: story.source ?? "",
  category: story.category ?? "",
  publishedAt: story.publishedAt ?? "",
  calendar_date: storyDateKey(story),
  sourceUrl: story.sourceUrl ?? "",
  ...(story.__threadContext
    ? {
        existing_thread_context: {
          topic: story.__threadContext.topic,
          count: story.__threadContext.items.length,
          reviewed_by: story.__threadContext.reviewed_by,
          timeline: story.__threadContext.items.slice(0, 10).map((item) => ({
            headline: cleanThreadText(item.headline ?? ""),
            calendar_date: storyDateKey(item),
            summary: cleanThreadText(item.ai_summary || item.summary || "").slice(0, 220)
          }))
        }
      }
    : {})
});

const parseThreadReviewResponse = (data) => {
  const content = data?.choices?.[0]?.message?.content ?? "";
  const jsonText = content.match(/\{[\s\S]*\}/)?.[0];
  if (!jsonText) return null;

  try {
    return JSON.parse(jsonText);
  } catch {
    return null;
  }
};

const isSpecificThreadEvidence = (item) => {
  const actor = cleanThreadText(item?.shared_actor ?? "");
  const event = cleanThreadText(item?.shared_event ?? "");
  const whyRelated = cleanThreadText(item?.why_related ?? item?.reason ?? "");
  const whyNotBroad = cleanThreadText(item?.why_not_broad ?? "");
  const combined = `${actor} ${event} ${whyRelated} ${whyNotBroad}`.toLowerCase();
  const vagueValues = new Set(["", "same topic", "same category", "same company", "same actor", "same team", "same coin", "same sport", "related"]);

  if (vagueValues.has(actor.toLowerCase()) || vagueValues.has(event.toLowerCase())) return false;
  if (actor.length < 2 || event.length < 8 || whyRelated.length < 18 || whyNotBroad.length < 14) return false;
  if (!/\b(not|rather than|because|specific|direct|same event|same product|same launch|same dispute|same deal|same outage|same report|same match|same transfer|same investigation|same earnings|same holdings)\b/i.test(whyNotBroad)) {
    return false;
  }
  if (/\b(general|broad|category|industry|market|topic)\b/.test(combined) && !/\bnot\b/.test(whyNotBroad.toLowerCase())) {
    return false;
  }

  return true;
};

const strictLocalThreadFallback = (story, scoredCandidates) => {
  const items = scoredCandidates
    .filter((item) => isStrictLocalThreadMatch(story, item.story, item.score))
    .map((item) => item.story)
    .slice(0, 6);

  return {
    topic: getThreadTopic(story, items),
    count: items.length,
    current: story,
    items,
    reviewed_by: "local-strict"
  };
};

const emptyReviewedThread = (story, reviewedBy = "0g-unavailable") => ({
  topic: "",
  count: 0,
  current: story,
  items: [],
  reviewed_by: reviewedBy
});

const synthesizeThreadTopicWith0G = async ({ story, items, apiKey, model, endpoint }) => {
  if (!apiKey || !endpoint || !Array.isArray(items) || items.length < 1) return "";

  const response = await fetch(`${endpoint}/chat/completions`, {
    method: "POST",
    signal: AbortSignal.timeout(Number(process.env.THREAD_TOPIC_TIMEOUT_MS ?? threadReviewTimeoutMs)),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are Siftle's thread-title editor. Return ONLY valid JSON. Read the current article and the related articles, infer the single shared developing story, and write a concise topic. Do not copy a full headline. Use 4 to 9 words, title case, no source names, no dates unless essential, no question mark, no market framing."
        },
        {
          role: "user",
          content: JSON.stringify({
            current: storyForThreadReview(story, "current"),
            related_articles: items.slice(0, 4).map(storyForThreadReview),
            required_output: {
              thread_topic: "4-9 word topic naming the shared actor plus event/catalyst",
              reasoning: "one short sentence explaining what the articles are talking about together"
            },
            good_examples: [
              "Blue Origin New Glenn Launchpad Probe",
              "Kraken Earn / Bitcoin Vault Rollout",
              "Liverpool Andoni Iraola Talks",
              "Amazon Prime Day 2026 Dates",
              "Microsoft Build Copilot Announcements"
            ]
          })
        }
      ],
      temperature: 0,
      max_tokens: 500
    })
  });

  if (!response.ok) throw await get0GHttpError(response, "0G thread topic");
  const data = await response.json();
  const parsed = parseThreadReviewResponse(data);
  return cleanThreadText(parsed?.thread_topic ?? "");
};

const isStrictLocalThreadMatch = (story, candidate, score) => {
  const sharedPrimaryAnchors = getSharedPrimaryAnchors(story, candidate);
  const sharedEntities = getSharedValues(extractThreadEntities(story), extractThreadEntities(candidate))
    .filter(isUsefulThreadEntity);
  const sharedPhrase = hasSharedDistinctivePhrase(story, candidate);
  const headlineOverlap = getSharedCount(tokenizeThreadText(story, true), tokenizeThreadText(candidate, true));

  const hasCryptoProductContext = hasSharedCryptoProductContext(story, candidate);
  if (sharedPrimaryAnchors.length === 0 && !hasCryptoProductContext) return false;

  if (story?.category === "Sports") {
    return score >= 0.58 && sharedEntities.length >= 1 && (sharedPhrase || headlineOverlap >= 2);
  }

  if (story?.category === "Tech") {
    return score >= 0.56 && sharedEntities.length >= 1 && (sharedPhrase || headlineOverlap >= 2);
  }

  if (story?.category === "Anime") {
    return score >= 0.48 && (sharedPhrase || headlineOverlap >= 1 || sharedEntities.length >= 1);
  }

  if (story?.category === "Crypto") {
    return score >= 0.42 && (hasCryptoProductContext || (sharedPrimaryAnchors.length >= 1 && (sharedEntities.length >= 1 || sharedPhrase || headlineOverlap >= 2)));
  }

  if (story?.category === "Gaming") {
    return score >= 0.52 && sharedEntities.length >= 1 && (sharedPhrase || headlineOverlap >= 1);
  }

  return score >= 0.56 && sharedEntities.length >= 1;
};

const scoreThreadMatch = (story, candidate) => {
  if (!story || !candidate || story.category !== candidate.category) return 0;
  if (normalizeStoryUrl(story.sourceUrl) === normalizeStoryUrl(candidate.sourceUrl)) return 0;
  if (!isThreadableStory(story) || !isThreadableStory(candidate)) return 0;

  const storyTokens = tokenizeThreadText(story);
  const candidateTokens = tokenizeThreadText(candidate);
  if (storyTokens.size === 0 || candidateTokens.size === 0) return 0;

  let overlap = 0;
  for (const token of storyTokens) {
    if (candidateTokens.has(token)) overlap += 1;
  }

  const storyHeadlineTokens = tokenizeThreadText(story, true);
  const candidateHeadlineTokens = tokenizeThreadText(candidate, true);
  const headlineOverlap = getSharedCount(storyHeadlineTokens, candidateHeadlineTokens);
  const sharedEntities = getSharedCount(extractThreadEntities(story), extractThreadEntities(candidate));
  const sharedPrimaryAnchors = getSharedCount(getPrimaryThreadAnchors(story), getPrimaryThreadAnchors(candidate));
  const sharedPhrase = hasSharedDistinctivePhrase(story, candidate);
  const hasAnchor = sharedPrimaryAnchors >= 1 || sharedEntities >= 1 || headlineOverlap >= 2 || sharedPhrase;
  if (!hasAnchor || (overlap < 2 && sharedPrimaryAnchors < 1)) return 0;

  const baseScore = overlap / Math.min(storyTokens.size, candidateTokens.size);
  const headlineBonus = Math.min(headlineOverlap * 0.08, 0.24);
  const entityBonus = Math.min(sharedEntities * 0.14, 0.28);
  const anchorBonus = Math.min(sharedPrimaryAnchors * 0.1, 0.2);
  const phraseBonus = sharedPhrase ? 0.18 : 0;
  return baseScore + headlineBonus + entityBonus + anchorBonus + phraseBonus;
};

const isThreadableStory = (story) => {
  const headline = cleanThreadText(story?.headline ?? "").toLowerCase();
  const summary = cleanThreadText(story?.summary ?? "").toLowerCase();
  const text = `${headline} ${summary}`;

  if (!headline || /example\.com/i.test(story?.sourceUrl ?? "")) return false;

  const nonThreadPatterns = [
    /\blive\b/,
    /\btracker\b/,
    /\branking\b/,
    /\brankings\b/,
    /\bguide\b/,
    /\bpreview\b/,
    /\broundup\b/,
    /\brecap\b/,
    /\bwallchart\b/,
    /\bfixtures?\b/,
    /\bschedule\b/,
    /\bwhat to watch\b/,
    /\bbest\b/,
    /\btop \d+\b/,
    /\bhow to\b/,
    /\btips?\b/,
    /\bcoupons?\b/,
    /\bpromo codes?\b/,
    /\bdeals?\b/,
    /\breview\b/,
    /\btransfer rumors?\b/,
    /\btransfer rumours?\b/,
    /\btransfer talk\b/,
    /\bstorylines\b/,
    /\bmatchups\b/
  ];

  if (nonThreadPatterns.some((pattern) => pattern.test(text))) return false;
  return true;
};

const sortStoriesByPublishedAtDesc = (stories) =>
  [...stories].sort((first, second) => {
    const firstTime = new Date(first.publishedAt || 0).getTime();
    const secondTime = new Date(second.publishedAt || 0).getTime();
    return (Number.isNaN(secondTime) ? 0 : secondTime) - (Number.isNaN(firstTime) ? 0 : firstTime);
  });

export const isCandidatePrior = (candidate, story) => {
  const candidateTime = new Date(candidate.publishedAt || 0).getTime();
  const currentTime = new Date(story.publishedAt || 0).getTime();
  const candidateValid = !Number.isNaN(candidateTime);
  const currentValid = !Number.isNaN(currentTime);

  if (candidateValid && currentValid) {
    if (candidateTime < currentTime) return true;
    if (candidateTime > currentTime) return false;
  }
  const candUrl = normalizeStoryUrl(candidate.sourceUrl) || "";
  const storyUrl = normalizeStoryUrl(story.sourceUrl) || "";
  return candUrl < storyUrl;
};

export const getHistoricalThreadCandidates = (story, currentStories = []) => {
  const currentDate = storyDateKey(story, getTodayKey());
  const storyPublishedDate = story?.publishedAt ? new Date(story.publishedAt) : new Date(getTodayKey() + "T00:00:00");
  const currentTime = Number.isNaN(storyPublishedDate.getTime())
    ? new Date(getTodayKey() + "T00:00:00").getTime()
    : storyPublishedDate.getTime();
  const hasCurrentTime = !Number.isNaN(currentTime);
  const minCandidateDate = hasCurrentTime
    ? new Date(currentTime - Math.max(1, threadHistoryWindowHours) * 60 * 60 * 1000).toISOString().slice(0, 10)
    : null;
  const seen = new Set([normalizeStoryUrl(story.sourceUrl)]);
  const candidates = [];
  const cacheKey = `${String(story.category || "")}:${currentDate || ""}:${minCandidateDate || ""}`;

  const addSnapshotStories = (snapshot, fallbackDate) => {
    const threadContextByUrl = new Map();
    const archivedThreadStories = Object.values(snapshot?.threads ?? {}).flatMap((thread) => {
      const items = [...(thread?.current ? [thread.current] : []), ...(thread?.items ?? [])];
      const context = {
        topic: thread?.topic ?? "",
        reviewed_by: thread?.reviewed_by ?? "",
        items
      };
      for (const item of items) {
        const url = normalizeStoryUrl(item?.sourceUrl);
        if (url) threadContextByUrl.set(url, context);
      }
      return items;
    });
    const snapshotStories = [...(snapshot?.top_stories ?? []), ...archivedThreadStories];

    for (const candidate of snapshotStories) {
      const url = normalizeStoryUrl(candidate.sourceUrl);
      if (!url || seen.has(url) || candidate.category !== story.category) continue;

      const candidateDate = storyDateKey(candidate, fallbackDate);
      const candidateTime = new Date(candidate.publishedAt || 0).getTime();
      if (currentDate && candidateDate && candidateDate > currentDate) continue;
      if (hasCurrentTime && !Number.isNaN(candidateTime) && !isWithinThreadHistoryWindow(story.publishedAt, candidate.publishedAt, threadHistoryWindowHours)) {
        continue;
      }
      if (currentDate && candidateDate === currentDate && !isCandidatePrior(candidate, story)) {
        continue;
      }

      seen.add(url);
      candidates.push({
        ...candidate,
        ...(threadContextByUrl.has(url) ? { __threadContext: threadContextByUrl.get(url) } : {}),
        postedAt: candidate.publishedAt ? formatArchiveStoryDate(candidate.publishedAt, candidateDate ?? fallbackDate) : candidate.postedAt
      });
    }
  };

  if (currentStories && currentStories.length > 0) {
    addSnapshotStories({ top_stories: currentStories }, currentDate);
  }

  let cachedSnapshots = threadHistorySnapshotCache.get(cacheKey);
  if (!cachedSnapshots) {
    cachedSnapshots = [];

    if (existsSync(archiveDir)) {
      for (const filename of readdirSync(archiveDir).filter((file) => file.endsWith(".json"))) {
        const match = filename.match(/^(\d{4}-\d{2}-\d{2})-([a-z]+)\.json$/i);
        if (!match) continue;
        const [, date, categorySlug] = match;
        if (currentDate && date > currentDate) continue;
        if (minCandidateDate && date < minCandidateDate) continue;
        if (categorySlug.toLowerCase() !== "all" && categorySlug.toLowerCase() !== story.category.toLowerCase()) continue;

        try {
          const filePath = join(archiveDir, filename);
          let snapshot = archiveFileCache.get(filePath);
          if (!snapshot) {
            console.log(`[DIAGNOSTIC] Parsing archive file: ${filename} (date: ${date}, minDate: ${minCandidateDate}, curDate: ${currentDate})`);
            snapshot = JSON.parse(readFileSync(filePath, "utf8"));
            archiveFileCache.set(filePath, snapshot);
          }
          cachedSnapshots.push({
            snapshot,
            fallbackDate: date
          });
        } catch {
          // Ignore unreadable archive snapshots.
        }
      }
    }

    if (existsSync(publishedDir)) {
      for (const filename of readdirSync(publishedDir).filter((file) => file.endsWith(".json"))) {
        const match = filename.match(/^latest-([a-z]+)\.json$/i);
        if (!match) continue;
        const [, categorySlug] = match;
        if (categorySlug.toLowerCase() !== "all" && categorySlug.toLowerCase() !== story.category.toLowerCase()) continue;

        try {
          const filePath = join(publishedDir, filename);
          let snapshot = archiveFileCache.get(filePath);
          if (!snapshot) {
            console.log(`[DIAGNOSTIC] Parsing published file: ${filename}`);
            snapshot = JSON.parse(readFileSync(filePath, "utf8"));
            archiveFileCache.set(filePath, snapshot);
          }
          if (currentDate && snapshot.date > currentDate) continue;
          if (minCandidateDate && snapshot.date && snapshot.date < minCandidateDate) continue;
          cachedSnapshots.push({ snapshot, fallbackDate: snapshot.date });
        } catch {
          // Ignore unreadable published snapshots.
        }
      }
    }

    threadHistorySnapshotCache.set(cacheKey, cachedSnapshots);
  }

  for (const { snapshot, fallbackDate } of cachedSnapshots) {
    addSnapshotStories(snapshot, fallbackDate);
  }

  return candidates;
};

export const getScoredThreadCandidates = (story, currentStories = []) => {
  if (!isThreadableStory(story)) return [];

  return getHistoricalThreadCandidates(story, currentStories)
    .filter(isThreadableStory)
    .map((candidate) => ({ story: candidate, score: scoreThreadMatch(story, candidate) }))
    .filter((item) => item.score >= 0.2)
    .sort((first, second) => {
      if (second.score !== first.score) return second.score - first.score;
      return new Date(second.story.publishedAt || 0).getTime() - new Date(first.story.publishedAt || 0).getTime();
    });
};

const selectThreadReviewCandidates = (story, scoredCandidates) => {
  const limit = Math.max(1, threadReviewCandidateLimit);
  const currentDate = storyDateKey(story, getTodayKey());
  const priorDay = [];
  const sameDay = [];

  for (const item of scoredCandidates) {
    const candidateDate = storyDateKey(item.story);
    if (currentDate && candidateDate && candidateDate < currentDate) priorDay.push(item);
    else sameDay.push(item);
  }

  if (priorDay.length === 0 && sameDay.length === 0) return [];

  const priorDayGroups = new Map();
  for (const item of priorDay) {
    const date = storyDateKey(item.story) ?? "unknown";
    const group = priorDayGroups.get(date) ?? [];
    group.push(item);
    priorDayGroups.set(date, group);
  }

  const orderedDays = [...priorDayGroups.keys()].sort().reverse();
  const selectedPriorDay = [];
  const maxPerDay = Math.max(1, threadReviewCandidatesPerDay);
  for (let round = 0; round < maxPerDay && selectedPriorDay.length < limit; round += 1) {
    for (const date of orderedDays) {
      const item = priorDayGroups.get(date)?.[round];
      if (item) selectedPriorDay.push(item);
      if (selectedPriorDay.length >= limit) break;
    }
  }

  const sameDayLimit = priorDay.length === 0
    ? limit
    : Math.max(0, Math.min(threadReviewSameDayCandidateLimit, limit));
  const selectedSameDay = sameDay.slice(0, Math.min(sameDayLimit, Math.max(0, limit - selectedPriorDay.length)));

  return [...selectedPriorDay, ...selectedSameDay].slice(0, limit);
};

const expandApprovedThreadItems = (story, approvedItems) => {
  const currentUrl = normalizeStoryUrl(story.sourceUrl);
  const currentDate = storyDateKey(story, getTodayKey());
  const currentTime = new Date(story?.publishedAt || 0).getTime();
  const seen = new Set([currentUrl]);
  const expanded = [];

  const addItem = (item) => {
    const url = normalizeStoryUrl(item?.sourceUrl);
    const date = storyDateKey(item);
    const itemTime = new Date(item?.publishedAt || 0).getTime();
    if (!url || seen.has(url) || item?.category !== story.category) return;
    if (currentDate && date && date > currentDate) return;
    if (currentDate && date === currentDate) {
      if (!Number.isFinite(currentTime) || !Number.isFinite(itemTime) || itemTime >= currentTime) return;
    }
    seen.add(url);
    const { __threadContext: _threadContext, ...cleanItem } = item;
    expanded.push(cleanItem);
  };

  for (const item of approvedItems) {
    addItem(item);
    const context = item.__threadContext;
    if (!context || context.reviewed_by !== "0g") continue;
    for (const contextItem of context.items ?? []) addItem(contextItem);
  }

  return sortStoriesByPublishedAtDesc(expanded).slice(0, 16);
};

const stripStoryTempFields = (story) => {
  if (!story) return story;
  const { __threadContext, thread, ...clean } = story;
  return clean;
};

const isSyntheticMarketThreadStory = (story) => {
  const source = String(story?.source ?? "").trim().toLowerCase();
  const sourceUrl = normalizeStoryUrl(story?.sourceUrl);
  return source === "siftle desk" || sourceUrl.includes("example.com/");
};

const normalizeValidThread = (thread, seedStory = thread?.current) => {
  if (!thread || !seedStory) return null;
  if (isSyntheticMarketThreadStory(seedStory)) return null;

  const currentUrl = normalizeStoryUrl(seedStory.sourceUrl);
  const currentDate = storyDateKey(seedStory, getTodayKey());
  const currentTime = new Date(seedStory?.publishedAt || 0).getTime();
  const seen = new Set([currentUrl]);
  const items = [];

  for (const item of sortStoriesByPublishedAtDesc(thread.items ?? [])) {
    const url = normalizeStoryUrl(item?.sourceUrl);
    const date = storyDateKey(item);
    const itemTime = new Date(item?.publishedAt || 0).getTime();
    if (isSyntheticMarketThreadStory(item)) continue;
    if (!url || seen.has(url) || item?.category !== seedStory.category) continue;
    if (!currentDate || !date || date > currentDate) continue;
    if (date === currentDate) {
      if (!Number.isFinite(currentTime) || !Number.isFinite(itemTime) || itemTime >= currentTime) continue;
    }
    seen.add(url);
    items.push(item);
  }

  if (items.length < 1) return null;

  let cleanReviewedBy = thread.reviewed_by;
  if (typeof cleanReviewedBy === "string" && cleanReviewedBy.length > 80) {
    cleanReviewedBy = cleanReviewedBy.split("+").filter((v, i, a) => a.indexOf(v) === i).join("+");
    if (cleanReviewedBy.length > 80) {
      cleanReviewedBy = cleanReviewedBy.slice(0, 80) + "...";
    }
  }

  return {
    ...thread,
    reviewed_by: cleanReviewedBy,
    current: stripStoryTempFields(seedStory),
    count: items.length,
    items: items.slice(0, 16).map(stripStoryTempFields)
  };
};

const getLocalThreadForStory = (story, currentStories = []) => {
  const related = getScoredThreadCandidates(story, currentStories).map((item) => item.story);

  const items = sortStoriesByPublishedAtDesc(related).slice(0, 12);
  return {
    topic: getThreadTopic(story, items),
    count: items.length,
    current: story,
    items
  };
};

let threadReviewBudgetRemaining = threadReviewBudgetPerRefresh;

const resetThreadReviewBudget = () => {
  threadReviewBudgetRemaining = Math.max(0, threadReviewBudgetPerRefresh);
};

const resetThreadHistorySnapshotCache = () => {
  archiveFileCache = new Map();
  threadHistorySnapshotCache = new Map();
};

const canSpendThreadReview = () => {
  if (threadReviewBudgetPerRefresh < 0) return true;
  if (threadReviewBudgetRemaining <= 0) return false;
  threadReviewBudgetRemaining -= 1;
  return true;
};

const reviewThreadWith0G = async (story, scoredCandidates) => {
  const candidates = selectThreadReviewCandidates(story, scoredCandidates).map((item) => item.story);
  if (candidates.length < 1) return emptyReviewedThread(story, "no-prior-day-candidates");

  const cachePath = getThreadReviewCachePath(story, candidates);
  const candidateKey = candidates.map((candidate) => normalizeStoryUrl(candidate.sourceUrl)).sort();
  if (existsSync(cachePath)) {
    try {
      const cached = JSON.parse(readFileSync(cachePath, "utf8"));
      if (cached.prompt_version === threadReviewPromptVersion && JSON.stringify(cached.candidate_key) === JSON.stringify(candidateKey)) {
        const approvedUrls = new Set((cached.approved_source_urls ?? []).map(normalizeStoryUrl));
        const items = Array.isArray(cached.thread_items)
          ? cached.thread_items
          : expandApprovedThreadItems(story, candidates.filter((candidate) => approvedUrls.has(normalizeStoryUrl(candidate.sourceUrl))));
        return normalizeValidThread({
          topic: normalizeThreadReviewTopic(cached.topic, story, items),
          count: items.length,
          current: story,
          items: sortStoriesByPublishedAtDesc(items).slice(0, 12),
          reviewed_by: cached.provider ?? "cache"
        }, story) ?? emptyReviewedThread(story, "invalid-cache");
      }
    } catch {
      // Ignore broken thread review cache files.
    }
  }

  const { apiKey, model } = getThread0GConfig();
  if (!apiKey) return strictLocalThreadFallback(story, scoredCandidates);
  if (!canSpendThreadReview()) return emptyReviewedThread(story, "0g-budget-exhausted");

  try {
    const service = await getThread0GService();
    const endpoint = get0GEndpoint(service.url);
    const response = await fetch(`${endpoint}/chat/completions`, {
      method: "POST",
      signal: AbortSignal.timeout(threadReviewTimeoutMs),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              [
                "You are Siftle's senior news-thread editor. Return ONLY valid JSON.",
                "Your job has two parts:",
                "1. Decide whether older candidate articles belong in the same developing story as the current article.",
                "2. Write the thread_topic by reading the current article plus the approved related articles and naming what the shared story is actually about.",
                "A Siftle thread is a timeline of meaningful developments over time, not a bundle of outlets repeating the same news.",
                "For every candidate, classify relationship as prior_development, material_follow_up, duplicate_coverage, or unrelated, then give structured evidence.",
                "Approve prior_development and material_follow_up articles involving the same main actor, product, token, team, series, company, dispute, launch, outage, lawsuit, transfer, match, market catalyst, or product rail.",
                "Treat a direct causal chain as one developing story: the initiating event, immediate reaction, dispute caused by it, official response, consequence, investigation, and later resolution may belong together.",
                "Example: Strategy's bitcoin sale, the Polymarket timing dispute caused by that sale, backlash over the market outcome, and the later UMA resolution form one developing timeline.",
                "Do not approve other Strategy treasury news or unrelated Polymarket platform news unless it directly continues that same catalyst.",
                "Some candidates include existing_thread_context from a previously 0G-reviewed timeline. Approve that candidate when the current article clearly continues the same root catalyst; Siftle will preserve the verified older timeline automatically.",
                "Reject duplicate_coverage: another outlet reporting substantially the same facts without a new development, even when the actor and event match.",
                "Same-day articles may only be approved as material_follow_up when they add a clearly new event, decision, result, response, consequence, or milestone.",
                "A valid displayed thread can include approved articles from the same day or earlier calendar days.",
                "Keep the JSON concise. Do not output entries for rejected candidates; summarize rejections in reject_reason.",
                "Reject articles that are merely in the same category, about the same broad sport/coin/company/team/person/series, or share generic terms.",
                "For sports, same World Cup/league/coach/team is not enough without the same move/event/player/match.",
                "For crypto, approve product-rail follow-ups when they share a concrete actor plus product context such as Kraken Earn/Vault, Strategy bitcoin sale/Polymarket, MoneyGram MGUSD/Stellar, ETF outflows, or Mt. Gox transfers. Same coin or price movement alone is not enough.",
                "For crypto company treasury/mining stories, the same coin, holdings amount, revenue figure, or broad Bitcoin treasury theme is not enough. The stories must share the same company/entity and the same earnings, sale, holdings change, product, or regulatory event.",
                "For payments/card stories, Visa, card, tokenized, rewards, payments, launch, or API alone are broad terms. Different Visa card integrations from different companies are not the same thread unless they share the same company, product, card program, or direct partnership update.",
                "For anime/tech, same franchise/company/framework is not enough unless the update is a direct continuation.",
                "Thread topic rules: do not copy the full headline, do not include source names, do not use dates unless essential, do not use vague labels like 'latest updates', and do not make a market question. Use 4 to 9 words, title case, and name the actor plus the event/catalyst.",
                "Good topics: 'Blue Origin New Glenn Launchpad Probe', 'Kraken Earn / Bitcoin Vault Rollout', 'Liverpool Andoni Iraola Talks', 'Amazon Prime Day 2026 Dates', 'Microsoft Build Copilot Announcements'.",
                "Bad topics: 'Blue Origin plans to launch New Glenn again this year after explosion', 'June 23 / 2026', 'Latest Tech Updates', 'Premier League / World Cup'.",
                "Use the supplied fields only."
              ].join(" ")
          },
          {
            role: "user",
            content: JSON.stringify({
              current: storyForThreadReview(story, "current"),
              candidates: candidates.map(storyForThreadReview),
              required_output: {
                thread_topic:
                  "4-9 word title-case topic synthesized from the current article and approved related articles; name the shared actor and event/catalyst; empty string only if no approved same-story article",
                approved: [
                  {
                    id: 0,
                    same_story: true,
                    shared_actor: "specific company/person/team/product/franchise shared by both articles",
                    shared_event: "specific event/catalyst/update shared by both articles",
                    relationship: "prior_development | material_follow_up | duplicate_coverage | unrelated",
                    why_related: "brief evidence from both articles showing the same developing story",
                    why_not_broad: "brief note explaining why this is not merely same category/company/coin/team/theme",
                    confidence: 0.0,
                    reason: "brief reason tied to the same event"
                  }
                ],
                reject_reason: "brief note if few or no candidates are same story"
              },
              approval_rule:
                "Approve only relationship prior_development or material_follow_up, confidence at least 0.80, specific shared_actor and shared_event, evidence from both articles, and a clear explanation that it is not broad or duplicate coverage. The final approved set can include articles from the same day or earlier calendar days. Reject same-day duplicate reports that add no new facts. Create thread_topic only after deciding which candidates are approved."
            })
          }
        ],
        temperature: 0,
        max_tokens: 900
      })
    });

    if (!response.ok) throw await get0GHttpError(response, "0G thread review");

    const data = await response.json();
    const parsed = parseThreadReviewResponse(data);
    const approvals = Array.isArray(parsed?.approved) ? parsed.approved : [];
    const approvedIds = new Set(
      approvals
        .filter(
          (item) =>
            item?.same_story === true &&
            ["prior_development", "material_follow_up"].includes(cleanThreadText(item.relationship ?? "").toLowerCase()) &&
            Number(item.confidence) >= 0.8 &&
            isSpecificThreadEvidence(item)
        )
        .map((item) => Number(item.id))
        .filter((id) => Number.isInteger(id) && id >= 0 && id < candidates.length)
    );
    const approvedItems = candidates.filter((_, index) => approvedIds.has(index));
    const items = expandApprovedThreadItems(story, approvedItems);
    const evidence = approvals
      .filter((item) => approvedIds.has(Number(item.id)))
      .map((item) => ({
        id: Number(item.id),
        shared_actor: cleanThreadText(item.shared_actor ?? ""),
        shared_event: cleanThreadText(item.shared_event ?? ""),
        relationship: cleanThreadText(item.relationship ?? ""),
        why_related: cleanThreadText(item.why_related ?? item.reason ?? ""),
        why_not_broad: cleanThreadText(item.why_not_broad ?? ""),
        confidence: Number(item.confidence) || 0
      }));
    if (items.length === 0) {
      const payload = {
        prompt_version: threadReviewPromptVersion,
        candidate_key: candidateKey,
        approved_source_urls: [],
        thread_items: [],
        evidence: [],
        topic: "",
        provider: "0g",
        response_id: data?.id ?? null,
        reviewed_at: new Date().toISOString()
      };
      writeFileSync(cachePath, JSON.stringify(payload, null, 2));
      recordZeroGSuccess("thread_review");

      return {
        topic: "",
        count: 0,
        current: story,
        items: [],
        reviewed_by: "0g"
      };
    }

    const topic = normalizeThreadReviewTopic(parsed?.thread_topic, story, items);
    const payload = {
      prompt_version: threadReviewPromptVersion,
      candidate_key: candidateKey,
      approved_source_urls: items.map((item) => item.sourceUrl),
      thread_items: items,
      evidence,
      topic,
      provider: "0g",
      response_id: data?.id ?? null,
      reviewed_at: new Date().toISOString()
    };
    writeFileSync(cachePath, JSON.stringify(payload, null, 2));
    recordZeroGSuccess("thread_review");

    return normalizeValidThread({
      topic,
      count: items.length,
      current: story,
      items: sortStoriesByPublishedAtDesc(items).slice(0, 12),
      reviewed_by: "0g"
    }, story) ?? emptyReviewedThread(story, "invalid-reviewed-thread");
  } catch (error) {
    console.warn("0G thread review fallback:", error.message);
    recordZeroGFallback("thread_review", error);
    return emptyReviewedThread(story, "0g-error");
  }
};

const getThreadForStory = async (story, existingScoredCandidates) => {
  const scoredCandidates = existingScoredCandidates ?? getScoredThreadCandidates(story);
  if (scoredCandidates.length < 1) return emptyReviewedThread(story, "no-candidates");
  return reviewThreadWith0G(story, scoredCandidates);
};

const getThreadOpportunity = (story, scoredCandidates) => {
  const currentDate = storyDateKey(story, getTodayKey());
  const priorDayCandidates = scoredCandidates.filter((item) => {
    const date = storyDateKey(item.story);
    return Boolean(currentDate && date && date < currentDate);
  });
  const distinctPriorDays = new Set(priorDayCandidates.map((item) => storyDateKey(item.story)).filter(Boolean)).size;
  const strongestScore = priorDayCandidates[0]?.score ?? 0;

  return {
    distinctPriorDays,
    priorDayCount: priorDayCandidates.length,
    score: distinctPriorDays * 10 + Math.min(priorDayCandidates.length, 10) + strongestScore
  };
};

const getThreadPreviewForStory = (story, currentStories = []) => {
  const scoredCandidates = getScoredThreadCandidates(story, currentStories);
  if (scoredCandidates.length < 1) return getLocalThreadForStory(story, currentStories);

  const candidates = scoredCandidates.slice(0, 14).map((item) => item.story);
  const cachePath = getThreadReviewCachePath(story, candidates);
  const candidateKey = candidates.map((candidate) => normalizeStoryUrl(candidate.sourceUrl)).sort();

  if (existsSync(cachePath)) {
    try {
      const cached = JSON.parse(readFileSync(cachePath, "utf8"));
      if (cached.prompt_version === threadReviewPromptVersion && JSON.stringify(cached.candidate_key) === JSON.stringify(candidateKey)) {
        const approvedUrls = new Set((cached.approved_source_urls ?? []).map(normalizeStoryUrl));
        const items = candidates.filter((candidate) => approvedUrls.has(normalizeStoryUrl(candidate.sourceUrl)));
        return {
          topic: normalizeThreadReviewTopic(cached.topic, story, items),
          count: items.length,
          current: story,
          items: sortStoriesByPublishedAtDesc(items).slice(0, 12),
          reviewed_by: cached.provider ?? "cache"
        };
      }
    } catch {
      // Ignore broken thread preview cache files.
    }
  }

  return strictLocalThreadFallback(story, scoredCandidates);
};

const annotateStoriesWithThreads = (stories = []) => {
  const annotated = [];
  for (const story of stories) {
    const thread = getThreadPreviewForStory(story, stories);
    if (thread.count < 1) {
      const { thread: _thread, ...storyWithoutThread } = story;
      annotated.push(storyWithoutThread);
      continue;
    }

    annotated.push({
      ...story,
      thread: {
        count: thread.count,
        topic: thread.topic
      }
    });
  }
  return annotated;
};

const prioritizeMarketStories = (stories) => {
  const marketStories = [];
  const otherStories = [];
  const rules = Object.values(marketThreadRules);

  for (const story of stories) {
    const matchesAnyRule = rules.some((rule) => storyMatchesMarketThreadRule(story, rule));
    if (matchesAnyRule) {
      marketStories.push(story);
    } else {
      otherStories.push(story);
    }
  }

  return [...marketStories, ...otherStories];
};

const annotateSnapshotThreads = (snapshot) => {
  if (!snapshot?.top_stories) return snapshot;

  const prioritizedStories = snapshot.top_stories;
  return enableFeedThreadPreviews
    ? {
        ...snapshot,
        top_stories: annotateStoriesWithThreads(prioritizedStories)
      }
    : {
        ...snapshot,
        top_stories: prioritizedStories
      };
};

const stripPreparedThreadPayload = (thread) =>
  thread
    ? {
        topic: thread.topic,
        count: thread.count,
        current: thread.current,
        items: thread.items,
        reviewed_by: thread.reviewed_by
      }
    : null;

const prepareSnapshotThreads = async (snapshot) => {
  if (!snapshot?.top_stories?.length) return snapshot;

  const workItems = snapshot.top_stories
    .map((story, index) => {
      const scoredCandidates = getScoredThreadCandidates(story, snapshot.top_stories);
      return { story, index, opportunity: getThreadOpportunity(story, scoredCandidates) };
    })
    .sort((first, second) => {
      if (second.opportunity.score !== first.opportunity.score) return second.opportunity.score - first.opportunity.score;
      return first.index - second.index;
    });

  const preparedWorkItems = await runWithConcurrency(workItems, threadPrepConcurrency, async (workItem) => {
    const { story, index } = workItem;
    const scoredCandidates = getScoredThreadCandidates(story, snapshot.top_stories);
    if (scoredCandidates.length < 1) {
      const { thread: _thread, ...storyWithoutThread } = story;
      return { index, story: storyWithoutThread, thread: null };
    }

    const thread = await getThreadForStory(story, scoredCandidates);
    if (thread.count < 1) {
      const previousThread = snapshot.threads?.[normalizeStoryUrl(story.sourceUrl)];
      if (previousThread?.count >= 1 && ["0g-error", "0g-budget-exhausted"].includes(thread.reviewed_by)) {
        return {
          index,
          story: {
            ...story,
            thread: {
              count: previousThread.count,
              topic: previousThread.topic
            }
          },
          thread: previousThread
        };
      }

      if (thread.reviewed_by === "0g") persistPreparedThreadLocally(story, null);
      const { thread: _thread, ...storyWithoutThread } = story;
      return { index, story: storyWithoutThread, thread: null };
    }

    const preparedThread = stripPreparedThreadPayload(thread);
    persistPreparedThreadLocally(story, preparedThread);
    return {
      index,
      story: {
        ...story,
        thread: {
          count: thread.count,
          topic: thread.topic
        }
      },
      thread: preparedThread
    };
  });
  const preparedStories = preparedWorkItems.sort((first, second) => first.index - second.index);

  const threads = {};
  for (const item of preparedStories) {
    if (item.thread?.count >= 1) threads[normalizeStoryUrl(item.story.sourceUrl)] = item.thread;
  }

  return {
    ...snapshot,
    top_stories: preparedStories.map((item) => item.story),
    threads,
    thread_metadata: {
      prepared_at: new Date().toISOString(),
      prepared_count: Object.keys(threads).length,
      thread_review_budget_per_refresh: threadReviewBudgetPerRefresh,
      thread_prep_concurrency: threadPrepConcurrency,
      thread_history_window_hours: threadHistoryWindowHours,
      preparation_order: "rolling-window-opportunity-first",
      feed_ready: true
    }
  };
};

const findStoryForThreadRequest = (category, sourceUrl) => {
  const selectedCategory = normalizeCategory(category);
  const url = normalizeStoryUrl(sourceUrl);
  if (!url) return null;

  const snapshots = selectedCategory === "All"
    ? categories.map(readPublishedSnapshot).filter(Boolean)
    : [readPublishedSnapshot(selectedCategory), readPublishedSnapshot("All")].filter(Boolean);

  for (const snapshot of snapshots) {
    const story = (snapshot.top_stories ?? []).find((item) => normalizeStoryUrl(item.sourceUrl) === url);
    if (story) return story;
  }

  return null;
};

const findPreparedThreadForRequest = (category, sourceUrl) => {
  const selectedCategory = normalizeCategory(category);
  const url = normalizeStoryUrl(sourceUrl);
  if (!url) return null;

  const snapshots = selectedCategory === "All"
    ? categories.map(readPublishedSnapshot).filter(Boolean)
    : [readPublishedSnapshot(selectedCategory), readPublishedSnapshot("All")].filter(Boolean);

  for (const snapshot of snapshots) {
    const thread = snapshot.threads?.[url];
    const story = (snapshot.top_stories ?? []).find((item) => normalizeStoryUrl(item.sourceUrl) === url);
    const validThread = normalizeValidThread(thread, story ?? thread?.current);
    if (validThread) return validThread;
  }

  return null;
};

const getPublishedStoriesForMarketRule = (rule) => {
  const snapshots = [readPublishedSnapshot(rule.category), readPublishedSnapshot("All")].filter(Boolean);
  const seen = new Set();
  const stories = [];

  for (const snapshot of snapshots) {
    for (const story of snapshot.top_stories ?? []) {
      const url = normalizeStoryUrl(story.sourceUrl);
      if (!url || seen.has(url) || !storyMatchesMarketThreadRule(story, rule)) continue;
      seen.add(url);
      stories.push(story);
    }
  }

  return sortStoriesByPublishedAtDesc(stories);
};

const findPreparedMarketThread = (marketId) => {
  const rule = marketThreadRules[marketId];
  if (!rule) return null;

  const matchingStories = getPublishedStoriesForMarketRule(rule);
  for (const story of matchingStories) {
    const thread = findPreparedThreadForRequest(rule.category, story.sourceUrl);
    const validThread = normalizeValidThread(
      thread
        ? {
            ...thread,
            items: (thread.items ?? []).filter((item) => storyMatchesMarketThreadRule(item, rule))
          }
        : thread,
      story
    );
    if (validThread?.count >= 1) return validThread;
  }

  const latestStory = matchingStories[0];
  if (!latestStory) return null;

  for (const story of matchingStories.slice(1)) {
    const previousThread = findPreparedThreadForRequest(rule.category, story.sourceUrl);
    const validPreviousThread = normalizeValidThread(
      previousThread
        ? {
            ...previousThread,
            items: (previousThread.items ?? []).filter((item) => storyMatchesMarketThreadRule(item, rule))
          }
        : previousThread,
      story
    );
    if (!validPreviousThread?.count) continue;

    const bridgedThread = normalizeValidThread({
      ...validPreviousThread,
      current: latestStory,
      items: [story, ...(validPreviousThread.items ?? [])],
      reviewed_by: `${validPreviousThread.reviewed_by ?? "prepared"}+latest-market-seed`
    }, latestStory);

    if (bridgedThread?.count >= 1) return bridgedThread;
  }

  if (matchingStories.length >= 2) {
    const ruleThread = normalizeValidThread({
      topic: rule.topic,
      current: latestStory,
      items: matchingStories.slice(1, 8),
      reviewed_by: "strict-market-rule"
    }, latestStory);

    if (ruleThread?.count >= 1) return ruleThread;
  }

  return null;
};

const getMarketThreadStorePath = (marketId) => join(marketThreadStoreDir, `${marketId}.json`);
const getMarketThreadSeedPath = (marketId) => join(marketThreadSeedDir, `${marketId}.json`);

const readJsonIfExists = (filePath) => {
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
};

const normalizeMarketThreadPayload = (thread, marketId) => {
  const rule = marketThreadRules[marketId];
  if (!rule || !thread?.current) return null;
  if (thread.current.category !== rule.category) return null;
  if (!storyMatchesMarketThreadRule(thread.current, rule)) return null;

  const normalized = normalizeValidThread({
    topic: rule.topic,
    current: thread.current,
    items: (thread.items ?? []).filter((item) => storyMatchesMarketThreadRule(item, rule)),
    reviewed_by: thread.reviewed_by ?? "local-market-thread"
  }, thread.current);

  if (!normalized?.count) return null;

  return {
    ...normalized,
    topic: normalized.topic || rule.topic,
    market_id: marketId,
    saved_market_thread: true
  };
};

const mergeMarketThreads = (marketId, primaryThread, secondaryThread) => {
  const rule = marketThreadRules[marketId];
  const primary = normalizeMarketThreadPayload(primaryThread, marketId);
  const secondary = normalizeMarketThreadPayload(secondaryThread, marketId);
  if (!primary) return secondary;
  if (!secondary) return primary;

  const stories = sortStoriesByPublishedAtDesc([
    primary.current,
    ...(primary.items ?? []),
    secondary.current,
    ...(secondary.items ?? [])
  ]);
  const [current, ...items] = stories;
  if (!current) return primary;

  return normalizeMarketThreadPayload({
    topic: primary.topic || secondary.topic || rule.topic,
    current,
    items,
    reviewed_by: `${primary.reviewed_by ?? "prepared"}+${secondary.reviewed_by ?? "stored"}`
  }, marketId);
};

const readStoredMarketThread = (marketId) => {
  const stored = readJsonIfExists(getMarketThreadStorePath(marketId));
  const seed = readJsonIfExists(getMarketThreadSeedPath(marketId));
  const merged = mergeMarketThreads(marketId, stored, seed);
  if (merged) return merged;

  return normalizeMarketThreadPayload(stored, marketId) ?? normalizeMarketThreadPayload(seed, marketId);
};

const writeStoredMarketThread = (marketId, thread) => {
  const normalized = normalizeMarketThreadPayload(thread, marketId);
  if (!normalized) return null;

  try {
    mkdirSync(marketThreadStoreDir, { recursive: true });
    writeJsonFile(getMarketThreadStorePath(marketId), {
      ...normalized,
      saved_at: new Date().toISOString()
    });
  } catch {
    // Market threads should remain readable even if local persistence is unavailable.
  }

  return normalized;
};

const getMarketThread = (marketId) => {
  const prepared = findPreparedMarketThread(marketId);
  const stored = readStoredMarketThread(marketId);
  const merged = mergeMarketThreads(marketId, prepared, stored) ?? prepared ?? stored;
  if (merged?.count) return writeStoredMarketThread(marketId, merged) ?? merged;

  return null;
};

const sendJson = (response, statusCode, payload, headers = {}) => {
  if (response.headersSent || response.writableEnded) return;
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers,
    ...getCorsHeaders()
  });
  response.end(JSON.stringify(payload));
};

const getCorsHeaders = () => ({
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization"
});

const normalizeCategory = (category) => (categories.includes(category) ? category : "All");

const archiveFilename = (date, category) => `${date}-${normalizeCategory(category).toLowerCase()}.json`;
const latestFilename = (category) => `latest-${normalizeCategory(category).toLowerCase()}.json`;

const writeJsonFile = (filePath, payload) => {
  const tempPath = `${filePath}.tmp`;
  writeFileSync(tempPath, JSON.stringify(payload, null, 2));
  renameSync(tempPath, filePath);
};

const readLocalArchiveSnapshot = (date, category) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? "")) {
    throw new Error("Invalid archive date");
  }

  const selectedCategory = normalizeCategory(category);
  const filePath = join(archiveDir, archiveFilename(date, selectedCategory));
  if (!existsSync(filePath)) {
    const allPath = join(archiveDir, archiveFilename(date, "All"));
    if (selectedCategory !== "All" && existsSync(allPath)) {
      const allSnapshot = JSON.parse(readFileSync(allPath, "utf8"));
      return {
        ...allSnapshot,
        category: selectedCategory,
        top_stories: markArchiveStories((allSnapshot.top_stories ?? []).filter((story) => story.category === selectedCategory), date),
        archive: {
          provider: "local-dev",
          restored_from: allPath,
          filtered_from: "All"
        }
      };
    }

    return null;
  }

  const snapshot = JSON.parse(readFileSync(filePath, "utf8"));
  return {
    ...snapshot,
    top_stories: markArchiveStories(snapshot.top_stories ?? [], date),
    archive: {
      provider: "local-dev",
      restored_from: filePath
    }
  };
};

const readArchiveSnapshot = async (date, category) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? "")) {
    throw new Error("Invalid archive date");
  }

  const selectedCategory = normalizeCategory(category);

  if (selectedCategory === "All") {
    const categorySnapshots = (
      await Promise.all(sourceCategories.map((sourceCategory) => readArchiveSnapshot(date, sourceCategory).catch(() => null)))
    ).filter((snapshot) => snapshot?.top_stories?.length);

    if (categorySnapshots.length > 0) {
      return {
        date,
        category: "All",
        generated_at: categorySnapshots
          .map((snapshot) => snapshot.generated_at)
          .filter(Boolean)
          .sort()
          .at(-1),
        sources: {
          newsdata: categorySnapshots.some((snapshot) => snapshot.sources?.newsdata),
          guardian: categorySnapshots.some((snapshot) => snapshot.sources?.guardian),
          zero_g: categorySnapshots.some((snapshot) => snapshot.sources?.zero_g),
          shelby: categorySnapshots.some((snapshot) => snapshot.sources?.shelby),
          max_article_age_hours: maxArticleAgeHours,
          composed_from_categories: categorySnapshots.map((snapshot) => snapshot.category)
        },
        top_stories: markArchiveStories(mergeDailyStories(categorySnapshots.flatMap((snapshot) => snapshot.top_stories), []), date),
        archive: {
          provider: "composed",
          composed_from_categories: categorySnapshots.map((snapshot) => snapshot.category)
        }
      };
    }
  }

  if (isShelbyArchiveConfigured()) {
    try {
      const { snapshot, archive } = await downloadShelbySnapshot(date, selectedCategory);
      return { ...snapshot, top_stories: markArchiveStories(snapshot.top_stories ?? [], date), archive };
    } catch (error) {
      console.warn("Shelby archive read fallback:", error.message);

      if (selectedCategory !== "All") {
        try {
          const { snapshot, archive } = await downloadShelbySnapshot(date, "All");
          return {
            ...snapshot,
            category: selectedCategory,
            top_stories: markArchiveStories((snapshot.top_stories ?? []).filter((story) => story.category === selectedCategory), date),
            archive: {
              ...archive,
              filtered_from: "All"
            }
          };
        } catch {
          // Fall through to the local archive.
        }
      }
    }
  }

  return readLocalArchiveSnapshot(date, selectedCategory);
};

const normalizeArchiveFile = (file) => ({
  ...file,
  category: file.category ?? categories.find((item) => item.toLowerCase() === file.categorySlug?.toLowerCase()) ?? "All"
});

const readLocalArchiveFiles = () => {
  if (!existsSync(archiveDir)) return [];
  const allowedCategories = new Set(categories.map((category) => category.toLowerCase()));

  return readdirSync(archiveDir)
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) => {
      const match = filename.match(/^(\d{4}-\d{2}-\d{2})-([a-z]+)\.json$/i);
      if (!match) return null;

      const [, date, categorySlug] = match;
      if (!allowedCategories.has(categorySlug.toLowerCase())) return null;

      const category = categories.find((item) => item.toLowerCase() === categorySlug.toLowerCase()) ?? "All";
      const filePath = join(archiveDir, filename);

      try {
        const snapshot = JSON.parse(readFileSync(filePath, "utf8"));
        return {
          date,
          category,
          story_count: Array.isArray(snapshot.top_stories) ? snapshot.top_stories.length : 0,
          generated_at: snapshot.generated_at ?? null,
          storage: snapshot.storage?.shelby_upload?.provider === "shelby" ? "shelby" : "local-dev"
        };
      } catch {
        return {
          date,
          category,
          story_count: 0,
          generated_at: null,
          storage: "unreadable"
        };
      }
    })
    .filter(Boolean);
};

const readPublishedArchiveFiles = () => {
  if (!existsSync(publishedDir)) return [];

  return readdirSync(publishedDir)
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) => {
      const match = filename.match(/^latest-([a-z]+)\.json$/i);
      if (!match) return null;

      const categorySlug = match[1];
      const category = categories.find((item) => item.toLowerCase() === categorySlug.toLowerCase());
      if (!category) return null;

      try {
        const snapshot = JSON.parse(readFileSync(join(publishedDir, filename), "utf8"));
        if (!snapshot?.date) return null;

        return {
          date: snapshot.date,
          category,
          story_count: Array.isArray(snapshot.top_stories) ? snapshot.top_stories.length : 0,
          generated_at: snapshot.generated_at ?? snapshot.published_at ?? null,
          storage: snapshot.archive?.provider === "shelby" ? "shelby" : "published"
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
};

const groupArchiveFiles = (files) => {
  const sortedFiles = files
    .map(normalizeArchiveFile)
    .sort((first, second) => {
      if (first.date !== second.date) return second.date.localeCompare(first.date);
      return categories.indexOf(first.category) - categories.indexOf(second.category);
    });

  const groupedDates = [...new Set(sortedFiles.map((file) => file.date))].map((date) => ({
    date,
    categories: sortedFiles.filter((file) => file.date === date).map((file) => file.category)
  })).sort((first, second) => second.date.localeCompare(first.date));

  return { dates: groupedDates, files: sortedFiles };
};

const readArchiveIndex = async () => {
  const localFiles = [...readLocalArchiveFiles(), ...readPublishedArchiveFiles()];
  let shelbyFiles = [];

  if (isShelbyArchiveConfigured()) {
    try {
      shelbyFiles = await listShelbyArchiveFiles();
    } catch (error) {
      console.warn("Shelby archive index fallback:", error.message);
    }
  }

  const merged = new Map();
  for (const file of [...localFiles, ...shelbyFiles]) {
    const normalized = normalizeArchiveFile(file);
    const key = `${normalized.date}-${normalized.category}`;
    const current = merged.get(key);
    if (!current || normalized.storage === "shelby") {
      merged.set(key, normalized);
    }
  }

  return groupArchiveFiles([...merged.values()]);
};

const readJsonBody = async (request) => {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
};

const stripHtml = (value = "") =>
  value
    .replace(/&lt;|&#60;/gi, "<")
    .replace(/&gt;|&#62;/gi, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, "\"")
    .replace(/&ldquo;|&rdquo;/g, "\"")
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const decodeHtmlEntities = (value = "") =>
  value
    .replace(/&lt;|&#60;/gi, "<")
    .replace(/&gt;|&#62;/gi, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, "\"")
    .replace(/&ldquo;|&rdquo;/g, "\"")
    .replace(/&lsquo;|&rsquo;/g, "'");

const extractAttribute = (value = "", attribute) => {
  const match = value.match(new RegExp(`${attribute}=["']([^"']+)["']`, "i"));
  return match?.[1] ?? "";
};

const isTruncatedHeadline = (headline = "") => /\.\.\.$|\u2026$/.test(headline.trim());

const titleFromUrlSlug = (url = "") => {
  try {
    const pathname = new URL(url).pathname;
    const slug = pathname
      .split("/")
      .filter(Boolean)
      .reverse()
      .find((part) => /[a-z]-[a-z]/i.test(part));

    if (!slug) return "";

    return slug
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
      .trim();
  } catch {
    return "";
  }
};

const extractPageTitle = (html = "") => {
  const ogTitleTag = html.match(/<meta[^>]+property=["']og:title["'][^>]*>/i)?.[0] ?? "";
  const twitterTitleTag = html.match(/<meta[^>]+name=["']twitter:title["'][^>]*>/i)?.[0] ?? "";
  const titleTag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "";
  return stripHtml(decodeHtmlEntities(extractAttribute(ogTitleTag || twitterTitleTag, "content") || titleTag));
};

const fetchFullHeadline = async (article) => {
  if (!isTruncatedHeadline(article.headline) || !article.sourceUrl) {
    return article.headline;
  }

  try {
    const response = await fetch(article.sourceUrl, {
      signal: AbortSignal.timeout(5000),
      headers: {
        "User-Agent": "Siftle/0.1 news aggregator"
      }
    });

    if (response.ok) {
      const title = extractPageTitle(await response.text())
        .replace(/\s*[-|]\s*ESPN.*$/i, "")
        .replace(/\s*[-|]\s*BBC Sport.*$/i, "")
        .trim();

      if (title && title.length > article.headline.length && !isTruncatedHeadline(title)) {
        return title;
      }
    }
  } catch {
    // Fall back to URL slug when the publisher blocks title fetches.
  }

  const slugTitle = titleFromUrlSlug(article.sourceUrl);
  return slugTitle && slugTitle.length > article.headline.length ? slugTitle : article.headline;
};

const repairTruncatedArticleTitles = async (articles) => {
  const repaired = [...articles];
  const repairTargets = articles
    .map((article, index) => ({ article, index }))
    .filter(({ article }) => isTruncatedHeadline(article?.headline) && article?.sourceUrl)
    .slice(0, Math.max(0, headlineRepairLimitPerSnapshot));

  await runWithConcurrency(repairTargets, headlineRepairConcurrency, async ({ article, index }) => {
    repaired[index] = {
      ...article,
      headline: await fetchFullHeadline(article)
    };
  });

  return repaired;
};

const fallbackImages = {
  Crypto: [
    "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80"
  ],
  Sports: [
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=80"
  ],
  Anime: [
    "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&w=1200&q=80"
  ],
  Tech: [
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  ],
  Gaming: [
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
  ]
};

const stableIndex = (value = "", length = 1) => {
  let hash = 0;
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash % Math.max(1, length);
};

const getFallbackImage = (category, seed = "") => {
  const images = fallbackImages[category] ?? fallbackImages.Crypto;
  return images[stableIndex(seed || category, images.length)];
};

const estimateReadTime = (text) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
};

const relativeTime = (dateValue) => {
  const then = new Date(dateValue).getTime();
  if (Number.isNaN(then)) return "unknown";

  const minutes = Math.max(1, Math.floor((Date.now() - then) / 60000));
  if (minutes < 60) return `${minutes}m`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;

  return `${Math.floor(hours / 24)}d`;
};

const getArticleAgeHours = (dateValue) => {
  const then = new Date(dateValue).getTime();
  if (Number.isNaN(then)) return Number.POSITIVE_INFINITY;
  return (Date.now() - then) / 36e5;
};

const isFreshArticle = (article) => {
  const ageHours = getArticleAgeHours(article.publishedAt);
  return ageHours >= 0 && ageHours <= maxArticleAgeHours;
};

const appDateKeysCache = new Map();
const getAppDateKeys = (date) => {
  if (appDateKeysCache.has(date)) return appDateKeysCache.get(date);
  try {
    const today = new Date(date + "T00:00:00");
    const yesterday = new Date(today.getTime() - 24 * 3600 * 1000);
    const dayBefore = new Date(today.getTime() - 2 * 24 * 3600 * 1000);
    const yesterdayKey = getAppDate(yesterday);
    const dayBeforeKey = getAppDate(dayBefore);
    const keys = { yesterdayKey, dayBeforeKey };
    appDateKeysCache.set(date, keys);
    return keys;
  } catch {
    return { yesterdayKey: null, dayBeforeKey: null };
  }
};

const isArticleOnAppDate = (article, date) => {
  const articleDate = getAppDate(article.publishedAt);
  if (!articleDate) return true;

  const targetYear = date.slice(0, 4);
  const normalizedArticleDate = targetYear + articleDate.slice(4);

  if (normalizedArticleDate === date) return true;

  const { yesterdayKey, dayBeforeKey } = getAppDateKeys(date);
  return normalizedArticleDate === yesterdayKey || normalizedArticleDate === dayBeforeKey;
};

const filterStoriesByAppDate = (stories = [], date) =>
  stories.filter((story) => {
    const storyDate = getAppDate(story.publishedAt);
    return storyDate ? storyDate === date : true;
  });

const formatArchiveStoryDate = (value, fallbackDate) => {
  const parsed = value ? new Date(value) : null;
  if (!parsed || Number.isNaN(parsed.getTime())) return fallbackDate;

  return new Intl.DateTimeFormat("en", {
    timeZone: appTimeZone,
    month: "short",
    day: "numeric"
  }).format(parsed);
};

const markArchiveStories = (stories = [], date) =>
  stories.map((story) => ({
    ...story,
    postedAt: formatArchiveStoryDate(story.publishedAt, date)
  }));

const inferCategory = (article, fallbackCategory) => {
  if (fallbackCategory && fallbackCategory !== "All") return fallbackCategory;

  const haystack = getArticleText(article);
  for (const [key, category] of Object.entries(categoryMap)) {
    if (haystack.includes(key)) return category;
  }

  return "Sports";
};

const accentForCategory = (category) => {
  if (category === "Crypto") return "teal";
  if (category === "Anime") return "violet";
  if (category === "Sports") return "blue";
  if (category === "Tech") return "slate";
  if (category === "Gaming") return "orange";
  return "slate";
};

const extractTag = (item, tagName) => {
  const match = item.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  if (!match) return "";
  return match[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
};

const extractRssImage = (item, category, seed = "") => {
  const mediaContent = item.match(/<media:content[^>]+>/i)?.[0] ?? "";
  const mediaThumbnail = item.match(/<media:thumbnail[^>]+>/i)?.[0] ?? "";
  const enclosure = item.match(/<enclosure[^>]+>/i)?.[0] ?? "";
  const description = extractTag(item, "description") || extractTag(item, "content:encoded");
  const descriptionImage = description.match(/<img[^>]+>/i)?.[0] ?? "";

  return (
    extractAttribute(mediaContent, "url") ||
    extractAttribute(mediaThumbnail, "url") ||
    extractAttribute(enclosure, "url") ||
    extractAttribute(descriptionImage, "src") ||
    getFallbackImage(category, seed)
  );
};

const fetchRssFeed = async (url, fallbackCategory) => {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    headers: {
      "User-Agent": "Siftle/0.1 news aggregator"
    }
  });

  if (!response.ok) throw new Error(`RSS ${url} returned ${response.status}`);

  const xml = await response.text();
  const isAtom = xml.includes("<entry") || xml.includes("<feed");
  const items = isAtom
    ? (xml.match(/<entry[\s\S]*?<\/entry>/gi) ?? [])
    : (xml.match(/<item[\s\S]*?<\/item>/gi) ?? []);

  return items.slice(0, Math.max(1, rssItemsPerFeed)).map((item) => {
    const headline = stripHtml(extractTag(item, "title"));
    const summary = isAtom
      ? stripHtml(extractTag(item, "summary") || extractTag(item, "content") || headline)
      : stripHtml(extractTag(item, "description") || extractTag(item, "content:encoded") || headline);
    
    let link = "";
    if (isAtom) {
      const hrefMatch = item.match(/<link[^>]+href=["']([^"']+)["']/i);
      link = hrefMatch ? hrefMatch[1] : "";
    } else {
      link = stripHtml(extractTag(item, "link"));
    }

    const publishedAt = stripHtml(
      extractTag(item, "pubDate") ||
        extractTag(item, "dc:date") ||
        extractTag(item, "published") ||
        extractTag(item, "updated")
    );
    const sourceHost = new URL(url).hostname.replace(/^www\./, "");
    const category = inferCategory({ headline, summary, category: fallbackCategory }, fallbackCategory);

    return {
      headline,
      summary,
      source: sourceHost,
      sourceUrl: link || url,
      imageUrl: extractRssImage(item, category, `${headline} ${sourceHost}`),
      publishedAt,
      category
    };
  });
};

const fetchTwitterAccountRss = async (username, fallbackCategory) => {
  const rssUrl = `https://nitter.net/${username}/rss`;

  const isLowSignalTweet = (headline = "") => {
    const normalized = String(headline)
      .replace(/https?:\/\/\S+/gi, "")
      .replace(/\s+/g, " ")
      .trim();
    return /^R to\s+@[^:]+:\s*(?:more here|watch more here)\b[:.!?\s]*$/i.test(normalized);
  };

  const parseTweetItems = (xml = "") => {
    const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];
    return items.slice(0, 6).map((item) => {
      const headline = stripHtml(extractTag(item, "title")) || `@${username}`;
      const summary = stripHtml(extractTag(item, "description") || headline);
      const publishedAt = stripHtml(extractTag(item, "pubDate"));
      const rawLink = stripHtml(extractTag(item, "link"));
      const sourceUrl = rawLink
        .replace(/^https?:\/\/nitter\.net\/([^/]+)\/status\/([^#?]+).*$/i, "https://x.com/$1/status/$2")
        .replace(/^https?:\/\/(?:www\.)?(?:twitter|x)\.com\//i, "https://x.com/");
      const category = inferCategory({ headline, summary, category: fallbackCategory }, fallbackCategory);

      return {
        headline,
        summary,
        source: `@${username}`,
        sourceUrl: sourceUrl || `https://x.com/${username}`,
        imageUrl: getFallbackImage(category, `${username} ${headline}`),
        publishedAt,
        category,
        type: "tweet"
      };
    });
  };

  const pickFreshest = (primary = [], fallback = []) => {
    const primaryLatest = Math.max(...primary.map((item) => new Date(item.publishedAt || 0).getTime()), 0);
    const fallbackLatest = Math.max(...fallback.map((item) => new Date(item.publishedAt || 0).getTime()), 0);

    if (fallbackLatest > primaryLatest) return fallback;
    if (primaryLatest > fallbackLatest) return primary;
    return fallback.length > primary.length ? fallback : primary;
  };

  let fetchItems = [];
  let curlItems = [];
  const curlCommand = process.platform === "win32" ? "curl.exe" : "curl";

  try {
    const response = await fetch(rssUrl, {
      signal: AbortSignal.timeout(15000),
      headers: {
        "User-Agent": "Siftle/0.1 news aggregator"
      }
    });

    if (response.ok) {
      fetchItems = parseTweetItems(await response.text());
    }
  } catch {
    // Fall through to curl fallback below.
  }

  try {
    const { stdout } = await execFileAsync(curlCommand, ["-L", "-A", "Mozilla/5.0", rssUrl], {
      timeout: 15000,
      windowsHide: true,
      maxBuffer: 1024 * 1024
    });
    curlItems = parseTweetItems(stdout);
  } catch {
    // Keep fetch result if curl is unavailable or blocked.
  }

  return pickFreshest(fetchItems, curlItems).filter((item) => item.sourceUrl && !isLowSignalTweet(item.headline));
};

const fetchNicheRss = async (category) => {
  const feedEntries =
    category === "All"
      ? Object.entries(rssFeeds).flatMap(([feedCategory, urls]) => urls.map((url) => ({ url, category: feedCategory })))
      : (rssFeeds[category] ?? []).map((url) => ({ url, category }));

  const results = await Promise.allSettled(feedEntries.map((feed) => fetchRssFeed(feed.url, feed.category)));
  return results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
};

const summarizeLocally = (article) => {
  const base = stripHtml(article.summary || article.headline);
  return base.length > 220 ? `${base.slice(0, 217).trim()}...` : base;
};

const summaryPromptVersion = "briefing-v3";

const summarizeLocallyTight = (article) =>
  stripHtml(article?.summary || article?.headline || "")
    .replace(/\s+/g, " ")
    .split(/\s+/)
    .slice(0, 58)
    .join(" ")
    .trim();

const looksLikeBadSummary = (summary = "") =>
  /(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(summary);

const limitSummaryWords = (summary = "", maxWords = 140) => {
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

const cleanSummaryText = (value = "") => {
  let summary = String(value ?? "").trim();

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const fenced = summary.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
    if (fenced) summary = fenced[1].trim();

    const jsonText = summary.match(/^\s*\{[\s\S]*\}\s*$/)?.[0];
    if (!jsonText) break;

    try {
      const parsed = JSON.parse(jsonText);
      if (typeof parsed.summary === "string") {
        summary = parsed.summary.trim();
        continue;
      }
    } catch {
      break;
    }

    break;
  }

  summary = stripHtml(summary)
    .replace(/^["'{\s]+/, "")
    .replace(/["'}\s]+$/, "")
    .replace(/^summary["'\s]*:[\s"']*/i, "")
    .replace(/\s+/g, " ")
    .trim();

  if (looksLikeBadSummary(summary)) return "";
  return limitSummaryWords(summary);
};

const splitIntoSentences = (text = "") =>
  String(text)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

const truncateSentence = (text = "", maxWords = 18) => {
  const words = String(text).split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return String(text).trim();
  return `${words.slice(0, maxWords).join(" ").replace(/[,:;\-]+$/g, "").trim()}...`;
};

const dedupeNormalizedLines = (items = []) => {
  const seen = new Set();
  const output = [];
  for (const item of items) {
    const clean = String(item || "").replace(/\s+/g, " ").trim();
    if (!clean) continue;
    const key = clean.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    output.push(clean);
  }
  return output;
};

const isBriefingHistoryMatch = (story, candidate) => {
  if (!story || !candidate || story.category !== candidate.category) return false;

  const sharedPrimaryAnchors = getSharedPrimaryAnchors(story, candidate);
  const sharedEntities = getSharedValues(extractThreadEntities(story), extractThreadEntities(candidate))
    .filter(isUsefulThreadEntity);
  const sharedPhrase = hasSharedDistinctivePhrase(story, candidate);
  const headlineOverlap = getSharedCount(tokenizeThreadText(story, true), tokenizeThreadText(candidate, true));
  const hasCryptoContext = hasSharedCryptoProductContext(story, candidate);
  const score = scoreThreadMatch(story, candidate);

  if (sharedPrimaryAnchors.length === 0 && !hasCryptoContext) return false;

  if (story?.category === "Crypto") {
    return hasCryptoContext || (sharedPrimaryAnchors.length >= 1 && (sharedEntities.length >= 1 || sharedPhrase || headlineOverlap >= 2));
  }

  return score >= 0.42 && (sharedEntities.length >= 1 || sharedPhrase || headlineOverlap >= 2);
};

const selectBriefingHistoryItems = (story, thread) => {
  if (!story || !Array.isArray(thread?.items)) return [];

  return thread.items
    .filter((item) => isBriefingHistoryMatch(story, item))
    .slice(0, 3);
};

const buildPreviousUpdatesText = (story, thread) => {
  const items = selectBriefingHistoryItems(story, thread);
  if (!items.length) return "No prior updates available on this thread.";

  const timeline = items
    .slice()
    .reverse()
    .map((item) => {
      const date = storyDateKey(item) || "Earlier";
      const detail = truncateSentence(stripHtml(item.ai_summary || item.summary || item.headline || ""), 18) || stripHtml(item.headline || "");
      return `${date}: ${detail}`;
    });

  return limitSummaryWords(timeline.join(" Then "), 34) || "No prior updates available on this thread.";
};

const formatStructuredBriefing = ({ whatHappened, keyPoints, previousUpdates, takeaway }) => {
  const bullets = dedupeNormalizedLines(keyPoints).slice(0, 3);
  while (bullets.length < 3) {
    if (bullets.length === 0) bullets.push("Source coverage is limited, so this briefing sticks to the confirmed update.");
    else if (bullets.length === 1) bullets.push("The current article provides the clearest confirmed details available right now.");
    else bullets.push("Further context will depend on the next verified update in this story thread.");
  }

  return [
    `**WHAT HAPPENED:** ${String(whatHappened || "").trim()}`,
    "",
    "**KEY POINTS:**",
    ...bullets.map((bullet) => `- ${bullet}`),
    "",
    `**TAKEAWAY:** ${String(takeaway || "").trim()}`
  ].join("\n");
};

const buildLocalStructuredBriefingParts = (article, thread = null) => {
  const headline = stripHtml(article?.headline || "").trim();
  const baseText = stripHtml(article?.summary || article?.headline || "").replace(/\s+/g, " ").trim();
  const sentences = splitIntoSentences(baseText);
  const whatHappened = truncateSentence(
    dedupeNormalizedLines([
      sentences.slice(0, 2).join(" ").trim(),
      baseText,
      headline
    ])[0] || headline,
    30
  );

  const whatHappenedLower = whatHappened.toLowerCase();
  const remainingSentences = sentences.filter(s => {
    const cleanS = s.trim().toLowerCase();
    if (cleanS.length < 5) return false;
    return !whatHappenedLower.includes(cleanS) && !cleanS.includes(whatHappenedLower);
  });

  const keyPoints = dedupeNormalizedLines([
    remainingSentences[0] ? truncateSentence(remainingSentences[0], 16) : null,
    remainingSentences[1] ? truncateSentence(remainingSentences[1], 16) : null,
    truncateSentence(headline, 14),
    "Further context will depend on the next verified update in this story thread."
  ].filter(Boolean));

  const takeaway = truncateSentence(`${headline || "This update"} is the main confirmed signal available right now.`, 22);

  return { whatHappened, keyPoints, takeaway };
};

const buildLocalStructuredBriefing = (article, thread = null) => {
  return formatStructuredBriefing(buildLocalStructuredBriefingParts(article, thread));
};

const extractBriefingSections = (text = "") => {
  const parts = String(text).split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);
  const sections = {};
  if (parts.length <= 1) return sections;

  for (let i = 1; i < parts.length; i += 2) {
    const header = String(parts[i] || "").trim().toUpperCase();
    const content = String(parts[i + 1] || "").trim();
    if (header && content) sections[header] = content;
  }

  return sections;
};

const normalizeStructuredBriefing = (summary, article, thread = null) => {
  const fallback = buildLocalStructuredBriefingParts(article, thread);
  const sections = extractBriefingSections(summary);
  const whatHappened = cleanSummaryText(sections["WHAT HAPPENED"] || "") || fallback.whatHappened;

  const rawKeyPoints = String(sections["KEY POINTS"] || "")
    .split(/(?:•|\*|-)\s+/)
    .map((item) => cleanSummaryText(item))
    .filter(Boolean);

  const keyPoints = rawKeyPoints.length
    ? rawKeyPoints.slice(0, 3)
    : fallback.keyPoints;

  const takeaway = cleanSummaryText(sections["TAKEAWAY"] || "") || fallback.takeaway;

  return formatStructuredBriefing({
    whatHappened,
    keyPoints,
    takeaway
  });
};

const findArticleInPublishedSnapshots = (article) => {
  const sourceUrl = normalizeStoryUrl(article?.sourceUrl);
  if (!sourceUrl) return null;

  const categoriesToCheck = [...new Set([normalizeCategory(article?.category), "All"].filter(Boolean))];
  for (const category of categoriesToCheck) {
    const snapshot = readPublishedSnapshot(category);
    const stories = Array.isArray(snapshot?.top_stories) ? snapshot.top_stories : [];
    const found = stories.find((story) => normalizeStoryUrl(story?.sourceUrl) === sourceUrl);
    if (found) {
      return { story: found, stories };
    }
  }

  return null;
};

const buildSummaryThreadContext = async (article) => {
  const published = findArticleInPublishedSnapshots(article);
  const seedStory = published?.story || article;
  const currentStories = published?.stories || [];
  if (!seedStory?.sourceUrl) return null;

  const scoredCandidates = getScoredThreadCandidates(seedStory, currentStories);
  if (scoredCandidates.length < 1) return null;

  const thread = await getThreadForStory(seedStory, scoredCandidates);
  if (!thread?.count) return null;

  const reviewedBy = String(thread.reviewed_by || "").toLowerCase();
  const topic = String(thread.topic || "").trim().toLowerCase();
  const headline = String(seedStory.headline || "").trim().toLowerCase();
  const isHeadlineTopic = Boolean(topic && headline && topic === headline);
  const isWeakLocalThread = reviewedBy.includes("local-strict") && !reviewedBy.includes("0g");

  // Single-item local-strict threads are too noisy for briefings and can produce off-topic history.
  const relevantHistory = selectBriefingHistoryItems(seedStory, thread);
  if (relevantHistory.length < 1 && (isWeakLocalThread || isHeadlineTopic || thread.count < 2)) {
    return null;
  }

  return {
    ...thread,
    count: relevantHistory.length,
    items: relevantHistory
  };
};

const getSummaryCachePath = (article) => {
  const cacheDir = join(root, ".siftle", "cache", "summaries");
  mkdirSync(cacheDir, { recursive: true });
  const key = Buffer.from(article.sourceUrl || article.headline).toString("base64url");
  return join(cacheDir, `${key}.json`);
};

let zeroGBrokerPromise;
const zeroGServicePromises = new Map();

const get0GServiceFor = async ({ providerAddress, envEndpoint, label = "0G compute" } = {}) => {
  const rpcUrl = process.env.OG_RPC_URL || "https://evmrpc.0g.ai";
  const trimmedProvider = providerAddress ? String(providerAddress).trim() : undefined;
  const trimmedEndpoint = envEndpoint ? String(envEndpoint).trim() : undefined;
  const cacheKey = `${label}:${trimmedProvider ?? ""}:${trimmedEndpoint ?? ""}`;

  // If an explicit endpoint is provided via env, prefer it and skip broker discovery.
  if (trimmedEndpoint) {
    if (!zeroGServicePromises.has(cacheKey)) {
      zeroGServicePromises.set(cacheKey, Promise.resolve({ url: String(trimmedEndpoint).replace(/\/$/, ""), provider: trimmedProvider ?? "env-endpoint" }));
    }
    return zeroGServicePromises.get(cacheKey);
  }

  if (!trimmedProvider) {
    throw new Error(`Missing ${label} provider`);
  }

  if (!zeroGBrokerPromise) {
    zeroGBrokerPromise = createZGComputeNetworkReadOnlyBroker(rpcUrl);
  }

  if (!zeroGServicePromises.has(cacheKey)) {
    zeroGServicePromises.set(cacheKey, zeroGBrokerPromise.then(async (broker) => {
      const services = await broker.inference.listServiceWithDetail(0, 50, true);
      const service = services.find(
        (entry) => entry.provider?.toLowerCase() === trimmedProvider.toLowerCase()
      );

      if (!service?.url) {
        throw new Error(`${label} provider endpoint not found`);
      }

      return service;
    }));
  }

  return zeroGServicePromises.get(cacheKey);
};

const get0GService = async () => {
  const providerAddress = process.env.OG_COMPUTE_PROVIDER;
  const envEndpoint = process.env.OG_COMPUTE_ENDPOINT || process.env.ZERO_G_ENDPOINT || process.env.OG_COMPUTE_URL || process.env.ZERO_G_URL;
  return get0GServiceFor({
    providerAddress: providerAddress ? String(providerAddress).trim() : undefined,
    envEndpoint: envEndpoint ? String(envEndpoint).trim() : undefined,
    label: "0G compute"
  });
};

const getThread0GConfig = () => {
  // Disable AI threading by default unless thread-specific API key overrides are explicitly provided
  const apiKey = process.env.THREAD_ZERO_G_API_KEY || process.env.THREAD_OG_COMPUTE_API_KEY;
  const model = process.env.THREAD_ZERO_G_MODEL || process.env.THREAD_OG_COMPUTE_MODEL || "deepseek-v4-flash";
  const providerAddress = process.env.THREAD_OG_COMPUTE_PROVIDER;
  const envEndpoint =
    process.env.THREAD_OG_COMPUTE_ENDPOINT ||
    process.env.THREAD_ZERO_G_ENDPOINT ||
    process.env.THREAD_OG_COMPUTE_URL ||
    process.env.THREAD_ZERO_G_URL;

  return {
    apiKey: apiKey ? String(apiKey).trim() : undefined,
    model: model ? String(model).trim() : "deepseek-v4-flash",
    providerAddress: providerAddress ? String(providerAddress).trim() : undefined,
    envEndpoint: envEndpoint ? String(envEndpoint).trim() : undefined
  };
};

const getThread0GService = async () => {
  const { providerAddress, envEndpoint } = getThread0GConfig();
  return get0GServiceFor({ providerAddress, envEndpoint, label: "thread 0G compute" });
};

const get0GEndpoint = (serviceUrl) => {
  const normalized = String(serviceUrl).replace(/\/$/, "");
  if (normalized.endsWith("/v1/proxy")) return normalized;
  return `${normalized}/v1/proxy`;
};

const get0GHttpError = async (response, label) => {
  let detail = "";
  try {
    detail = (await response.text()).replace(/\s+/g, " ").trim().slice(0, 240);
  } catch {
    detail = "";
  }

  return new Error(`${label} returned ${response.status}${detail ? `: ${detail}` : ""}`);
};

const zeroGStatus = {
  configured: false,
  last_success_at: null,
  last_error_at: null,
  last_error: null,
  last_success_kind: null,
  summary_success_count: 0,
  summary_fallback_count: 0,
  thread_review_success_count: 0,
  thread_review_fallback_count: 0
};

const getZeroGConfigStatus = () => ({
  api_key: Boolean(process.env.ZERO_G_API_KEY || process.env.OG_COMPUTE_API_KEY),
  provider: Boolean(process.env.OG_COMPUTE_PROVIDER),
  endpoint: Boolean(process.env.OG_COMPUTE_ENDPOINT || process.env.ZERO_G_ENDPOINT || process.env.OG_COMPUTE_URL || process.env.ZERO_G_URL),
  model: process.env.ZERO_G_MODEL || process.env.OG_COMPUTE_MODEL || "zai-org/GLM-5-FP8"
});

const getThreadZeroGConfigStatus = () => {
  const config = getThread0GConfig();
  const usesThreadOverride = Boolean(
    process.env.THREAD_ZERO_G_API_KEY ||
    process.env.THREAD_OG_COMPUTE_API_KEY ||
    process.env.THREAD_OG_COMPUTE_ENDPOINT ||
    process.env.THREAD_ZERO_G_ENDPOINT ||
    process.env.THREAD_OG_COMPUTE_PROVIDER ||
    process.env.THREAD_OG_COMPUTE_MODEL ||
    process.env.THREAD_ZERO_G_MODEL
  );

  return {
    api_key: Boolean(config.apiKey),
    provider: Boolean(config.providerAddress),
    endpoint: Boolean(config.envEndpoint),
    model: config.model,
    uses_thread_override: usesThreadOverride
  };
};

const getZeroGStatusSnapshot = () => {
  const config = getZeroGConfigStatus();
  return {
    ...zeroGStatus,
    configured: config.api_key && (config.endpoint || config.provider),
    usage_mode: ogUsageMode,
    auto_summaries_enabled: shouldAutoSummarizeWith0G,
    feed_thread_previews_enabled: enableFeedThreadPreviews,
    thread_review_budget_per_refresh: threadReviewBudgetPerRefresh,
    thread_review_budget_remaining: threadReviewBudgetRemaining,
    thread_review_timeout_ms: threadReviewTimeoutMs,
    thread_prep_concurrency: threadPrepConcurrency,
    thread_review_candidate_limit: threadReviewCandidateLimit,
    thread_review_same_day_candidate_limit: threadReviewSameDayCandidateLimit,
    thread_review_candidates_per_day: threadReviewCandidatesPerDay,
    thread_history_window_hours: threadHistoryWindowHours,
    thread_review_budget_scope: "per-category",
    config,
    thread_config: getThreadZeroGConfigStatus()
  };
};

const modelPriceDefaults = {
  "zai-org/GLM-5-FP8": { input: 1.54, output: 4.94 },
  "zai-org/GLM-5.1-FP8": { input: 2.2, output: 2.2 },
  "glm-5.1": { input: 1.87, output: 1.87 },
  "glm-5": { input: 1.31, output: 1.31 },
  "deepseek-v4-pro": { input: 3.73, output: 3.73 },
  "deepseek-v4-flash": { input: 0.31, output: 0.31 },
  "deepseek/deepseek-chat-v3-0324": { input: 0.65, output: 0.65 },
  "qwen3.6-plus": { input: 0.62, output: 0.62 },
  "qwen/qwen3-vl-30b-a3b-instruct": { input: 0.04, output: 0.04 },
  "0GM-1.0-35B-A3B": { input: 0.41, output: 0.41 }
};

const getModelPrice = (model, inputEnvName, outputEnvName) => {
  const fallback = modelPriceDefaults[model] ?? { input: 1, output: 1 };
  return {
    input_per_1m: Number(process.env[inputEnvName] ?? fallback.input),
    output_per_1m: Number(process.env[outputEnvName] ?? fallback.output),
    source: process.env[inputEnvName] || process.env[outputEnvName] ? "env" : modelPriceDefaults[model] ? "default" : "unknown-default"
  };
};

const estimateSpend = ({ inputTokens, outputTokens, price }) => {
  const inputCost = (inputTokens / 1_000_000) * price.input_per_1m;
  const outputCost = (outputTokens / 1_000_000) * price.output_per_1m;
  return Number((inputCost + outputCost).toFixed(6));
};

const getZeroGCostEstimate = () => {
  const summaryModel = process.env.ZERO_G_MODEL || process.env.OG_COMPUTE_MODEL || "zai-org/GLM-5-FP8";
  const threadConfig = getThread0GConfig();
  const threadModel = threadConfig.model;
  const sourceCategoryCount = sourceCategories.length;
  const threadCallsPerFullRefresh =
    threadReviewBudgetPerRefresh < 0 ? null : threadReviewBudgetPerRefresh * sourceCategoryCount;
  const threadInputTokensPerCall = Number(
    process.env.THREAD_REVIEW_EST_INPUT_TOKENS ?? 3200 + threadReviewCandidateLimit * 260
  );
  const threadOutputTokensPerCall = Number(process.env.THREAD_REVIEW_EST_OUTPUT_TOKENS ?? 900);
  const summaryInputTokensPerCall = Number(process.env.SUMMARY_EST_INPUT_TOKENS ?? 500);
  const summaryOutputTokensPerCall = Number(process.env.SUMMARY_EST_OUTPUT_TOKENS ?? 500);
  const summaryRetryOutputTokens = Number(process.env.SUMMARY_RETRY_EST_OUTPUT_TOKENS ?? 700);
  const threadPrice = getModelPrice(
    threadModel,
    "THREAD_OG_PRICE_INPUT_PER_1M",
    "THREAD_OG_PRICE_OUTPUT_PER_1M"
  );
  const summaryPrice = getModelPrice(
    summaryModel,
    "OG_PRICE_INPUT_PER_1M",
    "OG_PRICE_OUTPUT_PER_1M"
  );
  const threadCostPerCall = estimateSpend({
    inputTokens: threadInputTokensPerCall,
    outputTokens: threadOutputTokensPerCall,
    price: threadPrice
  });
  const summaryCostPerCall = estimateSpend({
    inputTokens: summaryInputTokensPerCall,
    outputTokens: summaryOutputTokensPerCall,
    price: summaryPrice
  });
  const summaryWorstRetryCost = estimateSpend({
    inputTokens: summaryInputTokensPerCall * 2,
    outputTokens: summaryOutputTokensPerCall + summaryRetryOutputTokens,
    price: summaryPrice
  });

  return {
    unit: "0G",
    note: "Estimates use configured max/output budgets and rough input-token assumptions. Actual provider billing can vary by prompt length and response size.",
    assumptions: {
      source_categories: sourceCategories,
      thread_budget_scope: "per-category",
      thread_history_window_hours: threadHistoryWindowHours,
      thread_calls_per_category: threadReviewBudgetPerRefresh,
      thread_calls_per_full_refresh: threadCallsPerFullRefresh,
      auto_summaries_on_refresh: shouldAutoSummarizeWith0G,
      summaries_are_cached: true,
      token_estimates_can_be_overridden_with_env: [
        "THREAD_REVIEW_EST_INPUT_TOKENS",
        "THREAD_REVIEW_EST_OUTPUT_TOKENS",
        "SUMMARY_EST_INPUT_TOKENS",
        "SUMMARY_EST_OUTPUT_TOKENS",
        "SUMMARY_RETRY_EST_OUTPUT_TOKENS"
      ],
      price_overrides: [
        "THREAD_OG_PRICE_INPUT_PER_1M",
        "THREAD_OG_PRICE_OUTPUT_PER_1M",
        "OG_PRICE_INPUT_PER_1M",
        "OG_PRICE_OUTPUT_PER_1M"
      ]
    },
    thread_review: {
      model: threadModel,
      price: threadPrice,
      estimated_input_tokens_per_call: threadInputTokensPerCall,
      estimated_output_tokens_per_call: threadOutputTokensPerCall,
      estimated_cost_per_call: threadCostPerCall,
      estimated_cost_per_category_refresh:
        threadReviewBudgetPerRefresh < 0 ? null : Number((threadCostPerCall * threadReviewBudgetPerRefresh).toFixed(6)),
      estimated_cost_per_full_refresh:
        threadCallsPerFullRefresh === null ? null : Number((threadCostPerCall * threadCallsPerFullRefresh).toFixed(6))
    },
    summary: {
      model: summaryModel,
      price: summaryPrice,
      estimated_input_tokens_per_call: summaryInputTokensPerCall,
      estimated_output_tokens_per_call: summaryOutputTokensPerCall,
      estimated_cost_per_uncached_summary: summaryCostPerCall,
      estimated_worst_case_with_retry: summaryWorstRetryCost,
      refresh_cost_in_conserve_mode: shouldAutoSummarizeWith0G ? "not-applicable" : 0
    }
  };
};

const recordZeroGSuccess = (kind) => {
  zeroGStatus.configured = getZeroGStatusSnapshot().configured;
  zeroGStatus.last_success_at = new Date().toISOString();
  zeroGStatus.last_success_kind = kind;
  zeroGStatus.last_error = null;

  if (kind === "thread_review") zeroGStatus.thread_review_success_count += 1;
  else zeroGStatus.summary_success_count += 1;
};

const recordZeroGFallback = (kind, error) => {
  zeroGStatus.configured = getZeroGStatusSnapshot().configured;
  zeroGStatus.last_error_at = new Date().toISOString();
  zeroGStatus.last_error = error?.message ?? String(error ?? "Unknown 0G error");

  if (kind === "thread_review") zeroGStatus.thread_review_fallback_count += 1;
  else zeroGStatus.summary_fallback_count += 1;
};

const scrapeArticleText = async (url) => {
  if (!url || /example\.com/i.test(url)) return "";
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) return "";
    const html = await res.text();
    if (html.includes("Just a moment...") || html.includes("cf-challenge") || html.includes("Cloudflare")) {
      return "";
    }
    const text = html
      .replace(/<head[\s\S]*?<\/head>/gi, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<header[\s\S]*?<\/header>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "")
      .replace(/<nav[\s\S]*?<\/nav>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return text.slice(0, 8000);
  } catch {
    return "";
  }
};

const summarizeWith0G = async (article, options = {}) => {
  const apiKey = process.env.ZERO_G_API_KEY || process.env.OG_COMPUTE_API_KEY;
  const model = process.env.ZERO_G_MODEL || process.env.OG_COMPUTE_MODEL || "zai-org/GLM-5-FP8";
  const thread = await buildSummaryThreadContext(article);

  if (!apiKey) {
    return { summary: buildLocalStructuredBriefing(article, thread), provider: "local-no-key" };
  }

  const cachePath = getSummaryCachePath(article);
  // If cache exists and caller didn't request a forced refresh, return cached summary.
  const force = Boolean(options.force);
  if (!force && existsSync(cachePath)) {
    try {
      const cached = JSON.parse(readFileSync(cachePath, "utf8"));
      if (cached.summary && cached.prompt_version === summaryPromptVersion && cached.provider !== "local-fallback" && cached.provider !== "local-no-key") {
        return { summary: cleanSummaryText(cached.summary), provider: cached.provider ?? "cache", proof: cached.proof };
      }
    } catch {
      // Ignore broken cache files and regenerate the summary.
    }
  }

  try {
    let articleText = article.summary || "";
    if (article.sourceUrl && !/example\.com/i.test(article.sourceUrl)) {
      const scraped = await scrapeArticleText(article.sourceUrl);
      if (scraped && scraped.length > articleText.length) {
        articleText = scraped;
      }
    }

    const service = await get0GService();
    const endpoint = get0GEndpoint(service.url);
    console.log("0G service resolved:", { provider: service.provider, endpoint });
    console.log("0G api key present:", Boolean(apiKey));
    const systemPrompt = [
      "You are Siftle's AI Briefing assistant. Return strict JSON with exactly one key: summary.",
      "The summary value must follow this exact structure and nothing else:",
      "**WHAT HAPPENED:** [1-2 sentences]",
      "**KEY POINTS:**",
      "- [bullet 1]",
      "- [bullet 2]",
      "- [bullet 3]",
      "**TAKEAWAY:** [1 sentence]",
      "Rules: Stay strictly grounded in the supplied text. No outside facts. Keep it short and direct. Use exactly 3 key-point bullets. Output only valid JSON."
    ].join(" ");
    const userPayload = {
      headline: article.headline,
      articleText,
      source: article.source,
      category: article.category
    };
    const response = await fetch(`${endpoint}/chat/completions`, {
      method: "POST",
      signal: AbortSignal.timeout(summaryTimeoutMs),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: JSON.stringify(userPayload)
          }
        ],
        temperature: 0.15,
        max_tokens: 600
      })
    });

    if (!response.ok) {
      throw await get0GHttpError(response, "0G");
    }

    const data = await response.json();
    const extractSummaryFromResponse = (resp) => {
      const content = resp.choices?.[0]?.message?.content ?? "";
      const jsonText = content.match(/\{[\s\S]*\}/)?.[0];
      let s = "";
      if (jsonText) {
        const parsed = JSON.parse(jsonText);
        s = cleanSummaryText(parsed.summary || "");
      } else {
        s = cleanSummaryText(content);
      }
      return s;
    };

    let summary = extractSummaryFromResponse(data);

    // Retry only when the model returns something unusably short, while staying grounded.
    const minWords = 45;
    const wordCount = summary.split(/\s+/).filter(Boolean).length;
    if (wordCount < minWords) {
      try {
        const retryResp = await fetch(`${endpoint}/chat/completions`, {
          method: "POST",
          signal: AbortSignal.timeout(summaryTimeoutMs),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model,
            messages: [
              {
                role: "system",
                content: systemPrompt
              },
              {
                role: "user",
                content: JSON.stringify(userPayload)
              }
            ],
            temperature: 0.08,
            max_tokens: 600
          })
        });

        if (retryResp.ok) {
          const retryData = await retryResp.json();
          const retrySummary = extractSummaryFromResponse(retryData);
          if (retrySummary && retrySummary.split(/\s+/).filter(Boolean).length >= minWords) {
            summary = retrySummary;
            // use retry response details for proof
            data.choices = retryData.choices;
            data.id = retryData.id || data.id;
            // response.status is not available on parsed JSON, keep original status
          }
        }
      } catch (e) {
        // ignore retry errors and proceed with original summary or fallback
      }
    }

    if (!summary) {
      summary = buildLocalStructuredBriefing(article, thread);
    }

    summary = normalizeStructuredBriefing(cleanSummaryText(summary), article, thread);

    const proofObj = {
      providerAddress: service.provider,
      endpoint,
      model,
      responseId: data?.id || null,
      status: response.status
    };

    // If we performed local expansion, mark it in the proof.
    if (summary && summary.split(/\s+/).filter(Boolean).length >= minWords && summary !== summarizeLocallyTight(article)) {
      // nothing special — best-effort
    }

    writeFileSync(
      cachePath,
      JSON.stringify({ summary, cached_at: new Date().toISOString(), provider: "0g", proof: proofObj, prompt_version: summaryPromptVersion }, null, 2)
    );
    recordZeroGSuccess("summary");
    return { summary, provider: "0g", proof: proofObj };
  } catch (error) {
    console.warn("0G summarization fallback:", error.message);
    recordZeroGFallback("summary", error);
    const summary = normalizeStructuredBriefing(buildLocalStructuredBriefing(article, thread), article, thread);
    writeFileSync(cachePath, JSON.stringify({ summary, cached_at: new Date().toISOString(), provider: "local-fallback", prompt_version: summaryPromptVersion }, null, 2));
    return { summary, provider: "local-fallback", error: error.message };
  }
};

const getActiveMarketQueriesStr = (category) => {
  const filePath = join(root, "data", "active_markets.json");
  if (!existsSync(filePath)) return "";
  try {
    const markets = JSON.parse(readFileSync(filePath, "utf8"));
    const categoryMarkets = category === "All" 
      ? markets 
      : markets.filter(m => m.category === category);
    
    const phrases = categoryMarkets.map(m => {
      if (m.id === "wc-spain-austria-spread") return `"Spain" "Austria" "World Cup"`;
      if (m.id === "wc-ronaldo-score-assist-croatia") return `"Cristiano Ronaldo" "Croatia" "World Cup"`;
      if (m.id === "wc-portugal-croatia-extra-time") return `"Portugal" "Croatia" "World Cup"`;
      if (m.id === "transfer-tonali-spurs") return `"Sandro Tonali" "Tottenham"`;
      if (m.id === "transfer-guimaraes-arsenal") return `"Bruno Guimarães" "Arsenal"`;
      if (m.id === "wc-mbappe-haaland-goals") return `"Mbappé" "Haaland"`;
      return m.threadTopic;
    });

    if (phrases.length === 0) return "";
    return phrases.join(" OR ");
  } catch (e) {
    console.error("Failed to read active markets for queries:", e);
    return "";
  }
};

const sportsTweetAccounts = [
  "FabrizioRomano",
  "DeadlineDayLive"
];

const sportsTweetQueryBlocklist = new Set([
  ...sportsTweetAccounts.map((account) => account.toLowerCase()),
  "breaking",
  "exclusive",
  "official",
  "sources",
  "sport",
  "sports",
  "football",
  "soccer",
  "basketball",
  "transfer",
  "transfers"
]);

const sanitizeNewsQueryEntity = (value = "") =>
  normalizeThreadEntity(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9\s-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const buildSportsTweetDiscoveryQueries = (tweets = []) => {
  const queries = [];
  const seen = new Set();

  for (const tweet of sortStoriesByPublishedAtDesc(tweets).slice(0, 12)) {
    const entities = [...extractThreadEntities(tweet)]
      .map((entity) => sanitizeNewsQueryEntity(entity))
      .filter((entity) => {
        if (!isUsefulThreadEntity(entity)) return false;
        const normalized = entity.toLowerCase();
        if (sportsTweetQueryBlocklist.has(normalized)) return false;
        if (normalized.startsWith("@")) return false;
        if (entity.length > 40) return false;
        return true;
      })
      .sort((first, second) => second.length - first.length);

    if (entities.length === 0) continue;

    const queryParts = entities.slice(0, 2).map((entity) => entity.split(/\s+/).slice(0, 3).join(" "));
    const query = queryParts.join(" ").trim();
    const key = query.toLowerCase();
    if (!query || query.length < 5 || query.length > 60 || seen.has(key)) continue;

    seen.add(key);
    queries.push(query);
    if (queries.length >= 4) break;
  }

  return queries;
};

const fetchSportsTweets = async (category) => {
  if (category !== "Sports") return [];

  const results = await Promise.allSettled(
    sportsTweetAccounts.map((username) => fetchTwitterAccountRss(username, category))
  );

  return dedupeArticles(
    results.flatMap((result) => (result.status === "fulfilled" ? result.value : []))
  );
};

const freshSportsTweetCacheMs = Math.max(30, Number(process.env.FRESH_SPORTS_TWEET_CACHE_SECONDS ?? 120)) * 1000;
let freshSportsTweetCache = {
  expiresAt: 0,
  tweets: []
};

const getFreshSportsTweets = async () => {
  if (freshSportsTweetCache.expiresAt > Date.now() && freshSportsTweetCache.tweets.length > 0) {
    return freshSportsTweetCache.tweets;
  }

  const tweets = sortStoriesNewestFirst(await fetchSportsTweets("Sports")).slice(0, 12);
  freshSportsTweetCache = {
    expiresAt: Date.now() + freshSportsTweetCacheMs,
    tweets
  };
  return tweets;
};

const overlayFreshSportsTweets = async (snapshot) => {
  if (!snapshot || snapshot.category !== "Sports") return snapshot;

  const freshTweets = await getFreshSportsTweets();
  if (freshTweets.length === 0) return snapshot;

  return {
    ...snapshot,
    top_stories: mergeDailyStories(freshTweets, snapshot.top_stories ?? []),
    generated_at: snapshot.generated_at,
    published_at: snapshot.published_at,
    status: snapshot.status,
    sources: {
      ...(snapshot.sources ?? {}),
      fresh_tweets_overlay: true,
      fresh_tweet_cache_seconds: Math.round(freshSportsTweetCacheMs / 1000)
    }
  };
};

const fetchNewsDataWithCustomQuery = async (query, category) => {
  if (!process.env.NEWSDATA_API_KEY) return [];

  const params = new URLSearchParams({
    apikey: process.env.NEWSDATA_API_KEY,
    language: "en",
    size: "15",
    q: query
  });

  try {
    const response = await fetch(`https://newsdata.io/api/1/latest?${params}`, {
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) {
      console.warn(`NewsData custom query returned ${response.status}`);
      return [];
    }

    const data = await response.json();
    return (data.results ?? []).map((item) => ({
      headline: item.title,
      summary: item.description || item.content || item.title,
      source: item.source_name || "NewsData",
      sourceUrl: item.link,
      imageUrl: item.image_url || getFallbackImage(inferCategory({ ...item, headline: item.title, summary: item.description }, category)),
      publishedAt: item.pubDate,
      category: inferCategory({ ...item, headline: item.title, summary: item.description }, category)
    }));
  } catch (err) {
    console.warn("NewsData custom query failed:", err.message);
    return [];
  }
};

const fetchGuardianWithCustomQuery = async (query, category) => {
  if (!process.env.GUARDIAN_API_KEY) return [];

  const params = new URLSearchParams({
    "api-key": process.env.GUARDIAN_API_KEY,
    q: query,
    "show-fields": "trailText,thumbnail",
    "page-size": "15"
  });

  try {
    const response = await fetch(`https://content.guardianapis.com/search?${params}`, {
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) {
      console.warn(`Guardian custom query returned ${response.status}`);
      return [];
    }

    const data = await response.json();
    return (data.response?.results ?? []).map((item) => ({
      headline: item.webTitle,
      summary: stripHtml(item.fields?.trailText || item.webTitle),
      source: "The Guardian",
      sourceUrl: item.webUrl,
      imageUrl: item.fields?.thumbnail || getFallbackImage(inferCategory({ headline: item.webTitle, summary: item.fields?.trailText, category: item.sectionName }, category)),
      publishedAt: item.webPublicationDate,
      category: inferCategory({ headline: item.webTitle, summary: item.fields?.trailText, category: item.sectionName }, category)
    }));
  } catch (err) {
    console.warn("Guardian custom query failed:", err.message);
    return [];
  }
};

const fetchNewsData = async (category) => {
  if (!process.env.NEWSDATA_API_KEY) return [];

  const params = new URLSearchParams({
    apikey: process.env.NEWSDATA_API_KEY,
    language: "en",
    size: "10"
  });

  if (category !== "All") {
    params.set("q", categoryQueries[category]);
  }

  const response = await fetch(`https://newsdata.io/api/1/latest?${params}`, {
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error(`NewsData returned ${response.status}`);

  const data = await response.json();
  return (data.results ?? []).map((item) => ({
    headline: item.title,
    summary: item.description || item.content || item.title,
    source: item.source_name || "NewsData",
    sourceUrl: item.link,
    imageUrl: item.image_url || getFallbackImage(inferCategory({ ...item, headline: item.title, summary: item.description }, category)),
    publishedAt: item.pubDate,
    category: inferCategory({ ...item, headline: item.title, summary: item.description }, category)
  }));
};

const fetchGuardian = async (category) => {
  if (!process.env.GUARDIAN_API_KEY) return [];

  const params = new URLSearchParams({
    "api-key": process.env.GUARDIAN_API_KEY,
    q: categoryQueries[category] ?? "top news",
    "show-fields": "trailText,thumbnail",
    "page-size": String(Number(process.env.GUARDIAN_PAGE_SIZE ?? 30))
  });

  const response = await fetch(`https://content.guardianapis.com/search?${params}`, {
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error(`Guardian returned ${response.status}`);

  const data = await response.json();
  return (data.response?.results ?? []).map((item) => ({
    headline: item.webTitle,
    summary: stripHtml(item.fields?.trailText || item.webTitle),
    source: "The Guardian",
    sourceUrl: item.webUrl,
    imageUrl: item.fields?.thumbnail || getFallbackImage(inferCategory({ headline: item.webTitle, summary: item.fields?.trailText, category: item.sectionName }, category)),
    publishedAt: item.webPublicationDate,
    category: inferCategory({ headline: item.webTitle, summary: item.fields?.trailText, category: item.sectionName }, category)
  }));
};

const dedupeArticles = (articles) => {
  const seen = new Set();
  return articles
    .filter(isFreshArticle)
    .sort((first, second) => new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime())
    .filter((article) => {
      const key = stripHtml(article.headline).toLowerCase().replace(/[^a-z0-9]+/g, " ").split(" ").slice(0, 8).join(" ");
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

const getArticleSourceKey = (article) => {
  try {
    return new URL(article.sourceUrl || "").hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return String(article.source || "unknown").toLowerCase();
  }
};

const balanceArticlesBySource = (articles, maxPerSource = 8) => {
  const sourceKeys = new Set(articles.map(getArticleSourceKey));
  if (sourceKeys.size <= 1) return articles;

  const counts = new Map();
  return articles.filter((article) => {
    const key = getArticleSourceKey(article);
    const count = counts.get(key) ?? 0;
    if (count >= maxPerSource) return false;
    counts.set(key, count + 1);
    return true;
  });
};

const isFootballOrNbaArticle = (article) => {
  if (article.category !== "Sports") return true;
  const text = getArticleText(article);
  const sourceKey = getArticleSourceKey(article);
  const sourceUrl = String(article.sourceUrl ?? "").toLowerCase();
  const hasTerm = (term) => new RegExp(`(^|[^a-z0-9])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`, "i").test(text);
  const lowValueSportsPatterns = [
    /\bfootball daily\b/,
    /\bpodcast\b/,
    /\bwallchart\b/,
    /\bquiz\b/,
    /\bdownload your world cup\b/
  ];
  if (sourceUrl.includes("bbc.co.uk/sounds") || sourceUrl.includes("iplayer") || sourceUrl.includes("/audio/")) return false;
  if (lowValueSportsPatterns.some((pattern) => pattern.test(text))) return false;

  const blockedSports = [
    "nfl",
    "mlb",
    "baseball",
    "tennis",
    "formula 1",
    "f1",
    "cricket",
    "rugby",
    "golf",
    "boxing",
    "ufc",
    "mma",
    "wnba",
    "college basketball",
    "mens college basketball",
    "men's college basketball",
    "womens college basketball",
    "women's college basketball",
    "college football",
    "ncaa football",
    "softball",
    "nhl",
    "hockey"
  ];
  const footballSignals = [
    "football",
    "soccer",
    "premier league",
    "champions league",
    "europa league",
    "uefa",
    "fifa",
    "world cup",
    "la liga",
    "serie a",
    "bundesliga",
    "mls",
    "transfer",
    "arsenal",
    "chelsea",
    "liverpool",
    "manchester",
    "real madrid",
    "barcelona",
    "psg",
    "bayern",
    "inter milan",
    "ac milan",
    "juventus"
  ];
  const soccerSpecificSignals = footballSignals.filter((signal) => signal !== "football");
  const hasFootballPath = sourceUrl.includes("/football/") || sourceUrl.includes("/soccer/") || sourceKey.includes("football");
  const hasClubOrLeagueContext =
    hasFootballPath || soccerSpecificSignals.filter((signal) => !["world cup", "fifa"].includes(signal)).some(hasTerm);
  const isClearlySoccer = hasFootballPath || soccerSpecificSignals.some(hasTerm);
  const isFootball = isClearlySoccer || hasTerm("football");

  if (!isFootball) return false;
  if (blockedSports.some((signal) => text.includes(signal))) {
    return hasClubOrLeagueContext;
  }

  return true;
};

const isPredictionMarketFriendly = (article) => {
  const headline = article.headline.toLowerCase();
  const text = `${article.headline} ${article.summary || ""}`.toLowerCase();
  
  // Headline-only patterns (to avoid false positives from quotes in summaries)
  const blockedHeadlinePatterns = [
    /\byour\b/i,
    /\bi can'?t\b/i,
    /\bi cannot\b/i,
    /^how (?:does|are|is|can|to|do|will|should)\b.*?\?/i,
    /^why (?:are|is|do|does|did|will|should)\b.*?\?/i,
    /^has (?:var|world cup|football|soccer|champions league|league)\b.*?\?/i
  ];

  if (blockedHeadlinePatterns.some((pattern) => pattern.test(headline))) {
    return false;
  }

  // Exclude listicles, tutorials, reviews, guides, personal blogs, and low-predictability content
  const blockedPatterns = [
    /\bhow to\b/i,
    /\btutorials?\b/i,
    /\bguides?\b/i,
    /\bdeals?\b/i,
    /\bpromo codes?\b/i,
    /\bcoupons?\b/i,
    /\breviews?\b/i,
    /\balternatives?\b/i,
    /\bopinion\b/i,
    /\bi built\b/i,
    /\bi tried\b/i,
    /\bi set\b/i,
    /\bi'?ve seen\b/i,
    /\bmy setup\b/i,
    /\bwhy every\b/i,
    /\bshould you\b/i,
    /\b(best|top)\s+\d+\b/i,
    /\bpodcast\b/i,
    /\bquiz\b/i,
    /\bwallchart\b/i,
    /\bsales?\b/i,
    /\bdiscounts?\b/i,
    /\bwhere to (find|get|buy|go|unlock|farm)\b/i,
    /\bmy (favour?ite|setup|experience|opinion|thoughts|first|wading|view|playthrough|hands-on)\b/i,
    /\bi'?ve\b/i,
    /\bi'm\b/i,
    /\bi (played|tried|tested|built|setup|went|don'?t|think|feel|like|want|love|hate|wish|hope|dare|spotted)\b/i,
    /\bwe (should|need|want|love|hate|wish|hope|all be)\b/i,
    /\bwe're\b/i,
    /\beditorial\b/i,
    /\bthoughts on\b/i,
    /(?:^|\b)\d+\s+.*?\b(best|top|worst|favorite|favourite|coolest|cozy|classic|essential|hidden|amazing|scariest|upcoming|greatest|most|reasons|ways|things|bosses|games|characters|secrets)\b/i,
    
    // Additional filters for explainers, nostalgia, fluff, columns, and community content
    /\bexplained\b/i,
    /\bexplainer\b/i,
    /\bwhat we know\b/i,
    /\bwhat to expect\b/i,
    /\bwill you (buy|play|get|hold)\b/i,
    /\bhere'?s (how|why|what)\b/i,
    /\bhands-on\b/i,
    /\bimpressions\b/i,
    /\bworth it\b/i,
    /\bwalkthroughs?\b/i,
    /\bmodder\b/i,
    /\bspeedrunner\b/i,
    /\beaster eggs?\b/i,
    /\blore\b/i,
    /\bcosplay\b/i,
    /\bcolumns?\b/i,
    /\bdiaries\b/i,
    /\bdiary\b/i,
    /\bround-?ups?\b/i,
    /\bglitches?\b/i,
    /\bfree-to-play\b/i,
    /\bfree to play\b/i,
    /\bplay the demo\b/i,
    /\bmini-reviews?\b/i,
    /\bindie spotlight\b/i,
    /\bcombines? the horror of\b/i,
    /\bdown with tactical rocks\b/i,
    /\bexplains why\b/i,
    /\bhilariously\b/i,
    /\bdev'?s obsession\b/i,
    /\bdevs? (reportedly )?pitched\b/i,
    /\bpitched the idea\b/i,
    /\bcancelled game\b/i,
    /\bcanceled game\b/i,
    /\bwe could have\b/i,
    /\bwhat could have been\b/i,
    /\bif .*? had gone differently\b/i,
    /\btry not to\b/i,
    /\bplay as a\b/i,
    /\bplay as\b/i,
    /\b(?:players|fans|gamers) (?:end|discover|find|reveal|spot|celebrate|react|share|show|claim|demand|want|complain|criticise|criticize|notice|point)\b/i,
    /\bthe heck\b/i,
    /\bto ask us\b/i,
    /\bpro tools\b/i,
    /\bcareer profile\b/i,
    /\bfind jobs\b/i,
    /\brecommend (?:these|this)\b/i,
    /\btransitioning as a\b/i,
    /\bevaluating performance\b/i,
    /\bpick your\b/i,
    /\bexplains how\b/i,
    /\bcompare to other\b/i,
    /\bbest position\b/i
  ];

  if (blockedPatterns.some((pattern) => pattern.test(text))) {
    return false;
  }

  return true;
};

const isThreadFriendlyTechArticle = (article) => {
  if (article.category !== "Tech") return true;

  const sourceKey = getArticleSourceKey(article);
  if (sourceKey.includes("dev.to")) return false;

  const text = getArticleText(article);
  const tutorialPatterns = [
    /\bhow to\b/,
    /\bi built\b/,
    /\bi tried\b/,
    /\bwhy every\b/,
    /\bshould you\b/,
    /\bmaster these\b/,
    /\bkeywords?\b/,
    /\barithmetic operators?\b/,
    /\btype conversion\b/,
    /\bfootguns?\b/,
    /\btips?\b/,
    /\btutorial\b/,
    /\bguide\b/,
    /\breview\b/,
    /\balternatives?\b/,
    /\blooking to ditch\b/,
    /\bbest kindle\b/,
    /\bbest .*alternatives?\b/,
    /\bcoupons?\b/,
    /\bpromo codes?\b/,
    /\bdeals?\b/,
    /\bhonesty traps?\b/,
    /\bprompt tricks?\b/,
    /\btricks to try\b/,
    /\bway more customizable\b/,
    /\bi set\b/,
    /\bi'?ve seen\b/,
    /\bthis easy\b/,
    /\b\d+\s+best\b/,
    /\bbest\b.*\bai\b/,
    /\bbest\b.*\bspeakers?\b/,
    /\bvs\.\b/,
    /\bbetter ai-generated images?\b/,
    /\bspider-man\b/,
    /\bmovie\b/,
    /\btheaters?\b/,
    /\bscreening\b/,
    /\bopen-world\b/,
    /\bdriving game\b/,
    /\bvideo games?\b/,
    /\bgaming\b/,
    /\bgame reveals?\b/,
    /\bgame trailer\b/,
    /\bgameplay\b/,
    /\b2d platforming\b/,
    /\bconsoles?\s+and\s+pc\b/,
    /\bduck detective\b/,
    /\bcreepy-cute mystery\b/,
    /\bprevent her murder\b/,
    /\bfinal fantasy\b/,
    /\bstar wars\b/,
    /\bnintendo\b/,
    /\bplaystation\b/,
    /\bxbox\b/,
    /\bcoolest gadgets?\b/,
    /\broast my setup\b/,
    /\bwithout leaving the terminal\b/
  ];
  if (tutorialPatterns.some((pattern) => pattern.test(text))) return false;

  const companyOrEventSignals = [
    "launch",
    "released",
    "unveiled",
    "announced",
    "acquisition",
    "funding",
    "raises",
    "lawsuit",
    "regulator",
    "breach",
    "hack",
    "outage",
    "cloud",
    "ai",
    "security",
    "privacy",
    "data center",
    "datacenter",
    "developer",
    "software",
    "platform",
    "chip",
    "chips",
    "semiconductor",
    "database",
    "infrastructure",
    "startup",
    "google",
    "apple",
    "microsoft",
    "meta",
    "amazon",
    "nvidia",
    "openai",
    "anthropic",
    "github",
    "cloudflare",
    "oracle",
    "xai",
    "perplexity",
    "blue origin",
    "palantir",
    "databricks",
    "spacex",
    "tesla",
    "alphabet"
  ];

  const trustedTechSources = [
    "techcrunch.com",
    "theverge.com",
    "wired.com",
    "zdnet.com",
    "infoq.com",
    "github.blog",
    "venturebeat.com",
    "technologyreview.com",
    "bloomberg.com",
    "arstechnica.com"
  ];

  return trustedTechSources.some((source) => sourceKey.includes(source)) || companyOrEventSignals.some((signal) => text.includes(signal));
};

const runWithConcurrency = async (items, limit, worker) => {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workerCount = Math.max(1, Math.min(limit, items.length));

  await Promise.all(
    Array.from({ length: workerCount }, async () => {
      while (nextIndex < items.length) {
        const currentIndex = nextIndex;
        nextIndex += 1;
        results[currentIndex] = await worker(items[currentIndex], currentIndex);
        // Yield to the event loop to allow incoming HTTP requests/health pings to be handled
        await new Promise(resolve => setImmediate(resolve));
      }
    })
  );

  return results;
};

const calculateAutonomousUnlockPrice = (story) => {
  const headline = String(story.headline || "").toLowerCase();
  const summary = String(story.summary || "").toLowerCase();
  let price = 0.000010; // base price: 10 units ($0.000010)

  const premiumKeywords = [
    "injury", "injured", "ruled out", "fracture", "torn", "acl", "hamstring",
    "transfer", "signing", "agreement", "medical", "here we go", "deal", "bid", "agree",
    "win", "defeat", "victory", "eliminate", "knockout", "semifinal", "semi-final", "final", "qualify",
    "champions league", "world cup", "mbappe", "yamal", "haaland", "kane", "bellingham"
  ];

  const mediumKeywords = [
    "lineup", "tactics", "preview", "weather", "kick-off", "kickoff", "stadium"
  ];

  let matchesPremium = 0;
  for (const kw of premiumKeywords) {
    if (headline.includes(kw) || summary.includes(kw)) matchesPremium++;
  }

  let matchesMedium = 0;
  for (const kw of mediumKeywords) {
    if (headline.includes(kw) || summary.includes(kw)) matchesMedium++;
  }

  if (matchesPremium > 0) {
    price += Math.min(0.0008, matchesPremium * 0.0002);
  } else if (matchesMedium > 0) {
    price += Math.min(0.0001, matchesMedium * 0.00005);
  }

  // Add deterministic headline hash variation (up to $0.000099 / 99 units)
  let hash = 0;
  for (let i = 0; i < headline.length; i++) {
    hash = (hash << 5) - hash + headline.charCodeAt(i);
    hash |= 0;
  }
  const variation = Math.abs(hash % 100) / 1000000;
  price = Number((price + variation).toFixed(6));

  return Math.min(0.001, Math.max(0.000001, price));
};

const buildStories = async (articles) => {
  const stories = articles.map((article, index) => {
    const category = inferCategory(article, article.category);
    const type = article.type || "news";

    const story = {
      id: index + 1,
      headline: stripHtml(article.headline),
      category,
      summary: summarizeLocally(article),
      source: article.source,
      sourceUrl: article.sourceUrl,
      imageUrl: article.imageUrl || getFallbackImage(category),
      publishedAt: article.publishedAt,
      readTime: estimateReadTime(`${article.headline} ${article.summary}`),
      postedAt: relativeTime(article.publishedAt),
      accent: accentForCategory(category),
      saved: false,
      type
    };

    if (type === "news") {
      story.unlockPriceUsdc = calculateAutonomousUnlockPrice(story);
    }

    return story;
  });

  if (shouldAutoSummarizeWith0G) {
    await runWithConcurrency(articles, summaryConcurrency, async (article, idx) => {
      try {
        const result = await summarizeWith0G(article);
        if (result && result.summary) {
          stories[idx].ai_summary = result.summary;
          stories[idx].ai_provider = result.provider || "0g";
          if (result.proof) stories[idx].ai_proof = result.proof;
        }
      } catch (err) {
        // ignore per-article errors; local summary already present
      }
    });
  }

  return stories;
};

const getStoryDedupeKey = (story) => {
  const sourceUrl = String(story.sourceUrl || "").trim().toLowerCase().replace(/[?#].*$/, "");
  if (sourceUrl) return `url:${sourceUrl}`;

  return `title:${stripHtml(story.headline)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .slice(0, 10)
    .join(" ")}`;
};

const sortStoriesNewestFirst = (stories) =>
  [...stories].sort((first, second) => {
    const firstTime = new Date(first.publishedAt || 0).getTime();
    const secondTime = new Date(second.publishedAt || 0).getTime();
    if (!Number.isNaN(firstTime) && !Number.isNaN(secondTime) && firstTime !== secondTime) {
      return secondTime - firstTime;
    }

    return Number(first.id ?? 0) - Number(second.id ?? 0);
  });

const mergeDailyStories = (freshStories, previousStories = []) => {
  const mergedByKey = new Map();
  const freshHasRealStories = freshStories.some((story) => !isDevelopmentFallbackStory(story));
  const previousStoriesToMerge = freshHasRealStories
    ? previousStories.filter((story) => !isDevelopmentFallbackStory(story))
    : previousStories;

  for (const story of previousStoriesToMerge) {
    const key = getStoryDedupeKey(story);
    if (key) mergedByKey.set(key, story);
  }

  for (const story of freshStories) {
    const key = getStoryDedupeKey(story);
    if (!key) continue;
    const previous = mergedByKey.get(key);
    mergedByKey.set(key, {
      ...(previous ?? {}),
      ...story,
      ...(story.thread ? { thread: story.thread } : previous?.thread ? { thread: previous.thread } : {}),
      ...(story.ai_summary ? { ai_summary: story.ai_summary } : previous?.ai_summary ? { ai_summary: previous.ai_summary } : {}),
      ...(story.ai_provider ? { ai_provider: story.ai_provider } : previous?.ai_provider ? { ai_provider: previous.ai_provider } : {}),
      ...(story.ai_proof ? { ai_proof: story.ai_proof } : previous?.ai_proof ? { ai_proof: previous.ai_proof } : {})
    });
  }

  const mergedStories = [...mergedByKey.values()];
  const hasRealStoriesInMerge = mergedStories.some((story) => !isDevelopmentFallbackStory(story));

  return sortStoriesNewestFirst(
    hasRealStoriesInMerge ? mergedStories.filter((story) => !isDevelopmentFallbackStory(story)) : mergedStories
  )
    .map((story, index) => ({
      ...story,
      id: index + 1,
      postedAt: story.publishedAt ? relativeTime(story.publishedAt) : story.postedAt
    }));
};

const sanitizeSnapshotForCategory = (snapshot) => {
  if (!snapshot || !Array.isArray(snapshot.top_stories)) return snapshot;
  const storyFilter =
    snapshot.category === "Tech"
      ? (story) => story.type === "tweet" || isThreadFriendlyTechArticle(story)
      : snapshot.category === "Sports"
        ? (story) => story.type === "tweet" || isFootballOrNbaArticle(story)
      : snapshot.category === "All"
        ? (story) =>
            story.type === "tweet" || (
              (story.category !== "Tech" || isThreadFriendlyTechArticle(story)) &&
              (story.category !== "Sports" || isFootballOrNbaArticle(story))
            )
        : () => true;

  const categoryStories = snapshot.top_stories.filter(
    (story) => story.type === "tweet" || storyFilter(story)
  );
  const filteredStories = categoryStories.filter((story) => !isDevelopmentFallbackStory(story));
  const validThreads = {};
  const sanitizedStories = filteredStories.map((story, index) => {
    const url = normalizeStoryUrl(story.sourceUrl);
    let validThread = normalizeValidThread(snapshot.threads?.[url], story);
    if (!validThread) {
      const marketRuleEntry = Object.entries(marketThreadRules).find(([, rule]) => storyMatchesMarketThreadRule(story, rule));
      if (marketRuleEntry) {
        const [marketId] = marketRuleEntry;
        const marketThread = getMarketThread(marketId);
        validThread = normalizeValidThread({
          topic: marketThread?.topic ?? marketThreadRules[marketId]?.topic,
          current: story,
          items: [marketThread?.current, ...(marketThread?.items ?? [])].filter(Boolean),
          reviewed_by: `${marketThread?.reviewed_by ?? "market-thread"}+feed-market-bridge`
        }, story);
      }
    }
    if (validThread) validThreads[url] = validThread;

    const { thread: _thread, ...storyWithoutThread } = story;
    return {
      ...storyWithoutThread,
      ...(validThread
        ? {
            thread: {
              count: validThread.count,
              topic: validThread.topic
            }
          }
        : {}),
      id: index + 1,
      postedAt: story.publishedAt ? relativeTime(story.publishedAt) : story.postedAt
    };
  });

  return {
    ...snapshot,
    top_stories: sanitizedStories,
    threads: validThreads,
    thread_metadata: {
      ...(snapshot.thread_metadata ?? {}),
      prepared_count: Object.keys(validThreads).length,
      thread_history_window_hours: threadHistoryWindowHours
    }
  };
};

const mergeWithTodaySnapshot = (snapshot) => {
  const previous = readPublishedSnapshot(snapshot.category);
  if (!previous || previous.date !== snapshot.date) return snapshot;

  return sanitizeSnapshotForCategory({
    ...snapshot,
    top_stories: mergeDailyStories(snapshot.top_stories, previous.top_stories),
    threads: previous.threads ?? {},
    thread_metadata: previous.thread_metadata
  });
};

const buildCategorySnapshot = async (category) => prepareSnapshotThreads(mergeWithTodaySnapshot(await generateSnapshot(category)));

const buildAllSnapshotFromCategories = async () => {
  const today = getTodayKey();
  const categorySnapshots = (
    await Promise.all(
      sourceCategories.map(async (category) => {
        const snapshot = readPublishedSnapshot(category);
        if (snapshot?.date === today && hasRealStories(snapshot)) return snapshot;
        return generateAndPublishFeed(category);
      })
    )
  ).filter((snapshot) => snapshot?.date === today && Array.isArray(snapshot.top_stories));

  if (categorySnapshots.length === 0) {
    return buildCategorySnapshot("All");
  }

  return {
    date: today,
    category: "All",
    generated_at: new Date().toISOString(),
    sources: {
      newsdata: categorySnapshots.some((snapshot) => snapshot.sources?.newsdata),
      guardian: categorySnapshots.some((snapshot) => snapshot.sources?.guardian),
      zero_g: categorySnapshots.some((snapshot) => snapshot.sources?.zero_g),
      shelby: isShelbyArchiveConfigured(),
      max_article_age_hours: maxArticleAgeHours,
      composed_from_categories: sourceCategories
    },
    top_stories: mergeDailyStories(categorySnapshots.flatMap((snapshot) => snapshot.top_stories), []),
    threads: categorySnapshots.reduce((threads, snapshot) => ({ ...threads, ...(snapshot.threads ?? {}) }), {}),
    thread_metadata: {
      prepared_at: new Date().toISOString(),
      prepared_count: categorySnapshots.reduce((count, snapshot) => count + Number(snapshot.thread_metadata?.prepared_count ?? 0), 0),
      thread_history_window_hours: threadHistoryWindowHours,
      composed_from_categories: sourceCategories,
      feed_ready: true
    }
  };
};

const archiveSnapshot = async (snapshot) => {
  const snapshotWithStorage = {
    ...snapshot,
    storage: {
      local_path: null,
      shelby_configured: isShelbyArchiveConfigured(),
      shelby_rpc_url: process.env.SHELBY_RPC_URL ?? null,
      shelby_archive_prefix: process.env.SHELBY_ARCHIVE_PREFIX ?? "siftle/feeds",
      shelby_blob_name: getShelbyBlobName(snapshot.date, snapshot.category, snapshot.generated_at),
      stored_at: new Date().toISOString()
    }
  };

  // Always write to local filesystem storage as a cache/backup:
  let localPath = null;
  try {
    mkdirSync(archiveDir, { recursive: true });
    const filename = archiveFilename(snapshot.date, snapshot.category);
    localPath = join(archiveDir, filename);
    snapshotWithStorage.storage.local_path = localPath;
    writeJsonFile(localPath, snapshotWithStorage);
  } catch (err) {
    console.warn("Failed to save archive snapshot locally:", err.message);
  }

  if (isShelbyArchiveConfigured()) {
    try {
      const shelbyArchive = await uploadShelbySnapshot(snapshotWithStorage);
      return {
        ...shelbyArchive,
        path: localPath
      };
    } catch (error) {
      console.warn("Shelby archive upload fallback:", error.message);
      return {
        provider: "local-dev",
        path: localPath,
        shelby_error: error.message
      };
    }
  }

  if (!process.env.SHELBY_UPLOAD_URL) {
    return {
      provider: "local-dev",
      path: localPath,
      rpc_url: process.env.SHELBY_RPC_URL ?? null,
      note: "Shelby SDK config is incomplete."
    };
  }

  const response = await fetch(process.env.SHELBY_UPLOAD_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.SHELBY_API_KEY ? { Authorization: `Bearer ${process.env.SHELBY_API_KEY}` } : {})
    },
    body: JSON.stringify(snapshotWithStorage)
  });

  if (!response.ok) {
    throw new Error(`Shelby archive returned ${response.status}`);
  }

  return { provider: "shelby", response: await response.json() };
};

const getLatestSnapshotPath = (category) => join(publishedDir, latestFilename(category));

const normalizeSnapshotSummaries = (snapshot) => {
  if (!snapshot?.top_stories) return snapshot;

  return {
    ...snapshot,
    top_stories: snapshot.top_stories.map((story) => ({
      ...story,
      summary: cleanSummaryText(story.summary),
      ai_summary: story.ai_summary ? cleanSummaryText(story.ai_summary) : story.ai_summary,
      postedAt: story.publishedAt ? relativeTime(story.publishedAt) : story.postedAt
    }))
  };
};

const readPublishedSnapshot = (category) => {
  const cached = publishedSnapshots.get(category);
  if (cached) return cached;
  const filePath = getLatestSnapshotPath(category);
  if (!existsSync(filePath)) return null;
  try {
    return normalizeSnapshotSummaries(JSON.parse(readFileSync(filePath, "utf8")));
  } catch (err) {
    console.warn("Failed to read latest snapshot locally:", err.message);
    return null;
  }
};

const getFeedHealthSnapshot = () => {
  const checkedAt = new Date();
  const feeds = categories.reduce((result, category) => {
    const snapshot = readPublishedSnapshot(category);
    result[category] = snapshot
      ? analyzeFeedSnapshot(snapshot, { now: checkedAt, refreshIntervalMinutes })
      : {
          category,
          status: "warning",
          generated_at: null,
          age_minutes: null,
          story_count: 0,
          real_story_count: 0,
          fallback_story_count: 0,
          thread_count: 0,
          newest_story: null,
          source_counts: {},
          warnings: ["missing-published-snapshot"]
        };
    return result;
  }, {});

  return {
    checked_at: checkedAt.toISOString(),
    refresh_interval_minutes: refreshIntervalMinutes,
    thread_history_window_hours: threadHistoryWindowHours,
    status: Object.values(feeds).some((feed) => feed.status !== "ok") ? "warning" : "ok",
    feeds
  };
};

const getRecoverablePublishedSnapshot = async (category) => {
  const selectedCategory = normalizeCategory(category);
  const current = readPublishedSnapshot(selectedCategory);
  if (current?.date === getTodayKey() && hasRealStories(current)) {
    return current;
  }

  if (!isShelbyArchiveConfigured() || current?.archive?.provider === "shelby") {
    return current;
  }

  try {
    const today = getTodayKey();
    const recovered = await readArchiveSnapshot(today, selectedCategory);
    const blobName = recovered?.archive?.blob_name ?? "";
    const isOwnCategoryBlob =
      selectedCategory === "All" ||
      blobName.includes(`/${selectedCategory.toLowerCase()}/`) ||
      blobName.endsWith(`/${selectedCategory.toLowerCase()}.json`);

    if (
      recovered?.archive?.provider === "shelby" &&
      recovered.category === selectedCategory &&
      isOwnCategoryBlob &&
      (recovered.top_stories?.length ?? 0) > 0
    ) {
      const publishedSnapshot = {
        ...recovered,
        published_at: recovered.published_at ?? new Date().toISOString(),
        status: "published"
      };
      writePublishedSnapshot(publishedSnapshot);
      try {
        mkdirSync(archiveDir, { recursive: true });
        const filename = archiveFilename(publishedSnapshot.date, publishedSnapshot.category);
        writeJsonFile(join(archiveDir, filename), publishedSnapshot);
      } catch (archiveErr) {
        console.warn("Failed to save recovered snapshot to local archive:", archiveErr.message);
      }
      return publishedSnapshot;
    }
  } catch {
    // Keep the local latest file if Shelby recovery is unavailable.
  }

  return current;
};

const writePublishedSnapshot = (snapshot) => {
  const sanitized = sanitizeSnapshotForCategory(snapshot);
  publishedSnapshots.set(snapshot.category, sanitized);

  try {
    mkdirSync(publishedDir, { recursive: true });
    writeJsonFile(getLatestSnapshotPath(snapshot.category), sanitized);
  } catch (err) {
    console.warn("Failed to write latest snapshot locally:", err.message);
  }
};

const persistPreparedThreadLocally = (story, thread) => {
  const url = normalizeStoryUrl(story?.sourceUrl);
  if (!url) return;
  const validThread = normalizeValidThread(thread, story);

  for (const category of [...new Set([story.category, "All"].map(normalizeCategory))]) {
    const snapshot = readPublishedSnapshot(category);
    if (!snapshot?.top_stories?.length) continue;

    const hasStory = snapshot.top_stories.some((item) => normalizeStoryUrl(item.sourceUrl) === url);
    if (!hasStory) continue;

    const threads = { ...(snapshot.threads ?? {}) };
    if (validThread) threads[url] = validThread;
    else delete threads[url];

    writePublishedSnapshot({
      ...snapshot,
      top_stories: snapshot.top_stories.map((item) => {
        if (normalizeStoryUrl(item.sourceUrl) !== url) return item;
        if (validThread) {
          return {
            ...item,
            thread: {
              count: validThread.count,
              topic: validThread.topic
            }
          };
        }
        const { thread: _thread, ...storyWithoutThread } = item;
        return storyWithoutThread;
      }),
      threads,
      thread_metadata: {
        ...(snapshot.thread_metadata ?? {}),
        progressively_prepared_at: new Date().toISOString(),
        prepared_count: Object.keys(threads).length,
        thread_history_window_hours: threadHistoryWindowHours,
        feed_ready: true
      }
    });
  }
};

const updateSnapshotStorySummary = (snapshot, article, result) => {
  const url = normalizeStoryUrl(article?.sourceUrl);
  if (!snapshot?.top_stories?.length || !url || !result?.summary) return null;

  let changed = false;
  const topStories = snapshot.top_stories.map((story) => {
    if (normalizeStoryUrl(story.sourceUrl) !== url) return story;
    changed = true;
    return {
      ...story,
      ai_summary: cleanSummaryText(result.summary),
      ai_provider: result.provider || "0g",
      ...(result.proof ? { ai_proof: result.proof } : {})
    };
  });

  if (!changed) return null;

  const updatedThreads = snapshot.threads
    ? Object.fromEntries(
        Object.entries(snapshot.threads).map(([threadUrl, thread]) => [
          threadUrl,
          {
            ...thread,
            current: normalizeStoryUrl(thread?.current?.sourceUrl) === url
              ? { ...thread.current, ai_summary: cleanSummaryText(result.summary), ai_provider: result.provider || "0g", ...(result.proof ? { ai_proof: result.proof } : {}) }
              : thread.current,
            items: (thread?.items ?? []).map((item) =>
              normalizeStoryUrl(item.sourceUrl) === url
                ? { ...item, ai_summary: cleanSummaryText(result.summary), ai_provider: result.provider || "0g", ...(result.proof ? { ai_proof: result.proof } : {}) }
                : item
            )
          }
        ])
      )
    : snapshot.threads;

  return {
    ...snapshot,
    top_stories: topStories,
    threads: updatedThreads,
    summary_metadata: {
      ...(snapshot.summary_metadata ?? {}),
      last_summary_saved_at: new Date().toISOString(),
      last_summary_source_url: article.sourceUrl,
      last_summary_provider: result.provider || "0g"
    }
  };
};

const persistSummaryToPublishedFeeds = async (article, result) => {
  if (!article?.sourceUrl || !result?.summary) return;

  const targetCategories = [...new Set([article.category, "All"].filter(Boolean).map(normalizeCategory))];
  for (const category of targetCategories) {
    const snapshot = readPublishedSnapshot(category);
    const updated = updateSnapshotStorySummary(snapshot, article, result);
    if (!updated) continue;

    const freshTime = new Date().toISOString();
    const localPublished = {
      ...updated,
      generated_at: freshTime,
      published_at: freshTime,
      status: "published"
    };
    writePublishedSnapshot(localPublished);

    void archiveSnapshot(localPublished)
      .then((archive) => {
        writePublishedSnapshot({
          ...localPublished,
          archive,
          published_at: new Date().toISOString(),
          status: "published"
        });
      })
      .catch((error) => {
        console.warn(`Summary archive fallback for ${category}:`, error.message);
      });
  }
};

const generateSnapshot = async (category) => {
  const selectedCategory = categories.includes(category) ? category : "All";
  const date = getTodayKey();
  const marketQuery = getActiveMarketQueriesStr(selectedCategory);
  const sportsTweetsPromise = fetchSportsTweets(selectedCategory);
  const results = await Promise.allSettled([
    fetchNicheRss(selectedCategory),
    fetchNewsData(selectedCategory),
    fetchGuardian(selectedCategory),
    marketQuery ? fetchNewsDataWithCustomQuery(marketQuery, selectedCategory) : Promise.resolve([]),
    marketQuery ? fetchGuardianWithCustomQuery(marketQuery, selectedCategory) : Promise.resolve([])
  ]);
  const sportsTweets = await sportsTweetsPromise;
  const sportsTweetQueries = buildSportsTweetDiscoveryQueries(sportsTweets);
  const sportsTweetNewsResults = sportsTweetQueries.length > 0
    ? await Promise.allSettled([
        ...sportsTweetQueries.map((query) => fetchNewsDataWithCustomQuery(query, selectedCategory)),
        ...sportsTweetQueries.map((query) => fetchGuardianWithCustomQuery(query, selectedCategory))
      ])
    : [];
  const rawArticles = [
    ...results.flatMap((result) => (result.status === "fulfilled" ? result.value : [])),
    ...sportsTweetNewsResults.flatMap((result) => (result.status === "fulfilled" ? result.value : []))
  ];
  const repairedArticles = await repairTruncatedArticleTitles(rawArticles);
  const dedupedArticles = dedupeArticles(repairedArticles).filter(
    (article) =>
      isArticleOnAppDate(article, date) &&
      !isPaidSource(article) &&
      (selectedCategory === "All" || matchesCategorySignal(article, selectedCategory)) &&
      (article.category !== "Sports" || isFootballOrNbaArticle(article)) &&
      (article.category !== "Tech" || isThreadFriendlyTechArticle(article))
  );
  const forcedSportsTweets = selectedCategory === "Sports"
    ? sportsTweets.slice(0, 8)
    : [];
  const articles = dedupeArticles([...forcedSportsTweets, ...dedupedArticles]);
  const stories = articles.length > 0
    ? await buildStories(articles)
    : allowMockFeeds
      ? getMockStoriesForCategory(selectedCategory)
      : [];

  const snapshot = {
    date,
    category: selectedCategory,
    generated_at: new Date().toISOString(),
    sources: {
      newsdata: Boolean(process.env.NEWSDATA_API_KEY),
      guardian: Boolean(process.env.GUARDIAN_API_KEY),
      zero_g: Boolean(process.env.ZERO_G_API_KEY || process.env.OG_COMPUTE_API_KEY),
      shelby: isShelbyArchiveConfigured(),
      max_article_age_hours: maxArticleAgeHours,
      mock_fallback_enabled: allowMockFeeds,
      real_article_count: articles.length
    },
    top_stories: stories
  };

  return snapshot;
};

const publishSnapshot = async (snapshot) => {
  const snapshotWithTime = {
    ...snapshot,
    generated_at: new Date().toISOString()
  };
  let archive;
  try {
    archive = await archiveSnapshot(snapshotWithTime);
  } catch (error) {
    archive = { provider: "local-dev", error: error.message };
  }

  if (isShelbyArchiveConfigured() && archive.provider !== "shelby") {
    throw new Error(archive.shelby_error || archive.error || "Shelby archive upload did not complete");
  }

  const publishedSnapshot = {
    ...normalizeSnapshotSummaries(snapshotWithTime),
    archive,
    published_at: new Date().toISOString(),
    status: "published"
  };

  writePublishedSnapshot(publishedSnapshot);
  return publishedSnapshot;
};

const generateAndPublishFeed = async (category) => publishSnapshot(await buildCategorySnapshot(category));

const getPublishedFeed = async (category) => {
  const selectedCategory = normalizeCategory(category);
  if (selectedCategory === "All") {
    const currentAll = readPublishedSnapshot("All");
    if (currentAll && hasRealStories(currentAll)) {
      const sanitized = sanitizeSnapshotForCategory(currentAll);
      return annotateSnapshotThreads(sanitized);
    }

    const composed = await buildAllSnapshotFromCategories();
    const sanitized = sanitizeSnapshotForCategory(composed);
    writePublishedSnapshot({
      ...sanitized,
      archive: {
        provider: "composed",
        composed_from_categories: sourceCategories
      },
      published_at: new Date().toISOString(),
      status: "published"
    });
    return annotateSnapshotThreads(sanitized);
  }

  const snapshot = await getRecoverablePublishedSnapshot(selectedCategory);
  if (snapshot && hasRealStories(snapshot)) {
    const sanitized = sanitizeSnapshotForCategory(await overlayFreshSportsTweets(snapshot));
    return annotateSnapshotThreads(sanitized);
  }

  const fresh = await generateAndPublishFeed(selectedCategory);
  const sanitized = sanitizeSnapshotForCategory(await overlayFreshSportsTweets(fresh));
  return annotateSnapshotThreads(sanitized);
};



const refreshIntervalMinutes = Number(process.env.REFRESH_INTERVAL_MINUTES ?? 60);
const disableFeedRefresh = process.env.DISABLE_FEED_REFRESH === "true";
const publishedSnapshots = new Map();
const publishStatus = {
  is_running: false,
  last_started_at: null,
  last_finished_at: null,
  last_error: null,
  categories: {}
};

export const extendShelbyBlobsIfNeeded = async (overrides = {}) => {
  const isConfigured = overrides.isShelbyArchiveConfigured ?? isShelbyArchiveConfigured;
  const listFiles = overrides.listShelbyArchiveFiles ?? listShelbyArchiveFiles;
  const extendBlob = overrides.extendShelbyBlobExpiration ?? extendShelbyBlobExpiration;

  if (!isConfigured()) {
    return;
  }

  console.log("[SHELBY RENEWAL] Scanning Shelby blobs for lease extension...");
  try {
    const blobs = await listFiles();
    const nowMicros = Date.now() * 1000;
    // We only extend blobs expiring in less than 36 hours.
    const thresholdMicros = 36 * 60 * 60 * 1000 * 1000;

    const expiringBlobs = blobs.filter((blob) => {
      if (!blob.blob_name || !blob.expirationMicros) return false;
      const timeLeft = blob.expirationMicros - nowMicros;
      return timeLeft > 0 && timeLeft < thresholdMicros;
    });

    console.log(`[SHELBY RENEWAL] Found ${expiringBlobs.length} blobs requiring extension.`);

    for (const blob of expiringBlobs) {
      try {
        const newExpirationMicros = (Date.now() + 47 * 60 * 60 * 1000) * 1000;
        console.log(`[SHELBY RENEWAL] Extending lease for blob: ${blob.blob_name}`);
        const txHash = await extendBlob(blob.blob_name, newExpirationMicros);
        console.log(`[SHELBY RENEWAL] Successfully extended lease for blob ${blob.blob_name}. Tx hash: ${txHash}`);
      } catch (err) {
        console.error(`[SHELBY RENEWAL] Failed to extend lease for blob ${blob.blob_name}:`, err.message);
      }
    }
  } catch (err) {
    console.error("[SHELBY RENEWAL] Failed to scan and extend Shelby blobs:", err.message);
  }
};

const refreshPublishedFeeds = async (reason = "scheduled") => {
  if (publishStatus.is_running) {
    return { skipped: true, reason: "publish already running" };
  }

  publishStatus.is_running = true;
  publishStatus.last_started_at = new Date().toISOString();
  publishStatus.last_error = null;
  resetThreadReviewBudget();
  resetThreadHistorySnapshotCache();

  try {
    if (reason === "startup" && isShelbyArchiveConfigured() && shelbyPrepopulateOnStartup) {
      console.log("Pre-populating publishedSnapshots cache from Shelby archive...");
      try {
        const files = await listShelbyArchiveFiles();
        for (const category of categories) {
          const catFiles = files.filter(f => f.categorySlug.toLowerCase() === category.toLowerCase());
          if (catFiles.length > 0) {
            catFiles.sort((a, b) => {
              if (a.date !== b.date) return b.date.localeCompare(a.date);
              const aTime = a.generated_at ? new Date(a.generated_at).getTime() : 0;
              const bTime = b.generated_at ? new Date(b.generated_at).getTime() : 0;
              return bTime - aTime;
            });

            let downloaded = false;
            for (const fileInfo of catFiles) {
              try {
                console.log(`Downloading snapshot from Shelby for category ${category}: ${fileInfo.blob_name} (${fileInfo.date})`);
                const { snapshot } = await downloadShelbyBlob(fileInfo.blob_name);
                writePublishedSnapshot(snapshot);
                try {
                  mkdirSync(archiveDir, { recursive: true });
                  const filename = archiveFilename(snapshot.date, snapshot.category);
                  writeJsonFile(join(archiveDir, filename), snapshot);
                } catch (archiveErr) {
                  console.warn("Failed to save startup snapshot to local archive:", archiveErr.message);
                }
                downloaded = true;
                break;
              } catch (downloadErr) {
                console.warn(`Failed to download snapshot ${fileInfo.blob_name}: ${downloadErr.message}. Trying previous...`);
              }
            }
            if (!downloaded) {
              console.warn(`No valid snapshots could be downloaded for category ${category}.`);
            }
          }
        }
      } catch (err) {
        console.warn("Failed to pre-populate cache from Shelby on startup:", err.message);
      }

      publishStatus.is_running = false;
      publishStatus.last_finished_at = new Date().toISOString();
      console.log("[STARTUP] Pre-population from Shelby finished. Server is ready to handle traffic.");
      
      setTimeout(() => {
        console.log("[STARTUP] Triggering initial background scheduled feed refresh now that server is ready...");
        void refreshPublishedFeeds("scheduled");
      }, 1000);

      return { skipped: false, status: publishStatus };
    }

    if (reason === "startup" && isShelbyArchiveConfigured() && !shelbyPrepopulateOnStartup) {
      console.log("[STARTUP] Skipping Shelby snapshot pre-population. Set SHELBY_PREPOPULATE_ON_STARTUP=true to re-enable it.");
    }

    console.log(`Publishing feeds every ${refreshIntervalMinutes} minutes (${reason})...`);
    let failureCount = 0;

    for (const category of sourceCategories) {
      try {
        resetThreadReviewBudget();
        const snapshot = await generateAndPublishFeed(category);
        publishedSnapshots.set(category, snapshot);
        publishStatus.categories[category] = {
          status: "published",
          story_count: snapshot.top_stories?.length ?? 0,
          published_at: snapshot.published_at,
          archive_provider: snapshot.archive?.provider ?? "unknown"
        };
      } catch (error) {
        failureCount += 1;
        const previous = await getRecoverablePublishedSnapshot(category);
        publishStatus.categories[category] = {
          status: previous ? "kept_previous" : "failed",
          story_count: previous?.top_stories?.length ?? 0,
          published_at: previous?.published_at ?? null,
          archive_provider: previous?.archive?.provider ?? null,
          error: error.message
        };
        console.warn(`Failed to publish ${category}:`, error.message);
      }
      // Yield to the event loop between category generations to prevent CPU starvation
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    const allSnapshot = await buildAllSnapshotFromCategories();
    const publishedAllSnapshot = {
      ...allSnapshot,
      archive: {
        provider: "composed",
        composed_from_categories: sourceCategories
      },
      published_at: new Date().toISOString(),
      status: "published"
    };
    writePublishedSnapshot(publishedAllSnapshot);
    publishedSnapshots.set("All", publishedAllSnapshot);
    publishStatus.categories.All = {
      status: "composed",
      story_count: publishedAllSnapshot.top_stories?.length ?? 0,
      published_at: publishedAllSnapshot.published_at,
      archive_provider: "composed"
    };

    publishStatus.last_finished_at = new Date().toISOString();
    publishStatus.last_error = failureCount > 0 ? `${failureCount} categories failed; previous published feeds kept where available` : null;
    console.log("Scheduled feeds published at", publishStatus.last_finished_at);

    if (isShelbyArchiveConfigured()) {
      try {
        console.log("[ANALYTICS BACKUP] Backing up analytics cache to Shelby during scheduled publish...");
        const data = loadAnalytics();
        await backupAnalyticsToShelby(getShelbySafeAnalytics(data));
      } catch (backupErr) {
        console.warn("[ANALYTICS BACKUP] Failed to backup analytics to Shelby during scheduled publish:", backupErr.message);
      }
      
      // Extend expiration lease of expiring Shelby blobs to bypass the 48-hour limit
      await extendShelbyBlobsIfNeeded();
    }

    return { skipped: false, status: publishStatus };
  } catch (err) {
    publishStatus.last_error = err.message;
    console.warn("Failed to publish hourly feeds:", err.message);
    return { skipped: false, error: err.message, status: publishStatus };
  } finally {
    publishStatus.is_running = false;
  }
};

// Graceful shutdown handlers to backup analytics
const handleShutdown = async (signal) => {
  console.log(`[SHUTDOWN] Received ${signal}. Saving final analytics backup to Shelby...`);
  if (isShelbyArchiveConfigured()) {
    try {
      const data = loadAnalytics();
      await backupAnalyticsToShelby(getShelbySafeAnalytics(data));
      console.log("[SHUTDOWN] Analytics backup completed successfully.");
    } catch (err) {
      console.error("[SHUTDOWN] Failed to backup analytics on shutdown:", err);
    }
  }
  process.exit(0);
};
process.on("SIGTERM", () => void handleShutdown("SIGTERM"));
process.on("SIGINT", () => void handleShutdown("SIGINT"));

// Kick off initial refresh and schedule periodic refreshes
if (isMain) {
  if (disableFeedRefresh) {
    console.log("[FEEDS] Feed refresh disabled by DISABLE_FEED_REFRESH=true.");
  } else if (isShelbyArchiveConfigured()) {
    if (existsSync(analyticsBootFile)) {
      console.log("[ANALYTICS] Local analytics found. Skipping Shelby restore on boot.");
      void refreshPublishedFeeds("startup");
    } else {
    console.log("Attempting to restore analytics cache from Shelby on boot...");
    restoreAnalyticsFromShelby()
      .then((data) => {
        if (data) {
          const localBeforeRestore = loadAnalytics();
          const merged = mergeAnalytics(localBeforeRestore, data);
          saveAnalytics(merged);
          console.log("[ANALYTICS] Restored successfully from Shelby backup.");
        } else {
          console.log("[ANALYTICS] No backup found on Shelby. Starting fresh.");
        }
        void refreshPublishedFeeds("startup");
      })
      .catch((err) => {
        console.error("[ANALYTICS] Failed to restore from Shelby on boot:", err);
        void refreshPublishedFeeds("startup");
      });
    }
  } else {
    void refreshPublishedFeeds("startup");
  }

  if (!disableFeedRefresh) {
    setInterval(() => void refreshPublishedFeeds("scheduled"), Math.max(1, refreshIntervalMinutes) * 60 * 1000);
  }
}

const OTP_FILE = join(root, ".siftle", "otp.json");
const otpTtlMs = Math.max(10, Number(process.env.OTP_TTL_MINUTES ?? 30)) * 60 * 1000;
const otpStore = new Map();

function normalizeEmail(email = "") {
  return String(email || "").toLowerCase().trim();
}

function normalizeOtpCode(otp = "") {
  return String(otp || "").replace(/\D/g, "").slice(0, 6);
}

function loadOtpStore() {
  try {
    if (!existsSync(OTP_FILE)) return;
    const raw = JSON.parse(readFileSync(OTP_FILE, "utf8"));
    const now = Date.now();
    Object.entries(raw || {}).forEach(([email, entry]) => {
      const cleanEmail = normalizeEmail(email);
      const cleanOtp = normalizeOtpCode(entry?.otp);
      const expiresAt = Number(entry?.expiresAt) || 0;
      if (cleanEmail && cleanOtp.length === 6 && expiresAt > now) {
        otpStore.set(cleanEmail, { otp: cleanOtp, expiresAt });
      }
    });
  } catch (err) {
    console.warn("Failed to load OTP store:", err.message);
  }
}

function saveOtpStore() {
  try {
    const dir = join(root, ".siftle");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const now = Date.now();
    const payload = {};
    otpStore.forEach((entry, email) => {
      if ((Number(entry?.expiresAt) || 0) > now) {
        payload[email] = entry;
      }
    });
    writeFileSync(OTP_FILE, JSON.stringify(payload, null, 2), "utf8");
  } catch (err) {
    console.warn("Failed to save OTP store:", err.message);
  }
}

function setOtp(email, otp) {
  const cleanEmail = normalizeEmail(email);
  otpStore.set(cleanEmail, {
    otp: normalizeOtpCode(otp),
    expiresAt: Date.now() + otpTtlMs
  });
  saveOtpStore();
}

function consumeOtp(email) {
  otpStore.delete(normalizeEmail(email));
  saveOtpStore();
}

loadOtpStore();

const ensureLocalStoreDir = () => {
  const dir = join(root, ".siftle");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
};

const loadBackendWalletUsers = () => {
  try {
    if (!existsSync(backendWalletUsersFile)) return {};
    const raw = JSON.parse(readFileSync(backendWalletUsersFile, "utf8"));
    return raw && typeof raw === "object" ? raw : {};
  } catch (err) {
    console.warn("Failed to load backend wallet users:", err.message);
    return {};
  }
};

const saveBackendWalletUsers = (payload) => {
  try {
    ensureLocalStoreDir();
    writeFileSync(backendWalletUsersFile, JSON.stringify(payload, null, 2), "utf8");
  } catch (err) {
    console.warn("Failed to save backend wallet users:", err.message);
  }
};

const loadBackendWalletSessions = () => {
  try {
    if (!existsSync(backendWalletSessionsFile)) return {};
    const raw = JSON.parse(readFileSync(backendWalletSessionsFile, "utf8"));
    const now = Date.now();
    const filtered = Object.fromEntries(
      Object.entries(raw && typeof raw === "object" ? raw : {}).filter(([, entry]) => Number(entry?.expiresAt) > now)
    );
    if (Object.keys(filtered).length !== Object.keys(raw || {}).length) {
      saveBackendWalletSessions(filtered);
    }
    return filtered;
  } catch (err) {
    console.warn("Failed to load Siftle sessions:", err.message);
    return {};
  }
};

const saveBackendWalletSessions = (payload) => {
  try {
    ensureLocalStoreDir();
    writeFileSync(backendWalletSessionsFile, JSON.stringify(payload, null, 2), "utf8");
  } catch (err) {
    console.warn("Failed to save Siftle sessions:", err.message);
  }
};

const loadBackendWalletMigrations = () => {
  try {
    if (!existsSync(backendWalletMigrationsFile)) return {};
    const raw = JSON.parse(readFileSync(backendWalletMigrationsFile, "utf8"));
    return raw && typeof raw === "object" ? raw : {};
  } catch (err) {
    console.warn("Failed to load backend wallet migrations:", err.message);
    return {};
  }
};

const saveBackendWalletMigrations = (payload) => {
  try {
    ensureLocalStoreDir();
    writeFileSync(backendWalletMigrationsFile, JSON.stringify(payload, null, 2), "utf8");
  } catch (err) {
    console.warn("Failed to save backend wallet migrations:", err.message);
  }
};

const getBackendWalletMigrationByNewWallet = (walletAddress) => {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  if (!cleanWallet) return null;
  const migrations = loadBackendWalletMigrations();
  return Object.values(migrations).find((entry) => normalizeWalletAddress(entry?.newWalletAddress) === cleanWallet) || null;
};

const normalizeBackendWalletUserRow = (row) => {
  if (!row) return null;
  const email = normalizeEmail(row.email);
  const address = normalizeWalletAddress(row.wallet_address || row.address);
  const privateKey = String(row.private_key || row.privateKey || "").trim();
  if (!email || !address || !privateKey) return null;
  return {
    email,
    privateKey,
    address,
    createdAt: row.created_at || row.createdAt || new Date().toISOString()
  };
};

const loadBackendWalletUserFromSupabase = async (email) => {
  if (!isSupabaseConfigured) return null;
  const cleanEmail = normalizeEmail(email);
  if (!cleanEmail) return null;
  try {
    const rows = await supabaseRequest(`backend_wallet_users?email=eq.${encodeURIComponent(cleanEmail)}&select=email,wallet_address,private_key,created_at&limit=1`);
    return normalizeBackendWalletUserRow(rows?.[0]);
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet user read failed; using local fallback:", err.message);
    return null;
  }
};

const saveBackendWalletUserToSupabase = async (record) => {
  if (!isSupabaseConfigured || !record?.email || !record?.privateKey || !record?.address) {
    return { saved: false };
  }
  try {
    await supabaseRequest("backend_wallet_users?on_conflict=email", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: [{
        email: normalizeEmail(record.email),
        wallet_address: normalizeWalletAddress(record.address),
        private_key: String(record.privateKey),
        created_at: record.createdAt || new Date().toISOString(),
        updated_at: new Date().toISOString()
      }]
    });
    return { saved: true };
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet user save failed; local fallback kept:", err.message);
    return { saved: false, error: err.message };
  }
};

const normalizeBackendWalletSessionRow = (row) => {
  if (!row) return null;
  const token = String(row.token || "").trim();
  const email = normalizeEmail(row.email);
  const expiresAt = Date.parse(row.expires_at || row.expiresAt || "");
  const createdAt = Date.parse(row.created_at || row.createdAt || "") || Date.now();
  if (!token || !email || !Number.isFinite(expiresAt)) return null;
  return { token, email, createdAt, expiresAt };
};

const saveBackendWalletSessionToSupabase = async (token, session) => {
  if (!isSupabaseConfigured || !token || !session?.email) return { saved: false };
  try {
    await supabaseRequest("backend_wallet_sessions?on_conflict=token", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: [{
        token,
        email: normalizeEmail(session.email),
        created_at: new Date(Number(session.createdAt) || Date.now()).toISOString(),
        expires_at: new Date(Number(session.expiresAt) || Date.now()).toISOString(),
        updated_at: new Date().toISOString()
      }]
    });
    return { saved: true };
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet session save failed; local fallback kept:", err.message);
    return { saved: false, error: err.message };
  }
};

const loadBackendWalletSessionFromSupabase = async (token) => {
  if (!isSupabaseConfigured || !token) return null;
  try {
    const rows = await supabaseRequest(`backend_wallet_sessions?token=eq.${encodeURIComponent(token)}&select=token,email,created_at,expires_at&limit=1`);
    return normalizeBackendWalletSessionRow(rows?.[0]);
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet session read failed; using local fallback:", err.message);
    return null;
  }
};

const deleteBackendWalletSessionFromSupabase = async (token) => {
  if (!isSupabaseConfigured || !token) return;
  try {
    await supabaseRequest(`backend_wallet_sessions?token=eq.${encodeURIComponent(token)}`, {
      method: "DELETE"
    });
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet session delete failed:", err.message);
  }
};

const normalizeBackendWalletMigrationRow = (row) => {
  if (!row) return null;
  const oldWalletAddress = normalizeWalletAddress(row.old_wallet_address || row.oldWalletAddress);
  const newWalletAddress = normalizeWalletAddress(row.new_wallet_address || row.newWalletAddress);
  if (!oldWalletAddress || !newWalletAddress) return null;
  return {
    email: normalizeEmail(row.email),
    oldWalletAddress,
    newWalletAddress,
    username: String(row.username || ""),
    restoredPoints: Number(row.restored_points ?? row.restoredPoints) || 0,
    claimedAt: row.claimed_at || row.claimedAt || new Date().toISOString()
  };
};

const loadBackendWalletMigrationsFromSupabase = async () => {
  if (!isSupabaseConfigured) return {};
  try {
    const rows = await supabaseRequest("backend_wallet_migrations?select=email,old_wallet_address,new_wallet_address,username,restored_points,claimed_at");
    return Object.fromEntries(
      (rows || [])
        .map(normalizeBackendWalletMigrationRow)
        .filter(Boolean)
        .map((entry) => [entry.oldWalletAddress, entry])
    );
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet migrations read failed; using local fallback:", err.message);
    return {};
  }
};

const getBackendWalletMigrationByNewWalletFromSupabase = async (walletAddress) => {
  if (!isSupabaseConfigured) return null;
  const cleanWallet = normalizeWalletAddress(walletAddress);
  if (!cleanWallet) return null;
  try {
    const rows = await supabaseRequest(`backend_wallet_migrations?new_wallet_address=eq.${encodeURIComponent(cleanWallet)}&select=email,old_wallet_address,new_wallet_address,username,restored_points,claimed_at&limit=1`);
    return normalizeBackendWalletMigrationRow(rows?.[0]);
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet migration lookup failed; using local fallback:", err.message);
    return null;
  }
};

const saveBackendWalletMigrationToSupabase = async (entry) => {
  if (!isSupabaseConfigured || !entry?.oldWalletAddress || !entry?.newWalletAddress) return { saved: false };
  try {
    await supabaseRequest("backend_wallet_migrations?on_conflict=old_wallet_address", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: [{
        email: normalizeEmail(entry.email),
        old_wallet_address: normalizeWalletAddress(entry.oldWalletAddress),
        new_wallet_address: normalizeWalletAddress(entry.newWalletAddress),
        username: String(entry.username || ""),
        restored_points: Number(entry.restoredPoints) || 0,
        claimed_at: entry.claimedAt || new Date().toISOString(),
        updated_at: new Date().toISOString()
      }]
    });
    return { saved: true };
  } catch (err) {
    console.warn("[SUPABASE] Backend wallet migration save failed; local fallback kept:", err.message);
    return { saved: false, error: err.message };
  }
};

const getLegacyArcWalletForEmail = async (email) => {
  const cleanEmail = normalizeEmail(email);
  if (!cleanEmail || !process.env.CIRCLE_API_KEY) return "";

  try {
    const userId = `siftle_user_${getCircleUserId(cleanEmail)}`;
    const tokenRes = await callCircleApi("/v1/w3s/users/token", "POST", { userId });
    const userToken = tokenRes.data?.userToken || tokenRes.userToken;
    if (!userToken) return "";
    const walletsRes = await callCircleApi("/v1/w3s/wallets", "GET", null, userToken);
    const wallets = walletsRes.data?.wallets || walletsRes.wallets || [];
    const arcWallet = wallets.find((wallet) => wallet.blockchain === "ARC-TESTNET");
    return normalizeWalletAddress(arcWallet?.address || "");
  } catch (err) {
    console.warn("Failed to recover legacy Circle wallet for email:", err.message);
    return "";
  }
};

const buildMigrationPreview = async (email, newWalletAddress) => {
  const cleanEmail = normalizeEmail(email);
  const cleanNewWallet = normalizeWalletAddress(newWalletAddress);
  if (!backendWalletMigrationEnabled || !cleanEmail || !cleanNewWallet) {
    return { enabled: backendWalletMigrationEnabled, eligible: false, alreadyClaimed: false };
  }

  const legacyWalletAddress = await getLegacyArcWalletForEmail(cleanEmail);
  if (!legacyWalletAddress || legacyWalletAddress === cleanNewWallet) {
    return {
      enabled: true,
      eligible: false,
      alreadyClaimed: false,
      legacyWalletAddress
    };
  }

  const remoteMigrations = await loadBackendWalletMigrationsFromSupabase();
  const localMigrations = loadBackendWalletMigrations();
  const migrations = { ...localMigrations, ...remoteMigrations };
  const existing = migrations[legacyWalletAddress]
    || await getBackendWalletMigrationByNewWalletFromSupabase(cleanNewWallet)
    || getBackendWalletMigrationByNewWallet(cleanNewWallet);
  const data = await loadLeaderboardFromSupabase(loadAnalytics());
  const leaderboard = ensureLeaderboardState(data);
  const legacyEntry = leaderboard.traders?.[legacyWalletAddress] || null;
  const parsedStatus = parseLeaderboardStatus(legacyEntry?.status || legacyEntry?.reported_status || "0 wins, 0 losses");
  const points = Number(legacyEntry?.points) || Number(legacyEntry?.reported_points) || 0;
  const restoredPoints = Number(existing?.restoredPoints) || 0;
  return {
    enabled: true,
    eligible: Boolean(legacyEntry && points > 0 && !existing),
    alreadyClaimed: Boolean(existing),
    legacyWalletAddress,
    legacyUsername: String(legacyEntry?.username || ""),
    legacyPoints: points,
    legacyWins: parsedStatus.wins,
    legacyLosses: parsedStatus.losses,
    migratedToWalletAddress: normalizeWalletAddress(existing?.newWalletAddress || "") || "",
    restoredPoints
  };
};

const applyBackendWalletMigration = async (email, newWalletAddress) => {
  const cleanEmail = normalizeEmail(email);
  const cleanNewWallet = normalizeWalletAddress(newWalletAddress);
  if (!backendWalletMigrationEnabled) {
    return { migrated: false, reason: "migration_disabled" };
  }
  if (!cleanEmail || !cleanNewWallet) {
    throw new Error("Valid email and wallet address are required for migration");
  }

  const preview = await buildMigrationPreview(cleanEmail, cleanNewWallet);
  if (!preview.legacyWalletAddress) return { migrated: false, reason: "legacy_wallet_not_found", preview };
  if (preview.legacyWalletAddress === cleanNewWallet) return { migrated: false, reason: "same_wallet", preview };
  if (preview.alreadyClaimed) return { migrated: false, reason: "already_claimed", preview };
  if (!preview.eligible) return { migrated: false, reason: "no_points", preview };

  const data = await loadLeaderboardFromSupabase(loadAnalytics());
  const leaderboard = ensureLeaderboardState(data);
  const oldWallet = preview.legacyWalletAddress;
  const oldEntry = leaderboard.traders?.[oldWallet];
  if (!oldEntry) return { migrated: false, reason: "legacy_entry_missing", preview };

  const nowIso = new Date().toISOString();
  const existingNewEntry = leaderboard.traders?.[cleanNewWallet] || {};
  const migratedPoints = Math.max(
    0,
    Number(preview.legacyPoints) || 0,
    Number(oldEntry.reported_points) || 0,
    Number(oldEntry.points) || 0
  );
  const oldStatus = {
    wins: Math.max(0, Number(preview.legacyWins) || 0),
    losses: Math.max(0, Number(preview.legacyLosses) || 0)
  };
  const newStatus = parseLeaderboardStatus(existingNewEntry.status || existingNewEntry.reported_status || "0 wins, 0 losses");
  const mergedWins = oldStatus.wins + newStatus.wins;
  const mergedLosses = oldStatus.losses + newStatus.losses;
  leaderboard.traders[cleanNewWallet] = {
    ...existingNewEntry,
    username: String(existingNewEntry.username || oldEntry.username || ""),
    points: (Number(existingNewEntry.points) || 0) + migratedPoints,
    reported_points: (Number(existingNewEntry.reported_points) || 0) + migratedPoints,
    status: `${mergedWins} win${mergedWins === 1 ? "" : "s"}, ${mergedLosses} loss${mergedLosses === 1 ? "" : "es"}`,
    reported_status: `${mergedWins} win${mergedWins === 1 ? "" : "s"}, ${mergedLosses} loss${mergedLosses === 1 ? "" : "es"}`,
    first_activity_at: existingNewEntry.first_activity_at || oldEntry.first_activity_at || nowIso,
    updated_at: nowIso
  };

  const existingResults = leaderboard.resolvedResults?.[cleanNewWallet] || {};
  const oldResults = leaderboard.resolvedResults?.[oldWallet] || {};
  leaderboard.resolvedResults[cleanNewWallet] = {
    ...oldResults,
    ...existingResults
  };

  const existingBonus = leaderboard.bonusEvents?.[cleanNewWallet] || {};
  const oldBonus = leaderboard.bonusEvents?.[oldWallet] || {};
  leaderboard.bonusEvents[cleanNewWallet] = {
    ...oldBonus,
    ...existingBonus,
    [`migration:${oldWallet}`]: {
      season_id: getSeasonId(),
      bonus_type: "wallet_migration",
      points: 0,
      metadata: {
        old_wallet_address: oldWallet,
        new_wallet_address: cleanNewWallet,
        email: cleanEmail
      },
      created_at: nowIso
    }
  };

  Object.keys(leaderboard.divisionAssignments || {}).forEach((seasonId) => {
    const assignments = leaderboard.divisionAssignments?.[seasonId];
    if (!assignments?.[oldWallet]) return;
    assignments[cleanNewWallet] = assignments[oldWallet];
    delete assignments[oldWallet];
  });

  leaderboard.traders[oldWallet] = {
    ...oldEntry,
    points: 0,
    reported_points: 0,
    status: "0 wins, 0 losses",
    reported_status: "0 wins, 0 losses",
    updated_at: nowIso
  };
  delete leaderboard.resolvedResults[oldWallet];
  delete leaderboard.bonusEvents[oldWallet];

  saveAnalytics(data);
  await saveLeaderboardToSupabase(data);

  const migrations = loadBackendWalletMigrations();
  const migrationRecord = {
    email: cleanEmail,
    oldWalletAddress: oldWallet,
    newWalletAddress: cleanNewWallet,
    username: String(oldEntry.username || ""),
    restoredPoints: migratedPoints,
    claimedAt: nowIso
  };
  migrations[oldWallet] = migrationRecord;
  saveBackendWalletMigrations(migrations);
  await saveBackendWalletMigrationToSupabase(migrationRecord);

  return {
    migrated: true,
    oldWalletAddress: oldWallet,
    newWalletAddress: cleanNewWallet,
    restoredPoints: migrationRecord.restoredPoints,
    username: migrationRecord.username
  };
};

const issueBackendWalletSession = async (email) => {
  const sessions = loadBackendWalletSessions();
  const token = randomUUID();
  sessions[token] = {
    email,
    createdAt: Date.now(),
    expiresAt: Date.now() + backendWalletSessionTtlMs
  };
  saveBackendWalletSessions(sessions);
  await saveBackendWalletSessionToSupabase(token, sessions[token]);
  return token;
};

const readBackendWalletSession = async (token) => {
  if (!token) return null;
  const sessions = loadBackendWalletSessions();
  const session = sessions[token];
  if (session && Number(session.expiresAt) > Date.now()) {
    return session;
  }

  if (session) {
    delete sessions[token];
    saveBackendWalletSessions(sessions);
    await deleteBackendWalletSessionFromSupabase(token);
    return null;
  }

  const remoteSession = await loadBackendWalletSessionFromSupabase(token);
  if (!remoteSession || Number(remoteSession.expiresAt) <= Date.now()) {
    if (remoteSession) await deleteBackendWalletSessionFromSupabase(token);
    return null;
  }

  sessions[token] = remoteSession;
  saveBackendWalletSessions(sessions);
  return remoteSession;
};

const verificationCodesCachePath = join(root, ".siftle", "verification-codes.json");

const readVerificationCodes = () => {
  if (!existsSync(verificationCodesCachePath)) return {};
  try {
    return JSON.parse(readFileSync(verificationCodesCachePath, "utf8"));
  } catch {
    return {};
  }
};

const writeVerificationCode = (email, code) => {
  const data = readVerificationCodes();
  data[email.toLowerCase()] = {
    code,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 1 day
  };
  if (!existsSync(join(root, ".siftle"))) {
    mkdirSync(join(root, ".siftle"), { recursive: true });
  }
  writeFileSync(verificationCodesCachePath, JSON.stringify(data, null, 2));
};

const verifyCode = (email, code) => {
  const data = readVerificationCodes();
  const entry = data[email.toLowerCase()];
  if (!entry) return false;
  if (Date.now() >= entry.expiresAt) return false;
  return entry.code === code.trim();
};

const sendVerificationCodeEmail = async (email, otp) => {
  const formattedOtp = otp;
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Siftle Verification Code</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #0b0f19;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #f1f5f9;
        }
        .email-container {
          max-width: 480px;
          margin: 30px auto;
          background-color: #111827;
          border: 1px solid #1f2937;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
        }
        .header {
          padding: 32px 24px 24px;
          text-align: center;
          border-bottom: 1px solid #1f2937;
          background: linear-gradient(135deg, #1e1b4b 0%, #111827 100%);
        }
        .brand-name {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 2px;
        }
        .content {
          padding: 36px 24px;
          text-align: center;
        }
        .title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #ffffff;
        }
        .subtitle {
          font-size: 14px;
          color: #94a3b8;
          margin-bottom: 28px;
          line-height: 1.5;
        }
        .code-container {
          background-color: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 8px;
          padding: 18px 28px;
          display: inline-block;
          margin-bottom: 24px;
        }
        .code {
          font-family: 'Courier New', Courier, monospace;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #a5b4fc;
        }
        .copy-hint {
          margin-top: 12px;
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.4;
        }
        .expiry {
          font-size: 12px;
          color: #f87171;
          font-weight: 500;
          margin-bottom: 12px;
        }
        .footer {
          padding: 24px;
          background-color: #0d121f;
          border-top: 1px solid #1f2937;
          text-align: center;
          font-size: 12px;
          color: #64748b;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="email-container" style="max-width: 480px; margin: 30px auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div class="header" style="padding: 32px 24px 24px; text-align: center; border-bottom: 1px solid #1f2937; background: linear-gradient(135deg, #1e1b4b 0%, #111827 100%);">
          <div class="brand-name" style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: 2px;">SIFTLE</div>
        </div>
        <div class="content" style="padding: 36px 24px; text-align: center; color: #f1f5f9;">
          <div class="title" style="font-size: 20px; font-weight: 600; margin-bottom: 12px; color: #ffffff;">Verify Your Email</div>
          <p class="subtitle" style="font-size: 14px; color: #94a3b8; margin-bottom: 28px; line-height: 1.5; max-width: 380px; margin-left: auto; margin-right: auto;">Enter this 6-digit code to sign in to Siftle. It has no spaces.</p>
          
          <div class="code-container" style="background-color: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: 8px; padding: 18px 28px; display: inline-block; margin-bottom: 24px;">
            <span class="code" style="font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: 700; letter-spacing: 2px; color: #a5b4fc;">${formattedOtp}</span>
            <div class="copy-hint" style="margin-top: 12px; color: #94a3b8; font-size: 13px; line-height: 1.4;">Tap and hold the code to copy it.</div>
          </div>
          
          <div class="expiry" style="font-size: 12px; color: #f87171; font-weight: 500;">Expires in 24 hours</div>
        </div>
        <div class="footer" style="padding: 24px; background-color: #0d121f; border-top: 1px solid #1f2937; text-align: center; font-size: 11px; color: #64748b; line-height: 1.6;">
          <p style="margin: 0 0 8px 0;">This code was requested for a sign-in attempt on Siftle. If you did not request this code, you can safely ignore this email.</p>
          <p style="margin: 0;">&copy; 2026 Siftle. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  let emailSent = false;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const resendFrom = process.env.RESEND_FROM || "Siftle <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey.trim().replace(/^["']|["']$/g, "")}`
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [email],
          subject: `Siftle Security Code: ${otp}`,
          html: htmlContent
        })
      });
      const resText = await res.text();
      if (res.ok) {
        emailSent = true;
        console.log(`OTP sent via Resend API to ${email}`);
      } else {
        console.warn(`Resend API send failed: ${res.status} -> ${resText}`);
      }
    } catch (resendErr) {
      console.warn(`Failed to send email via Resend API: ${resendErr.message}`);
    }
  }

  if (!emailSent) {
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    if (smtpHost && smtpUser && smtpPass) {
      try {
        let resolvedHost = smtpHost;
        try {
          const { resolve4 } = await import("node:dns/promises");
          const addresses = await resolve4(smtpHost);
          if (addresses && addresses.length > 0) {
            resolvedHost = addresses[0];
            console.log(`SMTP: Resolved ${smtpHost} -> ${resolvedHost} (IPv4)`);
          }
        } catch (dnsErr) {
          console.warn(`SMTP DNS resolve4 failed for ${smtpHost}, using hostname directly: ${dnsErr.message}`);
        }

        const smtpPort = Number(process.env.SMTP_PORT || 587);
        const transporter = nodemailer.createTransport({
          host: resolvedHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
          family: 4,
          tls: { servername: smtpHost },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000
        });

        const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const customMessageId = `<${randomId}@gmail.com>`;

        await transporter.sendMail({
          messageId: customMessageId,
          from: `Siftle <${smtpUser}>`,
          to: email,
          replyTo: smtpUser,
          subject: `Siftle Security Code: ${otp}`,
          text: `Verify Your Email\n\nEnter this 6-digit code to authorize your session and sign in to Siftle.\n\nVerification Code: ${otp}\n\nThis code has no spaces. It will expire in 24 hours.`,
          html: htmlContent,
          headers: {
            "X-Priority": "1",
            "X-MSMail-Priority": "High",
            "Importance": "high",
            "X-Mailer": "Siftle Mailer",
            "X-Auto-Response-Suppress": "All",
            "Feedback-ID": "siftle:otp"
          }
        });
        emailSent = true;
        console.log(`OTP sent via SMTP to ${email}`);
      } catch (mailErr) {
        console.warn(`Failed to send SMTP email: ${mailErr.message}`);
      }
    }
  }

  if (!emailSent) {
    console.log(`\n==========================================\n[SMTP NOT CONFIG] OTP for ${email}: ${otp}\n==========================================\n`);
  }
};

const getOrCreateBackendWalletUser = async (email) => {
  const cleanEmail = normalizeEmail(email);
  if (!cleanEmail) throw new Error("Valid email is required");

  const remoteUser = await loadBackendWalletUserFromSupabase(cleanEmail);
  if (remoteUser) {
    const users = loadBackendWalletUsers();
    users[cleanEmail] = remoteUser;
    saveBackendWalletUsers(users);
    return { ...remoteUser, isNewSignup: false };
  }

  const users = loadBackendWalletUsers();
  if (users[cleanEmail]?.privateKey && users[cleanEmail]?.address) {
    await saveBackendWalletUserToSupabase(users[cleanEmail]);
    return { ...users[cleanEmail], isNewSignup: false };
  }

  const wallet = Wallet.createRandom();
  const record = {
    email: cleanEmail,
    privateKey: wallet.privateKey,
    address: wallet.address,
    createdAt: new Date().toISOString()
  };
  users[cleanEmail] = record;
  saveBackendWalletUsers(users);
  await saveBackendWalletUserToSupabase(record);
  return { ...record, isNewSignup: true };
};

const getBackendWalletUserBySession = async (token) => {
  const session = await readBackendWalletSession(token);
  if (!session?.email) return null;
  const remoteUser = await loadBackendWalletUserFromSupabase(session.email);
  if (remoteUser) return { ...remoteUser, session };
  const users = loadBackendWalletUsers();
  const record = users[session.email];
  if (!record?.privateKey || !record?.address) return null;
  await saveBackendWalletUserToSupabase(record);
  return { ...record, session };
};

const isLocalRequest = (request) => {
  const remote = String(request.socket?.remoteAddress || "").toLowerCase();
  return remote === "::1" || remote === "127.0.0.1" || remote === "::ffff:127.0.0.1";
};

const requireBackendWalletMode = (request, response) => {
  if (!backendWalletMode) {
    sendJson(response, 404, { error: "Sign in is temporarily unavailable" });
    return false;
  }
  if (backendWalletLocalOnly && !isLocalRequest(request)) {
    sendJson(response, 403, { error: "Sign in is temporarily unavailable" });
    return false;
  }
  return true;
};

const BACKEND_WALLET_MARKET_ABI = [
  "function buy(bool yes, uint256 amount) external",
  "function sell(bool yes, uint256 amount) external",
  "function redeem() external",
  "function outcome() view returns (uint8)",
  "function totalYesShares() view returns (uint256)",
  "function totalNoShares() view returns (uint256)",
  "function impliedYesProbability() view returns (uint256)",
  "function closesAt() view returns (uint64)",
  "function yesShares(address owner) view returns (uint256)",
  "function noShares(address owner) view returns (uint256)"
];

const BACKEND_WALLET_ERC20_ABI = [
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)"
];

const waitForMs = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readBackendWalletMarketState = async (walletAddress, marketAddress) => {
  const market = new Contract(marketAddress, BACKEND_WALLET_MARKET_ABI, leaderboardProvider);
  const [yesShares, noShares, totalYes, totalNo, probability, outcome, closesAt] = await Promise.all([
    market.yesShares(walletAddress),
    market.noShares(walletAddress),
    market.totalYesShares(),
    market.totalNoShares(),
    market.impliedYesProbability(),
    market.outcome(),
    market.closesAt()
  ]);
  const yesSharesUsdc = Number(formatUnits(yesShares, 6));
  const noSharesUsdc = Number(formatUnits(noShares, 6));
  const totalYesUsdc = Number(formatUnits(totalYes, 6));
  const totalNoUsdc = Number(formatUnits(totalNo, 6));
  const yesPriceCents = Math.round(Number(probability) / 100);
  return {
    position: {
      yesSharesUsdc,
      noSharesUsdc
    },
    snapshot: {
      yesPriceCents,
      noPriceCents: 100 - yesPriceCents,
      volumeUsdc: totalYesUsdc + totalNoUsdc,
      yesSharesUsdc: totalYesUsdc,
      noSharesUsdc: totalNoUsdc,
      outcome: Number(outcome),
      closesAtUnix: Number(closesAt)
    }
  };
};

function ensureOptionMarketStore(data) {
  if (!data.optionMarkets) data.optionMarkets = {};
  if (!data.optionMarkets.markets) data.optionMarkets.markets = {};
  return data.optionMarkets.markets;
}

function getMarketOptions(market) {
  return Array.isArray(market?.options)
    ? market.options
        .map((option) => ({
          id: String(option?.id || "").trim(),
          label: String(option?.label || "").trim()
        }))
        .filter((option) => option.id && option.label)
    : [];
}

function readOptionMarketStateFromData(data, walletAddress, market) {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  const options = getMarketOptions(market);
  const store = ensureOptionMarketStore(data);
  const marketStore = store[market.id] || {};
  const optionPools = Object.fromEntries(options.map((option) => [option.id, 0]));
  Object.entries(marketStore.optionPools || {}).forEach(([optionId, amount]) => {
    if (optionPools[optionId] !== undefined) optionPools[optionId] = Math.max(0, Number(amount) || 0);
  });
  const position = cleanWallet ? marketStore.positions?.[cleanWallet] : null;
  const claimRecord = cleanWallet ? marketStore.claimed?.[cleanWallet] || null : null;
  const volumeUsdc = Object.values(optionPools).reduce((sum, amount) => sum + (Number(amount) || 0), 0);
  return {
    position: {
      yesSharesUsdc: 0,
      noSharesUsdc: 0,
      optionId: position?.optionId || null,
      optionLabel: options.find((option) => option.id === position?.optionId)?.label || position?.optionLabel || null,
      optionSharesUsdc: Math.max(0, Number(position?.amountUsdc) || 0),
      claimedAt: claimRecord?.claimedAt || null,
      claimedAmountUsdc: Math.max(0, Number(claimRecord?.amountUsdc) || 0),
      claimTxHash: claimRecord?.txHash || null,
      autoClaimed: Boolean(claimRecord?.autoPaid)
    },
    snapshot: {
      yesPriceCents: 0,
      noPriceCents: 0,
      volumeUsdc,
      yesSharesUsdc: 0,
      noSharesUsdc: 0,
      optionPools,
      outcome: marketStore.resolvedOptionId ? 1 : 0,
      resolvedOptionId: marketStore.resolvedOptionId || null,
      traderCount: Array.isArray(marketStore.traders) ? marketStore.traders.length : Object.keys(marketStore.positions || {}).length
    }
  };
}

async function loadOptionMarketStateFromSupabase(data, market) {
  if (!isSupabaseConfigured || !market?.id) return data;
  try {
    const [positionRows, resolutionRows] = await Promise.all([
      supabaseRequest(`option_market_positions?market_id=eq.${encodeURIComponent(market.id)}&select=wallet_address,option_id,option_label,amount_usdc,created_at`),
      supabaseRequest(`option_market_resolutions?market_id=eq.${encodeURIComponent(market.id)}&select=market_id,winning_option_id,resolved_at`)
    ]);
    const store = ensureOptionMarketStore(data);
    const current = store[market.id] || {};
    const marketStore = {
      positions: { ...(current.positions || {}) },
      optionPools: {},
      traders: [],
      resolvedOptionId: resolutionRows?.[0]?.winning_option_id || current.resolvedOptionId || null,
      resolvedAt: resolutionRows?.[0]?.resolved_at || current.resolvedAt || null,
      claimed: current.claimed || {}
    };
    const persistedWallets = new Set();
    for (const row of positionRows || []) {
      const wallet = normalizeWalletAddress(row.wallet_address);
      if (!wallet) continue;
      const optionId = String(row.option_id || "").trim();
      const amountUsdc = Math.max(0, Number(row.amount_usdc) || 0);
      if (!optionId || amountUsdc <= 0) continue;
      persistedWallets.add(wallet);
      marketStore.positions[wallet] = {
        optionId,
        optionLabel: String(row.option_label || ""),
        amountUsdc,
        createdAt: row.created_at || new Date().toISOString()
      };
    }
    for (const [wallet, position] of Object.entries(marketStore.positions)) {
      const cleanWallet = normalizeWalletAddress(wallet);
      if (!cleanWallet) continue;
      const optionId = String(position?.optionId || "").trim();
      const amountUsdc = Math.max(0, Number(position?.amountUsdc) || 0);
      if (!optionId || amountUsdc <= 0) continue;
      marketStore.optionPools[optionId] = (Number(marketStore.optionPools[optionId]) || 0) + amountUsdc;
      if (!marketStore.traders.includes(cleanWallet)) marketStore.traders.push(cleanWallet);
      if (!persistedWallets.has(cleanWallet)) {
        void saveOptionMarketPositionToSupabase(
          market,
          cleanWallet,
          optionId,
          position?.optionLabel || getMarketOptions(market).find((entry) => entry.id === optionId)?.label || "",
          amountUsdc
        ).catch((err) => console.warn("[SUPABASE] Option position backfill failed:", err.message));
      }
    }
    store[market.id] = marketStore;
    await loadOptionMarketClaimsFromSupabase(data, market);
  } catch (err) {
    if (!/option_market_positions|option_market_resolutions|relation|table/i.test(String(err.message || ""))) {
      console.warn("[SUPABASE] Option market state read failed:", err.message);
    }
  }
  return data;
}

async function saveOptionMarketPositionToSupabase(market, walletAddress, optionId, optionLabel, amountUsdc) {
  if (!isSupabaseConfigured) return;
  const wallet = normalizeWalletAddress(walletAddress);
  if (!market?.id || !wallet) return;
  await supabaseRequest("option_market_positions?on_conflict=market_id,wallet_address", {
    method: "POST",
    prefer: "resolution=merge-duplicates,return=minimal",
    body: [{
      market_id: market.id,
      wallet_address: wallet,
      option_id: optionId,
      option_label: optionLabel,
      amount_usdc: amountUsdc,
      updated_at: new Date().toISOString()
    }]
  });
}

async function deleteOptionMarketPositionFromSupabase(market, walletAddress) {
  if (!isSupabaseConfigured) return;
  const wallet = normalizeWalletAddress(walletAddress);
  if (!market?.id || !wallet) return;
  try {
    await supabaseRequest(`option_market_positions?market_id=eq.${encodeURIComponent(market.id)}&wallet_address=eq.${encodeURIComponent(wallet)}`, {
      method: "DELETE",
      prefer: "return=minimal"
    });
  } catch (err) {
    console.warn("[SUPABASE] Option position delete failed:", err.message);
  }
}

async function saveOptionMarketResolutionToSupabase(market, winningOptionId) {
  if (!isSupabaseConfigured || !market?.id || !winningOptionId) return;
  try {
    await supabaseRequest("option_market_resolutions?on_conflict=market_id", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: [{
        market_id: market.id,
        winning_option_id: winningOptionId,
        resolved_at: new Date().toISOString()
      }]
    });
  } catch (err) {
    console.warn("[SUPABASE] Option resolution save failed:", err.message);
  }
}

async function saveOptionMarketClaimToSupabase(marketId, walletAddress, amountUsdc, txHash) {
  if (!isSupabaseConfigured) return;
  const wallet = normalizeWalletAddress(walletAddress);
  if (!marketId || !wallet) return;
  try {
    await supabaseRequest("leaderboard_bonus_events?on_conflict=wallet_address,bonus_key", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: [{
        wallet_address: wallet,
        season_id: "options",
        bonus_type: "option_market_claim",
        bonus_key: `claim:${marketId}`,
        points: 0,
        metadata: {
          amountUsdc,
          txHash,
          claimedAt: new Date().toISOString()
        }
      }]
    });
  } catch (err) {
    console.warn("[SUPABASE] Claim save failed:", err.message);
  }
}

async function loadOptionMarketClaimsFromSupabase(data, market) {
  if (!isSupabaseConfigured || !market?.id) return data;
  try {
    const rows = await supabaseRequest(`leaderboard_bonus_events?bonus_key=eq.claim:${encodeURIComponent(market.id)}&bonus_type=eq.option_market_claim&select=wallet_address,metadata`);
    const store = ensureOptionMarketStore(data);
    const marketStore = store[market.id] || {};
    if (!marketStore.claimed) marketStore.claimed = {};
    for (const row of rows || []) {
      const wallet = normalizeWalletAddress(row.wallet_address);
      if (!wallet) continue;
      const meta = row.metadata || {};
      marketStore.claimed[wallet] = {
        amountUsdc: Number(meta.amountUsdc) || 0,
        txHash: String(meta.txHash || ""),
        claimedAt: String(meta.claimedAt || new Date().toISOString())
      };
    }
  } catch (err) {
    console.warn("[SUPABASE] Claim load failed:", err.message);
  }
  return data;
}

function saveOptionMarketPosition(data, market, walletAddress, optionId, optionLabel, amountUsdc) {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  if (!cleanWallet) throw new Error("Missing wallet");
  const store = ensureOptionMarketStore(data);
  if (!store[market.id]) {
    store[market.id] = {
      positions: {},
      optionPools: {},
      traders: [],
      resolvedOptionId: null,
      claimed: {}
    };
  }
  const marketStore = store[market.id];
  if (!marketStore.positions) marketStore.positions = {};
  if (!marketStore.optionPools) marketStore.optionPools = {};
  if (!Array.isArray(marketStore.traders)) marketStore.traders = [];
  if (marketStore.resolvedOptionId) throw new Error("This market is resolved and can no longer be traded");

  const existing = marketStore.positions[cleanWallet];
  if (existing && existing.optionId && existing.optionId !== optionId) {
    throw new Error("You already picked an option in this market");
  }
  if (existing && existing.optionId === optionId) {
    throw new Error("Your pick is already locked");
  }

  marketStore.positions[cleanWallet] = {
    optionId,
    optionLabel,
    amountUsdc,
    createdAt: new Date().toISOString()
  };
  marketStore.optionPools[optionId] = (Number(marketStore.optionPools[optionId]) || 0) + amountUsdc;
  if (!marketStore.traders.includes(cleanWallet)) marketStore.traders.push(cleanWallet);
}

function getOptionMarketExitPreview(data, market, walletAddress) {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  const store = ensureOptionMarketStore(data);
  const marketStore = store[market.id];
  const position = cleanWallet ? marketStore?.positions?.[cleanWallet] : null;
  if (!marketStore || !position?.optionId) throw new Error("You do not have a pick to exit");
  if (marketStore.resolvedOptionId) throw new Error("This market is resolved and can no longer be traded");
  return {
    optionId: position.optionId,
    optionLabel: position.optionLabel,
    amountUsdc: Math.max(0, Number(position.amountUsdc) || 0)
  };
}

function exitOptionMarketPosition(data, market, walletAddress) {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  if (!cleanWallet) throw new Error("Missing wallet");
  const store = ensureOptionMarketStore(data);
  const marketStore = store[market.id];
  const exit = getOptionMarketExitPreview(data, market, cleanWallet);
  if (exit.amountUsdc <= 0) throw new Error("You do not have a pick to exit");

  marketStore.optionPools[exit.optionId] = Math.max(0, (Number(marketStore.optionPools?.[exit.optionId]) || 0) - exit.amountUsdc);
  delete marketStore.positions[cleanWallet];
  if (marketStore.claimed) delete marketStore.claimed[cleanWallet];
  if (Array.isArray(marketStore.traders)) {
    marketStore.traders = marketStore.traders.filter((wallet) => normalizeWalletAddress(wallet) !== cleanWallet);
  }
  return exit;
}

function resolveOptionMarketInData(data, market, winningOptionId) {
  const option = getMarketOptions(market).find((entry) => entry.id === winningOptionId);
  if (!option) throw new Error("Choose a valid winning option");
  const store = ensureOptionMarketStore(data);
  const marketStore = store[market.id];
  if (!marketStore) throw new Error("No picks have been placed in this market yet");
  marketStore.resolvedOptionId = option.id;
  marketStore.resolvedAt = new Date().toISOString();

  const leaderboard = ensureLeaderboardState(data);
  Object.entries(marketStore.positions || {}).forEach(([walletAddress, position]) => {
    const cleanWallet = normalizeWalletAddress(walletAddress);
    if (!cleanWallet || isAdminWallet(cleanWallet)) return;
    if (!leaderboard.traders[cleanWallet]) {
      leaderboard.traders[cleanWallet] = {
        points: 0,
        status: "0 wins, 0 losses",
        username: "",
        reported_points: 0,
        reported_status: "0 wins, 0 losses",
        first_activity_at: position.createdAt || new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    }
    if (!leaderboard.resolvedResults[cleanWallet]) leaderboard.resolvedResults[cleanWallet] = {};
    leaderboard.resolvedResults[cleanWallet][market.id] = {
      result: position.optionId === option.id ? "win" : "loss",
      points: position.optionId === option.id ? 100 : 0,
      option_id: position.optionId,
      winning_option_id: option.id
    };
  });
  applyCompensationChallengeBonuses(data);
  applyReferralWinBonuses(data);
}

function getOptionMarketClaimPreview(data, market, walletAddress) {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  const store = ensureOptionMarketStore(data);
  const marketStore = store[market.id] || {};
  const position = marketStore.positions?.[cleanWallet];
  const winningOptionId = marketStore.resolvedOptionId || null;
  if (!position || !winningOptionId) return { won: false, amountUsdc: 0 };
  if (position.optionId !== winningOptionId) return { won: false, amountUsdc: 0 };
  const winningPool = Number(marketStore.optionPools?.[winningOptionId]) || 0;
  const totalPool = Object.values(marketStore.optionPools || {}).reduce((sum, value) => sum + (Number(value) || 0), 0);
  const amountUsdc = winningPool > 0 ? ((Number(position.amountUsdc) || 0) / winningPool) * totalPool : 0;
  return {
    won: amountUsdc > 0,
    amountUsdc,
    alreadyClaimed: Boolean(marketStore.claimed?.[cleanWallet])
  };
}

async function payoutOptionMarketClaims(data, market, options = {}) {
  const cleanTargetWallet = normalizeWalletAddress(options.walletAddress || "");
  const store = ensureOptionMarketStore(data);
  const marketStore = store[market.id] || {};
  if (!marketStore.resolvedOptionId) {
    return { paid: [], skipped: [], failed: [], skippedNoSigner: false };
  }
  if (!payoutPrivateKey) {
    return { paid: [], skipped: [], failed: [], skippedNoSigner: true };
  }

  const signer = new Wallet(payoutPrivateKey, leaderboardProvider);
  const usdc = new Contract(ARC_TESTNET_USDC, BACKEND_WALLET_ERC20_ABI, signer);
  const paid = [];
  const skipped = [];
  const failed = [];
  const wallets = Object.keys(marketStore.positions || {});

  for (const walletAddress of wallets) {
    const cleanWallet = normalizeWalletAddress(walletAddress);
    if (!cleanWallet || (cleanTargetWallet && cleanWallet !== cleanTargetWallet)) continue;
    const claim = getOptionMarketClaimPreview(data, market, cleanWallet);
    if (claim.alreadyClaimed) {
      skipped.push({ walletAddress: cleanWallet, reason: "already-claimed" });
      continue;
    }
    if (!claim.won || claim.amountUsdc <= 0) {
      skipped.push({ walletAddress: cleanWallet, reason: "no-payout" });
      continue;
    }

    try {
      const tx = await usdc.transfer(cleanWallet, parseUnits(claim.amountUsdc.toFixed(6), 6));
      const receipt = await tx.wait();
      const txHash = receipt?.hash || tx.hash;
      if (!marketStore.claimed) marketStore.claimed = {};
      marketStore.claimed[cleanWallet] = {
        amountUsdc: claim.amountUsdc,
        txHash: txHash,
        claimedAt: new Date().toISOString(),
        autoPaid: !cleanTargetWallet
      };
      await saveOptionMarketClaimToSupabase(market.id, cleanWallet, claim.amountUsdc, txHash);
      paid.push({
        walletAddress: cleanWallet,
        amountUsdc: claim.amountUsdc,
        txHash: txHash
      });
    } catch (err) {
      failed.push({ walletAddress: cleanWallet, error: err.message || String(err || "Payout failed") });
    }
  }

  return { paid, skipped, failed, skippedNoSigner: false };
}

const ensureGatewayAvailableBalance = async (buyer, requiredUsdc) => {
  const requiredBaseUnits = parseUnits(requiredUsdc.toFixed(6), 6);
  let balances = await buyer.getBalances();
  if ((balances.gateway?.available || 0n) >= requiredBaseUnits) {
    return balances;
  }
  throw new Error("Gateway balance is still topping up. Try the AI briefing unlock again in a few seconds.");
};

const activeWarmups = new Set();

const warmGatewayBalanceInBackground = (privateKey, minimumUsdc) => {
  if (!backendWalletUseX402) return;
  const depositAmount = x402AutoDepositUsdc || minimumUsdc.toFixed(6);
  void (async () => {
    let walletAddress = "";
    try {
      const buyer = new GatewayClient({
        chain: "arcTestnet",
        privateKey
      });
      walletAddress = buyer.address.toLowerCase();
      if (activeWarmups.has(walletAddress)) {
        console.log(`[X402] Gateway warmup already in progress for ${walletAddress}. Skipping duplicate.`);
        return;
      }
      activeWarmups.add(walletAddress);

      const balances = await buyer.getBalances();
      const requiredBaseUnits = parseUnits(minimumUsdc.toFixed(6), 6);
      if ((balances.gateway?.available || 0n) >= requiredBaseUnits) return;

      const walletBalanceRaw = BigInt(balances.wallet?.balance || "0");
      const depositBaseUnits = parseUnits(Number(depositAmount).toFixed(6), 6);
      if (walletBalanceRaw < depositBaseUnits) {
        console.warn(`[X402] Gateway warmup skipped: wallet balance (${formatUnits(walletBalanceRaw, 6)} USDC) is less than required deposit amount (${depositAmount} USDC)`);
        return;
      }

      console.log(`[X402] Auto-depositing ${depositAmount} USDC into Gateway for ${walletAddress}...`);
      await buyer.deposit(depositAmount);
    } catch (error) {
      console.warn("[X402] Gateway warmup failed:", error?.message || error);
    } finally {
      if (walletAddress) {
        activeWarmups.delete(walletAddress);
      }
    }
  })();
};

const payWithLocalX402Script = async (privateKey, targetUrl, customPriceUsdc = null) => {
  const priceToUse = customPriceUsdc !== null ? customPriceUsdc : x402PriceUsdc;
  const scriptPath = resolve(root, "scripts", "x402-local-pay.mjs");
  const env = {
    ...process.env,
    X402_PRIVATE_KEY: privateKey,
    X402_TARGET_URL: targetUrl,
    X402_AUTO_DEPOSIT_USDC: process.env.X402_AUTO_DEPOSIT_USDC || priceToUse.toFixed(6)
  };
  const { stdout, stderr } = await execFileAsync(process.execPath, [scriptPath], {
    cwd: root,
    env,
    timeout: 120000,
    maxBuffer: 1024 * 1024
  });
  const combined = `${stdout || ""}\n${stderr || ""}`;
  const amountMatch = combined.match(/Paid amount:\s*([^\s]+)\s*USDC/i);
  return {
    output: combined,
    paymentAmount: amountMatch?.[1] || null
  };
};

const getCircleUserId = (email) => {
  const hash = createHash("sha256").update(email.toLowerCase().trim()).digest("hex");
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-${hash.slice(12, 16)}-${hash.slice(16, 20)}-${hash.slice(20, 32)}`;
};

const callCircleApi = async (path, method, body, userToken = null) => {
  let apiKey = process.env.CIRCLE_API_KEY;
  if (!apiKey) {
    throw new Error("CIRCLE_API_KEY is not configured in environment variables.");
  }
  apiKey = apiKey.trim().replace(/^["']|["']$/g, "");
  if (apiKey && !apiKey.startsWith("TEST_API_KEY:") && !apiKey.startsWith("LIVE_API_KEY:") && !apiKey.startsWith("SAND_API_KEY:")) {
    apiKey = `TEST_API_KEY:${apiKey}`;
  }
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  };
  if (userToken) {
    headers["X-User-Token"] = userToken;
  }
  const defaultApiUrl = apiKey.startsWith("SAND_API_KEY:") ? "https://api-sandbox.circle.com" : "https://api.circle.com";
  const circleApiUrl = process.env.CIRCLE_API_URL || defaultApiUrl;
  const url = `${circleApiUrl}${path}`;
  console.log(`[Circle API] ${method} ${url}`);
  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
  
  const text = await response.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  if (!response.ok) {
    console.error(`[Circle API ERROR] ${response.status} ${response.statusText} -> ${text}`);
    const err = new Error(data.message || `Circle API error: ${response.status}`);
    err.code = data.code;
    throw err;
  }
  return data;
};

const ANALYTICS_FILE = join(root, ".siftle", "analytics.json");

const analyticsEventKeys = [
  "app_open",
  "wallet_connect_start",
  "wallet_connect_success",
  "wallet_connect_failed",
  "sign_up",
  "market_view",
  "trade_drawer_open",
  "trade_attempt",
  "trade_buy_success",
  "trade_sell_success",
  "trade_failed",
  "claim_attempt",
  "claim_success",
  "claim_failed",
  "ai_unlock_attempt",
  "ai_unlock_success",
  "ai_unlock_failed",
  "view_summary",
  "open_source"
];

function createEmptyAnalyticsCounts() {
  return Object.fromEntries(analyticsEventKeys.map((key) => [key, 0]));
}

function getAnalyticsTotalsFromDaily(daily = {}) {
  const totals = createEmptyAnalyticsCounts();
  Object.values(daily || {}).forEach((row) => {
    analyticsEventKeys.forEach((key) => {
      totals[key] += Number(row?.[key]) || 0;
    });
  });
  return totals;
}

function normalizeAnalytics(data = {}) {
  const daily = data.daily && typeof data.daily === "object" ? data.daily : {};
  Object.keys(daily).forEach((dateKey) => {
    daily[dateKey] = {
      ...createEmptyAnalyticsCounts(),
      ...(daily[dateKey] || {})
    };
  });

  const dailyTotals = getAnalyticsTotalsFromDaily(daily);
  const storedTotals = {
    ...createEmptyAnalyticsCounts(),
    ...(data.totals || {})
  };
  const hasDailyRows = Object.keys(daily).length > 0;
  const totals = { ...storedTotals };

  analyticsEventKeys.forEach((key) => {
    totals[key] = hasDailyRows ? (Number(dailyTotals[key]) || 0) : (Number(storedTotals[key]) || 0);
  });

  return {
    ...data,
    totals,
    daily,
    emails: Array.isArray(data.emails) ? data.emails : []
  };
}

function loadAnalytics() {
  try {
    if (existsSync(ANALYTICS_FILE)) {
      const content = readFileSync(ANALYTICS_FILE, "utf8").replace(/^\uFEFF/, "");
      const data = normalizeAnalytics(JSON.parse(content));
      scrubRolledBackLeaderboardState(data);
      return data;
    }
  } catch (err) {
    console.error("Failed to load analytics:", err);
  }
  return normalizeAnalytics({
    totals: createEmptyAnalyticsCounts(),
    daily: {},
    emails: []
  });
}

function saveAnalytics(data) {
  try {
    const dir = join(root, ".siftle");
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    writeFileSync(ANALYTICS_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Failed to save analytics:", err);
  }
}

const analyticsSupabaseSelect = ["date_key", ...analyticsEventKeys, "updated_at"].join(",");

const emailHash = (email) => createHash("sha256").update(String(email || "").trim().toLowerCase()).digest("hex");

function mergeLeaderboardTraders(localTraders = {}, remoteTraders = {}) {
  const merged = {};
  const addresses = new Set([
    ...Object.keys(localTraders || {}),
    ...Object.keys(remoteTraders || {})
  ]);

  addresses.forEach((address) => {
    const key = normalizeWalletAddress(address);
    if (!key) return;

    const localEntry = localTraders?.[key] || localTraders?.[address] || {};
    const remoteEntry = remoteTraders?.[key] || remoteTraders?.[address] || {};

    const localUpdated = Date.parse(localEntry.updated_at || "") || 0;
    const remoteUpdated = Date.parse(remoteEntry.updated_at || "") || 0;
    const newer = localUpdated >= remoteUpdated ? localEntry : remoteEntry;
    const older = newer === localEntry ? remoteEntry : localEntry;

    merged[key] = {
      points: Number(newer.points ?? older.points) || 0,
      status: String(newer.status || older.status || "0 wins, 0 losses"),
      username: String(localEntry.username || remoteEntry.username || ""),
      reported_points: Number(newer.reported_points ?? older.reported_points ?? newer.points ?? older.points) || 0,
      reported_status: String(newer.reported_status || older.reported_status || newer.status || older.status || "0 wins, 0 losses"),
      updated_at: new Date(Math.max(localUpdated, remoteUpdated, Date.now())).toISOString()
    };
  });

  return merged;
}

function mergeResolvedResults(localResults = {}, remoteResults = {}) {
  const merged = {};
  const addresses = new Set([
    ...Object.keys(localResults || {}),
    ...Object.keys(remoteResults || {})
  ]);

  addresses.forEach((address) => {
    const key = normalizeWalletAddress(address);
    if (!key) return;
    merged[key] = {
      ...(remoteResults?.[address] || remoteResults?.[key] || {}),
      ...(localResults?.[address] || localResults?.[key] || {})
    };
  });

  return merged;
}

function mergeAnalytics(localData, remoteData) {
  const local = localData || {};
  const remote = remoteData || {};

  const merged = {
    ...remote,
    ...local,
    totals: {
      ...(remote.totals || {}),
      ...(local.totals || {})
    },
    daily: {
      ...(remote.daily || {}),
      ...(local.daily || {})
    },
    emails: Array.from(new Set([...(remote.emails || []), ...(local.emails || [])]))
  };

  const localLeaderboard = local.leaderboard || {};

  merged.leaderboard = {
    ...localLeaderboard,
    traders: mergeLeaderboardTraders(localLeaderboard.traders || {}, {}),
    resolvedResults: mergeResolvedResults(localLeaderboard.resolvedResults || {}, {}),
    lastComputedAt: localLeaderboard.lastComputedAt || null
  };

  return merged;
}

function getShelbySafeAnalytics(data) {
  const { leaderboard, ...safeData } = data || {};
  return safeData;
}

async function supabaseRequest(path, options = {}) {
  if (!isSupabaseConfigured) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Math.max(1000, supabaseRequestTimeoutMs));
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    method: options.method || "GET",
    signal: controller.signal,
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json",
      ...(options.prefer ? { Prefer: options.prefer } : {}),
      ...(options.headers || {})
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  }).finally(() => clearTimeout(timeout));

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(`Supabase ${options.method || "GET"} ${path} failed: ${text || response.statusText}`);
  }
  return data;
}

async function loadAnalyticsFromSupabase(localData = loadAnalytics()) {
  const data = normalizeAnalytics(localData);
  if (!isSupabaseConfigured) return data;

  try {
    const rows = await supabaseRequest(`analytics_daily?select=${analyticsSupabaseSelect}&order=date_key.desc&limit=120`);
    (rows || []).forEach((row) => {
      const dateKey = String(row.date_key || "").trim();
      if (!dateKey) return;

      const existing = data.daily[dateKey] || createEmptyAnalyticsCounts();
      const merged = { ...createEmptyAnalyticsCounts(), ...existing };
      analyticsEventKeys.forEach((key) => {
        merged[key] = Math.max(Number(existing[key]) || 0, Number(row[key]) || 0);
      });
      data.daily[dateKey] = merged;
    });
    return normalizeAnalytics(data);
  } catch (err) {
    console.warn("[SUPABASE] Analytics read failed; using local fallback:", err.message);
    return data;
  }
}

async function incrementAnalyticsEventInSupabase(event, email = null) {
  const cleanEvent = String(event || "").trim();
  if (!isSupabaseConfigured || !analyticsEventKeys.includes(cleanEvent)) {
    return { saved: false, skipped: true };
  }

  try {
    if (cleanEvent === "sign_up" && email) {
      const inserted = await supabaseRequest("analytics_signups?on_conflict=email_hash", {
        method: "POST",
        prefer: "resolution=ignore-duplicates,return=representation",
        body: [{
          email_hash: emailHash(email),
          date_key: getTodayKey()
        }]
      });
      if (Array.isArray(inserted) && inserted.length === 0) {
        return { saved: true, duplicate: true };
      }
    }

    const dateKey = getTodayKey();
    const encodedDate = encodeURIComponent(dateKey);
    const existingRows = await supabaseRequest(`analytics_daily?date_key=eq.${encodedDate}&select=${analyticsSupabaseSelect}`);
    const existing = existingRows?.[0] || {};
    const nextRow = {
      date_key: dateKey,
      updated_at: new Date().toISOString()
    };

    analyticsEventKeys.forEach((key) => {
      nextRow[key] = Number(existing[key]) || 0;
    });
    nextRow[cleanEvent] += 1;

    await supabaseRequest("analytics_daily?on_conflict=date_key", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: [nextRow]
    });
    return { saved: true };
  } catch (err) {
    console.warn("[SUPABASE] Analytics write failed; local JSON fallback kept:", err.message);
    return { saved: false, error: err.message };
  }
}

function getLocalAiBriefingWalletMetrics(data = {}) {
  const unlocks = data?.leaderboard?.aiBriefingUnlocks || {};
  const dailyWalletSets = {};
  const allWallets = new Set();

  Object.entries(unlocks).forEach(([key, sourceHashes]) => {
    const separatorIndex = key.lastIndexOf(":");
    if (separatorIndex <= 0) return;
    if (!Array.isArray(sourceHashes) || sourceHashes.length < 1) return;
    const walletAddress = normalizeWalletAddress(key.slice(0, separatorIndex));
    const dateKey = String(key.slice(separatorIndex + 1) || "").trim();
    if (!walletAddress || !dateKey) return;
    if (!dailyWalletSets[dateKey]) dailyWalletSets[dateKey] = new Set();
    dailyWalletSets[dateKey].add(walletAddress);
    allWallets.add(walletAddress);
  });

  return {
    byDate: Object.fromEntries(Object.entries(dailyWalletSets).map(([dateKey, walletSet]) => [dateKey, walletSet.size])),
    totalUnique: allWallets.size
  };
}

async function buildAnalyticsReport(localData = loadAnalytics()) {
  const data = await loadAnalyticsFromSupabase(localData);
  const todayKey = getTodayKey();
  const derived = {
    signupsByDate: {},
    signupsTotalUnique: Number(data.emails?.length) || 0,
    aiBriefingWalletsByDate: {},
    aiBriefingWalletsTotalUnique: 0,
    aiBriefingWalletsToday: 0
  };

  const signupHashesByDate = {};
  const allSignupHashes = new Set();
  const addSignupRecord = (dateKey, emailOrHash) => {
    const cleanDateKey = String(dateKey || "").trim();
    const rawValue = String(emailOrHash || "").trim().toLowerCase();
    if (!cleanDateKey || !rawValue) return;
    const hashed = /^[a-f0-9]{64}$/i.test(rawValue) ? rawValue : emailHash(rawValue);
    if (!signupHashesByDate[cleanDateKey]) signupHashesByDate[cleanDateKey] = new Set();
    signupHashesByDate[cleanDateKey].add(hashed);
    allSignupHashes.add(hashed);
  };

  Object.entries(data.daily || {}).forEach(([dateKey, row]) => {
    derived.signupsByDate[dateKey] = Number(row?.sign_up) || 0;
  });

  if (isSupabaseConfigured) {
    try {
      const [signupRows, aiUnlockRows, backendWalletRows] = await Promise.all([
        supabaseRequest("analytics_signups?select=email_hash,date_key,created_at&order=created_at.desc&limit=5000"),
        supabaseRequest("ai_briefing_unlocks?select=wallet_address,date_key,created_at&order=created_at.desc&limit=10000"),
        supabaseRequest("backend_wallet_users?select=email,created_at&order=created_at.desc&limit=5000")
      ]);

      (signupRows || []).forEach((row) => {
        addSignupRecord(row?.date_key, row?.email_hash);
      });
      (backendWalletRows || []).forEach((row) => {
        addSignupRecord(String(row?.created_at || "").slice(0, 10), row?.email);
      });

      const aiWalletSetsByDate = {};
      const allAiWallets = new Set();
      (aiUnlockRows || []).forEach((row) => {
        const dateKey = String(row?.date_key || "").trim();
        const walletAddress = normalizeWalletAddress(row?.wallet_address || "");
        if (!dateKey || !walletAddress) return;
        if (!aiWalletSetsByDate[dateKey]) aiWalletSetsByDate[dateKey] = new Set();
        aiWalletSetsByDate[dateKey].add(walletAddress);
        allAiWallets.add(walletAddress);
      });
      derived.aiBriefingWalletsByDate = Object.fromEntries(
        Object.entries(aiWalletSetsByDate).map(([dateKey, walletSet]) => [dateKey, walletSet.size])
      );
      derived.aiBriefingWalletsTotalUnique = allAiWallets.size;
    } catch (err) {
      console.warn("[ANALYTICS] Derived analytics query failed; using local fallback:", err.message);
      const localAiMetrics = getLocalAiBriefingWalletMetrics(data);
      derived.aiBriefingWalletsByDate = localAiMetrics.byDate;
      derived.aiBriefingWalletsTotalUnique = localAiMetrics.totalUnique;
    }
  } else {
    const localAiMetrics = getLocalAiBriefingWalletMetrics(data);
    derived.aiBriefingWalletsByDate = localAiMetrics.byDate;
    derived.aiBriefingWalletsTotalUnique = localAiMetrics.totalUnique;
  }

  // Fallback to local files only for emails that aren't already captured in database records
  (data.emails || []).forEach((email) => {
    const hashed = emailHash(email);
    if (!allSignupHashes.has(hashed)) {
      addSignupRecord(todayKey, email);
    }
  });

  Object.values(loadBackendWalletUsers()).forEach((user) => {
    const cleanEmail = String(user?.email || "").trim().toLowerCase();
    const hashed = emailHash(cleanEmail);
    if (!allSignupHashes.has(hashed)) {
      addSignupRecord(String(user?.createdAt || "").slice(0, 10), user?.email);
    }
  });

  if (allSignupHashes.size > 0) {
    derived.signupsByDate = Object.fromEntries(
      Object.entries(signupHashesByDate).map(([dateKey, hashSet]) => [dateKey, hashSet.size])
    );
    derived.signupsTotalUnique = allSignupHashes.size;
  }

  derived.aiBriefingWalletsToday = Number(derived.aiBriefingWalletsByDate[todayKey]) || 0;

  return {
    ...data,
    derived
  };
}

function parseLeaderboardStatus(status = "") {
  const winsMatch = String(status).match(/(\d+)\s+wins?/i);
  const lossesMatch = String(status).match(/(\d+)\s+loss(?:es)?/i);
  return {
    wins: winsMatch ? Number(winsMatch[1]) || 0 : 0,
    losses: lossesMatch ? Number(lossesMatch[1]) || 0 : 0
  };
}

async function loadLeaderboardFromSupabase(data) {
  if (!isSupabaseConfigured) return data;

  try {
    const remoteMigrations = await loadBackendWalletMigrationsFromSupabase();
    const migrationMap = getWalletMigrationMap(data);
    Object.values(remoteMigrations || {}).forEach((entry) => {
      const oldWallet = normalizeWalletAddress(entry?.oldWalletAddress);
      const newWallet = normalizeWalletAddress(entry?.newWalletAddress);
      if (oldWallet && newWallet && oldWallet !== newWallet) {
        migrationMap.set(oldWallet, newWallet);
      }
    });
    const canonicalAddress = (walletAddress) => {
      const address = normalizeWalletAddress(walletAddress);
      return address ? migrationMap.get(address) || address : "";
    };
    const earliestTimestamp = (left, right) => {
      const leftMs = Date.parse(left || "") || Number.MAX_SAFE_INTEGER;
      const rightMs = Date.parse(right || "") || Number.MAX_SAFE_INTEGER;
      if (leftMs === Number.MAX_SAFE_INTEGER) return right || left || "";
      if (rightMs === Number.MAX_SAFE_INTEGER) return left || right || "";
      return leftMs <= rightMs ? left : right;
    };
    const latestTimestamp = (left, right) => {
      const leftMs = Date.parse(left || "") || 0;
      const rightMs = Date.parse(right || "") || 0;
      return leftMs >= rightMs ? left : right;
    };
    const [profiles, results] = await Promise.all([
      supabaseRequest("profiles?select=wallet_address,username,updated_at"),
      supabaseRequest("resolved_results?select=wallet_address,market_id,result,points,switched")
    ]);
    let entries = [];
    let divisionRows = [];
    let bonusRows = [];
    try {
      entries = await supabaseRequest("leaderboard_entries?select=wallet_address,points,status,reported_points,reported_status,first_activity_at,updated_at");
    } catch (err) {
      if (!/first_activity_at|column/i.test(String(err.message || ""))) throw err;
      entries = await supabaseRequest("leaderboard_entries?select=wallet_address,points,status,reported_points,reported_status,updated_at");
    }
    try {
      divisionRows = await supabaseRequest("season_division_assignments?select=season_id,wallet_address,division_number,updated_at");
    } catch (err) {
      if (!/season_division_assignments|relation|table/i.test(String(err.message || ""))) throw err;
      divisionRows = [];
    }
    try {
      bonusRows = await supabaseRequest("leaderboard_bonus_events?select=wallet_address,season_id,bonus_type,bonus_key,points,metadata,created_at");
    } catch (err) {
      if (!/leaderboard_bonus_events|relation|table/i.test(String(err.message || ""))) throw err;
      bonusRows = [];
    }

    const leaderboard = ensureLeaderboardState(data);
    const profileMap = new Map();
    for (const profile of profiles || []) {
      const address = canonicalAddress(profile.wallet_address);
      if (!address) continue;
      const existing = profileMap.get(address) || {};
      profileMap.set(address, {
        ...existing,
        ...profile,
        wallet_address: address,
        username: String(profile.username || existing.username || ""),
        updated_at: latestTimestamp(existing.updated_at, profile.updated_at) || profile.updated_at || existing.updated_at
      });
    }

    for (const entry of entries || []) {
      const address = canonicalAddress(entry.wallet_address);
      if (!address) continue;
      const profile = profileMap.get(address) || {};
      const existing = leaderboard.traders[address] || {};
      const entryPoints = Number(entry.points) || 0;
      const entryReportedPoints = Number(entry.reported_points) || 0;
      leaderboard.traders[address] = {
        points: entryPoints,
        status: String(entry.status || existing.status || "0 wins, 0 losses"),
        username: String(profile.username || existing.username || ""),
        reported_points: entryReportedPoints,
        reported_status: String(entry.reported_status || existing.reported_status || "0 wins, 0 losses"),
        first_activity_at: earliestTimestamp(existing.first_activity_at, entry.first_activity_at || entry.updated_at) || new Date().toISOString(),
        updated_at: latestTimestamp(existing.updated_at, entry.updated_at) || new Date().toISOString()
      };
    }

    for (const result of results || []) {
      const address = canonicalAddress(result.wallet_address);
      const marketId = String(result.market_id || "");
      if (!address || !marketId) continue;
      if (!leaderboard.resolvedResults[address]) leaderboard.resolvedResults[address] = {};
      leaderboard.resolvedResults[address][marketId] = {
        result: result.result === "win" ? "win" : "loss",
        points: Number(result.points) || 0,
        switched: Boolean(result.switched)
      };
    }

    for (const row of divisionRows || []) {
      const seasonId = String(row.season_id || "");
      const address = canonicalAddress(row.wallet_address);
      const divisionNumber = Math.max(1, Number(row.division_number) || 1);
      if (!seasonId || !address) continue;
      const assignments = getStoredDivisionAssignments(data, seasonId);
      assignments[address] = divisionNumber;
    }

    for (const row of bonusRows || []) {
      const address = canonicalAddress(row.wallet_address);
      const bonusKey = String(row.bonus_key || "");
      if (!address || !bonusKey) continue;
      if (!leaderboard.bonusEvents[address]) leaderboard.bonusEvents[address] = {};
      leaderboard.bonusEvents[address][bonusKey] = {
        season_id: String(row.season_id || getSeasonId()),
        bonus_type: String(row.bonus_type || "bonus"),
        points: Number(row.points) || 0,
        metadata: row.metadata || {},
        created_at: row.created_at || new Date().toISOString()
      };
    }

    scrubRolledBackLeaderboardState(data);

    applyWalletMigrationAliases(data);

    Object.entries(leaderboard.traders || {}).forEach(([address, entry]) => {
      const normalized = normalizeWalletAddress(address);
      if (!normalized) return;
      const resultsByMarket = leaderboard.resolvedResults?.[normalized] || {};
      const resolvedEntries = Object.values(resultsByMarket);
      const bonusPoints = getLeaderboardBonusPoints(data, normalized);
      if (resolvedEntries.length > 0) {
        let points = 0;
        let wins = 0;
        let losses = 0;
        resolvedEntries.forEach((result) => {
          if (result?.result === "win") {
            wins += 1;
            points += Number(result.points) || 0;
          } else if (result?.result === "loss") {
            losses += 1;
          }
        });
        entry.points = points + bonusPoints;
        entry.status = `${wins} win${wins === 1 ? "" : "s"}, ${losses} loss${losses === 1 ? "" : "es"}`;
      } else if ((Number(entry.points) || 0) === 0 && (Number(entry.reported_points) || 0) > 0) {
        entry.points = Number(entry.reported_points) || 0;
        entry.status = String(entry.reported_status || entry.status || "0 wins, 0 losses");
      }
    });
  } catch (err) {
    console.warn("[SUPABASE] Leaderboard read failed; using local fallback:", err.message);
  }

  return data;
}

async function saveLeaderboardToSupabase(data) {
  if (!isSupabaseConfigured) return { saved: false, error: "Supabase is not configured" };

  try {
    const leaderboard = ensureLeaderboardState(data);
    const nowIso = new Date().toISOString();
    const traders = Object.entries(leaderboard.traders || {})
      .map(([address, entry]) => {
        const walletAddress = normalizeWalletAddress(address);
        if (!walletAddress || isAdminWallet(walletAddress)) return null;
        return { walletAddress, entry };
      })
      .filter(Boolean);

    if (traders.length > 0) {
      await supabaseRequest("profiles?on_conflict=wallet_address", {
        method: "POST",
        prefer: "resolution=merge-duplicates",
        body: traders.map(({ walletAddress, entry }) => ({
          wallet_address: walletAddress,
          username: String(entry.username || ""),
          updated_at: entry.updated_at || nowIso
        }))
      });

      const leaderboardRows = traders.map(({ walletAddress, entry }) => {
        const parsedStatus = parseLeaderboardStatus(entry.status);
        return {
          wallet_address: walletAddress,
          points: Number(entry.points) || 0,
          wins: parsedStatus.wins,
          losses: parsedStatus.losses,
          status: String(entry.status || "0 wins, 0 losses"),
          reported_points: Number(entry.reported_points) || 0,
          reported_status: String(entry.reported_status || "0 wins, 0 losses"),
          first_activity_at: entry.first_activity_at || entry.updated_at || nowIso,
          updated_at: entry.updated_at || nowIso
        };
      });

      try {
        await supabaseRequest("leaderboard_entries?on_conflict=wallet_address", {
          method: "POST",
          prefer: "resolution=merge-duplicates",
          body: leaderboardRows
        });
      } catch (err) {
        if (!/first_activity_at|column/i.test(String(err.message || ""))) throw err;
        await supabaseRequest("leaderboard_entries?on_conflict=wallet_address", {
          method: "POST",
          prefer: "resolution=merge-duplicates",
          body: leaderboardRows.map(({ first_activity_at, ...row }) => row)
        });
      }
    }

    const resolvedRows = [];
    Object.entries(leaderboard.resolvedResults || {}).forEach(([address, resultsByMarket]) => {
      const walletAddress = normalizeWalletAddress(address);
      if (!walletAddress || isAdminWallet(walletAddress)) return;
      Object.entries(resultsByMarket || {}).forEach(([marketId, result]) => {
        if (!marketId || !result) return;
        resolvedRows.push({
          wallet_address: walletAddress,
          market_id: String(marketId),
          result: result.result === "win" ? "win" : "loss",
          points: Number(result.points) || 0,
          switched: Boolean(result.switched)
        });
      });
    });

    if (resolvedRows.length > 0) {
      await supabaseRequest("resolved_results?on_conflict=wallet_address,market_id", {
        method: "POST",
        prefer: "resolution=merge-duplicates",
        body: resolvedRows
      });
    }

    const divisionRows = [];
    Object.entries(leaderboard.divisionAssignments || {}).forEach(([seasonId, assignments]) => {
      Object.entries(assignments || {}).forEach(([address, divisionNumber]) => {
        const walletAddress = normalizeWalletAddress(address);
        if (!seasonId || !walletAddress || isAdminWallet(walletAddress)) return;
        divisionRows.push({
          season_id: String(seasonId),
          wallet_address: walletAddress,
          division_number: Math.max(1, Number(divisionNumber) || 1),
          updated_at: nowIso
        });
      });
    });

    if (divisionRows.length > 0) {
      await supabaseRequest("season_division_assignments?on_conflict=season_id,wallet_address", {
        method: "POST",
        prefer: "resolution=merge-duplicates",
        body: divisionRows
      });
    }

    const bonusRows = [];
    Object.entries(leaderboard.bonusEvents || {}).forEach(([address, events]) => {
      const walletAddress = normalizeWalletAddress(address);
      if (!walletAddress || isAdminWallet(walletAddress)) return;
      Object.entries(events || {}).forEach(([bonusKey, event]) => {
        if (!bonusKey || !event) return;
        bonusRows.push({
          wallet_address: walletAddress,
          season_id: String(event.season_id || getSeasonId()),
          bonus_type: String(event.bonus_type || "bonus"),
          bonus_key: String(bonusKey),
          points: Number(event.points) || 0,
          metadata: event.metadata || {},
          created_at: event.created_at || nowIso
        });
      });
    });

    if (bonusRows.length > 0) {
      await supabaseRequest("leaderboard_bonus_events?on_conflict=wallet_address,bonus_key", {
        method: "POST",
        prefer: "resolution=merge-duplicates",
        body: bonusRows
      });
    }
    return { saved: true, error: "" };
  } catch (err) {
    console.warn("[SUPABASE] Leaderboard write failed; local JSON fallback kept:", err.message);
    return { saved: false, error: err.message };
  }
}

function normalizeWalletAddress(value) {
  const clean = String(value || "").trim().toLowerCase();
  return /^0x[a-f0-9]{40}$/.test(clean) ? clean : "";
}

const makeReferralCode = (walletAddress) =>
  createHash("sha256").update(normalizeWalletAddress(walletAddress)).digest("hex").slice(0, 8).toUpperCase();

async function ensureReferralCode(walletAddress) {
  const address = normalizeWalletAddress(walletAddress);
  if (!address) throw new Error("Missing wallet address");
  const fallbackCode = makeReferralCode(address);

  if (!isSupabaseConfigured) return fallbackCode;

  try {
    await supabaseRequest("profiles?on_conflict=wallet_address", {
      method: "POST",
      prefer: "resolution=merge-duplicates",
      body: [{ wallet_address: address, updated_at: new Date().toISOString() }]
    });

    let rows = await supabaseRequest(`referral_codes?wallet_address=eq.${encodeURIComponent(address)}&select=code`);
    if (rows?.[0]?.code) return String(rows[0].code);

    await supabaseRequest("referral_codes?on_conflict=wallet_address", {
      method: "POST",
      prefer: "resolution=merge-duplicates",
      body: [{ wallet_address: address, code: fallbackCode }]
    });
    rows = await supabaseRequest(`referral_codes?wallet_address=eq.${encodeURIComponent(address)}&select=code`);
    return String(rows?.[0]?.code || fallbackCode);
  } catch (err) {
    if (/referral_codes|profiles|relation|table/i.test(String(err.message || ""))) {
      console.warn("[REFERRALS] Falling back to deterministic invite code:", err.message);
      return fallbackCode;
    }
    throw err;
  }
}

async function bindReferralCode(walletAddress, referralCode) {
  const referredWallet = normalizeWalletAddress(walletAddress);
  const code = String(referralCode || "").replace(/[^a-z0-9]/gi, "").toUpperCase();
  if (!referredWallet || !code) return { bound: false, reason: "missing" };
  if (!isSupabaseConfigured) return { bound: false, reason: "supabase_unconfigured" };

  let codeRows = [];
  try {
    codeRows = await supabaseRequest(`referral_codes?code=eq.${encodeURIComponent(code)}&select=wallet_address,code`);
  } catch (err) {
    if (/referral_codes|relation|table/i.test(String(err.message || ""))) {
      return { bound: false, reason: "referrals_unavailable" };
    }
    throw err;
  }
  const referrerWallet = normalizeWalletAddress(codeRows?.[0]?.wallet_address);
  let resolvedReferrerWallet = referrerWallet;
  if (!resolvedReferrerWallet && isSupabaseConfigured) {
    try {
      const profiles = await supabaseRequest("profiles?select=wallet_address");
      const fallbackProfile = (profiles || []).find((profile) => makeReferralCode(profile.wallet_address) === code);
      resolvedReferrerWallet = normalizeWalletAddress(fallbackProfile?.wallet_address);
      if (resolvedReferrerWallet) {
        await supabaseRequest("referral_codes?on_conflict=wallet_address", {
          method: "POST",
          prefer: "resolution=merge-duplicates",
          body: [{ wallet_address: resolvedReferrerWallet, code }]
        });
      }
    } catch (err) {
      console.warn("[REFERRALS] Deterministic code fallback failed:", err.message);
    }
  }
  if (!resolvedReferrerWallet || resolvedReferrerWallet === referredWallet) {
    return { bound: false, reason: "invalid_code" };
  }

  await supabaseRequest("profiles?on_conflict=wallet_address", {
    method: "POST",
    prefer: "resolution=merge-duplicates",
    body: [
      { wallet_address: referredWallet, updated_at: new Date().toISOString() },
      { wallet_address: resolvedReferrerWallet, updated_at: new Date().toISOString() }
    ]
  });

  const existing = await supabaseRequest(`referral_relationships?referred_wallet=eq.${encodeURIComponent(referredWallet)}&select=referrer_wallet`);
  if (existing?.[0]?.referrer_wallet) {
    return {
      bound: normalizeWalletAddress(existing[0].referrer_wallet) === resolvedReferrerWallet,
      reason: "already_bound"
    };
  }

  await supabaseRequest("referral_relationships", {
    method: "POST",
    prefer: "return=minimal",
    body: [{
      referred_wallet: referredWallet,
      referrer_wallet: resolvedReferrerWallet,
      referral_code: code
    }]
  });

  leaderboardCache.expiresAt = 0;
  leaderboardCache.analytics = null;
  return { bound: true, referrerWallet: resolvedReferrerWallet };
}

async function loadReferralRelationshipsFromSupabase(data) {
  if (!isSupabaseConfigured) return data;
  const leaderboard = ensureLeaderboardState(data);
  leaderboard.referrals = {};
  const migrationMap = getWalletMigrationMap(data);
  const canonicalReferralWallet = (walletAddress) => {
    const address = normalizeWalletAddress(walletAddress);
    return migrationMap.get(address) || address;
  };

  try {
    const rows = await supabaseRequest("referral_relationships?select=referred_wallet,referrer_wallet,referral_code,created_at");
    (rows || []).forEach((row) => {
      const referred = canonicalReferralWallet(row.referred_wallet);
      const referrer = canonicalReferralWallet(row.referrer_wallet);
      if (!referred || !referrer || referred === referrer) return;
      if (!leaderboard.referrals[referrer]) leaderboard.referrals[referrer] = {};
      leaderboard.referrals[referrer][referred] = {
        referral_code: String(row.referral_code || ""),
        created_at: row.created_at || new Date().toISOString()
      };
    });
  } catch (err) {
    if (!/referral_relationships|relation|table/i.test(String(err.message || ""))) throw err;
  }

  return data;
}

const getSummaryUnlockKey = (sourceUrl = "") =>
  createHash("sha256").update(String(sourceUrl || "").trim()).digest("hex");

const createSummaryUnlockToken = (sourceUrl, walletAddress) => {
  const token = randomUUID();
  aiBriefingUnlocks.set(token, {
    key: getSummaryUnlockKey(sourceUrl),
    walletAddress: normalizeWalletAddress(walletAddress),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000
  });
  return token;
};

const hasValidSummaryUnlock = (sourceUrl, walletAddress, token) => {
  if (aiBriefingUnlockUsdc <= 0) return true;
  const entry = aiBriefingUnlocks.get(String(token || ""));
  if (!entry || entry.expiresAt < Date.now()) return false;
  return entry.key === getSummaryUnlockKey(sourceUrl)
    && (!entry.walletAddress || entry.walletAddress === normalizeWalletAddress(walletAddress));
};

const findStoryPriceByUrl = (sourceUrl) => {
  const categories = ["Sports", "Gaming", "Politics", "Crypto", "All"];
  const normalizedTarget = String(sourceUrl || "").trim().toLowerCase();
  for (const category of categories) {
    const snapshot = readPublishedSnapshot(category);
    if (snapshot?.top_stories) {
      const match = snapshot.top_stories.find(s => String(s.sourceUrl || "").trim().toLowerCase() === normalizedTarget);
      if (match && typeof match.unlockPriceUsdc === "number") {
        return match.unlockPriceUsdc;
      }
    }
  }
  return aiBriefingUnlockUsdc;
};

async function verifyAiBriefingUnlockPayment({ sourceUrl, walletAddress, txHash }) {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  const cleanTreasury = normalizeWalletAddress(aiBriefingTreasuryAddress);
  if (!cleanWallet) throw new Error("Missing wallet address");
  if (!sourceUrl) throw new Error("Missing source URL");
  if (!cleanTreasury) throw new Error("AI briefing treasury is not configured");

  if (!process.env.CIRCLE_API_KEY || String(txHash || "").startsWith("0xmockunlock")) {
    return createSummaryUnlockToken(sourceUrl, cleanWallet);
  }

  if (!/^0x[a-f0-9]{64}$/i.test(String(txHash || ""))) {
    throw new Error("Invalid unlock transaction hash");
  }

  const receipt = await leaderboardProvider.getTransactionReceipt(txHash);
  if (!receipt || receipt.status !== 1) throw new Error("Unlock transaction is not confirmed");

  const storyPrice = findStoryPriceByUrl(sourceUrl);
  const requiredAmount = parseUnits(storyPrice.toFixed(6), 6);
  const paid = receipt.logs.some((log) => {
    if (String(log.address).toLowerCase() !== ARC_TESTNET_USDC.toLowerCase()) return false;
    if (log.topics?.[0] !== erc20TransferTopic) return false;
    try {
      const parsed = erc20TransferInterface.parseLog(log);
      return normalizeWalletAddress(parsed.args.from) === cleanWallet
        && normalizeWalletAddress(parsed.args.to) === cleanTreasury
        && BigInt(parsed.args.value) >= requiredAmount;
    } catch {
      return false;
    }
  });

  if (!paid) throw new Error("Unlock payment was not found in the transaction");
  return createSummaryUnlockToken(sourceUrl, cleanWallet);
}

async function hasPersistentAiBriefingAccess(sourceUrl, walletAddress) {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  const sourceHash = getSummaryUnlockKey(sourceUrl);
  if (!cleanWallet || !sourceHash) return false;

  if (isSupabaseConfigured) {
    try {
      const rows = await supabaseRequest(
        `ai_briefing_unlocks?wallet_address=eq.${encodeURIComponent(cleanWallet)}&source_hash=eq.${encodeURIComponent(sourceHash)}&select=source_hash&limit=1`
      );
      return Array.isArray(rows) && rows.length > 0;
    } catch (err) {
      console.warn("[SUPABASE] AI briefing access check failed; using local fallback:", err.message);
    }
  }

  const data = loadAnalytics();
  const localUnlocks = data?.leaderboard?.aiBriefingUnlocks || {};
  return Object.entries(localUnlocks).some(([key, sourceHashes]) => {
    if (!Array.isArray(sourceHashes)) return false;
    if (!key.startsWith(`${cleanWallet}:`)) return false;
    return sourceHashes.includes(sourceHash);
  });
}

async function recordAiBriefingUnlockBonus(walletAddress, sourceUrl, txHash = "") {
  const cleanWallet = normalizeWalletAddress(walletAddress);
  if (!cleanWallet || !sourceUrl) {
    return { awarded: false, points: 0, unlockCount: 0 };
  }

  const dateKey = getTodayKey();
  const sourceHash = getSummaryUnlockKey(sourceUrl);
  const bonusKey = `ai-briefing-${dateKey}`;

  const data = await loadLeaderboardFromSupabase(loadAnalytics());
  const leaderboard = ensureLeaderboardState(data);
  if (!leaderboard.traders[cleanWallet]) {
    leaderboard.traders[cleanWallet] = {
      points: 0,
      status: "0 wins, 0 losses",
      username: "",
      reported_points: 0,
      reported_status: "0 wins, 0 losses",
      first_activity_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  if (isSupabaseConfigured) {
    await supabaseRequest("profiles?on_conflict=wallet_address", {
      method: "POST",
      prefer: "resolution=merge-duplicates",
      body: [{
        wallet_address: cleanWallet,
        updated_at: new Date().toISOString()
      }]
    });

    await supabaseRequest("ai_briefing_unlocks?on_conflict=wallet_address,date_key,source_hash", {
      method: "POST",
      prefer: "resolution=ignore-duplicates",
      body: [{
        wallet_address: cleanWallet,
        date_key: dateKey,
        source_hash: sourceHash,
        tx_hash: String(txHash || "")
      }]
    });

    const unlockRows = await supabaseRequest(
      `ai_briefing_unlocks?wallet_address=eq.${encodeURIComponent(cleanWallet)}&date_key=eq.${encodeURIComponent(dateKey)}&select=source_hash`
    );
    const unlockCount = new Set((unlockRows || []).map((row) => row.source_hash)).size;
    const alreadyAwarded = Boolean(leaderboard.bonusEvents?.[cleanWallet]?.[bonusKey]);

    if (aiBriefingDailyBonusPoints > 0 && unlockCount >= aiBriefingDailyBonusUnlocks && !alreadyAwarded) {
      setLeaderboardBonus(data, cleanWallet, bonusKey, "ai_briefing_daily", aiBriefingDailyBonusPoints, {
        date_key: dateKey,
        unlock_count: unlockCount,
        required_unlocks: aiBriefingDailyBonusUnlocks
      });
      leaderboard.traders[cleanWallet].points = (Number(leaderboard.traders[cleanWallet].points) || 0) + aiBriefingDailyBonusPoints;
      leaderboard.traders[cleanWallet].updated_at = new Date().toISOString();
      await saveLeaderboardToSupabase(data);
      leaderboardCache.expiresAt = 0;
      leaderboardCache.analytics = null;
      return { awarded: true, points: aiBriefingDailyBonusPoints, unlockCount };
    }

    await saveLeaderboardToSupabase(data);
    return { awarded: false, points: 0, unlockCount };
  }

  const localUnlocks = data.leaderboard.aiBriefingUnlocks || {};
  data.leaderboard.aiBriefingUnlocks = localUnlocks;
  const localKey = `${cleanWallet}:${dateKey}`;
  localUnlocks[localKey] = Array.from(new Set([...(localUnlocks[localKey] || []), sourceHash]));
  const unlockCount = localUnlocks[localKey].length;
  const awarded = aiBriefingDailyBonusPoints > 0 && unlockCount >= aiBriefingDailyBonusUnlocks
    && setLeaderboardBonus(data, cleanWallet, bonusKey, "ai_briefing_daily", aiBriefingDailyBonusPoints, {
      date_key: dateKey,
      unlock_count: unlockCount,
      required_unlocks: aiBriefingDailyBonusUnlocks
    });
  if (awarded) {
    leaderboard.traders[cleanWallet].points = (Number(leaderboard.traders[cleanWallet].points) || 0) + aiBriefingDailyBonusPoints;
    leaderboard.traders[cleanWallet].updated_at = new Date().toISOString();
  }
  saveAnalytics(data);
  leaderboardCache.expiresAt = 0;
  leaderboardCache.analytics = null;
  return { awarded, points: awarded ? aiBriefingDailyBonusPoints : 0, unlockCount };
}

function getActiveMarkets() {
  const filePath = join(root, "data", "active_markets.json");
  if (!existsSync(filePath)) return [];
  try {
    const content = readFileSync(filePath, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Failed to parse active markets:", err);
    return [];
  }
}

function getMarketHistory() {
  const filePath = join(root, "data", "market_history.json");
  if (!existsSync(filePath)) return [];
  try {
    const content = readFileSync(filePath, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Failed to parse market history:", err);
    return [];
  }
}

function getKnownMarkets() {
  const byId = new Map();
  [...getMarketHistory(), ...getActiveMarkets()].forEach((market) => {
    if (market?.id) byId.set(market.id, market);
  });
  return Array.from(byId.values());
}

function getConfiguredMarketAddress(marketId) {
  return normalizeWalletAddress(marketAddresses[marketId] || "");
}

function getSeasonId() {
  return "season-1-world-cup-2026";
}

function getStoredDivisionAssignments(data, seasonId = getSeasonId()) {
  if (!data.leaderboard) data.leaderboard = {};
  if (!data.leaderboard.divisionAssignments) data.leaderboard.divisionAssignments = {};
  if (!data.leaderboard.divisionAssignments[seasonId]) data.leaderboard.divisionAssignments[seasonId] = {};
  return data.leaderboard.divisionAssignments[seasonId];
}

function buildSeasonDivisions(data, tradersList, seasonId = getSeasonId()) {
  const assignments = getStoredDivisionAssignments(data, seasonId);
  const eligibleTraders = tradersList.filter((trader) => !isAdminWallet(trader.username));
  const activeAddresses = new Set(eligibleTraders.map((trader) => trader.username));

  const assignedCounts = new Map();
  Object.entries(assignments).forEach(([address, divisionNumber]) => {
    const division = Math.max(1, Number(divisionNumber) || 1);
    assignments[address] = division;
    if (activeAddresses.has(address)) {
      assignedCounts.set(division, (assignedCounts.get(division) || 0) + 1);
    }
  });

  const unassigned = eligibleTraders.filter((trader) => !assignments[trader.username]);
  for (const trader of unassigned) {
    let divisionNumber = 1;
    while ((assignedCounts.get(divisionNumber) || 0) >= 6) divisionNumber += 1;
    assignments[trader.username] = divisionNumber;
    assignedCounts.set(divisionNumber, (assignedCounts.get(divisionNumber) || 0) + 1);
  }

  const grouped = new Map();
  eligibleTraders.forEach((trader) => {
    const divisionNumber = Math.max(1, Number(assignments[trader.username]) || 1);
    if (!grouped.has(divisionNumber)) grouped.set(divisionNumber, []);
    grouped.get(divisionNumber).push(trader);
  });

  const maxDivisionNumber = Math.max(1, ...Object.values(assignments).map((divisionNumber) => Math.max(1, Number(divisionNumber) || 1)));
  const divisions = Array.from({ length: maxDivisionNumber }, (_, index) => {
    const divisionNumber = index + 1;
    return (grouped.get(divisionNumber) || []).slice().sort(compareLeaderboardPlayers);
  });

  return { divisions, assignments };
}

function compareLeaderboardPlayers(a, b) {
  const aStatus = parseLeaderboardStatus(a.status);
  const bStatus = parseLeaderboardStatus(b.status);
  if (b.points !== a.points) return b.points - a.points;
  if (bStatus.wins !== aStatus.wins) return bStatus.wins - aStatus.wins;
  if (aStatus.losses !== bStatus.losses) return aStatus.losses - bStatus.losses;
  const aFirst = Date.parse(a.first_activity_at || a.updated_at || "") || Number.MAX_SAFE_INTEGER;
  const bFirst = Date.parse(b.first_activity_at || b.updated_at || "") || Number.MAX_SAFE_INTEGER;
  if (aFirst !== bFirst) return aFirst - bFirst;
  return String(a.username || "").localeCompare(String(b.username || ""));
}

function buildLeaderboardPlayers(data, walletAddress = "") {
  const migrationMap = getWalletMigrationMap(data);
  const migratedOldWallets = new Set(migrationMap.keys());
  const requestedWallet = canonicalLeaderboardAddress(data, walletAddress);
  const tradersMap = data.leaderboard?.traders || {};
  const playersByIdentity = new Map();
  const identityKey = (player) => {
    const displayName = String(player?.displayName || "").trim().toLowerCase();
    if (displayName && !/^0x[a-f0-9]{40}$/i.test(displayName)) return `name:${displayName}`;
    return `wallet:${String(player?.username || "").toLowerCase()}`;
  };
  const chooseBetterPlayer = (left, right) => compareLeaderboardPlayers(left, right) <= 0 ? left : right;
  Object.entries(tradersMap)
    .filter(([address]) => !isAdminWallet(address) && !migratedOldWallets.has(normalizeWalletAddress(address)))
    .map(([address, info]) => ({
      username: address,
      displayName: String(info.username || ""),
      points: Number(info.points) || 0,
      status: String(info.status || ""),
      first_activity_at: info.first_activity_at,
      updated_at: info.updated_at
    }))
    .forEach((player) => {
      const key = identityKey(player);
      if (!key || key === "wallet:") return;
      const existing = playersByIdentity.get(key);
      playersByIdentity.set(key, existing ? chooseBetterPlayer(existing, player) : player);
    });
  const players = Array.from(playersByIdentity.values());

  if (requestedWallet && !isAdminWallet(requestedWallet) && !players.some((player) => player.username === requestedWallet)) {
    players.push({
      username: requestedWallet,
      displayName: "",
      points: 0,
      status: "0 wins, 0 losses",
      first_activity_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  }

  return players.sort(compareLeaderboardPlayers);
}

function getWalletMigrationMap(data) {
  const migrationMap = new Map();
  const addMigration = (oldWalletAddress, newWalletAddress) => {
    const oldWallet = normalizeWalletAddress(oldWalletAddress);
    const newWallet = normalizeWalletAddress(newWalletAddress);
    if (!oldWallet || !newWallet || oldWallet === newWallet) return;
    migrationMap.set(oldWallet, newWallet);
  };

  Object.entries(data.leaderboard?.bonusEvents || {}).forEach(([walletAddress, events]) => {
    const newWallet = normalizeWalletAddress(walletAddress);
    Object.values(events || {}).forEach((event) => {
      if (String(event?.bonus_type || "") !== "wallet_migration") return;
      addMigration(event?.metadata?.old_wallet_address, event?.metadata?.new_wallet_address || newWallet);
    });
  });

  Object.values(loadBackendWalletMigrations()).forEach((entry) => {
    addMigration(entry?.oldWalletAddress, entry?.newWalletAddress);
  });

  return migrationMap;
}

function canonicalLeaderboardAddress(data, walletAddress) {
  const address = normalizeWalletAddress(walletAddress);
  if (!address) return "";
  return getWalletMigrationMap(data).get(address) || address;
}

function applyWalletMigrationAliases(data) {
  const leaderboard = ensureLeaderboardState(data);
  const migrationMap = getWalletMigrationMap(data);

  migrationMap.forEach((newWallet, oldWallet) => {
    const oldEntry = leaderboard.traders?.[oldWallet];
    const newEntry = leaderboard.traders?.[newWallet] || {};
    if (oldEntry && !leaderboard.traders[newWallet]) {
      leaderboard.traders[newWallet] = {
        ...oldEntry,
        updated_at: newEntry.updated_at || oldEntry.updated_at || new Date().toISOString()
      };
    }

    const oldResults = leaderboard.resolvedResults?.[oldWallet] || {};
    if (Object.keys(oldResults).length > 0) {
      leaderboard.resolvedResults[newWallet] = {
        ...oldResults,
        ...(leaderboard.resolvedResults?.[newWallet] || {})
      };
    }

    const oldBonus = leaderboard.bonusEvents?.[oldWallet] || {};
    if (Object.keys(oldBonus).length > 0) {
      leaderboard.bonusEvents[newWallet] = {
        ...oldBonus,
        ...(leaderboard.bonusEvents?.[newWallet] || {})
      };
    }

    delete leaderboard.traders[oldWallet];
    delete leaderboard.resolvedResults[oldWallet];
    delete leaderboard.bonusEvents[oldWallet];
  });
}

function ensureLeaderboardState(data) {
  if (!data.leaderboard) data.leaderboard = {};
  if (!data.leaderboard.traders) data.leaderboard.traders = {};
  if (!data.leaderboard.resolvedResults) data.leaderboard.resolvedResults = {};
  if (!data.leaderboard.bonusEvents) data.leaderboard.bonusEvents = {};
  if (!data.leaderboard.referrals) data.leaderboard.referrals = {};
  return data.leaderboard;
}

function scrubRolledBackLeaderboardState(data) {
  const leaderboard = ensureLeaderboardState(data);
  let changed = false;

  Object.values(leaderboard.resolvedResults || {}).forEach((resultsByMarket) => {
    if (!resultsByMarket || typeof resultsByMarket !== "object") return;
    rolledBackLeaderboardMarketIds.forEach((marketId) => {
      if (resultsByMarket[marketId]) {
        delete resultsByMarket[marketId];
        changed = true;
      }
    });
  });

  Object.values(leaderboard.bonusEvents || {}).forEach((events) => {
    if (!events || typeof events !== "object") return;
    Object.keys(events).forEach((bonusKey) => {
      for (const marketId of rolledBackLeaderboardMarketIds) {
        if (bonusKey.includes(marketId)) {
          delete events[bonusKey];
          changed = true;
          break;
        }
      }
    });
  });

  return changed;
}

function setLeaderboardBonus(data, walletAddress, bonusKey, bonusType, points, metadata = {}) {
  const address = normalizeWalletAddress(walletAddress);
  if (!address || isAdminWallet(address) || !bonusKey || points <= 0) return false;
  const leaderboard = ensureLeaderboardState(data);
  if (!leaderboard.bonusEvents[address]) leaderboard.bonusEvents[address] = {};
  if (leaderboard.bonusEvents[address][bonusKey]) return false;
  leaderboard.bonusEvents[address][bonusKey] = {
    season_id: getSeasonId(),
    bonus_type: String(bonusType || "bonus"),
    points: Math.max(0, Number(points) || 0),
    metadata,
    created_at: new Date().toISOString()
  };
  return true;
}

function getLeaderboardBonusPoints(data, walletAddress) {
  const address = normalizeWalletAddress(walletAddress);
  const events = data.leaderboard?.bonusEvents?.[address] || {};
  return Object.values(events).reduce((sum, event) => sum + (Number(event?.points) || 0), 0);
}

function applyCompensationChallengeBonuses(data) {
  if (compensationChallengeMarketIds.length === 0) return;
  const leaderboard = ensureLeaderboardState(data);

  Object.entries(leaderboard.resolvedResults || {}).forEach(([address, resultsByMarket]) => {
    const normalized = normalizeWalletAddress(address);
    if (!normalized || isAdminWallet(normalized)) return;
    const entries = compensationChallengeMarketIds
      .map((marketId) => resultsByMarket?.[marketId])
      .filter(Boolean);
    if (entries.length < compensationChallengeMarketIds.length) return;

    const wins = entries.filter((entry) => entry.result === "win").length;
    const points = wins >= 3
      ? compensationChallengeThreeOfThreePoints
      : wins >= 2
        ? compensationChallengeTwoOfThreePoints
        : 0;
    if (points <= 0) return;

    setLeaderboardBonus(data, normalized, compensationChallengeKey, "compensation_challenge", points, {
      wins,
      total: compensationChallengeMarketIds.length,
      market_ids: compensationChallengeMarketIds
    });
  });
}

function getReferralBonusUses(data, referrerWallet, referredWallet) {
  const referrer = normalizeWalletAddress(referrerWallet);
  const referred = normalizeWalletAddress(referredWallet);
  const events = data.leaderboard?.bonusEvents?.[referrer] || {};
  return Object.entries(events).filter(([bonusKey, event]) =>
    String(event?.bonus_type || "") === "referral_win"
    && (event?.metadata?.referred_wallet === referred || bonusKey.endsWith(`:${referred}`))
  ).length;
}

function marketLockCutoffMs(market) {
  const kickoffMs = Date.parse(market?.kickoffAt || "");
  if (Number.isFinite(kickoffMs)) return kickoffMs - 20 * 60 * 1000;
  return Number.POSITIVE_INFINITY;
}

function applyReferralWinBonuses(data) {
  if (referralWinBonusPoints <= 0 || referralWinBonusMaxRefsPerMarket <= 0 || referralWinBonusMaxUsesPerReferral <= 0) return;
  const leaderboard = ensureLeaderboardState(data);
  const dailyMarkets = getKnownMarkets().filter((market) => market?.timeframe === "Daily" && market?.id);

  Object.entries(leaderboard.referrals || {}).forEach(([referrerWallet, referrals]) => {
    const referrer = normalizeWalletAddress(referrerWallet);
    if (!referrer || isAdminWallet(referrer)) return;
    const referrerResults = leaderboard.resolvedResults?.[referrer] || {};

    dailyMarkets.forEach((market) => {
      const referrerResult = referrerResults[market.id];
      if (referrerResult?.result !== "win") return;

      const cutoffMs = marketLockCutoffMs(market);
      const qualifyingReferrals = Object.entries(referrals || {}).filter(([referredWallet, relationship]) => {
        const referred = normalizeWalletAddress(referredWallet);
        if (!referred || referred === referrer || isAdminWallet(referred)) return false;
        const joinedMs = Date.parse(relationship?.created_at || "") || Date.now();
        if (joinedMs > cutoffMs) return false;
        if ((leaderboard.resolvedResults?.[referred] || {})[market.id]?.result !== "win") return false;
        return getReferralBonusUses(data, referrer, referred) < referralWinBonusMaxUsesPerReferral;
      }).sort(([, a], [, b]) => {
        const aJoined = Date.parse(a?.created_at || "") || Number.MAX_SAFE_INTEGER;
        const bJoined = Date.parse(b?.created_at || "") || Number.MAX_SAFE_INTEGER;
        return aJoined - bJoined;
      }).slice(0, referralWinBonusMaxRefsPerMarket);

      qualifyingReferrals.forEach(([referredWallet]) => {
        const referred = normalizeWalletAddress(referredWallet);
        const bonusKey = `referral-win:${market.id}:${referred}`;
        setLeaderboardBonus(data, referrer, bonusKey, "referral_win", referralWinBonusPoints, {
          market_id: market.id,
          referred_wallet: referred,
          max_uses: referralWinBonusMaxUsesPerReferral
        });
      });
    });
  });
}

function logMemoryUsage(label) {
  if (!enableMemoryDebugLogs) return;
  const usage = process.memoryUsage();
  const formatMb = (value) => `${Math.round((Number(value) / 1024 / 1024) * 10) / 10}MB`;
  console.log(`[MEMORY] ${label} heapUsed=${formatMb(usage.heapUsed)} rss=${formatMb(usage.rss)} ext=${formatMb(usage.external)}`);
}

async function mapInBatches(items, batchSize, iteratee) {
  const results = [];
  for (let index = 0; index < items.length; index += batchSize) {
    const batch = items.slice(index, index + batchSize);
    const batchResults = await Promise.all(batch.map(iteratee));
    results.push(...batchResults);
  }
  return results;
}

function cloneTradeSignals(signals) {
  return {
    traders: new Set(signals.traders || []),
    switched: new Set(signals.switched || []),
    redeemed: new Set(signals.redeemed || []),
    firstActivityBlocks: new Map(signals.firstActivityBlocks || [])
  };
}

async function collectMarketTradeSignals(marketAddress, fromBlockHint = null) {
  const cacheKey = `${normalizeWalletAddress(marketAddress) || marketAddress}:${Number(fromBlockHint) || 0}`;
  const cached = leaderboardMarketSignalCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return cloneTradeSignals(cached.signals);
  }

  const traders = new Set();
  const boughtYes = new Set();
  const boughtNo = new Set();
  const redeemed = new Set();
  const firstActivityBlocks = new Map();

  const processLogsChunked = async (topic, onLog) => {
    const latest = await leaderboardProvider.getBlockNumber();
    const safeChunk = leaderboardLogChunkSize;
    const lookback = leaderboardLogLookbackBlocks;
    const hintedStart = Number(fromBlockHint);
    const start = Number.isFinite(hintedStart) && hintedStart > 0
      ? Math.max(0, hintedStart)
      : Math.max(0, latest - lookback);

    for (let fromBlock = start; fromBlock <= latest; fromBlock += safeChunk) {
      const toBlock = Math.min(fromBlock + safeChunk - 1, latest);
      const logs = await leaderboardProvider.getLogs({
        address: marketAddress,
        topics: [topic],
        fromBlock,
        toBlock
      });
      for (const log of logs) {
        onLog(log);
      }
    }
  };

  try {
    await processLogsChunked(sharesBoughtTopic, (log) => {
      try {
        const parsed = leaderboardMarketInterface.parseLog(log);
        const buyer = normalizeWalletAddress(parsed.args.buyer);
        if (!buyer) return;
        traders.add(buyer);
        const blockNumber = Number(log.blockNumber) || 0;
        if (blockNumber > 0) {
          const previous = firstActivityBlocks.get(buyer);
          if (!previous || blockNumber < previous) firstActivityBlocks.set(buyer, blockNumber);
        }
        const isYes = Boolean(parsed.args.yes);
        if (isYes) boughtYes.add(buyer);
        else boughtNo.add(buyer);
      } catch {}
    });
  } catch (err) {
    console.warn(`[LEADERBOARD] Failed to read SharesBought logs for ${marketAddress}:`, err.message);
  }

  try {
    await processLogsChunked(redeemedTopic, (log) => {
      try {
        const parsed = leaderboardMarketInterface.parseLog(log);
        const account = normalizeWalletAddress(parsed.args.account);
        if (!account) return;
        traders.add(account);
        redeemed.add(account);
      } catch {}
    });
  } catch (err) {
    console.warn(`[LEADERBOARD] Failed to read Redeemed logs for ${marketAddress}:`, err.message);
  }

  const switched = new Set();
  boughtYes.forEach((address) => {
    if (boughtNo.has(address)) switched.add(address);
  });

  const signals = { traders, switched, redeemed, firstActivityBlocks };
  leaderboardMarketSignalCache.set(cacheKey, {
    expiresAt: Date.now() + leaderboardMarketSignalCacheMs,
    signals: cloneTradeSignals(signals)
  });
  return signals;
}

function getFastMarketsWithCachedCounts() {
  const cachedById = new Map((marketListCache.markets || []).map((market) => [market.id, market]));
  return getActiveMarkets().map((market) => {
    const marketAddress = normalizeWalletAddress(market.marketAddress) || getConfiguredMarketAddress(market.id);
    const cached = cachedById.get(market.id);
    return {
      ...market,
      ...(marketAddress ? { marketAddress } : {}),
      ...(market.optionMarket && cached?.resolvedOptionId ? {
        resolvedOptionId: cached.resolvedOptionId,
        outcome: 1,
        optionPools: cached.optionPools,
        volumeUsdc: cached.volumeUsdc
      } : {}),
      ...(cached?.traderCount !== undefined ? {
        traderCount: cached.traderCount,
        traders: cached.traders
      } : {})
    };
  });
}

async function refreshMarketListCache() {
  if (marketListCache.refreshPromise) return marketListCache.refreshPromise;

  marketListCache.refreshPromise = (async () => {
    const data = loadAnalytics();
    const enrichedMarkets = [];
    for (const market of getActiveMarkets()) {
      const marketAddress = normalizeWalletAddress(market.marketAddress) || getConfiguredMarketAddress(market.id);
      let optionState = null;
      if (market.optionMarket) {
        try {
          optionState = await loadOptionMarketStateFromSupabase(data, market);
        } catch {
          optionState = data;
        }
      }
      const publicOptionSnapshot = optionState && market.optionMarket
        ? readOptionMarketStateFromData(optionState, "", market).snapshot
        : null;
      if (!marketAddress || isLocalTestMarketAddress(marketAddress)) {
        enrichedMarkets.push({
          ...market,
          ...(publicOptionSnapshot ? {
            resolvedOptionId: publicOptionSnapshot.resolvedOptionId || null,
            outcome: publicOptionSnapshot.outcome || 0,
            optionPools: publicOptionSnapshot.optionPools,
            volumeUsdc: publicOptionSnapshot.volumeUsdc
          } : {})
        });
        continue;
      }

      try {
        const { traders } = await collectMarketTradeSignals(marketAddress, market.deploymentBlock);
        const traderCount = traders.size;
        enrichedMarkets.push({
          ...market,
          marketAddress,
          ...(publicOptionSnapshot ? {
            resolvedOptionId: publicOptionSnapshot.resolvedOptionId || null,
            outcome: publicOptionSnapshot.outcome || 0,
            optionPools: publicOptionSnapshot.optionPools,
            volumeUsdc: publicOptionSnapshot.volumeUsdc
          } : {}),
          traderCount,
          traders: traderCount > 0 ? String(traderCount) : String(market.traders || "0")
        });
      } catch {
        enrichedMarkets.push({
          ...market,
          marketAddress,
          ...(publicOptionSnapshot ? {
            resolvedOptionId: publicOptionSnapshot.resolvedOptionId || null,
            outcome: publicOptionSnapshot.outcome || 0,
            optionPools: publicOptionSnapshot.optionPools,
            volumeUsdc: publicOptionSnapshot.volumeUsdc
          } : {})
        });
      }
    }

    marketListCache.markets = enrichedMarkets;
    marketListCache.expiresAt = Date.now() + marketListCacheMs;
    return enrichedMarkets;
  })().finally(() => {
    marketListCache.refreshPromise = null;
  });

  return marketListCache.refreshPromise;
}

async function recomputeLeaderboardFromChain(data) {
  logMemoryUsage("leaderboard recompute start");
  const leaderboard = ensureLeaderboardState(data);
  applyWalletMigrationAliases(data);
  const migrationMap = getWalletMigrationMap(data);
  const canonicalAddress = (address) => migrationMap.get(normalizeWalletAddress(address)) || normalizeWalletAddress(address);
  const tradersMap = leaderboard.traders;
  const resolvedResults = leaderboard.resolvedResults;

  const dailyMarkets = getKnownMarkets().filter((market) => {
    const marketAddress = normalizeWalletAddress(market.marketAddress) || getConfiguredMarketAddress(market.id);
    return market.timeframe === "Daily" && Boolean(marketAddress);
  });

  const allTraders = new Set(
    Object.keys(tradersMap)
      .map(canonicalAddress)
      .filter(Boolean)
  );

  for (const market of dailyMarkets) {
    const marketAddress = normalizeWalletAddress(market.marketAddress) || getConfiguredMarketAddress(market.id);
    if (!marketAddress) continue;

    // Local mock market is browser-local state, not an on-chain contract.
    if (isLocalTestMarketAddress(marketAddress)) continue;

    const marketId = String(market.id || "").trim();
    if (!marketId) continue;

    logMemoryUsage(`before trade signals ${marketId}`);
    const { traders, switched, redeemed, firstActivityBlocks } = await collectMarketTradeSignals(marketAddress, market.deploymentBlock);
    allTraders.forEach((address) => traders.add(address));
    traders.forEach((address) => allTraders.add(canonicalAddress(address)));

    let outcome = 0;
    try {
      const contract = new Contract(marketAddress, LEADERBOARD_MARKET_ABI, leaderboardProvider);
      outcome = Number(await contract.outcome()) || 0;

      if (outcome === 0) continue;

      const firstActivityEntries = Array.from(firstActivityBlocks.entries());
      if (firstActivityEntries.length > 0) {
        const blockNumbers = Array.from(new Set(firstActivityEntries.map(([, blockNumber]) => blockNumber).filter(Boolean)));
        const blockTimes = new Map();
        await Promise.all(blockNumbers.map(async (blockNumber) => {
          try {
            const block = await leaderboardProvider.getBlock(blockNumber);
            if (block?.timestamp) blockTimes.set(blockNumber, new Date(Number(block.timestamp) * 1000).toISOString());
          } catch {}
        }));
        firstActivityEntries.forEach(([address, blockNumber]) => {
          const canonical = canonicalAddress(address);
          if (!canonical) return;
          const firstActivityAt = blockTimes.get(blockNumber);
          if (!firstActivityAt) return;
          const existing = tradersMap[canonical] || {};
          const existingFirst = Date.parse(existing.first_activity_at || "") || Number.MAX_SAFE_INTEGER;
          const candidateFirst = Date.parse(firstActivityAt) || Number.MAX_SAFE_INTEGER;
          if (candidateFirst < existingFirst) {
            tradersMap[canonical] = {
              ...existing,
              first_activity_at: firstActivityAt
            };
          }
        });
      }

      const traderList = Array.from(traders);
      const positions = await mapInBatches(traderList, leaderboardPositionBatchSize, async (address) => {
          try {
            const [yesRaw, noRaw] = await Promise.all([
              contract.yesShares(address),
              contract.noShares(address)
            ]);
            return {
              address,
              yesSharesUsdc: Number(formatUnits(yesRaw, 6)),
              noSharesUsdc: Number(formatUnits(noRaw, 6))
            };
          } catch {
            return { address, yesSharesUsdc: 0, noSharesUsdc: 0 };
          }
        }
      );

      for (const position of positions) {
        const address = position.address;
        const resultAddress = canonicalAddress(address);
        if (!resultAddress) continue;
        if (!resolvedResults[resultAddress]) resolvedResults[resultAddress] = {};
        if (resolvedResults[resultAddress][marketId]) continue;

        const hasPosition = position.yesSharesUsdc > 0 || position.noSharesUsdc > 0;
        const hasSwitched = switched.has(address);

        if (outcome === 1 && position.yesSharesUsdc > 0) {
          resolvedResults[resultAddress][marketId] = { result: "win", points: hasSwitched ? 50 : 100 };
        } else if (outcome === 2 && position.noSharesUsdc > 0) {
          resolvedResults[resultAddress][marketId] = { result: "win", points: hasSwitched ? 50 : 100 };
        } else if ((outcome === 1 || outcome === 2) && redeemed.has(address)) {
          resolvedResults[resultAddress][marketId] = { result: "win", points: hasSwitched ? 50 : 100 };
        } else if (hasPosition) {
          resolvedResults[resultAddress][marketId] = { result: "loss", points: 0 };
        }
      }

      // Handle traders who already redeemed winning shares before current position reads.
      if (outcome === 1 || outcome === 2) {
        redeemed.forEach((address) => {
          const resultAddress = canonicalAddress(address);
          if (!resultAddress) return;
          if (!resolvedResults[resultAddress]) resolvedResults[resultAddress] = {};
          if (!resolvedResults[resultAddress][marketId]) {
            resolvedResults[resultAddress][marketId] = {
              result: "win",
              points: switched.has(address) ? 50 : 100
            };
          }
        });
      }
    } catch (err) {
      const message = String(err?.message || err || "");
      if (/BAD_DATA|could not decode result data|missing revert data/i.test(message)) {
        continue;
      }
      console.warn(`[LEADERBOARD] Failed to recompute market ${marketId}:`, message);
    }
    logMemoryUsage(`after market ${marketId}`);
  }

  Object.keys(resolvedResults).forEach((address) => {
    const normalized = canonicalAddress(address);
    if (normalized) allTraders.add(normalized);
  });

  applyCompensationChallengeBonuses(data);
  applyReferralWinBonuses(data);
  Object.keys(leaderboard.bonusEvents || {}).forEach((address) => {
    const normalized = canonicalAddress(address);
    if (normalized) allTraders.add(normalized);
  });

  applyWalletMigrationAliases(data);
  migrationMap.forEach((newWallet, oldWallet) => {
    allTraders.delete(oldWallet);
    allTraders.add(newWallet);
  });

  const nowIso = new Date().toISOString();
  allTraders.forEach((address) => {
    if (isAdminWallet(address)) return;

    const resultsByMarket = resolvedResults[address] || {};
    const resolvedCount = Object.keys(resultsByMarket).length;
    let points = 0;
    let wins = 0;
    let losses = 0;

    Object.values(resultsByMarket).forEach((entry) => {
      if (!entry || typeof entry !== "object") return;
      if (entry.result === "win") {
        wins += 1;
        points += Number(entry.points) || 0;
      } else if (entry.result === "loss") {
        losses += 1;
      }
    });

    const existing = tradersMap[address] || {};
    const fallbackPoints = Number(existing.reported_points) || 0;
    const fallbackStatus = String(existing.reported_status || existing.status || "0 wins, 0 losses");
    const useFallback = allowClientLeaderboardFallback && resolvedCount === 0;
    const bonusPoints = getLeaderboardBonusPoints(data, address);

    tradersMap[address] = {
      points: useFallback ? fallbackPoints : points + bonusPoints,
      status: useFallback
        ? fallbackStatus
        : `${wins} win${wins === 1 ? "" : "s"}, ${losses} loss${losses === 1 ? "" : "es"}`,
      username: String(existing.username || ""),
      reported_points: fallbackPoints,
      reported_status: fallbackStatus,
      first_activity_at: existing.first_activity_at || existing.updated_at || nowIso,
      updated_at: nowIso
    };
  });

  leaderboard.lastComputedAt = nowIso;
  logMemoryUsage("leaderboard recompute end");
}

async function refreshLeaderboardAnalyticsInBackground() {
  if (leaderboardRefreshPromise) return leaderboardRefreshPromise;

  leaderboardRefreshPromise = (async () => {
    const data = loadAnalytics();
    await loadLeaderboardFromSupabase(data);
    await loadReferralRelationshipsFromSupabase(data);
    try {
      await recomputeLeaderboardFromChain(data);
      saveAnalytics(data);
      await saveLeaderboardToSupabase(data);
    } catch (err) {
      console.error("[LEADERBOARD] Recompute failed:", err);
    }

    leaderboardCache = {
      analytics: data,
      expiresAt: Date.now() + leaderboardCacheMs
    };

    return data;
  })().finally(() => {
    leaderboardRefreshPromise = null;
  });

  return leaderboardRefreshPromise;
}

async function getLeaderboardAnalyticsFresh() {
  const now = Date.now();
  if (leaderboardCache.analytics && leaderboardCache.expiresAt > now) {
    return leaderboardCache.analytics;
  }

  const data = loadAnalytics();
  await loadLeaderboardFromSupabase(data);
  await loadReferralRelationshipsFromSupabase(data);

  leaderboardCache = {
    analytics: data,
    expiresAt: Date.now() + leaderboardCacheMs
  };

  void refreshLeaderboardAnalyticsInBackground().catch((err) => {
    console.error("[LEADERBOARD] Background refresh failed:", err);
  });

  return data;
}

function trackAnalyticsEvent(event, email = null) {
  const cleanEvent = String(event || "").trim();
  if (!analyticsEventKeys.includes(cleanEvent)) {
    return Promise.resolve({ saved: false, skipped: true });
  }

  const data = normalizeAnalytics(loadAnalytics());

  if (cleanEvent === "sign_up") {
    if (email) {
      const cleanEmail = email.toLowerCase().trim();
      if (data.emails.includes(cleanEmail)) {
        return Promise.resolve({ saved: false, duplicate: true }); // Already signed up
      }
      data.emails.push(cleanEmail);
    }
  }

  data.totals[cleanEvent] = (data.totals[cleanEvent] || 0) + 1;

  const dateKey = getTodayKey();
  if (!data.daily[dateKey]) {
    data.daily[dateKey] = createEmptyAnalyticsCounts();
  }
  data.daily[dateKey][cleanEvent] = (data.daily[dateKey][cleanEvent] || 0) + 1;

  saveAnalytics(data);
  return incrementAnalyticsEventInSupabase(cleanEvent, email);
}

function getAnalyticsHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Siftle Analytics Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #090b11;
      --card-bg: rgba(255, 255, 255, 0.03);
      --card-border: rgba(255, 255, 255, 0.08);
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --primary: #4f46e5;
      --primary-glow: rgba(79, 70, 229, 0.15);
      --teal: #0d9488;
      --teal-glow: rgba(13, 148, 136, 0.15);
      --violet: #7c3aed;
      --violet-glow: rgba(124, 58, 237, 0.15);
      --pink: #db2777;
      --pink-glow: rgba(219, 39, 119, 0.15);
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      background-color: var(--bg);
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(13, 148, 136, 0.08) 0%, transparent 40%),
        linear-gradient(135deg, #07090e 0%, #0d111d 100%);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
      padding: 2rem 1.5rem;
    }

    .dashboard-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--card-border);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.75rem;
      font-weight: 700;
      background: linear-gradient(to right, #818cf8, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .btn-refresh {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--card-border);
      color: var(--text);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.2s ease;
      backdrop-filter: blur(8px);
    }

    .btn-refresh:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .btn-back {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .btn-back:hover {
      color: var(--text);
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      background: rgba(45, 212, 191, 0.1);
      border: 1px solid rgba(45, 212, 191, 0.2);
      color: #2dd4bf;
      padding: 0.25rem 0.625rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      background-color: #2dd4bf;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.7); }
      70% { box-shadow: 0 0 0 6px rgba(45, 212, 191, 0); }
      100% { box-shadow: 0 0 0 0 rgba(45, 212, 191, 0); }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--accent);
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.5), 0 0 20px 0 var(--accent-glow);
      border-color: rgba(255, 255, 255, 0.15);
    }

    .card.opens { --accent: var(--primary); --accent-glow: var(--primary-glow); }
    .card.summaries { --accent: var(--teal); --accent-glow: var(--teal-glow); }
    .card.clicks { --accent: var(--violet); --accent-glow: var(--violet-glow); }
    .card.signups { --accent: var(--pink); --accent-glow: var(--pink-glow); }

    .card-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .card-value {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--text);
    }

    .card-footer {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-top: 0.5rem;
    }

    .ratios-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .ratio-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .ratio-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .ratio-title {
      font-weight: 600;
      color: var(--text);
      font-size: 1rem;
    }

    .ratio-value {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #2dd4bf;
    }

    .progress-bar-container {
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 9999px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background: linear-gradient(to right, #4f46e5, #2dd4bf);
      border-radius: 9999px;
      width: 0%;
      transition: width 1s ease-out;
    }

    .ratio-desc {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .table-container {
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 1.5rem;
      overflow-x: auto;
    }

    .table-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    th {
      padding: 0.75rem 1rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      border-bottom: 1px solid var(--card-border);
    }

    td {
      padding: 1rem;
      font-size: 0.9rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }

    tr:hover td {
      background: rgba(255, 255, 255, 0.01);
    }

    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4rem 0;
      color: var(--text-muted);
      font-weight: 500;
    }

    .spinner {
      border: 3px solid rgba(255, 255, 255, 0.05);
      border-top: 3px solid #4f46e5;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      animation: spin 1s linear infinite;
      margin-right: 0.75rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="dashboard-container">
    <header>
      <div class="brand">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #2dd4bf; background: rgba(45, 212, 191, 0.1); padding: 6px; border-radius: 10px; border: 1px solid rgba(45, 212, 191, 0.2);"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
        <h1>Siftle Analytics</h1>
        <span class="status-badge">
          <span class="status-dot"></span>
          Live
        </span>
      </div>
      <div class="header-actions">
        <a href="/" class="btn-back">← Back to App</a>
        <button class="btn-refresh" id="refreshBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          Refresh
        </button>
      </div>
    </header>

    <div class="stats-grid">
      <div class="card opens">
        <span class="card-label">App Opens</span>
        <span class="card-value" id="valOpens">-</span>
        <span class="card-footer">Total page views loaded</span>
      </div>
      <div class="card summaries">
        <span class="card-label">Briefing Wallets Today</span>
        <span class="card-value" id="valSummaries">-</span>
        <span class="card-footer">Different wallets that unlocked briefing today</span>
      </div>
      <div class="card clicks">
        <span class="card-label">Trades</span>
        <span class="card-value" id="valClicks">-</span>
        <span class="card-footer">Successful buys and exits</span>
      </div>
      <div class="card signups">
        <span class="card-label">USDC Signups</span>
        <span class="card-value" id="valSignups">-</span>
        <span class="card-footer">Unique signup emails across wallet flows</span>
      </div>
    </div>

    <div class="ratios-grid">
      <div class="ratio-card">
        <div class="ratio-header">
          <span class="ratio-title">USDC Signup Rate</span>
          <span class="ratio-value" id="ratioSignup">-</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" id="barSignup"></div>
        </div>
        <span class="ratio-desc">Percentage of page views that start or complete a wallet onboarding.</span>
      </div>
      <div class="ratio-card">
        <div class="ratio-header">
          <span class="ratio-title">Briefing Completion</span>
          <span class="ratio-value" id="ratioSummary">-</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" id="barSummary"></div>
        </div>
        <span class="ratio-desc">Percentage of briefing unlock attempts that complete successfully.</span>
      </div>
      <div class="ratio-card">
        <div class="ratio-header">
          <span class="ratio-title">Trade Success Rate</span>
          <span class="ratio-value" id="ratioClick">-</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" id="barClick"></div>
        </div>
        <span class="ratio-desc">Percentage of submitted trades that confirm successfully.</span>
      </div>
    </div>

    <div class="table-container">
      <div class="table-title">Daily Breakdown</div>
      <div id="loadingBreakdown" class="loading-container">
        <div class="spinner"></div>
        Loading metrics...
      </div>
      <table id="breakdownTable" style="display: none;">
        <thead>
          <tr>
            <th>Date</th>
            <th>App Opens</th>
            <th>Signups</th>
            <th>Briefing Wallets</th>
            <th>Trade Attempts</th>
            <th>Trades</th>
            <th>Claims</th>
            <th>Briefing Unlocks</th>
            <th>Briefing Views</th>
            <th>Source Clicks</th>
            <th>Errors</th>
          </tr>
        </thead>
        <tbody id="breakdownBody"></tbody>
      </table>
    </div>
  </div>

  <script>
    async function loadData() {
      const loading = document.getElementById('loadingBreakdown');
      const table = document.getElementById('breakdownTable');
      
      try {
        const res = await fetch('/api/analytics/report');
        if (!res.ok) throw new Error('API request failed');
        const data = await res.json();

        const daily = data.daily || {};
        const derived = data.derived || {};
        const signupByDate = derived.signupsByDate || {};
        const aiWalletsByDate = derived.aiBriefingWalletsByDate || {};
        const eventKeys = [
          'app_open',
          'wallet_connect_start',
          'wallet_connect_success',
          'wallet_connect_failed',
          'sign_up',
          'market_view',
          'trade_drawer_open',
          'trade_attempt',
          'trade_buy_success',
          'trade_sell_success',
          'trade_failed',
          'claim_attempt',
          'claim_success',
          'claim_failed',
          'ai_unlock_attempt',
          'ai_unlock_success',
          'ai_unlock_failed',
          'view_summary',
          'open_source'
        ];
        const dailyTotals = Object.values(daily).reduce((acc, row) => {
          eventKeys.forEach((key) => {
            acc[key] = (acc[key] || 0) + (Number(row?.[key]) || 0);
          });
          return acc;
        }, {});
        const rawTotals = data.totals || {};
        const hasDailyRows = Object.keys(daily).length > 0;
        const totals = eventKeys.reduce((acc, key) => {
          acc[key] = hasDailyRows ? (Number(dailyTotals[key]) || 0) : (Number(rawTotals[key]) || 0);
          return acc;
        }, {});
        const tradeSuccesses = (totals.trade_buy_success || 0) + (totals.trade_sell_success || 0);
        const aiUnlocks = totals.ai_unlock_success || 0;
        const claims = totals.claim_success || 0;
        const uniqueSignups = Number(derived.signupsTotalUnique ?? totals.sign_up ?? 0);
        const aiWalletsToday = Number(derived.aiBriefingWalletsToday ?? 0);
        const aiWalletsTotal = Number(derived.aiBriefingWalletsTotalUnique ?? 0);
        
        document.getElementById('valOpens').textContent = (totals.app_open || 0).toLocaleString();
        document.getElementById('valSummaries').textContent = aiWalletsToday.toLocaleString();
        document.getElementById('valClicks').textContent = tradeSuccesses.toLocaleString();
        document.getElementById('valSignups').textContent = uniqueSignups.toLocaleString();
        
        const opens = totals.app_open || 1;
        const signupRate = (uniqueSignups / opens) * 100;
        const aiOutcomeTotal = (totals.ai_unlock_success || 0) + (totals.ai_unlock_failed || 0);
        const tradeOutcomeTotal = tradeSuccesses + (totals.trade_failed || 0);
        const summaryRate = ((totals.ai_unlock_success || 0) / Math.max(1, aiOutcomeTotal)) * 100;
        const clickRate = ((tradeSuccesses || 0) / Math.max(1, tradeOutcomeTotal)) * 100;
        
        document.getElementById('ratioSignup').textContent = signupRate.toFixed(1) + '%';
        document.getElementById('ratioSummary').textContent = summaryRate.toFixed(1) + '%';
        document.getElementById('ratioClick').textContent = clickRate.toFixed(1) + '%';
        
        document.getElementById('barSignup').style.width = Math.min(signupRate, 100) + '%';
        document.getElementById('barSummary').style.width = Math.min(summaryRate, 100) + '%';
        document.getElementById('barClick').style.width = Math.min(clickRate, 100) + '%';

        const extraMetrics = [
          ['Unique Signups', uniqueSignups],
          ['Briefing Wallets Total', aiWalletsTotal],
          ['Wallet Starts', totals.wallet_connect_start],
          ['Wallet Success', totals.wallet_connect_success],
          ['Trade Attempts', totals.trade_attempt],
          ['Trade Success', tradeSuccesses],
          ['Trade Fails', totals.trade_failed],
          ['Claim Attempts', totals.claim_attempt],
          ['Claims', claims],
          ['Briefing Unlock Attempts', totals.ai_unlock_attempt],
          ['Briefing Unlocks', aiUnlocks],
          ['Briefing Views', totals.view_summary],
          ['Source Clicks', totals.open_source],
          ['Wallet Fails', totals.wallet_connect_failed],
          ['Claim Fails', totals.claim_failed],
          ['Briefing Fails', totals.ai_unlock_failed]
        ];
        const cards = document.querySelector('.stats-grid');
        document.querySelectorAll('.analytics-extra-card').forEach((node) => node.remove());
        extraMetrics.forEach(([label, value]) => {
          const card = document.createElement('div');
          card.className = 'card analytics-extra-card';
          card.innerHTML = '<span class="card-label">' + label + '</span><span class="card-value">' + (Number(value) || 0).toLocaleString() + '</span><span class="card-footer">Tracked product event</span>';
          cards.appendChild(card);
        });
        
        const tbody = document.getElementById('breakdownBody');
        tbody.innerHTML = '';
        const sortedDates = Object.keys(daily).sort((a, b) => b.localeCompare(a));
        
        if (sortedDates.length === 0) {
          tbody.innerHTML = '<tr><td colspan="11" style="text-align: center; color: var(--text-muted); padding: 2rem;">No entries logged yet.</td></tr>';
        } else {
          sortedDates.forEach(date => {
            const row = daily[date];
            const rowTradeSuccesses = (row.trade_buy_success || 0) + (row.trade_sell_success || 0);
            const rowSignups = Number(signupByDate[date] ?? row.sign_up ?? 0);
            const rowAiWallets = Number(aiWalletsByDate[date] ?? 0);
            const tr = document.createElement('tr');
            tr.innerHTML = \`
              <td><strong>\${date}</strong></td>
              <td>\${(row.app_open || 0).toLocaleString()}</td>
              <td>\${rowSignups.toLocaleString()}</td>
              <td>\${rowAiWallets.toLocaleString()}</td>
              <td>\${(row.trade_attempt || 0).toLocaleString()}</td>
              <td>\${rowTradeSuccesses.toLocaleString()}</td>
              <td>\${(row.claim_success || 0).toLocaleString()}</td>
              <td>\${(row.ai_unlock_success || 0).toLocaleString()}</td>
              <td>\${(row.view_summary || 0).toLocaleString()}</td>
              <td>\${(row.open_source || 0).toLocaleString()}</td>
              <td>\${((row.wallet_connect_failed || 0) + (row.trade_failed || 0) + (row.claim_failed || 0) + (row.ai_unlock_failed || 0)).toLocaleString()}</td>
            \`;
            tbody.appendChild(tr);
          });
        }
        
        loading.style.display = 'none';
        table.style.display = 'table';
      } catch (err) {
        console.error(err);
        loading.textContent = 'Failed to load analytics data: ' + err.message;
        loading.style.color = '#ef4444';
      }
    }
    
    document.getElementById('refreshBtn').addEventListener('click', () => {
      document.getElementById('loadingBreakdown').style.display = 'flex';
      document.getElementById('breakdownTable').style.display = 'none';
      loadData();
    });
    
    loadData();
  </script>
</body>
</html>`;
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host}`);

  if (request.method === "OPTIONS") {
    response.writeHead(204, getCorsHeaders());
    response.end();
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/config" && request.method === "GET") {
    sendJson(response, 200, {
      enabled: backendWalletMode,
      localOnly: backendWalletLocalOnly,
      manualFundingRequired: !backendWalletUseX402 && !x402AutoDepositUsdc,
      aiBriefingUnlockUsdc: backendWalletUseX402 ? x402PriceUsdc : aiBriefingUnlockUsdc,
      x402Enabled: backendWalletUseX402,
      x402TargetUrl: x402TargetUrlBase
    });
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/auth/request-code" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const email = normalizeEmail(body.email);
      if (!email || !email.includes("@")) {
        sendJson(response, 400, { error: "Valid email address is required" });
        return;
      }
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      writeVerificationCode(email, code);
      await sendVerificationCodeEmail(email, code);
      sendJson(response, 200, { success: true });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/auth" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const email = normalizeEmail(body.email);
      const code = String(body.code || "").trim();
      if (!email || !email.includes("@")) {
        sendJson(response, 400, { error: "Valid email address is required" });
        return;
      }
      if (!code) {
        sendJson(response, 400, { error: "Verification code is required" });
        return;
      }
      if (!verifyCode(email, code)) {
        sendJson(response, 401, { error: "Invalid or expired verification code" });
        return;
      }

      const user = await getOrCreateBackendWalletUser(email);
      if (user?.isNewSignup) {
        try {
          await trackAnalyticsEvent("sign_up", email);
        } catch (err) {
          console.error("Failed to track backend-wallet sign_up event:", err);
        }
      }
      const token = await issueBackendWalletSession(email);
      warmGatewayBalanceInBackground(user.privateKey, backendWalletUseX402 ? x402PriceUsdc : aiBriefingUnlockUsdc);
      const migrationPreview = await buildMigrationPreview(email, user.address);
      const migration = backendWalletMigrationAutoClaim && migrationPreview.eligible
        ? await applyBackendWalletMigration(email, user.address)
        : null;
      const usdc = new Contract(ARC_TESTNET_USDC, BACKEND_WALLET_ERC20_ABI, leaderboardProvider);
      const balanceRaw = await usdc.balanceOf(user.address);
      sendJson(response, 200, {
        sessionToken: token,
        email,
        walletAddress: user.address,
        walletBalance: formatUnits(balanceRaw, 6),
        backendWalletMode: true,
        requiresManualFunding: true,
        gatewayWarmupStarted: backendWalletUseX402,
        migrationEnabled: backendWalletMigrationEnabled,
        migrationPreview,
        migration
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/session" && request.method === "GET") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const token = String(requestUrl.searchParams.get("token") || "");
      const user = await getBackendWalletUserBySession(token);
      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }

      const usdc = new Contract(ARC_TESTNET_USDC, BACKEND_WALLET_ERC20_ABI, leaderboardProvider);
      const balanceRaw = await usdc.balanceOf(user.address);
      sendJson(response, 200, {
        email: user.email,
        walletAddress: user.address,
        walletBalance: formatUnits(balanceRaw, 6),
        backendWalletMode: true,
        migrationEnabled: backendWalletMigrationEnabled
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/warmup" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const sessionToken = String(body.sessionToken || "");
      const user = await getBackendWalletUserBySession(sessionToken);
      if (!user) {
        sendJson(response, 401, { error: "Session expired" });
        return;
      }
      warmGatewayBalanceInBackground(user.privateKey, aiBriefingUnlockUsdc);
      sendJson(response, 200, { success: true });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/migration/status" && request.method === "GET") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const token = String(requestUrl.searchParams.get("token") || "");
      const user = await getBackendWalletUserBySession(token);
      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }

      const preview = await buildMigrationPreview(user.email, user.address);
      sendJson(response, 200, {
        walletAddress: user.address,
        email: user.email,
        ...preview
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/migration/claim" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const sessionToken = String(body.sessionToken || "");
      const user = await getBackendWalletUserBySession(sessionToken);
      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }

      const migration = await applyBackendWalletMigration(user.email, user.address);
      sendJson(response, 200, migration);
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/market-state" && request.method === "GET") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const token = String(requestUrl.searchParams.get("token") || "");
      const marketRef = String(requestUrl.searchParams.get("marketAddress") || requestUrl.searchParams.get("marketId") || "").trim();
      const user = await getBackendWalletUserBySession(token);
      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }
      if (!marketRef) {
        sendJson(response, 400, { error: "marketAddress is required" });
        return;
      }

      const normalizedRef = normalizeWalletAddress(marketRef);
      const market = getKnownMarkets().find((entry) => {
        const entryAddress = normalizeWalletAddress(entry.marketAddress) || getConfiguredMarketAddress(entry.id);
        return String(entry.id || "").trim() === marketRef || (normalizedRef && entryAddress === normalizedRef);
      });
      if (market?.optionMarket) {
        const data = await loadOptionMarketStateFromSupabase(loadAnalytics(), market);
        sendJson(response, 200, {
          walletAddress: user.address,
          marketAddress: market.id,
          ...readOptionMarketStateFromData(data, user.address, market)
        });
        return;
      }
      const marketAddress = normalizeWalletAddress(market?.marketAddress) || getConfiguredMarketAddress(market?.id || marketRef) || normalizedRef;
      if (!marketAddress || isLocalTestMarketAddress(marketAddress)) {
        sendJson(response, 400, { error: "This market is not available" });
        return;
      }

      const state = await readBackendWalletMarketState(user.address, marketAddress);
      sendJson(response, 200, {
        walletAddress: user.address,
        marketAddress,
        ...state
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/option-trade" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const sessionToken = String(body.sessionToken || "");
      const marketId = String(body.marketId || "").trim();
      const optionId = String(body.optionId || "").trim();
      const mode = body.mode === "sell" ? "sell" : "buy";
      const amountUsdc = Number(body.amountUsdc);
      const user = await getBackendWalletUserBySession(sessionToken);

      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }
      if (!marketId || (mode === "buy" && (!optionId || !Number.isFinite(amountUsdc) || amountUsdc <= 0))) {
        sendJson(response, 400, { error: "marketId, optionId and amount are required" });
        return;
      }
      if (mode === "buy" && (amountUsdc < 5 || amountUsdc > 10)) {
        sendJson(response, 400, { error: "Trade amount must be between $5 and $10" });
        return;
      }

      const market = getActiveMarkets().find((entry) => String(entry.id || "").trim() === marketId && entry.optionMarket);
      if (!market) {
        sendJson(response, 400, { error: "This option market is not available" });
        return;
      }

      const option = mode === "buy" ? getMarketOptions(market).find((entry) => entry.id === optionId) : null;
      if (mode === "buy" && !option) {
        sendJson(response, 400, { error: "Choose a valid option" });
        return;
      }

      const lockTime = market.kickoffAt ? new Date(market.kickoffAt).getTime() - 20 * 60 * 1000 : null;
      if (lockTime && Number.isFinite(lockTime) && Date.now() >= lockTime) {
        sendJson(response, 400, { error: "Trading is locked for this market" });
        return;
      }

      let data = await loadOptionMarketStateFromSupabase(loadAnalytics(), market);
      const treasuryAddress = normalizeWalletAddress(aiBriefingTreasuryAddress || process.env.SIFTLE_TREASURY_ADDRESS);
      let txHash = `0xoptionpick${randomUUID().replace(/-/g, "").slice(0, 24)}`;
      if (mode === "buy") {
        const currentState = readOptionMarketStateFromData(data, user.address, market);
        if (currentState.snapshot?.resolvedOptionId) {
          sendJson(response, 400, { error: "This market is resolved and can no longer be traded" });
          return;
        }
        if (currentState.position?.optionId) {
          sendJson(response, 400, { error: "You already picked an option in this market" });
          return;
        }
        await saveOptionMarketPositionToSupabase(market, user.address, option.id, option.label, amountUsdc);
        if (treasuryAddress) {
          try {
            const signer = new Wallet(user.privateKey, leaderboardProvider);
            const usdc = new Contract(ARC_TESTNET_USDC, BACKEND_WALLET_ERC20_ABI, signer);
            const tx = await usdc.transfer(treasuryAddress, parseUnits(amountUsdc.toFixed(6), 6));
            const receipt = await tx.wait();
            txHash = receipt?.hash || tx.hash;
          } catch (err) {
            await deleteOptionMarketPositionFromSupabase(market, user.address);
            throw err;
          }
        }
        saveOptionMarketPosition(data, market, user.address, option.id, option.label, amountUsdc);
      } else {
        const exit = getOptionMarketExitPreview(data, market, user.address);
        if (process.env.ARC_DEPLOYER_PRIVATE_KEY && exit.amountUsdc > 0) {
          const signer = new Wallet(process.env.ARC_DEPLOYER_PRIVATE_KEY, leaderboardProvider);
          const usdc = new Contract(ARC_TESTNET_USDC, BACKEND_WALLET_ERC20_ABI, signer);
          const tx = await usdc.transfer(user.address, parseUnits(exit.amountUsdc.toFixed(6), 6));
          const receipt = await tx.wait();
          txHash = receipt?.hash || tx.hash;
        } else {
          txHash = `0xoptionexit${randomUUID().replace(/-/g, "").slice(0, 24)}`;
        }
        exitOptionMarketPosition(data, market, user.address);
        await deleteOptionMarketPositionFromSupabase(market, user.address);
      }

      saveAnalytics(data);
      leaderboardCache.expiresAt = 0;
      leaderboardCache.analytics = null;
      await trackAnalyticsEvent(mode === "buy" ? "trade_buy_success" : "trade_sell_success");
      sendJson(response, 200, {
        txHash,
        walletAddress: user.address,
        optionId: mode === "buy" ? option.id : null,
        optionLabel: mode === "buy" ? option.label : null
      });
    } catch (err) {
      await trackAnalyticsEvent("trade_failed");
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/option-claim" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const sessionToken = String(body.sessionToken || "");
      const marketId = String(body.marketId || "").trim();
      const user = await getBackendWalletUserBySession(sessionToken);
      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }
      const market = getKnownMarkets().find((entry) => String(entry.id || "").trim() === marketId && entry.optionMarket);
      if (!market) {
        sendJson(response, 400, { error: "This option market is not available" });
        return;
      }
      const data = await loadOptionMarketStateFromSupabase(loadAnalytics(), market);
      const store = ensureOptionMarketStore(data);
      const marketStore = store[market.id] || {};
      const cleanWallet = normalizeWalletAddress(user.address);
      const claim = getOptionMarketClaimPreview(data, market, cleanWallet);
      if (!marketStore.resolvedOptionId) {
        sendJson(response, 400, { error: "Market is not resolved yet" });
        return;
      }
      if (claim.alreadyClaimed) {
        sendJson(response, 400, { error: "Already claimed" });
        return;
      }
      if (!claim.won || claim.amountUsdc <= 0) {
        sendJson(response, 400, { error: "No winning payout to claim" });
        return;
      }
      if (!payoutPrivateKey) {
        sendJson(response, 500, { error: "Payout wallet is not configured" });
        return;
      }

      const payout = await payoutOptionMarketClaims(data, market, { walletAddress: cleanWallet });
      const paid = payout.paid?.[0];
      if (!paid) {
        const failure = payout.failed?.[0];
        throw new Error(failure?.error || "Failed to submit claim");
      }
      saveAnalytics(data);
      sendJson(response, 200, {
        txHash: paid.txHash,
        amountUsdc: paid.amountUsdc,
        walletAddress: cleanWallet
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/admin/option-market/resolve" && request.method === "POST") {
    try {
      const body = await readJsonBody(request);
      const configuredToken = String(process.env.SIFTLE_ADMIN_TOKEN || "").trim();
      const providedToken = String(body.adminToken || request.headers["x-siftle-admin-token"] || "").trim();
      if (configuredToken && providedToken !== configuredToken) {
        sendJson(response, 401, { error: "Unauthorized" });
        return;
      }
      if (!configuredToken && !isLocalRequest(request)) {
        sendJson(response, 401, { error: "Admin token is required" });
        return;
      }

      const marketId = String(body.marketId || "").trim();
      const winningOptionId = String(body.winningOptionId || "").trim();
      const market = getKnownMarkets().find((entry) => String(entry.id || "").trim() === marketId && entry.optionMarket);
      if (!market) {
        sendJson(response, 400, { error: "This option market is not available" });
        return;
      }
      const data = await loadOptionMarketStateFromSupabase(await loadReferralRelationshipsFromSupabase(await loadLeaderboardFromSupabase(loadAnalytics())), market);
      resolveOptionMarketInData(data, market, winningOptionId);
      const autoPayout = await payoutOptionMarketClaims(data, market);
      await saveOptionMarketResolutionToSupabase(market, winningOptionId);
      saveAnalytics(data);
      await saveLeaderboardToSupabase(data);
      leaderboardCache.expiresAt = 0;
      leaderboardCache.analytics = null;
      sendJson(response, 200, {
        ok: true,
        marketId,
        winningOptionId,
        autoPaidCount: autoPayout.paid.length,
        autoPaidSkippedNoSigner: autoPayout.skippedNoSigner,
        autoPaidFailures: autoPayout.failed.length
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/trade" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const sessionToken = String(body.sessionToken || "");
      const marketRef = String(body.marketId || body.marketAddress || "").trim();
      const mode = body.mode === "sell" ? "sell" : "buy";
      const side = body.side === "no" ? "no" : "yes";
      const amountUsdc = Number(body.amountUsdc);
      const user = await getBackendWalletUserBySession(sessionToken);

      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }
      if (!marketRef || !Number.isFinite(amountUsdc) || amountUsdc <= 0) {
        sendJson(response, 400, { error: "market reference and amountUsdc are required" });
        return;
      }

      const normalizedRef = normalizeWalletAddress(marketRef);
      const market = getActiveMarkets().find((entry) => {
        const entryAddress = normalizeWalletAddress(entry.marketAddress) || getConfiguredMarketAddress(entry.id);
        return String(entry.id || "").trim() === marketRef || (normalizedRef && entryAddress === normalizedRef);
      });
      const marketAddress = normalizeWalletAddress(market?.marketAddress) || getConfiguredMarketAddress(market?.id || marketRef) || normalizedRef;
      if (!marketAddress || isLocalTestMarketAddress(marketAddress)) {
        sendJson(response, 400, { error: "This market is not available" });
        return;
      }

      const signer = new Wallet(user.privateKey, leaderboardProvider);
      const marketContract = new Contract(marketAddress, BACKEND_WALLET_MARKET_ABI, signer);
      const usdc = new Contract(ARC_TESTNET_USDC, BACKEND_WALLET_ERC20_ABI, signer);
      const amount = parseUnits(amountUsdc.toFixed(6), 6);
      const outcome = Number(await marketContract.outcome()) || 0;
      if (outcome !== 0) {
        sendJson(response, 400, { error: "This market is resolved and can no longer be traded" });
        return;
      }

      if (mode === "buy") {
        const allowance = await usdc.allowance(user.address, marketAddress);
        if (allowance < amount) {
          const approveTx = await usdc.approve(marketAddress, amount);
          await approveTx.wait();
        }
      }

      const tx = mode === "buy"
        ? await marketContract.buy(side === "yes", amount)
        : await marketContract.sell(side === "yes", amount);
      const receipt = await tx.wait();
      sendJson(response, 200, {
        txHash: receipt?.hash || tx.hash,
        walletAddress: user.address
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/claim" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const sessionToken = String(body.sessionToken || "");
      const marketRef = String(body.marketId || body.marketAddress || "").trim();
      const user = await getBackendWalletUserBySession(sessionToken);
      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }

      const normalizedRef = normalizeWalletAddress(marketRef);
      const market = getKnownMarkets().find((entry) => {
        const entryAddress = normalizeWalletAddress(entry.marketAddress) || getConfiguredMarketAddress(entry.id);
        return String(entry.id || "").trim() === marketRef || (normalizedRef && entryAddress === normalizedRef);
      });
      const marketAddress = normalizeWalletAddress(market?.marketAddress) || getConfiguredMarketAddress(market?.id || marketRef) || normalizedRef;
      if (!marketAddress || isLocalTestMarketAddress(marketAddress)) {
        sendJson(response, 400, { error: "This market is not available" });
        return;
      }

      const signer = new Wallet(user.privateKey, leaderboardProvider);
      const marketContract = new Contract(marketAddress, BACKEND_WALLET_MARKET_ABI, signer);
      const tx = await marketContract.redeem();
      const receipt = await tx.wait();
      sendJson(response, 200, {
        txHash: receipt?.hash || tx.hash,
        walletAddress: user.address
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/backend-wallet/summary/unlock" && request.method === "POST") {
    if (!requireBackendWalletMode(request, response)) return;
    try {
      const body = await readJsonBody(request);
      const sessionToken = String(body.sessionToken || "");
      const amountUsdc = findStoryPriceByUrl(body.sourceUrl || body.topic || "");
      const treasuryAddress = normalizeWalletAddress(body.treasuryAddress || aiBriefingTreasuryAddress);
      const topic = String(body.topic || body.sourceUrl || "Siftle AI briefing").slice(0, 140);
      const user = await getBackendWalletUserBySession(sessionToken);
      if (!user) {
        sendJson(response, 401, { error: "Session expired. Please sign in again." });
        return;
      }
      if (!treasuryAddress) {
        sendJson(response, 400, { error: "AI briefing treasury is not configured" });
        return;
      }

      if (backendWalletUseX402) {
        try {
          const targetUrl = `${x402TargetUrlBase}?topic=${encodeURIComponent(topic)}`;
          const buyer = new GatewayClient({
            chain: "arcTestnet",
            privateKey: user.privateKey
          });
          const support = await buyer.supports(targetUrl).catch(err => {
            console.error("[AI BRIEFING] buyer.supports threw error:", err, "cause:", err?.cause);
            return { supported: false, error: err?.message };
          });
          if (!support.supported) {
            console.warn("[AI BRIEFING] x402 support check failed details:", JSON.stringify(support, null, 2));
            throw new Error("x402 seller did not advertise a compatible payment option");
          }

          warmGatewayBalanceInBackground(user.privateKey, amountUsdc);
          await ensureGatewayAvailableBalance(buyer, amountUsdc);
          const paid = await payWithLocalX402Script(user.privateKey, targetUrl, amountUsdc);
          const txHash = `0xmockunlockx402${Math.random().toString(16).slice(2)}`;
          console.log("[AI BRIEFING] x402 payment completed", {
            walletAddress: user.address,
            targetUrl,
            paymentAmount: paid.paymentAmount || amountUsdc
          });

          let bonus = null;
          try {
            bonus = await recordAiBriefingUnlockBonus(user.address, body.sourceUrl || body.topic || targetUrl, txHash);
          } catch (bonusErr) {
            console.warn("[LEADERBOARD] AI briefing backend-wallet bonus tracking failed:", bonusErr.message);
          }

          sendJson(response, 200, {
            txHash,
            walletAddress: user.address,
            x402: true,
            paymentStatus: "paid",
            paymentAmount: paid.paymentAmount,
            paymentData: paid.output,
            bonus
          });
          return;
        } catch (x402Err) {
          console.warn("[AI BRIEFING] x402 payment unavailable; falling back to USDC transfer:", x402Err.message);
        }
      }

      const signer = new Wallet(user.privateKey, leaderboardProvider);
      const usdc = new Contract(ARC_TESTNET_USDC, BACKEND_WALLET_ERC20_ABI, signer);
      const tx = await usdc.transfer(treasuryAddress, parseUnits(amountUsdc.toFixed(6), 6));
      const receipt = await tx.wait();
      const txHash = receipt?.hash || tx.hash;
      console.log("[AI BRIEFING] USDC fallback payment completed", {
        walletAddress: user.address,
        txHash,
        amountUsdc
      });

      let bonus = null;
      try {
        bonus = await recordAiBriefingUnlockBonus(user.address, body.sourceUrl || body.topic, txHash);
      } catch (bonusErr) {
        console.warn("[LEADERBOARD] AI briefing backend-wallet bonus tracking failed:", bonusErr.message);
      }

      sendJson(response, 200, {
        txHash,
        walletAddress: user.address,
        x402: false,
        bonus
      });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/analytics" && request.method === "GET") {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      ...getCorsHeaders()
    });
    response.end(getAnalyticsHtml());
    return;
  }

  if (requestUrl.pathname === "/api/analytics/report" && request.method === "GET") {
    const data = await buildAnalyticsReport(loadAnalytics());
    sendJson(response, 200, {
      ...data,
      supabaseConfigured: isSupabaseConfigured
    });
    return;
  }

  if (requestUrl.pathname === "/api/analytics" && request.method === "POST") {
    try {
      const body = await readJsonBody(request);
      if (body && body.event) {
        const supabaseResult = await trackAnalyticsEvent(body.event);
        sendJson(response, 200, {
          success: true,
          supabaseConfigured: isSupabaseConfigured,
          supabaseSaved: Boolean(supabaseResult?.saved),
          supabaseError: supabaseResult?.error || ""
        });
      } else {
        sendJson(response, 400, { error: "Event name is required" });
      }
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/proxy-image" && request.method === "GET") {
    const targetUrl = requestUrl.searchParams.get("url");
    if (!targetUrl) {
      response.writeHead(400, { "Content-Type": "text/plain", ...getCorsHeaders() });
      response.end("Missing url parameter");
      return;
    }
    
    try {
      const imgRes = await fetch(targetUrl);
      if (!imgRes.ok) {
        response.writeHead(imgRes.status, { "Content-Type": "text/plain", ...getCorsHeaders() });
        response.end("Failed to fetch image");
        return;
      }
      
      const contentType = imgRes.headers.get("Content-Type") || "image/jpeg";
      const arrayBuffer = await imgRes.arrayBuffer();
      
      response.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
        ...getCorsHeaders()
      });
      response.end(Buffer.from(arrayBuffer));
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain", ...getCorsHeaders() });
      response.end(`Error proxying image: ${error.message}`);
    }
    return;
  }

  if (requestUrl.pathname === "/api/circle/auth/otp" && request.method === "POST") {
    try {
      const body = await readJsonBody(request);
      const email = normalizeEmail(body.email);
      if (!email || typeof email !== "string" || !email.includes("@")) {
        sendJson(response, 400, { error: "Valid email address is required" });
        return;
      }
      
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(email, otp);

      const formattedOtp = otp;
      const expiryMinutes = Math.round(otpTtlMs / 60000);
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Siftle Verification Code</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              background-color: #0b0f19;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #f1f5f9;
            }
            .email-container {
              max-width: 480px;
              margin: 30px auto;
              background-color: #111827;
              border: 1px solid #1f2937;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
            }
            .header {
              padding: 32px 24px 24px;
              text-align: center;
              border-bottom: 1px solid #1f2937;
              background: linear-gradient(135deg, #1e1b4b 0%, #111827 100%);
            }
            .brand-name {
              font-size: 24px;
              font-weight: 800;
              color: #ffffff;
              letter-spacing: 2px;
            }
            .content {
              padding: 36px 24px;
              text-align: center;
            }
            .title {
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 12px;
              color: #ffffff;
            }
            .subtitle {
              font-size: 14px;
              color: #94a3b8;
              margin-bottom: 28px;
              line-height: 1.5;
            }
            .code-container {
              background-color: rgba(99, 102, 241, 0.1);
              border: 1px solid rgba(99, 102, 241, 0.25);
              border-radius: 8px;
              padding: 18px 28px;
              display: inline-block;
              margin-bottom: 24px;
            }
            .code {
              font-family: 'Courier New', Courier, monospace;
              font-size: 36px;
              font-weight: 700;
              letter-spacing: 2px;
              color: #a5b4fc;
            }
            .copy-hint {
              margin-top: 12px;
              color: #94a3b8;
              font-size: 13px;
              line-height: 1.4;
            }
            .expiry {
              font-size: 12px;
              color: #f87171;
              font-weight: 500;
              margin-bottom: 12px;
            }
            .footer {
              padding: 24px;
              background-color: #0d121f;
              border-top: 1px solid #1f2937;
              text-align: center;
              font-size: 12px;
              color: #64748b;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          <div class="email-container" style="max-width: 480px; margin: 30px auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <div class="header" style="padding: 32px 24px 24px; text-align: center; border-bottom: 1px solid #1f2937; background: linear-gradient(135deg, #1e1b4b 0%, #111827 100%);">
              <div class="brand-name" style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: 2px;">SIFTLE</div>
            </div>
            <div class="content" style="padding: 36px 24px; text-align: center; color: #f1f5f9;">
              <div class="title" style="font-size: 20px; font-weight: 600; margin-bottom: 12px; color: #ffffff;">Verify Your Email</div>
              <p class="subtitle" style="font-size: 14px; color: #94a3b8; margin-bottom: 28px; line-height: 1.5; max-width: 380px; margin-left: auto; margin-right: auto;">Enter this 6-digit code to sign in to Siftle. It has no spaces.</p>
              
              <div class="code-container" style="background-color: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: 8px; padding: 18px 28px; display: inline-block; margin-bottom: 24px;">
                <span class="code" style="font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: 700; letter-spacing: 2px; color: #a5b4fc;">${formattedOtp}</span>
                <div class="copy-hint" style="margin-top: 12px; color: #94a3b8; font-size: 13px; line-height: 1.4;">Tap and hold the code to copy it.</div>
              </div>
              
              <div class="expiry" style="font-size: 12px; color: #f87171; font-weight: 500;">Expires in ${expiryMinutes} minutes</div>
            </div>
            <div class="footer" style="padding: 24px; background-color: #0d121f; border-top: 1px solid #1f2937; text-align: center; font-size: 11px; color: #64748b; line-height: 1.6;">
              <p style="margin: 0 0 8px 0;">This code was requested for a sign-in attempt on Siftle. If you did not request this code, you can safely ignore this email.</p>
              <p style="margin: 0;">&copy; 2026 Siftle. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      let emailSent = false;

      // 1. Try Resend API (HTTP, port 443 - not blocked by Render)
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        try {
          const resendFrom = process.env.RESEND_FROM || "Siftle <onboarding@resend.dev>";
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${resendApiKey.trim().replace(/^["']|["']$/g, "")}`
            },
            body: JSON.stringify({
              from: resendFrom,
              to: [email],
              subject: `Siftle Security Code: ${otp}`,
              html: htmlContent
            })
          });
          const resText = await res.text();
          if (res.ok) {
            emailSent = true;
            console.log(`OTP sent via Resend API to ${email}`);
          } else {
            console.warn(`Resend API send failed: ${res.status} -> ${resText}`);
          }
        } catch (resendErr) {
          console.warn(`Failed to send email via Resend API: ${resendErr.message}`);
        }
      }

      // 2. Fall back to SMTP if Resend is not configured or failed
      if (!emailSent) {
        const smtpHost = process.env.SMTP_HOST;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        if (smtpHost && smtpUser && smtpPass) {
          try {
            // Pre-resolve hostname to IPv4 to avoid Render IPv6 ENETUNREACH errors
            let resolvedHost = smtpHost;
            try {
              const { resolve4 } = await import("node:dns/promises");
              const addresses = await resolve4(smtpHost);
              if (addresses && addresses.length > 0) {
                resolvedHost = addresses[0];
                console.log(`SMTP: Resolved ${smtpHost} -> ${resolvedHost} (IPv4)`);
              }
            } catch (dnsErr) {
              console.warn(`SMTP DNS resolve4 failed for ${smtpHost}, using hostname directly: ${dnsErr.message}`);
            }

            const smtpPort = Number(process.env.SMTP_PORT || 587);
            const transporter = nodemailer.createTransport({
              host: resolvedHost,
              port: smtpPort,
              secure: smtpPort === 465,
              auth: { user: smtpUser, pass: smtpPass },
              family: 4,
              tls: { servername: smtpHost }, // Required for TLS when connecting via IP
              connectionTimeout: 10000,
              greetingTimeout: 10000,
              socketTimeout: 15000
            });

            const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const customMessageId = `<${randomId}@gmail.com>`;

            await transporter.sendMail({
              messageId: customMessageId,
              from: `Siftle <${smtpUser}>`,
              to: email,
              replyTo: smtpUser,
              subject: `Siftle Security Code: ${otp}`,
              text: `Verify Your Email\n\nEnter this 6-digit code to authorize your session and sign in to Siftle.\n\nVerification Code: ${formattedOtp}\n\nThis code has no spaces. Tap and hold the code to copy it. It will expire in ${expiryMinutes} minutes.\n\nThis code was requested for a sign-in attempt on Siftle. If you did not request this code, you can safely ignore this email.`,
              html: htmlContent,
              headers: {
                "X-Priority": "1",
                "X-MSMail-Priority": "High",
                "Importance": "high",
                "X-Mailer": "Siftle Mailer",
                "X-Auto-Response-Suppress": "All",
                "Feedback-ID": "siftle:otp"
              }
            });
            emailSent = true;
            console.log(`OTP sent via SMTP to ${email}`);
          } catch (mailErr) {
            console.warn(`Failed to send SMTP email: ${mailErr.message}`);
          }
        }
      }

      if (!emailSent) {
        console.log(`\n==========================================\n[SMTP NOT CONFIG] OTP for ${email}: ${otp}\n==========================================\n`);
      }

      const isMock = !process.env.CIRCLE_API_KEY;
      if (isMock) {
        sendJson(response, 200, { mock: true, message: emailSent ? "OTP sent to your email" : "OTP logged to terminal console (mock mode)" });
        return;
      }

      // Real Circle Auth
      const userId = `siftle_user_${getCircleUserId(email)}`;
      // Register user
      try {
        await callCircleApi("/v1/w3s/users", "POST", { userId });
      } catch (err) {
        console.log(`User registration attempt for ${userId}: ${err.message}`);
      }

      sendJson(response, 200, { mock: false, message: "OTP sent" });
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/circle/auth/verify" && request.method === "POST") {
    try {
      const body = await readJsonBody(request);
      const email = normalizeEmail(body.email);
      const otp = normalizeOtpCode(body.otp);

      if (!email || !otp) {
        sendJson(response, 400, { error: "Email and OTP code are required" });
        return;
      }

      const cleanEmail = normalizeEmail(email);
      const stored = otpStore.get(cleanEmail);
      if (!stored || stored.otp !== otp || Date.now() > stored.expiresAt) {
        sendJson(response, 400, { error: "That code did not work or has expired. Request a new code and paste the 6 digits from your email." });
        return;
      }

      const isMock = !process.env.CIRCLE_API_KEY;
      if (isMock) {
        const userToken = `mock-token-${cleanEmail}`;
        const encryptionKey = "mock-encryption-key";
        const walletAddress = "0x12793cA4f495f5255C423128b1ED9Cd71B08023D";
        try {
          trackAnalyticsEvent("sign_up", cleanEmail);
        } catch (err) {
          console.error("Failed to track mock sign_up event:", err);
        }
        sendJson(response, 200, {
          mock: true,
          userToken,
          encryptionKey,
          walletAddress,
          initialized: true
        });
        consumeOtp(cleanEmail);
        return;
      }

      // Real Circle Auth
      try {
        const userId = `siftle_user_${getCircleUserId(cleanEmail)}`;
        // 1. Get user session token
        const tokenRes = await callCircleApi("/v1/w3s/users/token", "POST", { userId });
        const userToken = tokenRes.data?.userToken || tokenRes.userToken;
        const encryptionKey = tokenRes.data?.encryptionKey || tokenRes.encryptionKey;

        if (!userToken || !encryptionKey) {
          throw new Error("Failed to retrieve user token or encryption key from Circle");
        }

        // 2. List wallets to check if ARC-TESTNET wallet already exists
        const walletsRes = await callCircleApi("/v1/w3s/wallets", "GET", null, userToken);
        const wallets = walletsRes.data?.wallets || walletsRes.wallets || [];
        const arcWallet = wallets.find(w => w.blockchain === "ARC-TESTNET");

        if (arcWallet) {
          sendJson(response, 200, {
            mock: false,
            userToken,
            encryptionKey,
            walletId: arcWallet.id,
            walletAddress: arcWallet.address,
            initialized: true
          });
          consumeOtp(cleanEmail);
          return;
        }

        // 3. No ARC-TESTNET wallet found. Initialize user/wallet.
        try {
          trackAnalyticsEvent("sign_up", cleanEmail);
        } catch (err) {
          console.error("Failed to track real sign_up event:", err);
        }
        const idempotencyKey = randomUUID();
        try {
          const initRes = await callCircleApi("/v1/w3s/user/initialize", "POST", {
            idempotencyKey,
            blockchains: ["ARC-TESTNET"],
            accountType: "EOA"
          }, userToken);
          const challengeId = initRes.data?.challengeId || initRes.challengeId;
          sendJson(response, 200, {
            mock: false,
            userToken,
            encryptionKey,
            challengeId,
            initialized: false
          });
          consumeOtp(cleanEmail);
        } catch (err) {
          if (err.code === 155106) {
            const walletIdempotencyKey = randomUUID();
            const walletRes = await callCircleApi("/v1/w3s/wallets", "POST", {
              idempotencyKey: walletIdempotencyKey,
              blockchains: ["ARC-TESTNET"],
              accountType: "EOA"
            }, userToken);
            const challengeId = walletRes.data?.challengeId || walletRes.challengeId;
            sendJson(response, 200, {
              mock: false,
              userToken,
              encryptionKey,
              challengeId,
              initialized: false
            });
            consumeOtp(cleanEmail);
          } else {
            throw err;
          }
        }
      } catch (err) {
        console.error("Circle verify error:", err);
        sendJson(response, 500, { error: `Failed to complete verification: ${err.message}` });
      }
      return;
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/circle/tx/contract-call" && request.method === "POST") {
    try {
      const body = await readJsonBody(request);
      const { userToken, contractAddress, abiFunctionSignature, abiParameters, walletId } = body;

      if (!userToken || !contractAddress || !abiFunctionSignature || !abiParameters) {
        sendJson(response, 400, { error: "Missing required transaction parameters" });
        return;
      }

      const isMock = !process.env.CIRCLE_API_KEY;
      if (isMock) {
        sendJson(response, 200, { mock: true });
        return;
      }

      // Real Circle transaction signing challenge
      const idempotencyKey = randomUUID();
      try {
        const txRes = await callCircleApi("/v1/w3s/user/transactions/contractExecution", "POST", {
          idempotencyKey,
          walletId,
          contractAddress,
          abiFunctionSignature,
          abiParameters,
          feeLevel: "MEDIUM"
        }, userToken);
        const challengeId = txRes.data?.challengeId || txRes.challengeId;
        const txId = txRes.data?.id || txRes.id;
        sendJson(response, 200, { mock: false, challengeId, id: txId });
      } catch (err) {
        console.error("Circle contractExecution challenge error:", err);
        sendJson(response, 500, { error: `Failed to create transaction challenge: ${err.message}` });
      }
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/circle/tx/status" && request.method === "GET") {
    try {
      const id = requestUrl.searchParams.get("id");
      const userToken = requestUrl.searchParams.get("userToken");
      if (!id) {
        sendJson(response, 400, { error: "Transaction ID is required" });
        return;
      }

      const isMock = !process.env.CIRCLE_API_KEY;
      if (isMock) {
        sendJson(response, 200, {
          mock: true,
          state: "CONFIRMED",
          txHash: "0x" + createHash("sha256").update(id).digest("hex")
        });
        return;
      }

      try {
        try {
          const txRes = await callCircleApi(`/v1/w3s/transactions/${id}`, "GET");
          const tx = txRes.data?.transaction || txRes.transaction || txRes.data || {};
          sendJson(response, 200, {
            mock: false,
            state: tx.state || tx.status,
            txHash: tx.txHash
          });
          return;
        } catch (txErr) {
          if (txErr.code === 156003 && userToken) {
            console.log(`Transaction ${id} not found. Attempting challenge query...`);
            const challengeRes = await callCircleApi(`/v1/w3s/user/challenges/${id}`, "GET", null, userToken);
            const challenge = challengeRes.data?.challenge || challengeRes.challenge || challengeRes.data || {};
            
            const status = challenge.status;
            if (status === "COMPLETE") {
              const correlationId = challenge.correlationIds?.[0];
              if (correlationId) {
                console.log(`Challenge complete! Fetching transaction for correlationId: ${correlationId}`);
                const correlationTxRes = await callCircleApi(`/v1/w3s/transactions/${correlationId}`, "GET");
                const tx = correlationTxRes.data?.transaction || correlationTxRes.transaction || correlationTxRes.data || {};
                sendJson(response, 200, {
                  mock: false,
                  state: tx.state || tx.status,
                  txHash: tx.txHash
                });
                return;
              }
            } else if (status === "PENDING" || status === "IN_PROGRESS") {
              sendJson(response, 200, {
                mock: false,
                state: status
              });
              return;
            } else {
              sendJson(response, 200, {
                mock: false,
                state: "FAILED",
                error: challenge.errorMessage || "Challenge execution failed"
              });
              return;
            }
          }
          throw txErr;
        }
      } catch (err) {
        console.error("Circle get transaction status error:", err);
        sendJson(response, 500, { error: `Failed to fetch transaction status: ${err.message}` });
      }
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/circle/wallet" && request.method === "POST") {
    try {
      const body = await readJsonBody(request);
      const { userToken } = body;
      if (!userToken) {
        sendJson(response, 400, { error: "User token is required" });
        return;
      }

      const isMock = !process.env.CIRCLE_API_KEY;
      if (isMock) {
        sendJson(response, 200, { walletAddress: "0x12793cA4f495f5255C423128b1ED9Cd71B08023D" });
        return;
      }

      try {
        const walletsRes = await callCircleApi("/v1/w3s/wallets", "GET", null, userToken);
        const wallets = walletsRes.data?.wallets || walletsRes.wallets || [];
        const arcWallet = wallets.find(w => w.blockchain === "ARC-TESTNET");
        if (arcWallet) {
          sendJson(response, 200, {
            walletId: arcWallet.id,
            walletAddress: arcWallet.address
          });
        } else {
          sendJson(response, 404, { error: "Wallet not found yet" });
        }
      } catch (err) {
        const status = /token|session|auth|unauthori[sz]ed|expired/i.test(String(err.message || "")) ? 401 : 503;
        sendJson(response, status, { error: err.message });
      }
    } catch (err) {
      sendJson(response, 500, { error: err.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/status" && (request.method === "GET" || request.method === "HEAD")) {
    const payload = {
      ok: true,
      service: "siftle-backend",
      time: new Date().toISOString(),
      refresh_interval_minutes: refreshIntervalMinutes,
      is_publishing: publishStatus.is_running,
      last_finished_at: publishStatus.last_finished_at,
      zero_g: getZeroGStatusSnapshot()
    };

    if (request.method === "HEAD") {
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        ...getCorsHeaders()
      });
      response.end();
    } else {
      sendJson(response, 200, payload);
    }
    return;
  }

  if (requestUrl.pathname === "/api/feed" && request.method === "GET") {
    const category = requestUrl.searchParams.get("category") ?? "All";
    getPublishedFeed(category)
      .then((payload) => sendJson(response, 200, payload))
      .catch((error) => sendJson(response, 500, { error: error.message }));
    return;
  }

  if (requestUrl.pathname === "/api/thread" && request.method === "GET") {
    try {
      const category = requestUrl.searchParams.get("category") ?? "All";
      const sourceUrl = requestUrl.searchParams.get("sourceUrl") ?? "";
      const story = findStoryForThreadRequest(category, sourceUrl);
      if (!story) {
        sendJson(response, 404, { error: "Story not found" });
        return;
      }

      const preparedThread = findPreparedThreadForRequest(category, sourceUrl);
      if (preparedThread?.count >= 1) {
        sendJson(response, 200, preparedThread);
        return;
      }

      const thread = await getThreadForStory(story);
      if (thread.count < 1) {
        sendJson(response, 404, { error: "Thread not available" });
        return;
      }

      sendJson(response, 200, thread);
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/markets" && request.method === "GET") {
    try {
      if (marketListCache.markets && marketListCache.expiresAt > Date.now()) {
        sendJson(response, 200, marketListCache.markets);
        return;
      }

      const fastMarkets = getFastMarketsWithCachedCounts();
      sendJson(response, 200, fastMarkets);
      void refreshMarketListCache().catch((error) => {
        console.warn("[MARKETS] Background trader-count refresh failed:", error.message);
      });
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/portfolio/markets" && request.method === "GET") {
    sendJson(response, 200, getKnownMarkets());
    return;
  }

  if (requestUrl.pathname === "/api/referrals" && request.method === "GET") {
    try {
      const walletAddress = normalizeWalletAddress(requestUrl.searchParams.get("walletAddress") || "");
      if (!walletAddress) {
        sendJson(response, 400, { error: "Missing walletAddress" });
        return;
      }

      const data = await loadReferralRelationshipsFromSupabase(await loadLeaderboardFromSupabase(loadAnalytics()));
      const leaderboard = ensureLeaderboardState(data);
      const canonicalWalletAddress = canonicalLeaderboardAddress(data, walletAddress) || walletAddress;
      const code = await ensureReferralCode(canonicalWalletAddress);
      const referrals = leaderboard.referrals?.[canonicalWalletAddress] || {};
      let profiles = [];
      if (isSupabaseConfigured) {
        try {
          profiles = await supabaseRequest("profiles?select=wallet_address,username");
        } catch (err) {
          console.warn("[REFERRALS] Profile names unavailable:", err.message);
        }
      }
      const profileMap = new Map((profiles || []).map((profile) => [normalizeWalletAddress(profile.wallet_address), String(profile.username || "")]));
      const referralRows = Object.entries(referrals).sort(([, a], [, b]) => {
        const aJoined = Date.parse(a?.created_at || "") || Number.MAX_SAFE_INTEGER;
        const bJoined = Date.parse(b?.created_at || "") || Number.MAX_SAFE_INTEGER;
        return aJoined - bJoined;
      }).map(([referredWallet, relationship]) => {
        const used = getReferralBonusUses(data, canonicalWalletAddress, referredWallet);
        return {
          walletAddress: referredWallet,
          displayName: profileMap.get(normalizeWalletAddress(referredWallet)) || "",
          used,
          remaining: Math.max(0, referralWinBonusMaxUsesPerReferral - used),
          maxUses: referralWinBonusMaxUsesPerReferral,
          joinedAt: relationship?.created_at || null
        };
      });
      const totalEarned = Object.values(leaderboard.bonusEvents?.[canonicalWalletAddress] || {})
        .filter((event) => event?.bonus_type === "referral_win")
        .reduce((sum, event) => sum + (Number(event?.points) || 0), 0);
      const origin = request.headers.origin || process.env.PUBLIC_APP_URL || "https://siftle.xyz";

      sendJson(response, 200, {
        walletAddress: canonicalWalletAddress,
        code,
        inviteLink: `${String(origin).replace(/\/$/, "")}/?ref=${encodeURIComponent(code)}`,
        referrals: referralRows,
        activeReferralCount: referralRows.length,
        totalEarned,
        rules: {
          pointsPerReferralWin: referralWinBonusPoints,
          maxReferralsPerMarket: referralWinBonusMaxRefsPerMarket,
          maxUsesPerReferral: referralWinBonusMaxUsesPerReferral
        }
      });
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/referrals/bind" && request.method === "POST") {
    readJsonBody(request)
      .then((body) => bindReferralCode(body?.walletAddress, body?.referralCode))
      .then((payload) => sendJson(response, 200, { success: true, ...payload }))
      .catch((error) => sendJson(response, 500, { error: error.message }));
    return;
  }

  if (requestUrl.pathname === "/api/market-thread" && request.method === "GET") {
    try {
      const marketId = requestUrl.searchParams.get("id") ?? "";
      const thread = getMarketThread(marketId);
      if (!thread?.count) {
        sendJson(response, 404, { error: "Market thread not available" });
        return;
      }

      sendJson(response, 200, thread);
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/publish/status" && request.method === "GET") {
    sendJson(response, 200, {
      ...publishStatus,
      refresh_interval_minutes: refreshIntervalMinutes,
      zero_g: getZeroGStatusSnapshot(),
      feed_health: getFeedHealthSnapshot(),
      published_categories: categories.filter((category) => Boolean(readPublishedSnapshot(category)))
    });
    return;
  }

  if (requestUrl.pathname === "/api/feed-health" && request.method === "GET") {
    sendJson(response, 200, getFeedHealthSnapshot());
    return;
  }

  if (requestUrl.pathname === "/api/0g/status" && request.method === "GET") {
    sendJson(response, 200, getZeroGStatusSnapshot());
    return;
  }

  if (requestUrl.pathname === "/api/leaderboard/report" && request.method === "POST") {
    readJsonBody(request)
      .then(async (body) => {
        const { walletAddress, username, points, status } = body;
        const normalizedAddress = normalizeWalletAddress(walletAddress);
        if (!normalizedAddress) {
          sendJson(response, 400, { error: "Missing walletAddress" });
          return;
        }
        if (isAdminWallet(normalizedAddress)) {
          sendJson(response, 200, { success: true, message: "Admin score report ignored" });
          return;
        }
        const data = loadAnalytics();
        const leaderboard = ensureLeaderboardState(data);
        applyWalletMigrationAliases(data);
        const remoteMigrations = await loadBackendWalletMigrationsFromSupabase();
        let key = canonicalLeaderboardAddress(data, normalizedAddress);
        Object.values(remoteMigrations || {}).forEach((entry) => {
          const oldWallet = normalizeWalletAddress(entry?.oldWalletAddress);
          const newWallet = normalizeWalletAddress(entry?.newWalletAddress);
          if (oldWallet && newWallet && oldWallet === key) key = newWallet;
        });
        if (!key) {
          sendJson(response, 400, { error: "Missing walletAddress" });
          return;
        }
        if (key !== normalizedAddress && leaderboard.traders[normalizedAddress]) {
          const oldEntry = leaderboard.traders[normalizedAddress];
          leaderboard.traders[key] = {
            ...oldEntry,
            ...(leaderboard.traders[key] || {}),
            username: leaderboard.traders[key]?.username || oldEntry.username || ""
          };
          delete leaderboard.traders[normalizedAddress];
        }
        const existing = data.leaderboard.traders[key] || {};
        const hasUsername = Object.prototype.hasOwnProperty.call(body, "username");
        const hasPoints = Object.prototype.hasOwnProperty.call(body, "points");
        const hasStatus = Object.prototype.hasOwnProperty.call(body, "status");
        const cleanedUsername = String(username || "").trim().replace(/\s+/g, " ").slice(0, 15);
        const reportedPoints = hasPoints ? Number(points) || 0 : Number(existing.reported_points) || Number(existing.points) || 0;
        const reportedStatus = hasStatus ? String(status || "") : String(existing.reported_status || existing.status || "0 wins, 0 losses");
        const existingPoints = Number(existing.points) || 0;
        const nextPoints = Math.max(existingPoints, reportedPoints);
        const existingStatus = String(existing.status || "0 wins, 0 losses");
        const nextStatus = existingPoints > 0 ? existingStatus : reportedStatus;
        
        data.leaderboard.traders[key] = {
          points: nextPoints,
          status: nextStatus,
          username: hasUsername && cleanedUsername ? cleanedUsername : existing.username || "",
          reported_points: reportedPoints,
          reported_status: reportedStatus,
          first_activity_at: existing.first_activity_at || existing.updated_at || new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        if (!leaderboard.resolvedResults[key]) leaderboard.resolvedResults[key] = {};
        saveAnalytics(data);
        const supabaseResult = await saveLeaderboardToSupabase(data);
        leaderboardCache.expiresAt = 0;
        leaderboardCache.analytics = null;
        sendJson(response, 200, {
          success: true,
          supabaseConfigured: isSupabaseConfigured,
          supabaseSaved: supabaseResult.saved,
          supabaseError: supabaseResult.error
        });
      })
      .catch((error) => sendJson(response, 500, { error: error.message }));
    return;
  }

  if (requestUrl.pathname === "/api/leaderboard/division" && request.method === "GET") {
    const walletAddress = normalizeWalletAddress(requestUrl.searchParams.get("walletAddress") || "");
    const divisionParam = requestUrl.searchParams.get("division");
    const reqDivisionNumber = divisionParam ? Number(divisionParam) : null;

    const data = await getLeaderboardAnalyticsFresh();
    const tradersList = buildLeaderboardPlayers(data, walletAddress);
    
    const seasonId = getSeasonId();
    const { divisions, assignments } = buildSeasonDivisions(data, tradersList, seasonId);
    saveAnalytics(data);
    void saveLeaderboardToSupabase(data).catch((error) => {
      console.warn("[SUPABASE] Failed to persist division assignments:", error.message);
    });
    
    let userDivisionNumber = 1;
    if (walletAddress) {
      userDivisionNumber = Math.max(1, Number(assignments[walletAddress]) || 1);
    }
    
    let targetDivisionNumber = reqDivisionNumber || userDivisionNumber;
    if (targetDivisionNumber < 1) targetDivisionNumber = 1;
    if (divisions.length > 0 && targetDivisionNumber > divisions.length) {
      targetDivisionNumber = divisions.length;
    }
    
    const targetDivisionList = divisions[targetDivisionNumber - 1] || [];
    const seasonEndsAt = "2026-07-19T23:59:59.000Z";
    
    sendJson(response, 200, {
      divisionNumber: targetDivisionNumber,
      players: targetDivisionList,
      totalDivisions: Math.max(1, divisions.length),
      seasonEndsAt
    }, {
      "Cache-Control": `public, max-age=${leaderboardBrowserCacheSeconds}, stale-while-revalidate=60`
    });
    return;
  }

  if (requestUrl.pathname === "/api/leaderboard/global" && request.method === "GET") {
    const walletAddress = normalizeWalletAddress(requestUrl.searchParams.get("walletAddress") || "");
    const data = await getLeaderboardAnalyticsFresh();
    const players = buildLeaderboardPlayers(data, walletAddress).map((player, index) => {
      const rank = index + 1;
      let nextSeasonDivision = null;
      if (rank <= 6) nextSeasonDivision = 1;
      else if (rank <= 12) nextSeasonDivision = 2;

      return {
        ...player,
        globalRank: rank,
        prizeEligible: rank <= 10,
        nextSeasonDivision
      };
    });

    sendJson(response, 200, {
      players,
      prizePoolUsdc: 150,
      prizeEligibleCount: 10,
      nextSeasonDivisionOneCount: 6,
      nextSeasonDivisionTwoCount: 6,
      seasonEndsAt: "2026-07-19T23:59:59.000Z"
    }, {
      "Cache-Control": `public, max-age=${leaderboardBrowserCacheSeconds}, stale-while-revalidate=60`
    });
    return;
  }

  if (requestUrl.pathname === "/api/0g/cost" && request.method === "GET") {
    sendJson(response, 200, getZeroGCostEstimate());
    return;
  }

  if (requestUrl.pathname === "/api/publish/refresh" && request.method === "POST") {
    refreshPublishedFeeds("manual")
      .then((payload) => sendJson(response, 200, payload))
      .catch((error) => sendJson(response, 500, { error: error.message }));
    return;
  }

  if (requestUrl.pathname === "/api/archive" && request.method === "POST") {
    readJsonBody(request)
      .then(archiveSnapshot)
      .then((payload) => sendJson(response, 200, payload))
      .catch((error) => sendJson(response, 500, { error: error.message }));
    return;
  }

  if (requestUrl.pathname === "/api/archive" && request.method === "GET") {
    try {
      const date = requestUrl.searchParams.get("date");
      const category = requestUrl.searchParams.get("category") ?? "All";

      if (date) {
        const snapshot = await readArchiveSnapshot(date, category);
        if (!snapshot) {
          sendJson(response, 404, { error: "Archive snapshot not found" });
          return;
        }

        sendJson(response, 200, snapshot);
        return;
      }

      sendJson(response, 200, await readArchiveIndex());
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  if (requestUrl.pathname === "/api/summary/unlock-config" && request.method === "GET") {
    sendJson(response, 200, {
      enabled: aiBriefingUnlockUsdc > 0,
      amountUsdc: backendWalletUseX402 ? x402PriceUsdc : aiBriefingUnlockUsdc,
      treasuryAddress: aiBriefingTreasuryAddress
    });
    return;
  }

  if (requestUrl.pathname === "/api/summary/price" && request.method === "GET") {
    const sourceUrl = requestUrl.searchParams.get("sourceUrl");
    if (!sourceUrl) {
      sendJson(response, 400, { error: "Missing sourceUrl query parameter" });
      return;
    }
    const price = findStoryPriceByUrl(sourceUrl);
    sendJson(response, 200, {
      priceUsdc: price,
      treasuryAddress: aiBriefingTreasuryAddress
    });
    return;
  }

  if (requestUrl.pathname === "/api/summary/unlock" && request.method === "POST") {
    readJsonBody(request)
      .then(async (body) => {
        const unlockToken = await verifyAiBriefingUnlockPayment(body);
        let bonus = { awarded: false, points: 0, unlockCount: 0 };
        try {
          bonus = await recordAiBriefingUnlockBonus(body?.walletAddress, body?.sourceUrl, body?.txHash);
        } catch (err) {
          console.warn("[LEADERBOARD] AI briefing bonus tracking failed:", err.message);
        }
        return { unlockToken, bonus };
      })
      .then(({ unlockToken, bonus }) => sendJson(response, 200, { success: true, unlockToken, bonus }))
      .catch((error) => sendJson(response, 400, { error: error.message }));
    return;
  }

  if (requestUrl.pathname === "/api/summary" && request.method === "POST") {
    readJsonBody(request)
      .then(async (article) => {
        const hasUnlock = hasValidSummaryUnlock(article?.sourceUrl, article?.walletAddress, article?.unlockToken)
          || await hasPersistentAiBriefingAccess(article?.sourceUrl, article?.walletAddress);
        if (!hasUnlock) {
          const error = new Error("AI briefing unlock payment required");
          error.statusCode = 402;
          throw error;
        }
        const force = Boolean(article && article.force);
        const result = await summarizeWith0G(article, { force });
        try {
          trackAnalyticsEvent("view_summary");
        } catch (err) {
          console.error("Failed to track view_summary event:", err);
        }
        return result;
      })
      .then((payload) => sendJson(response, 200, payload))
      .catch((error) => sendJson(response, error.statusCode || 500, { error: error.message }));
    return;
  }

  const decodedPath = decodeURIComponent(requestUrl.pathname);
  const safePath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(root, safePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  if (statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  if (!existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": mimeTypes.get(extname(filePath)) ?? "application/octet-stream",
    "Cache-Control": "no-store"
  });
  createReadStream(filePath).pipe(response);
});

if (isMain) {
  server.listen(port, () => {
    console.log(`Siftle frontend running at http://localhost:${port}`);
    
    // Diagnostic Circle config check
    const key = process.env.CIRCLE_API_KEY;
    if (key) {
      const clean = key.trim().replace(/^["']|["']$/g, "");
      console.log(`[CIRCLE CONFIG CHECK] Key length: ${clean.length}, starts with: ${clean.substring(0, 20)}..., ends with: ...${clean.substring(clean.length - 8)}`);
    } else {
      console.log(`[CIRCLE CONFIG CHECK] CIRCLE_API_KEY is missing!`);
    }
  });
}
