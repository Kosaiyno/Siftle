export type Category = "All" | "Crypto" | "Sports" | "Anime";

export interface NewsStory {
  id: number;
  headline: string;
  category: Exclude<Category, "All">;
  summary: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  readTime: string;
  postedAt: string;
  accent: "blue" | "teal" | "violet" | "slate";
  saved: boolean;
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

export interface ArchiveDate {
  date: string;
  categories: Category[];
}
