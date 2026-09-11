import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts, getProductsByCategory } from "../api/get-product";
import { productKeys } from "../products.keys";
import type { ProductQueryParams } from "../types";

export function useProducts(params?: ProductQueryParams) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => getProducts(params),
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProduct(id),
    enabled: Number.isFinite(id) && id > 0,
  });
}

export function useProductsByCategory(
  slug: string,
  params?: ProductQueryParams,
) {
  return useQuery({
    queryKey: productKeys.category(slug, params),
    queryFn: () => getProductsByCategory(slug, params),
    enabled: Boolean(slug),
  });
}
