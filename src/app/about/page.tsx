import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Practitioner-led, non-hype, and business-facing.
          </p>
        </div>

        <article className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              We Are Quantum Practitioners
            </h2>
            <p className="leading-relaxed text-foreground/80">
              Quantum computing is no longer a purely academic pursuit — but it
              is also not magic.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Between the hype of futuristic promises and the rigor of
              fundamental research lies a practical gap: <br />
              <span className="font-semibold">
                how to responsibly use today’s quantum hardware, algorithms, and
                hybrid techniques to solve real business problems.
              </span>
            </p>
            <p className="leading-relaxed text-foreground/80">
              That is where we work.
            </p>
            <p className="leading-relaxed text-foreground/80">
              We are <span className="font-semibold">Q-Prac</span> — Quantum
              Practitioners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              What We Believe
            </h2>
            <p className="leading-relaxed text-foreground/80">
              We believe that the next phase of quantum computing will not be
              led by physicists alone, nor by speculative startups promising
              exponential miracles.
            </p>
            <p className="leading-relaxed text-foreground/80">
              It will be led by <span className="font-semibold">practitioners</span>
              {" "}
              who understand:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>the mathematics behind the methods,</li>
              <li>the engineering realities of hardware,</li>
              <li>the limitations of current algorithms,</li>
              <li>and the business consequences of deploying unproven technology.</li>
            </ul>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <p className="text-foreground">
                <span className="font-semibold">
                  Clarity before ambition. Judgment before scale. Reality before hype.
                </span>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              What We Are Not
            </h2>
            <p className="leading-relaxed text-foreground/80">To be clear, we are not:</p>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>quantum physicists designing qubits,</li>
              <li>academic researchers inventing new quantum algorithms,</li>
              <li>vendors selling proprietary black boxes,</li>
              <li>futurists forecasting breakthroughs on speculative timelines.</li>
            </ul>
            <p className="leading-relaxed text-foreground/80">
              Those roles are valuable — but they are not our role.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What We Do</h2>
            <p className="leading-relaxed text-foreground/80">
              We help organizations <span className="font-semibold">evaluate, prototype, and apply</span>
              {" "}
              quantum and quantum-inspired approaches in ways that are technically honest,
              economically justified, and aligned with real operational needs.
            </p>
            <p className="leading-relaxed text-foreground/80">Our work typically includes:</p>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>problem framing and suitability analysis,</li>
              <li>selection of appropriate quantum or hybrid methods,</li>
              <li>hands-on experimentation using existing hardware and simulators,</li>
              <li>translation of results into business and architectural decisions,</li>
              <li>guidance on what to pursue now — and what to defer.</li>
            </ul>
            <p className="leading-relaxed text-foreground/80">
              In many cases, our most valuable contribution is helping teams decide
              <span className="font-semibold"> what not to do yet</span>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Why Q-Prac Exists</h2>
            <p className="leading-relaxed text-foreground/80">
              Most organizations struggle with quantum not because they lack intelligence,
              but because they lack <span className="font-semibold">translation</span>.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Quantum computing sits at the intersection of advanced mathematics,
              unfamiliar computational models, immature hardware, and executive expectations
              shaped by hype.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Q-Prac exists to bridge that gap — not by oversimplifying, but by making
              complexity navigable.
            </p>
            <p className="leading-relaxed text-foreground/80">
              We specialize in turning uncertainty into informed choice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Our Approach</h2>
            <p className="leading-relaxed text-foreground/80">We work differently by design.</p>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>We lead with judgment, not demos.</li>
              <li>We insist on structure before experimentation.</li>
              <li>We define boundaries before we build prototypes.</li>
              <li>We prefer small, well-chosen experiments over grand promises.</li>
              <li>We charge for expertise, not for hope.</li>
            </ul>
            <p className="leading-relaxed text-foreground/80">
              Our engagements are deliberately scoped, time-bound, and outcome-oriented.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Who We Work With</h2>
            <p className="leading-relaxed text-foreground/80">We typically work with:</p>
            <ul className="list-disc space-y-2 pl-5 text-foreground/80">
              <li>technology leaders and architects,</li>
              <li>R&amp;D and innovation teams,</li>
              <li>executives exploring quantum readiness,</li>
              <li>organizations seeking sober guidance amid noise.</li>
            </ul>
            <p className="leading-relaxed text-foreground/80">
              If you are looking for certainty, guarantees, or shortcuts, we are not the
              right partner.
            </p>
            <p className="leading-relaxed text-foreground/80">
              If you are looking for clear thinking, disciplined experimentation, and honest
              answers, we are.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">A Final Word</h2>
            <p className="leading-relaxed text-foreground/80">
              Quantum computing will matter — but not everywhere, not all at once, and not
              without careful judgment.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Our role is not to predict the future. It is to help you make better
              decisions in the present.
            </p>
            <p className="leading-relaxed text-foreground/80">
              That is what it means to be a practitioner.
            </p>
          </section>
        </article>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
