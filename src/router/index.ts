// import { router as _router } from '@libs/core';
// const { createWebHistory, getRouter, useBeforeEach, useAfterEach } = _router;
import { createWebHistory, getRouter, useBeforeEach, useAfterEach } from 'block-libs/router';

export const router = getRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '_home',
      redirect() {
        return {
          path: '/home',
        };
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue'),
    },
  ],
});

useBeforeEach(router);
useAfterEach(router);
