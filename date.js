const moment = require('moment')
const parseFormat = require('moment-parseformat')
const API_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZZ'
const DB_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'

var _convertDateTime = function (iso8601, format) {
  var converted = moment(iso8601, [moment.ISO_8601, parseFormat(iso8601)])

  return (converted.isValid()) ? converted.utcOffset('+09:00')
    // .utc()
    .format(format) : moment.utc()
    .format(format)
}

var nowForDb = function () {
  return moment().utcOffset('+09:00')
    // .utc()
    .format(DB_DATE_FORMAT)
}

var nowForApi = function () {
  return moment().utcOffset('+09:00')
    // .utc()
    .format(API_DATE_FORMAT)
}

var toDateTimeForDb = function (iso8601) {
  if (!iso8601) {
    return null
  }

  if (iso8601 === '0000-00-00 00:00:00') {
    iso8601 = nowForDb()
  }

  return _convertDateTime(iso8601, DB_DATE_FORMAT)
}

var toDateTimeForApi = function (iso8601) {
  if (!iso8601) {
    return null
  }

  if (iso8601 === '0000-00-00 00:00:00') {
    iso8601 = nowForApi()
  }

  return _convertDateTime(iso8601, API_DATE_FORMAT)
}

module.exports = {
  API_DATE_FORMAT: API_DATE_FORMAT,
  DB_DATE_FORMAT: DB_DATE_FORMAT,
  toDateTimeForDb: toDateTimeForDb,
  nowForDb: nowForDb,
  toDateTimeForApi: toDateTimeForApi,
  nowForApi: nowForApi
}
