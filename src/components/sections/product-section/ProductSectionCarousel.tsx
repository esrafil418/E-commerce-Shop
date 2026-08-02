"use client";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

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

  useEffect(() => {
    if (emblaApi) {
      onApiReady?.(emblaApi);
    }
  }, [emblaApi, onApiReady]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="-ml-4 flex">
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
