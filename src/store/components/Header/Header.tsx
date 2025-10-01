import { CategoryBar } from "./CategoryBar/CategoryBar";
import { Logo } from "../Logo";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-2 h-25">
      <div className="flex gap-3 mb-5">
        <Logo />
        <NavBar />
      </div>
      <CategoryBar />
    </header>
  );
};
