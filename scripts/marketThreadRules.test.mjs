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

test("England World Cup market accepts England opener prep", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "England win over New Zealand provides reminder of Harry Kane", "England's victory proved Kane is pivotal to their World Cup hopes."),
      marketThreadRules["england-world-cup-opener"]
    ),
    true
  );
});

test("England World Cup market rejects women's qualifier context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Bonmati in Spain squad for crucial England qualifier", "Spain face England in a Women's World Cup qualifier."),
      marketThreadRules["england-world-cup-opener"]
    ),
    false
  );
});

test("Neymar market accepts Brazil injury context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Brazil's Ancelotti: Neymar to have MRI Monday", "Neymar is racing to be fit for the World Cup after a calf injury."),
      marketThreadRules["neymar-world-cup-opener"]
    ),
    true
  );
});

test("Iran visa market accepts World Cup visa dispute context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Iran says U.S. denied visas to key WC officials", "Iran accused the United States of refusing visas before the World Cup."),
      marketThreadRules["iran-world-cup-visas"]
    ),
    true
  );
});

test("market rules expose stable thread topics", () => {
  assert.equal(marketThreadRules["nba-finals"].topic, "Spurs 2026 NBA Finals Run");
  assert.equal(marketThreadRules["strategy-bitcoin-sale"].topic, "Strategy Bitcoin Sale Fallout");
  assert.equal(marketThreadRules["new-glenn-2026"].topic, "Blue Origin New Glenn Launchpad Probe");
  assert.equal(marketThreadRules["england-world-cup-opener"].topic, "England World Cup Opener Prep");
  assert.equal(marketThreadRules["neymar-world-cup-opener"].topic, "Neymar Brazil World Cup Fitness Watch");
  assert.equal(marketThreadRules["iran-world-cup-visas"].topic, "Iran World Cup Visa Dispute");
});
