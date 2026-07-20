import test from "node:test";
import assert from "node:assert/strict";
import { resolveOptionMarketInData } from "./serve.mjs";

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
