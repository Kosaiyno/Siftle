import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const stories = data.top_stories || [];

  const matchedStories = stories.filter((story) => {
    const text = (story.headline + " " + story.summary).toLowerCase();
    return text.includes("argentina") || text.includes("england") || text.includes("messi") || text.includes("bellingham");
  });

  // Since we want to sort by postedAt recency:
  // Usually postedAt is "Xh" or "Xd". Let's parse it to sort.
  const parsePostedAt = (str) => {
    const val = parseInt(str) || 0;
    if (str.includes("h")) return val;
    if (str.includes("d")) return val * 24;
    return 9999;
  };

  matchedStories.sort((a, b) => parsePostedAt(a.postedAt) - parsePostedAt(b.postedAt));

  console.log(`Found ${matchedStories.length} stories. Showing the 15 most recent ones:\n`);
  matchedStories.slice(0, 15).forEach((story, idx) => {
    console.log(`[Story ${idx + 1}] (${story.postedAt})`);
    console.log(`Headline: ${story.headline}`);
    console.log(`Summary: ${story.summary}`);
    console.log(`Source: ${story.source} (${story.sourceUrl})\n`);
  });
} catch (error) {
  console.error("Error:", error.message);
}
