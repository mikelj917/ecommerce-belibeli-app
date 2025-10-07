import { HeartIcon, StarIcon } from "@/assets/Icons";

type Props = {
  title: string;
  price: number;
  imageURL: string;
  rating?: {
    rate: number;
    count: number;
  };
  toWish?: () => void;
  onSale?: boolean;
};

export const ProductCard = ({
  title,
  price,
  imageURL,
  rating,
  toWish,
  onSale,
}: Props) => {
  const productQuantity = Math.floor(Math.random() * (300 - 20) + 20);
  const productsSold = Math.floor(Math.random() * productQuantity);
  const percent = Math.floor((productsSold / productQuantity) * 100);
  const percentString = `${percent}%`;

  return (
    <div className="w-60 cursor-pointer overflow-hidden rounded-2xl border border-black/20 bg-white shadow-sm transition hover:scale-105">
      {/* Image + Favorite Button */}
      <div className="relative bg-black/10 p-4">
        <img
          src={imageURL}
          alt={title}
          className="aspect-square w-full object-contain"
        />
        <button
          onClick={toWish}
          className="absolute top-2 right-2 cursor-pointer rounded-full bg-white p-1 shadow-md transition hover:scale-110"
          aria-label="Add to favorites"
        >
          <HeartIcon className="h-4 w-4 fill-gray-500 text-gray-500" />
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
          <span>{rating?.count ? `${productsSold} vendidos` : "Novo"}</span>
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
              R${price.toFixed(2)}
            </strong>
            {onSale && (
              <span className="text-sm text-red-500 line-through">
                R${(price - price / 2).toFixed(2)}
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
            <span className="text-xs text-gray-500">{`${productsSold}/${productQuantity} Vendidos`}</span>
          </div>
        )}
      </div>
    </div>
  );
};
