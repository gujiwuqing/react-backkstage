import { useSet, useReactive } from 'ahooks';
import { Button, Checkbox, Col, Collapse, Row } from 'antd';
import React, { useState } from 'react';
import './index.less';
const { Panel } = Collapse;

interface menuItemPorps {
  key: string | number;
  name: string;
  onlyTwo: number;
  operatingFlag: number;
  permissionFlag: number;
  flag: boolean;
  children?: menuItemPorps[];
}

const data: menuItemPorps[] = [
  {
    key: '1346644430031007746',
    name: '首页',
    onlyTwo: 1,
    operatingFlag: 1,
    permissionFlag: 0,
    flag: false,
  },
  {
    key: '1346645062234255361',
    name: '内容运营',
    onlyTwo: 1,
    operatingFlag: 1,
    permissionFlag: 0,
    flag: false,
  },
  {
    key: 1,
    name: '测试',
    onlyTwo: 1,
    operatingFlag: 1,
    permissionFlag: 0,
    flag: false,
  },
  {
    key: '1374900193434013697',
    name: '积分商城',
    onlyTwo: 1,
    operatingFlag: 1,
    permissionFlag: 0,
    flag: false,
    children: [
      {
        key: '134665261343268414',
        name: '积分商城1-1',
        onlyTwo: 1,
        operatingFlag: 1,
        permissionFlag: 0,
        flag: false,
        children: [
          {
            key: '134665261343260001',
            name: '积分商城1-1-1',
            onlyTwo: 1,
            operatingFlag: 1,
            permissionFlag: 1,
            flag: false,
          },
          {
            key: '1346653433427500002',
            name: '积分商城1-1-2',
            onlyTwo: 1,
            operatingFlag: 1,
            permissionFlag: 0,
            flag: false,
          },
          {
            key: '134665261343260003',
            name: '积分商城1-1-3',
            onlyTwo: 1,
            operatingFlag: 1,
            permissionFlag: 0,
            flag: false,
          },
          {
            key: '1346653433427500004',
            name: '积分商城1-1-4',
            onlyTwo: 1,
            operatingFlag: 1,
            permissionFlag: 0,
            flag: false,
          },
        ],
      },
      {
        key: '1346653433427505101',
        name: '积分商城2-1',
        onlyTwo: 1,
        operatingFlag: 1,
        permissionFlag: 0,
        flag: false,
        children: [
          {
            key: '134665261343260111',
            name: '积分商城2-1-1',
            onlyTwo: 1,
            operatingFlag: 1,
            permissionFlag: 0,
            flag: false,
          },
          {
            key: '1346653433427500112',
            name: '积分商城2-1-2',
            onlyTwo: 1,
            operatingFlag: 1,
            permissionFlag: 0,
            flag: false,
          },
        ],
      },
    ],
  },
  {
    children: [
      {
        key: '1346652613432684545',
        name: '站点管理',
        onlyTwo: 1,
        operatingFlag: 1,
        permissionFlag: 0,
        flag: false,
      },
      {
        key: '1346653433427505153',
        name: '用户管理',
        onlyTwo: 1,
        operatingFlag: 1,
        permissionFlag: 0,
        flag: false,
      },
      {
        key: '1346653433427505110',
        name: '角色管理',
        onlyTwo: 1,
        operatingFlag: 1,
        permissionFlag: 0,
        flag: false,
      },
      {
        key: '1346653433427505203',
        name: '模型管理',
        onlyTwo: 1,
        operatingFlag: 1,
        permissionFlag: 0,
        flag: false,
      },
      {
        key: '1346653433427505856',
        name: '题库管理',
        onlyTwo: 1,
        operatingFlag: 1,
        permissionFlag: 0,
        flag: false,
      },
    ],
    key: '1346651876967428097',
    name: '系统管理',
    onlyTwo: 0,
    operatingFlag: 1,
    permissionFlag: 0,
    flag: false,
  },
  {
    key: 0,
    name: '增量菜单',
    flag: false,
    onlyTwo: 1,
    operatingFlag: 1,
    permissionFlag: 0,
  },
];
export default function index() {
  const [menuList, setMenuList] = useState<menuItemPorps[]>(data);

  const clickOne = (self: any, flag: boolean) => {
    flag ? (self.permissionFlag = 1) : (self.permissionFlag = 0);
    console.log('flag ', flag);
    console.log('self ', self);
    setMenuList([...menuList]);
  };

  const checkIndeterminate = (data: menuItemPorps) => {
    let arr: number[] = [];
    let flag: boolean = false;
    data.children?.map((item) => {
      if (item.operatingFlag == 1) {
        arr.push(item.permissionFlag);
      }
    });
    let flag1 = arr.filter((t) => t == 1);
    let flag2 = arr.filter((t) => t == 0);
    if (flag1.length && flag2.length) {
      flag = true;
    }
    return flag;
  };

  //过滤数据 获取可选的数据
  const getAvailableData = (list: any, ids: number[] = []) => {
    list
      ?.filter((u: any) => u.operatingFlag == 1)
      .map((item: any) => {
        ids.push(item.permissionFlag);
        if (item.children) {
          getAvailableData(item.children, ids);
        }
      });
    return ids;
  };

  return (
    <div>
      <div>
        <Button type="primary">全选</Button>
      </div>
      <Collapse>
        {menuList.map((item) => {
          return (
            <Panel
              key={item.key}
              header={
                <div
                  onClick={(e) => {
                    if (e.stopPropagation) e.stopPropagation();
                  }}
                >
                  <Checkbox onChange={() => {}}>{item.name}</Checkbox>
                </div>
              }
              showArrow={item.children?.length > 0}
            >
              <Row gutter={24}>
                {item.children?.map((i) => {
                  return (
                    <Col span={6}>
                      <div className="item">
                        <div className="header-name">
                          <Checkbox indeterminate={checkIndeterminate(i)}>
                            {i.name}
                          </Checkbox>
                        </div>
                        <div className="header-content">
                          <Row>
                            {i.children?.map((t) => {
                              return (
                                <Col span={8}>
                                  <Checkbox
                                    className="header-content_name"
                                    onChange={(e) =>
                                      clickOne(t, e.target.checked)
                                    }
                                    checked={t.permissionFlag == 1}
                                  >
                                    {t.name}
                                  </Checkbox>
                                </Col>
                              );
                            })}
                          </Row>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
}
