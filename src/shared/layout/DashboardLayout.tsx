import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import SideBar from "../components/Sidebar";


export const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 min-h-screen bg-slate-100">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};