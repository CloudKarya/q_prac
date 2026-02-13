import type { Metadata } from "next";
import Link from "next/link";
import { LearningSectionHeader, ResourceList } from "@/components/learning/LearningSectionHeader";

export const metadata: Metadata = {
  title: "Q-Day: Vision & Responsible Preparation",
  description: "Q-Day isn’t a single date; readiness is capability, governance, and disciplined optionality. Here’s how to prepare without hype.",
  alternates: { canonical: "/learning/q-day" },
};

export default function QDayPage() {
  return (
    <div>
      <LearningSectionHeader
        title="Q-Day: Vision & Responsible Preparation"
        intro="Q-Day isn’t a calendar event. Preparation means building evaluation capability, governance, and a staged roadmap that stays credible under scrutiny."
      />

      <h2 className="mt-8 text-xl font-semibold tracking-tight">Resources (placeholders)</h2>
      <ResourceList
        items={[
          { type: "Essay", label: "Q-Day is uneven, not explosive" },
          { type: "Framework", label: "Readiness stages (placeholder)" },
          { type: "Checklist", label: "What to do now / later / not at all" },
        ]}
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/services"
          className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Talk to us
        </Link>
        <Link
          href="/product"
          className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
        >
          Explore POCs
        </Link>
      </div>

      <div className="mt-10 flex justify-end">
        <Link
          href="/learning"
          className="text-sm font-semibold text-surface-foreground/80 hover:text-surface-foreground hover:underline"
        >
          Back to Learning Overview →
        </Link>
      </div>
    </div>
  );
}
