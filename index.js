const Fastify = require('fastify');
const server = Fastify({logger:true});
const handler = require('./route');


const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');



if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  server.get('/', handler);

  server.get('/ip', async (request, reply) => {
    console.log(request.ip);
    console.log(request.protocol);
    
    return { hello: request.ip };
  });

  server.listen({port:7008});

  console.log(`Worker ${process.pid} started`);
}
