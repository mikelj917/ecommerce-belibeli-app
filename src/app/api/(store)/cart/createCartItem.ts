import { db } from "@/shared/lib/db";
import { ConflictError } from "../../HttpErrors";

type CreateCartItemProps = {
  userId: number;
  productId: number;
};

export async function createCartItem({ userId, productId }: CreateCartItemProps) {
  const existingCart = await db.cart.findUnique({
    where: { userId },
  });

  if (!existingCart) {
    const { id: cartId } = await db.cart.create({ data: { userId } });
    const cartItem = await db.cartItem.create({
      data: { cartId, productId, quantity: 1 },
    });

    return cartItem;
  }

  const existingItem = await db.cartItem.findUnique({
    where: {
      cartId_productId: {
        cartId: existingCart.id,
        productId,
      },
    },
  });

  if (existingItem) {
    throw new ConflictError("Este item já está no carrinho.");
  }

  const cartItem = await db.cartItem.create({
    data: {
      cartId: existingCart.id,
      productId,
      quantity: 1,
    },
  });

  return cartItem;
}
