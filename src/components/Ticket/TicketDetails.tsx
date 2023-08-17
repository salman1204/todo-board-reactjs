import { TicketDataTypes } from "@/types/ticket-types";
import { Modal } from "antd";

import React from "react";
import DeleteTicket from "./DeleteTicket";
import TicketTrackHistory from "./TicketTrackHistory";
import UpdateTicketDescription from "./UpdateTicketDescription";
import UpdateTicketExpireDate from "./UpdateTicketExpireDate";
import UpdateTicketTitle from "./UpdateTicketTitle";
interface UpdateTicketProps {
  openUpdateModal: boolean;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  ticket: TicketDataTypes;
}
const TicketDetails: React.FC<UpdateTicketProps> = ({
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
      <TicketTrackHistory ticket={ticket} />
    </Modal>
  );
};

export default TicketDetails;
