const Jesus = {
  nombre: "Jesus",
  apellido: "Guzman",
  edad: 24
};

//const cumple = (persona) => persona.edad++
const cumple = persona => ({
  ...persona,
  edad: persona.edad + 1
}); // Creacion de nuevo Objeto en memoria
