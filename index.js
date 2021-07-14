const fastify = require('fastify')({
  logger: true,
});

const PORT = process.env.PORT || 3000;

fastify.get('/', ({ query: { payload } }, reply) => {
  reply.send({ hello: payload || 'world' });
});

fastify.listen(PORT, '0.0.0.0', (err, address) => {
  if (err) {
    throw err;
  }
  console.log(`Server listening @ ${address}`);
});
