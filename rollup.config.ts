import typescript from '@rollup/plugin-typescript'
import { RollupOptions } from 'rollup'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [typescript()]
} as RollupOptions
