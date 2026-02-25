import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import SideBar from "../components/Sidebar";


export const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden w-full">
      <SideBar />

      <div className="flex-1 flex flex-col bg-slate-100">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6 w-full">
          
          <Outlet />
        </main>
      </div>
    </div>
  );
};