import { MobileBottomNav } from "./MobileBottomNav/MobileBottomNav";
import { Header } from "./Header/Header";

export const StorePage = () => {
  return (
    <div className="container m-auto">
      <div>
        <Header />
        <MobileBottomNav />
      </div>
    </div>
  );
};
