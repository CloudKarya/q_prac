export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="text-xs text-foreground/60">
          © {new Date().getFullYear()} Q-Prac
        </div>
      </div>
    </footer>
  );
}
