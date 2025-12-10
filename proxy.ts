import { NextResponse, type NextRequest } from "next/server";

import { extendUserSessionMiddleware, getUserSession } from "@/auth";

const ADMIN_EMAIL = "rawgrittt@gmail.com";
const protectedRoutes = ["/admin"];
const authRoutes = ["/signin"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getUserSession();

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  const isAccessDeniedPage = pathname === "/access-denied";

  // 1. Redirect Authorized Admin AWAY from Access Denied page
  if (isAccessDeniedPage && session?.user?.email === ADMIN_EMAIL) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // 1. Unauthenticated users trying to access protected routes
  if (isProtectedRoute) {
    if (!session) {
      // Redirect to signin, adding the current path as 'next' param
      const signInUrl = new URL("/signin", request.url);
      signInUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(signInUrl);
    }

    // 2. Authenticated but UNAUTHORIZED users (Wrong Email)
    if (session.user.email !== ADMIN_EMAIL) {
      return NextResponse.redirect(new URL("/access-denied", request.url));
    }
  }

  // 3. Redirect authenticated users away from auth pages
  if (session && isAuthRoute) {
    // If they are the admin, send to admin, otherwise home
    if (session.user.email === ADMIN_EMAIL) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 4. Extend session for active users
  return extendUserSessionMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
