function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 *24 //Milisegundos que hay en un dia
  const diferencia = Math.abs(fecha1 - fecha2) //Math abs tranforma a numero positivo
  //si es que la resta da positivo y esto es para obtener los milisegundos entre fechas

  return Math.floor(diferencia / unDia) // Dias que ocurrieron entre las fechas 1 y 2
  //redondeado con floor para abajo
}
const hoy = new Date() //Dia actual
const nacimiento = new Date (1995, 1, 3) //nacimiento

diasEntreFechas(hoy , nacimiento)