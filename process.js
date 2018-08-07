const yaml = require('js-yaml')
const fs = require('fs')
const envConfig = yaml.safeLoad(fs.readFileSync(`./config/service-${process.env.STAGE}.yml`, 'utf8'))

function getEnvConfig () {
  return envConfig
}

module.exports.getEnvConfig = getEnvConfig
