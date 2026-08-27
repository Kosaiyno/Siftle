import fs from "node:fs";
import { join } from "node:path";
import { marketThreadRules, storyMatchesMarketThreadRule } from "../scripts/marketThreadRules.mjs";

const root = "C:/Users/user/Desktop/Siftle";
const sportsPath = join(root, ".siftle", "published", "latest-sports.json");
const activeMarketsPath = join(root, "data", "active_markets.json");
const threadsDir = join(root, "data", "marketThreads");

try {
  if (!fs.existsSync(sportsPath)) {
    throw new Error(`Sports snapshot not found at ${sportsPath}`);
  }
  if (!fs.existsSync(activeMarketsPath)) {
    throw new Error(`Active markets config not found at ${activeMarketsPath}`);
  }

  const sportsData = JSON.parse(fs.readFileSync(sportsPath, "utf8"));
  const activeMarkets = JSON.parse(fs.readFileSync(activeMarketsPath, "utf8"));
  const stories = sportsData.top_stories || [];

  console.log(`Found ${stories.length} stories in sports snapshot.`);
  console.log(`Scanning ${activeMarkets.length} active markets to link related news...`);

  if (!fs.existsSync(threadsDir)) {
    fs.mkdirSync(threadsDir, { recursive: true });
  }

  for (const market of activeMarkets) {
    const rule = marketThreadRules[market.id];
    if (!rule) {
      console.warn(`[WARNING] No matching rule found in marketThreadRules.mjs for market ID: ${market.id}`);
      continue;
    }

    // Find all matching stories
    const matches = stories.filter(story => storyMatchesMarketThreadRule(story, rule));
    if (matches.length === 0) {
      console.warn(`[WARNING] No stories matched the rule for market: ${market.id}`);
      continue;
    }

    // Sort by publication time (newest first)
    matches.sort((a, b) => {
      const timeA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const timeB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return timeB - timeA;
    });

    const current = matches[0];
    const items = matches.slice(1);

    const threadPayload = {
      topic: rule.topic || market.threadTopic || market.question,
      current: current,
      items: items,
      reviewed_by: "local-generator",
      count: matches.length,
      market_id: market.id,
      saved_market_thread: true,
      saved_at: new Date().toISOString()
    };

    const threadPath = join(threadsDir, `${market.id}.json`);
    fs.writeFileSync(threadPath, JSON.stringify(threadPayload, null, 2), "utf8");
    console.log(`[SUCCESS] Linked ${matches.length} stories for market "${market.id}" -> ${threadPath}`);
  }

  console.log("\nDone linking related news to markets!");
} catch (error) {
  console.error("Failed to build market threads:", error.message);
}
