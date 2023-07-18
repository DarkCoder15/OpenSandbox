const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "../build/[name].[contenthash].css"
});