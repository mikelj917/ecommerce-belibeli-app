"use client";
import { useProducts } from "@/app/_store/hooks/useProducts";
import { SectionHeader } from "./SectionHeader";
import { ProductCard } from "../ForYouSection/ProductCard";
import { ArrowLongLeft, ArrowLongRight } from "@/assets/Icons";
import { useRef, useState } from "react";

export const FlashSaleSection = () => {
  const { data: products } = useProducts();
  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!products) return;
  const totalContentWidth = products?.length * 256;

  const maxScroll =
    totalContentWidth - (containerRef.current?.offsetWidth || 0);

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

  return (
    <section id="flashSaleSection" className="bg-neutral-100 px-3 py-12">
      <div className="mx-auto lg:container">
        <div className="flex justify-between">
          <SectionHeader />
          <div className="mr-4 hidden gap-3 lg:flex">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className="cursor-pointer rounded-md border-1 px-3 transition-colors active:bg-black active:text-white"
            >
              {<ArrowLongLeft />}
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className="cursor-pointer rounded-md border-1 px-3 transition-colors active:bg-black active:text-white"
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
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                imageURL={product.image}
                price={product.price}
                title={product.title}
                totalQuantity={product.totalQuantity}
                soldQuantity={product.soldQuantity}
                rating={product.rating}
                onSale={true}
                grid={true}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
