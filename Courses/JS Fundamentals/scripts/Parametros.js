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

function cumple (persona) {
  //persona.edad = persona.edad + 1
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

cumple(Jesus) //ejecucion
var jesusMasViejo = cumple(Jesus) //guardar valor en variable
