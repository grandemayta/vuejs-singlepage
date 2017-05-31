const Webpack                                  = require('webpack');
const CleanWebpackPlugin                       = require('clean-webpack-plugin');
const HtmlWebpackPlugin                        = require("html-webpack-plugin");
const path  	                                 = require('path');
const appPath                                  = path.join(__dirname, './app');
const distPath                                 = path.join(__dirname, './dist');


module.exports = {
	entry: {
		app: appPath + '/core',
		vendor: [
      'vue',
      'vue-router',
			'vue-resource'
    ]
	},
	output: {
		path: distPath,
		filename: 'bundle.app.js'
	},
	module: {
		rules: [
			{
		  	test: /\.vue$/,
		    loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader'
					}
				},
				exclude: /node_modules/
	    },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		historyApiFallback: true
  },
	plugins: [

			new HtmlWebpackPlugin({
					template: 'index.template.ejs',
					inject: true,
					hash: true
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
			'vue': 'vue/dist/vue.esm',
			'configs': appPath + '/core/configs',
      'features': appPath + '/features',
			'commons': appPath + '/commons'
    }
	}
};


if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([

		new CleanWebpackPlugin([distPath], {
			root: path.join(__dirname, './'),
			verbose: true,
			dry: false
		}),

    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    new Webpack.LoaderOptionsPlugin({
      minimize: true
    })

  ]);
}