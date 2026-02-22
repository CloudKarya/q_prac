import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Representative client engagements and anonymized case notes from QuPracs.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Case Studies</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">From “Should we do this?” to confident decisions</h1>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-surface-foreground/75">
          Real enterprise teams came to us with pressure, uncertainty, and high stakes. These case notes show how they reduced risk, found clarity, and moved forward with confidence.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/case-studies/supply-chain-visibility-control"
            className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm transition-colors hover:bg-background/5"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Supply chain</div>
            <div className="mt-2 text-lg font-semibold tracking-tight">Supply Chain Visibility &amp; Control</div>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              When delays become daily fire drills, teams need control—not more dashboards.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
              For an anonymized industrial operations team, we focused on improving service levels while reducing expedite and carrying costs under noisy data, real-world SLAs, and tight integration limits.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75">
              We built a visibility baseline and policy simulator, screened optimization paths against classical baselines, and recommended a practical next step: proceed with simulator-led improvements and defer quantum adoption until scale clearly justifies it.
            </p>
            <div className="mt-4 text-sm font-semibold text-surface-foreground">See how they solved it →</div>
          </Link>

          <Link
            href="/case-studies/risk-aware-decision-support"
            className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm transition-colors hover:bg-background/5"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Decision support</div>
            <div className="mt-2 text-lg font-semibold tracking-tight">Risk-Aware Decision Support</div>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              When every decision has downside, leaders need clarity they can defend.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
              For an anonymized risk and analytics team, the goal was to make better decisions under uncertainty with transparent risk tradeoffs, while meeting explainability, governance, and latency constraints.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75">
              We built a scenario simulator and scoring workflow, validated stability against baselines and integration fit, and recommended a simulation-first operating model instead of demo-led experimentation.
            </p>
            <div className="mt-4 text-sm font-semibold text-surface-foreground">See how they solved it →</div>
          </Link>

          <Link
            href="/case-studies/portfolio-scheduling-scenario-planning"
            className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm transition-colors hover:bg-background/5"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Portfolio planning</div>
            <div className="mt-2 text-lg font-semibold tracking-tight">Portfolio Scheduling &amp; Scenario Planning</div>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              When priorities change every week, planning must stay resilient under pressure.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
              For an anonymized enterprise PMO and operations planning function, the challenge was to improve schedule quality and scenario responsiveness despite changing priorities, hard constraints, and legacy tooling.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75">
              We delivered a constraint-aware prototype, compared heuristic approaches against baseline solvers across realistic scenarios, and advised a phased rollout while deferring advanced optimization until data and process maturity improved.
            </p>
            <div className="mt-4 text-sm font-semibold text-surface-foreground">See how they solved it →</div>
          </Link>

          <div className="rounded-2xl border border-surface-border bg-background/20 p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">More coming soon</div>
            <div className="mt-2 text-sm leading-relaxed text-surface-foreground/75">
              We’ll add additional case notes as soon as they can be shared safely.
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Let&apos;s solve your bottleneck
              </Link>
            </div>
          </div>
        </div>

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
            I have a similar challenge
          </Link>
        </div>
      </div>
    </main>
  );
}
