import type { Metadata } from "next";
import Link from "next/link";

type Role = {
  id: string;
  title: string;
  location: string;
  type: string;
  level: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  whatGoodLooksLike?: string[];
  stage2Focus?: string[];
};

const roles: Role[] = [
  {
    id: "implementation-engineer",
    title: "Implementation Engineer",
    location: "Bay Area (preferred) / Remote (US-friendly hours)",
    type: "Full-time / Contract",
    level: "Mid–Senior",
    summary:
      "Build clean, baseline-first prototypes and implementation artifacts for enterprise clients. You ship small, disciplined experiments that teach something real—and you document limits without drama.",
    responsibilities: [
      "Translate ambiguous problem statements into a tight scope, baseline, and measurable experiment plan.",
      "Build prototypes, demos, and technical proof points (often hybrid: classical + quantum-inspired / quantum tooling).",
      "Implement clean interfaces, readable code, and minimal-but-sufficient validation (tests, metrics, reproducibility).",
      "Write short technical notes that explain assumptions, tradeoffs, and what the results do/do not imply.",
      "Collaborate with PM/CRM to keep delivery honest: no overclaims, no magic timelines, no vendor theater.",
    ],
    requirements: [
      "Strong engineering fundamentals (data structures, systems thinking, debugging discipline).",
      "Proficiency in at least one: TypeScript/Node, Python, or modern backend stack (FastAPI, etc.).",
      "Comfort working in ambiguity: you can propose a plan, pick a baseline, and iterate quickly.",
      "Ability to explain decisions clearly (why this approach, what risks, what you’d do next).",
      "Bias for restraint: simple solutions first, complexity only when justified.",
    ],
    niceToHave: [
      "Experience with experimentation workflows (benchmarks, A/B thinking, measurement design).",
      "Exposure to optimization, ML, simulation, or scientific computing.",
      "Familiarity with quantum tooling (Qiskit/Cirq/etc.) OR quantum-inspired methods (heuristics, tensor networks, etc.).",
      "Experience delivering technical work with enterprise stakeholders.",
    ],
    whatGoodLooksLike: [
      "You start with a baseline and success metric before you touch novelty.",
      "Your prototype can be reproduced by someone else in a clean repo.",
      "You can say “not yet” with evidence and a constructive next step.",
    ],
    stage2Focus: [
      "Build a small baseline-first prototype + short write-up (limits, metrics, next experiment).",
      "OR refactor messy code + add minimal tests + clear README assumptions.",
    ],
  },
  {
    id: "project-manager",
    title: "Project Manager",
    location: "Bay Area (preferred) / Remote (US-friendly hours)",
    type: "Full-time / Contract",
    level: "Mid–Senior",
    summary:
      "Turn uncertain, hype-prone requests into structured, measurable engagements. You protect trust by surfacing risks early and keeping scope aligned with what can actually be learned in weeks—not promised in slides.",
    responsibilities: [
      "Convert inbound requests into clear scope: objectives, constraints, deliverables, success metrics.",
      "Build 4–6 week engagement plans with milestones, dependencies, and stakeholder cadence.",
      "Own the risk register: identify failure modes early and keep mitigation actions active.",
      "Run tight weekly execution: status, blockers, decisions, and expectation resets.",
      "Partner with engineering and CRM to keep outputs decision-useful and ethically framed.",
    ],
    requirements: [
      "Strong planning discipline: can produce a credible workplan from a vague request.",
      "Comfort with technical environments (you don’t need to code, but you must reason about constraints).",
      "Excellent written communication: scopes, meeting notes, risk logs, and decision memos.",
      "Ability to manage stakeholders and say uncomfortable truths early, calmly.",
      "Bias for clarity over busyness: fewer artifacts, higher signal.",
    ],
    niceToHave: [
      "Experience in consulting or enterprise delivery (especially technical/analytics products).",
      "Familiarity with discovery-to-POC motions, procurement realities, and governance.",
      "Experience managing cross-functional teams across time zones.",
    ],
    whatGoodLooksLike: [
      "Your plans reduce uncertainty each week (not just “progress”).",
      "You prevent scope creep by turning it into explicit tradeoffs and decisions.",
      "Clients feel safer after talking to you—even when the answer is “not yet.”",
    ],
    stage2Focus: [
      "Write a scope outline + 6-week plan + risk register + dependency list for a sample client request.",
      "Identify where expectations must be reset and how you’d do it.",
    ],
  },
  {
    id: "customer-relations-manager",
    title: "Customer Relations Manager",
    location: "San Francisco Bay Area (preferred)",
    type: "Full-time",
    level: "Mid",
    summary:
      "Own the trust layer. You translate technical reality into executive-safe language and guide clients away from hype while preserving momentum. You’re persuasive without overselling.",
    responsibilities: [
      "Lead discovery conversations and capture goals, constraints, and decision criteria.",
      "Draft crisp follow-ups: what we heard, what we propose, what we need, what we will not promise.",
      "Handle overhyped requests with calm authority and constructive alternatives.",
      "Coordinate with PM/engineering so client expectations match delivery reality.",
      "Maintain high-quality pipeline notes and relationship context (not just “CRM fields”).",
    ],
    requirements: [
      "Exceptional writing: concise, structured, executive-friendly communication.",
      "Ability to explain technical constraints without sounding defensive or vague.",
      "Strong judgment: knows when to slow down a deal to protect trust and outcomes.",
      "Comfort interacting with VP/GM-level stakeholders and navigating ambiguity.",
      "Alignment with restraint-first positioning (credibility > theatrics).",
    ],
    niceToHave: [
      "Experience selling or managing delivery for technical services / consulting.",
      "Familiarity with enterprise buying motions, security reviews, and procurement.",
      "Comfort learning technical concepts quickly and asking high-quality questions.",
    ],
    whatGoodLooksLike: [
      "Clients feel you’re the adult in the room—no hype, no fear, just clarity.",
      "You can reframe “we need a quantum demo” into “we need a decision brief + baseline + learning plan.”",
      "You prevent trust debt by never implying certainty where none exists.",
    ],
    stage2Focus: [
      "Draft an email + call script responding to a hyped executive request.",
      "Rewrite a technical explanation into an exec-facing decision narrative.",
    ],
  },
  {
    id: "interns",
    title: "Interns (Research / Content / Prototyping)",
    location: "Remote (US-friendly hours) / Bay Area (bonus)",
    type: "Internship (8–12 weeks) / Part-time (semester)",
    level: "Intern / Early Career",
    summary:
      "Learn fast, think clearly, and contribute small, real outputs. We value humility, learning velocity, and your ability to ask the right questions more than prior quantum exposure.",
    responsibilities: [
      "Read Learning content and produce summaries, diagrams, or short internal notes.",
      "Support prototypes with data prep, evaluation, documentation, or test harnesses.",
      "Help improve content quality: clarity edits, misconception lists, examples, visuals.",
      "Turn ambiguous topics into small deliverables: checklists, concept maps, FAQ drafts.",
    ],
    requirements: [
      "Strong writing and reasoning: you can summarize clearly and state assumptions.",
      "Curiosity + discipline: you can follow a learning path without hand-holding.",
      "Comfort receiving direct feedback and iterating quickly.",
      "Basic technical comfort (spreadsheets, scripting, or structured thinking).",
    ],
    niceToHave: [
      "Some programming experience (Python/TS) or coursework in CS/math/engineering.",
      "Interest in emerging tech, strategy, and “how to decide” under uncertainty.",
    ],
    whatGoodLooksLike: [
      "You ask unusually good questions after reading something once.",
      "You can explain concepts without jargon and without losing truth.",
      "You ship small artifacts reliably (notes, diagrams, mini-summaries, test scripts).",
    ],
    stage2Focus: [
      "Summarize one Learning page in 12 bullets, list misconceptions, propose a mini-experiment.",
      "Create one decision-useful artifact (checklist/framework draft) from a prompt.",
    ],
  },
];

