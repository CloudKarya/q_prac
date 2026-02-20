export const metadata = {
  title: "Privacy Policy | QuPracs",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-[28px] border border-surface-border bg-surface px-6 py-10 text-surface-foreground shadow-sm sm:px-10">
        <header>
          <div className="text-xs font-semibold uppercase tracking-wide text-surface-foreground/60">Privacy Policy</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            Last updated: February 20, 2026
          </p>
          <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75 sm:text-base">
            This Privacy Policy explains how <strong>QuPracs</strong> (a service of <strong>CloudKarya, Inc.</strong>) collects, uses, shares,
            and protects information when you visit <strong>qupracs.com</strong>, contact us, or sign in to use gated features (for example,
            Tutorials).
          </p>
        </header>

        <section className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">1) Who We Are</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              <strong>QuPracs</strong> is operated by <strong>CloudKarya, Inc.</strong> For the purposes of applicable data protection laws,
              <strong> CloudKarya, Inc.</strong> is the “controller” (or equivalent term) for personal information processed through this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">2) Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We collect information in the following categories:
            </p>

            <h3 className="mt-5 text-sm font-semibold tracking-tight text-surface-foreground">A. Information you provide</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
              When you contact us, submit a form, or otherwise communicate with us, we may collect:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>Name</li>
              <li>Email address</li>
              <li>Company, role, or other professional details (if provided)</li>
              <li>The content of your message and any information you choose to share</li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold tracking-tight text-surface-foreground">B. Usage and device information</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
              When you browse the site, we (and our service providers) may collect:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>Pages viewed, navigation paths, and interactions</li>
              <li>Referring pages/sources</li>
              <li>Approximate location (generally derived from IP address)</li>
              <li>Device/browser type, operating system, and similar technical details</li>
              <li>Performance and diagnostic signals (for reliability and security)</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/80">
              This information may be collected via cookies or similar technologies (see <strong>Cookies and Analytics</strong>).
            </p>

            <h3 className="mt-6 text-sm font-semibold tracking-tight text-surface-foreground">C. Account and sign-in information</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
              If you sign in, authentication is handled through <strong>NextAuth</strong>. Depending on the identity provider you use (for
              example, Google or LinkedIn) and what you authorize, we may receive:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile image</li>
              <li>Provider identifier (for example, a unique user ID)</li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold tracking-tight text-surface-foreground">D. Tutorials and interactive feature activity</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
              When you use Tutorials or other interactive features, we may collect activity and operational telemetry needed to provide and
              secure the feature, such as:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>Tutorial starts/completions</li>
              <li>Session creation and related feature events</li>
              <li>Technical logs required for performance, troubleshooting, and abuse prevention</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">3) How We Use Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">We use information to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>
                <strong>Provide and operate the site</strong> (deliver pages, route requests, maintain availability)
              </li>
              <li>
                <strong>Authenticate users</strong> and manage sessions for gated features (via NextAuth)
              </li>
              <li>
                <strong>Improve content and product experience</strong> (understand what content is useful and how the site performs)
              </li>
              <li>
                <strong>Communicate with you</strong> (respond to inquiries and provide requested information)
              </li>
              <li>
                <strong>Security and abuse prevention</strong> (detect and prevent fraud, abuse, or security incidents)
              </li>
              <li>
                <strong>Compliance</strong> (meet legal obligations and enforce our terms)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">4) Legal Bases (EEA/UK)</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              If you are in the European Economic Area (EEA) or the United Kingdom, we rely on one or more of the following legal bases:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>
                <strong>Consent</strong> (for certain analytics cookies where required)
              </li>
              <li>
                <strong>Contract</strong> (to provide features you request, such as authenticated Tutorials)
              </li>
              <li>
                <strong>Legitimate interests</strong> (to operate, secure, and improve the site), balanced against your rights
              </li>
              <li>
                <strong>Legal obligations</strong> (where we must comply with law)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">5) Cookies and Analytics (GA4)</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We use cookies and similar technologies for:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>
                <strong>Essential site functionality</strong> and security
              </li>
              <li>
                <strong>Analytics</strong> to understand usage patterns and improve the site
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/80">
              We use <strong>Google Analytics (GA4)</strong> or similar tools that may collect information such as:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>Pages viewed and interactions</li>
              <li>Device/browser type</li>
              <li>Approximate location derived from IP address</li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold tracking-tight text-surface-foreground">Your choices</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">You can manage cookies through:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>Browser settings (block or delete cookies)</li>
              <li>Any cookie controls we provide, where applicable</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/80">
              UK and EU rules may treat certain analytics cookies as “non-essential.” Where required by law (including UK PECR and EU ePrivacy rules), we will seek consent
              before placing non-essential cookies.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              Google also provides a browser add-on to opt out of Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">6) Authentication (NextAuth)</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We use <strong>NextAuth</strong> to support sign-in and session management for gated features.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              If you sign in via an external identity provider (for example, Google or LinkedIn):
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>authentication is performed by that provider</li>
              <li>we use the information returned to create and maintain your session and enable features</li>
              <li>your use of the provider is governed by their own privacy policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">7) Sharing of Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">We <strong>do not sell</strong> your personal information.</p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">We may share information with:</p>

            <h3 className="mt-5 text-sm font-semibold tracking-tight text-surface-foreground">A. Service providers</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
              Third parties who help us operate the site and deliver services, including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>
                <strong>Vercel</strong> (hosting and delivery)
              </li>
              <li>
                <strong>Google Cloud Run</strong> (hosting/runtime for certain services)
              </li>
              <li>
                <strong>Google Analytics</strong> (analytics)
              </li>
              <li>Authentication-related providers used with NextAuth (identity providers you choose)</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/80">
              These providers are permitted to process personal information only as necessary to provide services to us.
            </p>

            <h3 className="mt-6 text-sm font-semibold tracking-tight text-surface-foreground">B. Legal and safety disclosures</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/80">
              We may disclose information if we believe disclosure is necessary to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>comply with law or legal process</li>
              <li>protect the rights, property, or safety of CloudKarya, QuPracs, our users, or others</li>
              <li>investigate and prevent fraud, abuse, or security incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">8) International Transfers</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We may process and store information in countries other than where you live (including the United States) through our service providers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              Where required, we use appropriate safeguards for cross-border transfers, such as:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>European Commission <strong>Standard Contractual Clauses (SCCs)</strong></li>
              <li>UK <strong>International Data Transfer Agreement (IDTA)</strong> or UK Addendum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">9) Your Rights (EEA/UK and other regions where applicable)</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              Depending on your location and applicable law, you may have rights to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-surface-foreground/80">
              <li>request access to personal information we hold about you</li>
              <li>request correction of inaccurate information</li>
              <li>request deletion of your information</li>
              <li>object to or restrict certain processing</li>
              <li>request portability of your information</li>
              <li>withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/80">
              You may also have the right to lodge a complaint with your local supervisory authority. In the UK, this is the <strong>Information Commissioner’s Office (ICO).</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">10) Data Retention</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We retain personal information only as long as necessary for the purposes described in this Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">11) Security</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We use reasonable administrative, technical, and organizational safeguards designed to protect information. However, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">12) Children</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              This website is not directed to children, and we do not knowingly collect personal information from children.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              If you believe a child has provided personal information, please contact us and we will take appropriate steps.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">13) Changes to This Policy</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">
              We may update this Privacy Policy from time to time. We will post the updated version on this page and update the “Last updated” date above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-tight">14) Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground/80">For privacy questions or requests, contact:</p>
            <div className="mt-4 rounded-2xl border border-surface-border bg-background/5 p-5">
              <div className="text-sm leading-relaxed text-surface-foreground/80">
                <div>
                  <span className="font-semibold text-surface-foreground">Email:</span>{" "}
                  <a className="font-semibold text-background hover:underline" href="mailto:qupracs@cloudkarya.com">
                    qupracs@cloudkarya.com
                  </a>
                </div>
                <div className="mt-2">
                  Or use our Contact page:{" "}
                  <a className="font-semibold text-background hover:underline" href="/contact">
                    /contact
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
