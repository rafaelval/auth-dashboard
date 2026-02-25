import { create } from "zustand";
import { getUsers } from "./usersService";
import type { User } from "./types";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    try {
      set({ loading: true, error: null });

      const users = await getUsers();

      set({ users, loading: false });
    } catch {
      set({ error: "Error fetching users", loading: false });
    }
  },
}));