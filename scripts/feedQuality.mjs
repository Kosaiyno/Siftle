const categories = ["All", "Sports"];

export const isDevelopmentFallbackStory = (story) => !story?.sourceUrl || /example\.com/i.test(story.sourceUrl);

export const getStoryTimestamp = (story) => {
  const time = new Date(story?.publishedAt || 0).getTime();
  return Number.isFinite(time) ? time : 0;
};

export const isSortedNewestFirst = (stories = []) => {
  for (let index = 1; index < stories.length; index += 1) {
    if (getStoryTimestamp(stories[index]) > getStoryTimestamp(stories[index - 1])) return false;
  }
  return true;
};

const getSourceCounts = (stories = []) =>
  stories.reduce((counts, story) => {
    const source = story?.source || "unknown";
    counts[source] = (counts[source] ?? 0) + 1;
    return counts;
  }, {});

export const analyzeFeedSnapshot = (snapshot, options = {}) => {
  const now = options.now instanceof Date ? options.now : new Date(options.now ?? Date.now());
  const refreshIntervalMinutes = Number(options.refreshIntervalMinutes ?? 60);
  const category = categories.includes(snapshot?.category) ? snapshot.category : "Unknown";
  const stories = Array.isArray(snapshot?.top_stories) ? snapshot.top_stories : [];
  const realStories = stories.filter((story) => !isDevelopmentFallbackStory(story));
  const fallbackStories = stories.filter(isDevelopmentFallbackStory);
  const generatedAt = snapshot?.generated_at || snapshot?.published_at || null;
  const generatedTime = generatedAt ? new Date(generatedAt).getTime() : 0;
  const ageMinutes = generatedTime ? Math.max(0, Math.round((now.getTime() - generatedTime) / 60000)) : null;
  const newestStory = [...stories].sort((first, second) => getStoryTimestamp(second) - getStoryTimestamp(first))[0] ?? null;
  const newestTime = getStoryTimestamp(newestStory);
  const newestAgeMinutes = newestTime ? Math.max(0, Math.round((now.getTime() - newestTime) / 60000)) : null;
  const warnings = [];

  if (!stories.length) warnings.push("no-stories");
  if (realStories.length > 0 && fallbackStories.length > 0) warnings.push("fallback-mixed-with-real");
  if (!isSortedNewestFirst(stories)) warnings.push("not-newest-first");
  if (ageMinutes !== null && ageMinutes > Math.max(120, refreshIntervalMinutes * 3)) warnings.push("published-snapshot-stale");
  if (realStories.length === 0 && fallbackStories.length > 0) warnings.push("development-fallback-only");

  return {
    category,
    status: warnings.length ? "warning" : "ok",
    generated_at: generatedAt,
    age_minutes: ageMinutes,
    story_count: stories.length,
    real_story_count: realStories.length,
    fallback_story_count: fallbackStories.length,
    thread_count: Object.keys(snapshot?.threads ?? {}).length,
    newest_story: newestStory
      ? {
          headline: newestStory.headline,
          source: newestStory.source,
          published_at: newestStory.publishedAt ?? null,
          age_minutes: newestAgeMinutes
        }
      : null,
    source_counts: getSourceCounts(stories),
    warnings
  };
};

export const assertFeedSnapshotQuality = (snapshot, options = {}) => {
  const health = analyzeFeedSnapshot(snapshot, options);
  const blockingWarnings = health.warnings.filter((warning) =>
    ["fallback-mixed-with-real", "not-newest-first", "development-fallback-only", "no-stories"].includes(warning)
  );

  if (blockingWarnings.length) {
    throw new Error(`${health.category} feed quality failed: ${blockingWarnings.join(", ")}`);
  }

  return health;
};
