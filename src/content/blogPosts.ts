export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  publishedAt: string; // ISO date
  tags: string[];
  readingTimeMinutes: number;
};

export const blogPosts: BlogPost[] = [
  // posts:begin
  {
    slug: "what-quantum-computing-can-do-today-and-what-it-absolutely-cannot",
    title: "What Quantum Computing Can Do Today (And What It Absolutely Cannot)",
    description:
      "A pragmatic boundary map for enterprise quantum: what’s feasible now (mostly simulators + hybrid workflows), what isn’t (broad production speedups), and how to build disciplined optionality.",
    summary:
      "Quantum is useful today mainly for disciplined experimentation: building internal capability, running repeatable simulator-based studies, and screening which problem structures might matter later. It cannot yet deliver broad, production-grade enterprise speedups. This article provides a simple boundary map and a practical action plan.",
    publishedAt: "2026-01-24",
    tags: [
      "quantum computing",
      "enterprise",
      "strategy",
      "simulators",
      "hybrid workflows",
    ],
    readingTimeMinutes: 9,
  },
  // posts:end
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
