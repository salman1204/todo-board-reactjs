import { useupdateTicketDetails } from "@/hooks/mutations/ticket-mutations";
import { TicketDataTypes } from "@/types/ticket-types";
import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import React, { useState } from "react";

const UpdateTicketExpireDate: React.FC<{ ticket: TicketDataTypes }> = ({
  ticket,
}) => {
  const [editExpireDate, setEditExpireDate] = useState(false);
  const [value, setValue] = useState<string | null>();

  const dateFormat = "DD-MM-YYYY";
  const queryClient = useQueryClient();

  const { mutate } = useupdateTicketDetails();

  const handleExpireDateUpdate = () =>
    mutate(
      {
        ticket_guid: ticket?.guid,
        data: {
          expiry_date: value,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["ticket"]);
          setEditExpireDate(false);
        },
      }
    );

  return (
    <div className='flex items-center'>
      <h5 onClick={() => setEditExpireDate(!editExpireDate)}>
        Expire On:
        {!editExpireDate && (
          <span className='ms-2 font-light'>
            {ticket?.expiry_date != null ? ticket?.expiry_date : <span className='text-red-400 '>No Expiration Date</span> }
          </span>
        )}
      </h5>
      {editExpireDate && (
        <DatePicker
          disabledDate={(current) => {
            let customDate = moment().format(dateFormat);
            return current && current < moment(customDate, dateFormat);
          }}
          onChange={(_date, dateString) => {
            setValue(dateString != "" ? dateString : null);
          }}
          placeholder={"Edit Expire date"}
          format={dateFormat}
          className='ms-3 py-0'
          defaultValue={
            ticket?.expiry_date
              ? dayjs(ticket?.expiry_date, dateFormat)
              : dayjs()
          }
        />
      )}
      {!editExpireDate && (
        <EditOutlined
          onClick={() => setEditExpireDate(!editExpireDate)}
          className='ms-1 cursor-pointer text-amber-500 hover:text-amber-600 '
        />
      )}

      {editExpireDate && (
        <>
          <CheckOutlined
            onClick={() => handleExpireDateUpdate()}
            className='ms-1 cursor-pointer text-amber-500 hover:text-amber-600 '
          />

          <CloseOutlined
            onClick={() => setEditExpireDate(!editExpireDate)}
            className='ms-1 cursor-pointer text-amber-500 hover:text-amber-600 '
          />
        </>
      )}
    </div>
  );
};

export default UpdateTicketExpireDate;
