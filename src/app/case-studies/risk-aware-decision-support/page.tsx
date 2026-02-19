import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study — Risk-Aware Decision Support",
  description:
    "Representative client engagement: decision framing, criteria alignment, simulation-based validation, and integration feasibility for risk-aware decision support.",
  alternates: {
    canonical: "/case-studies/risk-aware-decision-support",
  },
};

export default function RiskAwareDecisionSupportCaseStudyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
          Representative client engagement
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">Risk-Aware Decision Support</h1>
        <p className="mt-3 text-sm font-semibold text-surface-foreground/70 sm:text-base">
          Anonymized enterprise program (multi-stakeholder)
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
              <dd className="mt-2 text-sm text-surface-foreground/80">Risk-aware decision support under uncertainty</dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Primary objective</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                Align stakeholders on decision criteria; validate performance and integration realities
              </dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Approach</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                Decision framing → criteria alignment → simulation-based validation → integration feasibility check
              </dd>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Engagement duration</dt>
              <dd className="mt-2 text-sm text-surface-foreground/80">
                2–4 weeks (assessment + decision framework), optional 4–6 weeks (POC sprint)
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">The challenge</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            The organization had no shortage of ideas. What it lacked was <span className="font-semibold">alignment</span>.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Different stakeholders were optimizing for different “success” definitions:
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Business leaders wanted measurable ROI and predictable risk exposure</li>
            <li>Engineering wanted feasibility and maintainability</li>
            <li>Security/compliance wanted conservative controls</li>
            <li>Operations wanted stability and minimal disruption</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">As a result:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Projects stalled in debate</li>
            <li>Pilots launched without clear success criteria</li>
            <li>“Proof” meant different things to different teams</li>
            <li>Integration constraints were discovered late—when costs were already sunk</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Leadership asked for one thing: <span className="font-semibold">a decision system</span> that would force clarity early.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What we did</h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-base font-semibold">1) Aligned stakeholders on decision criteria (before any build)</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                We ran a structured alignment process to define:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>
                  <span className="font-semibold">Decision objective:</span> what decision are we enabling (approve / defer / stop)?
                </li>
                <li>
                  <span className="font-semibold">Success metrics:</span> what must improve, and by how much?
                </li>
                <li>
                  <span className="font-semibold">Risk limits:</span> what failure modes are unacceptable?
                </li>
                <li>
                  <span className="font-semibold">Constraints:</span> integration, latency, security, data availability
                </li>
                <li>
                  <span className="font-semibold">Stop criteria:</span> what evidence ends the effort?
                </li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> a shared “decision contract” that leadership and engineering both signed up to.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">2) Built a risk-aware evaluation framework</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                Instead of “accuracy” as a single score, we defined a multi-criteria evaluation that reflected enterprise reality:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>
                  <span className="font-semibold">Expected value</span> (measurable upside)
                </li>
                <li>
                  <span className="font-semibold">Downside risk</span> (tail outcomes, worst-case behavior)
                </li>
                <li>
                  <span className="font-semibold">Robustness</span> (sensitivity to data drift and operational noise)
                </li>
                <li>
                  <span className="font-semibold">Operational fit</span> (latency, cost, reliability)
                </li>
                <li>
                  <span className="font-semibold">Governance fit</span> (auditability, accountability, approvals)
                </li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> a scoring rubric + weighting logic + examples so teams could apply it consistently.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">3) Validated performance with simulation (not opinions)</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                Where real-world testing was expensive or slow, we used simulation to:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Replay historical scenarios</li>
                <li>Test stress cases (rare-but-costly events)</li>
                <li>Compare candidate policies under consistent conditions</li>
                <li>Quantify tradeoffs between speed, accuracy, and robustness</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                This reduced “debate” and increased <span className="font-semibold">evidence-based alignment</span>.
              </p>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Deliverable:</span> a simulation harness and an evidence pack showing performance across scenarios—not just averages.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">4) Validated integration realities early</h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
                Before any “build big” decision, we ran an integration reality check:
              </p>
              <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
                <li>Data sources: availability, freshness, ownership</li>
                <li>Integration points: where decisions get executed</li>
                <li>Latency budgets and failure handling</li>
                <li>Security boundaries and compliance constraints</li>
                <li>Operational ownership (who supports it at 2am?)</li>
              </ul>
              <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
                <span className="font-semibold">Output:</span> an integration feasibility memo with “must-haves” and “won’t-work” constraints.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What changed (outcomes)</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">This engagement produced:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>Stakeholder alignment on a shared definition of “success”</li>
            <li>Explicit stop criteria that prevented pilot sprawl</li>
            <li>Measured performance under realistic conditions (including stress cases)</li>
            <li>Early discovery of integration blockers (before building the wrong thing)</li>
            <li>A clear recommendation: proceed, pivot, defer, or stop—owned by leadership</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Note:</span> We publish numeric deltas only with client approval.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Where quantum fits (and where it doesn’t)</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            In this case, quantum was treated as <span className="font-semibold">one option</span>, not the starting point.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">We used quantum/quantum-inspired screening only if:</p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm text-surface-foreground/75 sm:text-base">
            <li>The decision problem reduced to a well-formed optimization subproblem</li>
            <li>The simulator framework could compare it fairly against classical baselines</li>
            <li>Integration constraints didn’t invalidate the approach</li>
          </ul>
          <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
            <span className="font-semibold">Deliverable:</span> a disciplined “pursue / defer / not suitable” recommendation, benchmarked against classical baselines.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">What this case demonstrates</h2>
          <div className="mt-4 rounded-2xl border border-surface-border bg-background/20 p-5">
            <p className="text-sm font-semibold text-surface-foreground/85 sm:text-base">
              Most “innovation failures” are not technical. They are governance failures.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
              Risk-aware decision support succeeds when criteria are aligned early, performance is validated under realistic scenarios,
              and integration realities are faced before scale.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Next step</h2>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            If your organization has competing definitions of success, QuPracs can help you align, validate, and decide.
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
