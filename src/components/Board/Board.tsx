import { useGetLabels } from "@/hooks/queries/label-queries";
import React, { useEffect } from "react";

import AddnewLabel from "@/components/Label/AddNewLabel";
import { useGetExpireTodayTickets } from "@/hooks/queries/ticket-queries";
import { warnExpireTickets } from "@/utils/warnExpireTickets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Label from "../Label/Label";
import Topbar from "../Topbar/Topbar";

const Board: React.FC = () => {
  const { data: labels, refetch } = useGetLabels();

  const { data: expireTodayTickets } = useGetExpireTodayTickets();

  let totalExpireTodayTickets = expireTodayTickets?.data.length;

  const accessToken = localStorage.getItem("todo_access_token");

  useEffect(() => {
    totalExpireTodayTickets && warnExpireTickets(totalExpireTodayTickets);
  }, [accessToken]);

  return (
    <div>
      <ToastContainer />
      <Topbar />
      <div className='flex h-[calc(100vh-3.7rem)] overflow-x-scroll'>
        {labels?.data.map((label) => <Label key={label.guid} label={label} />)}
        <AddnewLabel refetch={refetch} />
      </div>
    </div>
  );
};

export default Board;
