const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
	// devtool: 'source-map',
	mode: 'production',
	context: path.resolve(__dirname, 'src'),
	entry: path.resolve(__dirname, 'src', 'resources'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		library: 'commerce-layer-js-sdk',
		libraryTarget: 'umd'
	}
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.(ts)$/,
	// 			loader: 'ts-loader',
	// 			exclude: /node_modules/,
	// 			options: {
	// 				configFile: 'tsconfig.prod.json'
	// 			}
	// 		}
	// 	]
	// }
})
