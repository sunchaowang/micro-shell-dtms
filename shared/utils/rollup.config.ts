import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
    {
      file: 'dist/index.min.js',
      format: 'iife',
      name: 'utils',
      plugins: [terser()],
    },
  ],
  plugins: [typescript(), resolve(), commonjs()],
};
