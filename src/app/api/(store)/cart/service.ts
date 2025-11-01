import { db } from "@/shared/lib/db";

export async function get(userId: number) {
  const cart = await db.cart.findUnique({
    where: { userId },
    include: { items: { include: { product: true, productOptions: true } } },
  });

  return cart;
}

export const cartService = { get };
