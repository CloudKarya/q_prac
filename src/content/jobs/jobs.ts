import type { Job } from "./jobTypes";
import { allJobs } from "./jobsData";

export function getAllJobs(): Job[] {
  return [...allJobs].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getJobBySlug(slug: string): Job | undefined {
  return allJobs.find((j) => j.slug === slug);
}

export function getJobTracks(jobs: Job[]): string[] {
  return Array.from(new Set(jobs.map((j) => j.track))).sort((a, b) => a.localeCompare(b));
}

export function getJobTeams(jobs: Job[]): string[] {
  return Array.from(new Set(jobs.map((j) => j.team))).sort((a, b) => a.localeCompare(b));
}

export function getJobLocations(jobs: Job[]): string[] {
  const locs = jobs.flatMap((j) => j.locations);
  return Array.from(new Set(locs)).sort((a, b) => a.localeCompare(b));
}

export function getJobEmploymentTypes(jobs: Job[]): string[] {
  return Array.from(new Set(jobs.map((j) => j.employmentType))).sort((a, b) => a.localeCompare(b));
}

export function getJobFocusTags(jobs: Job[]): string[] {
  const tags = jobs.flatMap((j) => j.focusTags ?? []);
  return Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b));
}

export function mailtoForJob(job: Job): string {
  const subjectPrefix = job.application.subjectPrefix ?? "Application";
  const subject = `${subjectPrefix} - QuPracs - ${job.title}`;

  const bodyLines = [
    "Hi QuPracs,",
    "",
    `I’d like to apply for ${job.title}.`,
    "",
    ...job.application.askFor.map((x) => `${x}:`),
    "",
    "Thanks,",
  ];

  const body = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:${job.application.emailTo}?subject=${encodeURIComponent(subject)}&body=${body}`;
}
