"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;

    // Only track blog pages as requested.
    if (!pathname.startsWith("/blogs")) return;

    const search = typeof window !== "undefined" ? window.location.search : "";
    const pagePath = search ? `${pathname}${search}` : pathname;

    // Next route transitions won't re-run the initial gtag config, so we trigger it.
    window.gtag?.("config", measurementId, {
      page_path: pagePath,
    });
  }, [measurementId, pathname]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
        `}
      </Script>
    </>
  );
}
