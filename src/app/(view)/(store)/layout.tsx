import { cookies } from "next/headers";
import { CartProvider } from "./contexts/CartContext";
import { SideMenuProvider } from "./contexts/SideMenuMobileContext";

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  const userToken = (await cookies()).get("accessToken");

  return (
    <CartProvider userToken={userToken?.value}>
      <SideMenuProvider>{children}</SideMenuProvider>
    </CartProvider>
  );
}
