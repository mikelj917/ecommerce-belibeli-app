"use client";
import { useProducts } from "@/app/(store)/hooks/useProducts";
import { ProductCard } from "../../../../components/ProductCard";
import { ProductCardSkeleton } from "../../../../components/ProductCardSkeleton";

export const ForYouSection = () => {
  const { data: products, isLoading } = useProducts();

  const mainProducts = products?.filter((product) => product.id > 13);

  return (
    <section id="forYouSection" className="px-3 py-12">
      <div className="mx-auto lg:container">
        <h1 className="text-center text-xl font-bold">Para você!</h1>
        <section className="grid grid-cols-2 items-center justify-center gap-6 py-10 md:grid-cols-3 lg:grid-cols-4">
          {isLoading
            ? [...Array(9)].map((_, index) => <ProductCardSkeleton key={index} grid={true} />)
            : mainProducts?.map((product) => (
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
                  grid={true}
                />
              ))}
        </section>
      </div>
    </section>
  );
};
