import { writeFileSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const activePath = join(root, "data", "active_markets.json");

const newMarkets = [
  {
    "id": "wc-argentina-england-qualify",
    "category": "Sports",
    "timeframe": "Daily",
    "optionMarket": true,
    "question": "Which team will qualify in Argentina vs England?",
    "options": [
      { "id": "argentina", "label": "Argentina" },
      { "id": "england", "label": "England" }
    ],
    "probability": 0,
    "kickoffAt": "2026-07-15T19:00:00Z",
    "expectedEndAt": "2026-07-15T21:30:00Z",
    "resolveAfter": "2026-07-15T22:30:00Z",
    "closes": "Jul 15, 7:40 PM GMT+1",
    "resolution": "Resolves to the team that officially qualifies for the World Cup Final, including regular time, extra time, and penalty shootouts.",
    "threadTopic": "Argentina vs England Qualify Watch",
    "volume": "$0",
    "traders": "0",
    "liquidity": "$0",
    "imageUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "wc-messi-bellingham-rating",
    "category": "Sports",
    "timeframe": "Daily",
    "optionMarket": true,
    "question": "Who will receive the higher match rating: Lionel Messi or Jude Bellingham?",
    "options": [
      { "id": "messi", "label": "Lionel Messi" },
      { "id": "bellingham", "label": "Jude Bellingham" },
      { "id": "tie", "label": "Tie / Exact equal rating" }
    ],
    "probability": 0,
    "kickoffAt": "2026-07-15T19:00:00Z",
    "expectedEndAt": "2026-07-15T21:30:00Z",
    "resolveAfter": "2026-07-15T22:30:00Z",
    "closes": "Jul 15, 7:40 PM GMT+1",
    "resolution": "Resolves to the player who receives the highest official match rating. If both receive the exact same rating, it resolves to 'tie'. If either player does not participate, the market resolves in favor of the active player (or is voided if neither play).",
    "threadTopic": "Messi vs Bellingham Duel",
    "volume": "$0",
    "traders": "0",
    "liquidity": "$0",
    "imageUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "wc-argentina-england-shots-target",
    "category": "Sports",
    "timeframe": "Daily",
    "optionMarket": true,
    "question": "How many total combined shots on target will be recorded in Argentina vs England?",
    "options": [
      { "id": "0-6", "label": "0 to 6 shots" },
      { "id": "7-9", "label": "7 to 9 shots" },
      { "id": "10-12", "label": "10 to 12 shots" },
      { "id": "13-plus", "label": "13+ shots" }
    ],
    "probability": 0,
    "kickoffAt": "2026-07-15T19:00:00Z",
    "expectedEndAt": "2026-07-15T21:30:00Z",
    "resolveAfter": "2026-07-15T22:30:00Z",
    "closes": "Jul 15, 7:40 PM GMT+1",
    "resolution": "Resolves to the combined sum of official shots on target for both teams during regular and extra time (excluding penalty shootouts).",
    "threadTopic": "Argentina vs England World Cup Semi-Final",
    "volume": "$0",
    "traders": "0",
    "liquidity": "$0",
    "imageUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "wc-argentina-england-victory-method",
    "category": "Sports",
    "timeframe": "Daily",
    "optionMarket": true,
    "question": "What will be the method of victory in Argentina vs England?",
    "options": [
      { "id": "argentina-regular", "label": "Argentina in regular time" },
      { "id": "england-regular", "label": "England in regular time" },
      { "id": "either-et", "label": "Either team in extra time" },
      { "id": "either-penalties", "label": "Either team via penalty shootout" }
    ],
    "probability": 0,
    "kickoffAt": "2026-07-15T19:00:00Z",
    "expectedEndAt": "2026-07-15T21:30:00Z",
    "resolveAfter": "2026-07-15T22:30:00Z",
    "closes": "Jul 15, 7:40 PM GMT+1",
    "resolution": "Resolves to how the qualifying team is decided (regular time, extra time, or penalty shootout).",
    "threadTopic": "Argentina vs England World Cup Semi-Final",
    "volume": "$0",
    "traders": "0",
    "liquidity": "$0",
    "imageUrl": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
  }
];

writeFileSync(activePath, JSON.stringify(newMarkets, null, 2), "utf8");
console.log("Deployed 4 new Argentina vs England daily prediction markets to active_markets.json.");
