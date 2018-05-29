
const path = require('path');                                                        
const webpack = require('webpack');                                              
const HtmlWebpackPlugin = require('html-webpack-plugin');                        
const CleanWebpackPlugin = require("clean-webpack-plugin");   


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    //publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    minimize:true
  },
  plugins: [
	new HtmlWebpackPlugin({
		template: './index.html',
        favicon: './src/favicon.png'
	}),
	new webpack.BannerPlugin('版權所有，翻版必究'),  
	new webpack.optimize.OccurrenceOrderPlugin(),
	new CleanWebpackPlugin('build/*.*', {                                        
		root: __dirname,                                                         
		verbose: true,                                                           
		dry: false                                                               
	}),
  ],
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
		test: /\.css$/,
		loader: ['style-loader', 'css-loader']
      }, 
      {
         test: /\.(png|jpg|gif|svg)$/,
         loader: 'url-loader'
      }
    ]
  },
};
