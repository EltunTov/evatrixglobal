import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "evx_session";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isDashboardRoute = pathname.startsWith("/dashboard");
  if (!isDashboardRoute) {
    return NextResponse.next();
  }

  const session = request.cookies.get(COOKIE_NAME)?.value;

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};