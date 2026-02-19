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
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">QuPracs Preparedness Assessments for Enterprise</h1>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/case-studies/supply-chain-visibility-control"
            className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm transition-colors hover:bg-background/5"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Supply chain</div>
            <div className="mt-2 text-lg font-semibold tracking-tight">Supply Chain Visibility &amp; Control</div>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-surface-foreground/75">
              <li>
                <span className="font-semibold text-surface-foreground">Client type:</span> Industrial ops team (anonymized)
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Objective:</span> Improve service levels while reducing expedite/carry costs
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Constraints:</span> Noisy data, real-world SLAs, and integration limits
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Built/measured:</span> Visibility baseline + policy simulator; screened optimizers vs classical baselines
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Outcome:</span> Proceed with simulator + baselines; defer “quantum” until justified by scale
              </li>
            </ul>
            <div className="mt-4 text-sm font-semibold text-surface-foreground">Read the case note →</div>
          </Link>

          <Link
            href="/case-studies/risk-aware-decision-support"
            className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm transition-colors hover:bg-background/5"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Decision support</div>
            <div className="mt-2 text-lg font-semibold tracking-tight">Risk-Aware Decision Support</div>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-surface-foreground/75">
              <li>
                <span className="font-semibold text-surface-foreground">Client type:</span> Risk &amp; analytics team (anonymized)
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Objective:</span> Make decisions under uncertainty with transparent risk tradeoffs
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Constraints:</span> Explainability, governance, and operational latency
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Built/measured:</span> Scenario simulator + scoring; validated stability vs baselines and integration fit
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Outcome:</span> Proceed with simulation-first workflow; pivot away from demo-led approaches
              </li>
            </ul>
            <div className="mt-4 text-sm font-semibold text-surface-foreground">Read the case note →</div>
          </Link>

          <Link
            href="/case-studies/portfolio-scheduling-scenario-planning"
            className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm transition-colors hover:bg-background/5"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Portfolio planning</div>
            <div className="mt-2 text-lg font-semibold tracking-tight">Portfolio Scheduling &amp; Scenario Planning</div>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-surface-foreground/75">
              <li>
                <span className="font-semibold text-surface-foreground">Client type:</span> Enterprise PMO / operations planning (anonymized)
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Objective:</span> Improve schedule quality and scenario responsiveness under constraints
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Constraints:</span> Changing priorities, hard constraints, and legacy tooling
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Built/measured:</span> Constraint-aware prototype; compared heuristics vs baseline solvers across scenarios
              </li>
              <li>
                <span className="font-semibold text-surface-foreground">Outcome:</span> Proceed with phased rollout; defer advanced optimization until data/process maturity
              </li>
            </ul>
            <div className="mt-4 text-sm font-semibold text-surface-foreground">Read the case note →</div>
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
                Talk to us
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
            Discuss a similar case
          </Link>
        </div>
      </div>
    </main>
  );
}
