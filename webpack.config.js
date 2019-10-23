const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const path = require('path')
require('dotenv').config()

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	context: path.resolve(__dirname),
	mode: 'development',
	entry: path.resolve(__dirname, 'index.ts'),
	output: {
		filename: 'main.js',
		publicPath: 'dist'
	},
	devServer: {
		// contentBase: './dist',
		hot: true
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
				test: /\.(ts)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					// transpileOnly: true
				}
			}
		]
	},
	resolve: {
		modules: [ 'node_modules', path.join(__dirname, 'src') ],
		extensions: [ '.ts', '.js' ]
	},
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '.env')
		}),
		new webpack.DefinePlugin({
			process: {
				env: {
					AUTH_URL: JSON.stringify(process.env.AUTH_URL),
					GRANT_TYPE: JSON.stringify(process.env.GRANT_TYPE),
					CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
					CLIENT_SECRET: JSON.stringify(process.env.CLIENT_SECRET),
					SCOPE: JSON.stringify(process.env.SCOPE)
				}
			}
		})
	]
}
