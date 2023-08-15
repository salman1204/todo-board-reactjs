import { TicketDataTypes } from "@/types/ticket-types";
import { onDragEnd, onDragStart } from "@/utils/htmlDragDropApi";
import React, { useState } from "react";
import UpdateTicket from "./UpdateTicket";

interface TicketProps {
  ticket: TicketDataTypes;
}
const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  return (
    <div
      className='shadow-white-1000/100 mt-3 h-fit rounded-lg  bg-neutral-100 p-3 shadow-md hover:bg-violet-50 '
      key={ticket.title}
      id={ticket.guid}
      draggable
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
    >
      <p
        className='cursor-pointer break-words leading-normal '
        onClick={() => setOpenUpdateModal(true)}
      >
        {ticket.title}
      </p>

      <UpdateTicket
        openUpdateModal={openUpdateModal}
        setOpenUpdateModal={setOpenUpdateModal}
        ticket={ticket}
      />
    </div>
  );
};

export default Ticket;
