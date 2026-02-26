import { useEffect, useMemo, useState } from "react";
import { useUsersStore } from "../../features/users/usersStore";
import { PageContainer } from "../../shared/components/PageContainer";
import { TableSkeleton } from "../../shared/components/TableSkeleton";
import { Modal } from "../../shared/components/Modal";
import { UserForm } from "../../features/users/components/AddUserForm";
import { Link } from "react-router-dom";
import type { User } from "../../features/users/types";
import { ConfirmDeleteModal } from "../../features/users/components/ConfirmDeleteModal";
import { useToastStore } from "../../shared/store/useToastStore";

const Users = () => {
  const { users, loading, error, fetchUsers } = useUsersStore();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const deletingId = useUsersStore((s) => s.deletingId);
  const showToast = useToastStore((s) => s.show);

  const usersPerPage = 6;
  const deleteUser = useUsersStore((s) => s.deleteUser);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const openDeleteModal = (user: User) => setUserToDelete(user);

  const closeDeleteModal = () => setUserToDelete(null);

  const confirmDelete = () => {
  if (userToDelete) {
    deleteUser(userToDelete.id);
    showToast("User deleted successfully");
    closeDeleteModal();
    
  }
};

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.firstName} ${user.lastName} ${user.email} ${user.username}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [users, search]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage,
  );

  return (
    <PageContainer
      title="Users"
      subtitle={`${users.length} total users`}
      actions={
        <div className="flex items-center gap-3 dark:text-gray-200">
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
            onClick={() => {
              setSelectedUser(null);
              setIsOpen(true);
            }}
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
            <table className="w-full text-left text-gray-700 dark:text-gray-200">
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800">
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={user.image}
                        className="w-10 h-10 rounded-full"
                      />

                      <Link
                        to={`/users/${user.id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {user.firstName} {user.lastName}
                      </Link>
                    </td>

                    <td className="p-3 text-gray-600 dark:text-gray-200">{user.email}</td>
                    <td className="p-3">{user.age}</td>
                    <td className="p-3 text-gray-500 dark:text-gray-200">@{user.username}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openDeleteModal(user);
                        }}
                        className="text-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedUser(user);
                          setIsOpen(true);
                        }}
                        className="text-blue-600 hover:underline text-sm pl-2 dark:text-blue-400"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-6 gap-2 dark:text-gray-200">
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
        <UserForm
          onClose={() => setIsOpen(false)}
          user={selectedUser || undefined}
        />
      </Modal>
      <ConfirmDeleteModal
        user={userToDelete}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        loading={deletingId === userToDelete?.id}
      />
    </PageContainer>
  );
};

export default Users;
