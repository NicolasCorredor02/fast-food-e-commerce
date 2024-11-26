const path = require("path");
const basePath = __dirname;
const disPath = "/build";

//HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");

//CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { type } = require("os")

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
      {
       test: /\.json$/,
       type: 'json', 
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 8080,
    hot: true
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
    // Puglin HTML pages/user-register.html
    new HtmlWebpackPlugin({
      template: "./src/pages/user-register.html",
      filename: "pages/user-register.html",
      minify: {
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
    filename: "bundle.js",
    publicPath: "/"
  }
};
