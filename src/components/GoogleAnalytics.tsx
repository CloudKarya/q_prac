"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { getOrCreateJoinId } from "@/lib/joinId";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const isFirstPageLoad = useRef(true);
  const joinIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!measurementId) return;

    if (!joinIdRef.current) {
      joinIdRef.current = getOrCreateJoinId();
    }

    const joinId = joinIdRef.current;
    if (!joinId) return;

    // Wait a tick for gtag to exist (Script loads afterInteractive)
    requestAnimationFrame(() => {
      // Prefer user_properties for cross-event association, and also emit a one-time event.
      window.gtag?.("set", "user_properties", { join_id: joinId });
      window.gtag?.("event", "join_id_set", { join_id: joinId });
    });
  }, [measurementId]);

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
    requestAnimationFrame(() => {
      window.gtag?.("config", measurementId, {
        page_path: pagePath,
        page_title: document.title,
        page_location: window.location.href,
      });
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
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}
