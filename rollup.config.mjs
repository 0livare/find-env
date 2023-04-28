import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: ['lib/find.js', 'lib/load.js'],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [nodeResolve(), commonjs()],
  },
];
