import { cartService } from "@/shared/services/API/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCart = () => {
  const querClient = useQueryClient();

  return useMutation({
    mutationFn: (productID: number) => cartService.createCart(productID),
    onSuccess: () => {
      querClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
