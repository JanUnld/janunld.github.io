#!/bin/env node

// Gulp dependencies:
const gulp     = require('gulp'),
      plugins  = require('gulp-load-plugins')(),
      sequence = plugins['sequence'];
// Node dependencies:
const path = require('path');

!function(config) {

  /**
   * SASS:
   */
  !function(sass) {

    // Invokes a job to cleanup the destination directory
    // for the sass preprocessor output
    gulp.task('sass-build-clean', function() {

      return gulp.src([ sass.destination.base ], { read: false })
        .pipe(plugins['rimraf']());

    });
    // Invokes a job to build the sass code into cleaned and
    // vendor prefixed stylesheet data
    gulp.task('sass-build', function() {

      return gulp.src([
        path.join(sass.source.base, '**/*.sass'),
        path.join('!', sass.source.base, '**/_*.sass')
      ]).pipe(plugins['sass']().on('error', plugins['sass'].logError))
        .pipe(plugins['autoprefixer']())
        .pipe(plugins['cleanCss']())
        .pipe(plugins['concat'](sass.destination.filename))
        .pipe(gulp.dest(sass.destination.base));

    });
    // Invokes the default task chain for building the sass files
    gulp.task('sass-build:*', sequence('sass-build-clean', 'sass-build'));

    // Watches any changes to sass files
    gulp.task('sass-watch', function() {

      return gulp.watch([
        path.join(sass.source.base, '**/*.sass')
      ], [ 'sass-build:*' ]);

    });

  }(config.sass);

}(require('./config/gulp.conf'));