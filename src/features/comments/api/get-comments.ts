import { API_URL } from "@/constants/api";
import { axiosInstance } from "@/lib/api/axios";
import type { CommentsResponse } from "../types";

export async function getComments(limit = 6) {
  const { data } = await axiosInstance.get<CommentsResponse>(API_URL.COMMENTS, {
    params: { limit },
  });

  return data;
}
