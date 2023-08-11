import { LabelDataTypes } from "@/types/label";
import React from "react";

interface LabelProps {
  data: LabelDataTypes;
}
const Label: React.FC<LabelProps> = ({ data }) => {
  return (
    <div className='shadow-white-1000/100 m-3 h-fit min-w-[20rem] rounded-lg bg-slate-100 p-3 shadow-md'>
      <h4>{data.title}</h4>
    </div>
  );
};

export default Label;
