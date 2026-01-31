import type { Metadata } from "next";
import Link from "next/link";
import { LearningSectionHeader, ResourceList } from "@/components/learning/LearningSectionHeader";

export const metadata: Metadata = {
  title: "Quantum Computing Landscape (State of the Art)",
  description: "A high-level map of the quantum ecosystem: hardware, simulators, cloud access, hybrid workflows, and quantum-inspired methods.",
  alternates: { canonical: "/learning/landscape" },
};

export default function LandscapePage() {
  return (
    <div>
      <LearningSectionHeader
        title="Quantum Computing Landscape (State of the Art)"
        intro="Map the ecosystem and separate what’s production-relevant today from what’s experimental. The goal is clarity, not coverage."
      />

      <h2 className="mt-8 text-xl font-semibold tracking-tight">Resources (placeholders)</h2>
      <ResourceList
        items={[
          { type: "Guide", label: "Hardware vs simulators vs quantum-inspired" },
          { type: "Diagram", label: "Landscape map (placeholder)" },
          {
            type: "Blog",
            label: "Why simulators matter more than hardware for most teams today",
          },
        ]}
      />

      <div className="mt-10 flex justify-end">
        <Link
          href="/learning/q-day"
          className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Next section →
        </Link>
      </div>
    </div>
  );
}
