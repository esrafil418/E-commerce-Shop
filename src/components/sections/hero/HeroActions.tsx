import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/products"
        className={buttonVariants({
          size: "lg",
        })}
      >
        Shop Now
      </Link>

      <Link
        href="/categories"
        className={buttonVariants({
          size: "lg",
          variant: "outline",
          className:
            "border-white/40 bg-transparent text-white hover:bg-white hover:text-black",
        })}
      >
        Browse Categories
      </Link>
    </div>
  );
}
