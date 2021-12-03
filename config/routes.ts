export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '首页',
    icon: 'home',
    component: './Welcome',
  },
  {
    path: '/park',
    name: '模版管理',
    icon: 'icon-location',
    component: './Park',
    routes: [
      {
        name: '积分配置',
        icon: 'smile',
        path: '/park/point-config',
        component: './park/Point',
      },
      {
        name: '卡券配置',
        icon: 'smile',
        path: '/park/voucher-config',
        component: './park/Voucher',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '订单管理',
    icon: 'profile',
    path: '/order-list',
    component: './order/List',
  },
  {
    component: './404',
  },
];
