const alias = require('@rollup/plugin-alias')

// These rollup configurations together support `npm start` and `npm run build`
// with absolute file paths in TSDX

module.exports = {
  rollup(config, options) {
    //Replace "#/" with "src/" as the root directory
    config.plugins.push({
      plugins: [
        alias({
          entries: [
            { find: '#resources/*', replacement: 'src/resources/*' },
            { find: '#utils/*', replacement: 'src/utils/*' },
            { find: '#typings/*', replacement: 'src/typings/*' },
          ],
        }),
      ],
    })
    //Do not treat absolute paths as external modules
    return {
      ...config,
      external: (id) => !id.startsWith('#') && config.external(id),
    }
  },
}
