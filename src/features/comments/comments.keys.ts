export const commentKeys = {
  all: ["comments"] as const,
  lists: () => [...commentKeys.all, "list"] as const,
  list: (limit: number) => [...commentKeys.lists(), { limit }] as const,
};
