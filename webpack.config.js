const path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: ['./index.js'],
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
