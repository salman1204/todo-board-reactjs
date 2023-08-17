import { useupdateTicketDetails } from "@/hooks/mutations/ticket-mutations";
import { TicketDataTypes } from "@/types/ticket-types";
import { SnippetsOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Input } from "antd";
import React, { useCallback, useState } from "react";

interface UpdateTicketTitleProps {
  ticket: TicketDataTypes;
}
const UpdateTicketTitle: React.FC<UpdateTicketTitleProps> = ({ ticket }) => {
  const [editTicketTitle, setEditTicketTitle] = useState(false);
  const [value, setValue] = useState<string>(ticket?.title);

  const inputElement = useCallback((inputElement: any) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  const queryClient = useQueryClient();

  const { mutate } = useupdateTicketDetails();

  const handleTicketTitleUpdate = () => {
    mutate(
      {
        ticket_guid: ticket?.guid,
        data: {
          title: value,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["ticket"]);
          setEditTicketTitle(false);
        },
      }
    );
  };

  return (
    <>
      <div className='flex items-center'>
        <SnippetsOutlined className='me-2 ' />
        {!editTicketTitle && (
          <h2 className='px-2' onClick={() => setEditTicketTitle(true)}>
            {ticket?.title}
          </h2>
        )}
        {editTicketTitle && (
          <Input
            style={{ width: 600 }}
            defaultValue={ticket?.title}
            ref={inputElement}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => handleTicketTitleUpdate()}
          />
        )}
      </div>
      <h5>
        In Label: <span className='font-light'> {ticket?.label_title}</span>
      </h5>

      
    </>
  );
};

export default UpdateTicketTitle;
