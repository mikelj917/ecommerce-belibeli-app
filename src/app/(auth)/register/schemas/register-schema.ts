import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.email("E-mail inválido.").min(1, "O e-mail é obrigatório."),
  password: z
    .object({
      password: z
        .string()
        .min(6, "A senha precisa ter pelo menos 6 caracteres.")
        .regex(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra.")
        .regex(/\d/, "A senha deve conter pelo menos um número."),
      confirmPassword: z.string().min(1, "Confirme a sua senha."),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          message: "As senhas não coincidem.",
          code: "custom",
          path: ["confirmPassword"],
        });
      }
    }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
