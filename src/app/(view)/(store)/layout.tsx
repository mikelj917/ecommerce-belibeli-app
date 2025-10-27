import { SideMenuProvider } from "./contexts/SideMenuMobileContext";
import { ProductDetailsProvider } from "./contexts/ProductDetailsContext";

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProductDetailsProvider>
      <SideMenuProvider>{children}</SideMenuProvider>
    </ProductDetailsProvider>
  );
}
