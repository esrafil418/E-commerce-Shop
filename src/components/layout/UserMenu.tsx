import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function UserMenu() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      <Link href="/wishlist" className={buttonVariants({ variant: "ghost" })}>
        ...
      </Link>

      <Link href="/cart" className={buttonVariants({ variant: "ghost" })}>
        ...
      </Link>

      <Link href="/auth/login" className={buttonVariants()}>
        Login
      </Link>
    </div>
  );
}
