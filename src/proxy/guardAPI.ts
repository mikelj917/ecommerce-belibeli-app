import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "./verifyToken";

export async function guardApi(request: NextRequest, pathname: string) {
  const protectedPaths = ["/api/cart", "/api/wishlist"];
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));

  if (!isProtectedPath) return NextResponse.next();

  const { userId } = await verifyToken(request);

  const response = NextResponse.next();
  response.headers.set("x-userID", JSON.stringify(userId));
  return response;
}
