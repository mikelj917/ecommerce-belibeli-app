"use client";
import type { ProductInclude } from "@/shared/types/Includes";
import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "../cart/hooks/useCart";

type CartContextType = {
  handleCartClick: (product: ProductInclude) => void;
  selectedProduct: ProductInclude | null;
  isProductDetailsModalOpen: boolean;
  setIsProductDetailsModalOpen: (open: boolean) => void;
};

type CartProviderType = {
  children: React.ReactNode;
  userToken: string | undefined;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children, userToken }: CartProviderType) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductInclude | null>(null);
  const [isProductDetailsModalOpen, setIsProductDetailsModalOpen] = useState(false);
  const { addToCart } = useCart(userToken);
  const { mutate } = addToCart();

  const handleCartClick = (product: ProductInclude) => {
    if (product.ProductOption.length > 0) {
      setSelectedProduct(product);
      setIsProductDetailsModalOpen(true);
      return;
    }
    if (!userToken) {
      window.location.href = "/login?redirect=/cart";
      return;
    }
    mutate(product.id);
  };

  useEffect(() => {
    if (isProductDetailsModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isProductDetailsModalOpen]);

  return (
    <CartContext.Provider
      value={{
        handleCartClick,
        selectedProduct,
        isProductDetailsModalOpen,
        setIsProductDetailsModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext must be used within a CartProvider");
  return context;
};
