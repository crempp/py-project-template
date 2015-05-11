var config = require('./')

module.exports = {
  src: [
    config.sourceDirectory + '/vendor/**/*.css',
    '!' + config.sourceDirectory + '/vendor/**/*min.css'
  ],
  'src-min': [
      config.sourceDirectory + '/vendor/**/*min.css'
  ],
  maps: config.sourceDirectory + '/vendor/**/*.css.map',
  dest: config.publicDirectory + '/build/css',
  name: 'vendor.css'
};