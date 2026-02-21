import Link from "next/link";
import { getAdminFirestore } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

type SearchParams = Record<string, string | string[] | undefined>;

type AuthActivityRow = {
  id: string;
  createdAtIso?: string;
  provider?: string;
  email?: string;
  name?: string;
  isNewUser?: boolean;
};

async function getRecentAuthActivity(limitCount = 50): Promise<AuthActivityRow[]> {
  const db = getAdminFirestore();

  const snap = await db
    .collection("authActivity")
    .orderBy("createdAt", "desc")
    .limit(limitCount)
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data() as Record<string, unknown>;

    const createdAt = data.createdAt as { toDate?: () => Date } | undefined;
    const createdAtIso = createdAt?.toDate ? createdAt.toDate().toISOString() : undefined;

    return {
      id: doc.id,
      createdAtIso,
      provider: typeof data.provider === "string" ? data.provider : undefined,
      email: typeof data.email === "string" ? data.email : undefined,
      name: typeof data.name === "string" ? data.name : undefined,
      isNewUser: typeof data.isNewUser === "boolean" ? data.isNewUser : undefined,
    };
  });
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const report = typeof resolved.report === "string" ? resolved.report : "logins";

  const reportLinkClass = (active: boolean) =>
    [
      "block rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
      active
        ? "bg-accent text-accent-foreground"
        : "text-foreground/80 hover:bg-muted/50 hover:text-foreground",
    ].join(" ");

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Admin
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Reports</h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground">
          Internal reports for sales funnel and hiring workflows.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-border bg-card p-4">
          <div className="mb-3 text-sm font-semibold text-foreground">Report list</div>
          <nav className="space-y-1">
            <Link
              href="/admin?report=logins"
              className={reportLinkClass(report === "logins")}
            >
              User login reports
            </Link>
          </nav>
        </aside>

        <section className="rounded-2xl border border-border bg-card p-6">
          {report === "logins" ? <UserLoginReport /> : <EmptyReport />}
        </section>
      </div>
    </div>
  );
}

async function UserLoginReport() {
  let rows: AuthActivityRow[] = [];
  let errorMessage: string | null = null;

  try {
    rows = await getRecentAuthActivity(50);
  } catch (error) {
    errorMessage = (error as Error)?.message ?? String(error);
  }

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">User login reports</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Last 50 sign-ins captured by NextAuth events.
          </p>
        </div>
      </div>

      {errorMessage ? (
        <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4 text-sm text-foreground">
          <div className="font-semibold">Could not load authActivity</div>
          <div className="mt-1 text-muted-foreground">{errorMessage}</div>
        </div>
      ) : rows.length === 0 ? (
        <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
          No activity yet. Sign out and sign back in to generate an entry.
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Time (UTC)</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">New?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-muted/20">
                  <td className="px-4 py-3 font-mono text-xs text-foreground/90">
                    {row.createdAtIso ?? "-"}
                  </td>
                  <td className="px-4 py-3 text-foreground/90">{row.email ?? "-"}</td>
                  <td className="px-4 py-3 text-foreground/90">{row.name ?? "-"}</td>
                  <td className="px-4 py-3 text-foreground/90">{row.provider ?? "-"}</td>
                  <td className="px-4 py-3 text-foreground/90">
                    {typeof row.isNewUser === "boolean" ? (row.isNewUser ? "yes" : "no") : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function EmptyReport() {
  return (
    <div className="text-sm text-muted-foreground">
      Select a report from the left.
    </div>
  );
}
