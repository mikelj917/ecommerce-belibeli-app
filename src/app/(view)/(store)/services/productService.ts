import { API } from "@/shared/services/API";
import type { ProductInclude } from "@/shared/types/Includes";

export const getProducts = async (): Promise<{ products: ProductInclude[]; count: number }> => {
  const response = await API.get("/product");
  return response.data;
};
