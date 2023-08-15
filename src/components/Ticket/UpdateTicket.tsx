import { TicketDataTypes } from "@/types/ticket-types";
import { SnippetsOutlined } from "@ant-design/icons";
import { Modal } from "antd";

import React from "react";
import UpdateTicketDescription from "./UpdateTicketDescription";
import UpdateTicketExpireDate from "./UpdateTicketExpireDate";
interface UpdateTicketProps {
  openUpdateModal: boolean;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  ticket: TicketDataTypes;
}
const UpdateTicket: React.FC<UpdateTicketProps> = ({
  openUpdateModal,
  setOpenUpdateModal,
  ticket,
}) => {
  return (
    <Modal
      open={openUpdateModal}
      onCancel={() => {
        setOpenUpdateModal(false);
      }}
      footer={null}
      width={800}
      className='modalStyle'
    >
      <div className='leading-7'>
        <h2 className='mb-3'>
          <SnippetsOutlined className='me-2' />
          {ticket.title}
        </h2>
        <h4>In Label: {ticket?.label_title}</h4>

        <UpdateTicketExpireDate ticket={ticket}/>
      </div>
      <UpdateTicketDescription ticket={ticket} />
    </Modal>
  );
};

export default UpdateTicket;
