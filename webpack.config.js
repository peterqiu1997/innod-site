const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, "/src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./index.js",
  module: {
    /*preLoaders: [ # ESLint 
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      }
    ],*/
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties'],
        }
      },
      {
        test:/\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=8192&name=images/[name].[ext]' 
      }
    ]
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
