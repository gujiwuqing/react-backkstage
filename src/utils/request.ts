import { extend } from 'umi-request';
import { message } from 'antd';
import { history } from 'umi';

const request = extend({
  timeout: 15000,
  prefix:
    'https://www.fastmock.site/mock/85c752f2a572df1e979659e4912eefd4/backstage',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

// 提前对响应做异常处理
request.interceptors.response.use((response) => {
  const codeMaps = {
    401: '未授权',
    500: '服务器异常',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  const { status } = response;
  if (status != 200 && status != 401) {
    message.error(codeMaps[status]);
  } else if (status == 401) {
    history.push('/login');
    message.error(codeMaps[status]);
  }
  return response;
});

export default request;
