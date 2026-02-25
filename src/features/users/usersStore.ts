import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUsers } from "./usersService";
import type { User } from "./types";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
}

export const useUsersStore = create<UsersState>()(
  persist(
    (set, get) => ({
      users: [],
      loading: false,
      error: null,

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

      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),
    }),
    {
      name: "users-storage", // localStorage key
    }
  )
);