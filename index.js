const Fastify = require('fastify');
const server = Fastify({logger:true});
const handler = require('./route');

server.get('/', handler);

server.listen({port:3000});

