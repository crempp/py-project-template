var browserify   = require('browserify');
//var browserSync  = require('browser-sync');
var watchify     = require('watchify');
var mergeStream  = require('merge-stream');
var bundleLogger = require('../lib/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../lib/handleErrors');
var source       = require('vinyl-source-stream');
var config       = require('../config/browserify');
var _            = require('lodash');

var browserifyTask = function(env) {

  var browserifyThis = function(bundleConfig) {
    console.log("here")

    if(env == 'development') {
      // Add watchify args and debug (sourcemaps) option
      _.extend(bundleConfig, watchify.args, { debug: true });
      // A watchify require/external bug that prevents proper recompiling,
      // so (for now) we'll ignore these options during development. Running
      // `gulp browserify` directly will properly require and externalize.
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);
    }

    var b = browserify(bundleConfig);

    var bundle = function() {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName);
      return b
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specify the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest));
        //.pipe(browserSync.reload({
        //  stream: true
        //}));
    };

    if(env == 'development') {
      // Wrap with watchify and rebundle on changes
      b = watchify(b);
      // Rebundle on update
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      // Sort out shared dependencies.
      // b.require exposes modules externally
      if(bundleConfig.require) b.require(bundleConfig.require);
      // b.external excludes modules from the bundle, and expects
      // they'll be available externally
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  return mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));
};

gulp.task('browserify:development', function() {
  browserifyTask('development')
});

gulp.task('browserify:production', function() {
  return browserifyTask('production');
});

gulp.task('browserify', function() {
  return browserifyTask('development');
});

// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask;