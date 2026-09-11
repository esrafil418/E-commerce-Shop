import { API_URL } from "@/constants/api";
import { axiosInstance } from "@/lib/api/axios";
import type { Product, ProductQueryParams, ProductsResponse } from "../types";

export async function getProducts(params: ProductQueryParams = {}) {
  const { limit = 30, skip = 0, q } = params;
  const endpoint = q ? API_URL.PRODUCT_SEARCH : API_URL.PRODUCTS;

  const { data } = await axiosInstance.get<ProductsResponse>(endpoint, {
    params: {
      limit,
      skip,
      ...(q ? { q } : {}),
    },
  });

  return data;
}

export async function getProduct(id: number) {
  const { data } = await axiosInstance.get<Product>(`${API_URL.PRODUCTS}/${id}`);
  return data;
}

export async function getProductsByCategory(
  slug: string,
  params: ProductQueryParams = {},
) {
  const { limit = 12, skip = 0 } = params;

  const { data } = await axiosInstance.get<ProductsResponse>(
    `${API_URL.PRODUCTS}/category/${slug}`,
    { params: { limit, skip } },
  );

  return data;
}
