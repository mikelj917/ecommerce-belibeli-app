import { SearchInput } from "./SearchInput";
import { headerNavBarIcons } from "./Icons";
import { IconMobileButton } from "@/shared/components/IconMobileButton";

export const NavBar = () => {
  return (
    <nav className="flex w-full items-center gap-3">
      <SearchInput />
      <div className="flex gap-4">
        {headerNavBarIcons.map((icon) => (
          <IconMobileButton key={icon.key}>{icon.icon}</IconMobileButton>
        ))}
      </div>
    </nav>
  );
};
