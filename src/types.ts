export type Category = "All" | "Crypto" | "Sports" | "Anime" | "Tech" | "Gaming";

export interface NewsStory {
  id: number;
  headline: string;
  category: Exclude<Category, "All">;
  summary: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  publishedAt?: string;
  readTime: string;
  postedAt: string;
  accent: "blue" | "teal" | "violet" | "slate" | "orange";
  saved: boolean;
  type?: "news" | "tweet";
  thread?: {
    count: number;
    topic: string;
  };
  ai_summary?: string;
  ai_provider?: string;
  ai_proof?: {
    providerAddress?: string;
    endpoint?: string;
    model?: string;
    responseId?: string | null;
    status?: number;
  };
}

export interface StoryThread {
  topic: string;
  count: number;
  current: NewsStory;
  items: NewsStory[];
}

export interface ArchiveDate {
  date: string;
  categories: Category[];
}
