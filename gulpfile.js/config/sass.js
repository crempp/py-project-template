var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  watch: config.sourceAssets + "/scss/**/*.{sass,scss}",
  //src: config.sourceAssets + "/scss/**/*.{sass,scss}",
  src: config.sourceAssets + "/scss/**/main.scss",
  name: "app.css",
  dest: config.publicAssets + '/css',
  settings: {
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: 'assets/images' // Used by the image-url helper
  }
}