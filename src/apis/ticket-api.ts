import { HttpResponse } from "@/types/http-types";
import { TicketDataTypes, updateTicketDataType } from "@/types/ticket-types";
import { instance } from "@/utils/axiosIntercepter";
import { BASE_API_URL } from "@/utils/envVeriables";

export const addTicket = async (data: { title: string; label: string }) => {
  const { data: response } = await instance({
    method: "post",
    data: data,
    url: `${BASE_API_URL}/ticket/`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response as HttpResponse<TicketDataTypes>;
};

export const getTicket = async (lable_guid: string) => {
  const url = `${BASE_API_URL}/ticket/?label=${lable_guid}`;
  const { data } = await instance.get(url);
  return data as HttpResponse<TicketDataTypes[]>;
};

export const updateTicketDetails = async (
  ticket_guid: string,
  data: updateTicketDataType
) => {
  const { data: response } = await instance({
    method: "put",
    data: data,
    url: `${BASE_API_URL}/ticket/${ticket_guid}/`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response as HttpResponse<TicketDataTypes>;
};

export const deleteTicket = async (data: { ticket_guid: string }) => {
  const { data: response } = await instance.delete(
    `${BASE_API_URL}/ticket/${data.ticket_guid}/`
  );
  return response;
};

export const getExpireTodayTickets = async () => {
  const url = `${BASE_API_URL}/ticket/expire-today`;
  const { data } = await instance.get(url);
  return data as HttpResponse<TicketDataTypes[]>;
};
