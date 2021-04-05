import React, { useEffect, useState } from 'react';
import './index.less';
import { Input } from 'antd';

export interface BaseMapProps {
  width?: number;
  height?: number;
}

const BaseMap = ({ width = 1000, height = 500 }: BaseMapProps) => {
  const [map, setMap] = useState(null);
  const [keyword, setKeyword] = useState<string>('');
  useEffect(() => {
    // 初始化地图
    const map = new window.AMap.Map('container', {
      resizeEnable: true,
      // center: [116.397428, 39.90923], //地图中心点
      zoom: 12, //地图显示的缩放级别
    });
    setMap(map);
    getGeolocation();
    // onSearch();
  }, []);

  // useEffect(() => {
  //   getGeolocation();
  // }, []);
  const getGeolocation = () => {
    new window.AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new window.AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        maximumAge: 0, //定位结果缓存0毫秒，默认：0
        convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true, //显示定位按钮，默认：true
        buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });

      geolocation.getCurrentPosition();
      window.AMap.event.addListener(geolocation, 'complete', onComplete);
      window.AMap.event.addListener(geolocation, 'error', onError);

      function onComplete(data: any) {
        console.log('成功data', data);
        const {
          position: { lat, lng },
        } = data;
        console.log('成功data', lat, lng);
        // data是具体的定位信息
      }

      function onError(data) {
        console.log('失败data', data);
        // 定位出错
      }
    });
  };
  const onSearch = () => {
    new window.AMap.plugin('AMap.Autocomplete', function () {
      // 实例化Autocomplete
      var autoOptions = {
        //city 限定城市，默认全国
        city: '全国',
      };
      var autoComplete = new window.AMap.Autocomplete(autoOptions);
      autoComplete.search(keyword, function (status, result) {
        // 搜索成功时，result即是对应的匹配数据
        console.log(result);
      });
    });
  };
  useEffect(() => {
    onSearch();
  }, [keyword]);
  return (
    <>
      <div className="mapCmp" style={{ width, height }}>
        <div id="container"></div>
        <div id="tip">
          <Input onChange={(e) => setKeyword(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default BaseMap;
