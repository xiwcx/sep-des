'use strict';

const config = require('../config');
const gulp = require('gulp');
const rollup = require('rollup-stream');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('scripts', function() {
  return rollup({
    entry: config.scriptsSrc,
    sourceMap: true
  })
  .pipe(source(config.scriptsSrcName, config.scriptsSrcDir))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(config.scriptsCompiledDir));
});
