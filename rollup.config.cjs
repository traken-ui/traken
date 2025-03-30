import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import pkg from './package.json' assert { type: 'json' };
import { dts } from 'rollup-plugin-dts';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: './tsconfig.json',
        clean: true,
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: 'dist/types',
          },
        },
      }),
      postcss({
        plugins: [tailwindcss('./tailwind.config.js'), autoprefixer()],

      }),
      json(),
    ],
    external: ['react', 'react-dom', 'class-variance-authority'],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
