#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

function usage() {
  console.log(`\nUsage:\n  node scripts/new-blog-from-pdf.mjs --pdf <path.pdf> --slug <slug> --title <title> [--date YYYY-MM-DD] [--tags "a,b,c"]\n\nNotes:\n  - Requires \'pdftotext\' to be installed (poppler).\n  - Creates a new Markdown post file in src/content/posts/<slug>.md\n  - The site loads posts directly from Markdown (no registry updates needed).\n`);
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
const postFile = path.join(postsDir, `${slug}.md`);

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

const safeDesc = description || "Add a one sentence description.";
const safeSummary = (description || "").slice(0, 220) || "Add a 2–3 sentence summary.";

const yamlTags = tags.length ? `\n  tags: [${tags.map((t) => JSON.stringify(t)).join(", ")}]` : "";

const postMd = `---\nslug: ${slug}\ntitle: ${JSON.stringify(title)}\npublishedAt: ${date}${yamlTags}\ndescription: ${JSON.stringify(safeDesc)}\nsummary: ${JSON.stringify(safeSummary)}\n---\n\n# ${title}\n\nTODO: Write a strong opening paragraph (who this is for + what it answers).\n\n## TL;DR\n\n- TODO key point #1\n- TODO key point #2\n- TODO key point #3\n\n## Draft (from PDF)\n\nBelow is the raw extracted text. Convert it into clean sections (h2/h3) for the final post.\n\n\`\`\`text\n${extracted.replace(/\r\n/g, "\n").trim()}\n\`\`\`\n\n---\n\n*Estimated reading time: ~${readingTimeMinutes} min.*\n`;

fs.writeFileSync(postFile, postMd, "utf8");
console.log(`Created: ${path.relative(repoRoot, postFile)}`);

console.log("\nNext: open the new .md file and replace the Draft section with clean h2/h3 sections.");
