const path = require("path");

module.exports = {
  // O dev server faz parte da aula sobre webpack-dev-server
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 8000,
  },
  entry: {
    index: "./src/index.js",
    hello: "./src/hello.js",
  },
  mode: "production",
  output: {
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
};
