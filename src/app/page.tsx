// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <h1 className="lg:col-span-2 text-center text-4xl font-semibold tracking-tight sm:text-4xl">
            Quantum Readiness, Strategy, and Prototype-Backed Decisions
          </h1>

          {/* Left: copy */}
          <div className="lg:col-span-2 w-full">
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-base text-foreground">
              <span className="inline-block h-3 w-2 rounded-full bg-accent" />
              Strategy-led • Evidence-driven • Simulators today • Hardware connectors soon
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Clarity first.
              <span className="block">Experiments second.</span>
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              QuPracs helps enterprises separate signal from noise in quantum and quantum-inspired
              computing—so leadership teams can make credible bets, run disciplined POCs, and build
              readiness without hype, waste, or technical theater.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/consulting"
                className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Talk to us (Consulting)
              </Link>
              <Link
                href="/product"
                className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Explore Prototyping (POCs)
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stat label="Primary outcome" value="Better decisions" />
              <Stat label="Engagement style" value="Strategy + POC" />
              <Stat label="Built for" value="Execs + architects" />
            </div>

            <p className="mt-6 text-sm text-foreground/70">
              We are comfortable recommending “not yet” when the evidence and economics don’t justify action.
            </p>
          </div>
        </div>

        {/* Credibility strip */}
        <div className="mt-14 rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground">
          <div className="grid gap-6 md:grid-cols-3">
            <Cred
              title="Reproducible by default"
              desc="Deterministic seeds, versioned backends, and logged configs for defensible experiments."
            />
            <Cred
              title="Honest performance framing"
              desc="We show when quantum helps, when it doesn’t, and what the real tradeoffs are."
            />
            <Cred
              title="Built to evolve"
              desc="Start with simulators and hybrid methods; connect hardware providers as maturity improves."
            />
          </div>
        </div>

        {/* Two tracks */}
        <div className="mt-14">
          <div className="text-2xl font-semibold tracking-tight text-foreground">
            Two engagement tracks, one disciplined philosophy
          </div>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-foreground/80">
            Some clients need boardroom clarity. Others need experimental proof. Many need both.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground shadow-sm">
              <div className="text-sm font-medium text-surface-foreground/70">Track 1</div>
              <div className="mt-1 text-xl font-semibold">Strategy & Quantum Readiness Consulting</div>
              <p className="mt-3 text-sm leading-relaxed text-surface-foreground/70">
                We advise leadership teams on where quantum may eventually matter, what to ignore for now,
                and how to prepare responsibly.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <MiniCard
                  title="Typical outcomes"
                  items={[
                    "Use-case suitability & prioritization",
                    "Readiness assessment & gaps",
                    "Q-Day roadmap & staging",
                    "Decision memos: yes / no / not yet",
                  ]}
                />
                <MiniCard
                  title="Good fit when"
                  items={[
                    "Quantum appears in strategy discussions",
                    "You need clarity before investment",
                    "You want credible “not yet” options",
                  ]}
                />
              </div>

              <div className="mt-5">
                <Link
                  href="/consulting"
                  className="inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-sm hover:bg-accent/90"
                >
                  See consulting engagements
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground shadow-sm">
              <div className="text-sm font-medium text-surface-foreground/70">Track 2</div>
              <div className="mt-1 text-xl font-semibold">Technical Prototyping & POC Sprints</div>
              <p className="mt-3 text-sm leading-relaxed text-surface-foreground/70">
                We run tight, evidence-driven POCs using today’s ecosystem—simulators, hardware access
                where appropriate, and quantum-inspired solvers.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <MiniCard
                  title="Typical outcomes"
                  items={[
                    "Feasibility and benchmark results",
                    "Hybrid architecture options",
                    "Evidence pack for leadership",
                    "Proceed / pivot / defer guidance",
                  ]}
                />
                <MiniCard
                  title="Good fit when"
                  items={[
                    "You have a candidate use-case",
                    "You need proof, not demos",
                    "You want realistic constraints",
                  ]}
                />
              </div>

              <div className="mt-5">
                <Link
                  href="/product"
                  className="inline-flex rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10"
                >
                  Explore prototyping
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement loop */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground">
          <div className="text-2xl font-semibold tracking-tight">A simple loop: decide, test, translate</div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70">
            The goal is not “quantum projects.” The goal is better decisions under uncertainty.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <StepCard
              num="1"
              title="Frame the decision"
              desc="Clarify the objective, constraints, and what success means in measurable terms."
            />
            <StepCard
              num="2"
              title="Run disciplined experiments"
              desc="Prototype narrowly, benchmark honestly, and avoid toy problems that don’t translate."
            />
            <StepCard
              num="3"
              title="Translate into a roadmap"
              desc="Convert results into what to do now, what to watch, what to stop, and what to defer."
            />
          </div>
        </div>

        {/* We are / We are not */}
        <div className="mt-16">
          <div className="text-2xl font-semibold tracking-tight text-foreground">Credibility comes from restraint</div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground shadow-sm">
              <div className="text-sm font-semibold">We are</div>
              <ul className="mt-3 space-y-2 text-sm text-surface-foreground/70">
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>Strategy-led advisors who understand technical realities</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>Practitioners who prototype and benchmark, not just speculate</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>Focused on economic and operational justification</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>Comfortable recommending “not yet” when warranted</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground shadow-sm">
              <div className="text-sm font-semibold">We are not</div>
              <ul className="mt-3 space-y-2 text-sm text-surface-foreground/70">
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>A hardware vendor or black-box platform seller</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>A research lab inventing new quantum algorithms</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>A futurist shop selling timelines</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
                  <span>Incentivized to push quantum where it doesn’t belong</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA band */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-8 text-surface-foreground">
          <div className="text-2xl font-semibold tracking-tight">
            If quantum is showing up in your strategy conversations, it’s time for clarity.
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-surface-foreground/70">
            Start with a short readiness call. We’ll help you determine whether you need a roadmap, a POC,
            or a disciplined “not yet.”
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/consulting"
              className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-sm hover:bg-accent/90"
            >
              Schedule a consulting call
            </Link>
            <Link
              href="/blogs"
              className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10"
            >
              Browse blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface p-4 text-surface-foreground">
      <div className="text-xs text-surface-foreground/60">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function MiniCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-surface-border bg-surface p-4">
      <div className="text-sm font-medium">{title}</div>
      <ul className="mt-2 space-y-1 text-sm text-surface-foreground/70">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-surface-foreground/40" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cred({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-surface-foreground/70">{desc}</div>
    </div>
  );
}

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-border text-sm font-semibold">
          {num}
        </div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-surface-foreground/70">{desc}</div>
    </div>
  );
}
