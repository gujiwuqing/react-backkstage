const routes = [
  {
    path: '/login',
    title: '登录',
    component: '@/pages/login',
  },
  {
    path: '/',
    title: '首页',
    exact: false,
    component: '@/layouts',
    routes: [
      {
        path: '/',
        title: '首页',
        component: '@/pages/home',
        name: 'home',
        icon: 'iconhome',
      },
      {
        path: '/table',
        title: '表格',
        name: 'table',
        icon: 'iconbiaodanzujian-biaoge',
        routes: [
          {
            path: '/table/user/list',
            title: '用户管理',
            component: '@/pages/user',
            name: 'user-list',
          },
        ],
      },
      {
        path: '/trag',
        title: '拖拽',
        component: '@/pages/trag',
        name: 'drag',
        icon: 'iconfile',
      },
      {
        path: '/excel',
        title: '导出excel',
        component: '@/pages/excel',
        name: 'excel',
        icon: 'iconfile-excel',
      },
      {
        path: '/test',
        title: '测试',
        component: '@/pages/test',
        name: 'test',
        icon: 'iconfile',
      },
      {
        path: '/upload',
        title: '上传',
        component: '@/pages/upload',
        name: 'upload',
        icon: 'iconfile',
      },
      {
        path: '/editor',
        title: '编辑器',
        component: '@/pages/editor',
        name: 'editor',
        icon: 'iconfile',
      },
    ],
  },
];

export default routes;
