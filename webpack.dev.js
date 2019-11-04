const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const path = require('path')
require('dotenv').config()

module.exports = merge(common, {
	mode: 'development',
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
})
