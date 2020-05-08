var jesus = {
  nombre: "Jesus",
  apellido: "Guzman",
  edad: 24,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  basquetbolista: true,
  guitarrista: false,
}
function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero) {
    console.log("Ingeniero");  
  } else {
    console.log("No es Ingeniero")
  }
  if (persona.cocinero) {
    console.log("Cocinero");  
  } else {
    console.log("No es Cocinero")
  }
  if (persona.cantante) {
    console.log("Cantante");  
  } else {
    console.log("No es Cantante")
  }
  if (persona.basquetbolista) {
    console.log("Basquetbolista");  
  } else {
    console.log("No es Basquetbolista")
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");  
  } else {
    console.log("No es Guitarrista")
  } 
}
imprimirProfesiones(jesus);

const MAYORIA_EDAD_MEXICO = 18;

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_EDAD_MEXICO

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }  
}

imprimirSiEsMayorDeEdad(jesus);

const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})

const permitirAcceso = (persona) => {
  if (!esMayorDeEdad(persona)) {
    console.log("Acceso Denegado")
  } else {
    console.log("Acceso Permitido")
  }
}
permitirAcceso(jesus);