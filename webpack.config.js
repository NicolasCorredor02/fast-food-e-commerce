const path = require("path");
const basePath = __dirname;
const disPath = "/build";

//HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

//CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {

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
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  },
  plugins: [
    // Plugin HTML index.html
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify:{
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
      }
    }),
    // Plugin HTML pages/menu.html
    new HtmlWebpackPlugin({
      template: "./src/pages/menu.html",
      filename: "pages/menu.html",
      minify:{
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
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
