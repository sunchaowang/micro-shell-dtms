import { loadEnv } from 'vite';
import { resolve, join } from 'path';
import { wrapperEnv } from 'block-libs/dist/utils';
import * as process from 'process';
import { generateModifyVars } from './configs/theme/generateModifyVars';
import { createVitePlugins } from './configs/vite/plugin';
import { ViteEnv as ViteEnvType } from 'block-libs/types/env';

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
  const env = loadEnv(mode, process.cwd()) as unknown as ViteEnvType;
  const viteEnv = wrapperEnv(env);
  return {
    plugins: createVitePlugins(viteEnv, command === 'build'),
    resolve: {
      alias: [
        // @shared
        {
          find: '@/',
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    server: {
      port: env.VITE_APP_PORT,
      host: true,
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: generateModifyVars(),
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
