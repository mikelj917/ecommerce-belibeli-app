import { API } from "@/shared/services/API/API";
import type { CartInclude } from "@/shared/types/Includes";
import type { CartItem } from "@prisma/client";

async function findCart() {
  const response = await API.get<CartInclude>("/cart");
  return response.data;
}

async function createCart(productID: number) {
  const response = await API.post<CartItem>("/cart", { productID });
  return response.data;
}

export const cartService = { findCart, createCart };
