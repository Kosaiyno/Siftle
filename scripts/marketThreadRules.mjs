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
      ["sale", "sell", "selling", "sold", "sells", "holdings", "treasury", "mstr", "polymarket"]
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
