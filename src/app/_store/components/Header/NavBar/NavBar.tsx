"use client";
import { SearchInput } from "./SearchInput";
import { headerActionIcons } from "./MenuItems";
import { IconMobileButton } from "@/shared/components/IconMobileButton";
import { HeaderLogo } from "./Logo";
import { SideMenu } from "./SideMenu/SideMenu";
import { useSideMenu } from "@/app/_store/contexts/SideMenuMobile";
import { useWishlistCount } from "@/app/_store/contexts/WishlistCount";

export const NavBar = () => {
  const { isSideMenuMobOpen, setIsSideMenuMobOpen } = useSideMenu();

  const handleActionClick = (key: string) => {
    key === "Menu" ? setIsSideMenuMobOpen(true) : undefined;
  };

  const { wishlistcount } = useWishlistCount();

  return (
    <nav className="flex gap-3 lg:gap-17">
      <HeaderLogo />
      <div className="flex w-full items-center gap-3 lg:gap-6">
        <SearchInput />
        <div className="flex items-center gap-2 lg:gap-4">
          {headerActionIcons.map((action) => {
            return (
              <div className={`flex items-center gap-0.5 ${action.className}`}>
                <IconMobileButton
                  key={action.key}
                  onClick={() => handleActionClick(action.key)}
                >
                  {action.icon}
                </IconMobileButton>
                {action.key === "Heart" && (
                  <span className="text-sm font-bold">{wishlistcount}</span>
                )}
                {action.key === "Cart" && (
                  <span className="text-sm font-bold">{0}</span>
                )}
              </div>
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
