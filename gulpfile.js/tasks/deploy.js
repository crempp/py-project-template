var gulp    = require('gulp');
var open    = require('open');
var config  = require('../config/deploy');
var shell   = require('gulp-shell');

//gulp.task('deploy', ['build:production'], function() {
//  return gulp.src(config.src)
//    .pipe(ghPages())
//    .on('end', function(){
//      open(config.url);
//    })
//});

gulp.task('deploy', ['build:production'], shell.task([
  config.commit,
  config.cmd
]));
