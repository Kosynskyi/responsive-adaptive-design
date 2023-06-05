import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import faqEn from './locale/en/faq.json';
import faqRu from './locale/ru/faq.json';
import faqUa from './locale/ua/faq.json';
// import LanguageDetector from "i18next-browser-languagedetector";

i18n
  //   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uk: {
        translation: faqUa,
      },
      en: {
        translation: faqEn,
      },
      ru: {
        translation: faqRu,
      },
    },
  });

export default i18n;
