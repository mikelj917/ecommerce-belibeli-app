import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import { ProductCardSkeleton } from "@/app/(store)/components/ProductCardSkeleton";
import { ProductCard } from "@/app/(store)/components/ProductCard";
import type { Product } from "@prisma/client";
import { SectionHeader } from "./SectionHeader";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@/assets/Icons";

type Props = {
  productsOnSale?: Product[];
  isLoading: boolean;
};

export function ProductsCarousel({ isLoading, productsOnSale }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full overflow-x-auto lg:overflow-x-hidden lg:px-1.5"
    >
      <div className="flex justify-between">
        <SectionHeader />
        <div className="mr-4 hidden gap-3 lg:flex">
          <CarouselPrevious>{<ArrowLongLeftIcon className="size-8" />}</CarouselPrevious>

          <CarouselNext>{<ArrowLongRightIcon className="size-8" />}</CarouselNext>
        </div>
      </div>
      <CarouselContent className="flex gap-4 px-6 py-10">
        {isLoading
          ? [...Array(6)].map((_, index) => <ProductCardSkeleton key={index} grid={false} />)
          : productsOnSale?.map((product) => (
              <CarouselItem key={product.id} className="basis-auto p-0">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
}
