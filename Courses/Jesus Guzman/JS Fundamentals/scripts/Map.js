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
const pasarAlturaACms = persona => ({
  // persona.altura = persona.altura * 100
  ...persona,
  altura: persona.altura * 100
})
let personasCMS = personas.map(pasarAlturaACms)
console.log(personasCMS)
