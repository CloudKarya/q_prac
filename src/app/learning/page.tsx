import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Quantum Readiness — Without Hype",
  description:
    "A guided learning path for leaders and architects: readiness, screening, baselines, and disciplined experimentation.",
  alternates: { canonical: "/learning" },
};

export default function LearningPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Learning Quantum Readiness — Without Hype
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-surface-foreground/75">
        This is a guided path for leaders, architects, and builders who want decision-grade clarity.
        Start from zero or jump ahead — each section is designed to reduce hype and increase signal.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/learning/quantum-101"
          className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Start with Quantum Computing 101
        </Link>
        <Link
          href="/blogs"
          className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Browse Blogs
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <OverviewCard
          num="01"
          title="Quantum Computing 101"
          subtitle="New to quantum? Start here. No math needed."
          href="/learning/quantum-101"
        />
        <OverviewCard
          num="02"
          title="How to Think About Quantum (Executive View)"
          subtitle="Mental models, decision frames, and readiness logic."
          href="/learning/executive-view"
        />
        <OverviewCard
          num="03"
          title="Quantum Computing Landscape (SOTA)"
          subtitle="Ecosystem map: hardware, simulators, cloud, hybrid methods."
          href="/learning/landscape"
        />
        <OverviewCard
          num="04"
          title="Q-Day: Vision & Responsible Preparation"
          subtitle="What Q-Day really means and how to prepare without hype."
          href="/learning/q-day"
        />
      </div>
    </div>
  );
}

function OverviewCard({
  num,
  title,
  subtitle,
  href,
}: {
  num: string;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl border border-surface-border bg-surface p-6 shadow-sm">
      <div className="text-xs font-semibold text-surface-foreground/60">{num}</div>
      <div className="mt-2 text-lg font-semibold tracking-tight">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-surface-foreground/70">{subtitle}</p>
      <div className="mt-5">
        <Link
          href={href}
          className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Start →
        </Link>
      </div>
    </div>
  );
}
