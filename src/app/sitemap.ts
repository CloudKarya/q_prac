import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/content/allBlogPosts";
import { getAllJobs } from "@/content/jobs/jobs";

function siteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  const fallback =
    process.env.NODE_ENV === "production" ? "https://www.qupracs.com" : "http://localhost:3000";
  return (url ? url : fallback).replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/quantum-readiness`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/strategy-use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/poc-sprints`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/architecture-integration`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/product`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/learning/quantum-101`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning/executive-view`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning/landscape`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learning/q-day`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tutorials`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/jobs`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/hiring-process`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    {
      url: `${base}/case-studies/supply-chain-visibility-control`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/case-studies/risk-aware-decision-support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/case-studies/portfolio-scheduling-scenario-planning`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    { url: `${base}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((p) => ({
    url: `${base}/blogs/${p.slug}`,
    lastModified: new Date(p.publishedAt + "T00:00:00Z"),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const jobRoutes: MetadataRoute.Sitemap = getAllJobs().map((j) => ({
    url: `${base}/jobs/${j.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...blogRoutes, ...jobRoutes];
}
