var webpack = require('webpack');
var configs = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(configs);

var server = new WebpackDevServer(compiler, {
  publicPath: configs.output.publicPath
});

server.listen(3000);
