import { getTicket } from "@/apis/ticket-api";
import { ticketQueryKeys } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetTicketByLabels = (label_guid = "") => {
  return useQuery({
    queryKey: ticketQueryKeys.list(label_guid),
    queryFn: () => getTicket(label_guid),
    retry: false,
  });
};
