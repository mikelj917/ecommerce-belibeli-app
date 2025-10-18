import { BadRequestError } from "../../HttpErrors";
import type { RegisterBody } from "./RegisterBodyType";

export function registerValidate({ name, email, password, confirm_password }: RegisterBody) {
  if (!name || !email || !password) {
    throw new BadRequestError("Todos os campos são obrigatórios.");
  }

  if (password !== confirm_password) {
    throw new BadRequestError("As senhas não coincidem.");
  }

  return { name, email, password };
}
