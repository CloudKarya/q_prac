import { NextResponse } from "next/server";
import crypto from "crypto";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

function isAuthorized(request: Request): boolean {
  const expected = process.env.FIRESTORE_HEALTHCHECK_SECRET;
  if (!expected) return false;

  const url = new URL(request.url);
  const fromQuery = url.searchParams.get("secret") ?? undefined;
  const fromHeader = request.headers.get("x-health-secret") ?? undefined;

  return (fromHeader || fromQuery) === expected;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Unauthorized",
      },
      { status: 401 },
    );
  }

  const startedAt = Date.now();
  const nonce = crypto.randomUUID();
  const docId = `${Date.now()}_${nonce}`;

  try {
    const db = getAdminFirestore();
    const ref = db.collection("healthchecks").doc(docId);

    await ref.set({
      type: "firestore_roundtrip",
      nonce,
      env: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
      createdAt: FieldValue.serverTimestamp(),
    });

    const snap = await ref.get();

    return NextResponse.json({
      ok: true,
      docId,
      exists: snap.exists,
      elapsedMs: Date.now() - startedAt,
    });
  } catch (error) {
    const message = (error as Error)?.message ?? String(error);

    if (
      message.includes("Firestore API is not available") ||
      message.includes("Datastore Mode")
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "firestore_datastore_mode",
          message:
            "This GCP project is using 'Firestore in Datastore Mode', which does not support the Cloud Firestore API. Create/use a different project with Firestore in Native mode, then update FIREBASE_PROJECT_ID/FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY.",
          elapsedMs: Date.now() - startedAt,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: message,
        elapsedMs: Date.now() - startedAt,
      },
      { status: 500 },
    );
  }
}
