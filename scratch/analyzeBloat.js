import { readFileSync } from "node:fs";
import { join } from "node:path";

const siftleDir = join(process.cwd(), ".siftle");
const filePath = join(siftleDir, "published", "latest-all.json");

console.log("Reading file...");
const data = JSON.parse(readFileSync(filePath, "utf8"));

console.log("\nSizes of top-level keys in characters:");
for (const key of Object.keys(data)) {
  const size = JSON.stringify(data[key])?.length ?? 0;
  console.log(`${key}: ${(size / 1024 / 1024).toFixed(2)} MB (${size} chars)`);
}

if (data.threads && typeof data.threads === "object") {
  const threadsList = Object.keys(data.threads).map(url => {
    const size = JSON.stringify(data.threads[url])?.length ?? 0;
    return { url, size };
  });
  
  // Sort descending
  threadsList.sort((a, b) => b.size - a.size);
  
  console.log("\nTop 10 largest threads:");
  for (let i = 0; i < Math.min(10, threadsList.length); i++) {
    const t = threadsList[i];
    console.log(`${i+1}. ${t.url}: ${(t.size / 1024 / 1024).toFixed(2)} MB (${t.size} chars)`);
  }

  if (threadsList.length > 0) {
    const largestUrl = threadsList[0].url;
    const largestThread = data.threads[largestUrl];
    console.log(`\nKeys of largest thread:`, Object.keys(largestThread));
    
    // Analyze subkeys of the largest thread
    for (const key of Object.keys(largestThread)) {
      const size = JSON.stringify(largestThread[key])?.length ?? 0;
      console.log(`- ${key}: ${(size / 1024 / 1024).toFixed(4)} MB (${size} chars)`);
    }
    
    if (typeof largestThread.reviewed_by === "string") {
      console.log("\nreviewed_by snippet:", largestThread.reviewed_by.substring(0, 500));
      console.log("Length of reviewed_by:", largestThread.reviewed_by.length);
    } else {
      console.log("\nreviewed_by type:", typeof largestThread.reviewed_by);
    }
  }
}




