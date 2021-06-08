import request from '../../utils/request';
import { userDTO } from './type';
export function getUserList(params?: any) {
  return request('/user/list', {
    method: 'GET',
    params,
  });
}

export function addUser(data: userDTO) {
  return request('/user/add', {
    method: 'POST',
    data,
  });
}
