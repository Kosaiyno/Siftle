import { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { createZGComputeNetworkReadOnlyBroker } from "@0gfoundation/0g-compute-ts-sdk";
import {
  downloadShelbySnapshot,
  getShelbyBlobName,
  isShelbyArchiveConfigured,
  listShelbyArchiveFiles,
  uploadShelbySnapshot
} from "./shelbyArchive.mjs";

const root = resolve(process.cwd());
const port = Number(process.env.PORT ?? 5173);
const maxArticleAgeHours = Number(process.env.MAX_ARTICLE_AGE_HOURS ?? 36);
const rssItemsPerFeed = Number(process.env.RSS_ITEMS_PER_FEED ?? 30);
const summaryConcurrency = Number(process.env.SUMMARY_CONCURRENCY ?? 2);
const summaryTimeoutMs = Number(process.env.SUMMARY_TIMEOUT_MS ?? 20000);
const appTimeZone = process.env.APP_TIME_ZONE || "Africa/Lagos";
const allowedOrigin = process.env.ALLOWED_ORIGIN || process.env.ALLOWED_ORIGINS || "*";

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

const categories = ["All", "Crypto", "Sports", "Anime"];
const sourceCategories = categories.filter((category) => category !== "All");
const archiveDir = join(root, ".siftle", "archive");
const publishedDir = join(root, ".siftle", "published");

const getAppDate = (value = new Date()) => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  const parts = new Intl.DateTimeFormat("en", {
    timeZone: appTimeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return year && month && day ? `${year}-${month}-${day}` : null;
};

const getTodayKey = () => getAppDate() ?? new Date().toISOString().slice(0, 10);

const categoryQueries = {
  All: "crypto football anime trending",
  Crypto: "crypto bitcoin ethereum blockchain DeFi stablecoin",
  Sports: "football soccer basketball NBA NFL Champions League Premier League transfers",
  Anime: "anime manga Crunchyroll trailer adaptation studio"
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
  sports: "Sports",
  basketball: "Sports",
  nba: "Sports",
  nfl: "Sports",
  mlb: "Sports",
  tennis: "Sports",
  formula: "Sports",
  f1: "Sports",
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
  "myanimelist": "Anime"
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
    "meme coin"
  ],
  Sports: [
    "football",
    "soccer",
    "sports",
    "basketball",
    "nba",
    "nfl",
    "mlb",
    "tennis",
    "formula",
    "f1",
    "champions league",
    "premier league",
    "uefa",
    "transfer",
    "arsenal",
    "chelsea",
    "liverpool",
    "madrid",
    "barcelona"
  ],
  Anime: ["anime", "manga", "manhwa", "crunchyroll", "anilist", "myanimelist", "studio", "voice actor"]
};

const getArticleText = (article) => `${article.category ?? ""} ${article.headline ?? ""} ${article.summary ?? ""} ${article.source ?? ""}`.toLowerCase();

const matchesCategorySignal = (article, category) => {
  if (category === "All") return true;
  const signals = categorySignals[category] ?? [];
  if (signals.length === 0) return true;
  const haystack = getArticleText(article);
  return signals.some((signal) => haystack.includes(signal));
};

const rssFeeds = {
  Crypto: [
    "https://www.coindesk.com/arc/outboundfeeds/rss/",
    "https://cointelegraph.com/rss",
    "https://decrypt.co/feed",
    "https://cryptoslate.com/feed/",
    "https://bitcoinmagazine.com/.rss/full/",
    "https://www.dlnews.com/rss/",
    "https://www.theblock.co/rss.xml"
  ],
  Sports: [
    "https://www.espn.com/espn/rss/soccer/news",
    "https://www.espn.com/espn/rss/nba/news",
    "https://www.espn.com/espn/rss/nfl/news",
    "https://www.espn.com/espn/rss/mlb/news",
    "https://www.espn.com/espn/rss/news",
    "https://feeds.bbci.co.uk/sport/rss.xml",
    "https://feeds.bbci.co.uk/sport/football/rss.xml",
    "https://www.theguardian.com/football/rss",
    "https://www.theguardian.com/sport/rss",
    "https://www.uefa.com/rssfeed/news/rss.xml",
    "https://www.nba.com/rss/nba_rss.xml"
  ],
  Anime: [
    "https://www.animenewsnetwork.com/all/rss.xml",
    "https://www.animenewsnetwork.com/news/rss.xml",
    "https://feeds.feedburner.com/crunchyroll/rss",
    "https://myanimelist.net/rss/news.xml",
    "https://animecorner.me/feed/",
    "https://anitrendz.net/news/feed/",
    "https://otakuusamagazine.com/feed/",
    "https://randomc.net/feed/"
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
  }
];

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
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

const isTruncatedHeadline = (headline = "") => /\.\.\.$|…$/.test(headline.trim());

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
  const repaired = await Promise.all(
    articles.map(async (article) => ({
      ...article,
      headline: await fetchFullHeadline(article)
    }))
  );

  return repaired;
};

