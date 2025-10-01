import { MobileBottomNav } from "./Mobile/BottomNav/BottomNav";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { HeroBanner } from "./HeroBanner";

export const StorePage = () => {
  return (
    <div className="relative z-10">
      <Header />
      <HeroBanner />
      <Main />
      <MobileBottomNav />
    </div>
  );
};
