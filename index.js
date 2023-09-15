//iniciando el servidor
const http = require("http");
const host = "localhost";
const port = 8000;

//lista de tareas
const tasks = [
  { id: 1, description: "Presentar entregable de node.js", completed: false },
  { id: 1, description: "Preparar la cena", completed: true },
  { id: 1, description: "Leer 10 paginas de habitos atomicos", completed: true }
];

//configurando respuesta de solicitud y creando el servidor
const server = http.createServer((req, res) => {
  if (req.url === "/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404);
    res.end("Direccion no encontrada");
  }
});

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
