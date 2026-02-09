import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecture & Integration",
};

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface px-4 py-3 shadow-sm">
      <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-surface-foreground">{value}</div>
    </div>
  );
}

export default function ArchitectureIntegrationPage() {
  return (
    <div>
      <div className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Service 04</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-surface-foreground sm:text-4xl">
          Architecture &amp; Integration Planning
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          <span className="font-semibold text-surface-foreground">Design for optionality.</span> Integrate without
          overcommitting.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          Even when experimentation shows promise, value is lost if quantum methods can’t be integrated into
          <span className="font-semibold text-surface-foreground"> real enterprise systems</span>.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          QuPracs helps organizations design{" "}
          <span className="font-semibold">hybrid, forward-compatible architectures</span> that work with today’s stack—
          while preserving flexibility for tomorrow.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoPill label="Best for" value="Enterprise architects, platform teams, CTO offices" />
          <InfoPill label="Typical duration" value="3–5 weeks" />
          <InfoPill label="Primary output" value="Reference architecture + integration options + decision guidance" />
        </div>

        <div className="mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Talk to us about architecture
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Outcomes</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">What you get at the end of the engagement.</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
            <li>
              <span className="font-semibold text-surface-foreground">Hybrid reference architectures</span> aligned to your
              current environment
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Integration options</span> with explicit tradeoffs
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Clear boundaries</span> between experimental and
              production systems
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Forward-compatible designs</span> that preserve
              optionality
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Guidance on what not to build yet</span>
            </li>
          </ul>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">What we focus on</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Scope and design priorities.</p>

          <div className="mt-5 space-y-4 text-sm text-surface-foreground/75">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">1) Hybrid Workflows</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Classical, quantum-inspired, and (where justified) quantum components</li>
                <li>Clear separation between experimentation and production paths</li>
                <li>Sensible orchestration and control points</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">2) Data &amp; Systems Integration</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Data movement, latency, and access constraints</li>
                <li>Integration with existing pipelines, schedulers, and platforms</li>
                <li>Observability and reproducibility considerations</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">3) Platform &amp; Access Models</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Simulator-first architectures</li>
                <li>Cloud integration patterns</li>
                <li>Hardware access models (where applicable) without lock-in</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">4) Security, Compliance &amp; Ownership</div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Data security and access control</li>
                <li>IP ownership and vendor exposure</li>
                <li>Operational ownership and escalation paths</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">How it works</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Engagement flow (typical 3–5 weeks).</p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 1 — Context</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Review current architecture and constraints</li>
                <li>Clarify future-facing requirements and non-negotiables</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Weeks 2–3 — Design</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Develop candidate hybrid architectures</li>
                <li>Evaluate integration patterns and tradeoffs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 4 — Stress-test</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Assess scalability, cost, security, and operational risk</li>
                <li>Identify fragility and failure modes</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 5 — Decide</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Executive and architecture council readout</li>
                <li>Final recommendation with clear “build / defer / avoid” guidance</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm text-surface-foreground/70">
            For narrower scopes, this can be completed in 3–4 weeks.
          </p>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Inputs &amp; Deliverables</h2>

          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">What we need from you</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>High-level architecture diagrams and system descriptions</li>
                <li>Constraints around security, compliance, and deployment</li>
                <li>Learnings from prior POCs or experiments (if any)</li>
                <li>Architecture and platform stakeholders for review sessions</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-sm font-semibold text-surface-foreground">Deliverables (explicit)</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>
                  <span className="font-semibold text-surface-foreground">Reference Architecture Diagrams</span>
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Integration Options Matrix</span> (with pros,
                  cons, and risks)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Build vs Defer Recommendations</span>
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Future-readiness Guidance</span> (what to revisit
                  later, and when)
                </li>
                <li>
                  <span className="font-semibold text-surface-foreground">Executive Summary</span> suitable for governance
                  review
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-surface-border bg-background/5 p-5">
            <div className="text-sm font-semibold text-surface-foreground">What we explicitly avoid</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>Vendor lock-in disguised as “architecture”</li>
              <li>Over-engineering for future hardware that doesn’t yet exist</li>
              <li>Fragile pipelines that can’t survive experimentation</li>
              <li>Production commitments without evidence</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">When it’s the right fit</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>POCs have shown promising signals</li>
              <li>Architecture decisions need to be <span className="font-semibold text-surface-foreground">defensible and reversible</span></li>
              <li>You want to prepare without prematurely committing</li>
              <li>Integration risk matters as much as technical performance</li>
            </ul>
            <p className="mt-5 text-sm text-surface-foreground/75">
              Good architecture keeps options open longer—and closes the wrong ones early.
            </p>
          </div>

          <div className="shrink-0">
            <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Next step</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-surface-foreground">
              Planning to integrate experimental capabilities responsibly?
            </h2>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Talk to us about architecture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
