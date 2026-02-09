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
            A practitioner-led platform for responsible quantum experimentation and decision-making.
          </p>
        </header>

        <div className="mt-10 grid gap-6">
          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
              QuPracs provides a practical platform for evaluating, prototyping, and applying quantum and quantum-inspired
              approaches using today’s hardware, algorithms, and simulators.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
              It is designed for teams who want to experiment responsibly, interpret results correctly, and make informed
              technical and business decisions—without hype, black-box claims, or speculative assumptions.
            </p>
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
              QuPracs is not a demo playground, a quantum marketplace, or a one-click optimizer.
            </p>
            <p className="mt-3 text-sm text-surface-foreground/75 sm:text-base">
              The platform is built around practitioner judgment: structured workflows, explicit assumptions, and transparent
              trade-offs. Every experiment is designed to answer a real question, not just produce a result.
            </p>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-surface-foreground">What Exists Today</h2>
            <p className="mt-2 text-sm text-surface-foreground/70">Today, QuPracs provides:</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
              <li>Structured experimentation workflows</li>
              <li>Access to simulators and select quantum backends</li>
              <li>Hands-on practitioner guidance</li>
              <li>Clear translation from experiments to architectural and business decisions</li>
            </ul>
            <p className="mt-4 text-sm text-surface-foreground/75 sm:text-base">
              The platform evolves deliberately, in step with hardware maturity and real user needs.
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
                  We help teams move from questions to measurable experiments—then to defensible decisions.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Talk to us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
