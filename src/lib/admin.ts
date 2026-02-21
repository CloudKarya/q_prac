export function getAdminEmails(): string[] {
  // Keep a safe default for initial bootstrap.
  const raw = process.env.ADMIN_EMAILS ?? "venkat@cloudkarya.com";
  return raw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return getAdminEmails().includes(normalized);
}
