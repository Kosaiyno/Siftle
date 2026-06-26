import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const siftleDir = join(process.cwd(), ".siftle");
const publishedDir = join(siftleDir, "published");
const marketThreadsDir = join(siftleDir, "market-threads");

const stripStoryTempFields = (story) => {
  if (!story) return story;
  const { __threadContext, thread, ...clean } = story;
  return clean;
};

const sanitizeThread = (thread) => {
  if (!thread) return thread;
  const cleanThread = { ...thread };
  if (typeof cleanThread.reviewed_by === "string" && cleanThread.reviewed_by.length > 80) {
    cleanThread.reviewed_by = cleanThread.reviewed_by.split("+").filter((v, i, a) => a.indexOf(v) === i).join("+");
    if (cleanThread.reviewed_by.length > 80) {
      cleanThread.reviewed_by = cleanThread.reviewed_by.slice(0, 80) + "...";
    }
  }
  if (cleanThread.current) {
    cleanThread.current = stripStoryTempFields(cleanThread.current);
  }
  if (Array.isArray(cleanThread.items)) {
    cleanThread.items = cleanThread.items.map(stripStoryTempFields);
  }
  return cleanThread;
};

// 1. Sanitize Published Snapshots
if (existsSync(publishedDir)) {
  const files = readdirSync(publishedDir).filter(f => f.endsWith(".json"));
  for (const file of files) {
    const filePath = join(publishedDir, file);
    try {
      console.log(`Processing published snapshot: ${file}`);
      const data = JSON.parse(readFileSync(filePath, "utf8"));
      
      if (Array.isArray(data.top_stories)) {
        data.top_stories = data.top_stories.map(story => {
          const cleanStory = stripStoryTempFields(story);
          // Keep light thread info if present
          if (story.thread && typeof story.thread === "object") {
            cleanStory.thread = {
              count: story.thread.count,
              topic: story.thread.topic
            };
          }
          return cleanStory;
        });
      }
      
      if (data.threads && typeof data.threads === "object") {
        for (const url of Object.keys(data.threads)) {
          data.threads[url] = sanitizeThread(data.threads[url]);
        }
      }
      
      writeFileSync(filePath, JSON.stringify(data), "utf8");
      console.log(`Successfully sanitized ${file}`);
    } catch (err) {
      console.error(`Failed to process ${file}:`, err.message);
    }
  }
}

// 2. Sanitize Market Threads
if (existsSync(marketThreadsDir)) {
  const files = readdirSync(marketThreadsDir).filter(f => f.endsWith(".json"));
  for (const file of files) {
    const filePath = join(marketThreadsDir, file);
    try {
      console.log(`Processing market thread: ${file}`);
      const data = JSON.parse(readFileSync(filePath, "utf8"));
      const sanitized = sanitizeThread(data);
      writeFileSync(filePath, JSON.stringify(sanitized), "utf8");
      console.log(`Successfully sanitized ${file}`);
    } catch (err) {
      console.error(`Failed to process ${file}:`, err.message);
    }
  }
}

console.log("All existing bloated files have been sanitized!");
