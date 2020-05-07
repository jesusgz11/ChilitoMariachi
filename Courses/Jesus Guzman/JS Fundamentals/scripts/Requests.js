const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true }; // Indica que es uan consulta a API externa
const responseWithData = function(data) {
  // Funcion que pasara como parametro en get recibe la data y luego accede a data.name
  //console.log(arguments);
  console.log(`Hola soy ${data.name}`);
};

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  switch (id) {
    case id:
      if (id) {
        $.get(url, options, responseWithData);
      } else {
        console.log("No escibiste un numero recarga e intenta de nuevo");
      }
      break;

    default:
      console.log("Algo salio mal intenta de nuevo");
      break;
  }
}
let id = prompt("¿Que número de personaje deseas?");
obtenerPersonaje(id);
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)


