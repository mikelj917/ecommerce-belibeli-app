import { db } from "@/app/lib/db";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, password, confirm_password } = data;

    if (!name || !email || !password) {
      return Response.json({ message: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    if (password !== confirm_password) {
      return Response.json({ message: "As senhas não coincidem." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.create({ data: { name, email, password: hashedPassword } });
    return Response.json(user);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return Response.json({ message: "Este email já está sendo utilizado." }, { status: 409 });
      }
    }

    return Response.json({ message: "Erro ao criar usuário." }, { status: 500 });
  }
}
