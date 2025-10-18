import { db } from "@/app/lib/db";
import type { LoginBody } from "./LoginBodyType";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../HttpErrors";

export async function loginService({ email, password }: LoginBody) {
  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    throw new BadRequestError("E-mail ou senha incorretos.");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new BadRequestError("E-mail ou senha incorretos.");
  }

  const { password: _pw, ...userWithoutPassword } = user;

  const accessToken = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  return { user: userWithoutPassword, accessToken };
}
