import { db } from "@/shared/lib/db";
import type { NextRequest } from "next/server";
import { HttpError } from "../../HttpErrors";
import { createCartItem } from "./createCartItem";
import { incrementCartItem } from "./incrementCartItem";

export async function GET(req: Request) {
  const userId = Number(req.headers.get("x-userID"));
  const cart = await db.cart.findUnique({
    where: { userId },
    include: { items: { include: { product: true } } },
  });

  return Response.json(cart);
}

export async function POST(req: NextRequest) {
  const userId = Number(req.headers.get("x-userID"));
  const productId = (await req.json()).productID;

  try {
    const result = await createCartItem({ userId, productId });
    return Response.json(result);
  } catch (error) {
    if (error instanceof HttpError) {
      const { message, status } = error;
      return Response.json({ message }, { status });
    }

    return Response.json({ message: "Erro interno do servidor" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const cartItemID = Number(body.cartItemID);
  const quantity = Number(body.quantity);

  try {
    const cartItem = await incrementCartItem({ cartItemId: cartItemID, quantity });
    return Response.json(cartItem);
  } catch (error) {
    return Response.json({ message: "Erro interno do servidor." }, { status: 500 });
  }
}
