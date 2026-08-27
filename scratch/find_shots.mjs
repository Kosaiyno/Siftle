import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const stories = data.top_stories || [];

  const matched = stories.filter((story) => {
    const text = (story.headline + " " + story.summary).toLowerCase();
    return text.includes("shots") || text.includes("shot") || text.includes("target");
  });

  console.log(`Found ${matched.length} stories about shots:\n`);
  matched.forEach((story, idx) => {
    console.log(`[Story ${idx + 1}]`);
    console.log(`Headline: ${story.headline}`);
    console.log(`Summary: ${story.summary}`);
    console.log(`Source: ${story.source}\n`);
  });
} catch (error) {
  console.error("Error:", error.message);
}
