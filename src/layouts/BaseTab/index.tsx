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
  const onMenuClick = ({ key }: any, item: any) => {
    console.log('key', key, item);
    switch (key) {
      case 'refresh':
        window.location.reload();
        break;
      case 'close-other':
        closeOther(item.path);
        break;
      case 'close-all':
        closeAll();
        break;
    }
  };

  const closeOther = (item: any) => {
    console.log('item.path', item.path, history.location.pathname);
    if (item.path == history.location.pathname) {
      if (history.location.pathname != '/') {
        const arr = [
          { path: '/', name: 'home' },
          { path: item.path, name: item.name },
        ];
        changedTabList(arr);
        localStorage.setItem('tabList', JSON.stringify(arr));
      } else {
        const arr = [{ path: '/', name: 'home' }];
        changedTabList(arr);
        localStorage.setItem('tabList', JSON.stringify(arr));
      }
    } else {
      if (history.location.pathname != '/') {
        let route = tabList.find(
          (t: { path: string }) => t.path == history.location.pathname,
        );
        const arr = [
          { path: '/', name: 'home' },
          { path: route.path, name: route.name },
        ];
        changedTabList(arr);
        localStorage.setItem('tabList', JSON.stringify(arr));
        console.log('arr', arr);
      } else {
        const arr = [{ path: '/', name: 'home' }];
        changedTabList(arr);
        localStorage.setItem('tabList', JSON.stringify(arr));
      }
    }
  };

  const closeAll = () => {
    changedTabList([{ path: '/', name: 'home' }]);
    localStorage.setItem(
      'tabList',
      JSON.stringify([{ path: '/', name: 'home' }]),
    );
    history.push('/');
  };
  const renderMenus = (item: any) => (
    <Menu onClick={(e) => onMenuClick(e, item)}>
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
