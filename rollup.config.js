import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-auto-external';
import filesize from 'rollup-plugin-filesize';
import node from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import minify from 'rollup-plugin-babel-minify';

function config(format) {
  return {
    input: './src/lib/index.js',
    output: {
      format,
      file: `./dist/index.${format}.js`,
      name: `index.${format}`
    },
    plugins: [
      babel({
        babelrc: false,
        presets: [
          ['@babel/preset-env', { modules: false, targets: { node: 10 } }],
          '@babel/preset-react'
        ]
      }),
      external(),
      filesize(),
      progress(),
      minify(),
      node({ browser: true })
    ]
  };
}

export default ['esm', 'cjs'].map(config);
