export const marketThreadRules = {
  "new-glenn-2026": {
    category: "Tech",
    topic: "Blue Origin New Glenn Launchpad Probe",
    includeAll: ["blue origin", "new glenn"],
    includeAny: ["launch", "launchpad", "explosion", "probe", "fly", "again", "vehicle"],
    reject: ["spacex", "starship", "falcon"]
  },
  "strategy-bitcoin-sale": {
    category: "Crypto",
    topic: "Strategy Bitcoin Sale Fallout",
    includeAnySets: [
      ["microstrategy", "mstr", "michael saylor", "saylor", "strategy's", "strategy report", "strategy reports", "strategy sale", "strategy sold", "strategy bitcoin"],
      ["bitcoin", "btc"],
      ["sale", "sell", "selling", "sold", "sells", "buy", "buying", "bought", "add more dots", "underwater", "unrealized", "loss", "losses", "holdings", "treasury", "mstr", "polymarket"]
    ],
    reject: ["hive", "kraken", "bitcoin holdings via lending", "coinbase", "moneygram", "tether", "visa", "bitcoin price"]
  },
  "nba-finals": {
    category: "Sports",
    topic: "Spurs 2026 NBA Finals Run",
    includeAnySets: [
      ["san antonio", "wembanyama", "nba spurs", "spurs"],
      ["nba", "finals", "game", "knicks", "western conference"]
    ],
    reject: ["tottenham", "liverpool", "arsenal", "premier league", "football", "soccer", "levy", "usmnt", "wedding"]
  },
  "england-world-cup-opener": {
    category: "Sports",
    topic: "England World Cup Opener Prep",
    includeAnySets: [
      ["england", "tuchel", "harry kane", "kane", "bellingham"],
      ["world cup", "opener", "warm-up", "warmup", "new zealand", "florida", "tampa", "squad", "heat"]
    ],
    reject: ["women's world cup", "women", "qualifier", "cricket", "ghana", "wales", "netherlands", "dutch"]
  },
  "neymar-world-cup-opener": {
    category: "Sports",
    topic: "Neymar Brazil World Cup Fitness Watch",
    includeAnySets: [
      ["neymar"],
      ["brazil", "ancelotti", "cbf"],
      ["world cup", "opener", "calf", "injury", "mri", "training", "fit", "minutes"]
    ],
    reject: ["romario", "lille", "davide ancelotti", "manchester united"]
  },
  "iran-world-cup-visas": {
    category: "Sports",
    topic: "Iran World Cup Visa Dispute",
    includeAnySets: [
      ["iran", "team melli"],
      ["world cup", "wcup"],
      ["visa", "visas", "u.s.", "us ", "united states", "mexico", "officials"]
    ],
    reject: ["switzerland", "embolo", "australia", "socceroos"]
  }
};

const cleanRuleText = (value = "") => String(value).replace(/\s+/g, " ").trim();

export const getMarketRuleText = (story) =>
  cleanRuleText(`${story?.headline ?? ""} ${story?.summary ?? ""} ${story?.ai_summary ?? ""}`).toLowerCase();

export const storyMatchesMarketThreadRule = (story, rule) => {
  if (!story || story.category !== rule.category) return false;
  const text = getMarketRuleText(story);
  if (rule.reject?.some((term) => text.includes(term))) return false;
  if (rule.includeAll?.some((term) => !text.includes(term))) return false;
  if (rule.includeAny?.length && !rule.includeAny.some((term) => text.includes(term))) return false;
  if (rule.includeAnySets?.some((terms) => !terms.some((term) => text.includes(term)))) return false;
  return true;
};
