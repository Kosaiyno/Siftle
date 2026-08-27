import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const stories = data.top_stories || [];

  const ratingStories = stories.filter((story) => {
    const text = (story.headline + " " + story.summary).toLowerCase();
    return text.includes("rating") || text.includes("ratings") || text.includes("rate");
  });

  console.log(`Found ${ratingStories.length} rating stories:\n`);
  ratingStories.forEach((story, idx) => {
    console.log(`[Story ${idx + 1}]`);
    console.log(`Headline: ${story.headline}`);
    console.log(`Summary: ${story.summary}`);
    console.log(`Source: ${story.source}\n`);
  });
} catch (error) {
  console.error("Error:", error.message);
}
