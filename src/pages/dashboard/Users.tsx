import { useEffect } from "react";
import { useUsersStore } from "../../features/users/usersStore";

const Users = () => {
  const users = useUsersStore((state) => state.users);
  const loading = useUsersStore((state) => state.loading);
  const error = useUsersStore((state) => state.error);
  const fetchUsers = useUsersStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p className="p-4">Loading users...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3">User</th>
              <th className="p-3">Email</th>
              <th className="p-3">Age</th>
              <th className="p-3">Username</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={user.image}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                </td>

                <td className="p-3 text-gray-600">{user.email}</td>

                <td className="p-3">{user.age}</td>

                <td className="p-3 text-gray-500">@{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;