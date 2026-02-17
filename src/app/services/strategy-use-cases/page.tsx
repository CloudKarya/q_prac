import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategy & Use Cases",
};

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface px-4 py-3 shadow-sm">
      <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-surface-foreground">{value}</div>
    </div>
  );
}

export default function StrategyUseCasesPage() {
  return (
    <div>
      <div className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Service 02</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-surface-foreground sm:text-4xl">
          Strategy &amp; Use Case Prioritization
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          <span className="font-semibold text-surface-foreground">Focus on what matters.</span> Defer what doesn’t.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          Not every problem is a quantum problem. And not every quantum-sounding idea deserves investment.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          QuPracs helps enterprises <span className="font-semibold">identify, evaluate, and prioritize</span> quantum and
          quantum-inspired opportunities based on <span className="font-semibold">business value, constraints, and what is
          feasible today</span>—not speculation.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoPill
            label="Best for"
            value="Strategy teams, innovation leaders, CTO offices, architecture councils"
          />
          <InfoPill label="Typical duration" value="2–3 weeks" />
          <InfoPill
            label="Primary output"
            value="Shortlisted use cases + rationale + next-step decisions"
          />
        </div>

        <div className="mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Talk to us about strategy
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Outcomes</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">What you get at the end of the engagement.</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
            <li>
              <span className="font-semibold text-surface-foreground">A small, credible shortlist</span> of priority
              use cases (often fewer than expected)
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Explicit “not suitable” and “not yet” decisions</span>
              {" "}with justification
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Business-aligned framing</span> for each shortlisted
              opportunity
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Clear inputs</span> into POC, experimentation, or
              deferral decisions
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Executive-ready materials</span> for internal
              alignment
            </li>
          </ul>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">What we evaluate</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Screening criteria for prioritization.</p>

          <div className="mt-5 space-y-4 text-sm text-surface-foreground/75">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">1) Business Fit</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Strategic relevance and decision criticality</li>
                <li>Value at stake and downside risk</li>
                <li>Time-to-impact expectations</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">2) Problem Structure</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Optimization, simulation, search, or ML characteristics</li>
                <li>Sensitivity to approximation and noise</li>
                <li>Decomposability and constraint structure</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">3) Feasibility Today</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Availability of classical or quantum-inspired baselines</li>
                <li>Simulator realism and scalability</li>
                <li>Hardware relevance (if any) and access constraints</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">4) Organizational Constraints</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Data availability and quality</li>
                <li>Integration complexity</li>
                <li>Change tolerance and ownership clarity</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">How it works</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Engagement flow (typical 2–3 weeks).</p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 1 — Frame</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Align on business objectives and constraints</li>
                <li>Normalize candidate ideas into comparable problem statements</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 2 — Screen</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Structured evaluation across technical and economic dimensions</li>
                <li>Benchmark against classical and quantum-inspired approaches</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 3 — Decide</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Prioritization workshop with stakeholders</li>
                <li>Clear recommendations: proceed, prototype, defer, or stop</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm text-surface-foreground/70">
            For smaller portfolios, this can be completed in 2 weeks.
          </p>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Inputs & Deliverables</h2>

          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">What we need from you</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>A list of candidate ideas, pain points, or domains (even if loosely defined)</li>
                <li>High-level business objectives and constraints</li>
                <li>Access to business and technical stakeholders</li>
                <li>Any prior POCs, experiments, or vendor material (if available)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">Deliverables (explicit)</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>
                  <span className="font-semibold text-surface-foreground">Use Case Shortlist</span> (with ranking and
                  rationale)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Screening Matrix</span> (business value ×
                  feasibility)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Recommendation Memo</span> (proceed / prototype /
                  defer / stop)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">POC Candidate Briefs</span> (for shortlisted items
                  only)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-surface-border bg-background/5 p-5">
            <div className="text-sm font-semibold text-surface-foreground">When this is the right fit</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>You have too many ideas and no disciplined way to choose</li>
              <li>Vendors or internal teams are pushing disconnected pilots</li>
              <li>Leadership wants clarity before authorizing experimentation</li>
              <li>You need a neutral, technically literate perspective</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Next step</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-surface-foreground">
              Need help prioritizing what to pursue—and what to avoid?
            </h2>
            <p className="mt-2 text-sm text-surface-foreground/70">
              Our goal is not to find quantum use cases—it is to prevent organizations from being wrong at scale.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Talk to us about strategy
          </Link>
        </div>
      </section>
    </div>
  );
}
