import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/index.js',
  output: {
    format: 'iife',
    file: 'public/cybertron.js'
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    livereload('public')
  ]
}
