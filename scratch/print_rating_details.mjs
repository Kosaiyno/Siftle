import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const stories = data.top_stories || [];

  const matched = stories.filter((s) => s.headline.includes("player ratings") || s.headline.includes("Player ratings"));
  matched.forEach((s, i) => {
    console.log(`[RATING STORY ${i+1}]`);
    console.log(JSON.stringify(s, null, 2));
    console.log("\n=========================================\n");
  });
} catch (error) {
  console.error("Error:", error.message);
}
