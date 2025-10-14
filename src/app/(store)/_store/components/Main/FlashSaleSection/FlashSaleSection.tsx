"use client";
import { useProducts } from "@/app/(store)/_store/hooks/useProducts";
import { SectionHeader } from "./SectionHeader";
import { ProductCard } from "../../../../_components/ProductCard";
import { ArrowLongLeft, ArrowLongRight } from "@/assets/Icons";
import { useState, useRef, useEffect, useCallback } from "react";
import { ProductCardSkeleton } from "../../../../_components/ProductCardSkeleton";

const ITEM_WIDTH_PX = 256; // Largura do Card (w-60 = 240px) + Gap (gap-4 = 16px) ou gap-6 = 262px

export const FlashSaleSection = () => {
  const { data: products, isLoading, isError } = useProducts();
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const productsOnSale = products?.filter((product) => product.id < 13);

  const calculateMaxScroll = useCallback(() => {
    if (!containerRef.current || productsOnSale?.length === 0) return 0;
    const totalContentWidth = productsOnSale!.length * ITEM_WIDTH_PX;
    const visibleWidth = containerRef.current.offsetWidth;
    return Math.max(0, totalContentWidth - visibleWidth);
  }, [productsOnSale]);

  const maxScroll = calculateMaxScroll();

  useEffect(() => {
    const handleResize = () =>
      setScrollOffset((prev) => Math.min(prev, calculateMaxScroll()));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateMaxScroll]);

  const handleNext = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    setScrollOffset((prev) => Math.min(prev + containerWidth, maxScroll));
  };

  const handlePrev = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    setScrollOffset((prev) => Math.max(prev - containerWidth, 0));
  };

  const canGoNext = scrollOffset < maxScroll;
  const canGoPrev = scrollOffset > 0;

  if (isError)
    return (
      <section className="p-12 text-center text-red-600">
        Erro ao carregar ofertas.
      </section>
    );

  return (
    <section id="flashSaleSection" className="bg-neutral-100 px-3 py-12">
      <div className="mx-auto lg:container">
        <div className="flex justify-between">
          <SectionHeader />
          <div className="mr-4 hidden gap-3 lg:flex">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev || isLoading}
              className="cursor-pointer rounded-md border-1 px-3 transition-colors active:bg-black active:text-white disabled:opacity-50"
            >
              {<ArrowLongLeft />}
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext || isLoading}
              className="cursor-pointer rounded-md border-1 px-3 transition-colors active:bg-black active:text-white disabled:opacity-50"
            >
              {<ArrowLongRight />}
            </button>
          </div>
        </div>
        <section
          ref={containerRef}
          className="overflow-x-auto lg:overflow-x-hidden lg:px-1.5"
        >
          <div
            className="flex gap-4 py-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${scrollOffset}px)`,
            }}
          >
            {isLoading
              ? [...Array(6)].map((_, index) => (
                  <ProductCardSkeleton key={index} grid={false} />
                ))
              : productsOnSale?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    imageURL={product.image}
                    price={product.price}
                    title={product.title}
                    totalQuantity={product.totalQuantity}
                    soldQuantity={product.soldQuantity}
                    rating={product.rating}
                    isWished={product.isWished}
                    onSale={true}
                  />
                ))}
          </div>
        </section>
      </div>
    </section>
  );
};
