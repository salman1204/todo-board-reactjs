import { useLabel } from "@/hooks/mutations/label-mutations";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

interface AddnewLabelProps {
  refetch: () => void;
}
const AddnewLabel: React.FC<AddnewLabelProps> = ({ refetch }) => {
  const [showAddInput, setShowAddInput] = useState(false);

  const { mutate } = useLabel();

  const onFinish = (values: { title: string }) => {
    mutate(values, {
      onSuccess: () => {
        message.success("New Label Added Successfully");
        setShowAddInput(false);
        refetch();
      },
    });
  };

  return (
    <div className='shadow-white-1000/100 m-3 h-fit min-w-[20rem] rounded-lg  bg-neutral-100 p-3 shadow-md'>
      <span onClick={() => setShowAddInput(true)} className='cursor-pointer'>
        <PlusOutlined /> Add new label
      </span>

      {showAddInput && (
        <Form
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={onFinish}
          className='justify-centet align-center mt-3 flex-row'
        >
          <Form.Item name='title'>
            <Input placeholder='Label Name' />
          </Form.Item>

          <Button type='primary' ghost htmlType='submit' className='me-3'>
            Add
          </Button>
          <Button
            danger
            type='primary'
            ghost
            onClick={() => setShowAddInput(false)}
          >
            Cancel
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AddnewLabel;
