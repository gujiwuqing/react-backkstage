import React, { useState } from 'react';
import { BgColorsOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { SketchPicker } from 'react-color';
import { useModel } from 'umi';
import './index.less';
export default function ThemeColor() {
  const [flag, setFlag] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const { themeColor, changeThemeColor } = useModel('user', (model) => ({
    themeColor: model.themeColor,
    changeThemeColor: model.changeThemeColor,
  }));
  return (
    <>
      <BgColorsOutlined
        className="header-icon"
        onClick={() => {
          // setFlag(!flag);
          changeThemeColor('#00a74b');
        }}
      />
      {flag && (
        <SketchPicker
          className="picker"
          color={color}
          onChange={(value) => setColor(value.hex)}
        />
      )}
    </>
  );
}
