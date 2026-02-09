import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POC Sprints",
};

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface px-4 py-3 shadow-sm">
      <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-surface-foreground">{value}</div>
    </div>
  );
}

export default function PocSprintsPage() {
  return (
    <div>
      <div className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Service 03</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-surface-foreground sm:text-4xl">
          POC Sprints &amp; Experimental Validation
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          <span className="font-semibold text-surface-foreground">Evidence over demos.</span> Decisions over optimism.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
          Proof-of-concepts should <span className="font-semibold">reduce uncertainty</span>, not create new confusion.
          QuPracs runs <span className="font-semibold">narrow, time-boxed POC sprints</span> designed to answer
          <span className="font-semibold"> specific decision questions</span>—using honest benchmarking against classical
          and quantum-inspired baselines.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoPill label="Best for" value="CTO offices, architecture teams, innovation leads" />
          <InfoPill label="Typical duration" value="4–6 weeks" />
          <InfoPill label="Primary output" value="Evidence pack + clear recommendation" />
        </div>

        <div className="mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Talk to us about a POC sprint
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Outcomes</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">What you get at the end of the sprint.</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
            <li>
              <span className="font-semibold text-surface-foreground">Decision-grade experimental evidence</span>, not
              demos
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Clear performance and cost benchmarks</span>
              {" "}against relevant baselines
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Explicit limitations and failure modes</span>
              {" "}documented
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">A recommendation</span> to proceed, pivot, defer,
              or stop
            </li>
            <li>
              <span className="font-semibold text-surface-foreground">Artifacts leadership can trust</span> and
              circulate internally
            </li>
          </ul>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">What makes our POCs different</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">
            Most POCs fail because they are designed to prove possibility, not to inform decisions.
          </p>

          <div className="mt-5 rounded-2xl border border-surface-border bg-surface/60 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>We start with a <span className="font-semibold text-surface-foreground">decision question</span>, not an algorithm</li>
              <li>We benchmark against <span className="font-semibold text-surface-foreground">classical and quantum-inspired</span> approaches</li>
              <li>We treat <span className="font-semibold text-surface-foreground">“no improvement”</span> as a valid and valuable outcome</li>
              <li>We document assumptions, constraints, and breakpoints explicitly</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">What we build</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Scope varies by use-case, always feasible today.</p>

          <div className="mt-5 rounded-2xl border border-surface-border bg-surface/60 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>High-fidelity <span className="font-semibold text-surface-foreground">simulator-based experiments</span></li>
              <li><span className="font-semibold text-surface-foreground">Quantum-inspired</span> or hybrid solvers</li>
              <li>Limited <span className="font-semibold text-surface-foreground">hardware access</span> where justified</li>
              <li>End-to-end experimental pipelines (data → solver → evaluation)</li>
            </ul>
          </div>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">How it works</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Engagement flow (typical 4–6 weeks).</p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 1 — Define</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Confirm the decision question and success criteria</li>
                <li>Lock scope, baselines, and evaluation metrics</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Weeks 2–4 — Build & Run</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Implement narrow experimental pipelines</li>
                <li>Run controlled experiments across baselines</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 5 — Analyze</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Compare performance, cost, scalability, and robustness</li>
                <li>Identify breakpoints and sensitivities</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface/60 p-5">
              <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Week 6 — Decide</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                <li>Executive readout</li>
                <li>Clear recommendation: proceed, pivot, defer, or stop</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm text-surface-foreground/70">
            For simpler use-cases, we compress this to 4 weeks.
          </p>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Inputs</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">What we need from you to run a clean sprint.</p>
          <div className="mt-5 rounded-2xl border border-surface-border bg-surface/60 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>A <span className="font-semibold text-surface-foreground">screened and prioritized use-case</span> (typically from Service 02)</li>
              <li>Access to representative datasets (or realistic proxies)</li>
              <li>Agreement on evaluation metrics and decision thresholds</li>
              <li>Stakeholders for mid-sprint and final reviews</li>
            </ul>
          </div>
        </section>

        <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Deliverables</h2>
          <p className="mt-2 text-sm text-surface-foreground/70">Explicit artifacts you can circulate internally.</p>
          <div className="mt-5 rounded-2xl border border-surface-border bg-surface/60 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li><span className="font-semibold text-surface-foreground">Experimental Results Summary</span> (executive-level)</li>
              <li><span className="font-semibold text-surface-foreground">Benchmark Comparisons</span> (classical vs quantum-inspired vs quantum)</li>
              <li><span className="font-semibold text-surface-foreground">Assumptions & Limitations Log</span></li>
              <li><span className="font-semibold text-surface-foreground">Decision Memo</span> with next-step recommendation</li>
              <li><span className="font-semibold text-surface-foreground">Reusable experiment artifacts</span> (where appropriate)</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">When it’s the right fit</h2>
        <p className="mt-2 text-sm text-surface-foreground/70">Signals that a sprint will produce decision-grade clarity.</p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
          <li>A use-case has passed strategic screening</li>
          <li>Leadership wants evidence before committing further investment</li>
          <li>You need clarity, not optimism</li>
          <li>You want to avoid scaling the wrong approach</li>
        </ul>
        <p className="mt-5 text-sm text-surface-foreground/75">
          Our POCs are designed to help you decide{" "}
          <span className="font-semibold text-surface-foreground">whether to continue</span>, not to justify continuing.
        </p>
      </section>

      <section className="mt-6 rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Next step</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-surface-foreground">
              Ready to test a use-case with discipline and honesty?
            </h2>
            <p className="mt-2 text-sm text-surface-foreground/70">
              We’ll run a narrow sprint to reduce uncertainty—then recommend proceed, pivot, defer, or stop.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Talk to us about a POC sprint
          </Link>
        </div>
      </section>
    </div>
  );
}
