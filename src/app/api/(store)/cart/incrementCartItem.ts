import { db } from "@/shared/lib/db";

type IncrementCartItemProps = {
  cartItemId: number;
  quantity: number;
};

export async function incrementCartItem(props: IncrementCartItemProps) {
  const { cartItemId, quantity } = props;

  const cartItem = await db.cartItem.update({
    where: { id: cartItemId },
    data: { quantity: { increment: quantity } },
  });

  return cartItem;
}
