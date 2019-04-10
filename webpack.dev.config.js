const resolve = require("path").resolve;
const webpack = require("webpack");

module.exports.config = {
  watch: true,
  devtool: "source-map",
  devServer: {
    port: 5000,
    contentBase: resolve(__dirname, "assets"),
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    compress: true,
    hot: true,
    historyApiFallback: true
  }
};

module.exports.plugins = [new webpack.HotModuleReplacementPlugin()];

module.exports.rules = [
  {
    test: /\.scss$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[name]__[local]--[hash:base64:5]"
        }
      },
      { loader: "sass-loader" }
    ]
  }
];
