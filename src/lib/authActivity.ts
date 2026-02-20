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

  await db.collection("authActivity").add({
    eventType: "sign_in",
    provider: activity.provider,
    providerAccountId: activity.providerAccountId,
    email,
    emailDomain,
    emailHash,
    name: activity.name ?? undefined,
    isNewUser: activity.isNewUser ?? undefined,
    createdAt: FieldValue.serverTimestamp(),
    env: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
  });
}
