/*
Pseudo codigo para Recursividad
Se hara una division por medio de la recursividad 
La recursividad se compone de 2 elementos que son la recursividad
y el caso base que en este caso sera cuando un numero quede negativo ahi ya
no se cumplira la recursividad

13 / 4 = 3.25

Lo que se realizara sera lo siguiente restar 4 a 13
hasta qu llegue a 0 o de un resultado negativo en el caso de que de negativo
se termina la recursion pero si da 0 se hace la cuenta como ejemplo 4 - 4 = 0
se cumple y se suma 1 a la cuenta

13 - 4 = 9  =>  Agregar 1
9 - 4 = 5  => Agregar 1        --------> Recursividad
5 - 4 = 1 => Agregar 1
1 - 4 = -3 => Terminar Recursion   -----> Este es el caso base 
*/

function divisionEntera(dividendo, divisor) {
  if (dividendo < divisor) {
    return 0 // Caso base una vez que se cumpla se termina la recursividad
  }
  return 1 + divisionEntera(dividendo - divisor, divisor) // En caso de que no suma 1 y toma el resultado
  // de dividendo - divisor que seria 9 y luego le quita el divisor que seria 4 volviendo a llamar internamente divisionEntera
}