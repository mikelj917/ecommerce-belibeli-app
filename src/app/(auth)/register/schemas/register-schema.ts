import z from "zod";

export const step1Schema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.email("E-mail inválido.").min(1, "O e-mail é obrigatório."),
});

export const step2Schema = z
  .object({
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres."),
    confirmPassword: z.string().min(1, "Confirme a sua senha."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

export const registerSchema = step1Schema.merge(step2Schema);

export type RegisterFormData = z.infer<typeof registerSchema>;
