import { Suspense } from "react";
import { SignInClient } from "./SignInClient";

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-3xl px-6 py-16">
          <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
            <div className="text-sm text-surface-foreground/70">Loading…</div>
          </div>
        </main>
      }
    >
      <SignInClient />
    </Suspense>
  );
}
