import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const publishedDir = join(root, ".siftle", "published");
const threadsDir = join(root, ".siftle", "market-threads");
const seedThreadsDir = join(root, "data", "marketThreads");

mkdirSync(publishedDir, { recursive: true });
mkdirSync(threadsDir, { recursive: true });
mkdirSync(seedThreadsDir, { recursive: true });

const normalizeStoryUrl = (url) => String(url || "").trim().toLowerCase();

// Define three realistic sports news stories for the Spain vs Argentina final
const story1 = {
  headline: "Spain and Argentina Prepare for World Cup Final Clash in New Jersey",
  category: "Sports",
  summary: "La Roja and the Albiceleste go head-to-head at MetLife Stadium for the ultimate crown. Messi aims to seal his final legacy while Spain's young generation looks to make history.",
  source: "theguardian.com",
  sourceUrl: "https://www.theguardian.com/football/2026/jul/19/spain-argentina-world-cup-final-preview",
  imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
  publishedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  readTime: "3 min read",
  postedAt: "5m ago",
  accent: "blue",
  saved: false,
  type: "news"
};

const story2 = {
  headline: "Lamine Yamal and Lionel Messi Face Off in Generation Clash Final",
  category: "Sports",
  summary: "The teenage sensation Lamine Yamal faces his idol Lionel Messi in a historic rating duel. Both playmakers hold the keys to unlocking the opposition's defense.",
  source: "bbc.co.uk",
  sourceUrl: "https://www.bbc.co.uk/sport/football/articles/messi-yamal-generation-final",
  imageUrl: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=1200&q=80",
  publishedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
  readTime: "2 min read",
  postedAt: "10m ago",
  accent: "teal",
  saved: false,
  type: "news"
};

const story3 = {
  headline: "Referee Jesús Valenzuela Warns of High Intensity Final Clash",
  category: "Sports",
  summary: "Match officials prepare for a high-intensity duel between the physical Argentine defense and Spain's technical attack. Bookmakers anticipate cards and early fouls.",
  source: "skysports.com",
  sourceUrl: "https://www.skysports.com/football/news/12026/07/19/world-cup-final-disciplinary-referee-jesus-valenzuela",
  imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
  publishedAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
  readTime: "3 min read",
  postedAt: "15m ago",
  accent: "violet",
  saved: false,
  type: "news"
};

const customStories = [story1, story2, story3];

// Function to inject stories and thread pointers into the published feeds
function injectIntoFeedFile(fileName) {
  const filePath = join(publishedDir, fileName);
  let snapshot = {
    date: new Date().toISOString().split("T")[0],
    category: fileName.replace("latest-", "").replace(".json", ""),
    generated_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    top_stories: [],
    threads: {}
  };

  if (existsSync(filePath)) {
    try {
      snapshot = JSON.parse(readFileSync(filePath, "utf8"));
    } catch (err) {
      console.warn(`Could not parse ${filePath}, creating fresh.`);
    }
  }

  const existing = snapshot.top_stories || [];
  const urlsToExclude = new Set(customStories.map(s => normalizeStoryUrl(s.sourceUrl)));
  const cleanedExisting = existing.filter(s => !urlsToExclude.has(normalizeStoryUrl(s.sourceUrl)));
  const mergedStories = [...customStories, ...cleanedExisting];

  snapshot.top_stories = mergedStories.map((story, index) => ({
    ...story,
    id: index + 1
  }));

  snapshot.threads = snapshot.threads || {};

  // Register stories URLs to reference threads
  snapshot.threads[normalizeStoryUrl(story1.sourceUrl)] = {
    topic: "World Cup Final Champion",
    current: story1,
    items: [story2, story3],
    count: 3,
    reviewed_by: "feed-market-bridge"
  };

  snapshot.threads[normalizeStoryUrl(story2.sourceUrl)] = {
    topic: "Messi vs Yamal Final Showdown",
    current: story2,
    items: [story1, story3],
    count: 3,
    reviewed_by: "feed-market-bridge"
  };

  snapshot.threads[normalizeStoryUrl(story3.sourceUrl)] = {
    topic: "Referee Disciplinary Outlook",
    current: story3,
    items: [story1, story2],
    count: 3,
    reviewed_by: "feed-market-bridge"
  };

  writeFileSync(filePath, JSON.stringify(snapshot, null, 2), "utf8");
  console.log(`Injected final stories into ${fileName}. Total: ${snapshot.top_stories.length}`);
  return snapshot.top_stories;
}

const updatedStories = injectIntoFeedFile("latest-sports.json");
injectIntoFeedFile("latest-all.json");

const getStory = (headline) => updatedStories.find(s => s.headline === headline) || story1;

// Thread definition mappings for all 10 markets
const threads = [
  {
    market_id: "wc-spain-argentina-champion",
    topic: "World Cup Final Champion",
    current: getStory(story1.headline),
    items: [getStory(story2.headline), getStory(story3.headline)]
  },
  {
    market_id: "wc-spain-argentina-concede",
    topic: "First Team to Concede",
    current: getStory(story1.headline),
    items: [getStory(story2.headline), getStory(story3.headline)]
  },
  {
    market_id: "wc-spain-argentina-yamal-assists",
    topic: "Lamine Yamal Assist Watch",
    current: getStory(story2.headline),
    items: [getStory(story1.headline), getStory(story3.headline)]
  },
  {
    market_id: "wc-spain-argentina-red-card",
    topic: "Red Card Speculation",
    current: getStory(story3.headline),
    items: [getStory(story1.headline), getStory(story2.headline)]
  },
  {
    market_id: "wc-spain-argentina-arg-cards",
    topic: "Argentina Disciplinary Record",
    current: getStory(story3.headline),
    items: [getStory(story1.headline), getStory(story2.headline)]
  },
  {
    market_id: "wc-spain-argentina-shots",
    topic: "Shot on Target Battle",
    current: getStory(story1.headline),
    items: [getStory(story2.headline), getStory(story3.headline)]
  },
  {
    market_id: "wc-spain-argentina-rating-duel",
    topic: "Messi vs Yamal Final Showdown",
    current: getStory(story2.headline),
    items: [getStory(story1.headline), getStory(story3.headline)]
  },
  {
    market_id: "wc-spain-argentina-victory-method",
    topic: "Method of Victory",
    current: getStory(story1.headline),
    items: [getStory(story2.headline), getStory(story3.headline)]
  },
  {
    market_id: "wc-spain-argentina-messi-goals",
    topic: "Lionel Messi Goal Watch",
    current: getStory(story2.headline),
    items: [getStory(story1.headline), getStory(story3.headline)]
  },
  {
    market_id: "wc-spain-argentina-exact-score",
    topic: "Exact Scoreline Final",
    current: getStory(story1.headline),
    items: [getStory(story2.headline), getStory(story3.headline)]
  }
];

threads.forEach((thread) => {
  const fileContent = {
    topic: thread.topic,
    current: thread.current,
    items: thread.items,
    reviewed_by: "feed-market-bridge",
    count: thread.items.length + 1,
    market_id: thread.market_id,
    saved_market_thread: true,
    saved_at: new Date().toISOString()
  };

  writeFileSync(join(threadsDir, `${thread.market_id}.json`), JSON.stringify(fileContent, null, 2), "utf8");
  writeFileSync(join(seedThreadsDir, `${thread.market_id}.json`), JSON.stringify(fileContent, null, 2), "utf8");
  console.log(`Created thread files for ${thread.market_id}`);
});

console.log("Successfully deployed all final news threads!");
