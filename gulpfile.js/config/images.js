var config = require('./')

module.exports = {
  src: [
      config.sourceAssets + "/images/**",
      "!Thumbs.db"
  ],
  dest: config.publicAssets + "/img"
}
