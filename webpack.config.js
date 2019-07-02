const resolve = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const envWP = require(`./webpack.${env.NODE_ENV}.config.js`);

  return {
    ...envWP.config,
    stats: {
      errorDetails: true
    },
    mode: env.NODE_ENV || "development",
    entry: resolve(__dirname, "./src/index.tsx"),
    output: {
      filename: "app.js",
      path: resolve(__dirname, "build/"),
      publicPath: "/",
      globalObject: "this"
    },
    plugins: [
      ...envWP.plugins,
      new HtmlWebpackPlugin({
        template: resolve(__dirname, "./src/template.html"),
        filename: "index.html"
      })
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
      alias: {
        components: resolve(__dirname, "src/Components"),
        containers: resolve(__dirname, "src/Containers"),
        selectors: resolve(__dirname, "src/Selectors"),
        actions: resolve(__dirname, "src/Actions"),
        store: resolve(__dirname, "src/Store")
      }
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        ...envWP.rules
      ]
    }
  };
};
