export const metadata = {
  title: "Privacy Policy | QuPracs",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-surface-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-surface-foreground/70">Last updated: February 1, 2026</p>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:tracking-tight prose-a:text-background">
          <p>
            This Privacy Policy describes how QuPracs (from CloudKarya, Inc.) collects, uses, and
            shares information when you visit this website.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              <strong>Information you provide:</strong> If you contact us, we may collect the
              information you submit (for example, your name, email address, and message).
            </li>
            <li>
              <strong>Usage information:</strong> We may collect basic analytics data about how the
              site is used (for example, pages visited, approximate location, device/browser data).
            </li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>To operate and improve the website.</li>
            <li>To respond to inquiries and provide support.</li>
            <li>To understand aggregate usage and content performance.</li>
          </ul>

          <h2>Cookies and Analytics</h2>
          <p>
            We may use cookies and similar technologies for analytics and site functionality. You can
            control cookies through your browser settings.
          </p>

          <h2>Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with service providers
            who help us operate the website (for example, hosting or analytics) and when required by
            law.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain information only as long as needed for the purposes described above, unless a
            longer retention period is required or permitted by law.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact us via the <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
