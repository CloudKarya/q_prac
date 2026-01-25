import type { BlogPost } from "@/content/blogPosts";

export const meta: Pick<BlogPost, "slug" | "title" | "description"> = {
  slug: "what-quantum-computing-can-do-today-and-what-it-absolutely-cannot",
  title: "What Quantum Computing Can Do Today (And What It Absolutely Cannot)",
  description:
    "A pragmatic boundary map for enterprise quantum: what’s feasible now (mostly simulators + hybrid workflows), what isn’t (broad production speedups), and how to build disciplined optionality.",
};

export default function Post() {
  return (
    <div className="space-y-6 text-[15px] leading-relaxed">
      <p>
        Quantum computing is stuck between two unhelpful stories. One says
        breakthroughs are imminent and transformation is inevitable. The other
        says it is decades away and not worth touching.
      </p>
      <p>
        For enterprise leaders, both narratives create the same problem:
        confusion that leads to either overcommitment or total disengagement.
      </p>
      <p>
        The more practical truth is this: quantum can do a small number of
        valuable things today—credibly—mostly in the form of disciplined
        experimentation and capability-building. At the same time, it cannot do
        many of the things it is most often marketed as doing, especially under
        real enterprise constraints: repeatability, governance, cost, latency,
        security, and integration.
      </p>
      <p>
        This post draws a boundary line—so you can act with discipline rather
        than drift.
      </p>

      <section aria-labelledby="tldr">
        <h2 id="tldr" className="text-xl font-semibold tracking-tight">
          TL;DR
        </h2>
        <ul className="mt-3 list-disc pl-5 text-surface-foreground/85">
          <li>
            Quantum can help today by enabling structured experimentation,
            building internal evaluation capability, and screening which problem
            structures might matter later—primarily using simulators and hybrid
            workflows.
          </li>
          <li>
            Quantum cannot deliver broad, production-grade speedups on
            enterprise workloads today, nor replace classical HPC/cloud
            computing.
          </li>
          <li>
            The right near-term posture is disciplined optionality: a use-case
            screen, bounded experiments, and governance that prevents hype-driven
            pilots.
          </li>
        </ul>
      </section>

      <section aria-labelledby="cando-meaning">
        <h2 id="cando-meaning" className="text-xl font-semibold tracking-tight">
          What “Can Do Today” Actually Means
        </h2>
        <p className="mt-3 text-surface-foreground/85">
          When someone says “quantum can do X today,” they often mean one of
          three different things:
        </p>
        <ol className="mt-3 list-decimal pl-5 text-surface-foreground/85">
          <li>A demo exists (someone ran a small instance once).</li>
          <li>A prototype exists (a proof-of-concept with assumptions).</li>
          <li>
            An operational capability exists (repeatable outcomes under realistic
            constraints).
          </li>
        </ol>
        <p className="mt-3 text-surface-foreground/85">
          Enterprises should reserve “can do today” for the third category. The
          first two still matter, but as learning artifacts, not evidence of
          production readiness.
        </p>
        <p className="mt-3 text-surface-foreground/85">
          In this post, “can do today” means:
        </p>
        <ul className="mt-3 list-disc pl-5 text-surface-foreground/85">
          <li>you can reproduce it using available tooling,</li>
          <li>you can iterate on it without fragile conditions,</li>
          <li>
            and it produces decision-grade insight (even if it does not produce
            production-grade advantage).
          </li>
        </ul>
        <p className="mt-3 text-surface-foreground/85">
          That definition is conservative by design. It also preserves
          credibility when quantum meets budgets and executive scrutiny.
        </p>
      </section>

      <section aria-labelledby="cando-today">
        <h2 id="cando-today" className="text-xl font-semibold tracking-tight">
          What Quantum Computing Can Do Today
        </h2>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          1) Build real internal capability quickly
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          Quantum has matured enough that motivated teams can become fluent in
          months—not years—using stable toolchains and high-quality educational
          content. The biggest gap in most organizations is not hardware access;
          it is lack of a shared, accurate mental model.
        </p>
        <p className="mt-2 text-surface-foreground/85">Teams can learn:</p>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>the primitives (circuits, gates, measurement, noise),</li>
          <li>
            what changes when you move from ideal simulation to real devices,
          </li>
          <li>
            how to interpret vendor claims without treating marketing as
            strategy.
          </li>
        </ul>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Enterprise value:</span> you reduce
          decision risk. You create internal stakeholders who can ask better
          questions, evaluate proposals, and resist “quantum theater.”
        </p>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          2) Run meaningful experiments—mostly on simulators
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          The practical center of gravity today is not hardware. It is
          simulation.
        </p>
        <p className="mt-2 text-surface-foreground/85">With simulators, teams can:</p>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>prototype circuits and workflows,</li>
          <li>
            test algorithm sensitivity and scaling behavior in controlled
            conditions,
          </li>
          <li>instrument results (what changed, why it changed, what broke),</li>
          <li>
            determine whether a candidate approach is worth the cost of hardware
            validation.
          </li>
        </ul>
        <p className="mt-2 text-surface-foreground/85">
          Simulators have three attributes enterprises depend on:
        </p>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>repeatability (results can be reproduced and compared),</li>
          <li>speed of iteration (you can explore variants quickly),</li>
          <li>explainability (you can instrument and debug).</li>
        </ul>
        <p className="mt-2 text-surface-foreground/85">
          Hardware still matters—but typically as a later validation step, not
          the foundation.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Enterprise value:</span> you can build a
          disciplined experimental workflow without depending on scarce device
          time or fragile conditions.
        </p>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          3) Explore hybrid quantum-classical workflows
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          The most common executive misconception is that quantum will “replace”
          classical computing. Near-term reality is hybrid: quantum appears as
          one component in a larger classical pipeline.
        </p>
        <p className="mt-2 text-surface-foreground/85">Enterprises can explore:</p>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>
            variational workflows where classical optimizers guide parameter
            updates,
          </li>
          <li>quantum subroutines embedded inside classical loops,</li>
          <li>quantum-inspired methods (sometimes valuable, often mislabeled).</li>
        </ul>
        <p className="mt-2 text-surface-foreground/85">
          Hybrid is not a compromise; it reflects the engineering reality that
          quantum—today—is a specialized tool, not a full-stack replacement.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Enterprise value:</span> exploration
          becomes compatible with existing data, ML, and engineering systems
          instead of becoming an isolated “quantum lab.”
        </p>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          4) Screen problem structures that might matter later
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          The near-term win is not “advantage.” It is screening: identifying
          whether a problem’s structure is even plausible for quantum relevance.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          Even when quantum does not outperform classical today, exploration can
          still answer high-value questions:
        </p>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>Does the problem map cleanly into the required formulation?</li>
          <li>Are constraints stable, expressible, and meaningful?</li>
          <li>Do you have the data pipeline to support experimentation?</li>
          <li>How strong are classical baselines already?</li>
        </ul>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Enterprise value:</span> quantum
          exploration forces better problem definition. That alone often improves
          outcomes—even with classical methods.
        </p>
      </section>

      <section aria-labelledby="cannot-today">
        <h2 id="cannot-today" className="text-xl font-semibold tracking-tight">
          What Quantum Computing Absolutely Cannot Do Today
        </h2>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          1) Deliver broad, general-purpose enterprise speedups
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          There is no “quantum upgrade” for your analytics stack. Most enterprise
          workloads are dominated by constraints quantum does not currently solve
          at scale: data movement, latency, robustness, observability, and
          integration.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          Even for theoretically interesting problems, practical limitations
          dominate:
        </p>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>noise and error rates,</li>
          <li>limited scale and connectivity,</li>
          <li>
            overhead of mapping real-world problems into quantum representations.
          </li>
        </ul>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Bottom line:</span> no credible strategy
          should assume broad enterprise speedups today.
        </p>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          2) Replace classical HPC or cloud-scale compute
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          Production systems win because they are stable, scalable, cost-optimized,
          observable, and governable. Quantum systems today are not those things
          at enterprise scale—and that is expected for an emerging technology.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          A common failure mode is extrapolating from “toy instance solved” to
          “straight line to replacement.” Engineering maturity does not evolve
          that way.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Bottom line:</span> quantum is an
          experimental capability layer today, not a production substrate.
        </p>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          3) Provide reliable, decision-grade results on most real-world instances
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          Enterprises do not care about a single successful run. They care about
          repeatability, confidence intervals, failure modes, and performance under
          variation.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          Quantum devices today remain sensitive to noise and drift. Even if a
          result looks promising in controlled settings, performance can degrade
          quickly as you scale or vary conditions.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Bottom line:</span> in most enterprise
          contexts today, results are not robust enough to justify production
          reliance or large investment claims.
        </p>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          4) Justify large spend based on speculative timelines
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          The biggest enterprise risk is not “missing quantum.” It is funding
          hype-driven initiatives that fail under scrutiny and damage credibility.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          Quantum investment today should be sized and governed like option value:
          bounded spend, explicit learning goals, and clear decision gates.
        </p>
        <p className="mt-2 text-surface-foreground/85">
          <span className="font-medium">Bottom line:</span> avoid
          platform-migration thinking. Build optionality with discipline.
        </p>
      </section>

      <section aria-labelledby="boundary-map">
        <h2 id="boundary-map" className="text-xl font-semibold tracking-tight">
          The Boundary Map: Three Buckets
        </h2>
        <p className="mt-3 text-surface-foreground/85">
          Use this simple taxonomy to prevent confusion:
        </p>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          A) Feasible and useful now
        </h3>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>simulator-based experimentation,</li>
          <li>hybrid workflows integrated into classical pipelines,</li>
          <li>readiness-building (training + evaluation capability),</li>
          <li>use-case screening against strong classical baselines.</li>
        </ul>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          B) Feasible but not useful
        </h3>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>demos with no decision value,</li>
          <li>pilots designed for storytelling rather than learning,</li>
          <li>vendor proofs you cannot reproduce internally.</li>
        </ul>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          C) Not feasible yet (for enterprise operations)
        </h3>
        <ul className="mt-2 list-disc pl-5 text-surface-foreground/85">
          <li>production-grade, reliable advantage on broad workloads,</li>
          <li>hardware-dependent claims without credible scaling paths,</li>
          <li>“quantum will replace X” narratives.</li>
        </ul>

        <p className="mt-3 text-surface-foreground/85">
          The trap this avoids: confusing possible in principle with ready in
          practice.
        </p>
      </section>

      <section aria-labelledby="enterprise-now">
        <h2 id="enterprise-now" className="text-xl font-semibold tracking-tight">
          What Enterprises Should Do Now
        </h2>
        <p className="mt-3 text-surface-foreground/85">
          In environments with constant announcements and pressure signals, the
          correct response is not to overreact; it is to formalize discipline.
        </p>
        <ol className="mt-3 list-decimal pl-5 text-surface-foreground/85">
          <li>
            <span className="font-medium">Establish a reality baseline.</span> A
            short internal memo defining what you consider evidence, what you
            consider hype, and what “success” means.
          </li>
          <li>
            <span className="font-medium">Adopt a use-case screening rubric.</span>
            Require structure: problem formulation, classical baselines, data
            readiness, constraints expressibility, and decision value.
          </li>
          <li>
            <span className="font-medium">
              Run bounded experiments with explicit learning goals.
            </span>
            A good experiment is not “prove quantum wins.” It is “produce a
            decision memo: worth pursuing, not worth pursuing, or pursue later.”
          </li>
          <li>
            <span className="font-medium">Implement governance before scaling.</span>
            Define who approves pilots, what claims can be made internally, and
            what evidence is required.
          </li>
        </ol>
      </section>

      <section aria-labelledby="misconceptions">
        <h2 id="misconceptions" className="text-xl font-semibold tracking-tight">
          Common Misconceptions to Remove Early
        </h2>
        <ul className="mt-3 list-disc pl-5 text-surface-foreground/85">
          <li>“We’re late.” Readiness artifacts beat rushed pilots.</li>
          <li>
            “We need quantum PhDs first.” You need translators and evaluators
            first.
          </li>
          <li>“A pilot shows momentum.” A pilot without learning goals is theater.</li>
          <li>“Quantum-inspired equals quantum.” Treat it as a separate category.</li>
          <li>“Vendor roadmaps are strategy.” They are inputs, not your plan.</li>
        </ul>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq" className="text-xl font-semibold tracking-tight">
          FAQ
        </h2>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          Do we need quantum hardware to start?
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          No. Start with simulators and hybrid workflows; use hardware later for
          validation.
        </p>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          What does success look like this year?
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          Decision-grade learning: screening frameworks, reproducible experiments,
          and governance artifacts.
        </p>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          What should we avoid?
        </h3>
        <p className="mt-2 text-surface-foreground/85">
          Large, vague “quantum programs” without clear hypotheses, baselines,
          and decision gates.
        </p>
      </section>

      <section aria-labelledby="closing">
        <h2 id="closing" className="text-xl font-semibold tracking-tight">
          Closing
        </h2>
        <p className="mt-3 text-surface-foreground/85">
          The most credible quantum posture today is neither hype nor dismissal.
          It is disciplined optionality: learn fast, measure honestly, and build
          governance that protects credibility.
        </p>
      </section>
    </div>
  );
}
