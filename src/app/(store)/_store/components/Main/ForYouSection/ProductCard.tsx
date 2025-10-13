"use client";
import { useWishlistCount } from "@/app/(store)/_store/contexts/WishlistCount";
import { HeartIcon, StarIcon } from "@/assets/Icons";
import {
  getWishlistIDs,
  toggleWishlistItem,
} from "@/shared/services/wishListStorage";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  price: number;
  imageURL: string;
  totalQuantity: number;
  soldQuantity: number;
  rating?: {
    rate: number;
    count: number;
  };
  isWished: boolean;
  onSale: boolean;
  grid?: boolean;
};

export const ProductCard = ({
  id,
  title,
  price,
  imageURL,
  totalQuantity,
  soldQuantity,
  rating,
  onSale,
  isWished,
  grid,
}: Props) => {
  const { setWishlistCount } = useWishlistCount();

  const percent = Math.floor((soldQuantity / totalQuantity) * 100);
  const percentString = `${percent}%`;

  const [isWishedState, setIsWishedState] = useState(isWished);

  const handleWishlistToggle = () => {
    setIsWishedState((prev) => !prev);
    toggleWishlistItem(id);
    setWishlistCount(getWishlistIDs().length);
  };

  return (
    <div
      className={`cursor-pointer overflow-hidden rounded-2xl border border-black/20 bg-white shadow-sm transition hover:scale-105 ${grid ? "w-full" : "w-60 flex-shrink-0"}`}
    >
      {/* Image + Wish Button */}
      <div className="relative bg-black/10 p-4">
        <img
          src={imageURL}
          alt={title}
          className="aspect-square w-full object-contain"
        />
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 cursor-pointer rounded-full bg-white p-1 shadow-md transition duration-150 hover:scale-110 active:scale-140`}
          aria-label="Add to favorites"
        >
          <HeartIcon
            className={`h-4 w-4 ${isWishedState ? "fill-red-500 text-red-500" : "fill-gray-500 text-gray-500"}`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-2">
        <h1 className="mb-1 line-clamp-2 h-[35px] text-sm leading-tight font-semibold">
          {title}
        </h1>

        {/* Rating */}
        <div className="mb-1 flex items-center text-xs text-gray-500">
          <StarIcon className="mr-1 h-3 w-3 fill-yellow-400 stroke-yellow-400" />
          <span className="font-bold text-black">
            {rating?.rate.toFixed(1) ?? "–"}
          </span>
          <span className="mx-1">·</span>
          <span>{rating?.count ? `${soldQuantity} vendidos` : "Novo"}</span>
        </div>

        {/* Price */}
        <div>
          {onSale && (
            <strong className="my-1 inline-block rounded-md border-1 border-red-500 p-1 text-xs text-red-500">
              50% off
            </strong>
          )}
          <div className="flex items-center gap-1">
            <strong className="font-semibold text-gray-800">
              R${onSale ? (price - price / 2).toFixed(2) : price.toFixed(2)}
            </strong>
            {onSale && (
              <span className="text-sm text-red-500 line-through">
                R${price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Quantity */}
        {onSale && (
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full border border-zinc-300 bg-gray-200">
              <div
                className={`h-full rounded-full bg-black`}
                style={{ width: percentString }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{`${soldQuantity}/${totalQuantity} Vendidos`}</span>
          </div>
        )}
      </div>
    </div>
  );
};
