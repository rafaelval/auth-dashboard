import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "../../services/api";
import type { AuthState } from "./types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,

      login: async (username, password) => {
        set({ loading: true });

        try {
          const { data } = await api.post("/auth/login", {
            username,
            password,
          });

          set({ user: data, loading: false });
        } catch (error) {
          set({ loading: false });
          throw error;
        }
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
