const Redis = require('redis')
const { promisify } = require("util");

const redis = Redis.createClient('redis://redis')
redis.getAsync = promisify(redis.get).bind(redis)
redis.setAsync = promisify(redis.set).bind(redis)

module.exports = redis