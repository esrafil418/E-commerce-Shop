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
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType | null>(
    null,
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <ProductSectionHeader title={title} description={description} />

        <ProductSectionActions
          onPrevious={() => carouselApi?.scrollPrev()}
          onNext={() => carouselApi?.scrollNext()}
        />
      </div>

      <ProductSectionCarousel products={products} onApiReady={setCarouselApi} />

      <div className="flex justify-end">
        <Link
          href={href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View All →
        </Link>
      </div>
    </section>
  );
}
