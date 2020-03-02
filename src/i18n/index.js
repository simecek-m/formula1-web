import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "i18n/language/en.json";
import cs from "i18n/language/cs.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en,
    cs
  }
});

export default i18n;
