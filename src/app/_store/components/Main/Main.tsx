import { CategoriesSection } from "./CategoriesSection/CategoriesSection";
import { FlashSaleSection } from "./FlashSaleSection/FlashSaleSection";

export const Main = () => {
  return (
    <main className="max-w-9xl mx-auto flex flex-col bg-white pb-14 lg:pb-0">
      <CategoriesSection />
      <FlashSaleSection />
    </main>
  );
};
