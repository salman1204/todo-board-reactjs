import { LabelDataTypes } from "@/types/label-types";

export interface TicketDataTypes extends LabelDataTypes {
    label: string;
    description: string;
    expiry_date:string
}
