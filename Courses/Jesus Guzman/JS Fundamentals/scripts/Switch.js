let signo = prompt("¿Cual es tu signo zodiacal?")
const MENSAJE = (`Querido ${signo}: En SALUD: Los astros te sonríen. En DINERO: Los astros se ríen`) 

switch (signo) {
  case "acuario":
  case "Acuario":
    console.log(MENSAJE)
    break;
  case "piscis":
  case "Piscis":
    console.log(MENSAJE)
    break
  case "géminis":
  case "Geminis":
  case "Géminis":
  case "geminis":
    console.log(MENSAJE)
    break
  case "tauro":
  case "Tauro":
    console.log(MENSAJE)
    break
  case "Cáncer":
  case "cancer":
  case "cáncer":
  case "Cancer":
    console.log(MENSAJE)
    break
  case "Leo":
  case "leo":
    console.log(MENSAJE)
    break
  default:
    console.log("No existe ese signo")
    break;
}