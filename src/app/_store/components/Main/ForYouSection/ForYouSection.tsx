"use client";
import { useProducts } from "@/app/_store/hooks/useProducts";
import { ProductCard } from "./ProductCard";

export const ForYouSection = () => {
  const { data: products } = useProducts();

  const mainProducts = products?.filter((product) => product.id > 13);

  return (
    <section id="forYouSection" className="px-3 py-12">
      <div className="mx-auto lg:container">
        <h1 className="text-center text-xl font-bold">Para você!</h1>
        <section className="grid items-center justify-center gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mainProducts?.map((product) => (
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
              onSale={false}
            />
          ))}
        </section>
      </div>
    </section>
  );
};
