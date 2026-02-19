import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study — Portfolio Scheduling & Scenario Planning",
  description:
    "Representative client engagement: constraint-aware portfolio scheduling prototype and scenario evidence pack, translated into a staged roadmap.",
  alternates: {
    canonical: "/case-studies/portfolio-scheduling-scenario-planning",
  },
};

export default function PortfolioSchedulingScenarioPlanningCaseStudyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
          Representative client engagement
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
          Portfolio Scheduling &amp; Scenario Planning
        </h1>
        <p className="mt-3 text-sm font-semibold text-surface-foreground/70 sm:text-base">
          Anonymized enterprise program (multi-quarter planning)
        </p>

        <div className="mt-6 rounded-2xl border border-surface-border bg-background/20 p-5">
          <p className="text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Note:</span> This is an anonymized case note representative of QuPracs
            engagements. Details have been generalized to protect confidentiality.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">Snapshot</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Problem type</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                Portfolio scheduling and scenario planning under constraints
              </dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Primary objective</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                Define success metrics, build a prototype, and translate learnings into a staged roadmap
              </dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Approach</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                Decision framing → metrics + constraints → simulator/prototype → evidence pack → staged roadmap
              </dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Engagement duration</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                3–4 weeks (assessment + prototype plan), optional 4–6 weeks (prototype sprint)
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">The challenge</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            The organization faced a common planning failure mode:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Too many initiatives competing for the same limited resources</li>
            <li>Schedules built with static assumptions that broke under change</li>
            <li>Priorities revisited repeatedly without a shared decision standard</li>
            <li>“Scenario planning” done in spreadsheets that couldn’t be trusted</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">Leadership wanted a system that could answer:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>“What happens if funding shifts by 10–15% next quarter?”</li>
            <li>“Which initiatives are robust under resource constraints?”</li>
            <li>“Where are we most exposed to schedule slippage?”</li>
            <li>
              “What portfolio is optimal <span className="italic">given risk tolerance</span>, not just expected value?”
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            They didn’t want a heavy planning tool first. They wanted <span className="font-semibold">decision-grade clarity</span>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What we did</h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-base font-semibold">1) Defined decision scope and success metrics (before any prototype)</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We aligned stakeholders on what “success” means for portfolio scheduling:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>
                  <span className="font-semibold">Business value:</span> expected impact, time-to-impact, strategic alignment
                </li>
                <li>
                  <span className="font-semibold">Resource realism:</span> staffing availability, critical skills, shared dependencies
                </li>
                <li>
                  <span className="font-semibold">Risk posture:</span> downside tolerance, schedule risk, concentration risk
                </li>
                <li>
                  <span className="font-semibold">Stability:</span> how often the plan changes and why
                </li>
                <li>
                  <span className="font-semibold">Decision latency:</span> how quickly a plan can be updated with confidence
                </li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> a success-metrics one-pager with explicit thresholds and tradeoffs.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">2) Built a constraint-aware prototype (not a full platform)</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We built a lightweight prototype focused on the decision question:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Represent initiatives, dependencies, and resource pools</li>
                <li>Encode constraints (skills, capacity, sequencing, deadlines)</li>
                <li>Generate candidate schedules and compare them under scenarios</li>
                <li>Produce outputs leadership can interpret: tradeoffs, bottlenecks, robustness</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                This avoided platform-building and moved quickly to <span className="font-semibold">evidence</span>.
              </p>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Deliverable:</span> a working prototype with scenario inputs and comparable outputs.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">3) Ran scenario experiments using simulation-style evaluation</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We tested portfolio schedules across scenarios such as:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Resource availability shifts (hiring delays, attrition, reassignment)</li>
                <li>Budget shocks or funding reallocation</li>
                <li>Dependency delays (upstream platform slip)</li>
                <li>Scope changes in one or two critical initiatives</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                Instead of asking “which plan is best,” we asked:
              </p>
              <div className="mt-3 rounded-2xl border border-surface-border bg-background/20 p-5">
                <p className="text-sm font-semibold text-surface-foreground/85 sm:text-base">
                  “Which plan is robust under plausible disruption?”
                </p>
              </div>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Deliverable:</span> an evidence pack showing schedule robustness, bottlenecks, and failure points.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">4) Translated learnings into a staged roadmap</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                The prototype and evidence pack produced clear next steps:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>What to standardize (intake, estimation, dependency modeling)</li>
                <li>What to automate (scenario runs, constraint checks, reporting)</li>
                <li>What to defer (advanced optimization) until the data and governance are ready</li>
                <li>Where optimization (including quantum-inspired methods) could later help</li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> a staged roadmap that leadership could fund and sequence responsibly.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Where quantum (and quantum-inspired) could fit later</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            We did <span className="font-semibold">not</span> lead with quantum.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            We screened for whether certain subproblems might justify quantum-inspired optimization later:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Constrained portfolio scheduling at large scale</li>
            <li>Multi-objective allocation with complex dependencies</li>
            <li>“Best schedule under uncertainty” variants with combinatorial complexity</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">But only after:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Constraints are stable and measurable</li>
            <li>Baselines are strong and reproducible</li>
            <li>Integration realities are clear</li>
          </ul>
          <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Deliverable:</span> a pursue/defer recommendation with classical baselines as reference.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What changed (outcomes)</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">This engagement produced:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>A shared definition of success and measurable thresholds</li>
            <li>A prototype that made tradeoffs visible and testable</li>
            <li>Scenario evidence that aligned stakeholders quickly</li>
            <li>Early identification of the true bottlenecks (not assumed ones)</li>
            <li>A staged roadmap leadership could adopt without overcommitting</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Note:</span> We publish numeric deltas only with client approval.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What this case demonstrates</h2>
          <div className="mt-4 rounded-2xl border border-surface-border bg-background/20 p-5">
            <p className="text-sm font-semibold text-surface-foreground/85 sm:text-base">
              Portfolio planning isn’t a spreadsheet problem. It’s a governance and constraint realism problem.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
              A prototype plus scenario evidence is often the fastest path to alignment.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Next step</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            If your portfolio planning cycles are dominated by debate, rework, and fragile spreadsheets, talk to us. We’ll
            start by defining decision metrics, building a prototype evidence plan, and turning results into a staged roadmap.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
            >
              Talk to us
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-surface-border bg-surface px-5 text-sm font-semibold text-surface-foreground shadow-sm hover:bg-background/5"
            >
              More case studies
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
