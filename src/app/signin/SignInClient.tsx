"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export function SignInClient() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/tutorials";
  const error = searchParams.get("error");

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Sign in</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Sign in to use Tutorials</h1>
        <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
          We require sign-in to create and manage tutorial sessions. Choose Google or LinkedIn.
        </p>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            <div className="font-semibold">Sign-in didn’t complete</div>
            <div className="mt-1 text-red-900/80">
              Error code: <span className="font-mono">{error}</span>. Try again, or use Google.
              If this persists, contact us and mention this code.
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl })}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Continue with Google
          </button>
          <button
            type="button"
            onClick={() => signIn("linkedin", { callbackUrl })}
            className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-surface px-5 py-3 text-sm font-semibold text-surface-foreground shadow-sm hover:bg-background/5"
          >
            Continue with LinkedIn
          </button>
        </div>

        <div className="mt-8 text-sm text-surface-foreground/70">
          <Link href="/privacy" className="font-semibold hover:underline">
            Privacy
          </Link>
          <span className="px-2">•</span>
          <Link href="/terms" className="font-semibold hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </main>
  );
}
