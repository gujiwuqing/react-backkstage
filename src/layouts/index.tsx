import React from 'react';
import './index.less';
import BaseNav from './BaseNav';
import BaseHeader from './BaseHeader';
import BaseTab from './BaseTab';
import { Layout } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
const { Content } = Layout;
export default function index({ children }: any) {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout className="container">
        <BaseHeader />
        <Layout className="site-layout">
          <BaseNav />
          <Layout>
            <BaseTab />
            <Content>{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </I18nextProvider>
  );
}
