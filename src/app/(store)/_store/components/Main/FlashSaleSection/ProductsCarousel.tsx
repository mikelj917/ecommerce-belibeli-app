import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import { SectionHeader } from "./SectionHeader";
import { ProductCardSkeleton } from "@/app/(store)/components/ProductCardSkeleton";
import { ProductCard } from "@/app/(store)/components/ProductCard";
import { useScreenSize } from "@/shared/hooks/useScreenSize";
import type { Product } from "@prisma/client";

type Props = {
  productsOnSale?: Product[];
  isLoading: boolean;
};

export function ProductsCarousel({ isLoading, productsOnSale }: Props) {
  const { isMobile } = useScreenSize();

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: isMobile,
      }}
      className="relative z-0 w-full"
    >
      <div className="flex justify-between">
        <SectionHeader />
        <div className="mr-4 hidden gap-3 lg:flex">
          <CarouselPrevious className="cursor-pointer rounded-md border-1 px-10 transition-colors active:bg-black active:text-white disabled:opacity-50" />
          <CarouselNext className="cursor-pointer rounded-md border-1 px-10 transition-colors active:bg-black active:text-white disabled:opacity-50" />
        </div>
      </div>
      <CarouselContent
        className="flex gap-4 py-10"
      >
        {isLoading
          ? [...Array(6)].map((_, index) => (
              <CarouselItem key={index} className="basis-auto">
                <ProductCardSkeleton grid={false} />
              </CarouselItem>
            ))
          : productsOnSale?.map((product) => (
              <CarouselItem
                key={product.id}
                className="relative z-10 basis-auto overflow-visible"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
}
