const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // or source-map
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
  }
});

