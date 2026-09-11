"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

import { Input } from "@/components/ui/input";
import { productsHref } from "@/lib/products-search";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(productsHref({ q: query }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative hidden w-full max-w-sm lg:block"
    >
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products..."
        className="pl-10"
        aria-label="Search products"
      />
    </form>
  );
}
