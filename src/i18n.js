// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './langs/en.json';
import nl from './langs/nl.json';

i18n
  .use(LanguageDetector) // Detects user language (optional)
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      nl: {
        translation: nl,
      },
    },
    fallbackLng: 'en', // Fallback language
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
