import React from 'react';
import { useModel, history } from 'umi';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './index.less';
import { useTranslation } from 'react-i18next';
interface tabItem {
  title: string;
  path: string;
  name: string;
}
export default function index() {
  const { t, i18n } = useTranslation();
  const { tabList, changedTabList } = useModel('tab-list', (model) => ({
    tabList: model.tabList,
    changedTabList: model.changedTabList,
  }));
  function handleClick(e: any, data: any) {
    console.log(e);
    const name = data.target.outerText;
    const { choose } = data;
    if (choose == '') {
    } else if (choose == 'other') {
    }
  }
  return (
    <>
      <div className="tab-list">
        {tabList.map((item: tabItem) => {
          return (
            <ContextMenuTrigger id="same_unique_identifier">
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
                {/* {item.title} */}
              </div>
            </ContextMenuTrigger>
          );
        })}
      </div>
      <ContextMenu id="same_unique_identifier">
        <MenuItem data={{ choose: 'bar' }} onClick={handleClick}>
          刷新
        </MenuItem>
        <MenuItem data={{ choose: 'other' }} onClick={handleClick}>
          关闭其他
        </MenuItem>
        {/* <MenuItem divider /> */}
        <MenuItem data={{ choose: 'all' }} onClick={handleClick}>
          关闭所有
        </MenuItem>
      </ContextMenu>
    </>
  );
}
