export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  publishedAt: string; // ISO date
  tags: string[];
  readingTimeMinutes: number;
};
