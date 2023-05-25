const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 30,
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }
}

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

//.................... DESESTRUCTURACIÓN DE OBJECTS.........................

// La desestructuración se usa para extraer datos de un objeto (o arreglo) y poder utilizarlos sin tener que
// escribir tanto código como las const nombre, apellido y poder de las líneas comentadas de arriba.

const {nombre, apellido, poder, edad = 23} = deadpool;
/* se puede desestructurar tanto con const como con let, dependiendo si sabemos si un dato
    cambiaŕa o no su valor.
    
    Luego entre llaves se indican los datos a los que se quiere acceder y a ese scope se le asigna el objeto referente.
    
    Igualmente si hay un dato que no existe en el objeto original pero intencionalmente lo agrego en el deconstructor y
    luego lo utlizo en algún lado, (como en un print), este si podrá usarse. Sin embargo en el caso que el dato si exista
    en el objeto y en el deconstructor yo le aplico otro valor, al momento de usarlo, este mantendrá el valor original del objeto */
console.log(nombre, apellido, poder, edad);

// Se puede usar una desestructuración directamente en los argumentos de la DECLARACIÓN de una función. p.e:
function imprimeHeroe( {nombre, apellido, poder, edad} ){
    nombre = "Pablo"; //  Una diferencia con la desestructuración normal es que en la funciones si podemos cambiar el valor de un dato.
    console.log(nombre, apellido, poder, edad);
}
//  Luego en la inicialización de la función pasamos como parametro el objeto el cual se utilizará para desestrurar y utilizar.
imprimeHeroe(deadpool)



//.................... DESESTRUCTURACIÓN DE ARRAYS.........................//

const heroes1 = ['Deadpool', 'Superman', 'Spiderman'];
const [ h1, h2, h3 ] = heroes1; //  Se asigna un nombre cada elemento en su respectiva posición dentro del arreglo

console.log(h1, h2); //  Puedo utilizar el elemnto que quiera

const heroes2 = ['Deadpool', 'Superman', 'Spiderman', 'Capitan America', 'Batman'];
const [, , k1, , k2] = heroes2; //  Si solo quiero un elemento de una determinada posición, antepongo tantas comas como elementos hayan en el arreglo

console.log(k1, k2);