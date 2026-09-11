import type { Metadata } from "next";
import Link from "next/link";

import { Container, PageHeader } from "@/components/common";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-10">
      <PageHeader
        title="About Verve"
        description="A small Next.js storefront used to practice feature-based architecture, server-state fetching, and a clean UI system."
      />

      <div className="max-w-2xl space-y-4 text-muted-foreground">
        <p>
          Product data, categories, comments, and reviews all come from{" "}
          <a
            href="https://dummyjson.com"
            className="text-foreground underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            DummyJSON
          </a>
          . The cart is local-only and stored in the browser.
        </p>
        <p>
          The goal is a complete mini shop: home, catalog, product details,
          categories, cart, and this about page — without extra dashboard or
          checkout complexity.
        </p>
        <Link href="/products" className={buttonVariants()}>
          Browse products
        </Link>
      </div>
    </Container>
  );
}
