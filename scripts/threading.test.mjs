import test from "node:test";
import assert from "node:assert/strict";
import { isCandidatePrior, getHistoricalThreadCandidates } from "./serve.mjs";

test("isCandidatePrior - compares valid timestamps", () => {
  const storyNewer = { publishedAt: "2026-06-17T12:00:00Z", sourceUrl: "https://a.com" };
  const storyOlder = { publishedAt: "2026-06-17T11:00:00Z", sourceUrl: "https://b.com" };

  assert.equal(isCandidatePrior(storyOlder, storyNewer), true);
  assert.equal(isCandidatePrior(storyNewer, storyOlder), false);
});

test("isCandidatePrior - uses URL as tie-breaker for identical timestamps", () => {
  const storyA = { publishedAt: "2026-06-17T12:00:00Z", sourceUrl: "https://a.com" };
  const storyB = { publishedAt: "2026-06-17T12:00:00Z", sourceUrl: "https://b.com" };

  // Alphabetically, https://a.com < https://b.com
  // So storyA is prior/older than storyB
  assert.equal(isCandidatePrior(storyA, storyB), true);
  assert.equal(isCandidatePrior(storyB, storyA), false);
});

test("isCandidatePrior - uses URL as tie-breaker for missing timestamps", () => {
  const storyA = { sourceUrl: "https://a.com" };
  const storyB = { sourceUrl: "https://b.com" };

  assert.equal(isCandidatePrior(storyA, storyB), true);
  assert.equal(isCandidatePrior(storyB, storyA), false);
});

test("getHistoricalThreadCandidates - same-cycle candidates matching and anti-double-threading", () => {
  const storyNewer = {
    category: "Sports",
    headline: "England match update newer",
    publishedAt: "2026-06-17T12:00:00Z",
    sourceUrl: "https://sports.test/newer"
  };

  const storyOlder = {
    category: "Sports",
    headline: "England match update older",
    publishedAt: "2026-06-17T11:00:00Z",
    sourceUrl: "https://sports.test/older"
  };

  const currentStories = [storyNewer, storyOlder];

  // 1. The newer story should see the older story as a candidate
  const candidatesForNewer = getHistoricalThreadCandidates(storyNewer, currentStories);
  const foundOlder = candidatesForNewer.some(c => c.sourceUrl === storyOlder.sourceUrl);
  assert.equal(foundOlder, true);

  // 2. The older story should NOT see the newer story as a candidate (preventing duplicate thread starters)
  const candidatesForOlder = getHistoricalThreadCandidates(storyOlder, currentStories);
  const foundNewer = candidatesForOlder.some(c => c.sourceUrl === storyNewer.sourceUrl);
  assert.equal(foundNewer, false);
});
