export const marketThreadRules = {
  "gta6-delay-2026": {
    category: "Gaming",
    topic: "GTA 6 Release Timing and Studio Status",
    includeAnySets: [
      ["gta 6", "gta vi", "grand theft auto 6", "grand theft auto vi", "rockstar", "take-two", "take two"],
      ["delay", "delayed", "postponed", "release", "schedule", "2027", "launch", "timing"]
    ],
    reject: ["gta 5", "gta v", "online update", "rp server", "fivem", "subscription"]
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
  "manga-onepiece-1200": {
    category: "Anime",
    topic: "One Piece Manga Chapter Spoilers",
    includeAnySets: [
      ["one piece", "oda"],
      ["chapter", "ch.", "leak", "leaks", "spoiler", "spoilers", "scanlation", "scanlations"],
      ["ancient weapon", "uranus", "pluton", "poseidon", "imu", "gorosei", "joy boy", "joyboy", "luffy", "shanks", "final saga", "egghead", "elbaf"]
    ],
    reject: ["naruto", "boruto", "jujutsu kaisen", "jjk", "my hero academia", "demon slayer", "bleach", "dbz", "dragon ball"]
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
