import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Case studies from QuPracs engagements (coming soon).",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Case Studies</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">Coming soon</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
          We’re preparing a set of decision-grade case studies (problem framing, baselines, evidence packs, and outcomes).
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            See Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-surface-border bg-surface px-5 text-sm font-semibold text-surface-foreground shadow-sm hover:bg-background/5"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </main>
  );
}
