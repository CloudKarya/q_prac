import type { Metadata } from "next";
import JobsClient from "./JobsClient";
import { getAllJobs } from "@/content/jobs/jobs";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Open roles at QuPracs: engineering, project management, customer relations, and internships.",
  alternates: { canonical: "/jobs" },
};

export default function JobsPage() {
  const jobs = getAllJobs();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <JobsClient jobs={jobs} />
    </main>
  );
}