const fallbackImages = {
  Crypto: [
    "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80"
  ],
  Sports: [
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80"
  ],
  Anime: [
    "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&w=1200&q=80"
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

const isArticleOnAppDate = (article, date) => {
  const articleDate = getAppDate(article.publishedAt);
  return articleDate ? articleDate === date : true;
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
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];

  return items.slice(0, Math.max(1, rssItemsPerFeed)).map((item) => {
    const headline = stripHtml(extractTag(item, "title"));
    const summary = stripHtml(extractTag(item, "description") || extractTag(item, "content:encoded") || headline);
    const link = stripHtml(extractTag(item, "link"));
    const publishedAt = stripHtml(extractTag(item, "pubDate") || extractTag(item, "dc:date"));
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

const summaryPromptVersion = "grounded-v2";

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

  return stripHtml(summary)
    .replace(/^["'{\s]+/, "")
    .replace(/["'}\s]+$/, "")
    .replace(/^summary\s*:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
};

const getSummaryCachePath = (article) => {
  const cacheDir = join(root, ".siftle", "cache", "summaries");
  mkdirSync(cacheDir, { recursive: true });
  const key = Buffer.from(article.sourceUrl || article.headline).toString("base64url");
  return join(cacheDir, `${key}.json`);
};

let zeroGBrokerPromise;
let zeroGServicePromise;

const get0GService = async () => {
  const rpcUrl = process.env.OG_RPC_URL || "https://evmrpc.0g.ai";
  const providerAddress = process.env.OG_COMPUTE_PROVIDER;
  const envEndpoint = process.env.OG_COMPUTE_ENDPOINT || process.env.ZERO_G_ENDPOINT || process.env.OG_COMPUTE_URL || process.env.ZERO_G_URL;

  // If an explicit endpoint is provided via env, prefer it and skip broker discovery.
  if (envEndpoint) {
    if (!zeroGServicePromise) {
      zeroGServicePromise = Promise.resolve({ url: String(envEndpoint).replace(/\/$/, ""), provider: providerAddress ?? "env-endpoint" });
    }
    return zeroGServicePromise;
  }

  if (!providerAddress) {
    throw new Error("Missing OG_COMPUTE_PROVIDER");
  }

  if (!zeroGBrokerPromise) {
    zeroGBrokerPromise = createZGComputeNetworkReadOnlyBroker(rpcUrl);
  }

  if (!zeroGServicePromise) {
    zeroGServicePromise = zeroGBrokerPromise.then(async (broker) => {
      const services = await broker.inference.listServiceWithDetail(0, 50, true);
      const service = services.find(
        (entry) => entry.provider?.toLowerCase() === providerAddress.toLowerCase()
      );

      if (!service?.url) {
        throw new Error("0G compute provider endpoint not found");
      }

      return service;
    });
  }

  return zeroGServicePromise;
};

const get0GEndpoint = (serviceUrl) => {
  const normalized = String(serviceUrl).replace(/\/$/, "");
  if (normalized.endsWith("/v1/proxy")) return normalized;
  return `${normalized}/v1/proxy`;
};

const summarizeWith0G = async (article, options = {}) => {
  const apiKey = process.env.ZERO_G_API_KEY || process.env.OG_COMPUTE_API_KEY;
  const model = process.env.ZERO_G_MODEL || process.env.OG_COMPUTE_MODEL || "zai-org/GLM-5-FP8";

  if (!apiKey) {
    return { summary: summarizeLocally(article), provider: "local-no-key" };
  }

  const cachePath = getSummaryCachePath(article);
  // If cache exists and caller didn't request a forced refresh, return cached summary.
  const force = Boolean(options.force);
  if (!force && existsSync(cachePath)) {
    try {
      const cached = JSON.parse(readFileSync(cachePath, "utf8"));
      if (cached.summary && cached.prompt_version === summaryPromptVersion) {
        return { summary: cleanSummaryText(cached.summary), provider: cached.provider ?? "cache", proof: cached.proof };
      }
    } catch {
      // Ignore broken cache files and regenerate the summary.
    }
  }

  try {
    const service = await get0GService();
    const endpoint = get0GEndpoint(service.url);
    console.log("0G service resolved:", { provider: service.provider, endpoint });
    console.log("0G api key present:", Boolean(apiKey));
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
                content:
                  "You summarize news for Siftle. Return strict JSON with exactly one key: summary. The summary must be one neutral, reader-friendly paragraph between 70 and 120 words. Use only the supplied headline, description, source, and category. Do not add outside facts, dates, figures, names, quotes, predictions, or broad background that is not directly supported by the input. If the input is short, write a shorter careful summary instead of filling space. Output ONLY valid JSON."
              },
          {
            role: "user",
            content: JSON.stringify({
              headline: article.headline,
              description: article.summary,
              source: article.source,
              category: article.category
            })
          }
        ],
        temperature: 0.12,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`0G returned ${response.status}`);
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
                content:
                  "You summarize news for Siftle. Return strict JSON with exactly one key: summary. Write one neutral paragraph between 70 and 120 words using only the supplied article fields. Do not invent or import external context. If details are limited, stay brief and precise. Output ONLY valid JSON."
              },
              {
                role: "user",
                content: JSON.stringify({
                  headline: article.headline,
                  description: article.summary,
                  source: article.source,
                  category: article.category
                })
              }
            ],
            temperature: 0.08,
            max_tokens: 700
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
      summary = summarizeLocally(article);
    }

    summary = cleanSummaryText(summary);

    const proofObj = {
      providerAddress: service.provider,
      endpoint,
      model,
      responseId: data?.id || null,
      status: response.status
    };

    // If we performed local expansion, mark it in the proof.
    if (summary && summary.split(/\s+/).filter(Boolean).length >= minWords && summary !== summarizeLocally(article)) {
      // nothing special — best-effort
    }

    writeFileSync(
      cachePath,
      JSON.stringify({ summary, cached_at: new Date().toISOString(), provider: "0g", proof: proofObj, prompt_version: summaryPromptVersion }, null, 2)
    );
    return { summary, provider: "0g", proof: proofObj };
  } catch (error) {
    console.warn("0G summarization fallback:", error.message);
    const summary = cleanSummaryText(summarizeLocally(article));
    writeFileSync(cachePath, JSON.stringify({ summary, cached_at: new Date().toISOString(), provider: "local-fallback", prompt_version: summaryPromptVersion }, null, 2));
    return { summary, provider: "local-fallback", error: error.message };
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
      }
    })
  );

  return results;
};

