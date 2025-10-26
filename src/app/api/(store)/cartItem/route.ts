import { NextRequest } from "next/server";
import { cartItemValidate } from "./validate";
import { cartItemService } from "./service";
import { handleError } from "../../utils/handleError";
import { handleResponse } from "../../utils/handleResponse";

export async function POST(req: NextRequest) {
  const userId = req.headers.get("x-userID");
  const productId = (await req.json()).productId;

  try {
    const validatedData = cartItemValidate.create({ userId, productId });
    const result = await cartItemService.create(validatedData);
    return Response.json(result.cartItem);
  } catch (error) {
    const dataResponse = handleError(error);
    return handleResponse(dataResponse);
  }
}

export async function PATCH(req: Request) {
  try {
    const validatedBody = cartItemValidate.update(await req.json());
    const cartItem = await cartItemService.update(validatedBody);
    return Response.json(cartItem);
  } catch (error) {
    const dataResponse = handleError(error);
    return handleResponse(dataResponse);
  }
}
