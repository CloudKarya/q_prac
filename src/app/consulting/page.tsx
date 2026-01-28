export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-foreground/70">
            Consulting
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Quantum Readiness & Strategy Consulting
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">
            Boardroom clarity plus practitioner-grade evidence: decide what to do now,
            what to defer, and how to avoid hype-driven pilots.
          </p>
        </header>

        <article className="mt-10 space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What we help with</h2>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>Use-case screening and prioritization</li>
              <li>Readiness assessment (people, data, governance)</li>
              <li>Experiment design and success criteria</li>
              <li>Evidence-backed decision memos: pursue / pivot / not yet</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">How engagements work</h2>
            <p className="leading-relaxed text-foreground/80">
              We start with constraints (latency, cost, security, integration), establish
              strong classical baselines, then define a bounded experiment plan only when it
              produces decision-grade learning.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-muted p-6">
            <h2 className="text-xl font-semibold tracking-tight">Next step</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              If quantum is showing up in strategy conversations, we can do a short readiness
              call and recommend a roadmap, a POC sprint, or a disciplined “not yet”.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
