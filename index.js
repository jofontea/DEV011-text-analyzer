//import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//import analyzer from './analyzer.js'; 

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let limpiarBoton = document.getElementById ("botonLimpiar");
limpiarBoton.addEventListener ("click", function() {
let textareas= document.getElementsByName ("texto"); 
for (let i=0; i < textareas.length; i++) {
    textareas[i].value= '';
}
}); 
