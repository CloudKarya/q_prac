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

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
                Evaluate Quantum decisions with <span className="text-accent">Qu</span>Pracs
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                Quantum Readiness, Strategy, and prototype-backed decisions. We help teams separate signal
                from noise, benchmark honestly, and translate outcomes into roadmaps leadership can trust.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/consulting"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                >
                  Get Started
                </Link>
                <Link
                  href="/product"
                  className="rounded-xl border border-border bg-transparent px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/10"
                >
                  See Services
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <KpiPill value="500+" label="Hours prototyped" />
                <KpiPill value="20+" label="Use-cases screened" />
                <KpiPill value="4-6" label="Weeks to evidence" />
                <KpiPill value="0" label="Hype-driven demos" />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/landing/hero-person.svg"
                    alt="QuPracs hero visual"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOW-HOW STRIP */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm">
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src="/images/about/q_decide.png"
                    alt="Decision-ready consulting"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-5 top-5 rounded-full border border-surface-border bg-surface px-3 py-2 text-xs font-semibold">
                  500+ hours prototyped
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
                  href="/consulting"
                  className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                >
                  Learn more about Consulting
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center rounded-xl border border-surface-border px-5 py-3 text-sm font-semibold hover:bg-surface/60"
                >
                  Browse Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h2>
            <p className="max-w-3xl text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
              Practical consulting and prototype sprints built around measurable outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            <ServiceCard
              num="01"
              title="Quantum Readiness"
              desc="Assess people, process, and platform readiness; define a staged roadmap and governance."
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
              title="Strategy & Use-case Screening"
              desc="Prioritize opportunities based on economics, constraints, and what’s feasible today."
            />
            <ServiceCard
              num="03"
              title="POC Sprints & Benchmarking"
              desc="Build narrow prototypes, benchmark honestly, and produce decision-grade evidence packs."
            />
            <ServiceCard
              num="04"
              title="Architecture & Integration"
              desc="Design hybrid pipelines and integration paths that work with your existing stack."
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
              className="hidden rounded-xl border border-surface-border px-4 py-2 text-sm font-semibold hover:bg-surface/60 md:inline-flex"
            >
              Talk to us
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <CaseStudyCard
              img="/images/landing/case-1.svg"
              title="Supply chain optimization under constraints"
              desc="Benchmarked quantum-inspired solvers vs baselines; produced a clear pursue/pivot memo."
              href="/contact"
            />
            <CaseStudyCard
              img="/images/landing/case-2.svg"
              title="Portfolio scheduling and scenario planning"
              desc="Defined success metrics, built a prototype, and translated learnings into a staged roadmap."
              href="/contact"
            />
            <CaseStudyCard
              img="/images/landing/case-3.svg"
              title="Risk-aware decision support"
              desc="Aligned stakeholders on decision criteria; validated performance and integration realities."
              href="/contact"
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
              q="How can consulting benefit our business?"
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

      {/* TEAM */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Meet our team</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
            A small, senior team that mixes strategy, engineering, and practical experimentation.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TeamCard img="/images/landing/team-1.svg" name="Venkatesh T." role="Founder / Strategy" />
            <TeamCard img="/images/landing/team-2.svg" name="Team Member" role="Quantum Engineer" />
            <TeamCard img="/images/landing/team-3.svg" name="Team Member" role="Solutions Architect" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface text-surface-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Voices of success</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
            Replace these placeholders with real client quotes when ready.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Working with this team brought clarity fast. The prototype and benchmarks made the decision obvious."
              name="Client Name"
              title="VP Engineering"
            />
            <TestimonialCard
              quote="They were transparent about tradeoffs and baselines. Exactly the discipline we needed."
              name="Client Name"
              title="Director of Strategy"
            />
            <TestimonialCard
              quote="No hype—just evidence, constraints, and a realistic roadmap we could execute."
              name="Client Name"
              title="Chief Architect"
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

          <div className="mt-10 flex justify-center">
            <Link
              href="/blogs"
              className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
            >
              Browse Blogs
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
                href="/consulting"
                className="rounded-xl border border-border bg-transparent px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/10"
              >
                See Consulting
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

function ServiceCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
      <div className="text-sm font-semibold text-surface-foreground/60">{num}</div>
      <div className="mt-2 text-xl font-semibold tracking-tight">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-surface-foreground/70">{desc}</div>
    </div>
  );
}

function CaseStudyCard({
  img,
  title,
  desc,
  href,
}: {
  img: string;
  title: string;
  desc: string;
  href: string;
}) {
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
            Read the case study →
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

function TeamCard({ img, name, role }: { img: string; name: string; role: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm">
      <div className="relative aspect-square w-full">
        <Image src={img} alt={name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="text-base font-semibold">{name}</div>
        <div className="mt-1 text-sm text-surface-foreground/70">{role}</div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, idx) => (
        <span key={idx} className="text-accent">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
      <Stars />
      <p className="mt-4 text-sm leading-relaxed text-surface-foreground/70">“{quote}”</p>
      <div className="mt-6">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-surface-foreground/60">{title}</div>
      </div>
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
        <Link href={href} className="text-sm font-semibold text-surface-foreground hover:underline">
          Learn more →
        </Link>
      </div>
    </div>
  );
}
