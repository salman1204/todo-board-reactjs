import { HttpResponse } from "@/types/http-types";
import { TicketDataTypes } from "@/types/ticket-types";
import { instance } from "@/utils/axiosIntercepter";
import { BASE_API_URL } from "@/utils/envVeriables";

export const getTicket = async (lable_guid: string) => {
  const url = `${BASE_API_URL}/ticket?label=${lable_guid}`;
  const { data } = await instance.get(url);
  return data as HttpResponse<TicketDataTypes[]>;
};
