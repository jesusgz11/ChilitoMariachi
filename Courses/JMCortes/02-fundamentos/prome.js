let empleados = [{
    id: 1,
    nombre: 'Melisa'
}, {
    id: 2,
    nombre: 'fer'
}, {
    id: 3,
    nombre: 'sara'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 1000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`no existe con el id ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`no se encontro un salario para el empleado:${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(3).then(empleado => {

        return getSalario(empleado);


    })
    .then(resp => {
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });