import { LabelDataTypes } from "@/types/label-types";

export interface TicketDataTypes extends LabelDataTypes {
  label: string;
  label_title?: string;
  description: string;
  expiry_date: string;
}

export interface updateTicketDataType {
  label?: string;
  description?: string;
  title?: string;
  expiry_date?: string;
}
