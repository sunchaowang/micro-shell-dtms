import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { Plugin } from 'vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^micro-app/.test(tag),
        },
      },
    }),
    // have to
    vueJsx(),
    // support name
    vueSetupExtend(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ];

  return vitePlugins;
}
