import { useSet, useReactive } from 'ahooks';
import { Button, Checkbox, Col, Collapse, Row } from 'antd';
import React from 'react';
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
export default function index() {
  const [set, { add, has, remove, reset }] = useSet<any>([]);

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
              permissionFlag: 0,
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
  const state = useReactive({
    data: [...data],
  });
  const clickOne = (key: string | number) => {
    if (set.has(key)) {
      set.delete(key);
    } else {
      set.add(key);
    }
  };

  const checkFather = (value: any, father: any, Ancestor?: any) => {
    console.log(value, father, Ancestor);
    if (Ancestor) {
    }
  };

  return (
    <div>
      <div>
        <Button type="primary">全选</Button>
      </div>
      <Collapse>
        {data.map((item) => {
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
                          <Checkbox>{i.name}</Checkbox>
                        </div>
                        <div className="header-content">
                          <Row>
                            {i.children?.map((t) => {
                              return (
                                <Col span={8}>
                                  <Checkbox
                                    className="header-content_name"
                                    value={t.key}
                                    onChange={() => clickOne(t.key)}
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
