import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/content/blogPosts";
import { postRegistry } from "@/content/postRegistry";

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function siteUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) return undefined;
  return url.replace(/\/$/, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const canonical = `/blogs/${post.slug}`;
  const ogImage = `${canonical}/opengraph-image`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    keywords: post.tags,
  };
}

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00Z");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const Post = postRegistry[post.slug];
  if (!Post) notFound();

  const base = siteUrl();
  const absoluteUrl = base ? `${base}/blogs/${post.slug}` : `/blogs/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: [{ "@type": "Organization", name: "Q-Prac" }],
    publisher: {
      "@type": "Organization",
      name: "Q-Prac",
      logo: {
        "@type": "ImageObject",
        url: base ? `${base}/images/logo/q-prac.png` : "/images/logo/q-prac.png",
      },
    },
    mainEntityOfPage: absoluteUrl,
    url: absoluteUrl,
    keywords: post.tags.join(", "),
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Link
            href="/blogs"
            className="text-sm text-foreground/80 hover:text-foreground"
          >
            ← Back to Blog
          </Link>
        </div>

        <article className="rounded-2xl border border-surface-border bg-surface p-7 text-surface-foreground shadow-sm">
          <header>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              {post.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-surface-foreground/60">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>•</span>
              <span>{post.readingTimeMinutes} min read</span>
              <span>•</span>
              <span>{post.tags.join(" · ")}</span>
            </div>
          </header>

          <hr className="my-7 border-surface-border" />

          <Post />
        </article>
      </div>
    </main>
  );
}
