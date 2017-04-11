var gulp = require('gulp');
// var rimraf = require('gulp-rimraf');
var sass = require('gulp-ruby-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('copy', function () {
  gulp.src('./docs/index.html')
    .pipe(gulp.dest('build'));

  return gulp.src('./docs/img/*')
    .pipe(gulp.dest('build/img'));
});

gulp.task('sass', function () {
  return  gulp.src(['./docs/**/*.scss'])
              .pipe(sass({ loadPath : ['bower_components', 'node_modules'],}))
               .on('error', function (err) { console.log(err.message); })
              .pipe(gulp.dest('./build'));
});

gulp.task('server', ['copy', 'sass'], function (callback) {
  var myConfig = require('./webpack.config.js');
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, process.env.HOST_IP || 'localhost', function (err, result) {
    
  });
});

gulp.task('watch', function () {
  gulp.watch(['./docs/**/*{scss,sass}'], ['sass']);
  gulp.watch(['./docs/index.html'], ['copy']);
});