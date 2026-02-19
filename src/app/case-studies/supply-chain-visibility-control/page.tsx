import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study — Supply Chain Visibility & Control",
  description:
    "Representative client engagement: visibility baseline, simulator-first policy testing, and optimization screening (quantum where justified).",
  alternates: {
    canonical: "/case-studies/supply-chain-visibility-control",
  },
};

export default function SupplyChainVisibilityControlCaseStudyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
          Representative client engagement
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">Supply Chain Visibility &amp; Control</h1>
        <p className="mt-3 text-sm font-semibold text-surface-foreground/70 sm:text-base">
          Anonymized electronics manufacturer (Japan HQ)
        </p>

        <div className="mt-6 rounded-2xl border border-surface-border bg-background/20 p-5">
          <p className="text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Note:</span> This is an anonymized case note representative of QuPracs
            engagements. Details have been generalized to protect client confidentiality and do not imply a public client
            relationship.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">Snapshot</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Industry</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">Electronics / complex manufacturing supply chain</dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Geography</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">Japan HQ, with operations in SF Bay Area</dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Primary objective</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                Improve end-to-end inventory visibility and decision control across supply and demand
              </dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Approach</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                Visibility baseline → simulator-first policy testing → optimization screening (quantum/quantum-inspired where
                justified)
              </dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Engagement duration</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                3–5 weeks (assessment + blueprint), optional 4–6 weeks (POC sprint)
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">The challenge</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            The organization had strong operational teams, but decisions were constrained by:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Inconsistent inventory truth across sites and partners</li>
            <li>Long decision latency (plans updated slower than reality changed)</li>
            <li>High expedite spend driven by reactive prioritization</li>
            <li>Local optimization that created system-level fragility</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Leadership did not want a “technology project.” They wanted <span className="font-semibold">decision clarity</span>{" "}
            and a staged plan that could be defended.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What we assessed</h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-base font-semibold">1) Decision Map</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We mapped the highest-impact decisions and their owners:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Allocation and prioritization rules (what ships first, and why)</li>
                <li>Safety stock policy and buffer placement</li>
                <li>Expedite triggers and approval paths</li>
                <li>Exception handling cadence (S&amp;OP and operational replans)</li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> a decision map with owners, cadence, inputs, and failure modes.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">2) Visibility Baseline</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We established a measurable baseline across nodes (plants, DCs, key suppliers):
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Data latency (how old is the inventory signal?)</li>
                <li>Completeness (what’s missing or “manually corrected”?)</li>
                <li>Accuracy (system truth vs operational truth)</li>
                <li>Propagation delays (when do downstream systems reflect changes?)</li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> a visibility baseline with quantified gaps and the “top 5 causes
                of blind spots.”
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">3) Constraint Register</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We captured constraints that actually drive outcomes:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Supplier lead-time variability and lot constraints</li>
                <li>Production/test capacity bottlenecks and changeovers</li>
                <li>Transportation constraints and compliance gates</li>
                <li>Substitution rules and qualification constraints</li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> constraint register and what can be modeled immediately vs later.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">4) Economics + Stop Criteria</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We defined decision-grade success thresholds:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Service-level targets and acceptable risk</li>
                <li>Inventory reduction goals (by tier/category)</li>
                <li>Expedite spend reduction targets</li>
                <li>Stability metrics (replan churn, shortage frequency)</li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> success metrics + explicit stop/go criteria for experiments.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Simulator-first: how we created decision confidence</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Before proposing any “advanced optimization,” we built a lightweight simulation harness focused on the top
            decisions:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>What-if scenarios (supplier disruption, demand surge, port delay)</li>
            <li>Policy A/B testing (allocation rules, safety stock, expedite triggers)</li>
            <li>Scenario replay (why did shortages occur, which policy would prevent it)</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            This converted “visibility” into actionable decision learning without committing to a large digital-twin program.
          </p>
          <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Deliverable:</span> a simulator blueprint + 3–5 high-leverage scenarios + a policy
            test plan.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Where quantum fits (and where it doesn’t)</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            We did <span className="font-semibold">not</span> start with quantum.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            We screened whether any subproblems had the structure to justify quantum / quantum-inspired methods, such as:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Constrained allocation across multiple tiers</li>
            <li>Production scheduling with changeover penalties</li>
            <li>Routing/loading variants with complex constraints</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">For each candidate, we defined:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>The best classical baseline to beat</li>
            <li>The scale and constraint realism required</li>
            <li>Whether simulator-based evidence could justify a POC sprint</li>
          </ul>
          <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Deliverable:</span> an optimization screening memo: pursue / defer / not suitable,
            with rationale.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What changed (outcomes)</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">This engagement produced:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>A shared decision architecture (who decides, with what signals)</li>
            <li>A quantified visibility baseline (no more “we think”)</li>
            <li>A simulator-first plan that allowed policy testing without disruption</li>
            <li>A staged roadmap that avoided premature vendor or hardware commitments</li>
            <li>Clear recommendations on where optimization experiments were justified</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Note:</span> We publish numeric deltas only when clients approve.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What this case demonstrates</h2>
          <div className="mt-4 rounded-2xl border border-surface-border bg-background/20 p-5">
            <p className="text-sm font-semibold text-surface-foreground/85 sm:text-base">Visibility is readiness.</p>
            <p className="mt-1 text-sm font-semibold text-surface-foreground/85 sm:text-base">Simulation is confidence.</p>
            <p className="mt-1 text-sm font-semibold text-surface-foreground/85 sm:text-base">Optimization is optional.</p>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
              Most enterprises skip the middle. That’s where costly mistakes happen.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Next step</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            If your supply chain team is being pushed toward “optimization” before visibility and policy discipline are in
            place, talk to us. We’ll start with a readiness baseline and a simulator-first evidence plan.
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
