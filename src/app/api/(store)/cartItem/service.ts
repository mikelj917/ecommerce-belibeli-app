import { db } from "@/shared/lib/db";
import { ConflictError } from "../../HttpErrors";

type CreateParams = {
  userId: number;
  productId: number;
  quantity: number;
};

export async function create({ userId, productId, quantity }: CreateParams) {
  const existingCart = await db.cart.findUnique({ where: { userId } });

  if (!existingCart) {
    const { id } = await db.cart.create({ data: { userId } });
    const cartItem = await db.cartItem.create({
      data: { cartId: id, productId, quantity },
    });

    return { cartItem };
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
      quantity,
    },
  });

  return { cartItem };
}

type UpdateParams = {
  cartItemId: number;
  quantity: number;
};

export async function update(props: UpdateParams) {
  const { cartItemId, quantity } = props;

  const cartItem = await db.cartItem.update({
    where: { id: cartItemId },
    data: { quantity: { increment: quantity } },
  });

  return cartItem;
}

export const cartItemService = { create, update };