function mailtoForRole(roleTitle: string): string {
  const subject = `Application - QuPracs - ${roleTitle}`;
  const body =
    "Hi QuPracs,%0A%0A" +
    `I'd like to apply for ${encodeURIComponent(roleTitle)}.%0A%0A` +
    "1) LinkedIn or resume link:%0A" +
    "2) Why QuPracs:%0A" +
    "3) Timezone / location:%0A" +
    "4) Optional: GitHub or writing samples:%0A%0A" +
    "Thanks,";

  return `mailto:careers@qupracs.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}

export const metadata: Metadata = {
  title: "Jobs",
  description: "Open roles at QuPracs: engineering, project management, customer relations, and internships.",
  alternates: { canonical: "/jobs" },
};

export default function JobsPage() {
  return (
    <main id="top" className="mx-auto w-full max-w-6xl px-6 py-12">
      <header className="rounded-3xl border border-surface-border bg-surface p-8 text-surface-foreground shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Jobs at QuPracs</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-surface-foreground/75">
          We work in domains where hype is loud and uncertainty is real. Our job is to help teams make
          responsible decisions—and to prototype only when it teaches something measurable. We don’t hire
          for trivia. We hire for judgment, clarity of thought, and disciplined execution.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/learning"
            className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Explore Learning
          </Link>
          <Link
            href="/blogs"
            className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
          >
            Read Blogs
          </Link>
        </div>
      </header>

      <section className="mt-8 rounded-3xl border border-surface-border bg-surface p-8 text-surface-foreground shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight">How we hire</h2>
        <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
          Our process is designed to be fair, rigorous, and transparent. Everything you need to prepare is
          available on this site.
        </p>

        <ol className="mt-5 grid gap-3 text-sm text-surface-foreground/80">
          <li>
            <span className="font-semibold">Stage 0:</span> Self-preparation — read Learning and Blogs to
            align on how we think: <Link href="/learning" className="font-semibold hover:underline">Learning</Link>,{" "}
            <Link href="/blogs" className="font-semibold hover:underline">Blogs</Link>, and{" "}
            <Link href="/tutorials" className="font-semibold hover:underline">Tutorials</Link>.
          </li>
          <li>
            <span className="font-semibold">Stage 1:</span> Written test — same test for all roles;
            evaluated by a role-appropriate rubric.
          </li>
          <li>
            <span className="font-semibold">Stage 2:</span> Practical test — role-specific execution task
            (engineering, PM planning, or client comms).
          </li>
          <li>
            <span className="font-semibold">Stage 3:</span> Interview — calibration, not discovery: how you
            think aloud, handle challenges, and communicate limits.
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Open roles</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85">
          Bay Area enterprise focus. Remote is possible for the right candidate, but we prefer overlapping
          hours with Pacific Time.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <a
              key={role.id}
              href={`#${role.id}`}
              className="group rounded-3xl border border-surface-border bg-surface p-6 text-surface-foreground shadow-sm hover:bg-surface/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{role.title}</h3>
                  <p className="mt-1 text-sm text-surface-foreground/70">
                    {role.location} • {role.type} • {role.level}
                  </p>
                </div>
                <span className="text-sm font-semibold text-surface-foreground/60 group-hover:text-surface-foreground">
                  View →
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">{role.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-8">
        {roles.map((role) => (
          <article
            key={role.id}
            id={role.id}
            className="scroll-mt-24 rounded-3xl border border-surface-border bg-surface p-8 text-surface-foreground shadow-sm"
          >
            <header>
              <h2 className="text-2xl font-semibold tracking-tight">{role.title}</h2>
              <p className="mt-2 text-sm text-surface-foreground/70">
                {role.location} • {role.type} • {role.level}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-surface-foreground/80">{role.summary}</p>
            </header>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">What you’ll do</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
                  {role.responsibilities.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight">What we expect</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
                  {role.requirements.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>

                {role.niceToHave?.length ? (
                  <>
                    <h4 className="mt-6 text-base font-semibold tracking-tight">Nice to have</h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
                      {role.niceToHave.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>

            {role.whatGoodLooksLike?.length ? (
              <div className="mt-8 rounded-2xl border border-surface-border bg-surface/60 p-5">
                <h3 className="text-base font-semibold tracking-tight">What good looks like</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
                  {role.whatGoodLooksLike.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {role.stage2Focus?.length ? (
              <div className="mt-8">
                <h3 className="text-base font-semibold tracking-tight">Hiring process emphasis</h3>
                <p className="mt-2 text-sm text-surface-foreground/70">
                  Same Stage 1 written test for everyone. Stage 2 varies by role:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
                  {role.stage2Focus.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/learning"
                className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Prepare via Learning
              </Link>
              <a
                href={mailtoForRole(role.title)}
                className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Apply (email)
              </a>
              <a
                href="#top"
                className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90"
              >
                Back to top
              </a>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-10 rounded-3xl border border-surface-border bg-surface p-8 text-surface-foreground shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight">A note on fit</h2>
        <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
          If you’re excited by careful thinking, honest constraints, and work that improves decisions—not
          just demos—you’ll likely enjoy this. If your default mode is overpromising to “win,” this won’t
          be a good match.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-surface-foreground/75">
          We aim to build a team that reflects strong judgment across diverse backgrounds. If you’re unsure
          whether you qualify, apply anyway and show us how you think.
        </p>
      </footer>
    </main>
  );
}
