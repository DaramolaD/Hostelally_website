import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateTokenMiddleWare } from "./services/auth";
import { AxiosError } from "axios";

function redirectToSignIn(request: NextRequest) {
  return NextResponse.redirect(new URL("/sign-in", request.url));
}

export async function middleware(request: NextRequest) {
  // Extract the cookie
  const cookie = request.cookies.get("auth_token");

  if (!cookie) {
    const url = request.nextUrl.clone();
    if (
      url.pathname.startsWith("/profile") ||
      url.pathname.startsWith("/dashboard")
    ) {
      return redirectToSignIn(request);
    }
    return NextResponse.next(); // Allow access to non-protected routes
  }

  const token = cookie.value;

  try {
    // Validate the token using your service
    const user = await validateTokenMiddleWare(token);

    if (!user) {
      return redirectToSignIn(request);
    }

    // Custom logic based on user role or validation response
    const url = request.nextUrl.clone();
    if (url.pathname.startsWith("/dashboard") && !user.isAdmin) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error during token validation:", error.response?.data);
    } else {
      console.error("Unknown error during token validation:", error);
    }
    return redirectToSignIn(request);
  }

  // Proceed to the next middleware or route
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile/:path*", "/dashboard/:path*"], // Match specific paths
};
