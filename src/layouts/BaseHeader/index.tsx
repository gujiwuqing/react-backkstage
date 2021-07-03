import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import FullScreen from '@/components/FullScreen';
import { useModel } from 'umi';
import { Layout } from 'antd';
import UserInfo from './AvatarDropdown';
import Language from './Language';
import ThemeColor from './ThemeColor';
// import i18n from "i18next";
import './index.less';
// import '@/i18n';
const { Header } = Layout;

import { useTranslation } from 'react-i18next';
export default function Index() {
  const { t, i18n } = useTranslation();
  const { collapsed, toggleCollapsed, toggleFalseCollapsed } = useModel(
    'menuState',
    (model) => ({
      collapsed: model.collapsed,
      toggleCollapsed: model.toggleCollapsed,
      toggleFalseCollapsed: model.toggleFalseCollapsed,
    }),
  );
  return (
    <div className="site-header">
      <div className="header-left">
        <div className="collapse-btn">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: collapsed ? toggleFalseCollapsed : toggleCollapsed,
            },
          )}
        </div>
        <span
          onClick={() => {
            console.log('i18next.language', i18n.language);
            // i18n.changeLanguage('zh_CN');
            if (i18n.language == 'en_US') {
              i18n.changeLanguage('zh_CN');
            } else {
              i18n.changeLanguage('en_US');
            }
          }}
        >
          {t('title')}
        </span>
      </div>
      <div className="header-right">
        <FullScreen />
        <Language />
        <ThemeColor />
        <UserInfo />
      </div>
    </div>
  );
}
