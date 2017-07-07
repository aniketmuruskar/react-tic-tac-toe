const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');
const appPath = path.resolve(__dirname, 'app', 'app.js');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app/app.js',
  },
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ 
      },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: [
            'style-loader'
          ],
          use: 'css-loader'
        })
      }]
  },
  devServer: {
    contentBase: buildPath,
    compress: true,
    port: 8100
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
        template: 'public/index.html',
        inject: 'body',
        hash: true
    })
  ]
}