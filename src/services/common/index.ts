import request from '../../utils/request';
import qs from 'qs';

export function getCityList() {
  return request('/api/city/list', {
    method: 'GET',
  });
}
