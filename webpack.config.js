const path = require("path");
const basePath = __dirname;
const disPath = "/build";

//HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

//CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  //mode
  mode: "development",
  //entry point
  entry: "./src/js/script.js",
  //module point
  module: {
    rules: [
      {
        //rule for CSS
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  },
  plugins: [
    // Plugin HTML
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // Plugin CSS
    new MiniCssExtractPlugin({
        filename: 'bundle.css'
    })
  ],
  output: {
    path: path.join(basePath, disPath),
    filename: "bundle.js"
  }
};
