import { CategoriesSection } from "./CategoriesSection/CategoriesSection";
import { FlashSaleSection } from "./FlashSaleSection/FlashSaleSection";
import { ForYouSection } from "./ForYouSection/ForYouSection";

export const Main = () => {
  return (
    <main className="max-w-9xl mx-auto flex flex-col bg-white pb-14 lg:pb-0">
      <CategoriesSection />
      <FlashSaleSection />
      <ForYouSection />
    </main>
  );
};
