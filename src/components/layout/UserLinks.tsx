import { buttonVariants } from "@/components/ui/button";
import { NavigationVariant } from "@/types/common";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

type UserLinksProps = {
  variant?: NavigationVariant;
};

export function UserLinks({ variant = "desktop" }: UserLinksProps) {
  const isMobile = variant === "mobile";
  const linkClassName =
    variant === "mobile" ? "w-full justify-start" : undefined;

  return (
    <>
      <Link
        href="/wishlist"
        className={buttonVariants({
          variant: "ghost",
          className: linkClassName,
        })}
      >
        <Heart className="size-4" />
        <span>Wishlist</span>
      </Link>

      {!isMobile && (
        <Link
          href="/cart"
          className={buttonVariants({
            variant: "ghost",
          })}
        >
          <ShoppingCart className="size-4" />
          <span>Cart</span>
        </Link>
      )}

      <Link
        href="/auth/login"
        className={buttonVariants({
          className: linkClassName,
        })}
      >
        Login
      </Link>
    </>
  );
}
