const webpack = require('webpack');

module.exports = {
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/dist'
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
