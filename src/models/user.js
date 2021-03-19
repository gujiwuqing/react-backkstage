import { useState, useCallback } from 'react';
export default function User() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [themeColor, setThemeColor] = useState('#1890ff');
  const changedToken = useCallback((value) => {
    setToken(value);
  }, []);

  const changeThemeColor = useCallback((value) => {
    console.log(value);
    setThemeColor(value);
    localStorage.setItem('themeColor', value);
  }, []);

  const changedUser = useCallback((value) => {
    setUser(value);
  }, []);
  return {
    token,
    changedToken,
    user,
    changedUser,
    themeColor,
    changeThemeColor,
  };
}
