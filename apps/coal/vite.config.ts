import { userConfig as baseConfig, pathResolve, loadPackageEnv } from '../../vite.config.base';
import { UserConfig, ConfigEnv, loadEnv } from 'vite';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const isBuild = command === 'build';

  const appEnv = loadEnv(mode, root);
  const packageEnv = loadPackageEnv(mode);
  console.log('appEnv', appEnv, 'packageEnv', packageEnv, 'mode', mode, 'root', root);

  return {
    ...baseConfig,
    resolve: {
      ...baseConfig.resolve,
      alias: {
        ...baseConfig.resolve.alias,
      },
    },
    server: {
      ...baseConfig.server,
      port: 3000,
    },
  } as UserConfig;
};
