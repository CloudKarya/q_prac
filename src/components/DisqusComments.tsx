"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    DISQUS?: {
      reset?: (options: {
        reload: boolean;
        config: () => void;
      }) => void;
    };
    disqus_config?: () => void;
  }
}

export function DisqusComments({
  url,
  identifier,
  title,
}: {
  url: string;
  identifier: string;
  title: string;
}) {
  const shortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;

  useEffect(() => {
    if (!shortname) return;

    const config = function (this: any) {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    // If Disqus already loaded (client-side navigation), reset with new config.
    if (window.DISQUS?.reset) {
      window.DISQUS.reset({
        reload: true,
        config,
      });
      return;
    }

    window.disqus_config = config as any;

    const scriptId = "disqus-embed-script";
    if (document.getElementById(scriptId)) return;

    const d = document;
    const s = d.createElement("script");
    s.id = scriptId;
    s.src = `https://${shortname}.disqus.com/embed.js`;
    s.setAttribute("data-timestamp", String(+new Date()));
    s.async = true;

    (d.head || d.body).appendChild(s);
  }, [shortname, url, identifier, title]);

  if (!shortname) {
    return (
      <div className="rounded-2xl border border-border bg-muted p-5 text-sm text-foreground/80">
        Disqus is not configured. Set <span className="font-medium">NEXT_PUBLIC_DISQUS_SHORTNAME</span>.
      </div>
    );
  }

  return <div id="disqus_thread" />;
}
