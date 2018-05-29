
const path = require('path');                                                        
//const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');  


module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    //publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
	new HtmlWebpackPlugin({
		template: './index.html',
        favicon: './src/favicon.png'
	})
	//new webpack.HotModuleReplacementPlugin(),  
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
  devServer: {  
	port: 8008,            
    host: "0.0.0.0",
	contentBase: './',
    proxy: {
	  '/':{
		target: 'http://192.168.5.235:9000',
  		secure: false,
        changeOrigin: true, 
	  }
    } 
  }
};
