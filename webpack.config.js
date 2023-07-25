const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "eval",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]", // Output images to 'images' folder
        },
      },
      {
        test: /\.(woff2?|ttf)$/i, // Matches .woff, .woff2, .ttf files
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]", // Output font files to 'fonts' folder
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
