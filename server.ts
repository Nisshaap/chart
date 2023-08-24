const jsonServer = require('json-server');
const path = require('path');


const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = 3001; // You can choose any available port

server.listen(port, () => {
  console.log(`Mock API server is running on port ${port}`);
});

export {}; // Add this line to make 'server.ts' a module
