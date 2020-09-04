const servers = require('./servers')

module.exports = (router) => {
  servers(router)
  return router
}