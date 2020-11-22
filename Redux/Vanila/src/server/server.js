module.exports = async function (fastify, opts) {
  const path = require('path');
  console.log(process.cwd());

  fastify.register(require('fastify-static'), {
    root: path.join(process.cwd(), 'dist'),
  })

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}
