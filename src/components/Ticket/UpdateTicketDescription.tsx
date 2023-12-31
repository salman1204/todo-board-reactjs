import { useupdateTicketDetails } from "@/hooks/mutations/ticket-mutations";
import { TicketDataTypes } from "@/types/ticket-types";
import { EditOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const UpdateTicketDescription: React.FC<{ ticket: TicketDataTypes }> = ({
  ticket,
}) => {
  const [editDescription, setEditDescription] = useState(false);
  const [value, setValue] = useState<string | null>(ticket?.description);

  const queryClient = useQueryClient();

  const { mutate } = useupdateTicketDetails();

  const handleDescriptionUpdate = () =>
    mutate(
      {
        ticket_guid: ticket?.guid,
        data: {
          description: value,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["ticket"]);
          value != null && setEditDescription(false);
        },
      }
    );

  return (
    <div className='my-5'>
      <div className='mb-3 flex justify-between'>
        <h3>
          <MenuUnfoldOutlined className='mb-3 me-2' />
          Description
        </h3>
      </div>

      <div className={!editDescription ? "block" : "hidden"}>
        {ticket?.description && (
          <p
            onClick={() => {
              setEditDescription(true);
            }}
            className='font-light'
          >
            {ticket?.description}
            <EditOutlined className='ms-1 cursor-pointer text-amber-500 hover:text-amber-600 ' />
          </p>
        )}
      </div>

      {(editDescription ||
        ticket?.description == null ||
        ticket?.description == "") && (
        <div>
          <TextArea
            showCount
            maxLength={200}
            defaultValue={ticket?.description}
            value={value || ""}
            style={{ height: 120, resize: "none" }}
            placeholder='Add a more detailed description...'
            onChange={(e) => setValue(e.target.value ? e.target.value : null)}
            allowClear
          />
          <div className='mt-5 flex items-center justify-between'>
            <div>
              <Button
                type='primary'
                ghost
                onClick={() => handleDescriptionUpdate()}
              >
                Save
              </Button>

              <Button
                danger
                className='mx-3'
                onClick={() => {
                  setEditDescription(false);
                  setValue(ticket?.description);
                }}
              >
                Cancel
              </Button>
            </div>
            <div>
              {value !== ticket.description && (
                <span className='bg-yellow-200 p-1 text-xs'>Unsaved Data</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateTicketDescription;
