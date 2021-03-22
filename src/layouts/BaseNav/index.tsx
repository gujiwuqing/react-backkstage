import { createFromIconfontCN } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { history, useModel } from 'umi';
import routes from '../../../config/routes';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2434100_xthguwpo5c.js',
});
const { SubMenu } = Menu;
const { Sider } = Layout;
export default function Index() {
  const { t, i18n } = useTranslation();
  const [selectedKey, setSelectedKey] = useState<string>('/');
  const { collapsed } = useModel('menuState', (model) => ({
    collapsed: model.collapsed,
  }));
  const { tabList, changedTabList } = useModel('tab-list', (model) => ({
    tabList: model.tabList,
    changedTabList: model.changedTabList,
  }));
  const goPage = (route: any) => {
    history.push(route.path);
    changedTabList(route);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        selectedKeys={[history.location.pathname]}
        mode="inline"
        theme="dark"
        style={{ height: '100vh' }}
      >
        {routes[1].routes.map((item) => {
          if (item.routes) {
            return (
              <SubMenu
                key={item.path}
                title={t(item.name)}
                icon={<IconFont type={item.icon}></IconFont>}
              >
                {item.routes.map((i) => {
                  return (
                    <Menu.Item
                      key={i.path}
                      onClick={() => {
                        goPage(i);
                      }}
                    >
                      {t(i.name)}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item
                key={item.path}
                onClick={() => {
                  goPage(item);
                }}
                icon={<IconFont type={item.icon} />}
              >
                {t(item.name)}
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sider>
  );
}
