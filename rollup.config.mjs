import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'

export default [
  {
    input: {
      find: 'lib/find.js',
      'load/index': 'lib/load/index.js',
      'load/optional': 'lib/load/optional.js',
    },
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [nodeResolve(), commonjs()],
  },
]
