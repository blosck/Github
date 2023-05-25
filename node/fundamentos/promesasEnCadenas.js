

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
        id: 3
    },
];

const getEmpleado = ( id ) => {
    
    
    return new Promise (( resolve, reject ) => {  

        const empleado = empleados.find( e => e.id === id ).nombre;
        
        ( empleado )
            ? resolve ( empleado )
            : reject (`No existe el empleado con el id ${id}.`);
    });
}

const getSalario = ( id ) => {    
    
    return new Promise (( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id).salario;
        
        ( salario )
            
            ? resolve( salario )
            : reject(`No existe un usuario con ese id.`);
        
        
    });
} 

const id = 2;

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => {
        console.log('El empleado', nombre, 'tiene un salario de', salario)
    })
    .catch( err => console.log( err ))  

