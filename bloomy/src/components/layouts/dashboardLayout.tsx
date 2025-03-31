import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";

const DashboardLayout = () => {
  return (
    <div className="h-full flex bg-[#ECF7F7] w-full overflow-x-hidden">
      <Sidebar />

      <div className=" flex-1 overflow-x-hidden ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
