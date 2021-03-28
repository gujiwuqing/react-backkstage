import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh_CNCommon from './locales/zh_CN.json';
import en_USCommon from './locales/en_US.json';
const resources = {
  en_US: {
    translation: {
      ...en_USCommon,
    },
  },
  zh_CN: {
    translation: {
      ...zh_CNCommon,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language')
      ? localStorage.getItem('language')
      : 'en_US',
    fallbackLng: localStorage.getItem('language')
      ? localStorage.getItem('language')
      : 'en_US',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
