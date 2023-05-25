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

//...................... SOBRE LOS CALLBACKS..........................//

/*  Cuando una función utiliza un callback, al momento de declarar esa función, en los parámetro solo se nombre
    uno de los argumentos como "callback" pero lo que realiza el callback de por sí no se declara en esa misma
    función declarada, sino que se especifica cuando voy a utilizar esa función con "parametro custom", es decir,
    que se escribe el cuerpo de lo que realizá ese callback cuando se inicializa esa función como si fuera uno
    de los parámetrosdentro del los parentesis  */

const getEmpleado = ( id, callback ) => { // Parámetros son un id y un callback
    const empleado = empleados.find( e => e.id === id ) // Recorro el arreglo para buscar la condición
    if (empleado){ //  Si la condición anterior es true (o existe), entonces ejecuta el bloque del if
        callback(null, empleado);
    } else {  // De caso contrario si es false, ejecuta el else
        callback(`Empleado con el id ${id} no existe`);
    }
}

const getSalario= ( id, callback ) => {
    const salario = salarios.find( s => s.id === id)
    if ( salario ) {
        callback(null, salario);
    } else {
        callback(`Id ${id} no existe`);
    }
}

const id = 1;

getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    } else {
        console.log('El empleado existe');
        console.log(empleado);
    }
});


getSalario( id, (err, salario) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    } else {
        console.log(`El salario es de ${salario.salario}`);
        console.log(salario);
    }
})