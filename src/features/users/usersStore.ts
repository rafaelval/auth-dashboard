import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUsers } from "./usersService";
import type { User } from "./types";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  deletingId: number | null;

  fetchUsers: () => Promise<void>;
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateUser: (user: User) => void;
}

export const useUsersStore = create<UsersState>()(
  persist(
    (set, get) => ({
      users: [],
      loading: false,
      error: null,
      deletingId: null,

      fetchUsers: async () => {
        if (get().users.length > 0) return;

        try {
          set({ loading: true, error: null });

          const usersFromApi = await getUsers();

          set({ users: usersFromApi, loading: false });
        } catch {
          set({ error: "Error fetching users", loading: false });
        }
      },

      addUser: (user) =>
        set((state) => ({
          users: [user, ...state.users],
        })),

      deleteUser: (id) => {
        set({ deletingId: id });

        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
          deletingId: null,
        }));
      },
      updateUser: (updatedUser: User) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user,
          ),
        })),
      getUserById: (id: number) => get().users.find((user) => user.id === id),
    }),

    {
      name: "users-storage",
    },
  ),
);
