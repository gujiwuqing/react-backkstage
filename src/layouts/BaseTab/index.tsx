import React from 'react';
import { useModel, history } from 'umi';
import './index.less';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown } from 'antd';
interface tabItem {
  title: string;
  path: string;
  name: string;
}
export default function index() {
  const pathname = history.location.pathname;
  const { t, i18n } = useTranslation();
  const { tabList, changedTabList } = useModel('tab-list', (model) => ({
    tabList: model.tabList,
    changedTabList: model.changedTabList,
  }));
  const renderMenus = (item: any) => (
    <Menu>
      <Menu.Item key="refresh">
        <div>刷新</div>
      </Menu.Item>
      {item.path !== '/' && item.path == pathname && (
        <Menu.Item key="close-current">
          <div>关闭当前页签</div>
        </Menu.Item>
      )}
      <Menu.Item key="close-other">
        <div>关闭其它页签</div>
      </Menu.Item>
      <Menu.Item key="close-all">
        <div>关闭全部</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="tab-list">
        {tabList.map((item: tabItem) => {
          return (
            <Dropdown
              overlay={() => renderMenus(item)}
              trigger={['contextMenu']}
            >
              <div
                className={
                  item.path === history.location.pathname
                    ? 'tab-item active'
                    : 'tab-item'
                }
                key={item.path}
                onClick={() => {
                  history.push(item.path);
                }}
              >
                {' '}
                {t(item.name)}
              </div>
            </Dropdown>
          );
        })}
      </div>
    </>
  );
}
