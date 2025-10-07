"use client";
import { fakeStoreAPI } from "@/shared/services/fakeStoreAPI";
import type { Product } from "@/shared/types/Product";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fakeStoreAPI.get("/products");
  return response.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60,
  });
};
