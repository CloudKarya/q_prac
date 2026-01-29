import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-14 w-32 shrink-0 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/logo/QuPracs.png"
              alt="Q-Prac"
              width={128}
              height={72}
              priority
              className="block h-full w-full object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex ml-auto">
          <Link
            className="text-base font-semibold text-foreground/80 hover:text-foreground"
            href="/product"
          >
            Product
          </Link>
          <Link
            className="text-base font-semibold text-foreground/80 hover:text-foreground"
            href="/consulting"
          >
            Consulting
          </Link>
          <Link
            className="text-base font-semibold text-foreground/80 hover:text-foreground"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="text-base font-semibold text-foreground/80 hover:text-foreground"
            href="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            className="text-base font-semibold text-foreground/80 hover:text-foreground"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-base font-semibold text-foreground/80 hover:text-foreground"
            href="/about"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
