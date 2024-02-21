import type { Router } from 'block-libs/dist/router';

export function getAppConfig() {
  const mode = import.meta.env.MODE; // 环境变量
  // console.log('mode', isDevMode());
  const apps = [
    {
      name: 'module-car',
      url: 'http://localhost:17017/',
      baseRoute: '/module/car',
    },
    {
      name: 'module-coal',
      url: 'http://localhost:17018/',
      baseRoute: '/module/coal',
    },
  ];
  return apps.map((app) => {
    // router.resolve({ path: '/' }).href;
    return {
      ...app,
      // 基座应用和子应用部署在同一个域名下，Prod模式下使用location.origin进行补全
      url: mode === 'development' ? app.url : window.location.origin + '/' + app.name,
      autoLoad: true,
      autoRender: true,
      style: {
        height: '100%',
      },

      events: () => {},
      mounted: () => {
        console.log(`${app.name} mounted`);
      },
      unmounted: () => {
        console.log(`${app.name} unmounted`);
      },
    };
  });
}
