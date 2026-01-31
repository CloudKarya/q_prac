import type { Metadata } from "next";
import { getAllBlogPosts } from "@/content/allBlogPosts";
import { BlogsClient } from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Searchable, practical notes on quantum workflows and enterprise readiness — focused on disciplined experimentation and clear constraints.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "QuPracs Blog",
    description:
      "Practical notes on quantum workflows: what’s real today, what isn’t, and how to build disciplined optionality.",
    url: "/blogs",
    type: "website",
    images: [{ url: "/blogs/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuPracs Blog",
    description:
      "Practical notes on quantum workflows: what’s real today, what isn’t, and how to build disciplined optionality.",
    images: ["/blogs/opengraph-image"],
  },
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";

  const posts = getAllBlogPosts();

  return <BlogsClient posts={posts} initialQuery={q} />;
}
