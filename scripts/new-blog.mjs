#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

function usage() {
  console.log(`
Usage:
  node scripts/new-blog.mjs --title <title> [--slug <slug>] [--date YYYY-MM-DD] [--tags "a,b,c"] [--aliases "old-slug,other"]

Examples:
  node scripts/new-blog.mjs --title "My First Post" --tags "quantum,simulators"
  node scripts/new-blog.mjs --title "How We Screen Use-Cases" --slug "use-case-screen" --date 2026-01-27

Notes:
  - Creates a new Markdown file in src/content/posts/<slug>.md
  - The blog system reads frontmatter fields: slug, title, date/publishedAt, tags, aliases
`);
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

function slugifyTitle(input) {
  return String(input)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .replace(/-+/g, "-")
    .trim();
}

function postsDir(repoRoot) {
  return path.join(repoRoot, "src", "content", "posts");
}

function parseCsv(val) {
  if (!val) return [];
  return String(val)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function yamlList(items) {
  if (!items.length) return "[]";
  return "\n" + items.map((x) => `  - ${x}`).join("\n");
}

const args = parseArgs(process.argv);
if (args.help || args.h) {
  usage();
  process.exit(0);
}

const title = String(args.title || "").trim();
const slug = String(args.slug || "").trim() || slugifyTitle(title);
const date = String(args.date || new Date().toISOString().slice(0, 10)).trim();
const tags = parseCsv(args.tags || "quantum computing");
const aliases = parseCsv(args.aliases);

if (!title || !slug) {
  usage();
  process.exit(1);
}

const repoRoot = process.cwd();
const dir = postsDir(repoRoot);
const filePath = path.join(dir, `${slug}.md`);

fs.mkdirSync(dir, { recursive: true });

if (fs.existsSync(filePath)) {
  console.error(`Post already exists: ${path.relative(repoRoot, filePath)}`);
  process.exit(1);
}

const fmTags = yamlList(tags);
const fmAliases = yamlList(aliases);

const content = `---
slug: ${slug}
title: ${JSON.stringify(title)}
date: ${date}
tags:${fmTags}
aliases:${fmAliases}
---

# ${title}

Write a strong opening paragraph (who this is for + what it answers).

---

## TL;DR

- TODO key point #1
- TODO key point #2
- TODO key point #3

---

## Main

Start here.
`;

fs.writeFileSync(filePath, content, "utf8");

console.log(`Created: ${path.relative(repoRoot, filePath)}`);
console.log(`URL: /blogs/${slug}`);
