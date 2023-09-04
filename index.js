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

//funcion para marcar una tarea como completada
completeTask = (index) => {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log("Tarea marcada como completada");
    } else {
        console.log("No Tiene tareas pendientes");
    }
}

//logica para interactuar con el app

//recibir input para realizar una accion
whatToDoNext = () => {
    userInterface.question(
        "¿Que accion desea realizar?: (agregar/borrar/terminar/ver/salir) ",
        (action) => {
            switch (action) {
                case 'agregar':
                    userInterface.question("Nombre de la tarea: ", (description) => {
                        addTask(description);
                        whatToDoNext();
                    });
            break;
                case 'borrar':
                    showTasks();
                    userInterface.question("Indique cual tarea eliminar: ", (indexStr) => {
                        const index = parseInt(indexStr) - 1;
                        deleteTask(index);
                        whatToDoNext();
                    });
            break;
                case 'terminar':
                    showTasks();
                    userInterface.question("Indique cual tarea ya fue realizada: ", (indexStr) => {
                        const index = parseInt(indexStr) - 1;
                        completeTask(index);
                        whatToDoNext();
                    });
            break;
                case 'ver':
                showTasks();
                whatToDoNext();
            break;
                case 'salir':
                console.log("Saliendo del programa");
                userInterface.close();
            break;
                default:
                console.log("Solicite una de las acciones en la lista: (agregar/borrar/terminar/ver/salir)");
                whatToDoNext();
            break;
            }
        }
    );
}

//Ejecutar el app