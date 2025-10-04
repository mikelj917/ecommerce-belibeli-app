import { SearchInput } from "./SearchInput";
import { headerNavBarIcons } from "./Icons";
import { IconMobileButton } from "@/shared/components/IconMobileButton";
import { HeaderLogo } from "./Logo";

export const NavBar = () => {
  return (
    <nav className="flex gap-3 lg:gap-16">
      <HeaderLogo />
      <div className="flex w-full items-center gap-3 lg:gap-6">
        <SearchInput />
        <div className="flex gap-4">
          {headerNavBarIcons.map((icon) => (
            <IconMobileButton key={icon.key}>{icon.icon}</IconMobileButton>
          ))}
        </div>
      </div>
    </nav>
  );
};
