'use strict';

const bs = require('browser-sync').get('devServer');
const config = require('../config');
const gulp = require('gulp');

// Static server
gulp.task('serve', ['styles'], function() {
  bs.init({
    open: 'external',
    port: 3001,
    server: {
      baseDir: [
        config.rootDir,
        config.tmpDir
      ]
    }
  });

  // watch source files
  bs.watch(config.rootDir + 'index.html', bs.reload);
  // gulp.watch(config.scriptsSrcDir + '**/*.{js,hbs}', ['scripts']);
  gulp.watch(config.stylesSrcDir + '**/*.scss', ['styles']);

  // watch compiled files
  bs.watch(config.tmpDir).on('change', bs.reload);
});
