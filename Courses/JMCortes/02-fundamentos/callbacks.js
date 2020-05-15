//setTimeout(() => {
//    console.log('hola mundo');
//}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'paquito',
        id
    }
    if (id === 20) {
        callback(`el usuario con id ${id}, no existe en la BD`);
    } else {
        callback(usuario);
    }
}

getUsuarioById(20, (usuario) => {
    console.log('usuario de base de datos', usuario);
});