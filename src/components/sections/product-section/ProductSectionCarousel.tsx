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
            className="min-w-0 pl-4 shrink-0 basis-[85%] min-[480px]:basis-[60%] sm:basis-[45%] lg:basis-[30%] xl:basis-[24%]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
