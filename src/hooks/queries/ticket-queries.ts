import { getExpireTodayTickets, getTicket, getTicketHistory } from "@/apis/ticket-api";
import { ticketQueryKeys } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetTicketByLabels = (label_guid = "") => {
  return useQuery({
    queryKey: ticketQueryKeys.list(label_guid),
    queryFn: () => getTicket(label_guid),
    retry: false,
  });
};

export const useGetTicketTrackHistory = (ticket_guid = "") => {
  return useQuery({
    queryKey: ticketQueryKeys.lists(),
    queryFn: () => getTicketHistory(ticket_guid),
    retry: false,
  });
};

export const useGetExpireTodayTickets = () => {
  return useQuery({
    queryKey: ["Expire_today"],
    queryFn: () => getExpireTodayTickets(),
  });
};
