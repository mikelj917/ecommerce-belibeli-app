import { fakeStoreAPI } from "@/shared/services/fakeStoreAPI";
import { getWishlistIDs } from "@/shared/services/wishListStorage";
import type { Product } from "@/shared/types/Product";
import { useQuery } from "@tanstack/react-query";

// novo tipo para o produto com as vendas
type ProductWithSales = Product & {
  totalQuantity: number;
  soldQuantity: number;
  isWished: boolean;
};

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
    select: (products: Product[]): ProductWithSales[] => {
      const wishListIDs = getWishlistIDs();

      return products.map((product) => {
        const total = Math.floor(Math.random() * (300 - 20) + 20);
        const sold = Math.floor(Math.random() * total);
        const isWished = wishListIDs.includes(product.id);
        return {
          ...product,
          totalQuantity: total,
          soldQuantity: sold,
          isWished: isWished,
        };
      });
    },
  });
};
