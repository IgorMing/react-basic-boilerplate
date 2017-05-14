const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
  },
};
