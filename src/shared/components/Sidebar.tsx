import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4">
      <NavLink to="/users">Users</NavLink>
    </aside>
  );
};

export default SideBar;