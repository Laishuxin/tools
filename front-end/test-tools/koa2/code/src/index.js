// import module
const Koa = require('koa')
const router = require('./routes')
// end import module

// configure
const SERVER_PORT = 9999
const SERVER_ADDR = '127.0.0.1'
// end configure

const app = new Koa()
app.use(router.routes()).use(router.allowedMethods())

app.listen(SERVER_PORT, SERVER_ADDR)
console.log(`server start at http://${SERVER_ADDR}:${SERVER_PORT}/`)
