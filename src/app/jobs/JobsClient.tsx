"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Job } from "@/content/jobs/jobTypes";
import { mailtoForJob } from "@/content/jobs/jobs";

type Props = {
  jobs: Job[];
};

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-sm font-semibold text-surface-foreground/75">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-xl border border-surface-border bg-surface px-4 text-sm text-surface-foreground outline-none ring-0 focus:border-background"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-surface text-surface-foreground">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function JobsClient({ jobs }: Props) {
  const [track, setTrack] = useState<string>("All");
  const [location, setLocation] = useState<string>("All");
  const [employmentType, setEmploymentType] = useState<string>("All");
  const [focus, setFocus] = useState<string>("All");

  const [selectedSlug, setSelectedSlug] = useState<string | null>(() => jobs[0]?.slug ?? null);
  const [activeTab, setActiveTab] = useState<"overview" | "application">("overview");

  const trackOrder = useMemo(
    () => [
      "Internships & Early Career",
      "Practice & Delivery",
      "Engineering",
      "Product, Learning & Thought Leadership",
      "Sales & Revenue",
      "Operations",
    ],
    []
  );

  const trackOptions = useMemo(() => {
    const tracks = Array.from(new Set(jobs.map((j) => j.track))).sort((a, b) => {
      const ia = trackOrder.indexOf(a);
      const ib = trackOrder.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      return a.localeCompare(b);
    });
    return ["All", ...tracks];
  }, [jobs, trackOrder]);

  const locationOptions = useMemo(() => {
    return ["All", "Bay Area", "Remote (US)", "Hybrid", "On-site"];
  }, []);

  const employmentTypeOptions = useMemo(() => {
    const types = Array.from(new Set(jobs.map((j) => j.employmentType))).sort((a, b) => a.localeCompare(b));
    return ["All", ...types];
  }, [jobs]);

  const focusOptions = useMemo(() => {
    const tags = Array.from(new Set(jobs.flatMap((j) => j.focusTags ?? []))).sort((a, b) => a.localeCompare(b));
    return ["All", ...tags];
  }, [jobs]);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (track !== "All" && j.track !== track) return false;
      if (employmentType !== "All" && j.employmentType !== employmentType) return false;
      if (focus !== "All" && !(j.focusTags ?? []).includes(focus as never)) return false;

      if (location !== "All") {
        if (location === "Bay Area") {
          if (!j.locations.some((x) => x.toLowerCase().includes("bay area"))) return false;
        } else if (location === "Remote (US)") {
          if (!j.locations.some((x) => x.toLowerCase().includes("remote"))) return false;
        } else if (location === "Hybrid") {
          if (j.locationType !== "Hybrid") return false;
        } else if (location === "On-site") {
          if (j.locationType !== "On-site") return false;
        }
      }

      return true;
    });
  }, [jobs, track, employmentType, location, focus]);

  const grouped = useMemo(() => {
    const byTrack = new Map<string, Job[]>();
    for (const job of filtered) {
      const list = byTrack.get(job.track) ?? [];
      list.push(job);
      byTrack.set(job.track, list);
    }

    const entries = Array.from(byTrack.entries());
    entries.sort(([a], [b]) => {
      const ia = trackOrder.indexOf(a);
      const ib = trackOrder.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      return a.localeCompare(b);
    });

    return entries.map(([trackName, list]) => ({
      track: trackName,
      jobs: [...list].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)),
    }));
  }, [filtered, trackOrder]);

  const selectedJob = useMemo(() => {
    if (!filtered.length) return null;
    if (selectedSlug) {
      const found = filtered.find((j) => j.slug === selectedSlug);
      if (found) return found;
    }
    return filtered[0];
  }, [filtered, selectedSlug]);

  useEffect(() => {
    if (!selectedJob) {
      if (selectedSlug !== null) setSelectedSlug(null);
      return;
    }

    if (selectedSlug !== selectedJob.slug) {
      setSelectedSlug(selectedJob.slug);
      setActiveTab("overview");
    }
  }, [selectedJob, selectedSlug]);

  useEffect(() => {
    setActiveTab("overview");
  }, [selectedJob?.slug]);

  function isSelected(job: Job) {
    return selectedJob?.slug === job.slug;
  }

  return (
    <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
      <header>
        <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Jobs</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">Careers at QuPracs</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
          Join us to build decision-first quantum practice—baseline-first, measurable, hype-resistant.
        </p>
      </header>

      <section className="mt-10">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold tracking-tight text-surface-foreground">
                  Open Positions ({filtered.length})
                </h2>
                {selectedJob ? (
                  <Link
                    href={`/jobs/${selectedJob.slug}`}
                    className="text-sm font-semibold text-background hover:underline"
                  >
                    Full page
                  </Link>
                ) : null}
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-surface-foreground/75">Filters</div>
                <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <Select label="Track" value={track} onChange={setTrack} options={trackOptions} />
                  <Select label="Location" value={location} onChange={setLocation} options={locationOptions} />
                  <Select
                    label="Employment Type"
                    value={employmentType}
                    onChange={setEmploymentType}
                    options={employmentTypeOptions}
                  />
                  <Select label="Focus" value={focus} onChange={setFocus} options={focusOptions} />
                </div>
              </div>

              <div className="mt-7">
                <div className="text-sm font-semibold text-surface-foreground/75">Tracks</div>

                {grouped.length === 0 ? (
                  <div className="mt-4 rounded-2xl border border-surface-border bg-surface p-5 text-sm text-surface-foreground/70">
                    No roles match those filters.
                  </div>
                ) : (
                  <div className="mt-4 space-y-6">
                    {grouped.map(({ track: trackName, jobs: trackJobs }) => (
                      <div key={trackName}>
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-sm font-semibold tracking-tight text-surface-foreground">{trackName}</h3>
                          <div className="text-xs font-semibold text-surface-foreground/60">{trackJobs.length}</div>
                        </div>

                        <div className="mt-3 space-y-2">
                          {trackJobs.map((job) => {
                            const selected = isSelected(job);
                            return (
                              <button
                                key={job.slug}
                                type="button"
                                onClick={() => {
                                  setSelectedSlug(job.slug);
                                  setActiveTab("overview");
                                }}
                                className={
                                  "w-full rounded-2xl border p-4 text-left shadow-sm transition " +
                                  (selected
                                    ? "border-background bg-surface"
                                    : "border-surface-border bg-surface hover:bg-surface/60")
                                }
                                aria-current={selected ? "true" : undefined}
                              >
                                <div className={"text-sm font-semibold " + (selected ? "text-background" : "text-background")}
                                >
                                  {job.title}
                                </div>
                                <div className="mt-2 text-xs text-surface-foreground/75">
                                  {job.team} • {job.employmentType} • {job.locationType}
                                </div>
                                <div className="mt-1 text-xs text-surface-foreground/65">
                                  {job.locations.join("; ")}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          <section className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
            {!selectedJob ? (
              <div className="text-sm text-surface-foreground/70">Select a role to view details.</div>
            ) : (
              <div>
                <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">
                      {selectedJob.track}
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-surface-foreground sm:text-3xl">
                      {selectedJob.title}
                    </h2>
                    <div className="mt-3 text-sm text-surface-foreground/75">
                      {selectedJob.team} • {selectedJob.locations.join("; ")} • {selectedJob.employmentType} •{" "}
                      {selectedJob.locationType}
                    </div>
                    {selectedJob.compensation ? (
                      <div className="mt-2 text-sm text-surface-foreground/65">{selectedJob.compensation}</div>
                    ) : null}
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-3">
                    <a
                      href={mailtoForJob(selectedJob)}
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                    >
                      Apply
                    </a>
                    <Link
                      href={`/jobs/${selectedJob.slug}`}
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-surface-border bg-surface px-5 text-sm font-semibold text-surface-foreground hover:bg-surface/60"
                    >
                      Open full page
                    </Link>
                  </div>
                </header>

                <div className="mt-6 flex items-center gap-10 border-b border-surface-border">
                  <button
                    type="button"
                    onClick={() => setActiveTab("overview")}
                    className={
                      "relative -mb-px py-4 text-sm font-semibold " +
                      (activeTab === "overview"
                        ? "text-surface-foreground"
                        : "text-surface-foreground/70 hover:text-surface-foreground")
                    }
                  >
                    Overview
                    {activeTab === "overview" ? (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-background" />
                    ) : null}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("application")}
                    className={
                      "relative -mb-px py-4 text-sm font-semibold " +
                      (activeTab === "application"
                        ? "text-surface-foreground"
                        : "text-surface-foreground/70 hover:text-surface-foreground")
                    }
                  >
                    Application
                    {activeTab === "application" ? (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-background" />
                    ) : null}
                  </button>
                </div>

                {activeTab === "overview" ? (
                  <div className="mt-6 space-y-8">
                    <div className="space-y-3 text-sm leading-relaxed text-surface-foreground/80">
                      {selectedJob.overview.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-base font-semibold">The Role</h3>
                      <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">{selectedJob.summary}</p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold">Responsibilities</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                        {selectedJob.responsibilities.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold">Requirements</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                        {selectedJob.requirements.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>

                    {selectedJob.niceToHave?.length ? (
                      <div>
                        <h3 className="text-base font-semibold">Nice to have</h3>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                          {selectedJob.niceToHave.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
                      <h3 className="text-base font-semibold">About QuPracs</h3>
                      <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
                        We work in domains where hype is loud and uncertainty is real. Our job is to help teams make
                        responsible decisions—and to prototype only when it teaches something measurable.
                      </p>
                    </div>
                  </div>
                ) : null}

                {activeTab === "application" ? (
                  <div className="mt-6 space-y-8">
                    <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm">
                      <h3 className="text-base font-semibold">How to apply</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                        {selectedJob.application.instructions.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>

                      <h4 className="mt-6 text-sm font-semibold text-surface-foreground">Please include</h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/75">
                        {selectedJob.application.askFor.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={mailtoForJob(selectedJob)}
                          className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
                        >
                          Apply via email
                        </a>
                        <Link
                          href="/learning"
                          className="inline-flex h-11 items-center justify-center rounded-xl border border-surface-border bg-surface px-5 text-sm font-semibold text-surface-foreground hover:bg-surface/60"
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
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}
