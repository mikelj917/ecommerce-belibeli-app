"use client";
import { getWishlistIDs } from "@/app/(store)/services/wishListStorage";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type WishlistCountContextType = {
  wishlistcount: number;
  setWishlistCount: (wishlistCount: number | ((prev: number) => number)) => void;
};

const WishlistCountContext = createContext<WishlistCountContextType | undefined>(undefined);

export const WishlistCountProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistcount, setWishlistCount] = useState(0);

  useEffect(() => {
    setWishlistCount(getWishlistIDs().length);
  }, []);

  return (
    <WishlistCountContext.Provider value={{ wishlistcount, setWishlistCount }}>
      {children}
    </WishlistCountContext.Provider>
  );
};

export const useWishlistCount = () => {
  const context = useContext(WishlistCountContext);
  if (context === undefined) {
    throw new Error("useSideMenu must be used within a SideMenuProvider");
  }
  return context;
};
