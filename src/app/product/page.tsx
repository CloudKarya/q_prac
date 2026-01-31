export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-foreground/70">
            Product
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Quantum Practice, Not Quantum Promises
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">
            A practitioner-led platform for responsible quantum experimentation and
            decision-making.
          </p>
        </header>

        <article className="mt-10 space-y-10">
          <section className="space-y-4">
            <p className="leading-relaxed text-foreground/80">
              QuPracs provides a practical platform for evaluating, prototyping, and
              applying quantum and quantum-inspired approaches using today’s hardware,
              algorithms, and simulators.
            </p>
            <p className="leading-relaxed text-foreground/80">
              It is designed for teams who want to experiment responsibly, interpret
              results correctly, and make informed technical and business decisions —
              without hype, black-box claims, or speculative assumptions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              What You Can Do with QuPracs
            </h2>
            <p className="leading-relaxed text-foreground/80">With QuPracs, teams can:</p>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>Frame real business or scientific problems for quantum suitability</li>
              <li>Design and run small, well-scoped experiments</li>
              <li>Use simulators and available quantum hardware where appropriate</li>
              <li>Compare quantum, hybrid, and classical approaches</li>
              <li>
                Interpret results in context, including noise, variance, and
                limitations
              </li>
              <li>Decide what to pursue now — and what to defer</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">How It’s Different</h2>
            <p className="leading-relaxed text-foreground/80">
              QuPracs is not a demo playground, a quantum marketplace, or a one-click
              optimizer.
            </p>
            <p className="leading-relaxed text-foreground/80">
              The platform is built around practitioner judgment: structured workflows,
              explicit assumptions, and transparent trade-offs. Every experiment is
              designed to answer a real question, not just produce a result.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What Exists Today</h2>
            <p className="leading-relaxed text-foreground/80">Today, QuPracs provides:</p>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>Structured experimentation workflows</li>
              <li>Access to simulators and select quantum backends</li>
              <li>Hands-on practitioner guidance</li>
              <li>
                Clear translation from experiments to architectural and business
                decisions
              </li>
            </ul>
            <p className="leading-relaxed text-foreground/80">
              The platform evolves deliberately, in step with hardware maturity and
              real user needs.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-muted p-6">
            <p className="leading-relaxed text-foreground">
              QuPracs helps organizations engage with quantum computing honestly,
              pragmatically, and with discipline — building capability now, while
              preparing for what comes next.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
