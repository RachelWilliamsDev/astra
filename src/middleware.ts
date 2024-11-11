import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isHomeRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If user is logged in and is on the home route, redirect to dashboard or any protected page
  if (userId && isHomeRoute(req)) {
    return NextResponse.rewrite(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
