import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const input = './src/index.js';
const name = "PrismicHelpers";

export default [
  {
    input,
    output: {
      file: './dist/prismic-helpers.esm.js',
      format: 'esm'
    },
    plugins: [
      babel({ babelHelpers: 'bundled' })
    ]
  },
  {
    input,
    output: {
      file: './dist/prismic-helpers.js',
      format: 'umd',
      name
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  },
  {
    input,
    output: {
      file: './dist/prismic-helpers.min.js',
      format: 'umd',
      name
    },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser()
    ]
  }
];
