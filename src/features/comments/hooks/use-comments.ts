import { useQuery } from "@tanstack/react-query";
import { getComments } from "../api/get-comments";
import { commentKeys } from "../comments.keys";

export function useComments(limit = 6) {
  return useQuery({
    queryKey: commentKeys.list(limit),
    queryFn: () => getComments(limit),
  });
}
