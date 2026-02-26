import { PageContainer } from "../../shared/components/PageContainer";
import { useSettingsStore } from "../../shared/store/useSettingsStore";

const Settings = () => {
  const { theme, toggleTheme, language, setLanguage } = useSettingsStore();

  return (
    <PageContainer title="Settings" subtitle="Manage your preferences">
      <div className="space-y-6 max-w-xl">

        {/* THEME */}
        <div className="flex items-center justify-between">
          <span className="font-medium dark:text-gray-200">Dark mode</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded dark:text-gray-200"
          >
            {theme === "dark" ? "On" : "Off"}
          </button>
        </div>

        {/* LANGUAGE */}
        <div className="flex items-center justify-between">
          <span className="font-medium dark:text-gray-200">Language</span>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "es" | "en")}
            className="border px-3 py-2 rounded dark:text-gray-200"
          >
            <option value="es" className="dark:text-gray-600">Español</option>
            <option value="en" className="dark:text-gray-600">English</option>
          </select>
        </div>

      </div>
    </PageContainer>
  );
};

export default Settings;