const path = require("path");

const { htmlWebpackPlugin } = require("./plugins/html-webpack-plugin");
const { cleanWebpackPlugin } = require("./plugins/clean-webpack-plugin");

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
                test: /\.s(a|c)ss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        cleanWebpackPlugin
    ]
}