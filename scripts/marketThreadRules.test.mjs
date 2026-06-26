import test from "node:test";
import assert from "node:assert/strict";
import { marketThreadRules, storyMatchesMarketThreadRule } from "./marketThreadRules.mjs";

const story = (category, headline, summary = "") => ({ category, headline, summary, sourceUrl: "https://source.test/story" });

test("GTA 6 market accepts GTA 6 delay context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Gaming", "Rockstar reportedly considering GTA 6 delay to 2027", "Internal sources claim Grand Theft Auto VI might miss its late 2026 window."),
      marketThreadRules["gta6-delay-2026"]
    ),
    true
  );
});

test("GTA 6 market rejects GTA 5 or RP context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Gaming", "GTA 5 online update brings new RP server tools", "Rockstar releases a new subscription package for GTA V Online players."),
      marketThreadRules["gta6-delay-2026"]
    ),
    false
  );
});

test("Davies transfer market accepts Real Madrid negotiation context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Real Madrid agree personal terms with Alphonso Davies", "The Bayern Munich left-back is close to signing a summer transfer contract."),
      marketThreadRules["transfer-davies-realmadrid"]
    ),
    true
  );
});

test("Davies transfer market rejects Premier League/Arsenal context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Arsenal sign left-back from Premier League rival", "The Gunners agree a record fee with Manchester United for a new contract."),
      marketThreadRules["transfer-davies-realmadrid"]
    ),
    false
  );
});

test("One Piece Manga market accepts Chapter 1200 leaks", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Anime", "One Piece Chapter 1200 spoilers reveal Ancient Weapon details", "Oda reveals key details about Uranus and Imu in the latest scanlations."),
      marketThreadRules["manga-onepiece-1200"]
    ),
    true
  );
});

test("One Piece Manga market rejects Jujutsu Kaisen spoilers", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Anime", "Jujutsu Kaisen chapter leak shocks fans", "JJK spoilers and scanlations show final battle details."),
      marketThreadRules["manga-onepiece-1200"]
    ),
    false
  );
});

test("market rules expose stable thread topics", () => {
  assert.equal(marketThreadRules["gta6-delay-2026"].topic, "GTA 6 Release Timing and Studio Status");
  assert.equal(marketThreadRules["transfer-davies-realmadrid"].topic, "Alphonso Davies Real Madrid Transfer Talks");
  assert.equal(marketThreadRules["manga-onepiece-1200"].topic, "One Piece Manga Chapter Spoilers");
});
