const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
const {paths} = require('./webpack.constants');
const {hasArg, getFileSize} = require('./webpack.utility');

module.exports = {
    entry: paths.src + '/index.js',
    devtool: hasArg('production') ? false : 'cheap-module-source-map',
    mode: hasArg('production') ? 'production' : 'development',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].bundle.js',
        path: hasArg('production') ? paths.build: paths.src,
        publicPath: '/',
    },
    optimization: {
        minimize: hasArg('production'),
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: hasArg('production') && {
            chunks: 'all',
            maxSize: 256000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: module => {
                        // Get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    devServer: {
        contentBase: paths.src,
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            utility: paths.src + '/utility/',
            components: paths.src + '/components/',
            routes: paths.src + '/routes/',
            webrix: hasArg('production') ? 'webrix' : paths.webrix,
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: [
                                paths.resources + '/styles/variables.scss',
                                paths.resources + '/styles/colors.scss',
                                paths.resources + '/styles/mixins.scss',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.mdx?$/,
                use: ['babel-loader', '@mdx-js/loader'],
            },
            {
                test: /\.(png|jpe?g|gif|obj)$/i,
                use: [{loader: 'file-loader'}],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.src + '/index.html',
            scriptLoading: 'defer',
            filename: 'index.html',
            favicon: paths.resources + '/images/favicon.png',
        }),
        new DynamicCdnWebpackPlugin({
            env: hasArg('production') ? 'production' : 'development'
        }),
        new WorkerPlugin({
            globalObject: !hasArg('production') ? 'self' : false,
        }),
        new webpack.DefinePlugin({
            LIBRARY_SIZE: JSON.stringify(getFileSize(paths.node_modules + '/webrix/build/webrix.cjs.min.js')),
        })
    ]
};