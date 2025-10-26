import z from "zod";

const create = z.object({
  userId: z.coerce.number("Valor inválido.").positive("O número deve ser maior que zero."),
  productId: z.coerce.number("Valor inválido.").positive("O número deve ser maior que zero."),
});

const update = z.object({
  cartItemId: z.coerce.number("Valor inválido.").positive("O número deve ser maior que zero."),
  quantity: z.coerce.number("Valor inválido."),
});

export const cartItemSchema = { create, update };
