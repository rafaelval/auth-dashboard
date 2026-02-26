import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
type Language = "es" | "en";

interface SettingsState {
  theme: Theme;
  language: Language;

  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      theme: "light",
      language: "es",

      toggleTheme: () =>
        set({
          theme: get().theme === "light" ? "dark" : "light",
        }),

      setLanguage: (language) => set({ language }),
    }),
    {
      name: "settings",
    }
  )
);