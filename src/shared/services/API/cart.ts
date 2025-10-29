import { API } from "@/shared/services/API/API";
import type { CartInclude } from "@/shared/types/Includes";
import type { CreateCartParams } from "@/shared/types/Params";
import type { CartItem } from "@prisma/client";

async function findCart() {
  const response = await API.get<CartInclude>("/cart");
  return response.data;
}

async function createCart(Params: CreateCartParams) {
  const { productID, quantity, productOptions } = Params;
  const response = await API.post<CartItem>("/cartItem", { productID, quantity, productOptions });
  return response.data;
}

export const cartService = { findCart, createCart };
