const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            { 
                                loader: 'css-loader',
                                options: {
                                    // minimize: true
                                }
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    }
                )
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/style-[hash:8].css', {
            filename: 'style-[hash:8].css',
            disable: false,
            allChunks: true,
        }),
        new FaviconsWebpackPlugin({
            logo: './public/favicon.png',
            prefix: 'assets/favicons/',
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'public/favicon.png'
        }),
        
        new ManifestPlugin({
            fileName: 'asset-manifest.json', // Not to confuse with manifest.json 
        }),
        new SWPrecacheWebpackPlugin({
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            logger(message) {
                if (message.indexOf('Total precache size is') === 0) {
                return;
                }
                console.log(message);
            },
            minify: true,
            navigateFallback: '/index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
        }),
        new CopyWebpackPlugin([
            './public/manifest.json',
            './public/robots.txt' // define the path of the files to be copied
        ])
    ],
};