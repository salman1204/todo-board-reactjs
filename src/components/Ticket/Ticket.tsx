import { TicketDataTypes } from "@/types/ticket-types";
import { onDragEnd, onDragStart } from "@/utils/htmlDragDropApi";
import React from "react";

interface TicketProps {
  ticket: TicketDataTypes;
}
const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <div
      className='shadow-white-1000/100 mt-3 h-fit rounded-lg  bg-neutral-100 p-3 shadow-md'
      key={ticket.title}
      id={ticket.guid}
      draggable
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
    >
      <p className='break-words leading-normal'>{ticket.title}</p>
    </div>
  );
};

export default Ticket;
