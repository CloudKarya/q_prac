import type { ReactNode } from "react";
import { LearningNav } from "@/components/learning/LearningNav";

export default function LearningLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <aside className="w-full md:w-80 md:shrink-0">
          <LearningNav />
        </aside>

        <section className="min-w-0 flex-1 rounded-3xl border border-surface-border bg-surface p-7 text-surface-foreground shadow-sm">
          {children}
        </section>
      </div>
    </main>
  );
}
