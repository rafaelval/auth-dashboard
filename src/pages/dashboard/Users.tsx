import { useEffect, useMemo, useState } from "react";
import { useUsersStore } from "../../features/users/usersStore";
import { PageContainer } from "../../shared/components/PageContainer";
import { TableSkeleton } from "../../shared/components/TableSkeleton";
import { Modal } from "../../shared/components/Modal";
import { AddUserForm } from "../../features/users/components/AddUserForm";
import { Link } from "react-router-dom";

const Users = () => {
  const { users, loading, error, fetchUsers } = useUsersStore();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const usersPerPage = 6;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.firstName} ${user.lastName} ${user.email} ${user.username}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <PageContainer
      title="Users"
      subtitle={`${users.length} total users`}
      actions={
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          >
            Add user
          </button>
        </div>
      }
    >
      {loading ? (
        <TableSkeleton />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredUsers.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">No users found</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 flex items-center gap-3">
                      <img src={user.image} className="w-10 h-10 rounded-full" />

                      <Link
                        to={`/users/${user.id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {user.firstName} {user.lastName}
                      </Link>
                    </td>

                    <td className="p-3 text-gray-600">{user.email}</td>
                    <td className="p-3">{user.age}</td>
                    <td className="p-3 text-gray-500">@{user.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-6 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-30"
            >
              Prev
            </button>

            <span className="px-3 py-1 text-sm">
              {currentPage} / {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddUserForm onClose={() => setIsOpen(false)} />
      </Modal>
    </PageContainer>
  );
};

export default Users;