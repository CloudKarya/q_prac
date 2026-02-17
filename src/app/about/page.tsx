import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Practitioner-led, non-hype, and business-facing.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <header>
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">About</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">About Us</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Practitioner-led, non-hype, and business-facing.
          </p>
        </header>

        <article className="mt-10 grid gap-6">
          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[320px_1fr] md:items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative h-72 w-72 max-w-full">
                  <Image
                    src="/images/about/q_compute.png"
                    alt="Quantum computing"
                    fill
                    sizes="(min-width: 768px) 288px, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4 md:min-h-72 md:flex md:flex-col md:justify-center">
                <h2 className="text-xl font-semibold tracking-tight text-surface-foreground sm:text-2xl">
                  We Are Quantum Practitioners
                </h2>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  Quantum computing is no longer a purely academic pursuit — but it is also not magic. It has moved out of
                  textbooks and labs and into early-stage platforms that real teams can now access and evaluate. Its
                  limitations are just as real as its promise, and treating it as either science fiction or inevitable
                  salvation leads to poor decisions.
                </p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  Between the hype of futuristic promises and the rigor of fundamental research lies a practical gap: how to
                  responsibly use today’s quantum hardware, algorithms, and hybrid techniques to solve real business
                  problems. This gap is about translation — understanding what current systems can and cannot do, and where
                  quantum methods complement classical approaches rather than replace them.
                </p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">That is where we work.</p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  We are <span className="font-semibold text-surface-foreground">QuPracs</span> — Quantum Practitioners,
                  helping organizations engage with quantum computing pragmaticly, pragmatically, and with respect for both
                  technical reality and business outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[1fr_320px] md:items-start">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight text-surface-foreground sm:text-2xl">What We Believe</h2>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  We believe the next phase of quantum computing will not be led by physicists alone, nor by speculative
                  startups promising exponential miracles. While foundational research and ambition matter, real progress
                  will come from practitioners who can bridge theory, engineering, and real-world use, and who are willing
                  to work within today’s technical, operational, and organizational constraints.
                </p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  Practitioners understand the mathematics behind the methods, the engineering realities of current
                  hardware, the limitations of today’s algorithms, and the business consequences of deploying unproven
                  technology. They recognize how these factors interact in practice, how results should be interpreted, and
                  where hybrid approaches make sense. Most importantly, they know when careful judgment, disciplined
                  experimentation, and timing matter more than optimism or theoretical elegance.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative h-72 w-72 max-w-full">
                  <Image
                    src="/images/about/q_comp.png"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 288px, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-surface-border bg-background/5 p-5">
              <p className="text-sm font-semibold text-surface-foreground sm:text-base">
                Clarity before ambition. Judgment before scale. Reality before hype.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[320px_1fr] md:items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative h-72 w-72 max-w-full">
                  <Image
                    src="/images/about/not_scientist.png"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 288px, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4 md:min-h-72 md:flex md:flex-col md:justify-center">
                <h2 className="text-xl font-semibold tracking-tight text-surface-foreground sm:text-2xl">What We Are Not</h2>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  To be clear, we are not quantum physicists designing new qubit architectures, nor are we academic
                  researchers focused on inventing novel quantum algorithms. We are also not vendors selling proprietary
                  black boxes, or futurists forecasting breakthroughs on speculative or uncertain timelines.
                </p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  Those roles are essential to the broader quantum ecosystem, and we respect the work being done in each of
                  those domains. But they are not our role.
                </p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  Our focus is not on advancing fundamental science or selling opaque technology. It is on applying
                  existing methods responsibly, working within real constraints, and helping organizations make informed
                  decisions about when and how quantum computing is worth pursuing. We operate downstream of research and
                  upstream of production, where judgment, interpretation, and practical trade-offs matter most.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[1fr_320px] md:items-center">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight text-surface-foreground sm:text-2xl">What We Do</h2>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  We help organizations evaluate, prototype, and apply quantum and quantum-inspired approaches in ways that
                  are technically pragmatic, economically justified, and aligned with real operational needs. Our work is
                  grounded in today’s hardware, algorithms, and tooling — not in speculative assumptions about future
                  breakthroughs.
                </p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  Our engagements typically involve careful problem framing and suitability analysis, selection of
                  appropriate quantum or hybrid methods, and hands-on experimentation using existing hardware and
                  high-fidelity simulators. We focus on translating experimental results into clear business and
                  architectural implications, so teams can make informed decisions rather than chase novelty.
                </p>
                <p className="text-sm leading-relaxed text-surface-foreground/80 sm:text-base">
                  In many cases, our most valuable contribution is helping organizations decide what not to pursue yet —
                  reducing risk, avoiding wasted effort, and preserving credibility while building long-term readiness.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative h-72 w-72 max-w-full">
                  <Image
                    src="/images/about/whatwedo.png"
                    alt="What we do"
                    fill
                    sizes="(min-width: 768px) 288px, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
