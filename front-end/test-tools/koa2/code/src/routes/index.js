// import module
const Router = require('@koa/router')
const LogString = require('../utils/log_string')
// end import module

const router = new Router()

// application middleware
router.use((ctx, next) => {
  console.log(LogString.DELIMITER_LOG)
  console.log('request url: ')
  console.log(ctx.url)
  console.log(LogString.DELIMITER_LOG)
  return next()
})

router.get('/api', (ctx, next) => {
  ctx.body = 'get api'
  return next()
})

module.exports = router
