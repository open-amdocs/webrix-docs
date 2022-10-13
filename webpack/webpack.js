const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SitmapGeneratorPlugin = require('./plugins/SitemapGenerator');
const {paths} = require('./webpack.constants');
const {getFileSize} = require('./webpack.utility');

module.exports = env => ({
    entry: paths.src + '/index.js',
    devtool: env.production ? false : 'cheap-module-source-map',
    mode: env.production ? 'production' : 'development',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: env.production ? paths.build: paths.src,
        publicPath: '/',
    },
    optimization: {
        minimize: env.production,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: env.production && {
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
        static: paths.src,
        historyApiFallback: true,
        compress: true,
        port: 9000,
        hot: !env.production,
        liveReload: !env.production,
        devMiddleware: {
            writeToDisk: env.production,
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            components: paths.src + '/components/',
            content: paths.src + '/content/',
            resources: paths.src + '/resources/',
            routes: paths.src + '/routes/',
            utility: paths.src + '/utility/',
            react: paths.node_modules + '/react/',
            webrix: env.production ? paths.node_modules + '/webrix/' : paths.webrix,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                paths.resources + '/styles/variables.scss',
                                paths.resources + '/styles/colors.scss',
                                paths.resources + '/styles/mixins.scss',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.mdx?$/,
                use: ['babel-loader', '@mdx-js/loader'],
            },
            {
                test: /\.(png|jpe?g|gif|obj|mp4|svg)$/i,
                use: [{loader: 'file-loader'}],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.src + '/index.html',
            scriptLoading: 'defer',
            filename: 'index.html',
            favicon: paths.resources + '/svg/logo-icon.svg',
        }),
        new webpack.DefinePlugin({
            LIBRARY_SIZE: JSON.stringify(getFileSize(paths.node_modules + '/webrix/webrix.umd.min.js')),
        }),
        new SitmapGeneratorPlugin(env),
        new webpack.ProgressPlugin(),
    ],
});