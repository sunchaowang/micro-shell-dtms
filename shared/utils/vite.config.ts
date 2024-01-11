// 打包 cjs 和esm
// 导出 dts
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default () =>
  defineConfig({
    build: {
      lib: {
        entry: 'lib/index.ts',
        name: 'utils-lib',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        // external: ['vue'],
        // output: {
        //   globals: {
        //     vue: 'Vue',
        //   },
        // },
      },
    },
    plugins: [
      dts({
        outDir: './dist',
        include: ['./lib/**/*.{ts,tsx}'],
      }),
    ],
  });
