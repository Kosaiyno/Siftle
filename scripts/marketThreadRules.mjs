export const marketThreadRules = {
  "wc-spain-belgium-qualify": {
    category: "Sports",
    topic: "Spain vs Belgium Qualify Watch",
    includeAnySets: [
      ["spain", "spanish", "belgium", "belgian", "yamal", "lamine yamal", "de bruyne", "doku", "rodri", "pedri"],
      ["world cup", "fifa", "2026", "knockout", "qualify", "qualification", "advance", "advances", "semi-finals", "semifinals", "final", "preview", "team news", "lineup", "lineups", "kickoff", "match", "extra time", "penalties"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "france", "morocco", "usa", "england", "norway"]
  },
  "wc-spain-concede-belgium": {
    category: "Sports",
    topic: "Spain Clean Sheet Watch vs Belgium",
    includeAnySets: [
      ["spain", "spanish", "belgium", "belgian", "de bruyne", "doku", "lukaku", "rodri", "cucurella", "unai simon"],
      ["world cup", "fifa", "2026", "goal", "goals", "score", "scores", "concede", "concedes", "clean sheet", "attack", "chance creation", "preview", "team news", "lineup", "lineups", "match", "extra time", "knockout"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "france", "morocco", "usa", "england", "norway"]
  },
  "wc-yamal-goal-assist-belgium": {
    category: "Sports",
    topic: "Lamine Yamal Impact vs Belgium",
    includeAnySets: [
      ["yamal", "lamine yamal", "spain", "spanish", "belgium", "belgian"],
      ["world cup", "fifa", "2026", "goal", "assist", "assists", "score", "scores", "chance creation", "chance created", "cross", "key pass", "preview", "team news", "lineup", "lineups", "match", "knockout"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "france", "morocco", "usa", "england", "norway"]
  },
  "wc-spain-goals-belgium": {
    category: "Sports",
    topic: "Spain Goals vs Belgium",
    includeAnySets: [
      ["spain", "spanish", "belgium", "belgian", "yamal", "pedri", "rodri", "nico williams", "de bruyne", "doku"],
      ["world cup", "fifa", "2026", "goal", "goals", "score", "scores", "attack", "finishing", "chance creation", "preview", "team news", "lineup", "lineups", "match", "extra time", "knockout"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "france", "morocco", "usa", "england", "norway"]
  },
  "wc-vozinha-saves-argentina": {
    category: "Sports",
    topic: "Vozinha Argentina Save Watch",
    includeAnySets: [
      ["vozinha", "cape verde", "argentina"],
      ["save", "saves", "keeper", "goalkeeper", "world cup", "knockout", "match", "pressure", "mismatch"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-messi-impact-cape-verde": {
    category: "Sports",
    topic: "Messi Cape Verde Impact",
    includeAnySets: [
      ["messi", "argentina"],
      ["goal", "assist", "score", "scores", "creator", "attack", "impact", "world cup", "knockout", "miami"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-australia-egypt-first-event": {
    category: "Sports",
    topic: "Australia Egypt First Event",
    includeAnySets: [
      ["australia", "egypt", "salah"],
      ["shot", "shot on target", "yellow card", "goal", "first event", "pressure", "world cup", "knockout", "match", "fit"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-colombia-ghana-halftime": {
    category: "Sports",
    topic: "Colombia Ghana Halftime Script",
    includeAnySets: [
      ["colombia", "ghana"],
      ["halftime", "half-time", "first half", "0-0", "level", "leading", "defensive", "script", "world cup", "knockout", "match"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball"]
  },
  "wc-spain-austria-spread": {
    category: "Sports",
    topic: "Spain Austria World Cup Knockout",
    includeAnySets: [
      ["spain", "spanish", "yamal", "pedri", "rodri", "oyarzabal", "fabian ruiz", "nico williams"],
      ["austria", "austrian", "alaba", "sabitzer", "arnautovic", "rangnick"],
      ["world cup", "fifa", "2026", "round of 32", "knockout", "team news", "injury", "lineup", "score", "goal", "goals", "preview", "match", "margin", "spread"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "portugal", "croatia", "ronaldo", "modric"]
  },
  "wc-ronaldo-score-assist-croatia": {
    category: "Sports",
    topic: "Cristiano Ronaldo Portugal Croatia",
    includeAnySets: [
      ["ronaldo", "cristiano ronaldo", "cr7", "portugal", "portuguese", "bruno fernandes", "bernardo silva"],
      ["croatia", "croatian", "modric", "stanisic", "stanisic", "kovacic", "gvaridiol"],
      ["world cup", "fifa", "2026", "round of 32", "knockout", "goal", "assist", "score", "team news", "preview", "match"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "spain", "austria"]
  },
  "wc-portugal-croatia-extra-time": {
    category: "Sports",
    topic: "Portugal Croatia World Cup Knockout",
    includeAnySets: [
      ["portugal", "portuguese", "ronaldo", "cristiano ronaldo", "bruno fernandes", "bernardo silva"],
      ["croatia", "croatian", "modric", "stanisic", "kovacic", "gvaridiol"],
      ["world cup", "fifa", "2026", "round of 32", "knockout", "extra time", "penalties", "draw", "level", "preview", "match", "toronto"]
    ],
    reject: ["women", "futsal", "olympics", "club world cup", "basketball", "baseball", "volleyball", "spain", "austria"]
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
  },
  "wc-england-norway-qualify": {
    category: "Sports",
    topic: "England vs Norway Qualify Watch",
    includeAnySets: [
      ["england", "norway"],
      ["world cup", "fifa", "2026", "knockout", "qualify", "quarter-final", "quarterfinal", "semifinal", "eliminate", "clash", "match", "lineup", "tuchel", "haaland", "kane"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-haaland-kane-goals": {
    category: "Sports",
    topic: "Haaland vs Kane Goal Battle",
    includeAnySets: [
      ["haaland", "kane", "england", "norway"],
      ["world cup", "goal", "goals", "score", "scores", "scorer", "striker", "clash", "match", "quotes", "beast"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-england-norway-yellow-cards": {
    category: "Sports",
    topic: "England vs Norway Disciplinary Record",
    includeAnySets: [
      ["england", "norway"],
      ["world cup", "fifa", "match", "game", "kick-off", "kickoff", "miami", "weather", "thunderstorms", "lightning", "cards", "yellow", "red", "disciplinary"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-england-norway-victory-method": {
    category: "Sports",
    topic: "England vs Norway Method of Victory",
    includeAnySets: [
      ["england", "norway"],
      ["world cup", "fifa", "match", "game", "win", "victory", "extra time", "penalties", "shootout", "method", "kick-off", "weather", "thunderstorms", "lightning"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-spain-france-qualify": {
    category: "Sports",
    topic: "Spain vs France Qualify Watch",
    includeAnySets: [
      ["spain", "france"],
      ["world cup", "fifa", "2026", "knockout", "qualify", "qualification", "advance", "advances", "semi-final", "semifinal", "final", "preview", "team news", "lineup", "match", "extra time", "penalties"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-spain-france-first-half-result": {
    category: "Sports",
    topic: "Spain vs France World Cup Semi-Final",
    includeAnySets: [
      ["spain", "france"],
      ["world cup", "semi-final", "semifinal", "halftime", "half-time", "first half", "lead", "leading", "draw", "draws", "match", "game", "preview", "merino", "mbappe", "olise"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-spain-france-first-goal": {
    category: "Sports",
    topic: "Spain vs France World Cup Semi-Final",
    includeAnySets: [
      ["spain", "france"],
      ["world cup", "goal", "goals", "score", "scores", "scorer", "first goal", "opening goal", "match", "game", "preview", "merino", "mbappe", "olise"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-spain-france-shots-target": {
    category: "Sports",
    topic: "Spain vs France World Cup Semi-Final",
    includeAnySets: [
      ["spain", "france"],
      ["world cup", "match", "game", "preview", "shots", "shots on target", "shot", "target", "attack", "attacking", "volume"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-corners": {
    category: "Sports",
    topic: "France vs England Corner Count",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "corner", "corners", "kick", "kicks", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-cards": {
    category: "Sports",
    topic: "France vs England Discipline Watch",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "cards", "card", "discipline", "yellow", "red", "referee", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-halftime": {
    category: "Sports",
    topic: "France vs England Half-Time Battle",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "halftime", "half-time", "first half", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-fouls": {
    category: "Sports",
    topic: "France vs England Discipline Watch",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "fouls", "foul", "discipline", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-bronze-winner": {
    category: "Sports",
    topic: "France vs England Bronze Medal Winner",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "bronze", "winner", "medal", "third place", "play-off", "playoff"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-goals": {
    category: "Sports",
    topic: "France vs England Goal Fest",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "goals", "goal", "score", "scores", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-rating-duel": {
    category: "Sports",
    topic: "Bellingham vs Mbappé Player Rating Duel",
    includeAnySets: [
      ["france", "england", "bellingham", "mbappe", "mbappé"],
      ["world cup", "match", "game", "preview", "rating", "ratings", "performance", "duel", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-victory-method": {
    category: "Sports",
    topic: "France vs England Victory Method Watch",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "victory", "method", "penalties", "extra time", "shootout", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-mbappe-goals": {
    category: "Sports",
    topic: "Kylian Mbappé Golden Boot Pursuit",
    includeAnySets: [
      ["france", "mbappe", "mbappé"],
      ["world cup", "match", "game", "preview", "goals", "goal", "scorer", "golden boot", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
  },
  "wc-france-england-exact-score": {
    category: "Sports",
    topic: "France vs England Exact Scoreline Prediction",
    includeAnySets: [
      ["france", "england", "french"],
      ["world cup", "match", "game", "preview", "score", "scores", "scoreline", "exact", "bronze"]
    ],
    reject: ["women", "futsal", "olympics"]
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
