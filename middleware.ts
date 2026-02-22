import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Allow the Learning landing page without authentication.
  if (pathname === "/learning") {
    return NextResponse.next();
  }

  // Allow the Tutorials landing page without authentication.
  if (pathname === "/tutorials") {
    return NextResponse.next();
  }

  // Require sign-in for deeper Learning pages.
  if (pathname.startsWith("/learning/") || pathname.startsWith("/tutorials/")) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      const signInUrl = req.nextUrl.clone();
      signInUrl.pathname = "/signin";
      signInUrl.searchParams.set("callbackUrl", `${pathname}${search}`);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/learning", "/learning/:path*", "/tutorials", "/tutorials/:path*"],
};
