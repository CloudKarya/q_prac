// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-background" />
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 18%, rgba(255,255,255,0.10) 36%, rgba(255,255,255,0.02) 54%, rgba(255,255,255,0.10) 72%, rgba(255,255,255,0.02) 90%)",
            }}
          />
          <div
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(246,201,69,0.65), rgba(246,201,69,0) 60%)",
              filter: "blur(10px)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-14">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Strategy-led • Evidence-driven • Simulators today • Hardware soon
          </h1>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
                Quantum readiness for enterprise leaders and architects
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                Quantum readiness, strategy, and prototype-backed recommendations. We help enterprises separate signal
                from noise, benchmark against strong baselines, and turn results into roadmaps leadership can defend.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                >
                  Talk to us
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-surface-foreground shadow-sm hover:bg-muted"
                >
                  See Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:mt-6">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/landing/qupracs_hero.jpeg"
                    alt="QuPracs hero visual"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <KpiPill
              value="500+ hours"
              label="Hours across simulators + baselines (internal + client work, to date) — benchmarked, documented, repeatable."
            />
            <KpiPill
              value="20+ use cases"
              label="Use cases screened (decision memos, to date) — scored for feasibility, value, and data reality."
            />
            <KpiPill value="4–6 weeks" label="Weeks to evidence pack — baselines, benchmarks, and a defendable recommendation." />
          </div>
        </div>
      </section>

      {/* KNOW-HOW STRIP */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm">
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src="/images/about/q_decide.png"
                    alt="Decision-ready services"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-5 top-5 rounded-full border border-surface-border bg-surface px-3 py-2 text-xs font-semibold">
                  500+ hours (simulators + baselines, internal + client work, to date)
                </div>
                <div className="absolute left-5 bottom-5 rounded-full border border-surface-border bg-surface px-3 py-2 text-xs font-semibold">
                  Decision memos, not decks
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-sm font-semibold tracking-wide text-surface-foreground/60">
                We bring the know-how, you bring the vision — together we build success.
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Make credible bets, run disciplined experiments, and build readiness.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
                We work with leadership teams and engineers to define what “good” looks like, prototype
                under realistic constraints, and translate results into a staged roadmap.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                >
                  Learn more about Services
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                >
                  Browse Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold tracking-wide text-foreground/60">How we engage</p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Two-track: Consulting + Technical
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/75">
              A clear path from strategy to working evidence — with an optional developer enablement layer.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-muted px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-foreground/70">Consulting</div>
                <div className="text-xs text-foreground/60">1</div>
              </div>
              <div className="mt-2 text-base font-semibold">
                <Link href="/services/strategy-use-cases" className="hover:underline">
                  Strategy & Use-cases
                </Link>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Screen and prioritize opportunities with decision memos and success metrics you can defend.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-foreground/70">Technical</div>
                <div className="text-xs text-foreground/60">2</div>
              </div>
              <div className="mt-2 text-base font-semibold">
                <Link href="/services/poc-sprints" className="hover:underline">
                  POC Sprints
                </Link>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Build narrow prototypes, benchmark against baselines, and package results as evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-foreground/70">Technical</div>
                <div className="text-xs text-foreground/60">3</div>
              </div>
              <div className="mt-2 text-base font-semibold">
                <Link href="/services/architecture-integration" className="hover:underline">
                  Architecture & Integration
                </Link>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Design hybrid workflows, interfaces, and integration paths that fit your stack.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-foreground/70">Optional</div>
                <div className="text-xs text-foreground/60">4</div>
              </div>
              <div className="mt-2 text-base font-semibold">
                <Link href="/tutorials" className="hover:underline">
                  Tutorials
                </Link>
                <span className="text-foreground/60"> / </span>
                <Link href="/product" className="hover:underline">
                  Platform
                </Link>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Enable teams with reference workflows, templates, and repeatable execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h2>
            <p className="max-w-3xl text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
              Decision-grade services and prototype sprints built around baselines, benchmarking, and evidence packs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            <ServiceCard
              num="01"
              title="Quantum Readiness"
              desc="Assess people, process, and platform readiness; define governance, milestones, owners, and a staged adoption roadmap with clear success criteria."
              href="/services/quantum-readiness"
            />
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm md:row-span-2">
              <div className="relative h-full min-h-[340px] md:min-h-[540px]">
                <Image
                  src="/images/about/q_compute.png"
                  alt="Quantum prototyping"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <ServiceCard
              num="02"
              title="Strategy & Use Cases"
              desc="Prioritize opportunities based on economics, constraints, and feasibility—plus data needs, KPIs, ROI ranges, and stakeholder alignment for sign-off."
              href="/services/strategy-use-cases"
            />
            <ServiceCard
              num="03"
              title="POC Sprints"
              desc="Build narrow prototypes, benchmark against strong baselines, and ship decision-grade evidence packs with repeatable runs and measurable acceptance thresholds."
              href="/services/poc-sprints"
            />
            <ServiceCard
              num="04"
              title="Architecture & Integration"
              desc="Design hybrid pipelines and integration paths that fit your stack—data flows, orchestration, security, deployment, and operational guardrails for production."
              href="/services/architecture-integration"
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-wide text-surface-foreground/60">Success stories</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Driving real impact for modern businesses
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 md:inline-flex"
            >
              Talk to us
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <CaseStudyCard
              img="/images/landing/case-1.svg"
              title="Supply chain optimization"
              desc="Benchmarked quantum-inspired solvers vs baselines; produced a clear pursue/pivot memo."
              href="/case-studies/supply-chain-visibility-control"
            />
            <CaseStudyCard
              img="/images/landing/case-2.svg"
              title="Portfolio scheduling and planning"
              desc="Defined success metrics, built a prototype, and translated learnings into a staged roadmap."
              href="/case-studies/portfolio-scheduling-scenario-planning"
            />
            <CaseStudyCard
              img="/images/landing/case-3.svg"
              title="Risk-aware decision support"
              desc="Aligned stakeholders on decision criteria; validated performance and integration realities."
              href="/case-studies/risk-aware-decision-support"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-surface-border rounded-3xl border border-surface-border bg-surface">
            <FaqItem
              q="How can your services benefit our business?"
              a="We bring decision-grade clarity: what to do now, what to defer, and how to run experiments that translate to real constraints."
            />
            <FaqItem
              q="What makes QuPracs different from others?"
              a="We optimize for outcomes, not demos. We benchmark against strong baselines and are comfortable recommending “not yet.”"
            />
            <FaqItem
              q="Do you build production systems?"
              a="We focus on readiness, prototypes, benchmarking, and architecture paths. If a build is justified, we can advise and partner with your delivery team."
            />
            <FaqItem
              q="How long does a prototype sprint take?"
              a="Typically 4–6 weeks to get defensible evidence, depending on data access, baseline complexity, and integration constraints."
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Sample outcomes</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
            Typical deliverables and results from our engagements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <OutcomeCard
              title="Decision memo + use-case screening"
              body="A short, executive-safe memo: baseline assumptions, constraints, expected value, and a clear recommendation (yes / no / not yet)."
            />
            <OutcomeCard
              title="Evidence pack (4–6 weeks)"
              body="Prototype-backed results that stand up to scrutiny: baselines, benchmarking methodology, sensitivity analysis, and what it means for your roadmap."
            />
            <OutcomeCard
              title="Architecture + integration path"
              body="A practical target architecture for hybrid workflows, with integration touchpoints, operational constraints, and a staged delivery plan."
            />
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Get insights & practical guidance
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
            Short, actionable posts that help leadership teams and builders make better decisions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <BlogTeaserCard
              title="How to screen a quantum use-case"
              desc="A simple framework to avoid hype and focus on economics, constraints, and baselines."
              href="/blogs"
            />
            <BlogTeaserCard
              title="Benchmarking that translates"
              desc="How to choose baselines and avoid toy problems that don’t map to production realities."
              href="/blogs"
            />
            <BlogTeaserCard
              title="Evidence packs for leadership"
              desc="What to include so stakeholders can say yes, no, or not yet with confidence."
              href="/blogs"
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/blogs"
              className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
            >
              Browse Blogs
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
            >
              Read Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 18%, rgba(255,255,255,0.10) 36%, rgba(255,255,255,0.02) 54%, rgba(255,255,255,0.10) 72%, rgba(255,255,255,0.02) 90%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to make your next quantum decision the right one?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              Start with a short call. We’ll recommend a roadmap, a prototype sprint, or a disciplined “not yet.”
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                See Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function KpiPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted px-4 py-3">
      <div className="text-base font-semibold text-foreground">{value}</div>
      <div className="mt-1 text-xs text-foreground/75">{label}</div>
    </div>
  );
}

