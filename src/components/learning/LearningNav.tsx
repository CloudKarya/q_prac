"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type NavItem = {
  num: string;
  title: string;
  subtitle: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    num: "01",
    title: "Quantum Computing 101",
    subtitle: "New to quantum? Start here. No math needed.",
    href: "/learning/quantum-101",
  },
  {
    num: "02",
    title: "How to Think About Quantum (Executive View)",
    subtitle: "Mental models, decision frames, and readiness logic.",
    href: "/learning/executive-view",
  },
  {
    num: "03",
    title: "Quantum Computing Landscape (SOTA)",
    subtitle: "Ecosystem map: hardware, simulators, cloud, hybrid methods.",
    href: "/learning/landscape",
  },
  {
    num: "04",
    title: "Q-Day: Vision & Responsible Preparation",
    subtitle: "What Q-Day really means and how to prepare without hype.",
    href: "/learning/q-day",
  },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/learning") return pathname === "/learning";
  return pathname === href || pathname.startsWith(href + "/");
}

export function LearningNav() {
  const pathname = usePathname();
  const [filter, setFilter] = useState<string>("");

  const filteredNavItems = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return navItems;
    return navItems.filter((it) => {
      const hay = `${it.title} ${it.subtitle} ${it.num}`.toLowerCase();
      return hay.includes(q);
    });
  }, [filter]);

  return (
    <nav className="rounded-2xl border border-surface-border bg-surface p-4 shadow-sm">
      <div className="px-1">
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
          Learning
        </div>
        <div className="mt-1 text-base font-semibold tracking-tight">Documentation</div>
      </div>

      <div className="mt-4 px-1">
        <label className="block">
          <span className="sr-only">Filter</span>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter"
            className="h-10 w-full rounded-xl border border-surface-border bg-surface px-3 text-sm outline-none focus:border-background"
          />
        </label>
      </div>

      <div className="mt-5">
        <div className="px-1 text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
          Overview
        </div>
        <div className="mt-2">
          <Link
            href="/learning"
            aria-current={pathname === "/learning" ? "page" : undefined}
            className={
              "block rounded-xl px-3 py-2 text-sm font-semibold transition " +
              (pathname === "/learning"
                ? "border-l-4 border-background bg-background/10 text-surface-foreground"
                : "text-surface-foreground/80 hover:bg-black/5 dark:hover:bg-white/5")
            }
          >
            Getting started
          </Link>
        </div>
      </div>

      <details open className="mt-5">
        <summary className="cursor-pointer list-none px-1">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
              Guides
            </div>
            <span className="text-xs text-surface-foreground/60">▾</span>
          </div>
        </summary>

        <div className="mt-2 space-y-1">
          {filteredNavItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  "group block rounded-xl px-3 py-2 transition " +
                  (active
                    ? "border-l-4 border-background bg-background/10"
                    : "hover:bg-black/5 dark:hover:bg-white/5")
                }
              >
                <div className="flex items-start gap-3">
                  <div
                    className={
                      "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold " +
                      (active
                        ? "bg-background text-white"
                        : "border border-surface-border bg-surface text-surface-foreground/70")
                    }
                  >
                    {item.num}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold leading-snug text-surface-foreground">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-xs leading-relaxed text-surface-foreground/65">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredNavItems.length === 0 ? (
            <div className="rounded-xl px-3 py-2 text-sm text-surface-foreground/70">
              No matches.
            </div>
          ) : null}
        </div>
      </details>

      <details open className="mt-5">
        <summary className="cursor-pointer list-none px-1">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
              Resources
            </div>
            <span className="text-xs text-surface-foreground/60">▾</span>
          </div>
        </summary>

        <div className="mt-2 space-y-1">
          <Link
            href="/tutorials"
            className="block rounded-xl px-3 py-2 text-sm font-semibold text-surface-foreground/80 hover:bg-black/5 dark:hover:bg-white/5"
          >
            Tutorials
          </Link>
          <Link
            href="/blogs"
            className="block rounded-xl px-3 py-2 text-sm font-semibold text-surface-foreground/80 hover:bg-black/5 dark:hover:bg-white/5"
          >
            Blogs
          </Link>
        </div>
      </details>
    </nav>
  );
}
