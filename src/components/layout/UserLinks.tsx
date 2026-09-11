"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { useCartCount } from "@/features/cart/cart.store";
import { NavigationVariant } from "@/types/common";

type UserLinksProps = {
  variant?: NavigationVariant;
};

export function UserLinks({ variant = "desktop" }: UserLinksProps) {
  const [mounted, setMounted] = useState(false);
  const cartCount = useCartCount();
  const isMobile = variant === "mobile";
  const linkClassName = isMobile ? "w-full justify-start" : undefined;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href="/cart"
      className={buttonVariants({
        variant: "ghost",
        className: linkClassName,
      })}
    >
      <ShoppingCart className="size-4" />
      <span>Cart</span>
      {mounted && cartCount > 0 ? (
        <span className="rounded-full bg-primary px-1.5 text-xs text-primary-foreground">
          {cartCount}
        </span>
      ) : null}
    </Link>
  );
}
