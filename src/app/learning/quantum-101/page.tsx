import type { Metadata } from "next";
import Link from "next/link";
import { LearningSectionHeader, ResourceList } from "@/components/learning/LearningSectionHeader";

export const metadata: Metadata = {
  title: "Quantum Computing 101 (No Math Needed)",
  description: "A practical introduction to quantum computing: what it is, what it isn’t, and why it matters for readiness.",
  alternates: { canonical: "/learning/quantum-101" },
};

export default function Quantum101Page() {
  return (
    <div>
      <LearningSectionHeader
        title="Quantum Computing 101 (No Math Needed)"
        intro="Mental models for what quantum is (and isn’t), how to interpret claims, and how to stay grounded in real constraints."
      />

      <h2 className="mt-8 text-xl font-semibold tracking-tight">Resources (placeholders)</h2>
      <ResourceList
        items={[
          {
            type: "Blog",
            label: "What Quantum Computing Can Do Today (And What It Absolutely Cannot)",
          },
          { type: "Video", label: "Qubits and superposition — intuition only" },
          {
            type: "Note",
            label: "Common misconceptions (autoplay hype, timelines, supremacy claims)",
          },
        ]}
      />

      <div className="mt-10 flex justify-end">
        <Link
          href="/learning/executive-view"
          className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Next section →
        </Link>
      </div>
    </div>
  );
}
