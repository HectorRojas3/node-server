//imoprtar modulo readline
const readline = require('readline');

//interfaz de consola para interaccion entre usuario y aplicacion
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
        const status = task.completed ? 'Completada' : 'Pendiente';
        console.log(`${index + 1}. [${status}] - ${task.description}`);
    });
}

/* 
//v1.0
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
*/

/* 
//async, await version
//crear tarea
async function addTask (description) {
    return new Promise ((res, rej) => {
        //Funcion para simular operacion asincrona con retraso
        setTimeout(() => {
            tasks.push({
                description,
                completed: false,
            });
            res("Tarea añadida");
        }, 1000);
    })
}

//eliminar tarea
async function deleteTask (index) {
    return new Promise ((res, rej) => {
        //Funcion para simular operacion asincrona con retraso 
        setTimeout(() => {
            if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        res("Tarea marcada como completada");
    } else {
        rej("No Tiene tareas pendientes");
    }
        }, 1000);
    })
} 



//completar tarea
async function completeTask (index){
    return new Promise ((res, rej) => {
        //Funcion para simular operacion asincrona con retraso
        setTimeout(() => {
            if (index >= 0 && index < tasks.length) {
                tasks[index].completed = true;
                res("Tarea marcada como completada");
            } else {
                rej("No Tiene tareas pendientes");
            }
        }, 1000);
    })
} 
*/

// version then() method
// funcion para crear tarea
function addTask(description) {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            tasks.push({
                description,
                completed: false,
            });
            res("tarea añadida")
        }, 1000);
    });
}

//funcion para borrar tarea
function deleteTask(index) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (index >= 0 && index < tasks.length) {
                tasks.splice(index, 1);
                res("tarea eliminada");
            } else {
                rej("no hay tareas para eliminar");
            }
        }, 1000);
    });
}

//funcion para terminar tarea
function completeTask(index) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (index >= 0 && index < tasks.length) {
                tasks[index].completed = true;
                res("tarea completada");
            } else {
                rej("no tienes tareas pendientes");
            }
        }, 1000);
    })
}


//logica para interactuar con el app

/* 
//v1.0
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
*/


//async, await version
// Se necesita crear la función para interactuar con el usuario
// tambien se necesita para que funcione la version con el metodo then()
function userInteraction(question) {
    return new Promise((res) => {
        userInterface.question(question, (answer) => {
            res(answer);
        });
    });
} 

/* 
//funcion asincronica, principal
async function whatToDoNext () {
    while (true) {
        // estableciendo casos para interactuar con el ususario
        showTasks();
        const action = await userInteraction("¿Que accion desea realizar?: (agregar/borrar/terminar/ver/salir): ")
        switch (action) {
            case 'agregar':
                const description = await userInteraction("Nombre de la tarea que dease agregar: ");
                try {
                    const result = await addTask(description);
                    console.log(result);
                } catch (error) {
                    console.error(error);
                }
                break;
            case 'borrar':
                showTasks()
                const indexDelete = await userInteraction("Indique cual tarea ya fue realizada: ");
                try {
                    const index = parseInt(indexDelete) -1;
                    const result = await deleteTask(index);
                    console.log(result);
                } catch (error) {
                    console.error(error);
                }
                break;
            case 'terminar':
                showTasks()
                const indexComplete = await userInteraction("Indique cuál tarea ya fue realizada: ");
                try {
                    const index = parseInt(indexComplete) - 1;
                    const result = await completeTask(index);
                    console.log(result);
                } catch (error) {
                    console.error(error)
                }
                break;
            case 'ver':
                showTasks()
                break;
            case 'salir':
                console.log("saliendo del programa");
                userInterface.close();
                //saliendo de la funcion asincrona whatToDoNext
                return;
                default:
                    console.log("Solicite una de las acciones en la lista: (agregar/borrar/terminar/ver/salir)");
                break;
        }
    }
} 
*/

// version then() method

function whatToDoNext() {
    while(true){
        showTasks();
        userInteraction("¿Qué acción desea realizar?: (agregar/borrar/terminar/ver/salir) ")
            .then(action => {
                switch(action) {
                    case 'agregar':
                        return userInteraction("nombre de la tarea que desea agregar: ");
                    case 'borrar':
                        showTasks();
                        return userInteraction("indique cual tarea desea borrar: ");
                    case 'terminar':
                        showTasks();
                        return userInteraction("indique el numero de la tarea que ya fue realizada: ");
                    case 'ver':
                        return null
                    case 'salir':
                        console.log("Saliendo del programa");
                        userInterface.close();
                        return Promise.reject("Salida");
                    default:
                        console.log("escriba una opcion valida (agregar/borrar/terminar/ver/salir) ");
                        return null
                }
            })
            .then(description => {
                if (description !== null) {
                    return addTask(description);
                }
            })
            .then(result => {
                if (result) {
                    console.log(result);
                }
            })
            .catch(error => {
                if(error !== "Salida"){
                    console.error(error);
                }
            })
    }
}

//Ejecutar el app
whatToDoNext();