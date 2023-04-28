import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['lib/load.ts'],
  format: ['esm'],
  dts: true,
})
