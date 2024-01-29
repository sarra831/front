import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { english } from "./translations/english";
import { french } from "./translations/french";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  us: {
    translation: english,
  },
  fr: {
    translation: french,
  },
};
/*
  es_MX: {
    translation: spanish_mx,
  },
  fr: {
    translation: french,
  },

*/
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources,
    fallbackLng: "fr",
    lng: "fr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
