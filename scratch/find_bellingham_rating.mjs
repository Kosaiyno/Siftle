import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const stories = data.top_stories || [];

  stories.forEach((story) => {
    const text = (story.headline + " " + story.summary);
    if (text.toLowerCase().includes("bellingham")) {
      console.log("STORY ID:", story.id);
      console.log("HEADLINE:", story.headline);
      console.log("SUMMARY:", story.summary);
      console.log("=========================================\n");
    }
  });
} catch (error) {
  console.error("Error:", error.message);
}
