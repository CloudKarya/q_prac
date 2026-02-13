import { NextResponse } from "next/server";

const DEFAULT_BASE_URL = "https://qprac-runner-1076575453845.us-central1.run.app";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function allowedHostsFromEnv(): string[] {
  const raw = process.env.QPRAC_RUNNER_ALLOWED_HOSTS;
  if (!raw) return [];
  return raw
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function validateBaseUrl(input: string): { ok: true; baseUrl: string } | { ok: false; message: string } {
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return { ok: false, message: "Invalid URL" };
  }

  const isLocalhost = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  const allowedHosts = new Set<string>([
    "qprac-runner-1076575453845.us-central1.run.app",
    ...allowedHostsFromEnv(),
  ]);

  if (url.protocol === "http:") {
    if (!isLocalhost) {
      return { ok: false, message: "Only localhost may use http" };
    }
  } else if (url.protocol !== "https:") {
    return { ok: false, message: "URL must start with https:// (or http:// for localhost)" };
  }

  if (!isLocalhost && !allowedHosts.has(url.hostname)) {
    return {
      ok: false,
      message:
        "Host not allowed. Set QPRAC_RUNNER_ALLOWED_HOSTS to allow additional hosts.",
    };
  }

  // Normalize to origin (strip any path/query fragments)
  return { ok: true, baseUrl: url.origin };
}

export async function POST(req: Request) {
  const fallbackBaseUrl = process.env.QPRAC_RUNNER_BASE_URL ?? DEFAULT_BASE_URL;

  let requestedBaseUrl: string | undefined;
  try {
    const body = (await req.json()) as unknown;
    if (body && typeof body === "object" && typeof (body as { baseUrl?: unknown }).baseUrl === "string") {
      requestedBaseUrl = (body as { baseUrl: string }).baseUrl;
    }
  } catch {
    // body is optional
  }

  const candidate = (requestedBaseUrl ?? fallbackBaseUrl).trim();
  const validated = validateBaseUrl(candidate);
  if (!validated.ok) {
    return NextResponse.json(
      {
        error: "INVALID_BASE_URL",
        message: validated.message,
      },
      { status: 400 }
    );
  }

  const baseUrl = validated.baseUrl;

  let upstream: Response;
  try {
    upstream = await fetch(`${baseUrl}/session`, {
      method: "POST",
      // Prevent any caching of session creation.
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return NextResponse.json(
      {
        error: "UPSTREAM_FETCH_FAILED",
        message: e instanceof Error ? e.message : "Failed to reach qprac-runner",
      },
      { status: 502 }
    );
  }

  const text = await upstream.text();

  if (!upstream.ok) {
    return NextResponse.json(
      {
        error: "UPSTREAM_ERROR",
        status: upstream.status,
        body: text,
      },
      { status: 502 }
    );
  }

  try {
    const json = JSON.parse(text) as unknown;
    return NextResponse.json(json, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        error: "UPSTREAM_BAD_JSON",
        body: text,
      },
      { status: 502 }
    );
  }
}
