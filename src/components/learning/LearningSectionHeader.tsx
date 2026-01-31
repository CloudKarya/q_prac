import Link from "next/link";

export function LearningSectionHeader({
  title,
  intro,
  backHref = "/learning",
}: {
  title: string;
  intro: string;
  backHref?: string;
}) {
  return (
    <header>
      <Link href={backHref} className="text-sm font-semibold text-surface-foreground/80 hover:underline">
        ← Back to Learning Overview
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-surface-foreground/75">{intro}</p>
    </header>
  );
}

export function ResourceList({
  items,
}: {
  items: Array<{ type: string; label: string }>;
}) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex shrink-0 items-center rounded-full border border-surface-border bg-surface px-2.5 py-1 text-[11px] font-semibold">
            {it.type}
          </span>
          <span className="text-sm leading-relaxed text-surface-foreground/80">{it.label}</span>
        </li>
      ))}
    </ul>
  );
}
