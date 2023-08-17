import { useDeleteTicket } from "@/hooks/mutations/ticket-mutations";
import { TicketDataTypes } from "@/types/ticket-types";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Popconfirm, message } from "antd";
import React from "react";

interface DeleteTicketProps {
  ticket: TicketDataTypes;
}
const DeleteTicket: React.FC<DeleteTicketProps> = ({ ticket }) => {
  const queryClient = useQueryClient();

  const { mutate } = useDeleteTicket();

  const handleTicketDelete = () => {
    mutate(
      {
        ticket_guid: ticket?.guid,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["ticket"]);
          message.success("Ticket deleted successfully.");
        },
      }
    );
  };

  return (
    <div className='mt-2'>
      <Popconfirm
        title='Sure to delete this ticket?'
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        placement='right'
        onConfirm={handleTicketDelete}
      >
        <Button danger ghost>
          Delete Ticket
        </Button>
      </Popconfirm>
    </div>
  );
};

export default DeleteTicket;
