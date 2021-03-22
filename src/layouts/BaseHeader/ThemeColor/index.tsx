import React, { useState, useEffect } from 'react';
import { BgColorsOutlined, CheckOutlined } from '@ant-design/icons';
import { Dropdown, Card } from 'antd';
import { SketchPicker } from 'react-color';
import { useModel } from 'umi';
import './index.less';
export default function ThemeColor() {
  const [flag, setFlag] = useState(false);
  const { themeColor, changeThemeColor } = useModel('user', (model) => ({
    themeColor: model.themeColor,
    changeThemeColor: model.changeThemeColor,
  }));
  const [color, setColor] = useState('#2593ff');

  // useEffect(() => {
  // 	changeTheme(color);
  // }, [color]);
  const colorsTop = [
    { name: '简洁蓝', color: '#2593ff' },
    { name: '科技蓝', color: '#2593fc' },
    { name: '极客蓝', color: '#206fee' },
    { name: '希望青', color: '#2cc5bd' },
    { name: '清新绿', color: '#31af70' },
  ];

  const colorsBottom = [
    { name: '优质紫', color: '#5150a4' },
    { name: '阳光黄', color: '#fa8c16' },
    { name: '活力橙', color: '#fa541c' },
    { name: '中国红', color: '#c60918' },
    { name: '酷炫黑', color: '#2c343f' },
  ];
  const card = (
    <Card className="io-theme-color-card" title="主题色">
      <div className="io-prev--colors">
        <div className="row">
          {colorsTop.map((c, index) => {
            return (
              <div
                key={c.color}
                className={`item ${index === 0 ? 'white' : ''}`}
                onClick={() => setColor(c.color)}
              >
                <div style={{ background: c.color }}>
                  {color === c.color && (
                    <CheckOutlined style={{ color: '#fff' }} />
                  )}
                </div>
                <p>{c.name}</p>
              </div>
            );
          })}
        </div>
        <div className="row">
          {colorsBottom.map((c) => {
            return (
              <div
                key={c.color}
                className="item"
                onClick={() => setColor(c.color)}
              >
                <div style={{ background: c.color }}>
                  {color === c.color && (
                    <CheckOutlined style={{ color: '#fff' }} />
                  )}
                </div>
                <p>{c.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
  return (
    <>
      <Dropdown overlay={card} trigger={['click']}>
        <BgColorsOutlined
          className="header-icon"
          onClick={() => {
            // setFlag(!flag);
            changeThemeColor('#00a74b');
          }}
        />
      </Dropdown>
    </>
  );
}
