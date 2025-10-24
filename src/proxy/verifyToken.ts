import { UnauthorizedError } from "@/app/api/HttpErrors";
import { jwtVerify, type JWTPayload } from "jose";
import type { NextRequest } from "next/server";

export async function verifyToken(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  if (!token) throw new UnauthorizedError("Não autorizado: cookie ausente.");

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);

  return payload as JWTPayload & { userId: number; email: string };
}
