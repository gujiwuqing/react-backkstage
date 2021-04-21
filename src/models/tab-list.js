import { useState, useCallback } from 'react';
export default function tabList() {
  const [tabList, setTabList] = useState(
    JSON.parse(localStorage.getItem('tabList')) ?? [
      { path: '/', name: 'home' },
    ],
  );
  const changedTabList = useCallback((value) => {
    console.log('value', value);
    localStorage.setItem('tabList', JSON.stringify(value));
    setTabList([...value]);
  }, []);

  return {
    tabList,
    changedTabList,
  };
}
