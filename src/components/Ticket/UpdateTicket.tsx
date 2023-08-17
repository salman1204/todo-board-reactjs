import { TicketDataTypes } from "@/types/ticket-types";
import { Modal } from "antd";

import React from "react";
import UpdateTicketDescription from "./UpdateTicketDescription";
import UpdateTicketExpireDate from "./UpdateTicketExpireDate";
import UpdateTicketTitle from "./UpdateTicketTitle";
import DeleteTicket from './DeleteTicket';
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
      width={700}
      className='modalStyle'
    >
      <div className='leading-7'>
        <UpdateTicketTitle ticket={ticket} />
        <UpdateTicketExpireDate ticket={ticket} />
        <DeleteTicket ticket={ticket} />
      </div>
      <UpdateTicketDescription ticket={ticket} />
    </Modal>
  );
};

export default UpdateTicket;
