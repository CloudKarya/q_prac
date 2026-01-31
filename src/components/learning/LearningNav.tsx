"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="rounded-3xl border border-surface-border bg-surface p-4 text-surface-foreground shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold tracking-wide text-surface-foreground/60">
            Learning
          </div>
          <div className="text-lg font-semibold tracking-tight">Quantum readiness path</div>
        </div>
        <Link
          href="/learning"
          className={
            "text-sm font-semibold hover:underline " +
            (pathname === "/learning" ? "text-surface-foreground" : "text-surface-foreground/80")
          }
        >
          Overview
        </Link>
      </div>

      <div className="mt-4 space-y-2">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "block rounded-2xl border px-4 py-3 transition-colors " +
                (active
                  ? "border-accent bg-accent/20"
                  : "border-surface-border hover:bg-surface/60")
              }
              aria-current={active ? "page" : undefined}
            >
              <div className="flex items-start gap-3">
                <div
                  className={
                    "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold " +
                    (active
                      ? "bg-accent text-accent-foreground"
                      : "border border-surface-border bg-surface text-surface-foreground/70")
                  }
                >
                  {item.num}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold leading-snug">{item.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-surface-foreground/65">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-5 border-t border-surface-border pt-4">
        <Link
          href="/learning"
          className="text-sm font-semibold text-surface-foreground/80 hover:text-surface-foreground hover:underline"
        >
          ← Back to Learning Overview
        </Link>
      </div>
    </nav>
  );
}
