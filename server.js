const http = require('http');
const { tasks } = require('./index')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/tasks') {
        //respuesta en formato JSON para solicitud de tipo GET en /tasks
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(tasks));
    } else {
        //rutas alternativas y codigos de estado 
        res.statusCode = 204;
        res.end('No hay contenido en la ruta seleccionada');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})