import { useState, useCallback } from 'react';

export default function themeColorModel() {
  const [themeColor, setThemeColor] = useState('');
  const changeThemeColor = useCallback((value) => {
    setThemeColor(value);
  }, []);

  return {
    themeColor,
    changeThemeColor,
  };
}
