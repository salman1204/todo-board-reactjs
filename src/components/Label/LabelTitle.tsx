import { useDeleteLabel } from "@/hooks/mutations/label-mutations";
import { LabelDataTypes } from "@/types/label-types";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Input, Popconfirm, message } from "antd";
import React, { useState } from "react";

interface LabelTitleProps {
  label: LabelDataTypes;
}
const LabelTitle: React.FC<LabelTitleProps> = ({ label }) => {
  const [editLabelTitle, setEditLabelTitle] = useState(false);
  const [value, setValue] = useState<string>(label.title);


  const queryClient = useQueryClient();

  const { mutate } = useDeleteLabel();


  const handleLabelDelete = () => {
    mutate(
      {
        label_guid: label?.guid,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["label"]);
          message.success("Label deleted successfully.");
        },
      }
    );
  };
  return (
    <div className='mb-4 ms-2 flex items-center justify-between'>
      {!editLabelTitle && <h4>{label.title}</h4>}

      {editLabelTitle && (
        <Input
          style={{ width: 230 }}
          defaultValue={label?.title}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <div>
        {!editLabelTitle && (
          <>
            <EditOutlined
              className='me-2'
              onClick={() => setEditLabelTitle(true)}
            />
            <Popconfirm
              title='Delete the Label'
              description='Are you sure to delete this Label?'
              onConfirm={handleLabelDelete}
              okText='Yes'
              cancelText='No'
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <DeleteOutlined />
            </Popconfirm>
          </>
        )}

        {editLabelTitle && (
          <>
            <CheckOutlined
              // onClick={() => handleExpireDateUpdate(value)}
              className='ms-1 cursor-pointer text-amber-500 hover:text-amber-600 '
            />

            <CloseOutlined
              onClick={() => setEditLabelTitle(false)}
              className='ms-1 cursor-pointer text-amber-500 hover:text-amber-600 '
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LabelTitle;
