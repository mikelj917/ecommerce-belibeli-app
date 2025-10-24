"use client";
import { CartProvider } from "./contexts/CartContext";
import { SideMenuProvider } from "./contexts/SideMenuMobileContext";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <SideMenuProvider>{children}</SideMenuProvider>
    </CartProvider>
  );
}
