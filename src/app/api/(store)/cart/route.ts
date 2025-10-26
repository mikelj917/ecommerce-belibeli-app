import { db } from "@/shared/lib/db";

export async function GET(req: Request) {
  const userId = Number(req.headers.get("x-userID"));
  const cart = await db.cart.findUnique({
    where: { userId },
    include: { items: { include: { product: true } } },
  });

  return Response.json(cart);
}
