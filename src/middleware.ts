import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { HttpError, UnauthorizedError } from "./app/api/HttpErrors";
import { jwtVerify, type JWTPayload } from "jose";

export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  try {
    if (pathname.startsWith("/api")) {
      const response = await protectApi(request, pathname);
      return response;
    }

    const response = await protectFront(request, pathname);
    return response;
  } catch (error) {
    if (error instanceof HttpError) {
      const { message, status } = error;
      return NextResponse.json({ message }, { status });
    }

    if (!pathname.startsWith("/api")) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.json({ message: "Token inválido ou expirado." }, { status: 401 });
  }
}

async function protectApi(request: NextRequest, pathname: string) {
  const protectedPaths = ["/api/cart"];
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));

  if (!isProtectedPath) return NextResponse.next();

  const { userId } = await verifyToken(request);

  const response = NextResponse.next();
  response.headers.set("x-userID", JSON.stringify(userId));
  return response;
}

async function protectFront(request: NextRequest, pathname: string) {
  const protectedPaths = ["/cart"];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  if (!isProtected) return NextResponse.next();

  const { userId, email } = await verifyToken(request);

  const response = NextResponse.next();
  response.headers.set("x-user", JSON.stringify({ userId, email }));

  return response;
}

async function verifyToken(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  if (!token) throw new UnauthorizedError("Não autorizado: cookie ausente.");

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload as JWTPayload & { userId: number; email: string };
}
