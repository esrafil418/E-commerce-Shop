"use client";

import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartCount } from "@/features/cart/cart.store";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

export function MobileNav() {
  const [mounted, setMounted] = useState(false);
  const cartCount = useCartCount();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon" />}>
          <Menu className="size-5" />
          <span className="sr-only">Open menu</span>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col">
            <div className="space-y-1">
              <NavigationLinks variant="mobile" />
            </div>
          </nav>

          <Separator />
        </SheetContent>
      </Sheet>

      <Link
        href="/cart"
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
          className: "relative",
        })}
      >
        <ShoppingCart className="size-5" />
        {mounted && cartCount > 0 ? (
          <span className="absolute top-1 right-1 size-2 rounded-full bg-primary" />
        ) : null}
        <span className="sr-only">Cart</span>
      </Link>
    </div>
  );
}
