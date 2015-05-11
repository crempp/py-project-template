var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var flatten     = require('gulp-flatten')
var config      = require('../config/fonts');
var gulp        = require('gulp');

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(flatten())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
