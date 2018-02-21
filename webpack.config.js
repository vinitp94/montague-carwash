const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ],
          fallback: "style-loader"
        })
      },
    ],
  },
  // plugins: process.argv.indexOf('-p') === -1 ? [] : [
  //   new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
  //   new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
  // ],
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
  ]
};
