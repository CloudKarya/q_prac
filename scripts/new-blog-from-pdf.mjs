#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

function usage() {
  console.log(`\nUsage:\n  node scripts/new-blog-from-pdf.mjs --pdf <path.pdf> --slug <slug> --title <title> [--date YYYY-MM-DD] [--tags "a,b,c"]\n\nNotes:\n  - Requires \'pdftotext\' to be installed (poppler).\n  - Creates a new TSX post file in src/content/posts/\n  - Inserts a post entry into src/content/blogPosts.ts between // posts:begin and // posts:end\n  - Adds the component to src/content/postRegistry.ts\n`);
}

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const val = argv[i + 1];
    if (!val || val.startsWith("--")) {
      out[key] = true;
    } else {
      out[key] = val;
      i++;
    }
  }
  return out;
}

function kebabToPascal(slug) {
  return slug
    .split(/[^a-zA-Z0-9]+/g)
    .filter(Boolean)
    .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
    .join("");
}

const args = parseArgs(process.argv);
if (args.help || args.h) {
  usage();
  process.exit(0);
}

const pdfPath = args.pdf;
const slug = args.slug;
const title = args.title;
const date = args.date || new Date().toISOString().slice(0, 10);
const tags = (args.tags ? String(args.tags) : "quantum computing").split(",").map((t) => t.trim()).filter(Boolean);

if (!pdfPath || !slug || !title) {
  usage();
  process.exit(1);
}

const repoRoot = process.cwd();
const postsDir = path.join(repoRoot, "src", "content", "posts");
const postFile = path.join(postsDir, `${slug}.tsx`);

if (fs.existsSync(postFile)) {
  console.error(`Post file already exists: ${postFile}`);
  process.exit(1);
}

let extracted;
try {
  extracted = execFileSync("pdftotext", ["-layout", pdfPath, "-"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
} catch (e) {
  console.error("Failed to run pdftotext. Is poppler installed and pdftotext on PATH?");
  throw e;
}

const description = extracted
  .split(/\n\s*\n/g)
  .map((p) => p.replace(/\s+/g, " ").trim())
  .filter(Boolean)
  .slice(0, 2)
  .join(" ")
  .slice(0, 240);

const readingTimeMinutes = Math.max(3, Math.round(extracted.split(/\s+/g).filter(Boolean).length / 200));

fs.mkdirSync(postsDir, { recursive: true });

const postTsx = `import type { BlogPost } from "@/content/blogPosts";\n\nexport const meta: Pick<BlogPost, \"slug\" | \"title\" | \"description\"> = {\n  slug: ${JSON.stringify(slug)},\n  title: ${JSON.stringify(title)},\n  description: ${JSON.stringify(description || "Add a one sentence description.")},\n};\n\nconst SOURCE_TEXT = ${JSON.stringify(extracted)};\n\nexport default function Post() {\n  return (\n    <div className=\"space-y-6 text-[15px] leading-relaxed\">\n      <p>\n        TODO: Write a strong opening paragraph (who this is for + what it answers).\n      </p>\n\n      <section aria-labelledby=\"tldr\">\n        <h2 id=\"tldr\" className=\"text-xl font-semibold tracking-tight\">\n          TL;DR\n        </h2>\n        <ul className=\"mt-3 list-disc pl-5 text-surface-foreground/85\">\n          <li>TODO key point #1</li>\n          <li>TODO key point #2</li>\n          <li>TODO key point #3</li>\n        </ul>\n      </section>\n\n      <section aria-labelledby=\"draft\">\n        <h2 id=\"draft\" className=\"text-xl font-semibold tracking-tight\">\n          Draft (from PDF)\n        </h2>\n        <p className=\"mt-3 text-surface-foreground/85\">\n          Below is the raw extracted text. Convert it into clean sections (h2/h3)\n          for the final post.\n        </p>\n        <pre\n          className=\"mt-3 overflow-x-auto rounded-xl border border-surface-border bg-surface p-4 text-[12px] leading-relaxed text-surface-foreground/80\"\n          style={{ whiteSpace: \"pre-wrap\" }}\n        >\n          {SOURCE_TEXT}\n        </pre>\n      </section>\n    </div>\n  );\n}\n`;

fs.writeFileSync(postFile, postTsx, "utf8");
console.log(`Created: ${path.relative(repoRoot, postFile)}`);

// Update blogPosts.ts
const blogPostsFile = path.join(repoRoot, "src", "content", "blogPosts.ts");
const blogPostsSrc = fs.readFileSync(blogPostsFile, "utf8");

const begin = "// posts:begin";
const end = "// posts:end";
const bi = blogPostsSrc.indexOf(begin);
const ei = blogPostsSrc.indexOf(end);
if (bi === -1 || ei === -1 || ei < bi) {
  console.error("Could not find posts markers in src/content/blogPosts.ts");
  process.exit(1);
}

const entry = `\n  {\n    slug: ${JSON.stringify(slug)},\n    title: ${JSON.stringify(title)},\n    description: ${JSON.stringify(description || "Add description." )},\n    summary: ${JSON.stringify((description || "").slice(0, 180) + (description && description.length > 180 ? "…" : "") || "Add a 2–3 sentence summary." )},\n    publishedAt: ${JSON.stringify(date)},\n    tags: ${JSON.stringify(tags, null, 2).replace(/\n/g, "\n    ")},\n    readingTimeMinutes: ${readingTimeMinutes},\n  },\n`;

const updatedBlogPosts =
  blogPostsSrc.slice(0, bi + begin.length) +
  entry +
  blogPostsSrc.slice(bi + begin.length);

fs.writeFileSync(blogPostsFile, updatedBlogPosts, "utf8");
console.log(`Updated: ${path.relative(repoRoot, blogPostsFile)}`);

// Update postRegistry.ts
const registryFile = path.join(repoRoot, "src", "content", "postRegistry.ts");
let registrySrc = fs.readFileSync(registryFile, "utf8");

const importId = `Post${kebabToPascal(slug)}`;
const importLine = `import ${importId} from "@/content/posts/${slug}";\n`;

if (!registrySrc.includes(importLine)) {
  // Insert import after react type import (or at top)
  const lines = registrySrc.split(/\n/);
  const firstImportEnd = lines.findIndex((l) => l.startsWith("import ") && l.includes("react"));
  const insertAt = firstImportEnd >= 0 ? firstImportEnd + 1 : 0;
  lines.splice(insertAt, 0, importLine.trimEnd());
  registrySrc = lines.join("\n");
}

const mapEntry = `  ${JSON.stringify(slug)}: ${importId},\n`;
if (!registrySrc.includes(mapEntry)) {
  registrySrc = registrySrc.replace(/export const postRegistry: Record<string, ComponentType> = {\n/, (m) => m + mapEntry);
}

fs.writeFileSync(registryFile, registrySrc, "utf8");
console.log(`Updated: ${path.relative(repoRoot, registryFile)}`);

console.log("\nNext: open the new post file and replace the Draft section with clean h2/h3 sections.");
