const path = require("path");

const { htmlWebpackPlugin } = require("./plugins/html-webpack-plugin");

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "../sources/index.ts"),
    },
    output: {
        path: path.resolve(__dirname, "../build/scripts"),
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
    resolve: {
        extensions: [ ".js", ".ts", ".scss", ".sass" ]
    },
    plugins: [
        htmlWebpackPlugin
    ]
}