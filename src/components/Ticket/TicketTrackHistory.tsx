import { useGetTicketTrackHistory } from "@/hooks/queries/ticket-queries";
import { TicketDataTypes } from "@/types/ticket-types";
import { HistoryOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";

interface TicketTrackHistoryProps {
  ticket: TicketDataTypes;
}
const TicketTrackHistory: React.FC<TicketTrackHistoryProps> = ({ ticket }) => {
  const { data: ticketHistories } = useGetTicketTrackHistory(ticket?.guid);

  return (
    <div>
      <div className='mb-2 flex justify-between'>
        <h3>
          <HistoryOutlined className='mb-3 me-2' />
          Ticket Track History
        </h3>
      </div>
      <div className='h-32 overflow-auto'>
        {ticketHistories?.data.map((ticketHistory) => (
          <p className='shadow-white-10000/100 mb-2 rounded-lg bg-neutral-200 py-2 text-xs shadow-sm'>
            <RightOutlined className='px-2' />
            {ticketHistory.is_create ? (
              <span>
                <span className='bg-orange-200 p-1 rounded-md'>Created on</span>
                <span className='font-extrabold'>{" "} {ticketHistory.label_title}</span> at{" "}
                <span className='time'>{ticketHistory.time}</span>
              </span>
            ) : (
              <span>
                <span className='bg-lime-200 p-1 rounded-md'>Moved to</span>
                <span className='font-extrabold'>{" "} {ticketHistory.label_title}</span> at{" "}
                <span className='time'>{ticketHistory.time}</span>
              </span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TicketTrackHistory;
