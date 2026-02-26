import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import SideBar from "../components/Sidebar";
import { Toast } from "../store/Toast";
import { useSettingsStore } from "../store/useSettingsStore";
import { useEffect } from "react";


export const DashboardLayout = () => {
  const theme = useSettingsStore((s) => s.theme);

  useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme]);
  return (
    <div className="flex h-screen overflow-hidden w-full">
      <SideBar />

      <div className="flex-1 flex flex-col bg-slate-100 dark:bg-slate-400">
        <Topbar />
        <Toast />
        <main className="flex-1 overflow-y-auto p-6 w-full ">
          
          <Outlet />
        </main>
      </div>
    </div>
  );
};