"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import {
  Container,
  EmptyState,
  ErrorMessage,
  Loading,
  PageHeader,
} from "@/components/common";
import { buttonVariants } from "@/components/ui/button";
import { ProductGridSkeleton } from "@/features/products/components/ProductGridSkeleton";
import { ProductList } from "@/features/products/components/ProductList";
import { useProducts } from "@/features/products/hooks/use-products";
import { PRODUCTS_PAGE_SIZE, productsHref } from "@/lib/products-search";
import { cn } from "@/lib/utils";

function ProductsContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const page = Math.max(1, Number(searchParams.get("page") ?? 1) || 1);
  const skip = (page - 1) * PRODUCTS_PAGE_SIZE;

  const { data, isLoading, isError } = useProducts({
    q: q || undefined,
    limit: PRODUCTS_PAGE_SIZE,
    skip,
  });

  const totalPages = Math.max(1, Math.ceil((data?.total ?? 0) / PRODUCTS_PAGE_SIZE));

  return (
    <Container className="py-10">
      <PageHeader
        title="Products"
        description="Browse the DummyJSON catalog. Search and paginate without leaving the storefront."
      />

      {isLoading ? (
        <ProductGridSkeleton />
      ) : isError ? (
        <ErrorMessage message="Failed to load products" />
      ) : !data?.products.length ? (
        <EmptyState
          title="No products found"
          description={q ? `Nothing matched “${q}”.` : "The catalog is empty."}
        />
      ) : (
        <>
          <p className="mb-6 text-sm text-muted-foreground">
            Showing {data.products.length} of {data.total} products
            {q ? ` for “${q}”` : ""}
          </p>
          <ProductList products={data.products} />
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link
              href={productsHref({ q, page: page - 1 })}
              className={cn(
                buttonVariants({ variant: "outline" }),
                page <= 1 && "pointer-events-none opacity-50",
              )}
              aria-disabled={page <= 1}
            >
              Previous
            </Link>
            <span className="text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
            <Link
              href={productsHref({ q, page: page + 1 })}
              className={cn(
                buttonVariants({ variant: "outline" }),
                page >= totalPages && "pointer-events-none opacity-50",
              )}
              aria-disabled={page >= totalPages}
            >
              Next
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsContent />
    </Suspense>
  );
}
