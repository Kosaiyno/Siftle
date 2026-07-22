import test from "node:test";
import assert from "node:assert/strict";
import { resolveOptionMarketInData, sanitizeTrafficSource } from "./serve.mjs";

test("resolveOptionMarketInData awards default 100 points for normal markets", () => {
  const data = {
    leaderboard: {
      traders: {},
      resolvedResults: {},
      bonusEvents: {}
    },
    optionMarkets: {
      markets: {
        "market-normal": {
          resolvedOptionId: null,
          resolvedAt: null,
          positions: {
            "0x1111111111111111111111111111111111111111": { optionId: "yes", amountUsdc: 10, createdAt: new Date().toISOString() }
          }
        }
      }
    }
  };

  const market = {
    id: "market-normal",
    optionMarket: true,
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" }
    ]
  };

  resolveOptionMarketInData(data, market, "yes");

  const result = data.leaderboard.resolvedResults["0x1111111111111111111111111111111111111111"]["market-normal"];
  assert.equal(result.result, "win");
  assert.equal(result.points, 100);
});

test("resolveOptionMarketInData awards 0 points for 0-point preseason markets", () => {
  const data = {
    leaderboard: {
      traders: {},
      resolvedResults: {},
      bonusEvents: {}
    },
    optionMarkets: {
      markets: {
        "market-friendly": {
          resolvedOptionId: null,
          resolvedAt: null,
          positions: {
            "0x2222222222222222222222222222222222222222": { optionId: "yes", amountUsdc: 10, createdAt: new Date().toISOString() }
          }
        }
      }
    }
  };

  const market = {
    id: "market-friendly",
    optionMarket: true,
    points: 0,
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" }
    ]
  };

  resolveOptionMarketInData(data, market, "yes");

  const result = data.leaderboard.resolvedResults["0x2222222222222222222222222222222222222222"]["market-friendly"];
  assert.equal(result.result, "win");
  assert.equal(result.points, 0);
});

test("Season 1 final snapshot structure and integrity", async () => {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  
  const snapshotPath = path.join(process.cwd(), "data", "season_snapshots", "season1_final.json");
  const content = await fs.readFile(snapshotPath, "utf8");
  const players = JSON.parse(content);
  
  assert.ok(Array.isArray(players), "Snapshot should be an array of players");
  assert.ok(players.length > 0, "Snapshot should contain players");
  
  const firstPlayer = players[0];
  assert.ok("wallet_address" in firstPlayer, "Player must have wallet_address");
  assert.ok("username" in firstPlayer, "Player must have username");
  assert.ok("points" in firstPlayer, "Player must have points");
  assert.ok("wins" in firstPlayer, "Player must have wins");
  assert.ok("losses" in firstPlayer, "Player must have losses");
  assert.ok("total_trades" in firstPlayer, "Player must have total_trades");
  assert.ok("ai_briefing_unlocks" in firstPlayer, "Player must have ai_briefing_unlocks");
});

test("buildPreseasonLeaderboardPlayers requires at least 3 unlocks daily for 30 points (0 points otherwise)", async () => {
  const { buildPreseasonLeaderboardPlayers } = await import("./serve.mjs");
  
  const data = {
    leaderboard: {
      traders: {},
      aiBriefingUnlocks: {}
    }
  };

  const profiles = [
    { wallet_address: "0x1111111111111111111111111111111111111111", username: "user1" },
    { wallet_address: "0x2222222222222222222222222222222222222222", username: "user2" },
    { wallet_address: "0x3333333333333333333333333333333333333333", username: "user3" }
  ];

  const unlocks = [
    // User 1: 5 unlocks on 2026-07-21 (>=3, so 1 day completed = 30 points)
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-21", created_at: "2026-07-21T09:00:00Z" },
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-21", created_at: "2026-07-21T10:00:00Z" },
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-21", created_at: "2026-07-21T11:00:00Z" },
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-21", created_at: "2026-07-21T12:00:00Z" },
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-21", created_at: "2026-07-21T13:00:00Z" },
    
    // User 2: 3 unlocks on 2026-07-21 (>=3 -> 30 pts) and 4 unlocks on 2026-07-22 (>=3 -> 30 pts) -> 2 days completed = 60 points
    { wallet_address: "0x2222222222222222222222222222222222222222", date_key: "2026-07-21", created_at: "2026-07-21T09:00:00Z" },
    { wallet_address: "0x2222222222222222222222222222222222222222", date_key: "2026-07-21", created_at: "2026-07-21T10:00:00Z" },
    { wallet_address: "0x2222222222222222222222222222222222222222", date_key: "2026-07-21", created_at: "2026-07-21T11:00:00Z" },
    { wallet_address: "0x2222222222222222222222222222222222222222", date_key: "2026-07-22", created_at: "2026-07-22T09:00:00Z" },
    { wallet_address: "0x2222222222222222222222222222222222222222", date_key: "2026-07-22", created_at: "2026-07-22T10:00:00Z" },
    { wallet_address: "0x2222222222222222222222222222222222222222", date_key: "2026-07-22", created_at: "2026-07-22T11:00:00Z" },
    { wallet_address: "0x2222222222222222222222222222222222222222", date_key: "2026-07-22", created_at: "2026-07-22T12:00:00Z" },

    // User 3: 2 unlocks on 2026-07-21 (<3, so 0 days completed = 0 points)
    { wallet_address: "0x3333333333333333333333333333333333333333", date_key: "2026-07-21", created_at: "2026-07-21T09:00:00Z" },
    { wallet_address: "0x3333333333333333333333333333333333333333", date_key: "2026-07-21", created_at: "2026-07-21T10:00:00Z" }
  ];

  const players = buildPreseasonLeaderboardPlayers(data, profiles, unlocks);

  // User 3 should not be in the leaderboard list because they have 0 points / completed days
  assert.equal(players.length, 2);
  
  // User 2 should be ranked 1st with 2 days completed = 60 points
  const p1 = players[0];
  assert.equal(p1.username, "0x2222222222222222222222222222222222222222");
  assert.equal(p1.points, 60);
  assert.equal(p1.status, "2 days completed");

  // User 1 should be ranked 2nd with 1 day completed = 30 points
  const p2 = players[1];
  assert.equal(p2.username, "0x1111111111111111111111111111111111111111");
  assert.equal(p2.points, 30);
  assert.equal(p2.status, "1 day completed");
});

