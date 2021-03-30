import { UserOutlined, MessageOutlined, EyeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
import LineEcharts from './components/LineEcharts';
import BasePage from '@/components/BasePage';
import './index.less';

const Home = () => {
  return (
    <BasePage>
      <div style={{ width: '100%' }} className="home-container">
        <div className="home-container_header">
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="header-item">
                <p>
                  <UserOutlined style={{ fontSize: '36px' }} />
                </p>
                <div>
                  <p>新增用户</p>
                  <p>102400</p>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="header-item">
                <p>
                  <MessageOutlined style={{ fontSize: '36px' }} />
                </p>
                <div>
                  <p>消息数</p>
                  <p>102400</p>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="header-item">
                <p>
                  <EyeOutlined style={{ fontSize: '36px' }} />
                </p>
                <div>
                  <p>访问量</p>
                  <p>102400</p>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="header-item">
                <p>
                  <UserOutlined style={{ fontSize: '36px' }} />
                </p>
                <div>
                  <p>New Visits</p>
                  <p>102400</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="line-echarts">
          <LineEcharts />
        </div>
      </div>
    </BasePage>
  );
};

export default Home;
