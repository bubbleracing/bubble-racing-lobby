const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./router')

const app = new Koa()

// parse incoming json requests
app.use(bodyParser())

// use the router
app.use(router.routes())
app.use(router.allowedMethods())

// hey! listen! (it's me, navi)
app.listen(8080)