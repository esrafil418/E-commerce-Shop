"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import {Logo} from "./Logo";
import {NavigationLinks} from "./NavigationLinks";
import {UserLinks} from "./UserLinks";

export function MobileNav() {
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

            <Separator className="my-4" />

            <div className="flex flex-col">
              <UserLinks variant="mobile" />
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
        })}
      >
        <ShoppingCart className="size-5" />
        <span className="sr-only">Cart</span>
      </Link>
    </div>
  );
}
