// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <h1 className="lg:col-span-2 text-center text-5xl font-semibold tracking-tight sm:text-6xl">
            Quantum As A Service
          </h1>

          {/* Left: copy */}
          <div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-base text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Beta • Simulators today • Hardware connectors soon
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Quantum workloads,
              <span className="block">as simple as an API call.</span>
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/80">
              QaaS helps developers experiment with quantum and hybrid workflows
              without hype: run circuits, sampling, and optimization on
              simulators now — and route to hardware when it makes sense.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Run your first job
              </Link>
              <Link
                href="/product"
                className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10"
              >
                How it works
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <Stat label="Time to first run" value="< 5 min" />
              <Stat label="Supported today" value="Simulators" />
              <Stat label="Built for" value="Developers" />
            </div>

            <p className="mt-6 text-sm text-foreground/70">
              No “quantum magic.” Clear constraints, reproducible runs, and
              docs-first onboarding.
            </p>
          </div>

          {/* Right: code + mini panel */}
          <div className="rounded-2xl border border-surface-border bg-surface p-5 shadow-sm text-surface-foreground">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Try it (example)</div>
              <div className="text-xs text-surface-foreground/60">Python</div>
            </div>

            <pre className="mt-3 overflow-x-auto rounded-xl bg-surface p-4 text-[13px] leading-relaxed text-surface-foreground border border-surface-border">
{`from qaas import Client

c = Client(api_key="...")

job = c.jobs.create(
  backend="simulator",
  task="circuit",
  qubits=8,
  shots=2000,
  circuit="""
    H 0
    CX 0 1
    MEASURE 0,1
  """
)

print(job.id)
print(job.results())`}
            </pre>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <MiniCard
                title="What you can run today"
                items={[
                  "Circuits (gates + measurements)",
                  "Sampling experiments",
                  "Optimization toy problems",
                ]}
              />
              <MiniCard
                title="What we won’t claim"
                items={[
                  "Not faster for everything",
                  "No parallel universe compute",
                  "No vague “advantage” promises",
                ]}
              />
            </div>

            <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-medium">Developer-first docs</div>
                  <div className="mt-1 text-sm text-surface-foreground/70">
                    Clear onboarding, honest limitations, runnable examples.
                  </div>
                </div>
                <Link
                  href="/docs"
                  className="shrink-0 rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:bg-accent/90"
                >
                  Open docs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof / credibility strip */}
        <div className="mt-14 rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground">
          <div className="grid gap-6 md:grid-cols-3">
            <Cred
              title="Reproducible by default"
              desc="Deterministic seeds, versioned backends, and logged configs."
            />
            <Cred
              title="Honest performance framing"
              desc="We show when quantum helps, when it doesn’t, and why."
            />
            <Cred
              title="Built to evolve"
              desc="Start with simulators, plug in hardware providers as they mature."
            />
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
