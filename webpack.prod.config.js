const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports.config = {};

module.exports.plugins = [
  new ExtractTextPlugin("style.css"),
  new CleanWebpackPlugin()
];

module.exports.rules = [
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: "[name]__[local]--[hash:base64:5]"
          }
        },
        "sass-loader"
      ]
    })
  },
  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
];
