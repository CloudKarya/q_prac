import { NextResponse } from "next/server";
import { headers } from "next/headers";

type ContactSubmission = {
  fullName: string;
  email: string;
  company?: string;
  title?: string;
  interest?: string;
  timeline?: string;
  message: string;
  website?: string;
  startedAtMs?: number;
};

function asTrimmedString(value: unknown, maxLen: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.length > maxLen ? trimmed.slice(0, maxLen) : trimmed;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const submission = body as Partial<ContactSubmission>;

  // Honeypot: accept silently.
  if (asTrimmedString(submission.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const fullName = asTrimmedString(submission.fullName, 120);
  const email = asTrimmedString(submission.email, 254);
  const company = asTrimmedString(submission.company, 200);
  const title = asTrimmedString(submission.title, 200);
  const interest = asTrimmedString(submission.interest, 40);
  const timeline = asTrimmedString(submission.timeline, 120);
  const message = asTrimmedString(submission.message, 4000);

  if (!fullName) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ ok: false, error: "Message is required." }, { status: 400 });
  }

  const startedAtMs =
    typeof submission.startedAtMs === "number" && Number.isFinite(submission.startedAtMs)
      ? submission.startedAtMs
      : undefined;

  if (startedAtMs) {
    const elapsedMs = Date.now() - startedAtMs;
    if (elapsedMs >= 0 && elapsedMs < 1200) {
      return NextResponse.json(
        { ok: false, error: "Please try again." },
        { status: 429 },
      );
    }
  }

  const hdrs = await headers();
  const userAgent = hdrs.get("user-agent") ?? undefined;
  const referer = hdrs.get("referer") ?? undefined;
  const forwardedFor = hdrs.get("x-forwarded-for") ?? undefined;

  const webhookUrl = process.env.CONTACT_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.CONTACT_SHEETS_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Contact form is not configured yet. Set CONTACT_SHEETS_WEBHOOK_URL and CONTACT_SHEETS_SECRET.",
      },
      { status: 501 },
    );
  }

  const payload = {
    secret: webhookSecret,
    submittedAt: new Date().toISOString(),
    fullName,
    email,
    company,
    title,
    interest,
    timeline,
    message,
    meta: {
      userAgent,
      referer,
      forwardedFor,
    },
  };

  let webhookRes: Response;
  try {
    webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to reach the submission backend." },
      { status: 502 },
    );
  }

  if (!webhookRes.ok) {
    const text = await webhookRes.text().catch(() => "");
    return NextResponse.json(
      {
        ok: false,
        error: "Submission backend returned an error.",
        detail: text ? text.slice(0, 400) : undefined,
      },
      { status: 502 },
    );
  }

  // Apps Script commonly responds with 200 even when the payload is rejected.
  // Treat `{ ok: false }` as an error so we don't show a false success.
  const webhookText = await webhookRes.text().catch(() => "");
  if (webhookText) {
    try {
      const parsed: unknown = JSON.parse(webhookText);
      if (
        parsed &&
        typeof parsed === "object" &&
        "ok" in parsed &&
        (parsed as { ok?: unknown }).ok === false
      ) {
        const err =
          "error" in parsed && typeof (parsed as { error?: unknown }).error === "string"
            ? (parsed as { error: string }).error
            : "Submission backend rejected the request.";
        return NextResponse.json(
          {
            ok: false,
            error: err,
          },
          { status: 502 },
        );
      }
    } catch {
      // Non-JSON response is ok; assume success if HTTP was ok.
    }
  }

  return NextResponse.json({ ok: true });
}
