export const labelQueryKeys = {
  all: ["label"] as const,
  lists: () => [...labelQueryKeys.all, "list"] as const,
};

export const ticketQueryKeys = {
  all: ["ticket"] as const,
  lists: () => [...ticketQueryKeys.all, "list"] as const,
  list: (label_guid: string) => [...ticketQueryKeys.lists(), { label_guid }] as const,
};
