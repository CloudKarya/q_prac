import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center px-6 py-0">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-12 w-24 shrink-0 overflow-hidden flex items-center justify-center">
            <img
              src="/images/logo/q-prac.png"
              alt="Q-Prac"
              aria-hidden="true"
              className="block h-full w-full object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex ml-auto">
          <Link
            className="text-sm text-foreground/80 hover:text-foreground"
            href="/product"
          >
            Product
          </Link>
          <Link
            className="text-sm text-foreground/80 hover:text-foreground"
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className="text-sm text-foreground/80 hover:text-foreground"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-sm text-foreground/80 hover:text-foreground"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm text-foreground/80 hover:text-foreground"
            href="/about"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
