import { TicketDataTypes } from "@/types/ticket-types";
import React from "react";

interface TicketProps {
  ticket: TicketDataTypes;
}
const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <div>
      <h5>{ticket.title}</h5>
    </div>
  );
};

export default Ticket;
