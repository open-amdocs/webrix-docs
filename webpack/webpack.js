const {paths} = require('./webpack.constants');
const {hasArg} = require('./webpack.utility');
// const renderer = require('./plugins/MarkdownRenderer');
// const GenerateHTML = require('./plugins/GenerateHTML');

module.exports = {
    entry: paths.src + '/index.js',
    devtool: hasArg('production') ? false : 'eval-source-map',
    mode: hasArg('production') ? 'production' : 'development',
    output: {
        filename: 'index.min.js',
        path: paths.src,
    },
    optimization: {
        minimize: hasArg('production'),
    },
    devServer: {
        contentBase: paths.src,
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        // alias: {
        //     truchet: paths.src + '/index.js'
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
                                paths.resources + '/variables.scss',
                                paths.resources + '/colors.scss',
                                paths.resources + '/mixins.scss',
                            ]
                        }
                    }
                ]
            },
            // {
            //     test: /\.md$/,
            //     use: [
            //         {loader: "html-loader"},
            //         {loader: "markdown-loader", options: {renderer}}
            //     ]
            // }
        ]
    },
    // plugins: [
    //     new GenerateHTML(),
    // ]
};