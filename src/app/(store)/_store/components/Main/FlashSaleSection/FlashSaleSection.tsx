"use client";
import { useProducts } from "@/app/(store)/hooks/useProducts";
import { SectionHeader } from "./SectionHeader";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@/assets/Icons";
import { useState, useRef, useEffect, useCallback } from "react";
import { ProductsCarousel } from "./ProductsCarousel";
import { CarouselNext, CarouselPrevious } from "./Carousel";

const ITEM_WIDTH_PX = 270;

export const FlashSaleSection = () => {
  const { data, isLoading, isError } = useProducts();
  const [scrollOffset, setScrollOffset] = useState(0);

  const productsOnSale = data?.products.filter((product) => product.promotionEnd !== null);

  const containerRef = useRef<HTMLDivElement>(null);

  const calculateMaxScroll = useCallback(() => {
    if (!containerRef.current || productsOnSale?.length === 0) return 0;
    const totalContentWidth = productsOnSale?.length! * ITEM_WIDTH_PX;
    const visibleWidth = containerRef.current.offsetWidth;
    return Math.max(0, totalContentWidth - visibleWidth);
  }, [productsOnSale]);

  const maxScroll = calculateMaxScroll();

  useEffect(() => {
    const handleResize = () => setScrollOffset((prev) => Math.min(prev, calculateMaxScroll()));
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

  if (isError) {
    return <section className="p-12 text-center text-red-600">Erro ao carregar ofertas.</section>;
  }

  return (
    <section id="flashSaleSection" className="bg-neutral-100 px-3 py-12">
      <div className="mx-auto lg:container">
        <ProductsCarousel isLoading={isLoading} productsOnSale={productsOnSale} />
      </div>
    </section>
  );
};
