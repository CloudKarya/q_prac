import Link from "next/link";

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-foreground/70">
            Tutorials
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Practical quantum + engineering tutorials
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">
            Step-by-step walkthroughs focused on mental models, runnable experiments,
            and decision-making—without the hype.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted p-6">
            <h2 className="text-xl font-semibold tracking-tight">Coming soon</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              We’re actively publishing. In the meantime, the Blogs section has longer
              form explainers and research notes.
            </p>
            <div className="mt-4">
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-white/10"
              >
                Go to Blogs
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border p-6">
            <h2 className="text-xl font-semibold tracking-tight">Want a topic covered?</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              If there’s a specific tutorial you want (QAOA, VQE, error mitigation,
              benchmarking, etc.), tell us what you’re building and your constraints.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
