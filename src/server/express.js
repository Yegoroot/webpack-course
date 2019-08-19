import express from "express";
import path from "path";

const server = express();

/**
 * webpack function accepts one parametr (webpack.config)
 * and return the compiler
 * we can use this compiler wth a middleware
 */
const webpack = require("webpack");
const config = require("../../config/webpack.dev");
const compiler = webpack(config);
/**
 * webpack-dev-middleware is Immediately Invoked Function (IIFE)
 * and take two parametr: compiler, piece of config
 */
const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer // webpack.config is object
);
server.use(webpackDevMiddleware);

/**
 * we specify express where working files was lie
 */
const staticMiddleware = express.static("./dist");
server.use(staticMiddleware);
server.listen(8080, () => {
  console.log("Server is listenning");
});
