import React, { useEffect, useState } from 'react';
import './index.less';
import { Input } from 'antd';
import { Map } from 'react-amap';
import Autocomplete from 'react-amap-plugin-autocomplete';

export interface BaseMapProps {
  width?: number;
  height?: number;
}

const BaseMap = ({ width = 1000, height = 500 }: BaseMapProps) => {
  const pluginProps = {};

  const selectfunc = (e: any) => {
    if (e.poi.location) {
    }
  };

  return (
    <>
      <div className="mapCmp" style={{ width, height }}>
        <Map>
          <Autocomplete onSelect={(e) => selectfunc(e)} placeholder="搜索" />
        </Map>
      </div>
    </>
  );
};

export default BaseMap;
