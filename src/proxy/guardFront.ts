import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "./verifyToken";

export async function guardFront(request: NextRequest, pathname: string) {
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    if (request.cookies.get("accessToken")) {
      const homeUrl = new URL("/", request.url);
      homeUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(homeUrl);
    }
  }

  const protectedPaths = ["/cart", "/profile", "/wishlist"];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (!isProtected) return NextResponse.next();

  const { userId, email } = await verifyToken(request);

  const response = NextResponse.next();
  response.headers.set("x-user", JSON.stringify({ userId, email }));

  return response;
}
