"use client";

import { EmptyState, ErrorMessage, Loading } from "@/components/common";
import { ProductSection } from "../product-section/ProductSection";

import { useProducts } from "@/features/products/hooks/use-products";

export function FeaturedProducts() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Failed to load products" />;
  }

  if (!data?.products.length) {
    return <EmptyState title="No products found" />;
  }

  return (
    <section className="py-12">
      <ProductSection
        title="Featured Products"
        description="Discover our latest products"
        products={data.products.slice(0, 12)}
        href="/products"
      />
    </section>
  );
}
