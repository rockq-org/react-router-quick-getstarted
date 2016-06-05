var path = require('path');

module.exports = {
  cache: true,
  devtool: 'cheap-module-source-map',
  entry: './src/entry.jsx',
  module: {
    loaders: [
      {
        test: /\.(es6|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|less)$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build',
    filename: 'app.js'
  }
};
