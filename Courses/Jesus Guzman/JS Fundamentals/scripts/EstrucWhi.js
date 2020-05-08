var jesus = {
  nombre: "Jesus",
  apellido: "Guzman",
  edad: 24,
  peso: 103
}

var jesusFinal = {...jesus};

console.log(`Al inicio del año ${jesus.nombre} pesaba ${jesus.peso}kg`)
const AUMENTO_PESO = .300
const aumentarDePeso = persona => persona.peso += AUMENTO_PESO
const adelgazar = persona => persona.peso -= AUMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const DIAS = 365;
const META = jesusFinal.peso - 3
let dias = 0

while (jesusFinal.peso > META) {
  if (comeMucho()) {
    //aumentar peso
    aumentarDePeso(jesusFinal)
  }
  if (realizaDeporte()) {
    //adelgazar
    adelgazar(jesusFinal)
  }
  dias+= 1
}
console.log(`Pasaron ${dias} dias hasta que ${jesusFinal.nombre} adelgazó 3kg`)




