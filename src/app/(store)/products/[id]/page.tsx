"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { Star } from "lucide-react";

import {
  Container,
  EmptyState,
  ErrorMessage,
  Loading,
} from "@/components/common";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useCartStore } from "@/features/cart/cart.store";
import { useProduct } from "@/features/products/hooks/use-products";
import { formatPrice } from "@/lib/formatPrice";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const productId = Number(id);
  const { data: product, isLoading, isError } = useProduct(productId);
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  if (!Number.isFinite(productId) || productId <= 0) {
    return (
      <Container className="py-10">
        <EmptyState title="Invalid product" description="This product id is not valid." />
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container className="py-10">
        <Loading message="Loading product..." />
      </Container>
    );
  }

  if (isError || !product) {
    return (
      <Container className="py-10">
        <ErrorMessage message="Failed to load this product" />
      </Container>
    );
  }

  const gallery = product.images?.length ? product.images : [product.thumbnail];
  const reviews = product.reviews ?? [];
  const cartItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  };

  function handleAddToCart() {
    addItem(cartItem);
    setAdded(true);
  }

  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/products" />}>
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
          <Image
            src={gallery[0]}
            alt={product.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-5">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">
            {product.category}
            {product.brand ? ` · ${product.brand}` : ""}
          </p>
          <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-sm">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              {product.rating.toFixed(1)}
            </span>
            <Badge variant="secondary">
              {product.availabilityStatus ?? `${product.stock} in stock`}
            </Badge>
          </div>
          <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
          <p className="text-muted-foreground">{product.description}</p>
          <Button size="lg" onClick={handleAddToCart}>
            {added ? "Added to cart" : "Add to cart"}
          </Button>
          <dl className="grid gap-2 text-sm text-muted-foreground">
            {product.shippingInformation ? (
              <div>
                <dt className="font-medium text-foreground">Shipping</dt>
                <dd>{product.shippingInformation}</dd>
              </div>
            ) : null}
            {product.warrantyInformation ? (
              <div>
                <dt className="font-medium text-foreground">Warranty</dt>
                <dd>{product.warrantyInformation}</dd>
              </div>
            ) : null}
            {product.returnPolicy ? (
              <div>
                <dt className="font-medium text-foreground">Returns</dt>
                <dd>{product.returnPolicy}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>

      <section className="mt-14 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Reviews</h2>
        {reviews.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((review, index) => (
              <article key={`${review.reviewerEmail}-${index}`} className="rounded-xl border p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="font-medium">{review.reviewerName}</p>
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    {review.rating}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState title="No reviews yet" description="This product has no DummyJSON reviews." />
        )}
      </section>
    </Container>
  );
}
