var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
      }
    ]
  }
};