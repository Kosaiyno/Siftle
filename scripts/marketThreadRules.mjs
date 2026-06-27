export const marketThreadRules = {
  "transfer-davies-realmadrid": {
    category: "Sports",
    topic: "Alphonso Davies Real Madrid Transfer Talks",
    includeAnySets: [
      ["davies", "alphonso davies"],
      ["real madrid", "madrid", "bayern", "munich", "bundesliga", "laliga"],
      ["transfer", "sign", "deal", "contract", "agree", "fee", "terms", "personal terms", "rumor", "rumours", "talks"]
    ],
    reject: ["tottenham", "liverpool", "arsenal", "premier league", "manchester united", "chelsea", "barcelona", "cricket", "basketball"]
  },
  "transfer-tonali-spurs": {
    category: "Sports",
    topic: "Sandro Tonali Tottenham Transfer Link",
    includeAnySets: [
      ["tonali", "sandro tonali"],
      ["tottenham", "spurs", "newcastle", "arsenal"],
      ["transfer", "sign", "deal", "contract", "agree", "fee", "terms", "rumor", "rumours", "talks", "move"]
    ],
    reject: ["chelsea", "liverpool", "manchester united", "barcelona", "real madrid", "bayern", "cricket", "basketball"]
  },
  "transfer-guimaraes-arsenal": {
    category: "Sports",
    topic: "Bruno Guimarães Arsenal Transfer Link",
    includeAnySets: [
      ["guimaraes", "bruno guimarães", "bruno guimaraes"],
      ["arsenal", "gunners", "newcastle"],
      ["transfer", "sign", "deal", "contract", "agree", "fee", "terms", "rumor", "rumours", "talks", "move", "offer"]
    ],
    reject: ["tottenham", "chelsea", "liverpool", "manchester united", "barcelona", "real madrid", "bayern", "cricket", "basketball"]
  },
  "wc-mbappe-haaland-goals": {
    category: "Sports",
    topic: "Mbappé vs Haaland World Cup Clash",
    includeAnySets: [
      ["mbappe", "kylian mbappe", "haaland", "erling haaland"],
      ["france", "norway", "boston", "friday", "score", "goal", "goals", "head-to-head", "head to head"]
    ],
    reject: []
  },
  "wc-england-panama-spread": {
    category: "Sports",
    topic: "England vs Panama Match Details",
    includeAnySets: [
      ["england", "panama"],
      ["saturday", "scouting", "opponent", "opponents", "training", "injury", "win", "defeat", "match", "game", "tuchel", "rice", "james"]
    ],
    reject: []
  },
  "wc-croatia-ghana-spread": {
    category: "Sports",
    topic: "Croatia vs Ghana World Cup Clash",
    includeAnySets: [
      ["croatia", "ghana"],
      ["saturday", "philadelphia", "lincoln", "budimir", "dalic", "modric", "queiroz", "group l", "knockout", "draw", "win", "clean sheet"]
    ],
    reject: []
  },
  "wc-scotland-qualification": {
    category: "Sports",
    topic: "Scotland World Cup Status",
    includeAnySets: [
      ["scotland", "tartan army", "steve clarke"],
      ["qualification", "qualify", "hope", "hopes", "fate", "purgatory", "last 32", "brazil", "clarke"]
    ],
    reject: []
  },
  "manga-onepiece-1200": {
    category: "Anime",
    topic: "One Piece Manga Chapter Spoilers",
    includeAnySets: [
      ["one piece", "oda"],
      ["chapter", "ch.", "leak", "leaks", "spoiler", "spoilers", "scanlation", "scanlations"],
      ["ancient weapon", "uranus", "pluton", "poseidon", "imu", "gorosei", "joy boy", "joyboy", "luffy", "shanks", "final saga", "egghead", "elbaf"]
    ],
    reject: ["naruto", "boruto", "jujutsu kaisen", "jjk", "my hero academia", "demon slayer", "bleach", "dbz", "dragon ball"]
  },
  "wc-messi-ronaldo-16": {
    category: "Sports",
    topic: "Messi and Ronaldo World Cup Knockout",
    includeAnySets: [
      ["messi", "ronaldo", "argentina", "portugal"],
      ["knockout", "round of 32", "round of 16", "world cup", "eliminated", "eliminate", "qualify", "advances", "advance", "match", "game", "last 32", "tournament"]
    ],
    reject: ["cricket", "basketball", "baseball", "tennis"]
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
