import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  const threads = data.threads || {};

  const targetTopic = Object.keys(threads).find((t) => t.toLowerCase().includes("argentina") || t.toLowerCase().includes("england"));
  if (targetTopic) {
    const threadObj = threads[targetTopic];
    console.log(`\n--- "current" content of thread "${targetTopic}" ---`);
    console.log(JSON.stringify(threadObj.current, null, 2));
  } else {
    console.log("No matching thread topic found.");
  }
} catch (error) {
  console.error("Error:", error.message);
}
