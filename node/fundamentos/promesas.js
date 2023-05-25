

const empleados = [
    {
        id: 1,
        nombre: "Pablo"
    },
    {
        id: 2,
        nombre: "Ignacio"
    },
    {
        id: 3,
        nombre: "Aston"
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3,
        salario: 3000
    },
];

/*  const getEmpleado = ( id, callback ) => { // Parámetros son un id y un callback
    const empleado = empleados.find( e => e.id === id ) // Recorro el arreglo para buscar la condición
    if (empleado){ //  Si la condición anterior es true (o existe), entonces ejecuta el bloque del if
        callback(null, empleado);
    } else {  // De caso contrario si es false, ejecuta el else
        callback(`Empleado con el id ${id} no existe`);
    }
}      */

const getEmpleado = ( id ) => {
    
    
    return new Promise (( resolve, reject ) => {  /*   Las promesas internamente ejecutan un callback
    A ese callback se le envían dos argumentos, los cuales son 
    el resolve y el reject
    
    El resolve es (otro) callback que se llamará cuando todo se hace correctamente y el reject es algo que vamos a ejecutar
    en caso que ocurra un error. */

    const empleado = empleados.find( e => e.id === id )
    if( empleado ){
        resolve( empleado );
    } else {
        reject(`No existe el empleado con el id ${id}.`)
    }

    /* Otra forma de escribir el if de arriba es usando ternario. 
    
    p.e. 
    
    ( empleado )
        ? resolve ( empleado )
        : reject (`No existe el empleado con el id ${id}.`); <------- Debe finalizar con un punto y coma     */
    });
}

const getSalario = ( id ) => {    
    
    return new Promise (( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id).salario;
        
        (salario)
            
            ? resolve(salario)
            : reject(`No existe un usuario con ese id.`);
        
        
    });
} 

getEmpleado(3)
    .then(empleado => console.log( empleado ))
    .catch( err => console.log( err ))

getSalario(3)
    .then(salario => console.log( salario ))
    .catch( err => console.log( err )) 

