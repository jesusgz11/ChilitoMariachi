/*
Pseudocodigo para Factorial de 6 = !6
Una factorial es lo mismo que hacer 
!6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
!12 = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1  O podria ser :
!12 = 12 * 11 * 10 * 9 * 8 * 7 * !6 En esta clase se vera como guardar en cache
*/

function factorial(n) {
  if (!this.cache) {
    this.cache = {} // Se pregunta si existe algo en cache y sino asigna cache como objeto nuevo
  }
  if (this.cache[n]) {
    return this.cache[n] // Si existe algo en la cache solo se retorna ese valor
  }
  if (n === 1) { // Caso Base Recursividad
    return 1
  }
  this.cache[n] = n * factorial(n - 1) // Se gaurda resultado en cache [n] si es objeto se puede agregar atributos
  // 6* factorial (5) = 6 * 5 * factorial (4) = 6 * 5 * 4 * factorial (3) hasta llegar a 1
  return this.cache[n] // Esto es si todavia no existe el calculo de un factorial por primera vez
}
