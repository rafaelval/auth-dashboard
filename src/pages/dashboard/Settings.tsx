import { PageContainer } from "../../shared/components/PageContainer";
import { useSettingsStore } from "../../shared/store/useSettingsStore";
import { useLanguage } from "../../context/useLanguage";
import { useT } from "../../context/useT";

const Settings = () => {
  const { theme, toggleTheme } = useSettingsStore();
  const { lang, toggleLang } = useLanguage();
  const t = useT();

  return (
    <PageContainer title={t.settings} subtitle={t.preferences}>
      <div className="space-y-6 max-w-xl">

        <div className="flex items-center justify-between">
          <span className="font-medium dark:text-gray-200">{t.darkMode}</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded dark:text-gray-200"
          >
            {theme === "dark" ? "On" : "Off"}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium dark:text-gray-200">{t.language}</span>

          <select
            value={lang}
            onChange={() => toggleLang()}
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