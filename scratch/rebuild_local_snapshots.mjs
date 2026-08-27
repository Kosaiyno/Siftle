import fs from "node:fs";
import { join } from "node:path";
import { marketThreadRules, storyMatchesMarketThreadRule } from "../scripts/marketThreadRules.mjs";

const root = "C:/Users/user/Desktop/Siftle";
const threadsDir = join(root, "data", "marketThreads");

const normalizeStoryUrl = (url) => {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    return (parsed.hostname + parsed.pathname).toLowerCase().replace(/\/$/, "");
  } catch {
    return String(url).toLowerCase().replace(/\/$/, "");
  }
};

const getMarketThread = (marketId) => {
  const threadPath = join(threadsDir, `${marketId}.json`);
  if (fs.existsSync(threadPath)) {
    return JSON.parse(fs.readFileSync(threadPath, "utf8"));
  }
  return null;
};

const processSnapshot = (file) => {
  if (!fs.existsSync(file)) {
    console.log(`${file} does not exist`);
    return;
  }
  const snapshot = JSON.parse(fs.readFileSync(file, "utf8"));
  
  const validThreads = snapshot.threads || {};
  
  snapshot.top_stories.forEach((story) => {
    const url = normalizeStoryUrl(story.sourceUrl);
    
    // Check if there's a rule for this story
    const marketRuleEntry = Object.entries(marketThreadRules).find(([, rule]) =>
      storyMatchesMarketThreadRule(story, rule)
    );
    
    if (marketRuleEntry) {
      const [marketId] = marketRuleEntry;
      const marketThread = getMarketThread(marketId);
      if (marketThread) {
        validThreads[url] = {
          topic: marketThread.topic,
          current: marketThread.current || story,
          items: marketThread.items || [],
          reviewed_by: "market-thread+feed-market-bridge",
          count: marketThread.count || 1
        };
        
        // Also attach the thread preview info to the story
        story.thread = {
          count: marketThread.count || 1,
          topic: marketThread.topic
        };
        console.log(`Matched story in feed: "${story.headline}" -> thread "${marketId}"`);
      }
    }
  });
  
  snapshot.threads = validThreads;
  fs.writeFileSync(file, JSON.stringify(snapshot, null, 2), "utf8");
  console.log(`Rebuilt threads in ${file}\n`);
};

processSnapshot(join(root, ".siftle", "published", "latest-sports.json"));
processSnapshot(join(root, ".siftle", "published", "latest-all.json"));
