const webpack = require('webpack');

module.exports = {
  target: "node",
  name: "server",
  entry: "./server/index.js",
  mode: "development",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
     rules: [
         {
             test: /\.js$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
         }
     ]
   },
  plugins: []
};
