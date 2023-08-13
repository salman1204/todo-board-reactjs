import { addTicket, patchTicketLabel } from "@/apis/ticket-api";
import { useMutation } from "@tanstack/react-query";

export const useTicket = () => {
  return useMutation((data: { title: string; label: string }) => {
    return addTicket(data);
  });
};

export const usePatchTicketLabel = () => {
  return useMutation(
    (data: { ticket_guid: string; data: { label: string } }) => {
      return patchTicketLabel(data.ticket_guid, data.data);
    }
  );
};
