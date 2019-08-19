import express from "express";
import path from "path";

const server = express();

/**
 * webpack function accepts one parametr
 * this parametr is webpack.config.dev
 */
const webpack = require("webpack");
const config = require("../../config/webpack.dev");
const compiler = webpack(config);

/**
 * we specify express where working files was lie
 */
const staticMiddleware = express.static("./dist");
server.use(staticMiddleware);

server.listen(8080, () => {
  console.log("Server is listenning");
});
