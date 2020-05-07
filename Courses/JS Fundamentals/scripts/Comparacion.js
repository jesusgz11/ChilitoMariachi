var x = 4;
var y = "4";

console.log(x == y); //True
console.log(x === y); //False


var jesus = {
  nombre: "Jesus"
}

var otraPersona = {
  nombre: "Jesus"
}

console.log(jesus == otraPersona) //False
console.log(jesus === otraPersona) //False

var annie = {
  nombre: "Annie"
}
var alguienMas = annie
 
console.log(alguienMas == annie); // True
console.log(alguienMas === annie); // True

var tirsa = {
  nombre: "Tirsa"
}
var another = {
  ...tirsa
}

console.log(another == tirsa); // False
console.log(another === tirsa); // False

var wendy = {
  nombre: "Wendy"
}
var someone = wendy

console.log(someone.nombre = "Daniel") // Asignar nuevo valor a variable someone
console.log(wendy) // Imprimir valor de wendy que sera ahora Daniel

