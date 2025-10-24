import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UnauthorizedError } from "./app/api/HttpErrors";
import { cookies } from "next/headers";
import { JWTExpired, JWTInvalid } from "jose/errors";
import { guardApi } from "./proxy/guardAPI";
import { guardFront } from "./proxy/guardFront";

export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  try {
    if (pathname.startsWith("/api")) {
      const response = await guardApi(request, pathname);
      return response;
    }

    const response = await guardFront(request, pathname);

    return response;
  } catch (error) {
    if (error instanceof JWTExpired || error instanceof JWTInvalid) {
      (await cookies()).delete("accessToken");
    }

    if (!pathname.startsWith("/api")) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (
      error instanceof JWTInvalid ||
      error instanceof JWTExpired ||
      error instanceof UnauthorizedError
    ) {
      return NextResponse.json({ message: "Token inválido ou expirado." }, { status: 401 });
    }

    return NextResponse.json({ message: "Erro interno no servidor" }, { status: 500 });
  }
}
