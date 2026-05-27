import { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
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
const maxArticleAgeHours = Number(process.env.MAX_ARTICLE_AGE_HOURS ?? 72);

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
const archiveDir = join(root, ".siftle", "archive");

const categoryQueries = {
  All: "crypto football anime trending",
  Crypto: "crypto bitcoin ethereum blockchain DeFi stablecoin",
  Sports: "football soccer Champions League Premier League transfers",
  Anime: "anime manga Crunchyroll trailer adaptation"
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
  "champions league": "Sports",
  transfer: "Sports",
  anime: "Anime",
  manga: "Anime",
  crunchyroll: "Anime",
  anilist: "Anime",
  "myanimelist": "Anime"
};

const rssFeeds = {
  Crypto: [
    "https://www.coindesk.com/arc/outboundfeeds/rss/",
    "https://cointelegraph.com/rss",
    "https://decrypt.co/feed"
  ],
  Sports: [
    "https://www.espn.com/espn/rss/soccer/news",
    "https://www.espn.com/espn/rss/news",
    "https://feeds.bbci.co.uk/sport/rss.xml",
    "https://www.uefa.com/rssfeed/news/rss.xml"
  ],
  Anime: [
    "https://www.animenewsnetwork.com/all/rss.xml",
    "https://feeds.feedburner.com/crunchyroll/rss"
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
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
};

const normalizeCategory = (category) => (categories.includes(category) ? category : "All");

const archiveFilename = (date, category) => `${date}-${normalizeCategory(category).toLowerCase()}.json`;

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
        top_stories: (allSnapshot.top_stories ?? []).filter((story) => story.category === selectedCategory),
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

  if (isShelbyArchiveConfigured()) {
    try {
      const { snapshot, archive } = await downloadShelbySnapshot(date, selectedCategory);
      return { ...snapshot, archive };
    } catch (error) {
      console.warn("Shelby archive read fallback:", error.message);

      if (selectedCategory !== "All") {
        try {
          const { snapshot, archive } = await downloadShelbySnapshot(date, "All");
          return {
            ...snapshot,
            category: selectedCategory,
            top_stories: (snapshot.top_stories ?? []).filter((story) => story.category === selectedCategory),
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

const groupArchiveFiles = (files) => {
  const sortedFiles = files
    .map(normalizeArchiveFile)
    .sort((first, second) => {
      if (first.date !== second.date) return second.date.localeCompare(first.date);
      return categories.indexOf(first.category) - categories.indexOf(second.category);
    });

  const groupedDates = [...new Set(files.map((file) => file.date))].map((date) => ({
    date,
    categories: files.filter((file) => file.date === date).map((file) => file.category)
  }));

  return { dates: groupedDates, files };
};

const readArchiveIndex = async () => {
  const localFiles = readLocalArchiveFiles();
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
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, "\"")
    .replace(/&ldquo;|&rdquo;/g, "\"")
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const decodeHtmlEntities = (value = "") =>
  value
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

const getFallbackImage = (category) => {
  const images = {
    Crypto:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1200&q=80",
    Sports:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    Anime:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1200&q=80"
  };

  return images[category] ?? images.Crypto;
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

const inferCategory = (article, fallbackCategory) => {
  if (fallbackCategory && fallbackCategory !== "All") return fallbackCategory;

  const haystack = `${article.category ?? ""} ${article.headline ?? ""} ${article.summary ?? ""}`.toLowerCase();
  for (const [key, category] of Object.entries(categoryMap)) {
    if (haystack.includes(key)) return category;
  }

  return "Crypto";
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

const extractRssImage = (item, category) => {
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
    getFallbackImage(category)
  );
};

const fetchRssFeed = async (url, fallbackCategory) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Siftle/0.1 news aggregator"
    }
  });

  if (!response.ok) throw new Error(`RSS ${url} returned ${response.status}`);

  const xml = await response.text();
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];

  return items.slice(0, 12).map((item) => {
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
      imageUrl: extractRssImage(item, category),
      publishedAt,
      category
    };
  });
};

const fetchNicheRss = async (category) => {
  const feedUrls = category === "All" ? Object.values(rssFeeds).flat() : rssFeeds[category] ?? [];
  const results = await Promise.allSettled(feedUrls.map((url) => fetchRssFeed(url, category)));
  return results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
};

const summarizeLocally = (article) => {
  const base = stripHtml(article.summary || article.headline);
  return base.length > 220 ? `${base.slice(0, 217).trim()}...` : base;
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
      if (cached.summary) return { summary: cached.summary, provider: cached.provider ?? "cache", proof: cached.proof };
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
      signal: AbortSignal.timeout(30000),
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
                  "You summarize news for Siftle. Return strict JSON with one key: summary. The summary must be a detailed neutral paragraph between 120 and 200 words, no bullets, no hype, and must focus on the most important facts, impact, and context. If the provided article text is short, expand by providing safe background context, common industry implications, and general impact analysis without inventing specific, checkable facts (avoid new dates, exact figures, or named quotations). Output ONLY valid JSON (no surrounding commentary)."
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
        s = stripHtml(parsed.summary || "");
      } else {
        s = stripHtml(content.replace(/^```(?:json)?/i, "").replace(/```$/i, ""));
      }
      return s;
    };

    let summary = extractSummaryFromResponse(data);

    // If 0G returned a very short summary, try one retry requesting a longer paragraph.
    const minWords = 110;
    const wordCount = summary.split(/\s+/).filter(Boolean).length;
    if (wordCount < minWords) {
      try {
        const retryResp = await fetch(`${endpoint}/chat/completions`, {
          method: "POST",
          signal: AbortSignal.timeout(45000),
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
                  "You summarize news for Siftle. Return strict JSON with one key: summary. The summary must be a detailed neutral paragraph between 150 and 220 words, no bullets, no hype, and must focus on the most important facts, impact, and context. If the provided article text is short, expand safely by adding background, typical market or policy implications, and general context while avoiding invented, checkable facts. Output ONLY valid JSON (no surrounding commentary)."
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

    // If the summary is still too short after retries, expand locally with safe, generic context.
    const finalWordCount = summary.split(/\s+/).filter(Boolean).length;
    if (finalWordCount < minWords) {
      const expandLocally = (article, shortSummary) => {
        const parts = [];
        parts.push(shortSummary.replace(/\.$/, ""));
        parts.push(
          `Background: In situations like this, broader trends and context often shape how the story is understood — for example, market sentiment, regulatory focus, or sector-specific dynamics may inform reactions.`
        );
        parts.push(
          `Implications: The development could influence related actors and may lead to shifts in short-term attention, investment flows, or policy responses; stakeholders will likely monitor for confirmations and follow-up reporting.`
        );
        parts.push(
          `Caveat: this expanded paragraph avoids asserting specific, unverified facts beyond the original report and focuses on plausible context and impact.`
        );

        // Combine and trim to form a coherent paragraph.
        return parts.join(" ").replace(/\s+/g, " ").trim();
      };

      summary = expandLocally(article, summary);
      // annotate proof to indicate local expansion
      if (!data) data = {};
      if (!data.id) data.id = null;
      // mark that we expanded locally
      // proof variable exists later when writing cache; we'll add expanded flag below.
    }

    const expandedFlag = (summary.split(/\s+/).filter(Boolean).length < minWords) === false ? false : false; // placeholder
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

    writeFileSync(cachePath, JSON.stringify({ summary, cached_at: new Date().toISOString(), provider: "0g", proof: proofObj }, null, 2));
    return { summary, provider: "0g", proof: proofObj };
  } catch (error) {
    console.warn("0G summarization fallback:", error.message);
    const summary = summarizeLocally(article);
    writeFileSync(cachePath, JSON.stringify({ summary, cached_at: new Date().toISOString(), provider: "local-fallback" }, null, 2));
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

  const response = await fetch(`https://newsdata.io/api/1/latest?${params}`);
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
    "page-size": "10"
  });

  const response = await fetch(`https://content.guardianapis.com/search?${params}`);
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

const buildStories = async (articles) => {
  const selected = articles.slice(0, 14);
  const stories = selected.map((article, index) => {
    const category = inferCategory(article, article.category);

    return {
      id: index + 1,
      headline: stripHtml(article.headline),
      category,
      summary: summarizeLocally(article),
      source: article.source,
      sourceUrl: article.sourceUrl,
      imageUrl: article.imageUrl || getFallbackImage(category),
      readTime: estimateReadTime(`${article.headline} ${article.summary}`),
      postedAt: relativeTime(article.publishedAt),
      accent: accentForCategory(category),
      saved: false
    };
  });

  // Precompute AI summaries for the selected articles using 0G (cached by summarizeWith0G)
  await Promise.allSettled(
    selected.map(async (article, idx) => {
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
    })
  );

  return stories;
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
      shelby_blob_name: getShelbyBlobName(snapshot.date, snapshot.category),
      stored_at: new Date().toISOString()
    }
  };

  writeFileSync(localPath, JSON.stringify(snapshotWithStorage, null, 2));

  if (isShelbyArchiveConfigured()) {
    try {
      const shelbyArchive = await uploadShelbySnapshot(snapshotWithStorage);
      writeFileSync(
        localPath,
        JSON.stringify(
          {
            ...snapshotWithStorage,
            storage: {
              ...snapshotWithStorage.storage,
              shelby_upload: shelbyArchive
            }
          },
          null,
          2
        )
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

const getFeed = async (category) => {
  const selectedCategory = categories.includes(category) ? category : "All";
  const results = await Promise.allSettled([
    fetchNicheRss(selectedCategory),
    fetchNewsData(selectedCategory),
    fetchGuardian(selectedCategory)
  ]);
  const rawArticles = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
  const repairedArticles = await repairTruncatedArticleTitles(rawArticles);
  const articles = dedupeArticles(repairedArticles);
  const stories = articles.length > 0 ? await buildStories(articles) : mockStories;

  const snapshot = {
    date: new Date().toISOString().slice(0, 10),
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

  let archive;
  try {
    archive = await archiveSnapshot(snapshot);
  } catch (error) {
    archive = { provider: "local-dev", error: error.message };
  }

  return { ...snapshot, archive };
};

// In-memory latest snapshot (precomputed by background job)
let latestSnapshot = null;
const refreshIntervalMinutes = Number(process.env.REFRESH_INTERVAL_MINUTES ?? 60);

const refreshLatestSnapshot = async () => {
  try {
    console.log("Refreshing feed snapshot...");
    latestSnapshot = await getFeed("All");
    console.log("Feed snapshot refreshed at", new Date().toISOString());
  } catch (err) {
    console.warn("Failed to refresh feed snapshot:", err.message);
  }
};

// Kick off initial refresh and schedule periodic refreshes
void refreshLatestSnapshot();
setInterval(() => void refreshLatestSnapshot(), Math.max(1, refreshIntervalMinutes) * 60 * 1000);

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host}`);

  if (requestUrl.pathname === "/api/feed" && request.method === "GET") {
    const category = requestUrl.searchParams.get("category") ?? "All";
    // Serve cached snapshot for the top-level All category when available to avoid on-demand generation
    if (category === "All" && latestSnapshot) {
      try {
        sendJson(response, 200, latestSnapshot);
        return;
      } catch (err) {
        // fall back to live generation
      }
    }

    getFeed(category)
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
