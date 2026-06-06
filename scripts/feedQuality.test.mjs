import test from "node:test";
import assert from "node:assert/strict";
import { analyzeFeedSnapshot, assertFeedSnapshotQuality, isSortedNewestFirst } from "./feedQuality.mjs";

const story = (headline, publishedAt, sourceUrl = `https://news.example/${encodeURIComponent(headline)}`) => ({
  headline,
  category: "Crypto",
  source: "Test Source",
  sourceUrl,
  publishedAt,
  summary: headline,
  postedAt: "1h"
});

test("feed health flags development fallback mixed with real stories", () => {
  const snapshot = {
    category: "Crypto",
    generated_at: "2026-06-06T12:00:00.000Z",
    top_stories: [
      story("Real crypto story", "2026-06-06T11:30:00.000Z", "https://coindesk.com/story"),
      story("Mock fallback story", "2026-06-06T11:45:00.000Z", "https://example.com/mock")
    ]
  };

  const health = analyzeFeedSnapshot(snapshot, { now: new Date("2026-06-06T12:10:00.000Z") });
  assert.equal(health.status, "warning");
  assert.ok(health.warnings.includes("fallback-mixed-with-real"));
  assert.throws(() => assertFeedSnapshotQuality(snapshot), /fallback-mixed-with-real/);
});

test("feed health accepts real stories sorted newest first", () => {
  const snapshot = {
    category: "Crypto",
    generated_at: "2026-06-06T12:00:00.000Z",
    top_stories: [
      story("Newest", "2026-06-06T11:45:00.000Z", "https://coindesk.com/newest"),
      story("Older", "2026-06-06T10:45:00.000Z", "https://coindesk.com/older")
    ]
  };

  assert.equal(isSortedNewestFirst(snapshot.top_stories), true);
  assert.equal(assertFeedSnapshotQuality(snapshot, { now: new Date("2026-06-06T12:10:00.000Z") }).status, "ok");
});

test("feed health rejects feeds that are not newest first", () => {
  const snapshot = {
    category: "Sports",
    generated_at: "2026-06-06T12:00:00.000Z",
    top_stories: [
      story("Older first", "2026-06-06T10:45:00.000Z", "https://espn.com/older"),
      story("Newest second", "2026-06-06T11:45:00.000Z", "https://espn.com/newest")
    ]
  };

  assert.equal(isSortedNewestFirst(snapshot.top_stories), false);
  assert.throws(() => assertFeedSnapshotQuality(snapshot), /not-newest-first/);
});
