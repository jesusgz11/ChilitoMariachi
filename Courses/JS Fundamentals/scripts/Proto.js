function heredaDe(prototipoHijo, prototipoPadre) { // Los parametros son Funciones por eso tienen un Prototype
  let fn = function () {} // Asignar Prototipo al Prototipo Hijo (Esta Funcion no hace nada)
  fn.prototype = prototipoPadre.prototype // Aqui se le asigna a la funcion el Prototipo Padre
  prototipoHijo.prototype = new fn // Aqui haremos que esta funcion sea un nuevo prototype para no pisar al Padre
  prototipoHijo.prototype.constructor = prototipoHijo // En esta linea se crea el constructor de este prototype sino usa el del Padre
}
function Persona(nombre, apellido, altura, sexo) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.sexo = sexo
}
/* -------------------------------- Ejercicio ------------------------------- */
Persona.prototype.esAlta = function () {
  if (this.altura >= 1.8 && this.sexo === "Hombre") {
    console.log(`${this.nombre} ${this.apellido} es alto`)
  } else if (this.altura < 1.8 && this.sexo === "Mujer") {
    console.log(`${this.nombre} ${this.apellido} no es alta`)
  } else if (this.altura < 1.8 && this.sexo === "Hombre") {
    console.log(`${this.nombre} ${this.apellido} no es alto`)
  } else if(this.altura >= 1.8 && this.sexo === "Mujer") {
    console.log(`${this.nombre} ${this.apellido} es alta`)
  }
  
}
/* -------------------------------------------------------------------------- */
Persona.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}
let jesus = new Persona("Jesus", "Guzman", 1.87, "Hombre")
let annie = new Persona("Anahi", "Vargas", 1.60, "Mujer")
let wendy = new Persona("Wendy", "Echevarria", 1.81, "Mujer")
let rene = new Persona("Rene", "Leyva", 1.60, "Hombre")

/* ----------------------------- Ejemplo Switch ----------------------------- */
Persona.prototype.esAltaConSwitch = function () {
  switch (this.altura >= 1.8 && this.sexo) {
    case "Hombre":
      console.log(`${this.nombre} ${this.apellido} es alto`)
      break;
    case "Mujer":
      console.log(`${this.nombre} ${this.apellido} es alta`)
      break;
    default:
      console.log(`${this.nombre} ${this.apellido} no es una persona alta`)
      break;
  }
  
}
function Desarrollador(nombre, apellido, altura, sexo) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.sexo = sexo
}
heredaDe(Desarrollador, Persona)
Desarrollador.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}
/* -------------------------------- Herencia -------------------------------- */
let paco = new Desarrollador("Francisco", "Guzman", 1.87, "Hombre") // Creacion de Desarrollador
let lupe = new Desarrollador("Guadalupe", "Vargas", 1.60, "Mujer") // Creacion de Desarrolladora
let fer = new Persona("Fernanda", "Placios", 1.62, "Mujer") // Creacion de Persona 

/* -------------------------------------------------------------------------- */
jesus.saludar()
jesus.esAlta()
annie.esAlta()
wendy.esAlta()
rene.esAlta()
/* -------------------------------------------------------------------------- */
jesus.esAltaConSwitch()
annie.esAltaConSwitch()
wendy.esAltaConSwitch()
rene.esAltaConSwitch()
/* -------------------------------------------------------------------------- */
paco.saludar()
fer.saludar()


