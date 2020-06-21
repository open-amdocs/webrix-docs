const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
const {paths} = require('./webpack.constants');
const {hasArg} = require('./webpack.utility');

module.exports = {
    entry: paths.src + '/index.js',
    devtool: hasArg('production') ? false : 'cheap-module-source-map',
    mode: hasArg('production') ? 'production' : 'development',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].bundle.js',
        path: hasArg('production') ? paths.build: paths.src,
        publicPath: hasArg('production') ? 'build/' : '/',
    },
    optimization: {
        minimize: hasArg('production'),
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
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
        // alias: {
        //     models: paths.resources + '/models/'
        // }
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
                test: /\.scss$/,
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
                test: /\.(png|jpe?g|gif|obj)$/i,
                use: [{loader: 'file-loader'}],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.src + '/index.html',
            scriptLoading: 'defer',
            filename: hasArg('production') ? '../index.html' : 'index.html',
            favicon: paths.resources + '/images/favicon.png',
        }),
        new DynamicCdnWebpackPlugin({
            env: hasArg('production') ? 'production' : 'development'
        }),
        new WorkerPlugin({
            globalObject: !hasArg('production') ? 'self' : false,
        }),
    ]
};