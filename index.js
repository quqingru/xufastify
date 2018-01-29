/**
 * Created by zhangxu on 2018/1/29.
 */
// Require the framework and instantiate it
const fastify = require('fastify')()

// Declare a route
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
})
