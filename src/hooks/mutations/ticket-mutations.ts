import { addTicket, updateTicketDetails } from "@/apis/ticket-api";
import { updateTicketDataType } from "@/types/ticket-types";
import { useMutation } from "@tanstack/react-query";

export const useTicket = () => {
  return useMutation((data: { title: string; label: string }) => {
    return addTicket(data);
  });
};

export const useupdateTicketDetails = () => {
  return useMutation(
    (data: { ticket_guid: string; data: updateTicketDataType }) => {
      return updateTicketDetails(data.ticket_guid, data.data);
    }
  );
};
