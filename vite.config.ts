import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJs from '@vitejs/plugin-vue-jsx';
import { resolve, join } from 'path';
import { ViteEnv } from '@libs-core/types';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import * as process from 'process';

/**
 * 项目根目录下的相对路径
 * @param dir
 */
export function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// 获取根路径
export const root = process.cwd();

/**
 *  读取环境变量
 * @param mode 'development' | 'production'
 * @param rootPath 根目录 默认root
 * @returns
 */
export const loadC = (mode: string, rootPath?: string) => loadEnv(mode, rootPath ?? root);

export default ({ command, mode }) => {
  const { VITE_APP_PORT } = loadEnv(mode, process.cwd()) as unknown as ViteEnv;
  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => /^micro-app/.test(tag),
          },
        },
      }),
      vueJs(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    resolve: {
      alias: [
        // @shared
        {
          find: '@/',
          replacement: pathResolve('src') + '/',
        },
        // {
        //   find: '@libs-core/',
        //   replacement: join(process.cwd(), 'libs') + '/',
        // },
      ],
    },
    server: {
      port: VITE_APP_PORT,
      host: true,
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    rollupOptions: {
      output: {
        comment: false,
      },
    },
  };
};
