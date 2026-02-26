import { useParams, useNavigate } from "react-router-dom";
import { useUsersStore } from "../../features/users/usersStore";
import { PageContainer } from "../../shared/components/PageContainer";
import { useState } from "react";
import { Modal } from "../../shared/components/Modal";
import { UserForm } from "../../features/users/components/AddUserForm";
import { ConfirmDeleteModal } from "../../features/users/components/ConfirmDeleteModal";
import { useToastStore } from "../../shared/store/useToastStore";
import type { User } from "../../features/users/types";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useUsersStore((state) =>
    state.users.find((u) => u.id === Number(id))
  );

  const deleteUser = useUsersStore((s) => s.deleteUser);
  const deletingId = useUsersStore((s) => s.deletingId);

  const showToast = useToastStore((s) => s.show);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  if (!user) return <p>User not found</p>;

  const handleConfirmDelete = () => {
    if (!userToDelete) return;

    deleteUser(userToDelete.id);
    showToast("User deleted successfully 🗑️");
    navigate("/users");
  };

  return (
    <PageContainer title="User details">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-600 hover:underline dark:text-blue-400"
      >
        ← Back
      </button>

      <div className="bg-white dark:bg-slate-900 dark:border-gray-400 p-6 dark:shadow-gray-300 rounded shadow max-w-xl">
        <div className="flex items-center justify-between mb-6 dark:text-gray-200">
          <div className="flex items-center gap-4">
            <img src={user.image} className="w-20 h-20 rounded-full" />

            <div>
              <h2 className="text-xl font-bold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-500 dark:text-gray-200">@{user.username}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => setUserToDelete(user)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="space-y-2 text-gray-600 dark:text-gray-200">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </div>
      </div>

      {/* EDIT MODAL */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <UserForm user={user} onClose={() => setIsEditOpen(false)} />
      </Modal>

      {/* DELETE MODAL */}
      <ConfirmDeleteModal
        user={userToDelete}
        onClose={() => setUserToDelete(null)}
        onConfirm={handleConfirmDelete}
        loading={deletingId === userToDelete?.id}
      />
    </PageContainer>
  );
};

export default UserDetails;