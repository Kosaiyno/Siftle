import test from "node:test";
import assert from "node:assert/strict";
import {
  extractEntities,
  scoreImportance,
  clusterArticlesIntoEvents,
  calculateBriefingTimeWindow,
  filterEventsForBriefing
} from "./eventEngine.mjs";

test("extractEntities accurately identifies clubs, players, and managers", () => {
  const text = "Chelsea manager Enzo Maresca confirmed Cole Palmer is fit for the Arsenal clash, while Mikel Arteta prepares Bukayo Saka.";
  const entities = extractEntities(text);
  
  assert.ok(entities.clubs.includes("Chelsea"));
  assert.ok(entities.clubs.includes("Arsenal"));
  assert.ok(entities.managers.includes("Enzo Maresca"));
  assert.ok(entities.managers.includes("Mikel Arteta"));
  assert.ok(entities.players.includes("Cole Palmer"));
  assert.ok(entities.players.includes("Bukayo Saka"));
});

test("scoreImportance classifies official statements and multi-source stories as HIGH", () => {
  assert.equal(scoreImportance("Official: Chelsea agree deal to sign Player X", 1), "HIGH");
  assert.equal(scoreImportance("Transfer talks ongoing between clubs", 1), "MEDIUM");
  assert.equal(scoreImportance("General chat on player form", 1), "LOW");
  assert.equal(scoreImportance("General rumor", 4), "HIGH"); // 4 sources triggers HIGH
});

test("clusterArticlesIntoEvents deduplicates multiple reports of the same story into 1 event", () => {
  const rawArticles = [
    {
      title: "Chelsea agree £45m deal to sign Cole Palmer from Manchester City",
      source: "Fabrizio Romano",
      url: "https://x.com/fabrizio/1"
    },
    {
      title: "Chelsea close to completing £45m Cole Palmer signing",
      source: "Sky Sports",
      url: "https://skysports.com/1"
    },
    {
      title: "Cole Palmer set for Chelsea medical after £45m fee agreed with Man City",
      source: "BBC Sport",
      url: "https://bbc.com/sport/1"
    },
    {
      title: "Real Madrid prepare new contract extension for Vinicius Junior",
      source: "Marca",
      url: "https://marca.com/1"
    }
  ];

  const events = clusterArticlesIntoEvents(rawArticles);

  // Palmer story should be clustered into 1 event with 3 sources
  assert.equal(events.length, 2);
  const palmerEvent = events.find(e => e.title.includes("Palmer"));
  assert.ok(palmerEvent);
  assert.equal(palmerEvent.sources.length, 3);
  assert.ok(palmerEvent.entities.clubs.includes("Chelsea"));
  assert.ok(palmerEvent.entities.players.includes("Cole Palmer"));
});

test("calculateBriefingTimeWindow enforces daily boundary and same-day delta", () => {
  // Case 1: No previous briefing -> starts at beginning of today UTC
  const firstWindow = calculateBriefingTimeWindow(null);
  assert.equal(firstWindow.isNewDay, true);
  assert.ok(firstWindow.periodStart.endsWith("T00:00:00.000Z"));

  // Case 2: Last briefing was yesterday -> resets to beginning of today
  const yesterdayIso = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
  const nextDayWindow = calculateBriefingTimeWindow(yesterdayIso);
  assert.equal(nextDayWindow.isNewDay, true);
  assert.ok(nextDayWindow.periodStart.endsWith("T00:00:00.000Z"));

  // Case 3: Same day briefing (2 hours ago) -> starts from last briefing
  const twoHoursAgo = new Date(Date.now() - 2 * 3600 * 1000).toISOString();
  const sameDayWindow = calculateBriefingTimeWindow(twoHoursAgo);
  assert.equal(sameDayWindow.isNewDay, false);
  assert.equal(sameDayWindow.periodStart, twoHoursAgo);
});

test("filterEventsForBriefing filters for personalized preferences", () => {
  const events = [
    {
      id: "1",
      title: "Cole Palmer scores brace in Chelsea win",
      importance: "HIGH",
      entities: { clubs: ["Chelsea"], managers: ["Enzo Maresca"], players: ["Cole Palmer"] },
      last_updated_at: new Date().toISOString()
    },
    {
      id: "2",
      title: "Erling Haaland hat-trick for Man City",
      importance: "HIGH",
      entities: { clubs: ["Manchester City"], managers: ["Pep Guardiola"], players: ["Erling Haaland"] },
      last_updated_at: new Date().toISOString()
    }
  ];

  const overall = filterEventsForBriefing(events, { context: "overall" });
  assert.equal(overall.length, 2);

  const personalized = filterEventsForBriefing(events, {
    context: "personalized",
    entities: { clubs: ["Chelsea"], players: ["Cole Palmer"] }
  });
  assert.equal(personalized.length, 1);
  assert.equal(personalized[0].id, "1");
});
