import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/content/allBlogPosts";

function siteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return (url ? url : "http://localhost:3000").replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/product`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learning`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/learning/quantum-101`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning/executive-view`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning/landscape`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning/q-day`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tutorials`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/jobs`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((p) => ({
    url: `${base}/blogs/${p.slug}`,
    lastModified: new Date(p.publishedAt + "T00:00:00Z"),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
