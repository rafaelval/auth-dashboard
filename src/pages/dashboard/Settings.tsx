import { PageContainer } from "../../shared/components/PageContainer";
import { useSettingsStore } from "../../shared/store/useSettingsStore";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { theme, toggleTheme } = useSettingsStore();
  const { t } = useTranslation();
  const { language, setLanguage } = useSettingsStore();

  return (
    <PageContainer title={t("settings")} subtitle={t("preferences")}>
      <div className="space-y-6 max-w-xl">
        {/* DARK MODE */}
        <div className="flex items-center justify-between">
          <span className="font-medium dark:text-gray-200">
            {t("darkMode")}
          </span>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded dark:text-gray-200"
          >
            {theme === "dark" ? "On" : "Off"}
          </button>
        </div>

        {/* LANGUAGE */}
        <div className="flex items-center justify-between">
          <span className="font-medium dark:text-gray-200">
            {t("language")}
          </span>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "es")}
            className="border px-3 py-2 rounded dark:text-gray-200"
          >
            <option value="es" className="dark:text-gray-800">
              Español
            </option>
            <option value="en" className="dark:text-gray-800">
              English
            </option>
          </select>
        </div>
      </div>
    </PageContainer>
  );
};

export default Settings;
