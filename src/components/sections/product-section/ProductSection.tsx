"use client";

import type { EmblaCarouselType } from "embla-carousel";
import Link from "next/link";
import { useState } from "react";

import type { Product } from "@/features/products/types";

import { ProductSectionActions } from "./ProductSectionActions";
import { ProductSectionCarousel } from "./ProductSectionCarousel";
import { ProductSectionHeader } from "./ProductSectionHeader";

type ProductSectionProps = {
  title: string;
  description?: string;
  products: Product[];
  href?: string;
};

export function ProductSection({
  title,
  description,
  products,
  href = "/products",
}: ProductSectionProps) {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <ProductSectionHeader title={title} description={description} />

        <ProductSectionActions
          onPrevious={() => emblaApi?.scrollPrev()}
          onNext={() => emblaApi?.scrollNext()}
        />
      </div>

      {/* Carousel */}
      <ProductSectionCarousel products={products} onApiReady={setEmblaApi} />

      {/* View All */}
      <div className="flex justify-end">
        <Link
          href={href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          View All →
        </Link>
      </div>
    </section>
  );
}
