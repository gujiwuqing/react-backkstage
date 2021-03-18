import { useState, useCallback } from 'react';
export default function menuState() {
  // const [tabList, setTabList] = useState(JSON.parse(localStorage.getItem('tabList'))??[{ path: '/', title: '首页' }]);
  const [tabList, setTabList] = useState(
    JSON.parse(localStorage.getItem('tabList')) ?? [
      { path: '/', title: '首页', name: 'home' },
    ],
  );
  const changedTabList = useCallback((value) => {
    console.log(value);
    let num = tabList.findIndex((t) => t.path == value.path);
    if (num == -1) {
      tabList.push(value);
      localStorage.setItem('tabList', JSON.stringify(tabList));
      setTabList([...tabList]);
    }
  }, []);

  return {
    tabList,
    changedTabList,
  };
}
