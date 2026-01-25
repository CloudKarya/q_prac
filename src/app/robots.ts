import type { MetadataRoute } from "next";

function siteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return (url ? url : "http://localhost:3000").replace(/\/$/, "");
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
