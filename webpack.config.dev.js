var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: "umd",
    // name of the global var: "Foo"
    library: "Foo"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        // include: path.join(__dirname, 'src'),
        // exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  // plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false }
    // })
  // ],
};