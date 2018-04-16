'use strict';

const path = require('path');

module.exports.resolve = function(dir = '') {
  return path.join(__dirname, '..', dir);
};

module.exports.assetsPath = function(_path) {
  return path.join('static', _path);
};