const buildStories = async (articles) => {
  const stories = articles.map((article, index) => {
    const category = inferCategory(article, article.category);

    return {
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
      saved: false
    };
  });

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
  const seen = new Set();

  return sortStoriesNewestFirst([...freshStories, ...previousStories])
    .filter((story) => {
      const key = getStoryDedupeKey(story);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((story, index) => ({
      ...story,
      id: index + 1,
      postedAt: story.publishedAt ? relativeTime(story.publishedAt) : story.postedAt
    }));
};

const mergeWithTodaySnapshot = (snapshot) => {
  const previous = readPublishedSnapshot(snapshot.category);
  if (!previous || previous.date !== snapshot.date) return snapshot;

  return {
    ...snapshot,
    top_stories: mergeDailyStories(snapshot.top_stories, previous.top_stories)
  };
};

const buildCategorySnapshot = async (category) => mergeWithTodaySnapshot(await generateSnapshot(category));

const buildAllSnapshotFromCategories = async () => {
  const today = getTodayKey();
  const categorySnapshots = sourceCategories
    .map(readPublishedSnapshot)
    .filter((snapshot) => snapshot?.date === today && Array.isArray(snapshot.top_stories));

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
    top_stories: mergeDailyStories(categorySnapshots.flatMap((snapshot) => snapshot.top_stories), [])
  };
};

const archiveSnapshot = async (snapshot) => {
  mkdirSync(archiveDir, { recursive: true });

  const filename = archiveFilename(snapshot.date, snapshot.category);
  const localPath = join(archiveDir, filename);
  const snapshotWithStorage = {
    ...snapshot,
    storage: {
      local_path: localPath,
      shelby_configured: isShelbyArchiveConfigured(),
      shelby_rpc_url: process.env.SHELBY_RPC_URL ?? null,
      shelby_archive_prefix: process.env.SHELBY_ARCHIVE_PREFIX ?? "siftle/feeds",
      shelby_blob_name: getShelbyBlobName(snapshot.date, snapshot.category, snapshot.generated_at),
      stored_at: new Date().toISOString()
    }
  };

  writeJsonFile(localPath, snapshotWithStorage);

  if (isShelbyArchiveConfigured()) {
    try {
      const shelbyArchive = await uploadShelbySnapshot(snapshotWithStorage);
      writeJsonFile(
        localPath,
        {
          ...snapshotWithStorage,
          storage: {
            ...snapshotWithStorage.storage,
            shelby_upload: shelbyArchive
          },
          archive: shelbyArchive
        }
      );
      return shelbyArchive;
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
  const filePath = getLatestSnapshotPath(category);
  if (!existsSync(filePath)) return null;
  return normalizeSnapshotSummaries(JSON.parse(readFileSync(filePath, "utf8")));
};

const getRecoverablePublishedSnapshot = async (category) => {
  const selectedCategory = normalizeCategory(category);
  const current = readPublishedSnapshot(selectedCategory);
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
      return publishedSnapshot;
    }
  } catch {
    // Keep the local latest file if Shelby recovery is unavailable.
  }

  return current;
};

const writePublishedSnapshot = (snapshot) => {
  mkdirSync(publishedDir, { recursive: true });
  writeJsonFile(getLatestSnapshotPath(snapshot.category), snapshot);
};

const generateSnapshot = async (category) => {
  const selectedCategory = categories.includes(category) ? category : "All";
  const date = getTodayKey();
  const results = await Promise.allSettled([
    fetchNicheRss(selectedCategory),
    fetchNewsData(selectedCategory),
    fetchGuardian(selectedCategory)
  ]);
  const rawArticles = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
  const repairedArticles = await repairTruncatedArticleTitles(rawArticles);
  const dedupedArticles = dedupeArticles(repairedArticles).filter(
    (article) =>
      isArticleOnAppDate(article, date) &&
      (selectedCategory === "All" || matchesCategorySignal(article, selectedCategory))
  );
  const articles = selectedCategory === "Anime" ? balanceArticlesBySource(dedupedArticles, 8) : dedupedArticles;
  const stories = articles.length > 0 ? await buildStories(articles) : mockStories;

  const snapshot = {
    date,
    category: selectedCategory,
    generated_at: new Date().toISOString(),
    sources: {
      newsdata: Boolean(process.env.NEWSDATA_API_KEY),
      guardian: Boolean(process.env.GUARDIAN_API_KEY),
      zero_g: Boolean(process.env.ZERO_G_API_KEY || process.env.OG_COMPUTE_API_KEY),
      shelby: isShelbyArchiveConfigured(),
      max_article_age_hours: maxArticleAgeHours
    },
    top_stories: stories
  };

  return snapshot;
};

const publishSnapshot = async (snapshot) => {
  let archive;
  try {
    archive = await archiveSnapshot(snapshot);
  } catch (error) {
    archive = { provider: "local-dev", error: error.message };
  }

  if (process.env.REQUIRE_SHELBY_UPLOAD === "true" && isShelbyArchiveConfigured() && archive.provider !== "shelby") {
    throw new Error(archive.shelby_error || archive.error || "Shelby archive upload did not complete");
  }

  const publishedSnapshot = {
    ...normalizeSnapshotSummaries(snapshot),
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
    const composed = await buildAllSnapshotFromCategories();
    writePublishedSnapshot({
      ...composed,
      archive: {
        provider: "composed",
        composed_from_categories: sourceCategories
      },
      published_at: new Date().toISOString(),
      status: "published"
    });
    return readPublishedSnapshot("All");
  }

  const snapshot = await getRecoverablePublishedSnapshot(selectedCategory);
  if (snapshot?.date === getTodayKey()) return snapshot;

  return generateAndPublishFeed(selectedCategory);
};

const refreshIntervalMinutes = Number(process.env.REFRESH_INTERVAL_MINUTES ?? 60);
const publishedSnapshots = new Map();
const publishStatus = {
  is_running: false,
  last_started_at: null,
  last_finished_at: null,
  last_error: null,
  categories: {}
};

const refreshPublishedFeeds = async (reason = "scheduled") => {
  if (publishStatus.is_running) {
    return { skipped: true, reason: "publish already running" };
  }

  publishStatus.is_running = true;
  publishStatus.last_started_at = new Date().toISOString();
  publishStatus.last_error = null;

  try {
    console.log(`Publishing hourly feeds (${reason})...`);
    let failureCount = 0;

    for (const category of sourceCategories) {
      try {
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
    console.log("Hourly feeds published at", publishStatus.last_finished_at);
    return { skipped: false, status: publishStatus };
  } catch (err) {
    publishStatus.last_error = err.message;
    console.warn("Failed to publish hourly feeds:", err.message);
    return { skipped: false, error: err.message, status: publishStatus };
  } finally {
    publishStatus.is_running = false;
  }
};

// Kick off initial refresh and schedule periodic refreshes
void refreshPublishedFeeds("startup");
setInterval(() => void refreshPublishedFeeds("scheduled"), Math.max(1, refreshIntervalMinutes) * 60 * 1000);

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host}`);

  if (request.method === "OPTIONS") {
    response.writeHead(204, getCorsHeaders());
    response.end();
    return;
  }

  if (requestUrl.pathname === "/api/status" && (request.method === "GET" || request.method === "HEAD")) {
    const payload = {
      ok: true,
      service: "siftle-backend",
      time: new Date().toISOString(),
      refresh_interval_minutes: refreshIntervalMinutes,
      is_publishing: publishStatus.is_running,
      last_finished_at: publishStatus.last_finished_at
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

  if (requestUrl.pathname === "/api/publish/status" && request.method === "GET") {
    sendJson(response, 200, {
      ...publishStatus,
      refresh_interval_minutes: refreshIntervalMinutes,
      published_categories: categories.filter((category) => Boolean(readPublishedSnapshot(category)))
    });
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

  if (requestUrl.pathname === "/api/summary" && request.method === "POST") {
    readJsonBody(request)
      .then((article) => {
        const force = Boolean(article && article.force);
        return summarizeWith0G(article, { force });
      })
      .then((payload) => sendJson(response, 200, payload))
      .catch((error) => sendJson(response, 500, { error: error.message }));
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

server.listen(port, () => {
  console.log(`Siftle frontend running at http://localhost:${port}`);
});
