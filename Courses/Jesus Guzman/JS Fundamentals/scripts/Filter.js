let jesus = {
  nombre: "Jesus",
  apellido: "Guzman",
  altura: 1.87
}
let annie = {
  nombre: "Anahi",
  apellido: "Vargas",
  altura: 1.58
}
let tirsa = {
  nombre: "Tirsa",
  apellido: "Gutierrez",
  altura: 1.67
}
let wendy = {
  nombre: "Wendy",
  apellido: "Echaverria",
  altura: 1.81
}
let fer = {
  nombre: "Fernanda",
  apellido: "Palacios",
  altura: 1.60
}
let tavo = {
  nombre: "Octavio",
  apellido: "Torres",
  altura: 1.65
}
let personas = [
  jesus,
  annie,
  tirsa,
  wendy,
  fer,
  tavo
]
let esAlta = ({altura}) => altura > 1.8
let personasAltas = personas.filter(esAlta)
let personasAltas2 = personas.filter(function (persona) {
  return persona.altura > 1.8
})
console.log(personasAltas)
console.log(personasAltas2)

/* -------------------------------- Ejercicio ------------------------------- */

let esBaja = ({altura}) => altura < 1.8
let personasBajas = personas.filter(esBaja)
console.log(personasBajas)

/* ------------------------ Ejercicio Diferente Forma ----------------------- */

let estaturaBaja = persona => persona.altura < 1.8
let personasEstaturaBaja = personas.filter(estaturaBaja)
console.log(personasEstaturaBaja)
