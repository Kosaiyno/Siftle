import { readFileSync } from 'fs';
import { join } from 'path';

const filePath = '.siftle/published/latest-sports.json';
const snapshot = JSON.parse(readFileSync(filePath, 'utf8'));

const keywords = ['transfer', 'bid', 'sign', 'agree', 'contract', 'join', 'fee', 'deal', 'target', 'contact', 'medical', 'here we go', 'negotiat', 'personal terms'];

console.log(`Analyzing ${snapshot.top_stories.length} stories in latest-sports.json...\n`);

const matches = [];
for (const story of snapshot.top_stories) {
  const headline = story.headline || '';
  const lower = headline.toLowerCase();
  
  const hasKeyword = keywords.some(k => lower.includes(k));
  if (hasKeyword) {
    matches.push(story);
  }
}

console.log(`Found ${matches.length} transfer/deal-related stories:\n`);
matches.slice(30, 60).forEach((story, index) => {
  console.log(`${index + 31}. [${story.source || 'Unknown'}] ${story.headline}`);
  console.log(`   URL: ${story.sourceUrl}`);
  if (story.summary) {
    console.log(`   Summary: ${story.summary.slice(0, 120)}...`);
  }
  console.log();
});
