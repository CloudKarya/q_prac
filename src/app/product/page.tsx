import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
  description:
    "QuPracs is a practitioner-led platform for responsible quantum experimentation and decision-making—baseline-first, measurable, hype-resistant.",
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <header>
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Product</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            Quantum Practice, Not Quantum Promises
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            A practitioner-led workflow for responsible quantum experimentation and decision-making — baseline-first,
            measurable, and hype-resistant.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
            >
              View Tutorials demos
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-surface px-5 py-3 text-sm font-semibold text-surface-foreground hover:bg-surface/60"
            >
              Talk to us
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-6">
          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
              QuPracs turns quantum evaluation into a repeatable practice: start from a real question, define a baseline,
              run a tight experiment, and capture evidence you can defend.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
              It’s built for teams who want to interpret results correctly (noise, variance, constraints) and make informed
              technical and business decisions — without black-box claims or speculative assumptions.
            </p>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">Start with demos</h2>
            <p className="mt-2 text-sm text-surface-foreground/70">
              If you’re evaluating platforms, start with the runnable tutorials. They’re designed to be small and honest:
              what works today, what fails, and what persists across cells.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/tutorials"
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/60"
              >
                Playground
              </Link>
              <Link
                href="/tutorials/ibm"
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/60"
              >
                IBM
              </Link>
              <Link
                href="/tutorials/dwave"
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/60"
              >
                D-Wave
              </Link>
              <Link
                href="/tutorials/ionq"
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/60"
              >
                IonQ
              </Link>
              <Link
                href="/tutorials/quantinuum"
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/60"
              >
                Quantinuum
              </Link>
              <Link
                href="/tutorials/braket"
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/60"
              >
                Braket
              </Link>
              <Link
                href="/tutorials/azure"
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/60"
              >
                Azure
              </Link>
            </div>
            <div className="mt-4 text-xs text-surface-foreground/60">
              Tip: many platforms use account credentials rather than simple “API keys”. Use BYOK only if you trust the
              runner you’re connected to.
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">
              What You Can Do with QuPracs
            </h2>
            <p className="mt-2 text-sm text-surface-foreground/70">With QuPracs, teams can:</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>Frame real business or scientific problems for quantum suitability</li>
              <li>Design and run small, well-scoped experiments</li>
              <li>Use simulators and available quantum hardware where appropriate</li>
              <li>Compare quantum, hybrid, and classical approaches</li>
              <li>Interpret results in context, including noise, variance, and limitations</li>
              <li>Decide what to pursue now—and what to defer</li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">How It’s Different</h2>
            <p className="mt-2 text-sm text-surface-foreground/75 sm:text-base">
              QuPracs is not a one-click optimizer. It’s a decision workflow.
            </p>
            <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
              The platform is built around practitioner judgment: structured workflows, explicit assumptions, and transparent
              trade-offs. Every experiment is designed to answer a real question, not just produce a result.
            </p>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">What Exists Today</h2>
            <p className="mt-2 text-sm text-surface-foreground/70">Today, QuPracs includes:</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>Interactive, notebook-style Tutorials (with per-platform starters)</li>
              <li>Session-based execution (cells share state so you can build up experiments)</li>
              <li>Optional BYOK key entry for platform credentials (opt-in injection as env vars)</li>
              <li>Clear translation from experiments to architectural and business decisions</li>
            </ul>
            <p className="mt-4 text-sm text-surface-foreground/75 sm:text-base">
              Platform SDK availability depends on the runner environment you connect to.
            </p>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-background/5 p-7">
            <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
              QuPracs helps organizations engage with quantum computing honestly, pragmatically, and with discipline—building
              capability now, while preparing for what comes next.
            </p>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wide text-surface-foreground/60">Next step</div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-surface-foreground">
                  Want to evaluate a use-case responsibly?
                </h2>
                <p className="mt-2 text-sm text-surface-foreground/70">
                  Start with Tutorials to see suitable demos, then talk to us if you want a baseline-first evaluation plan.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tutorials"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                >
                  See Tutorials demos
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-surface px-5 py-3 text-sm font-semibold text-surface-foreground hover:bg-surface/60"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
