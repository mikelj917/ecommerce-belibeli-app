import { cartService } from "./service";

export async function GET(req: Request) {
  const userId = Number(req.headers.get("x-userID"));

  const cart = cartService.get(userId);

  return Response.json(cart);
}
