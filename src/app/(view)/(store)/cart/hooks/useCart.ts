import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart, postCart } from "../../services/cartService";

export const useCart = (userToken?: string) => {
  const findCart = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: !!userToken
  });

  const addToCart = () =>
    useMutation({
      mutationFn: (productID: number) => postCart(productID),
    });

  return { findCart, addToCart };
};
