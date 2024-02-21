// import '../node_modules/block-libs/block-libs';
import '@/design/index.less';
import { createApp } from 'vue';
import { _router } from '@/router';
import { _store } from '@/store';
import Antd from 'ant-design-vue';
import App from './App.vue';
import microApp from '@micro-zoe/micro-app';

function bootstrap() {
  try {
    microApp.start({
      'keep-router-state': true, // 保留路由状态
      lifeCycles: {
        created() {
          console.log('created 全局监听');
        },
        beforemount() {
          console.log('beforemount 全局监听');
        },
        mounted() {
          console.log('mounted 全局监听');
        },
        unmount() {
          console.log('unmount 全局监听');
        },
        error() {
          console.log('error 全局监听');
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  const app = createApp(App);
  app.use(Antd);
  app.use(_router);
  app.use(_store);
  app.mount('#app');

  // 拦截异常错误
  app.config.errorHandler = (err, vm, info) => {
    console.error(vm, err, info);
  };
}

bootstrap();
