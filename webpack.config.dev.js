const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const port = process.env.PORT || 3000;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
});