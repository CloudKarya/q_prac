"use client";

import { useEffect, useMemo, useState } from "react";

type ContactInterest =
  | "general"
  | "readiness"
  | "poc"
  | "integration"
  | "training"
  | "partnership";

type ContactPayload = {
  fullName: string;
  email: string;
  company?: string;
  title?: string;
  interest?: ContactInterest;
  timeline?: string;
  message: string;
  website?: string; // honeypot
  startedAtMs?: number;
};

function isValidEmail(email: string): boolean {
  // Pragmatic validation (we also validate on the server).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function apiErrorMessage(json: unknown): string | undefined {
  if (!json || typeof json !== "object") return undefined;
  if (!("error" in json)) return undefined;
  const errorValue = (json as { error?: unknown }).error;
  return typeof errorValue === "string" ? errorValue : undefined;
}

export function ContactFormClient() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [interest, setInterest] = useState<ContactInterest>("general");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [startedAtMs, setStartedAtMs] = useState<number | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  useEffect(() => {
    setStartedAtMs(Date.now());
  }, []);

  const canSubmit = useMemo(() => {
    if (!fullName.trim()) return false;
    if (!isValidEmail(email.trim())) return false;
    if (!message.trim()) return false;
    return true;
  }, [email, fullName, message]);

  async function submit(payload: ContactPayload) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let body: unknown = undefined;
    try {
      body = await res.json();
    } catch {
      // ignore
    }

    if (!res.ok) {
      const msg = apiErrorMessage(body) ?? "We couldn’t send your message. Please try again.";
      throw new Error(msg);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "idle" });

    // Honeypot: if filled, act like success (reduces bot feedback loops).
    if (website.trim()) {
      setStatus({ type: "success", message: "Thanks — we’ll be in touch." });
      return;
    }

    if (!canSubmit) {
      setStatus({
        type: "error",
        message: "Please add your name, a valid email, and a short message.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await submit({
        fullName: fullName.trim(),
        email: email.trim(),
        company: company.trim() ? company.trim() : undefined,
        title: title.trim() ? title.trim() : undefined,
        interest,
        timeline: timeline.trim() ? timeline.trim() : undefined,
        message: message.trim(),
        website: website.trim() ? website.trim() : undefined,
        startedAtMs,
      });

      setStatus({ type: "success", message: "Thanks — we’ll reply soon." });
      setMessage("");
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40";

  const labelClass = "text-sm font-semibold text-surface-foreground";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            Name <span className="text-surface-foreground/60">(required)</span>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={inputClass}
              autoComplete="name"
              required
            />
          </label>
        </div>
        <div>
          <label className={labelClass}>
            Work email <span className="text-surface-foreground/60">(required)</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              autoComplete="email"
              inputMode="email"
              required
            />
          </label>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            Company
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={inputClass}
              autoComplete="organization"
            />
          </label>
        </div>
        <div>
          <label className={labelClass}>
            Role / title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass}
              autoComplete="organization-title"
            />
          </label>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>
            What are you looking for?
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value as ContactInterest)}
              className={inputClass}
            >
              <option value="general">General</option>
              <option value="readiness">Quantum readiness</option>
              <option value="poc">POC sprint</option>
              <option value="integration">Architecture / integration</option>
              <option value="training">Training / enablement</option>
              <option value="partnership">Partnership</option>
            </select>
          </label>
        </div>
        <div>
          <label className={labelClass}>
            Timeline (optional)
            <input
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className={inputClass}
              placeholder="e.g., 2–4 weeks, Q2, exploratory"
            />
          </label>
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Message <span className="text-surface-foreground/60">(required)</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} min-h-[140px] resize-y`}
            placeholder="What are you trying to decide, and what constraints matter?"
            required
          />
        </label>
      </div>

      <div className="hidden">
        <label>
          Website
          <input value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-surface-foreground/60">
          By submitting, you agree to be contacted about this request.
        </div>
        <button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send"}
        </button>
      </div>

      {status.type !== "idle" ? (
        <div
          className={
            status.type === "success"
              ? "rounded-2xl border border-surface-border bg-muted p-4 text-sm text-surface-foreground"
              : "rounded-2xl border border-surface-border bg-muted p-4 text-sm text-red-200"
          }
        >
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
