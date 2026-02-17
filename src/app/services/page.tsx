import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Practical services and prototype sprints built around measurable outcomes and decision-grade evidence.",
};

type ServiceCard = {
  num: string;
  title: string;
  description: string;
  href: string;
};

const services: ServiceCard[] = [
  {
    num: "01",
    title: "Quantum Readiness",
    description:
      "Assess people, process, and platform readiness; define a staged roadmap and governance.",
    href: "/services/quantum-readiness",
  },
  {
    num: "02",
    title: "Strategy & Use Cases",
    description:
      "Prioritize opportunities based on economics, constraints, and what’s feasible today.",
    href: "/services/strategy-use-cases",
  },
  {
    num: "03",
    title: "POC Sprints",
    description:
      "Build narrow prototypes, benchmark pragmatically, and produce decision-grade evidence packs.",
    href: "/services/poc-sprints",
  },
  {
    num: "04",
    title: "Architecture & Integration",
    description:
      "Design hybrid pipelines and integration paths that work with your existing stack.",
    href: "/services/architecture-integration",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight text-surface-foreground sm:text-4xl">
        Services
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
        We help teams separate signal from noise, prototype under realistic constraints, and translate
        outcomes into roadmaps leadership can trust.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group block overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm transition hover:bg-surface/60"
          >
            <div className="flex items-center justify-between bg-background px-6 py-4 text-white">
              <div className="text-lg font-semibold tracking-tight">
                <span className="mr-3 opacity-90">{s.num}</span>
                {s.title}
              </div>
              <div className="text-sm font-semibold opacity-90 transition group-hover:opacity-100">
                View →
              </div>
            </div>
            <div className="px-6 py-6">
              <p className="text-sm leading-relaxed text-surface-foreground/70 sm:text-base">
                {s.description}
              </p>
              <div className="mt-5 inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm group-hover:bg-accent/90">
                Explore
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
