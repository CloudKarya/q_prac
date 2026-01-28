import {
  loadAllMarkdownPosts,
  loadMarkdownPostBySlug,
  type MarkdownBlogPost,
} from "@/content/markdown/markdownPosts";
import type { BlogPost } from "@/content/blogTypes";

export type AnyBlogPost = BlogPost & { source: "md" };

export function getAllBlogPosts(): AnyBlogPost[] {
  return loadAllMarkdownPosts()
    .map((p) => ({
      ...p,
      source: "md" as const,
    }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getAnyBlogPostBySlug(
  slug: string,
): { meta: AnyBlogPost; markdown?: string } | undefined {
  const md = loadMarkdownPostBySlug(slug);
  if (md) return { meta: md, markdown: md.markdown };
  return undefined;
}

export function isMarkdownPost(
  x: { meta: AnyBlogPost; markdown?: string } | undefined,
): x is { meta: MarkdownBlogPost; markdown: string } {
  return Boolean(x && x.meta.source === "md" && typeof x.markdown === "string");
}
