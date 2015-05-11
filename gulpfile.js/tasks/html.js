var browserSync  = require('browser-sync');
var config       = require('../config/html');
//var vendorConfig = require('../config/vendor');
var gulp         = require('gulp');
//var gulpFilter   = require('gulp-filter');
var swig         = require('gulp-swig');
//var inject       = require('gulp-inject');
var handleErrors = require('../lib/handleErrors');
//var mainBowerFiles = require('main-bower-files');

gulp.task('html', function() {
  //var jsFilter = gulpFilter(vendorConfig['js-filter']);
  //var cssFilter = gulpFilter(vendorConfig['css-filter']);
  //var fontFilter = gulpFilter(vendorConfig['font-filter']);

  //var jsStream = gulp.src(mainBowerFiles()).pipe(jsFilter);
  //var cssStream = gulp.src(mainBowerFiles()).pipe(cssFilter);
  //var fontStream = gulp.src(mainBowerFiles()).pipe(fontFilter);

  return gulp.src(config.src)
    .pipe(swig(config.swig))
    .on('error', handleErrors)
    //.pipe(inject(jsStream))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
