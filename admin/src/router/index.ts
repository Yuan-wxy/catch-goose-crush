import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    component: MainLayout,
    redirect: '/level',
    children: [
      {
        path: 'level',
        name: 'LevelManage',
        component: () => import('../views/LevelManage.vue'),
        meta: { title: '关卡管理' },
      },
      {
        path: 'item',
        name: 'ItemManage',
        component: () => import('../views/ItemManage.vue'),
        meta: { title: '食材配置' },
      },
      {
        path: 'player',
        name: 'PlayerStats',
        component: () => import('../views/PlayerStats.vue'),
        meta: { title: '玩家统计' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫 - 拦截未登录访问
router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('admin_token');
  if (to.name !== 'Login' && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
