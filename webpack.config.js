const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Autoprefixer = require('autoprefixer');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index: path.resolve(__dirname, './scripts/script.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        assetModuleFilename: 'assets/[name].[hash].[ext]',
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'scripts/script.js'),
        },
        compress: true,
        port: 4200,
    },

    devtool: isDevelopment ? 'source-map' : false,

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
