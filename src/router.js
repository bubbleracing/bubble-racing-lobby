const Router = require('@koa/router')
const endpoints = require('./endpoints')
const router = new Router()

endpoints(router)
module.exports = router