import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
