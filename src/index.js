require("webpack-hot-middleware/client?reload=true");
require("babel-runtime/regenerator");
require("babel-register");
require("./style/index.styl");
require("./index.html");

import "./libs/phaser";

import App from "./app";
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<App />, document.getElementById("react-root"));
