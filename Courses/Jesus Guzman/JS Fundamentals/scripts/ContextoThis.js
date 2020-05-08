const JesusGuzman = {
  nombre: "Jesus",
  apellido: "Guzman"
}
const AnnieVargas = {
  nombre: "Anahi",
  apellido: "Vargas"
}

function Saludar(saludo = "Hola") { //saludo parametro por defecto
  console.log(`${saludo} , soy ${this.nombre}`)
}

const saludarJesus = Saludar.bind(JesusGuzman, "Hola We") 
//Bind devuelve una nueva funcion atando el parametro JesusGuzman al this 
const saludarAnnie = Saludar.bind(AnnieVargas, "Hola Hermosa :33")

//setTimeout(Saludar.bind(JesusGuzman, "Hola We"), 1000); 
//El timeout es para hacer referencia a Saludar y como bind devuelve nueva funcion
//Obtendremos el mismo resultado 

Saludar.call(JesusGuzman, "Hola we")
Saludar.apply(AnnieVargas, ["Hola Hermosa"])