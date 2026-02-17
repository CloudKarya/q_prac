"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/services",
    title: "Overview",
    description: "What we do and how we work.",
  },
  {
    href: "/services/quantum-readiness",
    title: "Quantum Readiness",
    description: "Assess readiness and build a staged roadmap.",
  },
  {
    href: "/services/strategy-use-cases",
    title: "Strategy & Use-cases",
    description: "Prioritize opportunities based on constraints and economics.",
  },
  {
    href: "/services/poc-sprints",
    title: "POC Sprints",
    description: "Prototype narrowly and benchmark pragmaticly.",
  },
  {
    href: "/services/architecture-integration",
    title: "Architecture & Integration",
    description: "Design hybrid pipelines and integration paths.",
  },
];

export function ServicesNav() {
  const pathname = usePathname();

  return (
    <nav className="rounded-[28px] border border-surface-border bg-surface p-5 shadow-sm">
      <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">SERVICES</div>
      <div className="mt-1 text-base font-semibold text-surface-foreground">QuPracs Services</div>

      <div className="mt-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                "block rounded-2xl border px-4 py-3 transition " +
                (isActive
                  ? "border-background bg-background/5"
                  : "border-surface-border hover:bg-surface/60")
              }
            >
              <div className="flex items-center gap-3">
                <span
                  className={
                    "h-8 w-1 rounded-full " +
                    (isActive ? "bg-background" : "bg-transparent")
                  }
                  aria-hidden
                />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-surface-foreground">{item.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-surface-foreground/65">
                    {item.description}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
