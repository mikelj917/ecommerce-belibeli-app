import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { UnauthorizedError } from "../../HttpErrors";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) throw new UnauthorizedError("Usuário não encontrado");

  const user = await verifyToken(token);
  return NextResponse.json({ user });
}
