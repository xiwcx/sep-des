'use strict';

const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const config = require('../config');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function(){
  return browserify(config.scriptsSrc)
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.tmpDir))
});
