import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/formatPrice";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <article
        className="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3">
            -{Math.round(product.discountPercentage)}%
          </Badge>
        </div>

        <div className="space-y-3 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {product.category}
          </p>
          <h3 className="line-clamp-1 text-lg font-semibold">
            {product.title}
          </h3>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />

              <span className="text-sm">{product.rating.toFixed(1)}</span>
            </div>
            {product.stock > 0 ? (
              <p className="text-sm text-green-600">{product.stock} in stock</p>
            ) : (
              <p className="text-sm text-red-600">Out of stock</p>
            )}
          </div>
          <p className="font-bold">{formatPrice(product.price)}</p>
        </div>
      </article>
    </Link>
  );
}

// ? group:
// Hover card → image zooms
