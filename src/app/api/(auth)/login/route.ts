import { db } from "@/app/lib/db";
import { loginValidate } from "./validate";
import { loginService } from "./service";
import { HttpError } from "../../HttpErrors";

export async function GET() {
  const users = await db.user.findMany();
  return Response.json({ users });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const validatedData = loginValidate(data);

    const result = await loginService(validatedData);

    return Response.json(result);
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json({ message: error.message }, { status: error.status });
    }
    return Response.json({ message: "Erro interno do servidor" }, { status: 500 });
  }
}
