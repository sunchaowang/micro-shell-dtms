import type { Router } from 'vue-router';

/**
 * @description: router addRoute
 * @param router
 */
export const useBeforeEach = (router: Router) => {
  router.beforeEach((to, from, next) => {
    console.log('router.beforeEach', to, from);
    // 校验登录Token
    const token = getToken();
    console.log('token', token);
    if (!token) {
      if (to.path === '/login') {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    } else {
      next();
    }
  });
};

const getToken = () => {
  return localStorage.getItem('token') ?? undefined;
};
