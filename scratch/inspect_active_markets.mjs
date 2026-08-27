import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const stories = data.top_stories || [];

  console.log(`Total stories in sports feed: ${stories.length}`);
  const unresolvedMarkets = [];

  for (const story of stories) {
    if (story.optionMarket) {
      const market = story.optionMarket;
      if (!market.resolved) {
        unresolvedMarkets.push({
          marketId: market.id,
          title: story.title,
          options: market.options,
          closesAt: market.closesAt
        });
      }
    }
  }

  console.log("\n--- Unresolved Option Markets ---");
  if (unresolvedMarkets.length === 0) {
    console.log("No unresolved option markets found.");
  } else {
    console.log(JSON.stringify(unresolvedMarkets, null, 2));
  }
} catch (error) {
  console.error("Failed to read published sports snapshot:", error.message);
}
