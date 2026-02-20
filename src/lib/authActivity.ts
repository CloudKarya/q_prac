import crypto from "crypto";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore } from "./firebaseAdmin";

export type AuthSignInActivity = {
  provider?: string;
  providerAccountId?: string;
  email?: string | null;
  name?: string | null;
  isNewUser?: boolean;
};

function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex");
}

export async function logSignInActivity(activity: AuthSignInActivity) {
  const email = activity.email?.trim().toLowerCase();
  const emailDomain = email?.includes("@") ? email.split("@")[1] : undefined;
  const emailHash = email ? sha256Hex(email) : undefined;

  const db = getAdminFirestore();

  // Firestore rejects `undefined` values. Only include fields that are defined.
  const doc: Record<string, unknown> = {
    eventType: "sign_in",
    createdAt: FieldValue.serverTimestamp(),
    env: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
  };

  if (activity.provider) doc.provider = activity.provider;
  if (activity.providerAccountId) doc.providerAccountId = activity.providerAccountId;
  if (email) doc.email = email;
  if (emailDomain) doc.emailDomain = emailDomain;
  if (emailHash) doc.emailHash = emailHash;
  if (activity.name) doc.name = activity.name;
  if (typeof activity.isNewUser === "boolean") doc.isNewUser = activity.isNewUser;

  await db.collection("authActivity").add(doc);
}
