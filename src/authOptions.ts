import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { logSignInActivity } from "@/lib/authActivity";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID ?? "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
      issuer: "https://www.linkedin.com/oauth",
      wellKnown: "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
      userinfo: {
        url: "https://api.linkedin.com/v2/userinfo",
      },
      // LinkedIn's OIDC userinfo payload differs from the legacy /v2/me shape.
      // Mapping it explicitly avoids post-consent failures when /v2/me is not available.
      profile(profile) {
        const typed = profile as Record<string, unknown>;

        const sub = typeof typed.sub === "string" ? typed.sub : undefined;
        const id = typeof typed.id === "string" ? typed.id : undefined;

        const name = typeof typed.name === "string" ? typed.name : undefined;
        const givenName = typeof typed.given_name === "string" ? typed.given_name : undefined;
        const familyName = typeof typed.family_name === "string" ? typed.family_name : undefined;
        const derivedName = [givenName, familyName].filter(Boolean).join(" ") || undefined;

        const email = typeof typed.email === "string" ? typed.email : undefined;
        const picture = typeof typed.picture === "string" ? typed.picture : undefined;

        return {
          id: sub ?? id ?? "linkedin",
          name: name ?? derivedName,
          email,
          image: picture,
        };
      },
    }),
  ],
  logger: {
    error(code, metadata) {
      console.error("[next-auth][error]", code, metadata);
    },
    warn(code) {
      console.warn("[next-auth][warn]", code);
    },
    debug(code, metadata) {
      if (process.env.NODE_ENV !== "production") {
        console.debug("[next-auth][debug]", code, metadata);
      }
    },
  },
  events: {
    async signIn({ user, account, isNewUser }) {
      try {
        await logSignInActivity({
          provider: account?.provider,
          providerAccountId: account?.providerAccountId,
          email: user?.email,
          name: user?.name,
          isNewUser,
        });
      } catch (error) {
        console.error("[authActivity] Failed to log sign-in activity", error);
      }
    },
  },
};
