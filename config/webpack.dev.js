const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: ["react-hot-loader/patch", "./src/index.js"]
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true
  },
  devtool: "source-map",
  // devtool: 'inline-source-map',
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: "style-loader" }, // loader include
      //     { loader: "css-loader" },
      //     {
      //       loader: "postcss-loader",
      //       options: {config: {path: './config/postcss.config.js'}}
      //     },
      //   ]
      // },
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
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
      // inject: false // не добавлять script тег
    })
  ],
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
