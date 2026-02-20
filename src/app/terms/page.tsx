export const metadata = {
  title: "Terms of Service | QuPracs",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <header>
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Terms</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Last updated: February 1, 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            These Terms of Service govern your access to and use of the QuPracs website. By using this site, you agree to these terms.
          </p>
        </header>

        <section className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">1) Use of the Website</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>You may use the site for lawful purposes only.</li>
              <li>You agree not to attempt to disrupt, compromise, or misuse the site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">2) Content</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              The site may include educational and informational content. It is provided “as is” and may be updated at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">3) Intellectual Property</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              Site content is owned by QuPracs and/or its licensors and is protected by applicable intellectual property laws. You may not copy,
              distribute, or create derivative works without permission, except as permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">4) Third-Party Services and Links</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              The site may reference third-party services or websites. We are not responsible for third-party content or practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">5) Disclaimer</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              The website is provided without warranties of any kind, to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">6) Limitation of Liability</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              To the maximum extent permitted by law, QuPracs will not be liable for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">7) Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              If you have questions about these terms, contact us via the{" "}
              <a className="font-semibold text-background hover:underline" href="/contact">
                contact page
              </a>
              .
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
