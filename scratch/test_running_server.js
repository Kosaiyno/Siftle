const test = async () => {
  console.log("=== Siftle API Verification ===");
  console.log("Checking Siftle API at http://localhost:5173/...\n");

  try {
    // 1. Fetch feed for category All
    console.log("1. Fetching Feed for All...");
    const allRes = await fetch("http://localhost:5173/api/feed?category=All");
    if (!allRes.ok) throw new Error(`Feed All returned HTTP ${allRes.status}`);
    const allData = await allRes.json();
    console.log(`   -> SUCCESS: Found ${allData.top_stories?.length ?? 0} stories in 'All'\n`);

    // 2. Fetch feed for category Gaming
    console.log("2. Fetching Feed for Gaming...");
    const gamingRes = await fetch("http://localhost:5173/api/feed?category=Gaming");
    if (!gamingRes.ok) throw new Error(`Feed Gaming returned HTTP ${gamingRes.status}`);
    const gamingData = await gamingRes.json();
    console.log(`   -> SUCCESS: Found ${gamingData.top_stories?.length ?? 0} stories in 'Gaming'`);
    
    // Print Gaming stories
    const stories = gamingData.top_stories || [];
    for (const story of stories) {
      console.log(`      * [${story.category}] [Accent: ${story.accent}] - ${story.headline} (${story.source})`);
      console.log(`        Link: ${story.sourceUrl}`);
    }
    console.log("");

    if (stories.length === 0) {
      console.log("   -> WARNING: No stories found in Gaming!");
      return;
    }

    // 3. Request AI Summary for the first Gaming story
    const testStory = stories[0];
    console.log(`3. Requesting AI Summary for: "${testStory.headline}"`);
    const summaryRes = await fetch("http://localhost:5173/api/summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testStory)
    });
    
    if (!summaryRes.ok) {
      const errText = await summaryRes.text();
      throw new Error(`Summary API returned HTTP ${summaryRes.status}: ${errText}`);
    }
    
    const summaryData = await summaryRes.json();
    console.log("   -> SUCCESS: Received AI Summary Payload:");
    console.log(JSON.stringify(summaryData, null, 2));
    
  } catch (err) {
    console.error("   -> TEST FAILED:", err.message);
  }
};

test();
