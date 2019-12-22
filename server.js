const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./apex.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT,() => {
    console.log('json server is running')
})