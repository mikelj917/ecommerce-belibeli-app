"use client";

import { SearchInput } from "./SearchInput";
import { headerActionIcons } from "./MenuItems";
import { IconMobileButton } from "@/shared/components/IconMobileButton";
import { HeaderLogo } from "./Logo";
import { useState } from "react";
import { MenuModal } from "./MenuModal";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex gap-3 lg:gap-17">
      <HeaderLogo />
      <div className="flex w-full items-center gap-3 lg:gap-6">
        <SearchInput />
        <div className="flex gap-4">
          {headerActionIcons.map((icon) => {
            return icon.key === "Menu" ? (
              <IconMobileButton key={icon.key} onClick={() => setIsOpen(true)}>
                {icon.icon}
              </IconMobileButton>
            ) : (
              <IconMobileButton key={icon.key}>{icon.icon}</IconMobileButton>
            );
          })}
        </div>
        <MenuModal
          onClose={() => setIsOpen(false)}
          backgroundClassName={isOpen ? "opacity-100 bg-black/70" : "opacity-0 pointer-events-none"}
          sideMenuClassName={isOpen ? "translate-x-0" : "translate-x-full"}
        />
      </div>
    </nav>
  );
};
