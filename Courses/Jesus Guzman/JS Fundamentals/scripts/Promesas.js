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

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es: ${personaje.name}`)
  }) // then() es la forma de obtener la data cuando se resolvio la promesa exitosamente
  .catch(siHayError) 
  // catch() es por si hay un error en este caso ejecutara la funcion siHayError
  // Donde el error que llega es el id del personaje que se intenta obtener en el reject()
  // Se hace referencia a esa funcion en el catch

for (let i = 1; i < 7; i++) {
  obtenerPersonaje(i)
    .then((personaje) => {
      console.log(`El personaje ${i} es ${personaje.name}`)
    }).catch(siHayError)
  
}
