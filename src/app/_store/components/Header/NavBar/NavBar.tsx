"use client";

import { SearchInput } from "./SearchInput";
import { headerActionIcons } from "./MenuItems";
import { IconMobileButton } from "@/shared/components/IconMobileButton";
import { HeaderLogo } from "./Logo";
import { SideMenu } from "./SideMenu/SideMenu";
import { useSideMenu } from "@/app/_store/contexts/SideMenuMobile";

export const NavBar = () => {
  const { isSideMenuMobOpen, setIsSideMenuMobOpen } = useSideMenu();

  const handleActionClick = (key: string) => {
    key === "Menu" ? setIsSideMenuMobOpen(true) : undefined;
  };

  return (
    <nav className="flex gap-3 lg:gap-17">
      <HeaderLogo />
      <div className="flex w-full items-center gap-3 lg:gap-6">
        <SearchInput />
        <div className="flex gap-4">
          {headerActionIcons.map((icon) => {
            let visibilityClass = "";

            if (icon.key === "Menu") {
              visibilityClass = "lg:hidden";
            } else if (icon.key === "Profile") {
              visibilityClass = "hidden lg:inline-block"
            }
            return (
              <IconMobileButton
                key={icon.key}
                onClick={() => handleActionClick(icon.key)}
                className={visibilityClass}
              >
                {icon.icon}
              </IconMobileButton>
            );
          })}
        </div>
        <SideMenu
          onClose={() => setIsSideMenuMobOpen(false)}
          backgroundClassName={
            isSideMenuMobOpen
              ? "opacity-100 bg-black/70"
              : "opacity-0 pointer-events-none"
          }
          sideMenuClassName={
            isSideMenuMobOpen ? "translate-x-0" : "translate-x-full"
          }
        />
      </div>
    </nav>
  );
};
