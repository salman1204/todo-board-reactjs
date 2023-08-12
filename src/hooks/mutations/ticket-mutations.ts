import { addTicket } from "@/apis/ticket-api";
import { useMutation } from "@tanstack/react-query";

export const useTicket = () => {
  return useMutation((data: { title: string; label: string }) => {
    return addTicket(data);
  });
};
