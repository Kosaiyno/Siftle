import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const filePath = join(root, ".siftle", "published", "latest-sports.json");

try {
  const content = readFileSync(filePath, "utf8");
  const data = JSON.parse(content);
  console.log("Top-level keys in latest-sports.json:", Object.keys(data));
  if (data.optionMarkets) {
    console.log(`optionMarkets key found! Number of markets: ${Object.keys(data.optionMarkets).length}`);
  }
} catch (error) {
  console.error("Error:", error.message);
}
