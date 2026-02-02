export const metadata = {
  title: "Terms of Service | QuPracs",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-surface-foreground">Terms of Service</h1>
        <p className="mt-2 text-sm text-surface-foreground/70">Last updated: February 1, 2026</p>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:tracking-tight prose-a:text-background">
          <p>
            These Terms of Service govern your access to and use of the QuPracs website. By using this
            site, you agree to these terms.
          </p>

          <h2>Use of the Website</h2>
          <ul>
            <li>You may use the site for lawful purposes only.</li>
            <li>You agree not to attempt to disrupt, compromise, or misuse the site.</li>
          </ul>

          <h2>Content</h2>
          <p>
            The site may include educational and informational content. It is provided “as is” and may
            be updated at any time.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Site content is owned by QuPracs and/or its licensors and is protected by applicable
            intellectual property laws. You may not copy, distribute, or create derivative works
            without permission, except as permitted by law.
          </p>

          <h2>Third-Party Services and Links</h2>
          <p>
            The site may reference third-party services or websites. We are not responsible for third-
            party content or practices.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The website is provided without warranties of any kind, to the maximum extent permitted by
            law.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, QuPracs will not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of the site.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these terms, contact us via the <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
