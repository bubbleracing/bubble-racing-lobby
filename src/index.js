const Koa = require('koa')
const Redis = require('redis')
const app = new Koa()
const redis = Redis.createClient('redis://redis')
 
// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})
 
app.listen(8080)


// redis test
redis.on('error', function(error) {
  console.error(error)
})

redis.set('key', 'value', Redis.print)
redis.get('key', Redis.print)