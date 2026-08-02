import Image from "next/image";
import type { Product } from "../types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 font-semibold">{product.title}</h3>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        <p className="font-bold">${product.price}</p>
      </div>
    </article>
  );
}

// ? group:
// Hover card → image zooms
