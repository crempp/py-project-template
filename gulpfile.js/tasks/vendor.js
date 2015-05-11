var gulp           = require('gulp');
var gulpFilter     = require('gulp-filter');
var uglify         = require('gulp-uglify');
var rename         = require('gulp-rename');
var flatten        = require('gulp-flatten');
var inject         = require('gulp-inject');
var minifycss      = require('gulp-minify-css');
var bower          = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var config         = require('../config/vendor');
var htmlConfig     = require('../config/html');
var merge          = require('merge-stream');

var print = require('gulp-print');

var vendorTask = function() {
	var jsFilter = gulpFilter(config['js-filter']);
  var cssFilter = gulpFilter(config['css-filter']);
  var fontFilter = gulpFilter(config['font-filter']);

  var options = {};
  //  debugging: true,
  //  overrides: {
  //    'smartmenus': {
  //      "main": {
  //        "production": [
  //          "dist/jquery.smartmenus.min.js",
  //          "dist/css/sm-core-css.css"
  //        ],
  //        "testing": [
  //          "dist/jquery.smartmenus.js",
  //          "dist/css/sm-core-css.css"
  //        ]
  //      }
  //    }
  //  }
  //};

  //var bowerInstall = bower();
  var bowerStream = gulp.src(mainBowerFiles(options));

	var jsStream = bowerStream
    // grab vendor js files from bower_components, minify and push in /public
    .pipe(jsFilter)
    .pipe(gulp.dest(config['dest-js']))
    .pipe(uglify())
    .pipe(rename({
          suffix: ".min"
      }))
    .pipe(gulp.dest(config['dest-js']))
    //.pipe(jsFilter.restore())

  var cssStream = bowerStream
    // grab vendor css files from bower_components, minify and push in /public
    //.pipe(print())
    .pipe(cssFilter)
    //.pipe(print())
    .pipe(gulp.dest(config['dest-css']))
    //.pipe(minifycss())
    //.pipe(rename({
    //      suffix: ".min"
    //  }))
    //.pipe(gulp.dest(config['dest-css']))

    //.pipe(cssFilter.restore())

  var fontStream = bowerStream
    // grab vendor font files from bower_components and push in /public
    .pipe(fontFilter)
    .pipe(flatten())
    .pipe(gulp.dest(config['dest-fonts']))

  return gulp.src(config['vendor-template-src'])
    .pipe(inject(merge(jsStream, cssStream)))
    .pipe(rename(config['vendor-template-dest-name']))
    .pipe(gulp.dest(config['vendor-template-dest']));
};

gulp.task('vendor:development', function() {
  vendorTask('development');
});

gulp.task('production', function() {
  vendorTask('production');
});

gulp.task('vendor', ['vendor:development']);