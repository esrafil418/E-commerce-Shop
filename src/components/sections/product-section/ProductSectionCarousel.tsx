"use client";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { ProductCard } from "@/features/products/components/ProductCard";
import type { Product } from "@/features/products/types";

type ProductSectionCarouselProps = {
  products: Product[];
  onApiReady?: (api: EmblaCarouselType) => void;
};

export function ProductSectionCarousel({
  products,
  onApiReady,
}: ProductSectionCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-0 shrink-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
