module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  resolve: { extensions: ['', '.js'] },
};
