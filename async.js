const debug = require('debug')('summer-ec-crawler:helper:async')
const Async = require('async')

// await retryAsync(setLimit.bind(null, page, searchLimit))
async function retryAsync (apiMethod, retryTimes = 3) {
  return new Promise((resolve, reject) => {
    Async.retry({
      times: retryTimes,
      interval: function (retryCount) {
        debug(`[RETRY] function: ${apiMethod.name} retryCount : ${retryCount}/${retryTimes}`)
        return 50 * Math.pow(2, retryCount)
      }
    }, apiMethod, function (err, result) {
      if (err) {
        return reject(err)
      }

      return resolve(result)
    })
  })
}

module.exports = {
  retryAsync
}
