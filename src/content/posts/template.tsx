import type { BlogPost } from "@/content/blogPosts";

// 1) Duplicate this file into src/content/posts/<your-slug>.tsx
// 2) Fill out meta + body. Keep headings (h2/h3) meaningful for SEO.
// 3) Add the post to src/content/blogPosts.ts and src/content/postRegistry.ts

export const meta: Pick<BlogPost, "slug" | "title" | "description"> = {
  slug: "your-slug",
  title: "Your Title",
  description:
    "One sentence summary that will show in previews and search results.",
};

export default function PostTemplate() {
  return (
    <div className="space-y-6 text-[15px] leading-relaxed">
      <p>
        Write a strong opening paragraph that states the problem and who this is
        for.
      </p>

      <section aria-labelledby="tldr">
        <h2 id="tldr" className="text-xl font-semibold tracking-tight">
          TL;DR
        </h2>
        <ul className="mt-3 list-disc pl-5 text-surface-foreground/85">
          <li>Key point #1</li>
          <li>Key point #2</li>
          <li>Key point #3</li>
        </ul>
      </section>

      <section aria-labelledby="main">
        <h2 id="main" className="text-xl font-semibold tracking-tight">
          Main Section Title
        </h2>
        <p className="mt-3 text-surface-foreground/85">
          Use short paragraphs. Prefer concrete constraints, definitions, and
          examples.
        </p>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">Subsection</h3>
        <p className="mt-2 text-surface-foreground/85">
          Add supporting detail. Use lists when it improves scanability.
        </p>
      </section>

      <section aria-labelledby="closing">
        <h2 id="closing" className="text-xl font-semibold tracking-tight">
          Closing
        </h2>
        <p className="mt-3 text-surface-foreground/85">
          Summarize takeaways and suggest next steps.
        </p>
      </section>
    </div>
  );
}
