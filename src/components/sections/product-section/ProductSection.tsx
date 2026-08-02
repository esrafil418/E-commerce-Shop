"use client";

import type { EmblaCarouselType } from "embla-carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Container } from "@/components/common";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/features/products/types";
import { cn } from "@/lib/utils";

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
  const [carouselApi, setCarouselApi] =
    useState<EmblaCarouselType | null>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);


  const updateScrollButtons = useCallback(() => {
    if (!carouselApi) return;

    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, [carouselApi]);


  useEffect(() => {
    if (!carouselApi) return;

    updateScrollButtons();

    carouselApi.on("select", updateScrollButtons);
    carouselApi.on("reInit", updateScrollButtons);

    return () => {
      carouselApi.off("select", updateScrollButtons);
      carouselApi.off("reInit", updateScrollButtons);
    };
  }, [carouselApi, updateScrollButtons]);


  return (
    <section className="space-y-6">
      <Container>
        <div className="mb-4 flex items-center justify-between">
          <ProductSectionHeader
            title={title}
            description={description}
          />

          <ProductSectionActions
            onPrevious={() => carouselApi?.scrollPrev()}
            onNext={() => carouselApi?.scrollNext()}
            previousDisabled={!canScrollPrev}
            nextDisabled={!canScrollNext}
          />
        </div>


        <ProductSectionCarousel
          products={products}
          onApiReady={setCarouselApi}
        />


        <div className="mt-6 flex justify-end">
          <Link
            href={href}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "gap-2",
            )}
          >
            View All
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}