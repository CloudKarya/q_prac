import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hiring Process",
  description:
    "How QuPracs hires: self-selection-first, lightweight steps, high signal and low bureaucracy.",
  alternates: {
    canonical: "/hiring-process",
  },
};

export default function HiringProcessPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <div className="mb-6">
          <Link href="/jobs" className="text-sm font-semibold text-background hover:underline">
            <span aria-hidden>←</span> Back to Jobs
          </Link>
        </div>

        <header>
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
            Hiring Process
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">Hiring Process (QuPracs)</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Our process is self-selection-first: low bureaucracy, high signal.
          </p>
        </header>

        <section className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">1) Start with self-selection (signal before process)</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We intentionally keep our hiring process lightweight and candidate-led. The best signal for us is simple:
              self-motivated learning + demonstrated curiosity + follow-through.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">2) Create an account and learn your way in</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              Before applying, we strongly encourage candidates to sign up on qupracs.com and explore our material:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>Learning track (recommended for everyone)</li>
              <li>Blogs (how we think; decision-first, baseline-first)</li>
              <li>Tutorials (especially for technical roles)</li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/80">
              What “enough learning” means depends on the role:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>
                Product / Project / Implementation roles: quantum literacy is sufficient. You do not need to be a
                programmer.
              </li>
              <li>
                Engineering / Technical lead roles: we expect deeper comfort with the technology and the “how,” not
                just the “what.”
              </li>
              <li>
                Intern roles: we encourage breadth first across Learning + Blogs, and Tutorials if you’re technical.
                Depth is great, but breadth matters.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">3) Apply using the same email you used to sign up</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              When you apply, use the same email you used on our website. This lets us review your learning progress
              (what you read, what you completed) as part of the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">4) Share your LinkedIn profile</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We also ask for your LinkedIn profile so we can understand your professional trajectory and prior work.
              Your background does not need to be in quantum computing — we’re looking for evidence of craft,
              execution, ownership, and growth.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">5) Review + two interview steps (high signal, low bureaucracy)</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">If your profile and progress are a fit, our process is:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-surface-border bg-background/5 p-5">
                <div className="text-sm font-semibold">Take-home exercise (role-aligned)</div>
                <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
                  This is designed to let you show how you think and what you can produce.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-border bg-background/5 p-5">
                <div className="text-sm font-semibold">Final interview (video or in-person)</div>
                <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
                  A practical conversation: clarifying questions, tradeoffs, and your approach.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">6) Our bias: motivated builders</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We’re not optimizing for bureaucracy. We’re optimizing for self-driven people who demonstrate genuine
              interest and momentum.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              If this sounds like you — we’re looking forward to meeting you.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
