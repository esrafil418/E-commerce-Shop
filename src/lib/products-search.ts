export const PRODUCTS_PAGE_SIZE = 12;

type ProductsSearchParams = {
  q?: string;
  page?: number;
};

export function productsHref({ q, page }: ProductsSearchParams = {}) {
  const params = new URLSearchParams();

  if (q?.trim()) {
    params.set("q", q.trim());
  }

  if (page && page > 1) {
    params.set("page", String(page));
  }

  const query = params.toString();
  return query ? `/products?${query}` : "/products";
}
