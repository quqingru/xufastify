const fastify = require('fastify')()
fastify.register(require('fastify-jwt'), {
    secret: 'supersecret'
})

fastify.post('/signup', (req, reply) => {

    var payload = req.params;
    // some code
    //const token = fastify.jwt.sign(payload)

 /*   const token1 = fastify.jwt.sign({ 'foo': 'bar' })
    console.log(token1);
    const decoded1 = fastify.jwt.verify(token1)
    console.log(decoded1);
    console.log("=======================================");


    const token2 = fastify.jwt.sign({ "foo": 'bar' })
    console.log(token2);
    const decoded2 = fastify.jwt.verify(token2)
    console.log(decoded2);
    console.log("=======================================");
*/

    const decoded3 = fastify.jwt.verify(fastify.jwt.sign({ "zhangxu": 'bar',age:12 }))
    console.log(decoded3);
    console.log("=======================================");



    const token = fastify.jwt.sign({ foo: 'bar' })
// synchronously
    const decoded = fastify.jwt.verify(token)
// asycnhronously
    fastify.jwt.verify(token, (err, decoded) => {
        if (err) fastify.log.error(err)
        fastify.log.info(`Token verified. Foo is ${decoded.foo}`)


        console.log(`Token verified. Foo is ${decoded.foo}`)
    })



    reply.send({token})
})


fastify.post('/decode', (req, reply) => {

    var payload = req.params;
    // some code
    const token = fastify.jwt.decode(req.body.token)

    console.log(token)
    reply.send({token})
})

fastify.listen(3000, err => {
    if (err) throw err
})