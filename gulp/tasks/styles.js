'use strict';

const autoprefixer = require('gulp-autoprefixer');
const bs = require('browser-sync').get('devServer');
const config = require('../config');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src(config.stylesSrc)
    .pipe(sourcemaps.init())
      .pipe(sass({errLogToConsole: true}))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.stylesCompiledDir))
    .pipe(bs.stream({once: true}));
});
