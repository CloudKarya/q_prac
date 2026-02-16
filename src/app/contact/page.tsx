import type { Metadata } from "next";
import Link from "next/link";
import { ContactFormClient } from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with QuPracs. Share context and we’ll reply with next steps.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Contact
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
        Tell us what you’re trying to accomplish and what constraints matter. We’ll reply with a
        short set of next steps.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-muted p-6">
            <ContactFormClient />
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-muted p-6">
            <div className="text-base font-semibold text-foreground">What happens next</div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>We’ll respond within 1–2 business days.</li>
              <li>We’ll ask 2–3 clarifying questions and propose a path.</li>
              <li>If a tutorial-style demo is relevant, we’ll point you to one.</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-background/20 p-5">
              <div className="text-sm font-semibold text-foreground">Prefer email?</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Use the form for fastest routing, or send a note via the
                {" "}
                <Link className="font-semibold text-accent hover:underline" href="/about">
                  About
                </Link>
                {" "}
                page.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

