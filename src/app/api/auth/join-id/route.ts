import { NextResponse } from "next/server";
import crypto from "crypto";
import { getServerSession } from "next-auth";
import { FieldValue } from "firebase-admin/firestore";

import { authOptions } from "@/authOptions";
import { getAdminFirestore } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex");
}

function isValidJoinId(value: unknown): value is string {
  if (typeof value !== "string") return false;
  if (value.length < 16 || value.length > 128) return false;
  return /^[a-zA-Z0-9_-]+$/.test(value) || /^[0-9a-fA-F-]{36}$/.test(value);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as
    | { joinId?: unknown; source?: unknown }
    | null;

  const joinId = body?.joinId;

  if (!isValidJoinId(joinId)) {
    return NextResponse.json({ error: "invalid_join_id" }, { status: 400 });
  }

  const email = session.user.email.trim().toLowerCase();
  const emailDomain = email.includes("@") ? email.split("@")[1] : undefined;
  const emailHash = sha256Hex(email);

  const db = getAdminFirestore();

  const docId = `${joinId}_${emailHash}`;
  const ref = db.collection("authJoinLinks").doc(docId);

  const existing = await ref.get();
  const firstSeenAt = existing.exists
    ? existing.get("firstSeenAt")
    : FieldValue.serverTimestamp();

  await ref.set(
    {
      joinId,
      emailHash,
      emailDomain,
      source: typeof body?.source === "string" ? body.source : "client",
      firstSeenAt,
      lastSeenAt: FieldValue.serverTimestamp(),
      env: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    },
    { merge: true }
  );

  return NextResponse.json({ ok: true });
}
