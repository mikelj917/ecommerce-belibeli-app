import z from "zod";

export const loginSchema = z.object({
  email: z.email("E-mail inválido.").min(1, "O e-mail é obrigatório."),
  password: z
    .string()
    .min(6, "Senha inválida")
    .regex(/[a-zA-Z]/, "Senha inválida")
    .regex(/\d/, "Senha inválida"),
});

export type loginFormData = z.infer<typeof loginSchema>;
