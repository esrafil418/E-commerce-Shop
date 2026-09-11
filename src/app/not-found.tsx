import Link from "next/link";

import { Container } from "@/components/common";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        That route does not exist in this mini storefront.
      </p>
      <Link href="/" className={buttonVariants()}>
        Back home
      </Link>
    </Container>
  );
}
