'use strict';

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConf = require('./webpack.base.conf');

const port = 8301;

module.exports = merge(baseWebpackConf, {
  devServer: {
    port: port,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8300'
      }
    },
    open: true,
    compress: true,
    hot: true,
    inline: true,
    overlay: {
      errors: true,
      warnings: false
    },
    clientLogLevel: 'warning',
    quiet: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here http://localhost:${port}`
        ]
      },
      onErrors: function(severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        const filename = error.file.split('!').pop();
        notifier.notify({
          title: 'vue',
          message: severity + ': ' + error.name,
          subtitle: filename || '',
          icon: path.resolve(__dirname, 'logo.png')
        });
      }
    })
  ]
});