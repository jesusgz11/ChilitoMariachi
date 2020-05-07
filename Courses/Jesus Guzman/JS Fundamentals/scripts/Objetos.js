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

function imprimirNombreMayusc ({nombre}) {
  console.log(nombre.toUpperCase());
}
imprimirNombreMayusc(Jesus)
imprimirNombreMayusc(Ana)
imprimirNombreMayusc({nombre: "Wendy"})