import { useTicket } from "@/hooks/mutations/ticket-mutations";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

interface AddNewTicketProps {
  label_guid: string;
  refetch: () => void;
}
const AddNewTicket: React.FC<AddNewTicketProps> = ({ label_guid, refetch }) => {
  const [showAddInput, setShowAddInput] = useState(false);

  const { mutate } = useTicket();

  const onFinish = (values: { title: string }) => {
    const payload = { ...values, label: label_guid };
    mutate(payload, {
      onSuccess: () => {
        message.success("New Label Added Successfully");
        setShowAddInput(false);
        refetch();
      },
    });
  };

  return (
    <div className='shadow-white-1000/100 mt-3 h-fit rounded-lg p-3 shadow-md'>
      <span onClick={() => setShowAddInput(true)} className='cursor-pointer'>
        <PlusOutlined /> Add new ticket
      </span>
      {showAddInput && (
        <Form
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={onFinish}
          className='justify-centet align-center mt-3 flex-row'
        >
          <Form.Item name='title'>
            <Input placeholder='Ticket Name' />
          </Form.Item>

          <Button type='primary' htmlType='submit' className='me-3'>
            Add
          </Button>
          <Button danger type='primary' onClick={() => setShowAddInput(false)}>
            Cancel
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AddNewTicket;
