import test from "node:test";
import assert from "node:assert/strict";
import { marketThreadRules, storyMatchesMarketThreadRule } from "./marketThreadRules.mjs";

const story = (category, headline, summary = "") => ({ category, headline, summary, sourceUrl: "https://source.test/story" });

test("Tonali transfer market accepts Tottenham negotiation context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Tottenham leading Arsenal in Sandro Tonali race", "Spurs explore summer transfer move for Newcastle midfielder Tonali."),
      marketThreadRules["transfer-tonali-spurs"]
    ),
    true
  );
});

test("Tonali transfer market rejects other clubs/sports", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Liverpool sign midfielder from Bayern Munich", "The Anfield club agree terms with Bundesliga giants."),
      marketThreadRules["transfer-tonali-spurs"]
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
  assert.equal(marketThreadRules["transfer-tonali-spurs"].topic, "Sandro Tonali Tottenham Transfer Link");
  assert.equal(marketThreadRules["transfer-davies-realmadrid"].topic, "Alphonso Davies Real Madrid Transfer Talks");
  assert.equal(marketThreadRules["manga-onepiece-1200"].topic, "One Piece Manga Chapter Spoilers");
  assert.equal(marketThreadRules["wc-messi-ronaldo-16"].topic, "Messi and Ronaldo World Cup Knockout");
});

test("Messi and Ronaldo knockout market matches World Cup tournament stories", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Messi and Ronaldo face knockout stage tests", "Argentina and Portugal prepare for crucial World Cup round of 32 matches next week."),
      marketThreadRules["wc-messi-ronaldo-16"]
    ),
    true
  );
});

test("Messi and Ronaldo knockout market rejects unrelated sports stories", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Cricket World Cup finals highlights", "India wins the cricket tournament after a thriller game."),
      marketThreadRules["wc-messi-ronaldo-16"]
    ),
    false
  );
});
