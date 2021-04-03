import React, { useEffect, useState } from 'react';
import './index.less';

export interface BaseMapProps {
  width?: number;
  height?: number;
}

const BaseMap = ({ width = 1000, height = 500 }: BaseMapProps) => {
  const [map, setMap] = useState(null);
  const AMap = window.AMap;
  // const [rmap, setRmap] = useState(null);
  useEffect(() => {
    // 初始化地图
    const map = new AMap.Map('container', {
      resizeEnable: true,
      center: [116.397428, 39.90923], //地图中心点
      zoom: 12, //地图显示的缩放级别
      keyboardEnable: false,
    });
    setMap(map);
    onSearch();
  }, []);

  const onSearch = () => {
    AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function () {
      var autoOptions = {
        // 城市，默认全国
        city: '北京',
        // 使用联想输入的input的id
        input: 'input',
      };
      var autocomplete = new AMap.Autocomplete(autoOptions);

      var placeSearch = new AMap.PlaceSearch({
        city: '北京',
        map: map,
      });
      AMap.event.addListener(autocomplete, 'select', function (e) {
        //TODO 针对选中的poi实现自己的功能
        placeSearch.search(e.poi.name);
      });
    });
  };
  return (
    <>
      <div className="mapCmp" style={{ width, height }}>
        <div id="container"></div>
        <div id="tip">
          <input
            type="text"
            id="keyword"
            name="keyword"
            value="请输入关键字：(选定后搜索)"
            onFocus='this.value=""'
          />
        </div>
      </div>
    </>
  );
};

export default BaseMap;
