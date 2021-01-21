const { typescriptPaths } = require('rollup-plugin-typescript-paths')

// These rollup configurations together support `npm start` and `npm run build`
// with absolute file paths in TSDX

module.exports = {
  rollup(config, options) {
    //Replace "#/" with "src/" as the root directory
    config.plugins.push({
      plugins: [typescriptPaths({ tsConfigPath: './tsconfig.prod.json' })],
    })
    //Do not treat absolute paths as external modules
    return {
      ...config,
      external: (id) => !id.startsWith('#') && config.external(id),
    }
  },
}
