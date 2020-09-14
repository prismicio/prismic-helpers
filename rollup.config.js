import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size'

const input = './src/index.js';
const name = "PrismicHelpers";

export default [
  {
    input,
    output: {
      file: "./dist/prismic-helpers.esm.js",
      format: "esm",
    },
    plugins: [babel({ babelHelpers: "bundled" }), size()],
  },
  {
    input,
    output: {
      file: "./dist/prismic-helpers.js",
      format: "umd",
      name,
    },
    plugins: [
      babel({ babelHelpers: "bundled" }),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
      size(),
    ],
  },
  {
    input,
    output: {
      file: "./dist/prismic-helpers.min.js",
      format: "umd",
      name,
    },
    plugins: [
      babel({ babelHelpers: "bundled" }),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      terser(),
      size(),
    ],
  },
];
