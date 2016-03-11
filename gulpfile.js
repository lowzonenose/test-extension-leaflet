"use strict";

var gulp = require('gulp');
var open = require('open');

var $ = require('gulp-load-plugins')();

// Default task
gulp.task('default', function () {
    gulp.start('server');
});

// Connect
gulp.task('connect', function(){
    $.connect.server({
        root: 'app',
        port: 9000,
        livereload: true
    });
});

// Open
gulp.task('server', ['connect'], function() {
  open("http://localhost:9000/index.html");
});
