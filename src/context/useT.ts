import { useLanguage } from "./useLanguage";
import { text } from "../i18n";

export const useT = () => {
  const { lang } = useLanguage();
  return text[lang];
};