"use client";

import Link from "next/link";

import {
  Container,
  EmptyState,
  ErrorMessage,
  Loading,
  PageHeader,
} from "@/components/common";
import { useCategories } from "@/features/categories/hooks/use-categories";

export default function CategoriesPage() {
  const { data, isLoading, isError } = useCategories();

  return (
    <Container className="py-10">
      <PageHeader
        title="Categories"
        description="Every DummyJSON product category, ready to browse."
      />

      {isLoading ? (
        <Loading message="Loading categories..." />
      ) : isError ? (
        <ErrorMessage message="Failed to load categories" />
      ) : !data?.length ? (
        <EmptyState title="No categories found" />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="rounded-xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="font-semibold">{category.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{category.slug}</p>
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
