const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true }; // Indica que es una consulta a API externa

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
    $
    .get(url, options, function (data) {
      resolve(data)
    }) // Ejecutar callback directamente hay que entender que el resolve(data)
        // No se ejecutara hasta que el .get sea exitoso y data es el objeto 
        // Que llega por jQuey donde esta el name del personaje recordando que 
        // Llegan Data, responseText, xhrRequest en el get 

    .fail(() => reject(id)) // Aqui solo se rechaza la promesa y se le pasa el id de
    // El personaje que se iba a obtener
  })
  
}
function siHayError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`)
}
/* --------------------- Multiples Promesas En Paralelo --------------------- */
let arrayIds = [1, 2, 3, 4, 5, 6, 7]
/*let promesasEnNuevoArray2 = arrayIds.map(function (id) {
  obtenerPersonaje(id)
})*/
let promesasEnNuevoArray = arrayIds.map(id => obtenerPersonaje(id))
Promise
  .all(promesasEnNuevoArray)
  .then(personajes => console.log(personajes))
  .catch(siHayError)
/* --------------------------- Encadenar Promesas --------------------------- */
/*obtenerPersonaje(1)
  .then((personaje) => {
    console.log(`El personaje 1 es: ${personaje.name}`)
    return obtenerPersonaje(2)
  })
  .then((personaje) => {
    console.log(`El personaje 2 es: ${personaje.name}`)
    return obtenerPersonaje(3)
  })
  .then((personaje) => {
    console.log(`El personaje 3 es: ${personaje.name}`)
    return obtenerPersonaje(4)
  })
  .then((personaje) => {
    console.log(`El personaje 4 es: ${personaje.name}`)
    return obtenerPersonaje(5)
  })
  .then((personaje) => {
    console.log(`El personaje 5 es: ${personaje.name}`)
  })
  .catch(siHayError)*/ 
