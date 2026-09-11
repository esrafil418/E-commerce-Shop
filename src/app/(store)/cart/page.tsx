"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import {
  Container,
  EmptyState,
  PageHeader,
} from "@/components/common";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  useCartStore,
  useCartTotal,
} from "@/features/cart/cart.store";
import { formatPrice } from "@/lib/formatPrice";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const removeItem = useCartStore((state) => state.removeItem);
  const clear = useCartStore((state) => state.clear);
  const total = useCartTotal();

  return (
    <Container className="py-10">
      <PageHeader
        title="Cart"
        description="Items stay in this browser until you clear them. Checkout is out of scope for this mini store."
      />

      {!items.length ? (
        <EmptyState
          title="Your cart is empty"
          description="Browse products and add a few items to see them here."
        />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 rounded-xl border p-4"
              >
                <Link
                  href={`/products/${item.id}`}
                  className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="min-w-0">
                    <Link
                      href={`/products/${item.id}`}
                      className="line-clamp-1 font-medium hover:underline"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() => decrement(item.id)}
                      aria-label="Decrease quantity"
                    >
                      <Minus />
                    </Button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() => increment(item.id)}
                      aria-label="Increase quantity"
                    >
                      <Plus />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit space-y-4 rounded-xl border p-5">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-lg font-semibold">{formatPrice(total)}</span>
            </div>
            <Link href="/products" className={buttonVariants({ className: "w-full" })}>
              Continue shopping
            </Link>
            <Button variant="outline" className="w-full" onClick={clear}>
              Clear cart
            </Button>
          </aside>
        </div>
      )}
    </Container>
  );
}
