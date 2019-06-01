const prodConfig = require('./config.production');

module.exports = Object.assign(prodConfig, {
  tenant: {
    name: 'HCSC',
  },

  build: {
    destination: {
      path: 'build_production_hcsc',
    },
  },
})