import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en_US: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
      title: 'backstage system',
      home: 'Home',
      drag: 'Drag',
      excel: 'Excel',
      test: 'Test',
      upload: 'Upload',
      table: 'Table',
      'user-list': 'User-List',
      'user-info': 'User-Info',
      'change-password': 'Change-Password',
      'sign-out': 'Sign-Out',
    },
  },
  zh_CN: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
      title: '后台管理系统',
      home: '首页',
      drag: '拖拽',
      excel: '文档',
      test: '测试',
      upload: '上传',
      table: '表格',
      'user-list': '用户管理',
      'user-info': '个人中心',
      'change-password': '修改密码',
      'sign-out': '修改密码',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en_US',
    fallbackLng: 'en_US',
    // backend: {
    //     //網頁載入時去下載語言檔的位置
    //     // loadPath: "locales/{{lng}}/{{ns}}.json",
    //     loadPath: `../i18n/locales/en_US.json`
    // },

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
