class Persona {
  constructor(nombre, apellido, altura, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    this.sexo = sexo;
  }
  esAlta() {
    if (this.altura >= 1.8 && this.sexo === "Hombre") {
      console.log(`${this.nombre} ${this.apellido} es alto`);
    } else if (this.altura < 1.8 && this.sexo === "Mujer") {
      console.log(`${this.nombre} ${this.apellido} no es alta`);
    } else if (this.altura < 1.8 && this.sexo === "Hombre") {
      console.log(`${this.nombre} ${this.apellido} no es alto`);
    } else if (this.altura >= 1.8 && this.sexo === "Mujer") {
      console.log(`${this.nombre} ${this.apellido} es alta`);
    }
  }
  saludar(hayFuncion) {
    let {nombre, apellido} = this
    //let nombre = this.nombre
    //let apellido = this.apellido
    console.log(`Hola soy ${nombre} ${apellido}`);
    if (hayFuncion) {
      hayFuncion(nombre, apellido, true)
    }
  }
  esAltaConSwitch() {
    switch (this.altura >= 1.8 && this.sexo) {
      case "Hombre":
        console.log(`${this.nombre} ${this.apellido} es alto`);
        break;
      case "Mujer":
        console.log(`${this.nombre} ${this.apellido} es alta`);
        break;
      default:
        console.log(`${this.nombre} ${this.apellido} no es una persona alta`);
        break;
    }
  }
}
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura, sexo) {
    super(nombre, apellido, altura, sexo);
  }
  saludar(hayFuncionEnDesarrollador) {
    let {nombre, apellido, sexo} = this
    //let nombre = this.nombre
    //let apellido = this.apellido
    switch (sexo) {
      case "Hombre":
        console.log(
          `Hola soy ${nombre} ${apellido} y soy desarrollador`
        );
        break;
      case "Mujer":
        console.log(
          `Hola soy ${nombre} ${apellido} y soy desarrolladora`
        );
        break;
      default:
        console.log(`${nombre} ${apellido} no tiene género :C`);
        break;
    }
    if (hayFuncionEnDesarrollador) {
      hayFuncionEnDesarrollador(nombre, apellido, true, sexo)
    }
  }
}
function responderSaludo(nombre, apellido, esDev, sexo) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev && sexo === "Hombre") {
    console.log(`No sabia que eras desarrollador`)
  } else if (esDev && sexo === "Mujer"){
    console.log(`No sabia que eras desarrolladora`)
  }
}
function responderSaludoDePersonas(nombre, apellido, esPersona) {
  if (esPersona) {
    let profesion = prompt("¿Cual es tu profesion?")
    console.log(`Buen dia ${nombre} ${apellido}`)
    switch (profesion) {
      case profesion:
        if (profesion) {
          console.log(`Tu profesion es ${profesion}`)
          imprimirResultadoPersona(nombre, apellido, profesion)
        } else {
          console.log(`No escribiste tu profesion ${nombre} :C recarga e intentalo de nuevo`)
            let profesion = "no escibiste nada :C"
          imprimirResultadoPersona(nombre, apellido, profesion)  
        }
        break;
      default:
        console.log(`Algo salio mal`)
        break;
    }
  }
}
function imprimirResultadoPersona(nombre, apellido, profesion) {
  alert(`Tu nombre es ${nombre}`)
  alert(`Tu apellido es ${apellido}`)
  alert(`Tu profesion : ${profesion}`)
}
let tirsa = new Persona("Tirsa", "Neftali", 1.65, "Hombre");
let jesus = new Desarrollador("Jesus", "Guzman", 1.87, "Hombre");
let annie = new Desarrollador("Annie", "Vargas", 1.55, "Mujer");
/* --------------------------------- Clases --------------------------------- */
/*jesus.saludar()
jesus.esAltaConSwitch()
annie.saludar()
annie.esAlta()*/
/* ------------------------ Funciones como parametros ----------------------- */
jesus.saludar(responderSaludo)
annie.saludar(responderSaludo)
tirsa.saludar(responderSaludoDePersonas)