import { MobileBottomNav } from "./MobileBottomNav/BottomNav";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { HeroBanner } from "./Banner/HeroBanner";

export const StorePage = () => {
  return (
    <div className="relative z-10 overflow-x-hidden">
      <Header />
      <HeroBanner />
      <Main />
      <MobileBottomNav />
    </div>
  );
};