test("buildPreseasonLeaderboardPlayers includes unlocks from yesterday 2026-07-20 but filters earlier ones", async () => {
  const { buildPreseasonLeaderboardPlayers } = await import("./serve.mjs");

  const data = {
    leaderboard: {
      traders: {},
      aiBriefingUnlocks: {
        // User 1: 3 local unlocks on 2026-07-20 (yesterday) -> should count
        "0x1111111111111111111111111111111111111111:2026-07-20": [
          { createdAt: "2026-07-20T09:00:00Z" },
          { createdAt: "2026-07-20T10:00:00Z" },
          { createdAt: "2026-07-20T11:00:00Z" }
        ],
        // User 1: 3 local unlocks on 2026-07-19 (earlier) -> should be filtered out
        "0x1111111111111111111111111111111111111111:2026-07-19": [
          { createdAt: "2026-07-19T09:00:00Z" },
          { createdAt: "2026-07-19T10:00:00Z" },
          { createdAt: "2026-07-19T11:00:00Z" }
        ]
      }
    }
  };

  const profiles = [
    { wallet_address: "0x1111111111111111111111111111111111111111", username: "user1" }
  ];

  // 1. Test local fallback
  const playersFallback = buildPreseasonLeaderboardPlayers(data, profiles, null);
  assert.equal(playersFallback.length, 1);
  assert.equal(playersFallback[0].points, 30); // 2026-07-20 counted, 2026-07-19 ignored

  // 2. Test Supabase path
  const supabaseUnlocks = [
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-20", created_at: "2026-07-20T12:00:00Z" },
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-20", created_at: "2026-07-20T13:00:00Z" },
    { wallet_address: "0x1111111111111111111111111111111111111111", date_key: "2026-07-20", created_at: "2026-07-20T14:00:00Z" }
  ];
  const playersSupabase = buildPreseasonLeaderboardPlayers(data, profiles, supabaseUnlocks);
  assert.equal(playersSupabase.length, 1);
  assert.equal(playersSupabase[0].points, 30);
});

test("sanitizeTrafficSource parses and sanitizes source names correctly", () => {
  // Allowed sources should remain unchanged (lowercased)
  assert.equal(sanitizeTrafficSource("x"), "x");
  assert.equal(sanitizeTrafficSource("IG"), "ig");
  assert.equal(sanitizeTrafficSource("  google  "), "google");
  assert.equal(sanitizeTrafficSource("briefing"), "briefing");
  assert.equal(sanitizeTrafficSource("  Briefing  "), "briefing");
  
  // Unallowed/unrecognized sources should fall back to organic
  assert.equal(sanitizeTrafficSource("facebook"), "organic");
  assert.equal(sanitizeTrafficSource("tiktok"), "organic");
  assert.equal(sanitizeTrafficSource(""), "organic");
  assert.equal(sanitizeTrafficSource(null), "organic");
  assert.equal(sanitizeTrafficSource(undefined), "organic");
});



