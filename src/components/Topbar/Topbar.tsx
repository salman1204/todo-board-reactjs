import logo from "@/assets/logo.webp";

import React from "react";
import Logout from "../Logout";

const Topbar: React.FC = () => {
  return (
    <div className='flex items-center justify-between bg-slate-100 px-3 py-2'>
      <img src={logo} alt='Logo' className='w-36' />
      <Logout />
    </div>
  );
};

export default Topbar;
