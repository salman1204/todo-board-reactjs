import { useGetLabels } from "@/hooks/queries/label-queries";
import React from "react";

import AddnewLabel from "@/components/Label/AddNewLabel";
import Label from "../Label/Label";
import Topbar from "../Topbar/Topbar";

const Board: React.FC = () => {
  const { data: labels, refetch } = useGetLabels();

  return (
    <div>
      <Topbar />
      <div className='flex h-[calc(100vh-3.7rem)] overflow-x-scroll'>
        {labels?.data.map((label) => <Label key={label.guid} label={label} />)}
        <AddnewLabel refetch={refetch} />
      </div>
    </div>
  );
};

export default Board;
