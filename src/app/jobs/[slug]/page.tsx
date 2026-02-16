import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllJobs, getJobBySlug, mailtoForJob } from "@/content/jobs/jobs";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ tab?: string }>;
};

function isActiveTab(tab: string | undefined, key: "overview" | "application"): boolean {
  if (!tab) return key === "overview";
  return tab === key;
}

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

export default async function JobDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : undefined;

  const job = getJobBySlug(slug);
  if (!job) notFound();

  const tab = sp?.tab;
  const overviewActive = isActiveTab(tab, "overview");
  const applicationActive = isActiveTab(tab, "application");

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

        <header className="mt-6">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{job.title}</h1>
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

            <div className="pt-2">
              <a
                href={mailtoForJob(job)}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Apply
              </a>
              <div className="mt-3 text-xs text-surface-foreground/60">
                Prefer a quick path? Email works—no portal required.
              </div>
            </div>
          </aside>

          <section>
            <div className="flex items-center gap-10 border-b border-surface-border">
              <Link
                href={{ pathname: `/jobs/${job.slug}`, query: { tab: "overview" } }}
                className={
                  "relative -mb-px py-4 text-sm font-semibold " +
                  (overviewActive
                    ? "text-surface-foreground"
                    : "text-surface-foreground/70 hover:text-surface-foreground")
                }
              >
                Overview
                {overviewActive ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-background" /> : null}
              </Link>
              <Link
                href={{ pathname: `/jobs/${job.slug}`, query: { tab: "application" } }}
                className={
                  "relative -mb-px py-4 text-sm font-semibold " +
                  (applicationActive
                    ? "text-surface-foreground"
                    : "text-surface-foreground/70 hover:text-surface-foreground")
                }
              >
                Application
                {applicationActive ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-background" /> : null}
              </Link>
            </div>

            {overviewActive ? (
              <div className="mt-6 space-y-8">
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
            ) : null}

            {applicationActive ? (
              <div className="mt-6 space-y-8">
                <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
                  <h2 className="text-base font-semibold">How to apply</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                    {job.application.instructions.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm font-semibold text-surface-foreground">Please include</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                    {job.application.askFor.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={mailtoForJob(job)}
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                    >
                      Apply via email
                    </a>
                    <Link
                      href="/learning"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                    >
                      Prepare via Learning
                    </Link>
                  </div>

                  <div className="mt-4 text-xs text-surface-foreground/60">
                    We aim for a fair process: baseline-first tasks, clear rubrics, and honest feedback loops.
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
