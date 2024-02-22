const carApp = {
  name: 'module-car',
  url: 'http://localhost:17017/',
  baseRoute: '/module/car',
  subCode: 'car',
  subId: 15001,
  subName: '汽车',
  hasPermission: false,
};
const coalApp = {
  name: 'module-coal',
  url: 'http://localhost:17018/',
  baseRoute: '/module/coal',
  subCode: 'coal',
  subId: 13001,
  subName: '煤炭',
  hasPermission: false,
};

// 获取子应用列表
export function getSubApps() {
  // 获取当前的权限
  const subCode = sessionStorage.getItem('token') ?? '';

  const apps = [carApp, coalApp]
    .map((app) => {
      app.hasPermission = false;
      if (subCode.includes(app.subCode)) {
        app.hasPermission = true;
      }
      // app.url = app.url[mode];
      return app;
    })
    .filter((app) => {
      return app.hasPermission;
    });

  return apps;
}

// 获取子应用配置
export function getAppConfig() {
  const mode = import.meta.env.MODE; // 环境变量
  const apps = getSubApps();

  return apps.map((app) => {
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
