import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  adminRoutes,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { getUserRoleByEmail } from "./data/user";

const { auth } = NextAuth(authConfig);
//@ts-ignore
export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  let isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  if (!isPublicRoute) {
    isPublicRoute = publicRoutes.some((route) => {
      if (typeof route === "string") {
        return nextUrl.pathname === route;
      }
      return route.test(nextUrl.pathname);
    });
  }
  
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);
  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  const email = req.auth?.user?.email!;
  const user = await getUserRoleByEmail(email)

  if (isAdminRoute && email !== process.env.ADMIN_EMAIL && user?.role !== "ADMIN") {
    return Response.redirect(new URL("/auth/login-as-admin", nextUrl));
  }

  return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}