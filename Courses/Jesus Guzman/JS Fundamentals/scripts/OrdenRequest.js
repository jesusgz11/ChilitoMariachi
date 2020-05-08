const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomain: true }; // Indica que es uan consulta a API externa

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $
  .get(url, options, callback)
  .fail(() => {
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
  });
}

obtenerPersonaje(1, function(data) {
  console.log(`Hola soy ${data.name}`)
  obtenerPersonaje(2, function(data) {
    console.log(`Hola soy ${data.name}`)
    obtenerPersonaje(3, function(data) {
      console.log(`Hola soy ${data.name}`)
      obtenerPersonaje(4, function(data) {
        console.log(`Hola soy ${data.name}`)
        obtenerPersonaje(5, function(data) {
          console.log(`Hola soy ${data.name}`)
          obtenerPersonaje(6, function(data) {
            console.log(`Hola soy ${data.name}`)
            obtenerPersonaje(7, function (data) {
              console.log(`Hola soy ${data.name}`)
            });
          });
        });
      });
    });
  });
});
