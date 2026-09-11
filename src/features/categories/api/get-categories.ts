import { API_URL } from "@/constants/api";
import { axiosInstance } from "@/lib/api/axios";
import type { Category } from "../types";

export async function getCategories() {
  const { data } = await axiosInstance.get<Category[]>(
    API_URL.PRODUCT_CATEGORIES,
  );

  return data;
}
