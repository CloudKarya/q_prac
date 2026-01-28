import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost } from "@/content/blogTypes";

type Frontmatter = {
  title?: string;
  slug?: string;
  description?: string;
  summary?: string;
  date?: string;
  publishedAt?: string;
  aliases?: string[] | string;
  tags?: string[] | string;
};

export type MarkdownBlogPost = BlogPost & {
  source: "md";
  filePath: string;
  fileSlug: string; // filename without extension (alias)
  aliases: string[]; // additional slugs that should resolve to this post
  markdown: string;
};

function postsDir(): string {
  return path.join(process.cwd(), "src", "content", "posts");
}

function stripMarkdownForText(input: string): string {
  return input
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^\)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^\)]*\)/g, " ")
    .replace(/[*_~>#-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTimeMinutes(text: string): number {
  const words = text.split(/\s+/g).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

function isoDateOnly(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function slugifyTitle(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .replace(/-+/g, "-")
    .trim();
}

function listMarkdownFileSlugs(): string[] {
  const dir = postsDir();
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".md"))
    .map((f) => f.replace(/\.md$/i, ""));
}

function loadMarkdownPostFromFileSlug(fileSlug: string): MarkdownBlogPost | undefined {
  const filePath = path.join(postsDir(), `${fileSlug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Partial<Frontmatter>;
  const markdown = parsed.content.trim();

  // Title: frontmatter title OR first H1.
  const firstH1 = (markdown.match(/^#\s+(.+)$/m)?.[1] || "").trim();
  const title = String(data.title || firstH1 || fileSlug).trim();

  // Slug: frontmatter slug OR slugified title OR fallback to filename.
  const fmSlug = String(data.slug || "").trim();
  const derivedSlug = slugifyTitle(title);
  const canonicalSlug = fmSlug || derivedSlug || fileSlug;

  // Description/summary: frontmatter fields OR first paragraph.
  const blocks = markdown
    .split(/\n\s*\n/g)
    .map((b) => b.trim())
    .filter(Boolean);

  const firstParagraphBlock = blocks.find(
    (b) =>
      !b.startsWith("#") &&
      !/^---+$/.test(b) &&
      !b.startsWith("!") &&
      !b.startsWith("[") &&
      !b.startsWith("-") &&
      !b.startsWith("*") &&
      !/^\d+\)/.test(b),
  );

  const excerptPlain = stripMarkdownForText(firstParagraphBlock || "");

  const description = String(data.description || "").trim();
  const summary = String(data.summary || "").trim();

  const stat = fs.statSync(filePath);
  const publishedAt = String(
    data.date || data.publishedAt || "",
  ).trim();

  const aliasesRaw = data.aliases;
  const aliases = Array.isArray(aliasesRaw)
    ? aliasesRaw.map((x) => String(x).trim()).filter(Boolean)
    : typeof aliasesRaw === "string"
      ? aliasesRaw
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

  const tagsRaw = data.tags;
  const tags = Array.isArray(tagsRaw)
    ? tagsRaw.map((t) => String(t))
    : typeof tagsRaw === "string"
      ? tagsRaw
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

  const fullTextPlain = stripMarkdownForText(markdown);

  const finalDescription =
    description || excerptPlain.slice(0, 180) || `Read: ${title}`;
  const finalSummary = summary || excerptPlain.slice(0, 260) || finalDescription;

  return {
    source: "md",
    filePath,
    fileSlug,
    aliases,
    markdown,
    slug: canonicalSlug,
    title,
    description: finalDescription,
    summary: finalSummary,
    publishedAt: publishedAt || isoDateOnly(stat.mtime),
    tags,
    readingTimeMinutes: estimateReadingTimeMinutes(fullTextPlain),
  };
}

export function loadMarkdownPostBySlug(slug: string): MarkdownBlogPost | undefined {
  // Support both canonical derived slugs and filename-based slugs.
  const all = loadAllMarkdownPosts();
  return all.find((p) => p.slug === slug || p.fileSlug === slug || p.aliases.includes(slug));
}

export function loadAllMarkdownPosts(): MarkdownBlogPost[] {
  const rawPosts = listMarkdownFileSlugs()
    .map((fileSlug) => loadMarkdownPostFromFileSlug(fileSlug))
    .filter((p): p is MarkdownBlogPost => Boolean(p));

  // De-duplicate canonical slugs: if collisions exist, suffix with filename.
  const counts = new Map<string, number>();
  for (const p of rawPosts) counts.set(p.slug, (counts.get(p.slug) ?? 0) + 1);

  return rawPosts.map((p) => {
    if ((counts.get(p.slug) ?? 0) <= 1) return p;
    return {
      ...p,
      slug: `${p.slug}-${p.fileSlug}`,
    };
  });
}
