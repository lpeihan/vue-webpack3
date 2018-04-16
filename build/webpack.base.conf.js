'use strict';

const { resolve, assetsPath } = require('./utils');

module.exports = {
  context: resolve(),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: resolve('dist'),
    filename: assetsPath('js/[name].[hash].js'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('images/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};