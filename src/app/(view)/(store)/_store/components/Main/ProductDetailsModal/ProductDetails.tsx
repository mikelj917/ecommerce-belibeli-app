import { useProductDetailsContext } from "@/app/(view)/(store)/contexts/ProductDetailsContext";
import { getPercentDiscount } from "@/shared/utils/product/getPercentDiscount";
import { isSaleActive } from "@/shared/utils/product/isSaleActive";
import { Rating } from "@mui/material";
import { ProductOptions } from "./ProductOptions";
import { QuantitySelector } from "./QuantitySelector";
import { useState } from "react";
import { HeartIcon } from "@/assets/Icons";
import { useCreateCart } from "@/shared/hooks/data/useCartMutations";
import type { BackendOption } from "@/shared/types/Params";
import type { ProductOptionsArray } from "@/shared/types/product";

export type SelectedOptionsState = Record<string, number>;

const formatOptionsForBackend = (selectedOptions: SelectedOptionsState): BackendOption[] => {
  return Object.entries(selectedOptions).map(([optionIdStr, optionValueId]) => ({
    optionId: parseInt(optionIdStr, 10), // Converte a chave (string) de volta para número
    optionValueId: optionValueId,
  }));
};

const getInitialState = (options: ProductOptionsArray): SelectedOptionsState => {
  return options.reduce((acc, option) => {
    acc[option.id.toString()] = option.values[0]?.id || 0;
    return acc;
  }, {} as SelectedOptionsState);
};

export const ProductDetails = () => {
  const { selectedProduct, setIsProductDetailsModalOpen } = useProductDetailsContext();

  if (!selectedProduct) {
    return <p className="text-red-500">Falha ao carregar os detalhes do produto</p>;
  }

  const { mutate } = useCreateCart();
  const [count, setCount] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsState>(() =>
    getInitialState(selectedProduct.productOption),
  );

  const { id, image, title, ratingRate, ratingCount, price, promotionPrice, productOption } =
    selectedProduct;

  const handleSelectOption = (optionId: number, valueId: number) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionId.toString()]: valueId,
    }));
  };

  const handleAddToCart = () => {
    const productOptionsPayload = formatOptionsForBackend(selectedOptions);

    mutate({ productID: id, quantity: count, productOptions: productOptionsPayload });
    setIsProductDetailsModalOpen(false);
  };

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  const isProductOnSale = isSaleActive(selectedProduct);
  const percentDiscount = getPercentDiscount(selectedProduct);

  return (
    <div className="flex h-full gap-10">
      <div className="flex-1">
        <div className="bg-black/10 p-4">
          <img src={image} alt={title} className="aspect-square w-full object-contain" />
        </div>
      </div>
      <div>
        <div className="flex flex-1 flex-col">
          <h1 className="w-md truncate">{title}</h1>

          {/* Rating */}
          <div className="my-3 flex items-center gap-2">
            <Rating defaultValue={ratingRate} precision={0.1} size="small" readOnly={true} />
            <span className="text-sm text-zinc-400">{`(${ratingCount} Avaliações)`}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 border-b-1 border-zinc-300 pb-3">
            <strong className="text-2xl font-semibold text-gray-800">
              R$
              {isProductOnSale ? Number(promotionPrice) : Number(price).toFixed(2)}
            </strong>
            {isProductOnSale && (
              <>
                <span className="rounded-sm bg-red-500 p-0.5 text-sm font-bold text-white">
                  {`-${percentDiscount}%`}
                </span>
                <span className="text-sm text-red-500 line-through">
                  R${Number(price).toFixed(2)}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="max-h-[343px] flex-1 overflow-y-auto pt-3">
          {/* Product Options */}
          {productOption.length > 0 && (
            <ProductOptions
              key={id}
              productOptions={productOption}
              onSelectOption={handleSelectOption}
              selectedOptions={selectedOptions}
            />
          )}

          {/* Increment/Decrement Button */}
          <QuantitySelector
            count={count}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
        </div>
      </div>

      <div className="gap- absolute right-0 bottom-0 mb-8 flex w-full justify-center p-2">
        <div className="flex-1"></div>
        <div className="flex flex-1 items-center justify-center gap-6 bg-white">
          <button
            onClick={handleAddToCart}
            className="cursor-pointer bg-black px-10 py-5 font-black text-white uppercase hover:bg-black/60"
          >
            Adicionar ao Carrinho
          </button>

          <button className="group cursor-pointer rounded-full border-1 border-black/10 p-3">
            {<HeartIcon className="size-10 group-hover:scale-105" />}
          </button>
        </div>
      </div>
    </div>
  );
};
