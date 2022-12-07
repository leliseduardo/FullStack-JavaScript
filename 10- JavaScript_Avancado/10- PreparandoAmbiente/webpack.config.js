const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  output: {
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
};
