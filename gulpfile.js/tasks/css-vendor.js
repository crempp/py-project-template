var concat       = require('gulp-concat');
var gulp         = require('gulp');
var rename       = require("gulp-rename");
var config       = require('../config/css-vendor');

var vendorCSS = function(env) {
  var src;
  if(env == 'development') {
    src = config.src
  } else {
    src = config['src-min']
  }

  // First concat vendor styles into vendor.css
  gulp.src(src)
      .pipe(concat(config.name))
      .pipe(gulp.dest(config.dest));
  // Then copy map files
  gulp.src(config.maps)
      .pipe(rename(function(path) {
              path.dirname = '';
          }))
      .pipe(gulp.dest(config.dest));
};

gulp.task('css-vendor:development', function() {
  vendorCSS('development');
});

gulp.task('css-vendor:production', function() {
  vendorCSS('production');
});

gulp.task('css-vendor', ['css-vendor:development']);