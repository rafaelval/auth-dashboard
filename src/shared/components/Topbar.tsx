import { useAuthStore } from "../../features/auth/authStore";

export default function Topbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="flex justify-between items-center bg-white dark:shadow-gray-300 dark:bg-slate-900 p-4 shadow w-full">
      <h1 className="font-semibold text-gray-600 dark:text-gray-400">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {user?.firstName} {user?.lastName}
          </span>

          <img
            src={user?.image}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}