"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/content/blogTypes";

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00Z");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function BlogsClient({
  posts,
  initialQuery = "",
}: {
  posts: BlogPost[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;

    return posts.filter((p) => {
      const haystack = [
        p.title,
        p.description,
        p.summary,
        p.tags.join(" "),
      ]
        .join("\n")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">
          Practical notes on quantum workflows: what’s real today, what isn’t,
          and how to build optionality without hype.
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-4xl">
        <label htmlFor="blog-search" className="sr-only">
          Search blog posts
        </label>
        <input
          id="blog-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts (e.g., simulators, governance, hybrid)…"
          className="w-full rounded-2xl border border-border bg-muted px-5 py-3 text-sm text-foreground placeholder:text-foreground/60 outline-none focus:border-foreground/40"
          inputMode="search"
          autoComplete="off"
        />

        <div className="mt-3 text-xs text-foreground/70">
          Showing <span className="font-medium">{filtered.length}</span> of{" "}
          <span className="font-medium">{posts.length}</span>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-5">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-surface-foreground/60">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-surface-border bg-surface px-2.5 py-1 text-[11px] text-surface-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              <Link href={`/blogs/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              {post.summary}
            </p>

            <div className="mt-5">
              <Link
                href={`/blogs/${post.slug}`}
                className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
                aria-label={`Read full article: ${post.title}`}
              >
                Read full article
              </Link>
            </div>
          </article>
        ))}

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-border bg-muted p-8 text-center text-sm text-foreground/80">
            No posts match “{query.trim()}”. Try a different search.
          </div>
        ) : null}
      </div>
    </section>
  );
}
