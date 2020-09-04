const redis = require('../redis')

module.exports = (router) => {

  router.get('/servers', (ctx) => {
    ctx.body = JSON.stringify({message: 'I dunno, some servers'})
  })
  
  router.put('/servers/:id', async (ctx) => {
    const id = ctx.params.id
    const info = ctx.request.body
    await redis.setAsync(id, JSON.stringify(info))
    ctx.body = info
  })
  
  router.get('/servers/:id', async (ctx) => {
    const id = ctx.params.id
    const info = JSON.parse(await redis.getAsync(id))
    ctx.body = info
  })
}