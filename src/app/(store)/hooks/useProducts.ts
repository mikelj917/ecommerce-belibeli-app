import { useQuery } from "@tanstack/react-query";
import { findProducts } from "../services/productService";

export const useProducts = () => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: findProducts,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60,
  });
};
