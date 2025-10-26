import { registerSchema } from "@/app/(view)/(auth)/register/schemas/registerSchema";
import { validation } from "../utils/validation";
import { loginSchema } from "@/app/(view)/(auth)/login/schemas/loginSchema";

function register(data: unknown) {
  return validation({ data, schema: registerSchema });
}

function login(data: unknown) {
  return validation({ data, schema: loginSchema });
}

export const authValidate = { register, login };
