"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function navLinkClass(href: string) {
    const base =
      "inline-flex items-center rounded-xl px-3 py-2 text-base font-semibold transition-colors";

    if (isActive(href)) {
      return `${base} bg-yellow-300 text-black hover:bg-yellow-300/90`;
    }

    return `${base} text-foreground/80 hover:bg-muted/50 hover:text-foreground`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-14 w-32 shrink-0 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/logo/QuPracs.png"
              alt="QuPracs"
              width={128}
              height={72}
              priority
              className="block h-full w-full object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex ml-auto">
          <Link
            className={navLinkClass("/services")}
            href="/services"
          >
            Services
          </Link>
          <Link
            className={navLinkClass("/product")}
            href="/product"
          >
            Product
          </Link>
          <Link
            className={navLinkClass("/learning")}
            href="/learning"
          >
            Learning
          </Link>
          <Link
            className={navLinkClass("/tutorials")}
            href="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            className={navLinkClass("/blogs")}
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className={navLinkClass("/jobs")}
            href="/jobs"
          >
            Jobs
          </Link>
          <Link
            className={navLinkClass("/about")}
            href="/about"
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
