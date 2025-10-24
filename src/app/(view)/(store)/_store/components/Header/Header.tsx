import { CategoryBar } from "./CategoryBar/CategoryBar";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 bg-neutral-100 p-2 inset-shadow-2xs">
      <div className="mx-auto lg:container">
        <NavBar />
        <CategoryBar />
      </div>
    </header>
  );
};
