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

test("Brazil Japan market matches fresh World Cup scoring coverage", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Vinicius helps Brazil beat Japan in World Cup knockout", "Brazil advance from the 2026 World Cup after Vinicius scores in the last-16 tie."),
      marketThreadRules["wc-vinicius-score-japan"]
    ),
    true
  );
});

test("Morocco Netherlands market matches elimination result coverage", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Morocco eliminate Netherlands on penalties in World Cup thriller", "The Dutch are eliminated from the 2026 World Cup after Morocco advance from the knockout match."),
      marketThreadRules["wc-morocco-eliminate-netherlands"]
    ),
    true
  );
});

test("Current World Cup rules still reject basketball stories", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Japan stun Germany in basketball exhibition", "A late three-pointer seals the result in pre-tournament play."),
      marketThreadRules["wc-paraguay-score-germany"]
    ),
    false
  );
});

test("Ivory Coast Norway market rejects Brazil bridge stories", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Martinelli scores stoppage-time winner to send Brazil through to last 16", "Brazil set up a World Cup last-16 tie against Norway or Ivory Coast after beating Japan."),
      marketThreadRules["wc-ivory-coast-eliminate-norway"]
    ),
    false
  );
});

test("Ivory Coast Norway market accepts real knockout preview context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Ivory Coast vs Norway knockout preview", "Ivory Coast and Norway meet in the 2026 World Cup last-16 match with elimination and advancement on the line."),
      marketThreadRules["wc-ivory-coast-eliminate-norway"]
    ),
    true
  );
});

test("England DR Congo market accepts team-specific scoring context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "England right-backs Quansah and James out of DR Congo game", "Thomas Tuchel must adjust England's World Cup lineup before the knockout match against DR Congo."),
      marketThreadRules["wc-england-score-both-halves-drc"]
    ),
    true
  );
});

test("England DR Congo market rejects broad schedule involving other matches", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "World Cup today: England, Belgium and USA all in action", "Belgium face Senegal and the United States play Bosnia after England's fixture."),
      marketThreadRules["wc-england-score-both-halves-drc"]
    ),
    false
  );
});

test("De Bruyne Senegal market accepts Belgium player goal involvement context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "Kevin De Bruyne can decide Belgium vs Senegal", "Belgium need De Bruyne's passing, goals and assists in their 2026 World Cup knockout match against Senegal."),
      marketThreadRules["wc-de-bruyne-score-assist-senegal"]
    ),
    true
  );
});

test("USA Bosnia market accepts early attacking context", () => {
  assert.equal(
    storyMatchesMarketThreadRule(
      story("Sports", "USMNT face Bosnia in Santa Clara", "Pulisic and Pochettino want the United States to start fast and score early in the World Cup knockout match."),
      marketThreadRules["wc-usa-score-before-20-bosnia"]
    ),
    true
  );
});
