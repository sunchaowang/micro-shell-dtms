import { UserConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJs from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

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
export const loadCurrentEnv = (mode: string, rootPath?: string) => loadEnv(mode, rootPath ?? root);

export const userConfig: UserConfig = {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^micro-app/.test(tag),
        },
      },
    }),
    vueJs(),
  ],
  resolve: {
    alias: [
      // @shared
      {
        find: '@shared/',
        replacement: pathResolve('shared/'),
      },
      // @root
      {
        find: '@root/',
        replacement: pathResolve('./'),
      },
    ],
  },
  server: {
    host: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
