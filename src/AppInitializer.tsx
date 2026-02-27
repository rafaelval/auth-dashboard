import { useEffect } from "react";
import i18n from "./i18n";
import { useSettingsStore } from "./shared/store/useSettingsStore";

export const AppInitializer = () => {
  const theme = useSettingsStore((store) => store.theme);
  const language = useSettingsStore((store) => store.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return null;
};
