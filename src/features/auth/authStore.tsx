import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginRequest } from "./authService";
import type { User } from "./types";

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,

      login: async (username, password) => {
        try {
          set({ loading: true });

          const data = await loginRequest({ username, password });

          set({ user: data, loading: false });

          localStorage.setItem("token", data.token);
        } catch (error) {
          set({ loading: false });
          console.error(error);
          alert("Credenciales incorrectas");
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);