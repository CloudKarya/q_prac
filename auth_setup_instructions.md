**1) `NEXTAUTH_SECRET`**
- Purpose: signs/encrypts NextAuth cookies/JWTs.
- Generate (recommended):
  - Run: `openssl rand -base64 32`
  - Put the output into `NEXTAUTH_SECRET` (no quotes needed).

**2) Google OAuth: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`**
- Go to Google Cloud Console → APIs & Services → **Credentials**
  - https://console.cloud.google.com/apis/credentials
- Create (or select) a Project.
- Configure consent screen:
  - APIs & Services → **OAuth consent screen**
  - Choose **External** (unless you’re Google Workspace-only).
  - Fill App name, support email, developer contact.
  - Add your domain (e.g. `qupracs.com`) under **Authorized domains**.
  - Add scopes (basic is fine: `openid`, `email`, `profile`).
- Create OAuth credentials:
  - Credentials → **Create Credentials** → **OAuth client ID**
  - Application type: **Web application**
  - **Authorized JavaScript origins**
    - Local: `http://localhost:3000`
    - Prod: `https://www.qupracs.com`
  - **Authorized redirect URIs** (these are required)
    - Local: `http://localhost:3000/api/auth/callback/google`
    - Prod: `https://www.qupracs.com/api/auth/callback/google`
- Copy values:
  - Client ID → `GOOGLE_CLIENT_ID`
  - Client secret → `GOOGLE_CLIENT_SECRET`

**3) LinkedIn OAuth: `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`**
- Go to LinkedIn Developers → **My Apps**
  - https://www.linkedin.com/developers/apps
- Create App (or select existing).
- In the app:
  - **Auth** tab:
    - **Authorized redirect URLs**:
      - Local: `http://localhost:3000/api/auth/callback/linkedin`
      - Prod: `https://www.qupracs.com/api/auth/callback/linkedin`
    - (If it asks for OAuth 2.0 settings, keep default; NextAuth uses standard OAuth2.)
  - **Settings** (or “App credentials”):
    - Client ID → `LINKEDIN_CLIENT_ID`
    - Client Secret → `LINKEDIN_CLIENT_SECRET`
- Products / scopes:
  - Enable **Sign In with LinkedIn** (this may require adding the product to the app).
  - NextAuth typically uses basic profile/email scopes; LinkedIn may require approval depending on what you request.

**4) `NEXTAUTH_URL`**
- Purpose: tells NextAuth the canonical base URL for callbacks.
- Set per environment:
  - Local dev: `NEXTAUTH_URL=http://localhost:3000`
  - Production: `NEXTAUTH_URL=https://www.qupracs.com`

**Where to put them**
- Local: create/update .env.local at the repo root:
  - Example:
    - `NEXTAUTH_URL=http://localhost:3000`
    - `NEXTAUTH_SECRET=...`
    - `GOOGLE_CLIENT_ID=...`
    - `GOOGLE_CLIENT_SECRET=...`
    - `LINKEDIN_CLIENT_ID=...`
    - `LINKEDIN_CLIENT_SECRET=...`
- Production: set these as environment variables in your hosting provider (Vercel/Cloud Run/etc). Don’t commit secrets.

If you tell me where you deploy (Vercel, Cloud Run, etc.), I can give the exact click-by-click steps for setting the env vars there too.