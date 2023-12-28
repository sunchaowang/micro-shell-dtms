import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJs from '@vitejs/plugin-vue-jsx';
import { loadEnv } from 'vite';
import { resolve } from 'path';

export function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export const root = process.cwd();

export const loadPackageEnv = (mode: string) => loadEnv(mode, root);

export const userConfig: UserConfig = {
  plugins: [vue(), vueJs()],
  resolve: {},
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
