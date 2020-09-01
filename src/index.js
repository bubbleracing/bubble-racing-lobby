const Koa = require('koa')
const Redis = require('redis')
const bodyParser = require('koa-bodyparser')
const Router = require('@koa/router')

const app = new Koa()
const redis = Redis.createClient('redis://redis')
const router = new Router()

// routes
router.get('/', (ctx, next) => {
  ctx.body = 'Hello Koa'
})

router.get('/test', (ctx) => {
  ctx.body = 'This is a test'
})

// parse incoming json requests
app.use(bodyParser({enableTypes: ['json']}))

// use the router
app.use(router.routes())
app.use(router.allowedMethods())

// hey! listen! (it's me, navi)
app.listen(8080)


// redis test
redis.on('error', function(error) {
  console.error(error)
})

redis.set('key', 'value', Redis.print)
redis.get('key', Redis.print)