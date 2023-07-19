const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports.htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: "Open Sandbox",
    filename: "index.html",
    template: path.resolve(__dirname, "../../sources/template.html")
});