"use client";
import { SideMenuProvider } from "./_store/contexts/SideMenuMobile";
import { WishlistCountProvider } from "./_store/contexts/WishlistCount";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideMenuProvider>
      <WishlistCountProvider>{children}</WishlistCountProvider>
    </SideMenuProvider>
  );
}
