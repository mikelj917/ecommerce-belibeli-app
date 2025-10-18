import { BadRequestError } from "../../HttpErrors";
import type { LoginBody } from "./LoginBodyType";

export function loginValidate({ email, password }: LoginBody) {
  if (!email || !password) {
    throw new BadRequestError("Todos os campos são obrigatórios.");
  }
  return { email, password };
}
