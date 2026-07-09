import type { Category } from "./types.js";

const sports = "Sports" as Exclude<Category, "All">;

export const fallbackMarketPreviews = [
  {
    id: "wc-france-morocco-qualify",
    category: sports,
    timeframe: "Daily" as const,
    optionMarket: true,
    question: "Which team will qualify in France vs Morocco?",
    options: [
      { id: "france", label: "France" },
      { id: "morocco", label: "Morocco" }
    ],
    probability: 0,
    kickoffAt: "2026-07-09T20:00:00Z",
    closes: "Jul 9, 8:40 PM GMT+1",
    resolution: "One option resolves correct based on the team that officially qualifies in France vs Morocco, including extra time and penalties.",
    threadTopic: "France vs Morocco Qualify Watch",
    threadStoryId: 0,
    updates: 0,
    movement: 0,
    volume: "$0",
    traders: "0",
    liquidity: "$0",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    evidence: []
  },
  {
    id: "wc-morocco-goals-france",
    category: sports,
    timeframe: "Daily" as const,
    optionMarket: true,
    question: "How many goals will Morocco score in regular + extra time vs France?",
    options: [
      { id: "0", label: "0 goals" },
      { id: "1", label: "1 goal" },
      { id: "2", label: "2 goals" },
      { id: "3-plus", label: "3+ goals" }
    ],
    probability: 0,
    kickoffAt: "2026-07-09T20:00:00Z",
    closes: "Jul 9, 8:40 PM GMT+1",
    resolution: "One option resolves correct based on the number of goals officially scored by Morocco against France in regular time and extra time. Penalty shootout goals do not count.",
    threadTopic: "Morocco Goals vs France",
    threadStoryId: 0,
    updates: 0,
    movement: 0,
    volume: "$0",
    traders: "0",
    liquidity: "$0",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    evidence: []
  },
  {
    id: "wc-olise-assists-morocco",
    category: sports,
    timeframe: "Daily" as const,
    optionMarket: true,
    question: "How many assists will Michael Olise have vs Morocco?",
    options: [
      { id: "0", label: "0 assists" },
      { id: "1", label: "1 assist" },
      { id: "2", label: "2 assists" },
      { id: "3-plus", label: "3+ assists" }
    ],
    probability: 0,
    kickoffAt: "2026-07-09T20:00:00Z",
    closes: "Jul 9, 8:40 PM GMT+1",
    resolution: "One option resolves correct based on the number of assists officially credited to Michael Olise for France against Morocco in regular time and extra time. Penalty shootout actions do not count.",
    threadTopic: "Michael Olise Assist Watch vs Morocco",
    threadStoryId: 0,
    updates: 0,
    movement: 0,
    volume: "$0",
    traders: "0",
    liquidity: "$0",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    evidence: []
  },
  {
    id: "transfer-tonali-spurs",
    category: sports,
    timeframe: "Sagas" as const,
    question: "Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",
    probability: 58,
    closes: "September 1, 2026",
    resolution: "Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",
    threadTopic: "Sandro Tonali Tottenham Transfer Link",
    threadStoryId: 0,
    updates: 0,
    movement: 0,
    volume: "$182K",
    traders: "980",
    liquidity: "$29K",
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    evidence: []
  },
  {
    id: "transfer-guimaraes-arsenal",
    category: sports,
    timeframe: "Sagas" as const,
    question: "Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",
    probability: 45,
    closes: "September 1, 2026",
    resolution: "Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",
    threadTopic: "Bruno Guimaraes Arsenal Transfer Link",
    threadStoryId: 0,
    updates: 0,
    movement: 0,
    volume: "$204K",
    traders: "1,240",
    liquidity: "$36K",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    evidence: []
  }
];
