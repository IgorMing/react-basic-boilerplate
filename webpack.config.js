module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx',
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['react', 'es2015', 'stage-0'] },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
};
