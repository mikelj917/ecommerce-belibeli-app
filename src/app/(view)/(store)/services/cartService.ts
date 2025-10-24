import { API } from "@/shared/services/API";
import type { CartInclude } from "@/shared/types/Includes";

export const getCart = async (): Promise<CartInclude> => {
  const response = await API.get("/cart");
  return response.data;
};

export const postCart = async (productID: number): Promise<CartInclude> => {
  const response = await API.post("/cart", { productID });
  return response.data;
};
