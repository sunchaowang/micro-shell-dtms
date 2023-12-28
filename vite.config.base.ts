import { UserConfig } from 'vite';

import { loadEnv } from 'vite';
import { resolve } from 'path';

export function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export const root = process.cwd();

export const loadPackageEnv = (mode: string) => loadEnv(mode, root);

export const userConfig: UserConfig = {
  resolve: {},
  server: {
    host: true,
  },
};
