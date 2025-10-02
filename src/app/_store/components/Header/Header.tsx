import { CategoryBar } from "./CategoryBar/CategoryBar";
import { Logo } from "../../../../shared/components/Logo";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 bg-white p-2 inset-shadow-2xs">
      <div className="flex gap-3">
        <Logo />
        <NavBar />
      </div>
      <CategoryBar />
    </header>
  );
};
