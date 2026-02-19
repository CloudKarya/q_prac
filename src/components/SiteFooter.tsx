import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-base font-semibold text-foreground">QuPracs</div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              Quantum readiness, strategy, and prototype-backed decisions for teams that want evidence,
              not hype.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground">Main pages</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>
                <Link className="hover:text-foreground" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/product">
                  Product
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/services">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground">Other pages</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>
                <Link className="hover:text-foreground" href="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/tutorials">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground">Newsletter</div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              Get practical insights and decision frameworks.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-foreground/60"
              />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                Send
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-foreground/60">
            © {new Date().getFullYear()} QuPracs. An initiative of CloudKarya, Inc.
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/60">
            <Link className="hover:text-foreground" href="/privacy">
              Privacy
            </Link>
            <span>•</span>
            <Link className="hover:text-foreground" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
