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

        const empleado = empleados.find( e => e.id === id )?.nombre;
        
        ( empleado )
            ? resolve ( empleado )
            : reject (`No existe el empleado con el id ${id}.`);
    });
}

const getSalario = ( id ) => {    
    
    return new Promise (( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id)?.salario;
        
        ( salario )
            
            ? resolve( salario )
            : reject(`El empleado no tiene un salario asignado ${id}.`);
        
        
    });
} 


//      AWAYT: Siempre tiene que estar dentro de una función o método asincrona.

const getInfoUsuario = async(id) => { //  async() transforma mi función en una función asíncrona que en pocas palabras
    //  lo que hace es retornar implícitamente una promesa.
    
    //  Dentro de esa async function se puede (o no) ejecutar código con un await, la cual espera una promesa.
    try {
        const empleado = await getEmpleado(id); //  Creo una variable, la cual toma el valor de lo que retorna otra función.
        const salario = await getSalario(id);
        return `El salario de ${empleado} es de: $${salario} pesos.`; // Retorna el valor de empleado. El try debe finalizar con un return.      
    } catch (error) {
        throw error;
    }
}

const id = 4 ;

getInfoUsuario( id )
    .then( msg => {
        console.log('TODO BIEN');
        console.log(msg)
    })
    .catch( err => {
        console.log('TODO MAL');
        console.log(err)});

