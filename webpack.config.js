var Webpack                                  = require('webpack');
var	path 	                                 = require('path');
var HtmlWebpackPlugin                        = require("html-webpack-plugin");
var appPath                                  = path.join(__dirname, './app');
var distPath                                 = path.join(__dirname, './dist');


module.exports = {
	entry: {
		app: appPath + '/core',
		vendor: [
            'vue',
            'vue-router'
        ]
	},
	output: {
		path: distPath,
		filename: 'bundle.app.js'
	},
	module: {
		rules: [
	    	{
		        test: /\.js$/,
		        loader: 'babel-loader',
		        query: {
		          presets: ['es2015']
		        },
				exclude: /node_modules/
	      	}
		]
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: false,
            hash: false
        }),

        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'bundle.vendor.js',
            minChunks: Infinity
        })
    ],
    resolve: {
		modules: ['node_modules'],
		alias: {
			'vue': 'vue/dist/vue',
			'configs': appPath + '/core/configs',
            'features': appPath + '/features'
        }
	}
}