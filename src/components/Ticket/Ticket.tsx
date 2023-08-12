import { TicketDataTypes } from "@/types/ticket-types";
import React from "react";

interface TicketProps {
  ticket: TicketDataTypes;
}
const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <div className='shadow-white-1000/100 mt-3 h-fit rounded-lg  bg-neutral-100 p-3 shadow-md'>
      <p>{ticket.title}</p>
    </div>
  );
};

export default Ticket;
