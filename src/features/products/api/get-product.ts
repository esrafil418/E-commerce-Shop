import { axiosInstance } from "@/lib/api/axios";
import type { ProductsResponse } from "../types";

export async function getProducts() {
  const { data } = await axiosInstance.get<ProductsResponse>("/products");

  return data;
}
