"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export function SiteHeader() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const callbackUrl = pathname ?? "/";
  const signInHref = `/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`;

  const signedInLabel = session?.user?.name ?? session?.user?.email ?? "Signed in";

  function isActive(href: string) {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function navLinkClass(href: string) {
    const base =
      "inline-flex items-center rounded-xl px-3 py-2 text-base font-semibold transition-colors";

    if (isActive(href)) {
      return `${base} bg-accent text-accent-foreground hover:bg-accent/90`;
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

        <div className="ml-auto flex items-center gap-3">
          <nav className="hidden items-center gap-3 md:flex">
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
            className={navLinkClass("/case-studies")}
            href="/case-studies"
          >
            Case Studies
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

          <div className="hidden md:flex items-center">
            {status === "authenticated" ? (
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="rounded-xl border border-white/60 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/90"
                >
                  Sign out
                </button>
                <div className="mt-1 max-w-[220px] truncate text-center text-xs text-foreground/60">
                  {signedInLabel}
                </div>
              </div>
            ) : (
              <Link
                href={signInHref}
                className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
