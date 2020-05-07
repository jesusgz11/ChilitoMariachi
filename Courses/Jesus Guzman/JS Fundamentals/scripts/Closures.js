function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}
const saludoArgentino = crearSaludo("Che");
const saludoMexicano = crearSaludo("We");
const saludoColombiano = crearSaludo("Amigo");

saludoArgentino("Jesus") //Hola Jesus Che
saludoMexicano("Jesus") //Hola Jesus We
saludoColombiano("Jesus") //Hola Jesus Amigo
/*En este caso saludoArgentino,Mexicano y Colombiano pasan a ser el parametro 
en la funcion anonima como nombre y por eso JS recuerda cada nombre */