function ServiceCard({
  num,
  title,
  desc,
  href,
}: {
  num: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <div className="bg-background px-6 py-4">
        <Link href={href} className="block text-xl font-semibold tracking-tight text-white focus:outline-none">
          <span className="mr-3 text-white/80">{num}</span>
          {title}
        </Link>
      </div>
      <div className="p-6">
        <div className="text-sm leading-relaxed text-surface-foreground/70">{desc}</div>
        <div className="mt-4">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({
  img,
  title,
  desc,
  href,
  ctaLabel,
}: {
  img: string;
  title: string;
  desc: string;
  href: string;
  ctaLabel?: string;
}) {
  const label = ctaLabel ?? (href.startsWith("/case-studies") ? "Read the case study →" : "Discuss a similar case →");

  return (
    <div className="overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm">
      <div className="relative aspect-[3/2] w-full">
        <Image src={img} alt="Case study" fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="text-lg font-semibold tracking-tight">{title}</div>
        <div className="mt-2 text-sm leading-relaxed text-surface-foreground/70">{desc}</div>
        <div className="mt-5">
          <Link
            href={href}
            className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group px-6 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-sm font-semibold">{q}</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-border text-sm font-semibold text-surface-foreground/70">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-surface-foreground/70">{a}</p>
    </details>
  );
}

function OutcomeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
      <div className="text-lg font-semibold tracking-tight">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-surface-foreground/70">{body}</div>
    </div>
  );
}

function BlogTeaserCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
      <div className="text-lg font-semibold tracking-tight">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-surface-foreground/70">{desc}</div>
      <div className="mt-5">
        <Link href={href} className="inline-flex items-center text-sm font-semibold text-accent underline-offset-4 hover:underline">
          Learn more →
        </Link>
      </div>
    </div>
  );
}
