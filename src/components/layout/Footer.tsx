import Link from "next/link";

import { Container } from "@/components/common";
import { storeNavigation } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-background">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">Verve</p>
          <p className="text-sm text-muted-foreground">
            A mini storefront powered by DummyJSON.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {storeNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/cart" className="transition-colors hover:text-foreground">
            Cart
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
