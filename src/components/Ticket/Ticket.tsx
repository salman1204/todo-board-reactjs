import { TicketDataTypes } from "@/types/ticket-types";
import { onDragEnd, onDragStart } from "@/utils/htmlDragDropApi";
import { ClockCircleTwoTone } from "@ant-design/icons";
import moment from "moment";
import React, { useState } from "react";
import TicketDetails from "./TicketDetails";

interface TicketProps {
  ticket: TicketDataTypes;
}
const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const isExpiredDateToday =
    ticket?.expiry_date == moment().format("DD-MM-YYYY");

  return (
    <div
      className='shadow-white-1000/100 mt-3 h-fit rounded-lg  border-gray-900  bg-neutral-100 p-3 shadow-md hover:bg-violet-50'
      id={ticket.guid}
      draggable
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
    >
      <p
        className='flex cursor-pointer items-center justify-between break-words leading-normal'
        onClick={() => setOpenUpdateModal(true)}
      >
        {ticket.title}
        {isExpiredDateToday && <ClockCircleTwoTone twoToneColor='#f05a4f' />}
      </p>

      <TicketDetails
        openUpdateModal={openUpdateModal}
        setOpenUpdateModal={setOpenUpdateModal}
        ticket={ticket}
      />
    </div>
  );
};

export default Ticket;
