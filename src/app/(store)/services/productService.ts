import { API } from "@/shared/services/API";
import type { Product } from "@prisma/client";

export const findProducts = async (): Promise<{ products: Product[]; count: number }> => {
  const response = await API.get("/product");
  return response.data;
};
