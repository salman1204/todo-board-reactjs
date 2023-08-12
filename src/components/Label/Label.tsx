import { useGetTicketByLabels } from "@/hooks/queries/ticket-queries";
import { LabelDataTypes } from "@/types/label-types";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import Ticket from "../Ticket/Ticket";

interface LabelProps {
  label: LabelDataTypes;
}

const Label: React.FC<LabelProps> = ({ label }) => {
  const { data: tickets } = useGetTicketByLabels(label.guid);

  return (
    <div className='shadow-white-1000/100 m-3 h-fit min-w-[20rem] rounded-lg bg-slate-100 p-3 shadow-md'>
      <div>
        <h5>{label.title}</h5>
      </div>
      {tickets?.data.map((ticket) => (
        <Ticket key={ticket.guid} ticket={ticket} />
      ))}
      <div className='my-4'>
        <span>
          <PlusOutlined /> Add new Ticket
        </span>
      </div>
    </div>
  );
};

export default Label;
