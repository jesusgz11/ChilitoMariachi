let jesus = {
  nombre: "Jesus",
  apellido: "Guzman",
  altura: 1.87,
  libros: 50
}
let annie = {
  nombre: "Anahi",
  apellido: "Vargas",
  altura: 1.58,
  libros: 327
}
let tirsa = {
  nombre: "Tirsa",
  apellido: "Gutierrez",
  altura: 1.67,
  libros: 375
}
let wendy = {
  nombre: "Wendy",
  apellido: "Echaverria",
  altura: 1.81,
  libros: 70
}
let fer = {
  nombre: "Fernanda",
  apellido: "Palacios",
  altura: 1.60,
  libros: 180
}
let tavo = {
  nombre: "Octavio",
  apellido: "Torres",
  altura: 1.65,
  libros: 200
}
let personas = [
  jesus,
  annie,
  tirsa,
  wendy,
  fer,
  tavo
]
let acumulador = 0
for (let i = 0; i < personas.length; i++) {
   acumulador = acumulador + personas[i].libros;
  
}
console.log(`Total de libros: ${acumulador}`)

const reducer = (acum, {libros}) => acum + libros
const TOTAL_DE_LIBROS = personas.reduce(reducer, 0)
console.log(`Total de libros con reduce: ${TOTAL_DE_LIBROS}`)