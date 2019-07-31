import express from "express";
import path from "path";

const server = express();

const webpack = require("webpack");
const config = require("../../config/webpack.dev"); // config webpack dev
const compiler = webpack(config); // webpack function take one parametr

const staticMiddleware = express.static("./dist");
server.use(staticMiddleware);

server.listen(8080, () => {
  console.log("Server is listenning");
});
