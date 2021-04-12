import request from '../../utils/request';
import qs from 'qs';

export function GetCityList() {
  return request('/api/city/list', {
    method: 'GET',
  });
}
