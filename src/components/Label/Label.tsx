import { useupdateTicketDetails } from "@/hooks/mutations/ticket-mutations";
import { useGetTicketByLabels } from "@/hooks/queries/ticket-queries";
import { LabelDataTypes } from "@/types/label-types";
import {
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
} from "@/utils/htmlDragDropApi";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import AddNewTicket from "../Ticket/AddNewTicket";
import Ticket from "../Ticket/Ticket";
import LabelTitle from "./LabelTitle";

interface LabelProps {
  label: LabelDataTypes;
}

const Label: React.FC<LabelProps> = ({ label }) => {
  const { data: tickets, refetch } = useGetTicketByLabels(label.guid);
  const queryClient = useQueryClient();

  const { mutate } = useupdateTicketDetails();

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    onDrop(e);
    let ticket_guid = e.dataTransfer.getData("text/plain");
    mutate(
      {
        ticket_guid: ticket_guid,
        data: {
          label: label.guid,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["ticket"]);
        },
      }
    );
  };

  return (
    <div
      className='shadow-white-1000/100 m-3 h-fit w-80 min-w-[20rem] rounded-lg bg-slate-100 p-3 shadow-md'
      onDragLeave={(e) => onDragLeave(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragEnd={async (e) => {
        onDragEnd(e);
      }}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => handleOnDrop(e)}
    >
      <LabelTitle label={label} />

      {tickets?.data.map((ticket) => (
        <Ticket key={ticket.guid} ticket={ticket} />
      ))}
      <AddNewTicket label_guid={label.guid} refetch={refetch} />
    </div>
  );
};

export default Label;
