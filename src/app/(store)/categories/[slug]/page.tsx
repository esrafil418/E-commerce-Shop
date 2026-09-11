"use client";

import Link from "next/link";
import { use } from "react";

import {
  Container,
  EmptyState,
  ErrorMessage,
  Loading,
  PageHeader,
} from "@/components/common";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProductList } from "@/features/products/components/ProductList";
import { useProductsByCategory } from "@/features/products/hooks/use-products";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params);
  const { data, isLoading, isError } = useProductsByCategory(slug, {
    limit: 12,
  });
  const title = slug.replace(/-/g, " ");

  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/categories" />}>
              Categories
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PageHeader
        title={title}
        description={`Products in the ${title} category from DummyJSON.`}
      />

      {isLoading ? (
        <Loading message="Loading category..." />
      ) : isError ? (
        <ErrorMessage message="Failed to load this category" />
      ) : !data?.products.length ? (
        <EmptyState title="No products in this category" />
      ) : (
        <ProductList products={data.products} />
      )}
    </Container>
  );
}
