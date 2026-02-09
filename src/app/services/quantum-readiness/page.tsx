import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quantum Readiness",
};

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface px-4 py-3 shadow-sm">
      <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-surface-foreground">{value}</div>
    </div>
  );
}

export default function QuantumReadinessPage() {
  return (
    <div>
      <div className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">
          Service 01
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-surface-foreground sm:text-4xl">
          Quantum Readiness Assessment
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          <span className="font-semibold text-surface-foreground">Clarity before investment.</span> A staged
          path to Q-Day readiness.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          Quantum readiness isn’t a technology problem. It’s an <span className="font-semibold">organizational
          decision problem</span>. We help enterprises establish a realistic baseline, identify gaps, and build
          a staged roadmap—so you invest only when it is strategically sensible.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoPill label="Best for" value="CIO/CTO offices, strategy & innovation, architecture teams" />
          <InfoPill label="Typical duration" value="2–4 weeks" />
          <InfoPill label="Primary output" value="Baseline + staged roadmap + governance model" />
        </div>

        <div className="mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Talk to us about readiness
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Outcomes</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">
            What you get at the end of the engagement.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
            <li>
              <span className="font-semibold text-surface-foreground">A decision-grade readiness baseline</span>
              {" "} (people, process, platform)
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">A staged roadmap</span>: what to do now,
              what to defer, what to ignore
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">A governance model</span> for evaluating and
              stopping initiatives early
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">A prioritized capability plan</span> (skills,
              partners, tooling, data readiness)
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Executive-ready documentation</span> you can
              circulate internally
            </li>
          </ul>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">What we evaluate</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Scope of the assessment.</p>

          <div className="mt-5 space-y-4 text-sm text-surface-foreground/75">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">1) People & Operating Model</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Decision ownership, sponsorship, and accountability</li>
                <li>Skill gaps and realistic staffing plans</li>
                <li>Internal vs partner responsibilities</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">2) Process & Portfolio Discipline</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>How use-cases are proposed, screened, funded, and stopped</li>
                <li>How success is measured (and by whom)</li>
                <li>How learning is captured and reused</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">3) Platform & Data Readiness</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Data availability and access constraints</li>
                <li>Integration touchpoints and latency constraints</li>
                <li>Tooling readiness for hybrid experimentation (simulators first)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">4) Governance & Risk</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Vendor exposure and lock-in risk</li>
                <li>Security, compliance, and IP considerations</li>
                <li>Communication discipline: avoiding hype and timeline promises</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">How it works</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Engagement flow (typical 2–4 weeks).</p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 1 — Align</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Kickoff with leadership + technical owners</li>
                <li>Confirm objectives, constraints, and decision timeline</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 2 — Assess</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Structured interviews + artifact review</li>
                <li>Current-state mapping of people/process/platform</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">
                Week 3 — Synthesize
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Gap analysis + readiness baseline</li>
                <li>Roadmap options with tradeoffs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 4 — Commit</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Executive readout</li>
                <li>Final roadmap + governance playbook</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm text-surface-foreground/70">
            For smaller orgs we compress this to 2 weeks.
          </p>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Inputs & Deliverables</h2>

          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">What we need from you</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>A short list of 2–4 candidate domains/use-case areas (even if vague)</li>
                <li>Current architecture overview (high-level is fine)</li>
                <li>Names of 5–8 stakeholders for interviews</li>
                <li>Any existing innovation / R&amp;D governance documents (if any)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">Deliverables (explicit)</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>
                  <span className="font-semibold text-surface-foreground">Quantum Readiness Baseline</span> (1–2 pages
                  summary + detail appendix)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Staged Roadmap</span> (Now / Next / Later;
                  with “Do not do yet” items)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Governance Playbook</span> (how to evaluate,
                  fund, and stop work)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Use-case intake template</span> (so future ideas
                  are screened consistently)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-surface-border bg-background/5 p-5">
            <div className="text-sm font-semibold text-surface-foreground">One thing we do differently</div>
            <p className="mt-2 text-sm text-surface-foreground/75">
              We are comfortable recommending <span className="font-semibold">“not yet”</span> when evidence and economics
              do not justify action.
            </p>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Next step</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-surface-foreground">
              Want a clear baseline and a staged roadmap?
            </h2>
            <p className="mt-2 text-sm text-surface-foreground/70">
              Our services are designed to help organizations make better decisions under uncertainty—without hype,
              premature investment, or technical theater.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Talk to us about readiness
          </Link>
        </div>
      </section>
    </div>
  );
}
