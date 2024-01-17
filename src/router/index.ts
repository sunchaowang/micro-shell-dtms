import { createWebHistory, getRouter } from '@libs/core/router'

export const router = getRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@views/about.vue'),
    },
  ]
})