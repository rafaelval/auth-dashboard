import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4">
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors ${
              isActive
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="users"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors ${
              isActive
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          Users
        </NavLink>

      </nav>
    </aside>
  );
};

export default SideBar;