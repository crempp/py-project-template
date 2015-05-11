var config = require('./')

module.exports = {
  //src: config.sourceAssets + "//**",
  'dest-js':    config.publicAssets + "/js/vendor",
  'dest-css':   config.publicAssets + "/css/vendor",
  'dest-fonts': config.publicAssets + "/css/fonts",
  'js-filter':  ['*.js', '*.map', '!*.css.map'],
  'css-filter': ['*.css', '*.css.map'],
  'font-filter': ['*.eot', '*.woff', '*.svg', '*.ttf', '*.woff2'],
  'vendor-template-src': config.sourceDirectory + '/templates/vendor-src.html',
  'vendor-template-dest': config.sourceDirectory + '/templates/',
  'vendor-template-dest-name': 'vendor-build.html'
}
