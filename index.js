//imoprtar modulo readline
const readline = require('readline');

//interfaz de consola para interactuar en consola
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//array vacio para almacenar las tareas
const tasks = [];

//funcion para mostrar tareas
showTasks = () => {
    console.log("Lista de Tareas con Node:");
    tasks.forEach((task, index) => {
        const status = task.completed ? 'Completada' : 'Pendiendte';
        console.log(`${index + 1}. [${status}] - ${task.description}`);
    });
}

//funcion para añadir una tarea
addTask = (description) => {
    tasks.push({
        description,
        completed: false,
    });
    console.log("Tarea añadida");
}

//funcion para eliminar tarea
deleteTask = (index) => {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Tarea eliminada");
    } else {
        console.log("No hay tareas para eliminar");
    }
}