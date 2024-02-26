// import { router as _router } from '@libs/core';
// const { createWebHistory, getRouter, useBeforeEach, useAfterEach } = _router;
import Layout from '@/components/Layout/index.vue';
import {
  getRouter,
  useBeforeEach,
  useAfterEach,
  createWebHashHistory,
  Router,
} from 'block-libs/dist/router';

export const _router: Router = getRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/',
      name: '_system',
      component: Layout,
      children: [
        {
          path: '/',
          name: '_home',
          redirect() {
            return '/home';
          },
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/systems/home.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/systems/about.vue'),
        },
        {
          path: '/module/:path*',
          name: 'module-app',
          component: () => import('@/views/systems/module-apps/index.vue'),
        },
      ],
    },
  ],
});

useBeforeEach(_router);
useAfterEach(_router);
