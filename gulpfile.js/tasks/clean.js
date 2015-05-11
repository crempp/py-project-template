var gulp           = require('gulp');
var del            = require('del');
var config         = require('../config');
var htmlConfig     = require('../config/html');
var sassConfig     = require('../config/sass');
var fontConfig     = require('../config/fonts');
var imageConfig    = require('../config/images');
var browserifyConfig = require('../config/browserify');

gulp.task('clean', function (cb) {
  var paths = [
    sassConfig.dest + "/*",
    imageConfig.dest + "/*",
    fontConfig.dest + "/*",
    //htmlConfig.dest + "/*.html",
    //iconFontConfig.sassDest + "/*",
    "!*/**/.gitignore"
  ];

  paths = paths.concat(
    browserifyConfig.bundleConfigs.map(function(el){
      return el.dest + "/*"
    })
  );

  del(paths, cb);
});
