const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: [
      "babel-runtime/regenerator", 
      "webpack-hot-middleware/client?reload=true", 
      "react-hot-loader/patch", "./src/index.js"
    ]
  },
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },

  module: {
    rules: [

      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader" 
          }
        ],
        exclude: /node_modules/
      },
      // { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, {loader: "postcss-loader", options: {config: {path: './config/postcss.config.js'}} } ] },
      {
        test: /\.(css|styl|pcss)$/,
        use: [
          { loader: "style-loader" }, // loader include
          { loader: "css-loader" },
          { loader: "stylus-loader" },
          {
            loader: "postcss-loader",
            options: {config: {path: './config/postcss.config.js'}}
          },
        ]
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      hash: true
    }),
    // new webpack.EnvironmentPlugin(['NODE_ENV'])
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   "ANYTH": JSON.stringify(process.env.ANYTHING)
    // })
  ],
};