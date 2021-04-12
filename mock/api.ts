export default {
  // 支持值为 Object 和 Array
  'GET /api/city/list': {
    body: [
      {
        title: '江西省',
        value: '0-0',
        children: [
          {
            title: '南昌市',
            value: '0-0-1',
          },
          {
            title: '九江市',
            value: '0-0-2',
          },
        ],
      },
      {
        title: '湖北省',
        value: '0-1',
        children: [
          {
            title: '襄阳市',
            value: '0-1-1',
          },
          {
            title: '武汉市',
            value: '0-1-2',
          },
        ],
      },
    ],
    message: '成功',
    code: 200,
  },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (
    req: any,
    res: {
      setHeader: (arg0: string, arg1: string) => void;
      end: (arg0: string) => void;
    },
  ) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
