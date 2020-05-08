var User = {
  nombre: prompt("¿Cual es tu nombre?"),
  apellido: prompt("¿Cual es tu apellido?"),
  edad: parseInt(prompt("¿Que edad tienes?"))
};
var Jesus = {
  nombre: "Jesus",
  apellido: "Guzman",
  edad: 24
};
var Ana = {
  nombre: "Anahi",
  apellido: "Vargas",
  edad: 25
};

function imprimirNombreMayusc (persona) {
  //var nombre = persona.nombre;
  var {nombre} = persona;
  console.log(nombre.toUpperCase());
}
function imprimirNombreYEdad(user) {
  var {nombre} = user;
  var {edad} = user;
  var {apellido} = user;
  console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
}
imprimirNombreYEdad(User)
