
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: _dirname + "/public/build/",
    publicPath:'build/',
    filename: 'bundle.js'
  }
}