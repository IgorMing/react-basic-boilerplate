const webpack = require('webpack');

const webpackConfig = {
  entry: ['babel-polyfill', './src/index.jsx'],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: { presets: ['react', 'es2015', 'stage-0'] },
    }, {
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      test: /\.scss$/,
    }],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  sassLoader: { outputStyle: 'extended' },
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = 'source-map';
  webpackConfig.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })];
}

module.exports = webpackConfig;
