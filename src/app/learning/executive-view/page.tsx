import type { Metadata } from "next";
import Link from "next/link";
import { LearningSectionHeader, ResourceList } from "@/components/learning/LearningSectionHeader";

export const metadata: Metadata = {
  title: "How to Think About Quantum (Executive View)",
  description: "Decision framing for leaders: readiness vs adoption, baselines, constraints, and what a good exploration looks like.",
  alternates: { canonical: "/learning/executive-view" },
};

export default function ExecutiveViewPage() {
  return (
    <div>
      <LearningSectionHeader
        title="How to Think About Quantum (Executive View)"
        intro="A decision-maker’s view: how to frame quantum as disciplined optionality, how to evaluate vendor claims, and how to avoid POCs that don’t translate."
      />

      <h2 className="mt-8 text-xl font-semibold tracking-tight">Resources (placeholders)</h2>
      <ResourceList
        items={[
          { type: "Framework", label: "Use-case suitability screening" },
          { type: "Blog", label: "Why quantum readiness is a strategy problem" },
          { type: "Book", label: "Recommended reading (high-level)" },
          { type: "Video", label: "Talk: Why most POCs fail (placeholder)" },
        ]}
      />

      <div className="mt-10 flex justify-end">
        <Link
          href="/learning/landscape"
          className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Next section →
        </Link>
      </div>
    </div>
  );
}
