import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/get-product";
import { productKeys } from "../products.keys";

export function useProducts() {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: getProducts,
  });
}
