import test from "node:test";
import assert from "node:assert/strict";
import { marketThreadRules, storyMatchesMarketThreadRule } from "./marketThreadRules.mjs";

const story = (category, headline, summary = "") => ({ category, headline, summary, sourceUrl: "https://source.test/story" });

test("NBA market accepts San Antonio Spurs NBA context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Wembanyama expects Spurs response after Game 1 loss", "San Antonio remains confident in the NBA Finals."),
      marketThreadRules["nba-finals"]
    ),
    true
  );
});

test("NBA market rejects Tottenham Spurs football context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Spurs sign Andy Robertson on free transfer", "Tottenham bring in the Liverpool defender for Premier League campaign."),
      marketThreadRules["nba-finals"]
    ),
    false
  );
});

test("Strategy market accepts MicroStrategy bitcoin sale context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Crypto", "Strategy sale dispute reaches a final market resolution", "Traders debate whether MicroStrategy sold BTC from its treasury."),
      marketThreadRules["strategy-bitcoin-sale"]
    ),
    true
  );
});

test("Strategy market rejects unrelated bitcoin treasury companies", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Crypto", "HIVE Bitcoin holdings drop by 331 BTC", "The miner reported revenue and bitcoin holdings changes."),
      marketThreadRules["strategy-bitcoin-sale"]
    ),
    false
  );
});

test("Strategy market rejects generic bitcoin price strategy stories", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Crypto", "Bitcoin Price Plunges To $59K", "Traders are watching support levels and adjusting their market strategy after liquidations."),
      marketThreadRules["strategy-bitcoin-sale"]
    ),
    false
  );
});

test("New Glenn market accepts Blue Origin launchpad context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Tech", "Blue Origin plans to launch New Glenn again this year", "The company is investigating launchpad explosion damage."),
      marketThreadRules["new-glenn-2026"]
    ),
    true
  );
});

test("market rules expose stable thread topics", () => {
  assert.equal(marketThreadRules["nba-finals"].topic, "Spurs 2026 NBA Finals Run");
  assert.equal(marketThreadRules["strategy-bitcoin-sale"].topic, "Strategy Bitcoin Sale Fallout");
  assert.equal(marketThreadRules["new-glenn-2026"].topic, "Blue Origin New Glenn Launchpad Probe");
});
