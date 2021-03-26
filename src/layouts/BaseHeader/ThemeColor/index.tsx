import React, { useState, useEffect } from 'react';
import { BgColorsOutlined, CheckOutlined } from '@ant-design/icons';
import { Dropdown, Card } from 'antd';
import { SketchPicker } from 'react-color';
import { useModel } from 'umi';
import './index.less';
// import './theme.less';
import { lightTheme, darkTheme } from './variable';

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
                onClick={() => {
                  setColor(c.color);
                  if (c.name == '简洁蓝') {
                    document.body.className = 'concise-blue';
                    import('./theme-concise_blue.less');
                  } else if (c.name == '希望青') {
                    document.body.className = 'hope-green';
                    import('./theme-hope_green.less');
                  } else if (c.name == '清新绿') {
                    document.body.className = 'green';
                    import('./theme-green.less');
                  }
                }}
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
                onClick={() => {
                  setColor(c.color);
                  if (c.name == '优质紫') {
                    document.body.className = 'purple';
                    import('./theme-purple.less');
                  } else if (c.name == '阳光黄') {
                    document.body.className = 'yellow';
                    import('./theme-yellow.less');
                  } else if (c.name == '活力橙') {
                    document.body.className = 'orange';
                    import('./theme-orange.less');
                  } else if (c.name == '中国红') {
                    document.body.className = 'red';
                    import('./theme-red.less');
                  } else {
                    document.body.className = 'dark';
                    import('./theme-dark.less');
                  }
                }}
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
