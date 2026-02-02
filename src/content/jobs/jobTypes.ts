export type EmploymentType = "Full time" | "Contract" | "Internship" | "Part time";
export type LocationType = "Remote" | "Hybrid" | "On-site";

export type JobTrack =
  | "Internships & Early Career"
  | "Practice & Delivery"
  | "Engineering"
  | "Product, Learning & Thought Leadership"
  | "Sales & Revenue"
  | "Operations";

export type Job = {
  order: number;
  slug: string;
  title: string;
  track: JobTrack;
  team:
    | "Practice"
    | "Practice Operations"
    | "Engineering"
    | "Product & Content"
    | "Sales"
    | "Sales Ops"
    | "Operations";
  locations: string[];
  employmentType: EmploymentType;
  locationType: LocationType;
  focusTags?: Array<"Quantum Readiness" | "Prototyping" | "Platform" | "Content" | "Evaluation">;
  compensation?: string;
  summary: string;
  overview: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  application: {
    emailTo: string;
    subjectPrefix?: string;
    instructions: string[];
    askFor: string[];
  };
};
