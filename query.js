const mysql = require('mysql')

function escape (str, options = {}) {
  return mysql.escape(str)
}

function isNewInserted (inserted) {
  if (inserted && inserted[0] && inserted[0].affectedRows > 0) {
    return parseInt(inserted[0].affectedRows) === 1
  }

  return false
}

module.exports = {
  escape,
  isNewInserted
}
