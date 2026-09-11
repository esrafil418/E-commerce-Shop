import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/get-categories";
import { categoryKeys } from "../categories.keys";

export function useCategories() {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: getCategories,
  });
}
