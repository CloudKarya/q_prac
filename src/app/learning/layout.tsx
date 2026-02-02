import type { ReactNode } from "react";
import { LearningNav } from "@/components/learning/LearningNav";

export default function LearningLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 text-surface-foreground">
      <div className="grid gap-6 md:grid-cols-[320px_1fr] md:items-start">
        <aside className="w-full md:sticky md:top-24 md:h-fit">
            <LearningNav />
        </aside>

        <section className="min-w-0 rounded-[28px] border border-surface-border bg-surface p-7 shadow-sm">
          {children}
        </section>
      </div>
    </main>
  );
}
