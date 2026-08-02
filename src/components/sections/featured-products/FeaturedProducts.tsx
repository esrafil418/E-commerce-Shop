"use client";

import { EmptyState, ErrorMessage, Loading } from "@/components/common";
import { useProducts } from "@/features/products/hooks/use-products";
import { ProductSection } from "../product-section/ProductSection";

export function FeaturedProducts() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Failed to load products" />;
  }

  const products = data?.products.slice(0, 12) ?? [];

  if (!products.length) {
    return <EmptyState title="No products found" />;
  }

  return (
    <section className="py-12">
      <ProductSection
        title="Featured Products"
        description="Discover our latest products"
        products={products}
        href="/products"
      />
    </section>
  );
}
