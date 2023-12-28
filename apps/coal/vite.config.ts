import { UserConfig, ConfigEnv, loadEnv } from 'vite';
import { userConfig as baseUserConfig } from '../../vite.config.base';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  return {
    ...baseUserConfig,
    resolve: {},
    server: {
      port: 3000,
    },
  } as UserConfig;
};
