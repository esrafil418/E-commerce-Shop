import type { ProductQueryParams } from "./types";

export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (params?: ProductQueryParams) =>
    [...productKeys.lists(), params ?? {}] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
  category: (slug: string, params?: ProductQueryParams) =>
    [...productKeys.all, "category", slug, params ?? {}] as const,
};
