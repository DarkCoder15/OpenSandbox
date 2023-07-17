const webpack = require("webpack");
const path = require("path");

const { cleanWebpackPlugin } = require("./plugins/clean-webpack-plugin.js");

const environment = process.env.NODE_ENV == "production";

module.exports = {
    entry: {
        openSanbox: "../sources/scripts/index.ts",
    },
    output: {
        filename: environment ? "[name].[contenthash].js" : "[name].js",
        path: path.resolve(__dirname, "../build/scripts")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [ "" ],
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                use: [ "ts-loader" ],
                exclude: /node_modules/
            },
            {
                test: /\.s(a|c)ss$/,
                use: [ "" ]
            }
        ]
    },
    resolve: {
        extensions: [ "*", ".js", ".jsx", ".sass", ".scss" ]
    },
    plugins: [
        cleanWebpackPlugin
    ],
    devServer: {
        port: 3000
    },
    mode: environment ? "production" : "development"
}