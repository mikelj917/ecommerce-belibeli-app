import { db } from "@/app/lib/db";
import bcrypt from "bcrypt";

export async function GET() {
  const users = await db.user.findMany();
  return Response.json({ users });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, password } = data;

    if (!email || !password) {
      return Response.json({ message: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      return Response.json({ message: "E-mail ou senha incorretos." }, { status: 400 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return Response.json({ message: "E-mail ou senha incorretos." }, { status: 400 });
    }

    return Response.json(user);
  } catch (error) {
    return Response.json({ message: "Erro interno do servidor" }, { status: 500 });
  }
}
