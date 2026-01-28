"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const isFirstPageLoad = useRef(true);

  useEffect(() => {
    if (!measurementId) return;

    // The initial page view is recorded by the inline init script below.
    // For client-side route transitions, trigger a new config event.
    if (isFirstPageLoad.current) {
      isFirstPageLoad.current = false;
      return;
    }

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
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname + window.location.search,
          });
        `}
      </Script>
    </>
  );
}
