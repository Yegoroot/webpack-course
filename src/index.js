require("webpack-hot-middleware/client?reload=true");
require("babel-runtime/regenerator");
require("babel-register");
require("./index.css");
require("./index.html");

import "./libs/phaser";

import App from "./app";
import React from "react";
import ReactDom from "react-dom";

let a = "qwe111 --- -- ";
let b = "sdf";
console.log(a + b);

ReactDom.render(<App />, document.getElementById("react-root"));
