import { db } from "@/app/lib/db";
import type { RegisterBody } from "./RegisterBodyType";
import bcrypt from "bcrypt";
import { ConflitError } from "../../HttpErrors";

export async function registerService({
  name,
  email,
  password,
}: Omit<RegisterBody, "confirm_password">) {
  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new ConflitError("Já existe um usuário com esse e-mail");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: { name, email, password: hashedPassword },
    select: { id: true, name: true, email: true },
  });

  return user;
}
