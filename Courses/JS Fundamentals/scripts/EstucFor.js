var jesusGuzman = {
  nombre: "Jesus",
  apellido: "Guzman",
  edad: 24,
  peso: 103,
}
var jesusGuzman2 = {
  ...jesusGuzman
}
console.log(`Al inicio del año ${jesusGuzman.nombre} pesaba ${jesusGuzman.peso}kg`)
const AUMENTO_PESO = .200
const aumentarDePeso = persona => persona.peso +=  AUMENTO_PESO
const adelgazar = persona => persona.peso -= AUMENTO_PESO

const DIAS = 365;
for (let i = 1; i <= DIAS; i++) {
  let random = Math.random();
  if (random < 0.25) {
    //aumentar peso
    aumentarDePeso(jesusGuzman2)
  } else if(random < 0.5){
    //adelgazar
    adelgazar(jesusGuzman2)
}
}
console.log(`Al final del año ${jesusGuzman2.nombre} pesa ${jesusGuzman2.peso.toFixed(1)}kg`)




