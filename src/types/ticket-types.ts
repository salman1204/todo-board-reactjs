import { LabelDataTypes } from "@/types/label-types";

export interface TicketDataTypes extends LabelDataTypes {
  label: string;
  label_title?: string;
  description: string;
  expiry_date: string;
}

export interface updateTicketDataType {
  label?: string;
  description?: string | null;
  title?: string;
  expiry_date?: string | null;
}

export interface TicketTrackHistoryTypes {
  guid: string;
  label_title: string;
  ticket_title: string;
  is_create: boolean;
  time: string; 
}
