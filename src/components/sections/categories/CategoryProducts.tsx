"use client";

import { ProductSection } from "../product-section/ProductSection";

import { useProducts } from "@/features/products/hooks/use-products";

export function CategoryProducts() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading || isError || !data) {
    return null;
  }

  const products = data.products;

  return (
    <>
      <div className="mb-10">
        <ProductSection
          title="Beauty Products"
          description="Discover beauty and personal care products"
          products={products.filter((product) => product.category === "beauty")}
          href="/categories/beauty"
        />
      </div>

      <div className="mb-10">
        <ProductSection
          title="Fragrances"
          description="Find your favorite fragrances"
          products={products.filter(
            (product) => product.category === "fragrances",
          )}
          href="/categories/fragrances"
        />
      </div>

      <div className="mb-10">
        <ProductSection
          title="Furniture"
          description="Modern furniture for your home"
          products={products.filter(
            (product) => product.category === "furniture",
          )}
          href="/categories/furniture"
        />
      </div>
    </>
  );
}
