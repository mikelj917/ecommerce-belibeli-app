export const getWishlistIDs = (): number[] => {
  if (typeof window === "undefined") return [];
  const json = localStorage.getItem("wishlist");
  return json ? JSON.parse(json) : [];
};

const saveWishlistIds = (IDs: number[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("wishlist", JSON.stringify(IDs));
  }
};

export const toggleWishlistItem = (productID: number) => {
  const currentIDs = getWishlistIDs();
  const isCurrentlyWished = currentIDs.includes(productID);

  let newIDs: number[];

  if (isCurrentlyWished) {
    newIDs = currentIDs.filter((id) => id !== productID);
  } else {
    newIDs = [...currentIDs, productID];
  }

  saveWishlistIds(newIDs);

  return newIDs;
};
