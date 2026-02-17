import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllJobs, getJobBySlug, mailtoForJob } from "@/content/jobs/jobs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllJobs().map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Job not found" };
  }

  return {
    title: `${job.title} | Jobs`,
    description: job.summary,
    alternates: { canonical: `/jobs/${job.slug}` },
  };
}

function SidebarItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-b border-surface-border pb-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">{label}</div>
      <div className="mt-2 text-sm text-surface-foreground/90">{value}</div>
    </div>
  );
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;

  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-background hover:underline"
        >
          <span aria-hidden>←</span>
          All Jobs
        </Link>

        <header className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{job.title}</h1>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={mailtoForJob(job)}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
            >
              Apply
            </a>
            <Link
              href="/hiring-process"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-surface-border bg-surface px-5 text-sm font-semibold text-surface-foreground shadow-sm hover:bg-background/5"
            >
              QuPracs Hiring Process
            </Link>
          </div>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-4 rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
            <SidebarItem label="Location" value={job.locations.join("; ")} />
            <SidebarItem label="Employment Type" value={job.employmentType} />
            <SidebarItem label="Location Type" value={job.locationType} />
            <SidebarItem label="Track" value={job.track} />
            <SidebarItem label="Team" value={job.team} />
            <SidebarItem label="Focus" value={(job.focusTags ?? []).join(" · ") || undefined} />
            <SidebarItem label="Compensation" value={job.compensation} />
          </aside>

          <section>
            <div className="space-y-8">
              {job.credibilityBullets ? (
                <div className="rounded-2xl border border-surface-border bg-background/5 p-6">
                  <h2 className="text-base font-semibold">Signal</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
                    <li>
                      <span className="font-semibold">Outcome in 90 days:</span> {job.credibilityBullets.outcome90Days}
                    </li>
                    <li>
                      <span className="font-semibold">Skills / background:</span> {job.credibilityBullets.skills}
                    </li>
                    <li>
                      <span className="font-semibold">Nice-to-have:</span> {job.credibilityBullets.niceToHave}
                    </li>
                  </ul>
                </div>
              ) : null}

              <div className="space-y-3 text-sm leading-relaxed text-surface-foreground/80">
                {job.overview.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div>
                <h2 className="text-base font-semibold">The Role</h2>
                <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">{job.summary}</p>
              </div>

              <div>
                <h2 className="text-base font-semibold">Responsibilities</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                  {job.responsibilities.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-base font-semibold">Requirements</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                  {job.requirements.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              {job.niceToHave?.length ? (
                <div>
                  <h2 className="text-base font-semibold">Nice to have</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                    {job.niceToHave.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
                <h2 className="text-base font-semibold">About QuPracs</h2>
                <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
                  We work in domains where hype is loud and uncertainty is real. Our job is to help teams make
                  responsible decisions—and to prototype only when it teaches something measurable.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
