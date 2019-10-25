const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.config = {};

module.exports.plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "style.css",
    chunkFilename: "[id].css",
    ignoreOrder: false
  })
];

module.exports.rules = [
  {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]___[hash:base64:5]"
          },
          sourceMap: false
        }
      },
      { loader: "sass-loader" }
    ]
  },
  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
];
