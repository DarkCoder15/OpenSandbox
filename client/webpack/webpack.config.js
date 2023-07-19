const path = require("path");

const { htmlWebpackPlugin } = require("./plugins/html-webpack-plugin");
const { miniCssExtractPlugin } = require("./plugins/mini-css-extract-plugin");

const { cleanWebpackPlugin } = require("./plugins/clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "../sources/scripts/index.ts"),
    },
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [ "ts-loader" ],
                exclude: /node_modules/
            },
            {
                test: /\.s(a|c)ss$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        cleanWebpackPlugin
    ]
}