'use strcit';

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseWebpackConf = require('./webpack.base.conf');
const { assetsPath } = require('./utils');

baseWebpackConf.output.publicPath = '';

module.exports = merge(baseWebpackConf, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]
});