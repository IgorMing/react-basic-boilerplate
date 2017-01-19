const webpack = require('webpack');

const webpackConfig = {
    entry: './View/src/index.js',
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.js$/
        }, {
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.scss$/
        }]
    },
    output: {
        filename: 'bundle.js',
        path: './View/public'
    },
    resolve: {extensions: ['', '.js', '.json']},
    sassLoader: {outputStyle: 'extended'}
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig.devtool = 'source-map';
    webpackConfig.plugins = [new webpack.optimize.OccurenceOrderPlugin(), new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')}
    }), new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})];
}

module.exports = webpackConfig;
