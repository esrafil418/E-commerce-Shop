"use client";

import { Container } from "@/components/common/Container";
import { ProductList } from "@/features/products/components/ProductList";
import { useProducts } from "@/features/products/hooks/use-products";

export function FeaturedProducts() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <section className="py-16">
        <Container>Loading products...</Container>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-16">
        <Container>Failed to load products.</Container>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="py-16">
        <Container>No products found.</Container>
      </section>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl font-bold">Featured Products</h2>

          <p className="text-muted-foreground">Discover our latest products.</p>
        </div>

        <ProductList products={data.products.slice(0, 8)} />
      </Container>
    </section>
  );
}
