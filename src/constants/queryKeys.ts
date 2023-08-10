export const labelQueryKeys = {
  all: ["label"] as const,
  lists: () => [...labelQueryKeys.all, "list"] as const, // ["beneficiaries", "list"]
};
