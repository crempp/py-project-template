var paths           = require('./');

module.exports = {
  // A separate bundle will be generated for each
  // bundle config in the list below
  bundleConfigs: [
    {
      entries: paths.sourceAssets + '/coffee/main.coffee',
      dest: paths.publicAssets + '/js/',
      outputName: 'app.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      transform: ['browserify-coffeelint', 'coffeeify'],
      // list of modules to make require-able externally
      require: ['jquery', 'backbone/node_modules/underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }
    //,{
    //  entries: src + '/javascript/page.js',
    //  dest: dest,
    //  outputName: 'page.js',
    //  // list of externally available modules to exclude from the bundle
    //  external: ['jquery', 'underscore']
    //}
  ]
};