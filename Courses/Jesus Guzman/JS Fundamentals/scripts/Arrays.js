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
  altura: 1.78
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
console.log(personas) // Imprimir personas
console.log(personas[0]) // Acceder a el primer valor dentro de array
console.log(personas[0].altura) // Acceder a la altura de objeto 1
console.log(personas[0]["altura"]) // Acceder a la altura de otra manera

/* ----------------------------- Recorrer Array ----------------------------- */
for (let i = 0; i < personas.length; i++) {
  const persona = personas[i]; // Donde i sera el indice que se accede en el ciclo for
  console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

