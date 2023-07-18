const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports.cleanWebpackPlugin = new CleanWebpackPlugin({
    root: path.resolve(__dirname, "../../build")
});