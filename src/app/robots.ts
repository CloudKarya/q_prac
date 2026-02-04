import type { MetadataRoute } from "next";

function siteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  const fallback =
    process.env.NODE_ENV === "production" ? "https://www.qupracs.com" : "http://localhost:3000";
  return (url ? url : fallback).replace(/\/$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
