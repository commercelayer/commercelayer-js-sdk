// const { typescriptPaths } = require('rollup-plugin-typescript-paths')
const ttypescript = require('ttypescript')
const tsPlugin = require('rollup-plugin-typescript2')
// These rollup configurations together support `npm start` and `npm run build`
// with absolute file paths in TSDX

module.exports = {
  rollup(config, options) {
    //Replace "#/" with "src/" as the root directory
    config.plugins.push({
      plugins: [
        tsPlugin({
          typescript: ttypescript,
        }),
        // typescriptPaths({ tsConfigPath: './tsconfig.prod.json' })
      ],
    })
    //Do not treat absolute paths as external modules
    return {
      ...config,
      // external: (id) => !id.startsWith('#') && config.external(id),
    }
  },
}
