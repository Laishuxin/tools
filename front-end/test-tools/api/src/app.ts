import Koa from 'koa'
import cors from 'koa2-cors'
import router from './server/routes'
import { SPLIT_LINE_LOG } from './utils/logUtils'

const appRootPath = require('app-root-path')
let _projectName: any = 'api'
if (process.env.NODE_PROjECT_NAME) {
  _projectName = process.env.NODE_PROjECT_NAME
}

const CONFIG = require(`${appRootPath}/${_projectName}.config.js`)
const app = new Koa()

// greeting
app.use((ctx, next) => {
  ctx.body = 'hello'
  if (ctx.url !== '/favicon.ico') {
    console.log(SPLIT_LINE_LOG)
    console.log('visit url = \n', ctx.url)
    console.log(SPLIT_LINE_LOG)
  }
  return next()
})

// allow cross origin
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(CONFIG.server.port)
console.log(`
App running at:
  http://${CONFIG.server.addr}:${CONFIG.server.port}/   
`)
