 /*  Un callback es una función que se pasa como parámetro/argumento a otra función y que se ejecutará en algún momento de la
    ejecución de la misma funciuón que la utiliza. Un ejemplo es el método setTimeout, la cual su primer parámetro en una función,
    y su segundo parámetro es el tiempo en milisegundo en el cual se ejecutará "ese callback".    */

setTimeout( () => {console.log('Ya pasaron 3 segundo')}, 3000)

    
//  Otro ejemplo:
const getUserById = ( id, callback ) => {

    const user = {
        id,  //  Cuando el nombre de una propiedad y el valor a asignar son lo mismo, se puede declarar de esta forma
        nombre: 'Pablo'
    }

    setTimeout( () => {callback(user)}, 1200)
}

getUserById( 10, ( usuario ) => {
    console.log( usuario);
    console.log( usuario.id);
    console.log( usuario.nombre);
})

//getUserById(2)