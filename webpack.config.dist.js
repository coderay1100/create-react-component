const path = require('path');
const webpack = require('webpack');

const srcDir = path.resolve('./src');

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: srcDir + '/coriander.js',
  output: {
    path: 'dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: srcDir,
        loader: 'babel',
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};