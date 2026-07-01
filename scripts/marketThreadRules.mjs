export const marketThreadRules = {
  "wc-england-score-both-halves-drc": {
    category: "Sports",
    topic: "England DR Congo Team News",
    includeAnySets: [
      ["england", "tuchel", "kane", "bellingham", "saka", "madueke", "rice", "quansah", "reece james"],
      ["dr congo", "drc", "congo", "wissa", "mbemba", "bakambu", "tuanzebe"],
      ["world cup", "fifa", "2026", "round of 32", "knockout", "team news", "injury", "lineup", "score", "goal", "goals", "preview", "match"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "mexico", "ecuador", "belgium", "senegal", "united states", "bosnia"]
  },
  "wc-de-bruyne-score-assist-senegal": {
    category: "Sports",
    topic: "Kevin De Bruyne Belgium Senegal",
    includeAnySets: [
      ["de bruyne", "kevin de bruyne", "belgium", "belgian", "lukaku", "doku", "trossard"],
      ["senegal", "sadio mane", "mane", "ismaila sarr", "nicolas jackson", "mendy"],
      ["world cup", "fifa", "2026", "round of 32", "knockout", "goal", "assist", "score", "team news", "preview", "match"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "england", "dr congo", "united states", "bosnia"]
  },
  "wc-usa-score-before-20-bosnia": {
    category: "Sports",
    topic: "United States Bosnia Team News",
    includeAnySets: [
      ["united states", "usa", "usmnt", "pulisic", "pochettino", "reyna", "mckennie", "adams", "dest"],
      ["bosnia", "bosnia and herzegovina", "herzegovina", "dzeko", "pjanic", "barbarez"],
      ["world cup", "fifa", "2026", "round of 32", "knockout", "goal", "score", "early", "team news", "preview", "match", "santa clara"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "england", "dr congo", "belgium", "senegal"]
  },
  "wc-ivory-coast-eliminate-norway": {
    category: "Sports",
    topic: "Ivory Coast Norway World Cup Knockout",
    includeAnySets: [
      ["ivory coast", "cote d'ivoire", "côte d'ivoire"],
      ["norway", "norwegian", "haaland"],
      ["world cup", "fifa", "2026", "round of 32", "round of 16", "last 16", "knockout", "eliminate", "elimination", "advance", "advances", "penalties", "extra time", "match", "preview", "score"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "brazil", "japan", "martinelli", "ancelotti", "vinicius", "selecao", "seleção"]
  },
  "wc-haaland-outscore-mbappe": {
    category: "Sports",
    topic: "Haaland Mbappe World Cup Goals Race",
    includeAnySets: [
      ["haaland", "erling haaland", "mbappe", "mbappé", "kylian mbappe", "kylian mbappé"],
      ["norway", "ivory coast", "cote d'ivoire", "côte d'ivoire", "france", "sweden"],
      ["world cup", "fifa", "2026", "goal", "goals", "score", "scores", "scorer", "knockout", "match", "preview"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-france-sweden-spread": {
    category: "Sports",
    topic: "France Sweden World Cup Knockout",
    includeAnySets: [
      ["france", "french", "mbappe", "mbappé"],
      ["sweden", "swedish", "isak"],
      ["world cup", "fifa", "2026", "round of 32", "round of 16", "last 16", "knockout", "match", "preview", "team news", "lineup", "lineups", "score", "win", "margin", "advance", "advances"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-vinicius-score-japan": {
    category: "Sports",
    topic: "Brazil Japan World Cup Lineups",
    includeAnySets: [
      ["brazil", "vinicius", "vinicius junior"],
      ["japan"],
      ["world cup", "fifa", "2026", "round of 32", "round of 16", "last 16", "knockout", "lineup", "lineups", "kickoff", "match", "preview", "team news", "starting xi", "start time", "score", "scores", "goal", "goals", "advance", "advances", "penalties", "extra time"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-paraguay-score-germany": {
    category: "Sports",
    topic: "Germany Paraguay World Cup Clash",
    includeAnySets: [
      ["germany"],
      ["paraguay"],
      ["world cup", "fifa", "2026", "round of 32", "round of 16", "last 16", "knockout", "kickoff", "match", "preview", "team news", "lineup", "lineups", "start time", "score", "scores", "goal", "goals", "advance", "advances", "penalties", "extra time"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-morocco-eliminate-netherlands": {
    category: "Sports",
    topic: "Netherlands Morocco World Cup Stakes",
    includeAnySets: [
      ["morocco"],
      ["netherlands", "dutch"],
      ["world cup", "fifa", "2026", "round of 32", "round of 16", "last 16", "knockout", "kickoff", "match", "preview", "team news", "lineup", "lineups", "start time", "eliminate", "elimination", "eliminated", "advance", "advances", "penalties", "extra time"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
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
