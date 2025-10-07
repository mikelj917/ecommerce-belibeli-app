"use client";
import { useProducts } from "@/app/_store/hooks/useProducts";
import { SectionHeader } from "./SectionHeader";
import { ProductCard } from "../ProductsSection/ProductCard";

export const FlashSaleSection = () => {
  const { data: products } = useProducts();

  return (
    <section id="flashSaleSection" className="bg-neutral-100 px-3 py-12">
      <div className="mx-auto lg:container">
        <SectionHeader />
        <section className="overflow-x-auto lg:px-1.5">
          <div className="grid auto-cols-max grid-flow-col grid-rows-1 lg:grid-rows-2 gap-4 py-10">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                imageURL={product.image}
                price={product.price}
                title={product.title}
                rating={product.rating}
                onSale={true}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
