import React from 'react';
import { Tabs } from 'antd';
import HorizontalDemo from './HorizontalDemo';
import VerticalDemo from './VerticalDemo';
import Test from './test';
export default function index() {
  const { TabPane } = Tabs;
  return (
    <div>
      <Tabs tabPosition="left">
        <TabPane tab="Horizontal" key="1">
          <HorizontalDemo />
        </TabPane>
        <TabPane tab="Vertical" key="2">
          <VerticalDemo />
        </TabPane>
        <TabPane tab="test" key="3">
          <Test />
        </TabPane>
      </Tabs>
    </div>
  );
}
