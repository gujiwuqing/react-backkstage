import { useState, useEffect } from 'react';
import { getCityList } from '@/services/common';

const useCityList = () => {
  const [cityList, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getList = async () => {
    const { code, body } = await getCityList();
    if (code == 200) setList(body);
    setLoading(false);
  };
  useEffect(() => {
    getList();
  }, []);
  return {
    cityList,
    loading,
  };
};
export default useCityList;
