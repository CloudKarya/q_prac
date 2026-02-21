import { getServerSession } from "next-auth";
import { redirect, notFound } from "next/navigation";
import { authOptions } from "@/authOptions";

export const runtime = "nodejs";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/signin?callbackUrl=%2Fadmin");
  }

  const isAdmin = Boolean((session.user as unknown as Record<string, unknown>).isAdmin);
  if (!isAdmin) {
    notFound();
  }

  return children;
}
