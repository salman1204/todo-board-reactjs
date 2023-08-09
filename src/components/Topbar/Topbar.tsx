import logo from "@/assets/logo.webp";
import { Button } from "antd";
import React from "react";

const Topbar: React.FC = () => {
  return (
    <div className='flex items-center justify-between bg-slate-100 px-3 py-2'>
      <img src={logo} alt='Logo' className='' style={{ width: "9rem" }} />
      <Button danger>Logout</Button>
    </div>
  );
};

export default Topbar;
