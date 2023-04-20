const jsonServer = require('json-server');
const server = jsonServer.create();
const data = require('./data.json');
const router = jsonServer.router(data);
server.use(jsonServer.defaults());
server.use(router);

server.listen(4500, () => {
    console.log('JSON Server is running on port 4500');
  });