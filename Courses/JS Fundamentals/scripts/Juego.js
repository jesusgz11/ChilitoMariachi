const btnEmpezar = document.getElementById("btnEmpezar");
const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const ULTIMO_NIVEL = 10

class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar();
    this.generarSecuencia();
    setTimeout(this.siguienteNivel, 500);
  }
  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    /* Atributo donde se genera un array nuevo
      Donde array(ULTIMO_NIVEL) son el numero que elementos deseados; fill es para poner sus elementos en 0
      Se usa fill por que map no funciona sino se tienen elementos definidos dentro de array
      Por eso 0 aqui en lo primero se tiene un array con 10 elementos con valor 0
      Despues se creara un nuevo array con map donde n sera el 0 de fill donde se retornara
      Un math.random tiene valor entre 0 y 1 por eso al multiplicarlo por 4 se obtienen valores
      De 0 a 4 pero no sera 4 max sera 3.9 y para redondear eso se una Math.floor*/
  }
  inicializar() {
    this.toggleBtnEmpezar()
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
      /*JS nos permite que en ves de poner en un objeto el atributo celeste: celeste con el
      valor de la const celeste solo asignamos la const celeste; en el metodo toggleBtn
      empezar sera para hacer como un switch cada que perdamos, o ganemos se vuelva a mostrar
      el boton para iniciar un nuevo juego
      */
    }
    this.elegirColor = this.elegirColor.bind(this) 
    /*Se hace bind para la clase Juego cuando se ejecute el metodo elegirColor y no tome el div*/
  }
  toggleBtnEmpezar() {
    if (btnEmpezar.classList.contains("hide")) {
      btnEmpezar.classList.remove("hide");
    } else {
      btnEmpezar.classList.add("hide");
    }
    /*Funcion donde se hace el switch del boton cuando ganas o pierdes .contains significa
    si tiene es clase cuando se inicialize de nuevo por que gano o perdio le quita esa class 
    y si no la tiene solo se la agrega que es cuando clickeamos boton*/
  }
  siguienteNivel () {
    this.subnivel = 0
    this.iluminarSecuencia()
    this.agregarEventosClick()
    /*Esta funcion lo que hace es llamar a iluminarSecuencia asi cada que lleguemos
    a un nuevo nivel se iluminara una nueva secuencia de colores tambien se llamara a 
    agregarEventosClick para saber a que clicks le da el usuario y saber si siguen la 
    secuencia que se le presento; el subnivel es para ir incrementando cuando el usuario
    toque correctamente y asi pase de nivel recordando que this.subnivel sera atributo del
    objeto Juego de esta manera se hara el if en el metodo elegir color y si es correcto 
    dependiendo el nivel ira creciendo para que el usuario pueda darle clicks a los botones
    */
  }
  transformarNumeroAColor (numero) {
    switch (numero) {
      case 0:
        return "celeste"
      case 1:
        return "violeta"
      case 2:
        return "naranja"
      case 3:
        return "verde"
    }
    /*Esta funcion transforma un numero del array de secuencia a un color
    recordando que el array vienen 10 numeros de 0 a 3 por eso se hace el switch 
    donde para cada nuemero se le asignara un color
    */
  }
  transformarColorANumero (color) {
    switch (color) {
      case "celeste":
        return 0
      case "violeta":
        return 1
      case "naranja":
        return 2
      case "verde":
        return 3
    }
    /*Esta funcion transforma un color a numero del array para ver si es correcta la seleccion
    del usuario
    */
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i])
      setTimeout(() => {
        this.iluminarColor(color)
      }, 1000 * i);
      
    }
    /*Esta funcion va a recorrer el array de generar secuencia hasta el nivel que este el usuario
    entonces se hace un ciclo for aqui se obtiene el color que se tiene que iluminar y luego 
    llamar a una funcion para que lo ilumine en la const color se llama el metodo transformar
    numero a color y de ahi se le pasa el numero que recibe como parametro pero sera el i
    del ciclo for por eso se declara asi entre [] despues se le pasa la funcion iluminarColor
    que es el color que tiene que iluminar ya que tranformo los numeros en colores
    El problema de hacer solo el for con la funcion iluminar colo es que se ejecutara rapidisimo
    por eso esa funcion tambien le daremos un set timeout por que conforme pasa el nivel
    se iluminan despues de cierto tiempo por eso el *i para qeu cuando empiece sea de 0 pero cuando
    pase de nivel se vaya multiplicando el tiempo por la variable i y asi sea mas facil que 
    el usuario vea un secuencia

    Nota: Lo mejor en los ciclos for es usar let seguido de const por que si se ocupa var
    se pisara el valor del color  asi se iluminaran cuando pasemos de nivel n veces el mismo color 
    */
  }
  iluminarColor (color) {
    this.colores[color].classList.add("light")
    setTimeout(() => {
      this.apagarColor(color)
    }, 350);
    /*Esta funcion llama los colores que estan en el DOM que serian las const pero que vienen 
    en el constructor del objeto this.colores recordando que los [] son para indicar subindices
    esto es para acceder a una posicion de un array el classList es para obtener las clases
    de estilos que se tienen y el add es para agregar una nueva clase css despues se usa un 
    set timeout para que se apague esa iluminacion 
    */
  }
  apagarColor (color) {
    this.colores[color].classList.remove("light")
    /*Esta funcion solo apagara el color despues de que pase el timeout*/
  }
  agregarEventosClick () {
    this.colores.celeste.addEventListener("click", this.elegirColor)
    this.colores.naranja.addEventListener("click", this.elegirColor)
    this.colores.violeta.addEventListener("click", this.elegirColor)
    this.colores.verde.addEventListener("click", this.elegirColor)

    /*Esta funcion crea un manejador de eventos que se toman los colores y luego el color;
    despues se ejecuta un manejador de eventos addEventListener click y despues el
    navegador indica que funcion debe de ejecutar en base al click que sera elegirColor.
    Habra un problema con el */
  }
  eliminarEventosClick () {
    this.colores.celeste.removeEventListener("click", this.elegirColor)
    this.colores.naranja.removeEventListener("click", this.elegirColor)
    this.colores.violeta.removeEventListener("click", this.elegirColor)
    this.colores.verde.removeEventListener("click", this.elegirColor)

    /*Esta funcion elimina los eventos del click cuando el usuario pasa de nivel y asi despues 
    se vuelven a llamar cuando pase de nivel */
  }
  elegirColor (event) {
    const nombreColor = event.target.dataset.color
    const numeroColor = this.transformarColorANumero(nombreColor)
    this.iluminarColor(nombreColor)
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++ // Incremento de subnivel el if indica
      // que si es igual el numeroColor al de la secuencia en el subnivel que se encuentre
      // siempre empieza en 0 el subnivel y sirve para que cuando seleccione correctamente
      // se incremente y de ahi sale el oro if para que si el subnivel alcanza el valor del
      // nivel se cambie el nivel 
      if (this.subnivel === this.nivel) {
        this.nivel++
        this.eliminarEventosClick() // Para que ya no pueda dar mas clicks el usuario al pasar
        //de nivel
        if (this.nivel === (ULTIMO_NIVEL + 1)) {
          //Gano
          this.ganoElJuego()
        } else {
          setTimeout(this.siguienteNivel, 1500);
          // Tendremos error por que el this cuando pasemos de nivel
          // sera diferente por eso tenemos que usar bind en inicializar
        }
      }
    } else {
      // perdio
      this.perdioElJuego()
    }
    //console.log(event)
    //console.log(this)
    /*Cuando se usan manejadores de eventos se tiene que pasar como parametro el evento
    que seria event donde event sera el click al imprimir el click se peude ver en target
    donde se dio el click aqui JS perdera el concepto por eso al hacer la prueba de quien
    es this en consola saldra el div que se hace click; para decirle a JS que queremos 
    que this no sea el div sino que sea el new Juego se tiene que hacer un bind puede 
    ser directo en this.elegir color o en inicializar para que asi no tome el div 
    sino tome el this del new Juego.
    
    Esta funcion transforma la seleccion del usuario primero la guarda en una cosnt 
    que viene del dataset del evento click para ver si es correcto para hacer esto
    debemos transformar el color a numero para ver si es igual al array de la secuencia 
    y asi pasar de nivel
    */
  }
  ganoElJuego() {
    swal({
      icon: "success",
      title: "Felicitaciones",
      text: `Completaste el nivel ${ULTIMO_NIVEL}`,
      closeOnClickOutside: false,
    })
      .then(this.inicializar)
    /*Llamado a gano el juego muestra modal con titulo y mensaje; desues
    se ejecuta una promesa .then para volver a iniciar el juego se puede
    hacer arrow function o dejarlo asi pero tenemos que hacer bind */
  }
  perdioElJuego() {
    swal({
      icon: "error",
      title: "Perdiste",
      text: "Vuelve a intentarlo",
      closeOnClickOutside: false,
    })
      .then(() => {
        this.eliminarEventosClick()
        this.inicializar()
      })
    /*Llamado a perdio el juego muestra modal con titulo y mensaje; desues
    se ejecuta una promesa .then para volver a iniciar el juego y eliminar clicks*/
  }
}
const empezarJuego = () => {
  const juego = new Juego(); // Para ver la secuencia cambiar const por window.juego y en consola
};
