const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`; // URL
const options = { crossDomain: true }; // Indica que es uan consulta a API externa
const responseWithData = function (data) { // Funcion que pasara como parametro en get recibe la data y luego accede a data.name
  //console.log(arguments);
  console.log(`Hola soy ${data.name}`);
};
const PLANETS_URL = "planets/:id"
const tatooineUrl = `${API_URL}${PLANETS_URL.replace(":id", "1")}`;
const responseWithDataPlanets = function (dataPlanets) { // Funcion que pasara como parametro en get recibe la data y luego accede a data.name
  //console.log(arguments);
  console.log(`Planeta: ${dataPlanets.name}`);
  console.log(`Clima: ${dataPlanets.climate}`);
};

$.get(lukeUrl, options, responseWithData);
$.get(tatooineUrl, options, responseWithDataPlanets);

