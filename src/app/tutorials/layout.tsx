import { authOptions } from "@/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin?callbackUrl=/tutorials");
  }

  return <>{children}</>;
}
