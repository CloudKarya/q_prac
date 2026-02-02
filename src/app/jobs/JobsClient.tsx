"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Job } from "@/content/jobs/jobTypes";

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
        <h2 className="text-2xl font-semibold tracking-tight">Open Positions ({filtered.length})</h2>

        <div className="mt-6">
          <div className="text-sm font-semibold text-surface-foreground/75">Filters:</div>
          <div className="mt-3 grid gap-4 lg:grid-cols-4">
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

        <div className="mt-10 space-y-10">
          {grouped.length === 0 ? (
            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-surface-foreground/70">
              No roles match those filters.
            </div>
          ) : (
            grouped.map(({ track: trackName, jobs: trackJobs }) => (
              <div key={trackName}>
                <h3 className="text-lg font-semibold tracking-tight text-surface-foreground">{trackName}</h3>
                <div className="mt-4 space-y-4">
                  {trackJobs.map((job) => (
                    <Link
                      key={job.slug}
                      href={`/jobs/${job.slug}`}
                      className="block rounded-2xl border border-surface-border bg-surface p-6 shadow-sm transition hover:bg-surface/60"
                    >
                      <div className="text-base font-semibold text-background">{job.title}</div>
                      <div className="mt-2 text-sm text-surface-foreground/75">
                        {job.team} • {job.locations.join("; ")} • {job.employmentType} • {job.locationType}
                      </div>
                      {job.compensation ? (
                        <div className="mt-2 text-sm text-surface-foreground/65">{job.compensation}</div>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
