var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);

//compiler.run(function(err, stats) {});
compiler.watch({}, function(err, stats) {});
