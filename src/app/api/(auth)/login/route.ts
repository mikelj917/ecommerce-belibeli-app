import { db } from "@/app/lib/db";
import { loginValidate } from "./validate";
import { loginService } from "./service";
import { HttpError } from "../../HttpErrors";
import { cookies } from "next/headers";

export async function GET() {
  const users = await db.user.findMany();
  return Response.json({ users });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const validatedData = loginValidate(data);

    const { user, accessToken } = await loginService(validatedData);

    const cookieAuth = await cookies();

    cookieAuth.set({
      name: "accessToken",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return Response.json(user);
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json({ message: error.message }, { status: error.status });
    }
    return Response.json({ message: "Erro interno do servidor" }, { status: 500 });
  }
}
