const JOIN_ID_STORAGE_KEY = "qprac_join_id";
const JOIN_ID_COOKIE_NAME = "qprac_join_id";

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  if (!match) return undefined;
  const value = match.slice(name.length + 1);
  return value ? decodeURIComponent(value) : undefined;
}

function setCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;

  const encoded = encodeURIComponent(value);
  document.cookie = `${name}=${encoded}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
}

function generateJoinId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  // Fallback UUID-ish (not cryptographically perfect, but should be rare in practice)
  return `j_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

export function getOrCreateJoinId(): string {
  if (typeof window === "undefined") return "";

  const fromStorage = window.localStorage.getItem(JOIN_ID_STORAGE_KEY);
  const fromCookie = getCookie(JOIN_ID_COOKIE_NAME);

  const existing = fromStorage || fromCookie;
  const joinId = existing && existing.length > 0 ? existing : generateJoinId();

  // 2 years
  const maxAgeSeconds = 60 * 60 * 24 * 365 * 2;

  try {
    window.localStorage.setItem(JOIN_ID_STORAGE_KEY, joinId);
  } catch {
    // ignore storage failures
  }

  try {
    setCookie(JOIN_ID_COOKIE_NAME, joinId, maxAgeSeconds);
  } catch {
    // ignore cookie failures
  }

  return joinId;
}
