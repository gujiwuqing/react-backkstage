const routes = [
  {
    exact: true,
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
        exact: true,
        path: '/',
        title: '首页',
        component: '@/pages/home',
        name: 'home',
        icon: 'iconhome',
      },
      {
        exact: true,
        path: '/table',
        title: '表格',
        name: 'table',
        icon: 'iconbiaodanzujian-biaoge',
        routes: [
          {
            exact: true,
            path: '/table/user/list',
            title: '用户管理',
            component: '@/pages/user',
            name: 'user-list',
          },
          {
            exact: true,
            path: '/table/edit-table',
            title: '可编辑表格',
            component: '@/pages/edit-table',
            name: 'table-edit',
          },
          {
            exact: true,
            path: '/table/drag-table',
            title: '可拖拽表格',
            component: '@/pages/drag-table',
            name: 'table-drag',
          },
        ],
      },
      {
        exact: true,
        path: '/trag',
        title: '拖拽',
        component: '@/pages/trag',
        name: 'drag',
        icon: 'iconfile',
      },
      {
        exact: true,
        path: '/excel',
        title: '导出excel',
        component: '@/pages/excel',
        name: 'excel',
        icon: 'iconfile-excel',
      },
      {
        exact: true,
        path: '/test',
        title: '测试',
        component: '@/pages/test',
        name: 'test',
        icon: 'iconfile',
      },
      {
        exact: true,
        path: '/upload',
        title: '上传',
        component: '@/pages/upload',
        name: 'upload',
        icon: 'iconfile',
      },
      { component: '@/pages/404' },
    ],
  },
];

export default routes;
